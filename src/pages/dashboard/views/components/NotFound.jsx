import { Button, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import bannerNotF from "../../../../assets/images/logo/trelloMov.gif";
import "../../../../assets/styles/NotFound.css";


const NotFound = (props) => {
  return (
    <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: 4}}>
      <h1 className="textNotfound">Oxi, página não encontrada 🤔</h1>
      <h2 className="textNotfound">Ta indo longe demais meu parceiro, seu link deve esta faltando informações ou não existe neste site.</h2>
      <img src={bannerNotF} alt="O banner não foi encontrado" style={{width: "25rem"}}/>
      <Button variant="contained" component={Link} to="/" >Voltar a tela inicial</Button>
    </Box>
  );
};

export default NotFound;
