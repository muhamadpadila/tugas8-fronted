import React from "react";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const Movies= (props) => {

    const {item} = props
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__tittle}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    {
                        item.map(function(data){
                            return(
                                
                                    <Movie key={data.id} title={data.title} date={data.date} image={data.image} link={data.link} genre={data.genre}/>    
                            )
                        })
                    }
                  </div>
            </section>
        </div>
    )
}

export default Movies;