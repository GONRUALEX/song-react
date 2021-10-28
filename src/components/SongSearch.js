import React, {useState, useEffect} from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpHttp.js/helpHttp";

const SongSearch = ()=>{
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(search === null){
            return;
        }

        const fetchData = async () => {
            const {artist, song} = search;
        
            let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}` ;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}` ;

            setLoading(true);

            const [artistResp, songResp] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ]);
            
            setLoading(false);
            setBio(artistResp);
            setLyric(songResp);         
        } 

        fetchData();
    },[search]); 

const handleSearch = (data)=>{  
    setSearch(data);
}

    return (
        <>
            <h1 style={{color:"rgb(41, 112, 124)"}}>song </h1>
        {loading &&<Loader/>}
        <SongForm handleSearch={handleSearch}/>
        {search && !loading && <SongDetails search={search} lyric={lyric} bio={bio}/>}
        </>
    );
}

export default SongSearch; 