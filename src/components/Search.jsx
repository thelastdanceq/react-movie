import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
        }
    }
    render() {
        const { movies } = this.props;
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
                        />
                        <button
                            className='btn search-btn e57373 red lighten-2'
                            onClick={() => {

                            }}
                        > Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
