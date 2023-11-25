import React from "react";
import { Box, Paper } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    color: '#fff',
    backgroundColor: '#303030',
    marginTop: '5em',
    marginLeft: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.root}>
        <Title />
      </Paper>
    </Box>
  );
}
