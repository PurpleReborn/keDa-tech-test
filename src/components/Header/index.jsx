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

function Header() {
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
        <Box sx={styles.logo}>
          Home
        </Box>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box sx={styles.wrapItem}>
            {
              routeLarge?.map((items, index) => {
                return (
                  <Link
                    activeClass="active"
                    to={items?.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Box
                      sx={[styles.title, { px: index === 1 ? "50px" : "0px" }]}
                    >
                      {items.title}
                    </Box>
                  </Link>
                );
              })
            }
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
  },
}; 
