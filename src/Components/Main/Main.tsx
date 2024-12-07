import React from 'react';
import './Main.css';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Main = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="main">
      <Checkbox
        className="task_checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Box className="task_box" sx={{ width: 500, maxWidth: '100%' }}>
        <TextField fullWidth label="Task" id="Task" />
      </Box>
      <Box className="task_date" sx={{ width: 200, maxWidth: '100%' }}>
        <TextField fullWidth label="Date & Time" id="TimeStamp" />
      </Box>
      <IconButton aria-label="delete" disabled={false} color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" disabled={false} color="primary">
        <EditIcon />
      </IconButton>
    </div>
  );
};
export default Main;
