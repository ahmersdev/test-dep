"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, Button } from "@mui/material";
import RHFTextField from "@/components/RHFTextField";
import { useState } from "react";

export default function CreatePassword() {
  const methods = useForm({
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("http://137.184.99.151:4000/api/users/create-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        // Redirect to sign-in page after successful password creation
        router.push("/sign-in");
      } else {
        alert(result.message || "Password creation failed");
      }
    } catch (error) {
      console.error("Password creation error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box maxWidth={"sm"} width={"100%"} p={3}>
        <Typography variant={"h3"} mb={2}>Create Password</Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField name="password" label="Password" type="password" />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth type="submit" variant="contained" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}
