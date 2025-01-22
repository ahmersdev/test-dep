"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, Button } from "@mui/material";
import RHFTextField from "@/components/RHFTextField";
import { useState } from "react";

export default function VerifyEmail() {
  const methods = useForm({
    defaultValues: { email: "", otp: "" },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("https://backend.sharesbycoco.com/api/users/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        // Redirect to create password page
        router.push("/create-password");
      } else {
        alert(result.message || "Email verification failed");
      }
    } catch (error) {
      console.error("Verification error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box maxWidth={"sm"} width={"100%"} p={3}>
        <Typography variant={"h3"} mb={2}>Verify Email</Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField name="otp" label="OTP" />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth type="submit" variant="contained" disabled={loading}>
                  {loading ? "Verifying..." : "Verify Email"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}
