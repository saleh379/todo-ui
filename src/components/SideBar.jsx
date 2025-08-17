import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Button,
  Avatar,
  InputBase,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarBorder from '@mui/icons-material/StarBorder';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const sections = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'All Tasks', icon: <DashboardIcon /> },
  { label: 'Starred', icon: <StarBorder /> },
  { label: 'Completed', icon: <CheckCircleOutline /> },
];

const categories = ['Work', 'Personal', 'Urgent'];

export default function Sidebar() {
  return (
    <Box sx={{ height: '100vh', width: '100%', p: 2, borderRight: '1px solid #eee' }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>name</Typography>
      <List>
        {sections.map((item) => (
          <ListItemButton key={item.label} sx={{ borderRadius: 2 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <List>
        {categories.map((cat) => (
          <ListItemButton key={cat} sx={{ pl: 4 }}>
            <Box
              sx={{ width: 8, height: 8, bgcolor: 'text.primary', borderRadius: '50%', mr: 2 }}
            />
            <ListItemText primary={cat} />
          </ListItemButton>
        ))}
      </List>
      <Button startIcon={<AddIcon />} fullWidth sx={{ mt: 2 }}>
        Add New List
      </Button>
    </Box>
  );
}