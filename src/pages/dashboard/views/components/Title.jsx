import React, { useContext, useState } from "react";
import { Box, InputBase, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import storeApi from "../../../../services/routers/utils/storeApi";

const useStyles = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
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
    "&:focus": {
      backgroundColor: "#ddd",
    },
  },
}));

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const classes = useStyles();
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <Box>
      {open ? (
        <Box>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleOnBlur}
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
  );
}
