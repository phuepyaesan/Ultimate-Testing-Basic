"use client";

import styles from "./Example25.module.css";
import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [changedTask, setChangedTask] = useState("");
  const [changedCategory, setChangedCategory] = useState("");
  const [taskIndex, setTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, category: newCategory }]);
      setNewTask("");
      setNewCategory("");
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
          index === taskIndex
            ? { name: changedTask, category: changedCategory }
            : task
        )
      );
      setChangedTask("");
      setChangedCategory("");
      setTaskIndex(null);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App with Category</h1>

      {/* Create Task */}
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          placeholder="Task Name"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className={styles.addButton} onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Update Task */}
      {taskIndex !== null && (
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            placeholder="Updated Task"
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Updated Category"
            value={changedCategory}
            onChange={(e) => setChangedCategory(e.target.value)}
          />
          <button className={styles.updateButton} onClick={updateTask}>
            Update
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => {
              setTaskIndex(null);
              setChangedTask("");
              setChangedCategory("");
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Task List */}
      <ul className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className={styles.taskItem}>
              <div>
                <span className={styles.taskName}>{task.name}</span>{" "}
                <span className={styles.taskCategory}>({task.category})</span>
              </div>
              <div>
                <button
                  className={styles.editButton}
                  onClick={() => {
                    setTaskIndex(index);
                    setChangedTask(task.name);
                    setChangedCategory(task.category);
                  }}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => removeTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className={styles.emptyMsg}>No tasks available</li>
        )}
      </ul>
    </div>
  );
}
