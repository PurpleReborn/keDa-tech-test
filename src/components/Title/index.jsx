import { Box } from '@mui/material'
import React from 'react'

function Title(props) {
  const { text, sx } = props
  return (
    <Box
      sx={{
        color: "#3f2b96",
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: {
          xs: "30px",
          md: "36px",
        },
        pb: '40px',
        ...sx
      }}
    >
      {text}
    </Box>
  );
}

export default Title