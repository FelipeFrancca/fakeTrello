import React from "react";
import { Box, Button, IconButton, InputBase, Paper, alpha } from "@material-ui/core";
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      margin: theme.spacing(0, 1, 1, 1),
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(4),
    },
    input: {
      margin: theme.spacing(1),
    },
    btnConfirm: {
        background: '#5AAC44',
        color: "#fff",
        "&:hover": {
          background: alpha('#5AAC44', 0.25),
        }
    },
    confirm: {
      margin: theme.spacing(0, 1, 1, 1),
    }
  }));


export default function InputCard({ setOpen }) {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Paper className={classes.card}>
          <InputBase
          multiline
          onBlur={() => setOpen(false)}
          fullWidth
          inputProps={{
            className: classes.input,
          }}
          placeholder="Enter a title for this card..." />
        </Paper>
      </Box>
      <Box className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>
          Add Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
