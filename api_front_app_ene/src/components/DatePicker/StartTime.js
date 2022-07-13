import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import './datePicker.css'

export default function StartTime( {startTime, setStartTime} ) {
  // const [startTime, setStartTime] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Start time"
        value={startTime}
        onChange={(newValue) => {
          setStartTime(newValue);
        }}
      />
    </LocalizationProvider>
  );
}