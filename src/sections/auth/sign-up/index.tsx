"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import RHFTextField from "@/components/RHFTextField";
import { useState } from "react";

export default function SignUp() {
  const methods = useForm({
    defaultValues: { email: "", fullName: "" },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("http://137.184.99.151:4000/api/users/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        // Redirect to verify email page
        router.push("/verify-email");
      } else {
        alert(result.message || "Account creation failed");
      }
    } catch (error) {
      console.error("Signup error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box maxWidth={"sm"} width={"100%"} p={3}>
        <Typography variant={"h3"} mb={2}>Sign Up</Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name="fullName" label="Full Name" />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth type="submit" variant="contained" disabled={loading}>
                  {loading ? "Signing up..." : "Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <Typography mt={2} textAlign="center">
          Already have an account? <Link href="/sign-in">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}
