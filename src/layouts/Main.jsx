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
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers&page=1`)
            .then(response => { return response.json() })
            .then(data => {
                console.log(data);
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
                <div className='main #fbe9e7 deep-orange lighten-5'>
                    <Search movies={movies} updateParent={(data) => { this.setState({ movies: data }) }} />
                    {/* <span className='count-of-cards'>{movies.length}</span> */}
                    <Movies movies={movies} />

                </div >
                : <Preloader />
        )
    }
}
