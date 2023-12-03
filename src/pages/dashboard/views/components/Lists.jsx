import React from "react";
import { Box, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "./Card";
import ImputContainer from "./input/InputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#181404 !important",
    marginLeft: theme.spacing(2),
    maxHeight: "99%",
    overflowX: "hidden",
    scrollbarGutter: "stable",
    "&::-webkit-scrollbar": {
      width: "10px",
      height: "12px",
      borderRadius: "50px",
      backgroundColor: "#323232",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "50px",
      backgroundColor: "#9FADBC",
    },
  },
}));

export default function List({ list, index }) {
  const classes = useStyles();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <Box {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <Box
                ref={provided.innerRef}
                {...provided.droppableProps}>
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
            <ImputContainer listId={list.id} type="card" />
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
