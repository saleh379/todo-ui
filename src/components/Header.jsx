import React from 'react';
import { Box, Avatar, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
      <Paper
        sx={{ display: 'flex', alignItems: 'center', p: '2px 8px', width: 300, borderRadius: 2 }}
        elevation={0}
      >
        <SearchIcon color="action" />
        <InputBase placeholder="Search" sx={{ ml: 1, flex: 1 }} />
      </Paper>
      <Avatar />
    </Box>
  );
}
