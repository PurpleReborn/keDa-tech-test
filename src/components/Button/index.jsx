import { Button } from '@mui/material';
import React from 'react'

function CustomButton(props) {
  const { text, fullWidth = false } = props;
  return (
    <Button
      variant="outlined"
      color="primary"
      style={{ textTransform: "none", marginTop: '10px' }}
      fullWidth={fullWidth}
    >
      <div style={{ fontSize: "20px" }}>{text}</div>
    </Button>
  );
}

export default CustomButton