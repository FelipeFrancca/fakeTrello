import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "@mui/material";
import List from "./components/List";
import store from "../../../services/routers/utils/store";
import StoreAPI from "../../../services/routers/utils/storeApi";
import InputContainer from "./components/input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";

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
      marginRight: "50px"
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
    setData(newState)
  };
  return (
    <StoreAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <Box className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <InputContainer type="list" />
      </Box>
    </StoreAPI.Provider>
  );
}
