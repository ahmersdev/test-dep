"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography, Button } from "@mui/material";
import RHFTextField from "@/components/RHFTextField";
import { useEffect, useState } from "react";

export default function KYCForm() {
  // Define the default values for the KYC fields
  const methods = useForm({
    defaultValues: {
      investmentPlanning: "",
      employmentStatus: "",
      employerName: "",
      employerAddress: "",
      countryOfEmployment: "",
      jobTitle: "",
      source: "",
      isKYCVerified: false, // default set to false, user can modify
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  
  useEffect(() => {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (storedToken) {
      setToken(storedToken);
    } else {
      router.push("/sign-in"); // Redirect if no token is found
    }
  }, [router]);

  // If the token hasn't been loaded yet, return null to prevent rendering
  if (!token) return null;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("https://backend.sharesbycoco.com/api/users/add-kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use token retrieved from localStorage
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        router.push("/dashboard");
      } else {
        alert(result.message || "KYC submission failed");
      }
    } catch (error) {
      console.error("KYC error: ", error);
      alert("An error occurred during the KYC submission.");
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
          Complete KYC
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* Employment Status */}
              <Grid item xs={12}>
                <RHFTextField
                  name="employmentStatus"
                  label="Employment Status"
                />
              </Grid>

              {/* Investment Planning */}
              <Grid item xs={12}>
                <RHFTextField
                  name="investmentPlanning"
                  label="Investment Planning"
                />
              </Grid>

              {/* Employer Name */}
              <Grid item xs={12}>
                <RHFTextField name="employerName" label="Employer Name" />
              </Grid>

              {/* Employer Address */}
              <Grid item xs={12}>
                <RHFTextField name="employerAddress" label="Employer Address" />
              </Grid>

              {/* Country of Employment */}
              <Grid item xs={12}>
                <RHFTextField
                  name="countryOfEmployment"
                  label="Country of Employment"
                />
              </Grid>

              {/* Job Title */}
              <Grid item xs={12}>
                <RHFTextField name="jobTitle" label="Job Title" />
              </Grid>

              {/* Source */}
              <Grid item xs={12}>
                <RHFTextField name="source" label="Source (e.g., LinkedIn)" />
              </Grid>

              {/* KYC Verified Checkbox (boolean) */}
              <Grid item xs={12}>
                <RHFTextField
                  name="isKYCVerified"
                  label="KYC Verified"
                  type="checkbox"
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? "Submitting KYC..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}
