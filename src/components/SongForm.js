import React,{useState} from "react";


const initialForm = {
    artist:"",
    song:"",
}

const SongForm = ({handleSearch})=>{

    const [form, setForm] = useState(initialForm);

    const handleChange = (e)=>{
        setForm({...form, 
        [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!form.artist || !form.song){
            alert("Datos incompletos");
            return;
        }

        handleSearch(form);
        setForm(initialForm); 
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input onChange={handleChange} type="text" value={form.artist} name="artist" placeholder="Nombre del interprete"/>
                <input onChange={handleChange} type="text" value={form.song} name="song" placeholder="Nombre de la canción"/>
                <input  style={{backgroundColor:"rgb(41, 112, 124)", color:"white"}}  type="submit" value="Enviar"/>
            </form>
        </div>
    );
}

export default SongForm; 