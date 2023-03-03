import { Box} from "@mui/material";
import React from "react";
import { ReactComponent as ILAbout } from "../../../assets/ILAbout.svg";
import CustomButton from "../../../components/Button";
import Title from "../../../components/Title";

function About() {
  return (
    <Box sx={styles.wrap}>
      <Title text="About" />
      <Box sx={styles.about}>
        <Box flex={1} sx={styles.ilus}>
          <ILAbout width={"100%"} height={"100%"} />
        </Box>
        <Box sx={styles.wrapabout} flex={1}>
          <Box sx={styles.titleSt}>Solutions for Small Business </Box>
          <Box sx={styles.desc}>
            We wanted to create an affordable and flexible management system
            that not only provides the tools small businesses need at the start,
            but also ones they can use later. And the challenge begins.
          </Box>
          <CustomButton text="Read More ..." />
        </Box>
      </Box>
    </Box>
  );
}

export default About;

const styles = {
  wrap: {
    mt: {
      xs: "80px",
      md: "40px",
    },
    height: "100vh",
    pt: {
      xs: "120px",
      md: "0px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  about: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
  },
  ilus: {
    display: "flex",
    // justifyContent: "flex-end",
    justifyContent: "center",
    mr: {
      xs: "0px",
      md: "50px",
    },
  },
  wrapabout: {
    justifyContent: "center",
    pt: {
      xs: "50px",
      md: "0px",
    }
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
  desc: {
    fontSize: '20px'
  }
};
