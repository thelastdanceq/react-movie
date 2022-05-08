import React, { useEffect, useState } from 'react'
import Preloader from './Preloader'
const API_KEY = process.env.REACT_APP_API_KEY


const Search = (props) => {
    const [search, setSearch] = useState("")
    const [radio, setRadio] = useState("All")
    const [isLoading, setIsLoading] = useState(false)

    const { movies, updateParent, setIsLoadingMAin } = props;

    function searchData() {

        updateParent([], true);
        radio === 'All' ?
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
                .then(response => { return response.json() })
                .then(data => {
                    updateParent(data.Search, false);

                }).catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                }) :
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${radio.toLowerCase()}`)
                .then(response => { return response.json() })
                .then(data => {
                    updateParent(data.Search, false);

                }).catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                })
    }


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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.code === "Enter") {
                                    searchData();
                                }
                            }}
                        />
                        <button
                            className='btn search-btn e57373 red lighten-2'
                            onClick={() => {
                                searchData()
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
                            checked={radio === "All"}
                            onInput={() => {
                                searchData()
                            }}
                            onChange={(e) => {
                                setRadio(e.target.id);
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
                            checked={radio === "Movie"}
                            id='Movie'
                            onInput={() => {
                                searchData()
                            }}
                            onChange={(e) => {
                                setRadio(e.target.id);

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
                            checked={radio === "Series"}
                            id='Series'
                            onInput={() => {
                                searchData()
                            }}
                            onChange={(e) => {
                                setRadio(e.target.id);

                            }} />
                        <span>Series</span>
                    </label>
                </p>
            </div>
        </div>
    )

}
export default Search;