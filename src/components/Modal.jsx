import React from 'react'


export default function Modal({ isModalActive }) {
    console.log(isModalActive);
    const { Title,
        Poster,
        Director,
        Genre,
        Country,
        Released,
        Runtime,
        Year,
        imdbRating,
        Plot
    } = isModalActive
    return (
        <div className='custom-modal'>
            <div className="image-block"><img src={Poster} alt={Title}
                width="100%" height="100%" /></div>
            <div className="discription-block">
                <span>Title :{Title}</span>
                <span>Director : {Director}</span>
                <span>Genre : {Genre}</span>
                <span>Country :{Country}</span>
                <span>Released:{Released}</span>
                <span>Runtime :{Runtime}</span>
                <span>Year :{Year}</span>
                <span>Rating :{imdbRating}</span>
            </div>
            <div className="statystic-block">
                {Plot}
            </div>
        </div>
    )
}
