import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Box,} from "@mui/material";
import List from "./components/List";
import store from '../../../services/routers/utils/store'
import StoreAPI from "../../../services/routers/utils/storeApi";

export default function Home() {
const [data, setData] = useState(store);
const addMoreCard = (title, listId) =>{
  const newCardId = uuid();
  const newCard = {
    id: newCardId,
    title,
  }

  const list = data.lists[listId];
  list.cards = [... list.cards,newCard];

  const newState = {
      ... data,
      lists: {
        ... data.lists,
      [listId]: list,
    },

  };
  setData(newState);
};
  return (
    <StoreAPI.Provider value={{ addMoreCard }}>
    <Box>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />;
      })}
    </Box>
    </StoreAPI.Provider>
  );
}
