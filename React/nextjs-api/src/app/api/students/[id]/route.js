import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

//update student api
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("Father Name is required"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid Gender"),
  age: yup.number().required("Age is required"),
  dob: yup.date().required("Date is Required"),
  phone: yup.string().required("Phone is Required"),
  address: yup.string().required("Address is required"),
  major: yup.string().required("Major is required"),
});
export async function PUT(req, { params }) {
  try {
    const studentId = parseInt(params.id);
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    //Update with student ID
    await prisma.student.update({
      where: { id: studentId },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Student is successfully updated!",
      studentId,
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
//delete student api
export async function DELETE(req, { params }) {
  try {
    const studentId = parseInt(params.id);
    await prisma.student.delete({
      where: {
        id: studentId,
      },
    });
    return NextResponse.json({
      message: "Student is successfully deleted!",
      studentId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Student not found or Student deletion is fail.",
      },
      {
        status: 404,
      }
    );
  }
}
//get student detail api
export async function GET(req, { params }) {
  const studentId = parseInt(params.id);
  //find student in database
  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
  });

  return NextResponse.json(student);
}
