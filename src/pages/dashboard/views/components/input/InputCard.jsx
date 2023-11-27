import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  alpha,
} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@material-ui/core/styles";
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
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: alpha("#5AAC44", 0.25),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard({ setOpen, listId, type }) {
  const classes = useStyles();
  const { addMoreCard } = useContext(storeAPI);
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handlebtnConfirm = () => {
    addMoreCard(title, listId);
    setTitle("");
    setOpen(false);
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
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
