import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

interface RHFTextFieldProps {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
}

export default function RHFTextField({
  name,
  label,
  type = "text",
  multiline = false,
}: RHFTextFieldProps) {
  const { control } = useFormContext(); // Hook into the form context

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          type={type}
          error={!!error}
          helperText={error ? error.message : ""}
          multiline={multiline}
        />
      )}
    />
  );
}
