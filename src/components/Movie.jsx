import React, { useContext } from 'react'
import { context } from "../context";

export default function Movie(props) {
    const contextMovies = useContext(context)
    const { movie } = props;
    return (
        <div className="card #ef9a9a red lighten-3" onClick={() => {
            fetch(`http://www.omdbapi.com/?apikey=${contextMovies.API_KEY}&i=${movie.imdbID}`)
                .then(response => response.json())
                .then(data => {
                    contextMovies.setIsModalActive(data)
                })

        }}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
            </div>
        </div>
    )
}   
