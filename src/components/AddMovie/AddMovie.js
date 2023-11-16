import React, {useState} from 'react';
import styles from "./AddMovie.module.css"


const AddMovie = (props) => {
    const {movies, setMovies} = props

    
    const [title, setTitle] =useState("")
    const [date, setDate] =useState("")
    const [image, setImage] =useState("")
    const [genre, setGenre] =useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
        
    }
    const handleImage = (e) => {
        setImage(e.target.value)
        
    }
    const handlegenre = (e) => {
        setGenre(e.target.value)
        
    }
    const handleDate = (e) => {
        setDate(e.target.value)
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        


        if (title === "" && date === "") { alert("title dan date kosong") }
        else if (title === "") { alert("title kosong") } 
        else if (date === "") { alert("date kosong") } 
        else {

        const movie = {
            id:11,
            title: title,
            date: date,
            image: image,
            genre: genre,
        }
        setMovies([...movies, movie])
        alert("berhasil")
        
    }
    }
    return (
        <div className={styles.container}>
       <form className={styles.addmovie} onSubmit={handleSubmit}>
       <input className={styles.addmovie__input} id='title' type='text' value={title} onChange={handleTitle} placeholder="Masukkan judul" />
       <input className={styles.addmovie__input} id='image' type='text' value={image} onChange={handleImage} placeholder="Masukkan link" />
       <select className={styles.addmovie__input} id='genre' type='option' value={genre} onChange={handlegenre} placeholder="Masukkan genre" >
       <option value="">Pilih Genre</option>
        <option value="horor">Horor</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="komedi">Komedi</option>
        <option value="romansa">Romansa</option>
        <option value="fantasi">Fantasi</option>
        <option value="fiksi ilmiyah">Fiksi Ilmiah</option>
        <option value="petualang">Petualang</option>
        <option value="sejarah">Sejarah</option>
       </select>
        <input className={styles.addmovie__input} id='date' type='date' value={date} onChange={handleDate} />
  <button className={styles.addmovie__button}>simpan</button>
       </form>
        </div>
    );
}

export default AddMovie;
