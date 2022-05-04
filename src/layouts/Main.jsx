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
        const { movies } = this.state;
        return (
            !this.state.isLoading ?
                <>
                    <Search movies={movies} updateParent={(data, loadingState) => { this.setState({ movies: data, isLoading: loadingState }) }} />
                    <Movies movies={movies} />
                </>
                : <Preloader />
        )
    }
}
