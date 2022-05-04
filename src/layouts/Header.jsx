import React from 'react'

export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo center">Movies</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="!#">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}
