import React, { useState } from 'react'
import { Box, InputBase, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    margin: theme.spacing(1),
    fontSize: "1.2rem",
    fontWeight: "bold",
    '&:focus': {
      backgroundColor: '#ddd',
    }
  }
}));

export default function Title({ title }) {
    const  [open, setOpen] = useState(false);
    const classes = useStyles();
  return (
    <Box>
        {open ? (
        <Box>
        <InputBase
        autoFocus
        value={title}
        inputProps={{
          className: classes.input,
        }}
        fullWidth
        onBlur= {() => setOpen(!open)}
        />
        </Box>
        ) : (
        <Box className={classes.editableTitleContainer}>
        <Typography
        onClick={() => setOpen(!open)}
        className={classes.editableTitle}
        >
        {title}
        </Typography>
        <MoreHorizIcon />
        </Box>
        )}
    </Box>
  )
}
