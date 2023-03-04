import React from "react";
import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import DrawerComponent from "./Drawer";
import "@fontsource/roboto";
import { Link } from "react-scroll";
import CustomButton from "../Button";

function Header(props) {
  const { handleLogin } = props
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const routeLarge = [
    {
      title: "About",
      path: "about",
    },
    {
      title: "Pricing",
      path: "pricing",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <AppBar sx={styles.container} position="static">
      <Toolbar>
        <Box sx={styles.logo}>Home</Box>
        {isMobile ? (
          <DrawerComponent handleLogin={handleLogin} />
        ) : (
          <Box sx={styles.wrapItem}>
            {routeLarge?.map((items, index) => {
              return (
                <Link
                  key={index}
                  activeClass="active"
                  to={items?.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Box sx={[styles.title]}>{items.title}</Box>
                </Link>
              );
            })}
            <CustomButton
              text="Login"
              style={styles.btnLogin}
              onClick={handleLogin}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;

const styles = {
  container: {
    background: "linear-gradient(to right bottom, #3f2b96, #a8c0ff)",
    py: "10px",
    px: {
      xs: "10px",
      md: "40px",
    },
    position: "fixed",
  },
  wrapItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: "20px",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: "20px",
    pr: "50px",
  },
  btnLogin: {
    color: "white",
    borderColor: "white",
    "&:hover": {
      borderColor: "#3f2b96",
      color: "#3f2b96",
    },
  },
}; 
