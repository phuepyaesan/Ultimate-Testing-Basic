"use clitent";

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

export default function StudentList() {
  const getStudentList = async () => {
    try {
      console.log("getStudentList()");

      const response = await axios.get("/api/students");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Su Su</TableCell>
              <TableCell>09786767567</TableCell>
              <TableCell>5.7.2002</TableCell>
              <TableCell>U Hla</TableCell>
              <TableCell>19</TableCell>
              <TableCell>Female</TableCell>
              <TableCell>Hlaing</TableCell>
              <TableCell>Computer Science</TableCell>
              <TableCell align="center">
                <Link href={"/students/1"} passHref>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
                <Link href={"/students/1/edit"} passHref>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
