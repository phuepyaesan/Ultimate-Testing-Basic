"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function TodoMUI() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [changedTask, setChangedTask] = useState("");
  const [taskIndex, setTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  };

  const updateTask = () => {
    if (changedTask.trim()) {
      setTasks((prevTasks) =>
        prevTasks.map((task, index) =>
          index === taskIndex ? changedTask : task
        )
      );
      setChangedTask("");
      setTaskIndex(null);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>

      {/* Add Task */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add
        </Button>
      </Box>

      {/* Update Task */}
      {taskIndex !== null && (
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Edit Task"
            variant="outlined"
            fullWidth
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
          />
          <Button variant="contained" color="success" onClick={updateTask}>
            Update
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setTaskIndex(null);
              setChangedTask("");
            }}
          >
            Cancel
          </Button>
        </Box>
      )}

      {/* Task List Table */}
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Task</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        setTaskIndex(index);
                        setChangedTask(task);
                      }}
                      sx={{ mr: 1 }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => removeTask(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2}>No tasks available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
