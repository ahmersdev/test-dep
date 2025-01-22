"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import RHFTextField from "@/components/RHFTextField";
import { useState } from "react";

export default function SignIn() {
  const methods = useForm({
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("https://backend.sharesbycoco.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        // Store token in localStorage
        localStorage.setItem("authToken", result.token);

        // Optionally, store the user info in localStorage
        localStorage.setItem("userFullName", result.fullName);

        // Fetch profile using the token to check if the user is fully registered
        const profileRes = await fetch(
          "https://backend.sharesbycoco.com/api/users/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${result.token}`,
            },
          }
        );

        const profile = await profileRes.json();

        // Make sure profileRes is OK before proceeding
        if (profileRes.ok) {
          console.log("User profile data: ", profile.data);

          // Set user details in localStorage
          localStorage.setItem("userFullName", profile.data.fullName);

          // Check if the user is fully registered (KYC done)
          if (profile.data.isFullyRegistered) {
            // Redirect to dashboard if KYC is complete
            router.push("/dashboard");
          }
        } else {
          alert(profile.message || "Error fetching profile data");
        }
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box maxWidth={"sm"} width={"100%"} p={3}>
        <Typography variant={"h3"} mb={2}>
          Sign In
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RHFTextField name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <Typography mt={2} textAlign="center">
          Don&apos;t have an account? <Link href="/auth/sign-up">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
}
