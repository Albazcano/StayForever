import BarraSearch from "./BarraSearch";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const ResultadosFiltros = () => {
    
    const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

    return (
      <div className="search" style={{backgroundColor: "#fbf1e4"}}>
        <BarraSearch Data={data} Placeholder="Buscar aquí..." />
      </div>
    );
  };
  
  export default ResultadosFiltros;