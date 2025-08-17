import React from 'react';
import { Box, Typography, Chip, IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export type TaskColor = 'warning' | 'info' | 'error';

interface TaskItemProps {
  title: string;
  date: string;
  label: string;
  color: TaskColor;
}

export function TaskItem({ title, date, label, color }: TaskItemProps) {
  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 2,
      }}
      elevation={0}
    >
      <Box>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Chip label={label} color={color} size="small" />
        <IconButton>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
}
