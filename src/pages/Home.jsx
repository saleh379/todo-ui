import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Box p={3}>
          <Header />
          <TaskList />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
