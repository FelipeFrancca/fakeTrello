import React from "react";
import { Box, Paper, CssBaseline } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from "./Card";
import ImputContainer from "./input/InputContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    marginTop: '6em',
    marginLeft: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <ImputContainer />
      </Paper>
    </Box>
  );
}
