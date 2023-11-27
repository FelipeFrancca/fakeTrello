import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import InputCard from "./InputCard";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
    cursor: "pointer",
  },
  addCard: {
    display: "flex",
    justifyContent: "left",
    padding: theme.spacing(1, 1, 1, 2),
    borderRadius: "12px",
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: alpha("#000", 0.25),
    },
  },
}));

export default function ImputContainer({ listId, type }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Box className={classes.root}>
      <Paper>
        <Collapse in={open}>
          <InputCard setOpen={setOpen} listId={listId} type={type} />
        </Collapse>
        <Collapse in={!open}>
          <Paper
            className={classes.addCard}
            elevation={0}
            onClick={() => setOpen(!open)}
          >
            {type === "card" ? "+ Add Card" : "+ Add another list"}
          </Paper>
        </Collapse>
      </Paper>
    </Box>
  );
}
