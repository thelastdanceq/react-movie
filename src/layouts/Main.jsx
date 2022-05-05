import React, { useState, useEffect } from 'react'
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY


export default function Main() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers&page=1`)
            .then(response => { return response.json() })
            .then(data => {
                setMovies(data.Search);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })

    }, [])
    const updateStateLoading = (param) => {
        setIsLoading(param)
    }
    useEffect(() => {
    }, [isLoading])

    return (
        !isLoading ?
            <div className='main #fbe9e7 deep-orange lighten-5'>
                <Search movies={movies} updateParent={(data) => { setMovies(data) }} updateStateLoading={updateStateLoading} />
                {/* <span className='count-of-cards'>{movies.length}</span> */}
                <Movies movies={movies} />

            </div >
            : <Preloader />
    )
}
