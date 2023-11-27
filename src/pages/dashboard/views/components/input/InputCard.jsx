import React, { useContext, useState } from "react";
import { Box, Button, IconButton, InputBase, Paper, alpha } from "@material-ui/core";
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@material-ui/core/styles';
import storeAPI from "../../../../../services/routers/utils/storeApi";

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


export default function InputCard({ setOpen, listId }) {
  const classes = useStyles();
  const {addMoreCard} = useContext(storeAPI);
  const [ cardTitle, setCardTitle ] = useState('');
  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handlebtnConfirm = () =>{
    addMoreCard(cardTitle, listId);
    setCardTitle('');
    setOpen(false);
  }

  const handleBlur = () => {
    setOpen(false);
    setCardTitle('');
  }

  return (
    <Box>
      <Box>
        <Paper className={classes.card}>
          <InputBase
          onChange={handleOnChange}
          multiline
          onBlur={handlebtnConfirm}
          fullWidth
          inputProps={{
            className: classes.input,
          }}
          value={cardTitle}
          placeholder="Enter a title for this card..." />
        </Paper>
      </Box>
      <Box className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handlebtnConfirm}>
          Add Card
        </Button>
        <IconButton onClick={handleBlur}>
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
