import React from "react";

const SongArtist = ({artist})=>{
    return (
        <div style={{backgroundColor:"whiteSmoke",color:"rgb(41, 112, 124)",padding:"30px"}}>
            <h2><strong>Nombre artista:</strong> {artist.strArtist}</h2>
            <img style={{width:"50%"}} src={artist.strArtistThumb} alt={artist.strArtist}/>
            <p><strong>Nacimiento:</strong> {artist.intBornYear}-{artist.inDiedYear || "Presente"}</p>
            <p><strong>País:</strong> {artist.strCountry}</p>
            <p><strong>Genero: </strong>{artist.strGenre}-{artist.strStyle}</p>
            <a style={{color:"rgb(41, 112, 124)"}}  href={`http://${artist.strWebsite}`} target="blank" rel="noreferrer"><em>Sitio web</em></a>
            <p><strong>Biografía :</strong> {artist.strBiographyEN}</p>
        </div>
    );
}

export default SongArtist; 