import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles, alpha } from '@material-ui/core/styles';
import InputCard from './InputCard';
import { Collapse } from '@material-ui/core';

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
  const [open,setOpen] = useState(false);
  return (
    <Box className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
          + Add a card
        </Paper>
      </Collapse>
    </Box>
  )
}
