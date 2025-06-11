"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText,
} from "@mui/material";
import { schema1 } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
const CITYS = [
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
  { value: "mawlamyine", label: "Mawlamyine" },
  { value: "hpaan", label: "Hpaan" },
];
const TOWNSHIPS = [
  { value: "chaungzon", label: "Chaungzon" },
  { value: "mon", label: "Mon" },
  { value: "karen", label: "Karen" },
  { value: "chin", label: "Chin" },
];
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema1),
    defaultValues: {
      city: "",
      township: "",
    },
  });
  const onSubmit = (formData) => {
    console.log("formData", formData);
    console.log("Name Input Data", formData.name);
    reset();
  };
  return (
    <div>
      <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          fullWidth
          sx={{ mb: 2 }}
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Email"
          fullWidth
          sx={{ mb: 2 }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Phone"
          fullWidth
          sx={{ mb: 2 }}
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextField
          label="Address"
          fullWidth
          sx={{ mb: 2 }}
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.city}>
          <InputLabel id="city-label">City</InputLabel>
          <Controller
            name="city"
            control={control}
            error={!!errors.city}
            render={({ field }) => (
              <Select
                {...field}
                labelId="city-label"
                label="City"
                value={field.value || ""} //Ensure Controller
              >
                {CITYS.map((city, index) => (
                  <MenuItem key={index} value={city.value}>
                    {city.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <FormHelperText>{errors.city?.message}</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.township}>
          <InputLabel id="township-label">Township</InputLabel>
          <Controller
            name="township"
            control={control}
            error={!!errors.township}
            render={({ field }) => (
              <Select
                {...field}
                labelId="township-label"
                label="Township"
                value={field.value || ""} //Ensure Controller
              >
                {TOWNSHIPS.map((township, index) => (
                  <MenuItem key={index} value={township.value}>
                    {township.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />

          <FormHelperText>{errors.township?.message}</FormHelperText>
        </FormControl>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </div>
  );
}
