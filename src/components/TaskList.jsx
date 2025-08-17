import React from 'react';
import { Box, Typography } from '@mui/material';
import { TaskItem, TaskColor } from './TaskItem';

interface Task {
  title: string;
  date: string;
  label: string;
  color: TaskColor;
}

const tasks: Task[] = [
  { title: 'Task 1', date: 'April 25', label: 'High', color: 'warning' },
  { title: 'Task 2', date: 'April 26', label: 'Personal', color: 'info' },
  { title: 'Task 3', date: 'Tomorrow', label: 'Urgent', color: 'error' },
  { title: 'Task 4', date: 'No due date', label: 'High', color: 'warning' },
];

export default function TaskList() {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Today’s Tasks
      </Typography>
      {tasks.map((task, index) => (
        <TaskItem key={index} {...task} />
      ))}
    </Box>
  );
}
