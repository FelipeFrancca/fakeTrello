import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputCard from "./InputCard";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  backgroundPaper: {
    backgroundColor: "#181404 !important",
    borderRadius: "10px !important",
    minHeight: "auto",
  },
  addCard: {
    display: "flex",
    justifyContent: "left",
    width: "80%",
    cursor: "pointer",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: "10px !important",
    color: "#b6c2cf !important",
    backgroundColor: "#181404 !important",
    "&:hover": {
      backgroundColor: "#302c24 !important",
    },
  },
}));

export default function ImputContainer({ listId, type }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Box className={classes.root}>
      <Paper className={classes.backgroundPaper}>
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
