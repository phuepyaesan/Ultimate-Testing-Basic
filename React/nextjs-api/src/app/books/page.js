"use client";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
export default function BookList() {
  const [books, setBooks] = useState([]);
  const getBookList = async () => {
    try {
      const response = await axios.get("/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(books);
  useEffect(() => {
    getBookList();
  }, []);
  return (
    <Box padding={2}>
      <Stack alignItems={"flex-end"}>
        <Link passHref href="/books/create">
          <Button variant="contained" sx={{ mb: 2 }}>
            Add Book
          </Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Published Year</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={book.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.publish_year}</TableCell>
                <TableCell align="center">
                  <Link href={`/books/${book.id}`} passHref>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                  <Link href={`/books/${book.id}/edit`} passHref>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
