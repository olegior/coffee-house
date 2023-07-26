import React from 'react'

export const Navbar = ({ color }) => {
    return (
        <div className="navbar-nav">
            <a className="nav-link" href="#">
                <img src="assets/logo.png" alt="Logo" className="d-inline-block align-text-top" style={color && { filter: "invert(1)" }} />Coffee house</a>
            <a className="nav-link" href="#">Our coffee</a>
            <a className="nav-link" href="#">For your pleasure</a>
        </div>
    )
}
