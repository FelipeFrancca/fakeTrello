import React, { useState } from "react";
import { Box,} from "@mui/material";
import List from "./components/List";
import Store from '../../../services/routers/utils/store'

export default function Home() {
const [data, setData] = useState(Store);

  return (
    <Box>
      {data.listIds.map((listId) => {
        const list = data.list[listId];
        return <List list={list} key={listId} />;
      })}
    </Box>
  );
}
