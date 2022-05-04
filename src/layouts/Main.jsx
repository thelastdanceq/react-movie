import React, { Component } from 'react'
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: true,
        }
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ movies: data.Search, isLoading: false });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ isLoading: false })
            })
    }
    render() {
        const { movies } = this.state;
        return (
            !this.state.isLoading ?
                <>
                    <Search movies={movies} updateParent={(data) => { this.setState({ movies: data }) }} />
                    <Movies movies={movies} />
                </>
                : <Preloader />
        )
    }
}
