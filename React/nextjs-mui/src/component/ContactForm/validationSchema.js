//components/BasicForm/validationSchema.js
import * as yup from "yup";

export const schema1 = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .number()
    .positive()
    .integer()
    .max(11, "Phone must be less than 12")
    .required("Phone is required"),
  city: yup.string().required("City is required"),
  township: yup.string().required("Township is required"),
});
