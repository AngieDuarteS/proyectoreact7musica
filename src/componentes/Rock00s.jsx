import React, { useState } from "react";
import Lista from "./Lista";
import Item from "./Item";
import './Rock00s.css';

const Rock00s = () => {
    const [artistaSeleccionado, setArtista] = useState(null);
    return(
        <div className="rock">
          <Lista setArtista={setArtista}/>
          {artistaSeleccionado && <Item artista={artistaSeleccionado}/> }
        </div>
    );
}

export default Rock00s;