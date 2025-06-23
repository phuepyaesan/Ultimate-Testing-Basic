import { NextResponse } from "next/server";
import * as yup from "yup";
const StudentData = [
  {
    id: 1,
    name: "phyu phyu",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },
  {
    id: 2,
    name: "su su",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },
  {
    id: 3,
    name: "mg mg",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },
];
//get student list api
export async function GET() {
  return NextResponse.json(StudentData);
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fatherName: yup.string().required("fatherName is required"),
  address: yup.string().required("address is required"),
  age: yup.number().required("age is required"),
  major: yup.string().required("major is required"),
});

// export async function POST(req) {
//   try {
//     const body = await req.json(); //Get requested body data from client
//     await schema.validate(body, { abortEarly: false });
//     return NextResponse.json({
//       message: "Student is successfully Created!",
//       bodyData: body,
//     });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       return NextResponse.json(
//         {
//           message: "Validation Failed!",
//           errors: error.inner.map((e) => ({
//             path: e.path,
//             message: e.message,
//           })),
//         },
//         { status: 400 }
//       );
//     }
//     return NextResponse.json(
//       { message: "Unexpected error", error: error.message },
//       { status: 500 }
//     );
//   }
// }

//create student api
export async function POST(req) {
  try {
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });

    return NextResponse.json({
      message: "Student is successfully created!",
      bodyData: body,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "Validation Failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
