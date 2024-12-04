import React from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Navbar: React.FC = () => {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <div className="navbar">
      <h1>TODO LIST</h1>
      <div className="items">
        <div className="navbar_button">
          <Button variant="contained" color="primary">
            Add Task
          </Button>
        </div>

        <div className="navbar_filter">
          <Box>
            <FormControl fullWidth>
              <InputLabel id="filter-label">Filter</InputLabel>
              <Select
                labelId="filter-label"
                id="filter"
                value={filter}
                label="Filter"
                onChange={handleChange}
              >
                <MenuItem value="all">All Tasks</MenuItem>
                <MenuItem value="done">Done</MenuItem>
                <MenuItem value="todo">To Do</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
