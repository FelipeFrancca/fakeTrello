import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "@mui/material";
import Lists from "./components/Lists";
import store from "../../../services/routers/utils/store";
import StoreAPI from "../../../services/routers/utils/storeApi";
import InputContainer from "./components/input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "5rem",
    height: "90vh",
    maxWidth: "100vw",
    overflowY: "auto",
    scrollbarGutter: "stable",
    "&::-webkit-scrollbar": {
      width: "12px",
      height: "10px",
      borderRadius: "50px",
      backgroundColor: "#323232",
      marginRight: "50px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "50px",
      marginRight: "50px",
      backgroundColor: "#9FADBC",
    },
  },
}));

export default function Home() {
  const [data, setData] = useState(store);

  const classes = useStyles();

  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      list: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log("destination", destination, "source", source, draggableId);

    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="Home" type="list" direction="horizontal">
          {(provided) => (
            <Box
              className={classes.root}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.listIds.map((listId, index) => {
                const list = data.lists[listId];
                return <Lists list={list} key={listId} index={index} />;
              })}
              <InputContainer type="list" />
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </StoreAPI.Provider>
  );
}
