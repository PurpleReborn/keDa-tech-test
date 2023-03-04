import { Box } from '@mui/material'
import React from 'react'
import { ReactComponent as ILHome } from "../../../assets/ILHome.svg";

function OnBoard() {
  return (
    <Box sx={styles.onboard}>
      <Box sx={styles.wrapOnboard}>
        <Box sx={styles.titleSt}>Simplify your business </Box>
        <Box sx={styles.titleNd}>In Recording every item that goes in and out</Box>
        <Box sx={styles.titleRd}>
          And record every
          <span style={{ fontWeight: "600" }}> Profit</span> you get every day.
        </Box>
      </Box>
      <Box sx={styles.ilhome}>
        <ILHome width={"50%"} />
      </Box>
    </Box>
  );
}

export default OnBoard

const styles = {
  onboard: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    height: "100vh",
    pt: {
      xs: "120px",
      md: "0px",
    },
  },
  ilhome: {
    display: "flex",
    // justifyContent: "flex-end",
    justifyContent: "center",
    flex: {
      xs: 0,
      md: 1,
    },
  },
  wrapOnboard: {
    justifyContent: "center",
    flex: {
      xs: 0,
      md: 1,
    },
  },
  titleSt: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Roboto",
    fontSize: {
      xs: "24px",
      md: "30px",
    },
  },
  titleNd: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: {
      xs: "24px",
      md: "28px",
    },
  },
  titleRd: {
    color: "black",
    fontWeight: "400",
    fontFamily: "Roboto",
    fontSize: {
      xs: "24px",
      md: "28px",
    },
  },
};