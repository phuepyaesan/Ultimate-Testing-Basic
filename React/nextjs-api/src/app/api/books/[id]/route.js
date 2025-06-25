import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

//Update book api
const schema = yup.object().shape({
  title: yup.string().required("title is required"),
  author: yup.string().required("author is required"),
  published_year: yup.number().required("year is required"),
});
export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const bookId = parseInt(params.id);
    const validatedData = await schema.validate(body, { abortEarly: false });
    const book = await prisma.book.update({
      where: { id: bookId },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Book is successfully Updated!",
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

export async function DELETE(req, { params }) {
  const bookId = parseInt(params.id);
  await prisma.book.delete({
    where: { id: bookId },
  });
  return NextResponse.json({
    message: "Book is successfully deleted!",
    bookId,
  });
}
//Get Book Detail
export async function GET(req, { params }) {
  const bookId = parseInt(params.id);
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });

  return NextResponse.json(book);
}
