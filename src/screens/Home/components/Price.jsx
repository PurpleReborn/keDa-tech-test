import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Title from "../../../components/Title";
import CustomButton from "../../../components/Button";

export default function Price(props) {

  const dataPrice = [
    {
      title: "Basic",
      price: "$ 20",
      benefit: [
        "Record incoming goods",
        "Record outgoing goods",
        "Record profits",
      ],
    },
    {
      title: "Business",
      price: "$ 60",
      benefit: [
        "Record incoming and outgoing goods",
        "Record profits",
        "Can analyze sales results with CHART",
        "Support 7x24 Hours",
      ],
    },
    {
      title: "Entrepreneur",
      price: "$ 90",
      benefit: [
        "Record incoming and outgoing goods",
        "Record profits",
        "Can analyze sales results with CHART",
        "Support 7x24 Hours",
        "Export data to Excel",
        "AI Earning prediction",
      ],
    },
  ];

  const ItemPrice = (props) => {
    const { item, key } = props;
    return (
      <Grid key={key} item xs={12} md={4}>
        <Card style={styles.card} variant="outlined">
          <CardHeader
            title={item?.title}
            styles={styles.cardHeader}
          ></CardHeader>
          <CardContent>
            <Box px={1} height={"350px"}>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                {item?.price}
                <Typography variant="h6" color="textSecondary" component="span">
                  / mo
                </Typography>
              </Typography>
              {item?.benefit?.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {item}
                  </Typography>
                );
              })}
            </Box>
            <Box>
              <CustomButton fullWidth text="Checkout" />
              <Box mt={2}>
                <Link href="#" color="primary">
                  Detail
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <section styles={styles.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Title text="Pricing"/>
          <Grid container spacing={3}>
            {dataPrice?.map((item, index) => {
              return <ItemPrice item={item} key={index} />;
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: '100vh'
  },
  cardHeader: {
    paddingTop: "10px",
  },
  titleBigsale: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: {
      xs: "24px",
      md: "32px",
    },
  },
};
