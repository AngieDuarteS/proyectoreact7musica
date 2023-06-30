import React from "react";
import './Detalle.css';

const Detalle =({canciones, miembros, genero, sello}) => {
    return(
        <div className="detalle">
            <h4>Canciones</h4>
            <p>{canciones}</p>
            <h4>Género</h4>
            <p>{genero}</p>
            <h4>Sello Discografíco</h4>
            <p>{sello}</p>
            <h4>Miembros</h4>
            <p>{miembros}</p>
        </div>
        
    );
};

export default Detalle;