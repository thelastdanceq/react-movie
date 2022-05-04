import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
        }
    }
    searchData = () => {
        const { movies, updateParent } = this.props;
        updateParent([], true);
        fetch(`http://www.omdbapi.com/?apikey=dca66438&s=${this.state.search}`)
            .then(response => { return response.json() })
            .then(data => {
                updateParent(data.Search, false);
                this.state.search = "";
            });

    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field inline" style={{
                        display: 'flex', flexDirection: 'row',
                        width: "300px"
                    }}>
                        <input
                            placeholder='Search'
                            type="search"
                            className="validate"
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
        )
    }
}
