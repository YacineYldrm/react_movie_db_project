import { useEffect, useState } from "react";
import { v4 as uuidv4} from "uuid";
import './MovieGallery.scss'

const MovieGallery = ({movieData}) => {

    return ( 
        <section className="gallery_wrapper">
            {movieData.map((movie) => (
            <div className="movie_card_wrapper" key={uuidv4()}>
                <h2>{movie.title}</h2>
                <h3>{movie.year}</h3>
                <h4>{movie.director}</h4>
                <h4>{movie.duration}</h4>
                <h4>{movie.rate}</h4>
                <div>
                    {movie.genre.map((genre) => (
                        <p key={uuidv4()}>{genre}</p>
                    
                ))}
                </div>
            </div>
            ))}
        </section>
    );
}

export default MovieGallery;