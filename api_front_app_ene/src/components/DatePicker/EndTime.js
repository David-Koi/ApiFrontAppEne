import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function EndTime( {endTime, setEndTime} ) {
  // const [endTime, setEndTime] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="End time"
        value={endTime}
        onChange={(newValue) => {
          setEndTime(newValue);
        }}
      />
    </LocalizationProvider>
  );
}