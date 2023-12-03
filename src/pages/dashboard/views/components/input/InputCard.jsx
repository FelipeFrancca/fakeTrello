import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@material-ui/core/styles";
import storeAPI from "../../../../../services/routers/utils/storeApi";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "solid red",
    minWidth: "280px",
    margin: theme.spacing(1, 1, 1, 1),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#28242c !important",
  },
  input: {
    margin: theme.spacing(1),
    color: "#b6c2cf",
  },
  btnConfirm: {
    background: "#5AAC44 !important",
    color: "#fff !important",
    "&:hover": {
      background: "#57c638 !important",
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard({ setOpen, listId, type }) {
  const classes = useStyles();
  const { addMoreCard, addMoreList } = useContext(storeAPI);
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handlebtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    }
    else {
      addMoreList(title)
      setTitle("");
      setOpen(false);
    }
  };

  const handleBlur = () => {
    setOpen(false);
    setTitle("");
  };

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
            value={title}
            placeholder={
              type === "card"
                ? "Enter a title for this card..."
                : "Enter a list title..."
            }
          />
        </Paper>
      </Box>
      <Box className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handlebtnConfirm}>
          {type === "card" ? "Add Card" : "Add list"}
        </Button>
        <IconButton onClick={handleBlur}>
          <ClearIcon
          sx={{color: "#b6c2cf", padding: 1, borderRadius: 1, 
          "&:hover":{backgroundColor: "#302c24 !important",}
        }}/>
        </IconButton>
      </Box>
    </Box>
  );
}
