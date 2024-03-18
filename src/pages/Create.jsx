import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useEffect } from "react";

const useStyles = {
  btn: {
    backgroundColor: "red",
    fontSize: 60,
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  field: {
    marginTop: 2,
    marginBottom: 2,
    display: "block",
  },
  radio: {
    "&:hover": {
      color: "secondary",
    },
  },
};
export default function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isError, setIsError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" && desc === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        fontWeight="bold"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleTitle}
          label="Note Title"
          variant="outlined"
          color="secondary"
          value={title}
          sx={useStyles.field}
          error={isError}
        ></TextField>
        <TextField
          sx={useStyles.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          value={desc}
          onChange={handleDesc}
          fullWidth
          required
          error={isError}
        ></TextField>

        <RadioGroup>
          <FormControlLabel
            control={<Radio></Radio>}
            label="Money"
            value="value"
            sx={useStyles.radio}
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio></Radio>}
            label="crypto"
            value="crypto"
          ></FormControlLabel>
        </RadioGroup>

        <Button
          // sx={useStyles.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
        >
          Submit
        </Button>
      </form>

      {/* <TextField></TextField> */}
      {/* <AcUnitIcon color="secondary" fontSize="large"></AcUnitIcon>
      <AcUnitIcon color="action" fontSize="small"></AcUnitIcon>
      <AcUnitIcon color="error" fontSize="small"></AcUnitIcon>
      <AcUnitIcon color="error" fontSize="small"></AcUnitIcon>
      <AcUnitIcon color="disabled" fontSize="small"></AcUnitIcon> */}
    </Container>
  );
}
