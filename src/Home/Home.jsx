import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';

const OkMark = styled('span')({
  marginLeft: 8,
  color: 'green',
  fontWeight: 700,
});

export default function Home() {
  const [value, setValue] = React.useState('');
  const [focused, setFocused] = React.useState(false);

  const filled = value.trim() !== '';

  return (
    <Box p={4} sx={{
        height: '80vh',        // full screen height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // vertical center
        alignItems: 'center',     // horizontal center
      }}>
      <FormControl required sx={{ width: 320 }}>
        <InputLabel htmlFor="my-input">Your text</InputLabel>
        <OutlinedInput
          id="my-input"
          label="Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <FormHelperText>Required</FormHelperText>
      </FormControl>

      {filled && !focused && <OkMark>✔</OkMark>}
    </Box>
  );
}
