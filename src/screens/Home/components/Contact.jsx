import { Box } from '@mui/material'
import React from 'react'
import PlaceIcon from "@mui/icons-material/Place";
import Title from '../../../components/Title';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {

  const data = [
    {
      title: "Address",
      description: "Jakarta, Indonesia",
      icon: <PlaceIcon style={styles.icon} />,
    },
    {
      title: "Email",
      description: "sandimrizalul2@gmail.com",
      icon: <EmailIcon style={styles.icon} />,
    },
    {
      title: "Phone",
      description: "085798736188",
      icon: <PhoneIcon style={styles.icon} />,
    },
  ];

  const ItemContact = (props) => {
    const { item, key } = props
    return (
      <Box sx={styles.item} key={key}>
        <Box sx={styles.itemIcon}>{item?.icon}</Box>
        <Box sx={styles.itemTitle}>{item?.title}</Box>
        <Box sx={styles.itemDesc}>{item?.description}</Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.wrap}>
      <Title text="Contact" />
      <Box sx={styles.row}>
        {data?.map((item, index) => {
          return <ItemContact key={index} item={item} />;
        })}
      </Box>
    </Box>
  );
}

export default Contact

const styles = {
  row: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "center",
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70vh",
    mt: "100px",
  },
  item: {
    mx: "20px",
    my: {
      xs: "20px",
      md: "0px",
    },
    backgroundColor: "#F3F3F3",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: "100px",
    py: "70px",
  },
  icon: {
    // color: "#a8c0ff",
    color: "#3f2b96",
    fontSize: "40px",
  },
  itemTitle: {
    fontSize: {
      xs: "20px",
      md: "24px",
    },
  },
  itemIcon: {
    backgroundColor: "#a8c0ff",
    p: '10px',
    borderRadius: '100px',
    display: 'flex',
    mb: '10px'
  },
};