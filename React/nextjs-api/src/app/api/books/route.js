import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET() {
  const BookData = [
    {
      id: 1,
      title: "The Programmer",
      author: "Andrew Hunt",
      published_year: "1999",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      published_year: "2000",
    },
    {
      id: 3,
      title: "Travel",
      author: "John Smith",
      published_year: "2012",
    },
  ];
  return NextResponse.json({
    message: "Get Book List",
    BookData,
  });
}
const schema = yup.object().shape({
  title: yup.string().required("title is required"),
  author: yup.string().required("author is required"),
  published_year: yup.number().required("year is required"),
});

//Create book api
export async function POST(req) {
  try {
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Book is successfully Created!",
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
