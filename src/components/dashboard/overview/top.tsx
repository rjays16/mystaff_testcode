'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function Top(): React.JSX.Element {
    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
  

  return (
    <div style={{ color: 'gray' }}>
        Appointments
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <strong>June</strong>    
          <Box component="img" src="/assets/previous.png" sx={{ height: '30px', ml: 1 }} />
          <Box component="img" src="/assets/next.png" sx={{ height: '30px', ml: 1 }} />
          <Box sx={{ flex: 1, height: '30px', ml: 1 }}>
          <Button
              variant="contained"
              sx={{
                width: '30%',
                height: '60%',
                padding: '16px 20px',
                gap: '10px',
                borderRadius: '1rem',
                float: 'right',
                backgroundColor: '#FF630B'
              }}
            >
              New Appointment
            </Button>
        </Box>
        </Box>
        Today is {formattedDate}
   
    </div>
  );
}

export default Top;
