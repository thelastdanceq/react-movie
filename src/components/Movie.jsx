import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { movie } = this.props;
        return (
            <div className="card">
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
}
