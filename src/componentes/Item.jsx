import React, { useState } from "react";
import Detalle from "./Detalle";
import './Item.css';

const Item = ({ artista }) => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setMostrarDetalle(!mostrarDetalle);
    }

    return (
        <>
          <div className="item">
            <span className="album">
                <h3>Álbum</h3>
                <p>{artista.album}</p>
                <h3>Artista</h3>
                <p>{artista.artista}</p>
                <h3>Año</h3>
                <p>{artista.anio}</p>
                <h3>Oyentes</h3>
                <p>{artista.oyentes}</p>
            </span>
            <span className="caratula">
                <img src={artista.caratula} alt={`Caratula del álbum ${artista.album}`}/>
            </span>
            <span className="detalles"><button onClick={handleClick}>Detalles</button></span>

          </div>
          {mostrarDetalle && <Detalle canciones={artista.canciones} miembros={artista.miembros} genero={artista.genero} sello={artista.sello}/> }
        </>  

    );
}

export default Item;