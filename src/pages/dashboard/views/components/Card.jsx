import { Box, Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
  }));

export default function Card({ card }) {
  const classes = useStyles();
  return (
    <Box>
        <Paper className={classes.card}>
            {card.content}
        </Paper>
    </Box>
  )
}
