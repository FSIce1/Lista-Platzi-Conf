import React from 'react';

import confLogo from '../img/badge-header.svg';

import "./styles/Badge.css";

import Gravatar from './Gravatar';

class Header extends React.Component {
    render(){

        const{
            nombre,
            apellido,
            trabajo,
            twitter,
            //avatar
        } = this.props;


        return(
            <div className="Badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo" />
                </div>

                <div className="badge_section-name">
                    
                    {/* <img className="badge_avatar" src={avatar} alt="Avatar" /> */}
                    
                    <Gravatar 
                        className="badge_avatar"
                        email={trabajo}
                        alt="Avatar"
                    />
                    
                    <h1>{nombre} <br/> {apellido} </h1>
                </div>

                <div className="badge_section-info">
                    <p>{trabajo}</p>
                    <p>@{twitter}</p>
                </div>

                <div className="badge_footer">#platziconf</div>

            </div>
        );
    }
}

export default Header;