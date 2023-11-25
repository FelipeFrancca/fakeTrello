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
    color: '#fff',
    backgroundColor: '#383838',
    flexGrow: 1,
  },
  input: {
    margin: theme.spacing(1),
    '&:focus': {
      backgroundColor: '#ddd',
    }
  }
}));

export default function Title() {
    const  [open, setOpen] = useState(false);
    const classes = useStyles();
  return (
    <Box>
        {open ? (
        <Box>
        <InputBase value="Todo"
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
        >todo
        </Typography>
        <MoreHorizIcon />
        </Box>
        )}
    </Box>
  )
}
