import React, { Component } from 'react'
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: true,
        }
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=dca66438&s=avengers')
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ movies: data.Search, isLoading: false });
            })
    }
    render() {
        const { movies, isLoading } = this.state;
        return (
            movies.length ?
                <>
                    <Search movies ={movies} />
                    <Movies movies={movies} />
                </>
                : <Preloader />
        )
    }
}
