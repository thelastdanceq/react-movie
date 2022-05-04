import React, { Component } from 'react'
const API_KEY = process.env.REACT_APP_API_KEY


export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            radio: 'All',
        }
    }
    searchData = () => {
        const { movies, updateParent } = this.props;
        updateParent([], true);
        this.state.radio === 'All' ?
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.search}`)
                .then(response => { return response.json() })
                .then(data => {
                    updateParent(data.Search, false);

                }).catch((err) => {
                    console.log(err);
                    this.setState({ isLoading: false })
                }) :
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.search}&type=${this.state.radio.toLowerCase()}`)
                .then(response => { return response.json() })
                .then(data => {
                    updateParent(data.Search, false);

                }).catch((err) => {
                    console.log(err);
                    this.setState({ isLoading: false })
                })


    }

    render() {
        return (
            <div className="search">
                <div className="row">
                    <div className="col s12">
                        <div className="input-field inline" style={{
                            display: 'flex', flexDirection: 'row',
                            width: "300px"
                        }}>
                            <input
                                placeholder='Search'
                                type="search"
                                className="validate search-input"
                                value={this.state.search}
                                onChange={(e) => this.setState({ search: e.target.value })}
                                onKeyDown={(e) => {
                                    if (e.code === "Enter") {
                                        this.searchData();
                                    }
                                }}
                            />
                            <button
                                className='btn search-btn e57373 red lighten-2'
                                onClick={() => {
                                    this.searchData()
                                }}

                            > Search</button>
                        </div>
                    </div>
                </div>
                <div className="filters" style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>
                        <label>
                            <input
                                className="with-gap lighten-3"
                                name="group1"
                                type="radio"
                                id='All'
                                checked={this.state.radio === "All"}
                                onChange={(e) => {
                                    this.setState(() => ({ radio: e.target.id }), () => {
                                        this.searchData();
                                    })

                                }}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap red lighten-3"
                                name="group1"
                                type="radio"
                                checked={this.state.radio === "Movie"}
                                id='Movie'
                                onChange={(e) => {
                                    this.setState(() => ({ radio: e.target.id }), () => {
                                        this.searchData();
                                    })

                                }} />
                            <span>Movie</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap red lighten-3"
                                name="group1"
                                type="radio"
                                checked={this.state.radio === "Series"}
                                id='Series'
                                onChange={(e) => {
                                    this.setState(() => ({ radio: e.target.id }), () => {
                                        this.searchData();
                                    })

                                }} />
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>

        )
    }
}
