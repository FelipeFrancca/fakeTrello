import React, { useContext, useState } from "react";
import { Box, InputBase, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import storeApi from "../../../../services/routers/utils/storeApi";

const useStyles = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    cursor: "pointer",
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: "#b6c2cf",
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      border: "solid #579DFF",
      borderRadius: "10px",
      color: "#b6c2cf",
      backgroundColor: "#302c24",
      fontSize: "14px !important",
      fontWeight: "600 !important",
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
