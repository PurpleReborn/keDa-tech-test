import { Button } from '@mui/material';
import React from 'react'

function CustomButton(props) {
  const { text, fullWidth = false, style, onClick, fontSize = '20px'} = props;
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        textTransform: "none",
        marginTop: "10px",
        ...style,
      }}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      <div style={{ fontSize: fontSize }}>{text}</div>
    </Button>
  );
}

export default CustomButton