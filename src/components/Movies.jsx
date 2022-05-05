import React, { Component } from 'react'
import Movie from './Movie'

export default function Movies(props) {

    const { movies } = props;
    return (
        movies ?
            <div className='movies'>{movies.map((movie) => {
                return (
                    <Movie key={movie.imdbID} movie={movie} />
                )
            })}</div>
            : <h4>Not Found</h4>
    )


}
