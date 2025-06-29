"use client";

import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StudentList() {
  //for assign api response data
  const [students, setStudents] = useState([]);
  //api call function
  const getStudentList = async () => {
    try {
      // console.log("getStudentList()");
      //axios from frontend api call package //default json acess
      const response = await axios.get("/api/students");
      setStudents(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //call api call function
  //console.log("Students", students);
  useEffect(() => {
    getStudentList();
  }, []);
  return (
    <Box padding={2}>
      <Stack alignItems="flex-end">
        <Link passHref href="/students/create">
          <Button variant="contained" sx={{ mb: 2 }}>
            Add Student
          </Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Major</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.dob}</TableCell>
                <TableCell>{student.father_name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.major}</TableCell>
                <TableCell align="center">
                  <Link href={`/students/${student.id}`} passHref>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                  <Link href={`students/${student.id}/edit`} passHref>
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
