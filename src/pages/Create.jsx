import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import makeStyles from "@mui/styles/makeStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = {
  btn: {
    backgroundColor: "red",
    fontSize: 60,
    "&:hover": {
      backgroundColor: "blue",
    },
  },
};
export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        sx={useStyles.btn}
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
      >
        Submit
      </Button>
      {/* <AcUnitIcon color="secondary" fontSize="large"></AcUnitIcon>
      <AcUnitIcon color="action" fontSize="small"></AcUnitIcon>
      <AcUnitIcon color="error" fontSize="small"></AcUnitIcon>
      <AcUnitIcon color="error" fontSize="small"></AcUnitIcon>
      <AcUnitIcon color="disabled" fontSize="small"></AcUnitIcon> */}
    </Container>
  );
}
