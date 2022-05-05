import React, { Component } from 'react'

export default function Movie(props) {

    const { movie } = props;
    return (
        <div className="card #ef9a9a red lighten-3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={movie.Poster} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{movie.Title}</span>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
            </div>
        </div>
    )
}   
