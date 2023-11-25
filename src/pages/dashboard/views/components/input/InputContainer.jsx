import { Box, Paper } from '@mui/material'
import React from 'react'
import { makeStyles, alpha } from '@material-ui/core/styles';
import InputCard from './InputCard';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    addCard: {
      padding: theme.spacing(1, 1, 1, 2),
      margin: theme.spacing(0, 1, 1, 1),
      background: '#EBECF0',
      "&:hover": {
        backgroundColor: alpha('#000', 0.25),
      },
    },
  }));

export default function ImputContainer() {
  const classes = useStyles();
  return (
    <Box className= {classes.root}>
        <InputCard />
        <Paper className={classes.addCard} elevation={0}>
            + Add a card
        </Paper>
    </Box>
  )
}
