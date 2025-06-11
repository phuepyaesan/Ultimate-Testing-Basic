//components/BasicForm/validationSchema.js
import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .positive()
    .integer()
    .max(100, "Age must be less than 100")
    .required("Age is required"),
  role: yup.string().required("Role is required"),
});
