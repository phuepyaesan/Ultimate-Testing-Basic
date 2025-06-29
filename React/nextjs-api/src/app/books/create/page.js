"use client";

import { TextField, Typography, Box, Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("title is required"),
  author: yup.string().required("author is required"),
  published_year: yup.number().required("year is required"),
});

export default function CreateBook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const onSubmit = async (formData) => {
    try {
      console.log("formData", formData);
      const bodyData = {
        title: formData.title,
        author: formData.author,
        published_year: formData.published_year,
      };
      const response = await axios.post("/api/books", bodyData);
      reset();
      console.log("Successfully Saved.");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box
      component="form"
      width={"60%"}
      padding={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2}>
        <Typography>Create A Book </Typography>
        <TextField
          label="Book Title"
          fullWidth
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          label="Author"
          fullWidth
          {...register("author")}
          error={!!errors.author}
          helperText={errors.author?.message}
        />
        <TextField
          label="Published Year"
          fullWidth
          {...register("published_year")}
          error={!!errors.published_year}
          helperText={errors.published_year?.message}
        />
        <Button type="submit" variant="contained">
          Save Data
        </Button>
      </Stack>
    </Box>
  );
}
