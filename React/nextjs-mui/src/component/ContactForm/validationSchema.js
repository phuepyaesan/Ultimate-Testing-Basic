//components/BasicForm/validationSchema.js
import * as yup from "yup";
// const phoneRegExp = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10,14}$/;
const mmPhoneRegExp = /^(?:\+?959|\b09)\d{7,9}$/;
export const schema1 = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    //.matches(phoneRegExp, "Phone number is not valid")
    .matches(mmPhoneRegExp, "Enter a valid Myanmar phone number")
    .required("Phone number is required"),
  city: yup.string().required("City is required"),
  township: yup.string().required("Township is required"),
});

//    ^ and $: Start and end of the string

// \+?\d{1,4}: Optional country code (like +1, +91)

// [\s-]?: Optional space or dash

//  \d{10,14}: Accepts 10 to 14 digits (customize for your needs)
