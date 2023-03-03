import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function DrawerComponent() {

  const [openDrawer, setOpenDrawer] = useState(false);
  const routeSmall = [
    {
      title: "Home",
      path: 'home',
    },
    {
      title: "About",
      path: 'about',
    },
    {
      title: "Pricing",
      path: 'pricing',
    },
    {
      title: "Contact",
      path: 'contact',
    },
  ]

  const ItemMenu = (props) => {
    const {title} = props
    return (
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <Box>{title}</Box>
        </ListItemText>
      </ListItem>
    );
  }
  
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ pr: "100px" }}>
          {routeSmall?.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  activeClass="active"
                  to={item?.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <ItemMenu title={item?.title} />
                </Link>
              </div>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={styles.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;

const styles = {
  icon: { 
    color: "white" 
  },
};
