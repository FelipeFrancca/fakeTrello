import { Box, Paper } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    cursor: "pointer",
    color: "#b6c2cf !important",
    backgroundColor: "#302c24 !important",
    "&:hover": {
      border: "solid #579DFF",
    },
  },
}));

export default function Card({ card, index }) {
  const classes = useStyles();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.card}>{card.title}</Paper>
        </Box>
      )}
    </Draggable>
  );
}
