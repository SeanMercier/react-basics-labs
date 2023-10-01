import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddTaskForm = (props) => {
  const handlePriorityChange = (event) => {
    const priority = event.target.value;
    props.change( "priority", priority );
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
        }}
        onSubmit={props.submit}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            name="title"
            label="Task Title"
            InputLabelProps={{ shrink: true }}
            onChange={(event) => props.change("title", event.target.value)}
          />
        </div>
        <div>
          <TextField
            required
            name="deadline"
            label="Deadline"
            InputLabelProps={{ shrink: true }}
            type="date"
            onChange={(event) => props.change("deadline", event.target.value)}
          />
        </div>
        <div>
          <TextField
            name="description"
            id="outlined-multiline-static"
            label="Task Details"
            InputLabelProps={{ shrink: true }}
            multiline
            rows={4}
            onChange={(event) => props.change("description", event.target.value)}
          />
        </div>
        <div>
          <FormControl variant="outlined" sx={{ width: '30ch', m: 1 }}>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              id="priority"
              name="priority"
              label="Priority"
              onChange={handlePriorityChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              m: 1,
              p: 1,
              width: '95%'
            }}
          >
            Add Task
          </Button>
        </div>
      </Box>
    </div>
  )
};

export default AddTaskForm;