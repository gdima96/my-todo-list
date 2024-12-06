import React from 'react';
import './Main.css';
import Box from '@mui/material/Box';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const Main = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="main">
      <Checkbox
        className="main_checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Box className="main_box" sx={{ width: 500, maxWidth: '100%' }}>
        <TextField fullWidth label="Task" id="Task" />
      </Box>
    </div>
  );
};
export default Main;
