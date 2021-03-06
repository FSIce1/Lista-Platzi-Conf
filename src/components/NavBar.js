import React from 'react';

import "./styles/Navbar.css";
import logo from '../img/badge-header.svg';

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/Badges">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;