import React from "react";
import './Lista.css';


const Lista = ({ setArtista }) => {
    const handleClick = (artista) => {
        setArtista(artista);
    }
    return (
        <div className="lista">
            <h1>Rock00s</h1>
            <div>
                {discografia.map(artista => {
                    return (
                        <div key={artista.artista} onClick={(event) => handleClick(artista)} className="artista">
                            <h3>{artista.artista}</h3>
                            <img src={artista.logo} alt={`Logo de ${artista.artista}`}/>
                        </div>)
                })
                }
            </div>
        </div>
    );
}


const discografia = [
    {
        album: "Hybrid Theory",
        artista: "Linkin Park",
        miembros: "Chester, Mike, Joe, Rob, Brad, Dave",
        anio: 2000,
        canciones: ["1.Papercut ", " 2.One Step Closer ", " 3.With You ", " 4.Points of Authority ", " 5.Crawling"],
        genero: "Rock",
        sello: "Warner Records Inc",
        oyentes: 34026375,
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/LP_2017_logo.png",
        caratula: "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg"

    },
    {
        album: "Beautiful Deformity",
        artista: "the GazettE",
        miembros: "Ruki, Aoi, Reita, Kai, Uruha",
        anio: 2013,
        canciones: ["2.Inside Beast ", " 5.Fadeless ", " 6.Redo ", " 7.Last Heaven ", " 13.To Dazzling Darkness "],
        genero: "JRock",
        sello: "Sony Music",
        oyentes: 207460,
        logo: "https://www.dafont.com/forum/attach/orig/7/3/733555.png?1",
        caratula: "https://upload.wikimedia.org/wikipedia/en/3/3b/Beautiful_Deformity_-_The_Gazette_Album_Cover.jpg"
    },
    {
        album: "Definition",
        artista: "Diaura",
        miembros: "Yo-ka, Kei, Shoya, Tatsuya",
        anio: 2019,
        canciones: ["1.Ivy ", " 2.Malice ", " 3.Uso to  Waltz o ", " 4.dignity ", " 5.Species"],
        genero: "JRock",
        sello: "Ains",
        oyentes: 16235,
        logo: "https://pbs.twimg.com/profile_images/1484135431092379651/XoQSCihf_400x400.jpg",
        caratula: "https://upload.wikimedia.org/wikipedia/en/9/91/Definition_%28Diaura_EP%29.png"
    },
    {
        album: "Renai",
        artista: "SID",
        miembros: "Mao, Shinji, Aki, Yuya",
        anio: 2004,
        canciones: ["1.Ajisai ", " 3.Watashi wa ame ", " 5.Ao ", " 7.Hitsuyou aku ", " 10.Owakare no uta"],
        genero: "JRock",
        sello: "Danger Crue Entertainment",
        oyentes: 796096,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/SID_logo.png/640px-SID_logo.png",
        caratula: "https://i.scdn.co/image/ab67616d0000b273b269c733efa4ae843b9cb876"
    },
    {
        album: "Medley",
        artista: "Alice Nine",
        miembros: "Shou, Hiroto, Tora, Nao, Saga",
        anio: 2021,
        canciones: ["1.Hoshifuruyoru ni wa kimi wo Omou ", "2.Bury the night ", "3.After dark ", "4.Eureka ", "5.Koku "],
        genero: "JRock",
        sello: "NINE HEADS RECORDS",
        oyentes: 7550,
        logo: "https://pbs.twimg.com/profile_images/1164915374925602821/RabAFl9d_400x400.jpg",
        caratula: "https://i.scdn.co/image/ab67616d0000b2738a161c80104fa89ea129c8d0"
    }

];

export default Lista;
/*<Item artista={artista} />
<Detalle canciones={artista.canciones} miembros={artista.miembros} genero={artista.genero} sello={artista.sello}/> */