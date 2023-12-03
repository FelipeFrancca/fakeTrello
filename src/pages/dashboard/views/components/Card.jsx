import { Box, Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      cursor: "pointer",
      "&:hover": {
        border: "solid #579DFF",
      }
    },
  }));

export default function Card({ card }) {
  const classes = useStyles();
  return (
    <Box>
        <Paper className={classes.card}>
            {card.title}
        </Paper>
    </Box>
  )
}
