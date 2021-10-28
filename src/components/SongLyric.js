import React from "react";

const SongLyric = ({title,lyrics})=>{
    return (
        <div style={{backgroundColor:"whiteSmoke",color:"rgb(41, 112, 124)",padding:"30px"}}>
            <h1>{title}</h1>
            <blockquote style={{whiteSpace:"pre-wrap"}}><em>{lyrics}</em></blockquote>
        </div>
    );
}

export default SongLyric; 