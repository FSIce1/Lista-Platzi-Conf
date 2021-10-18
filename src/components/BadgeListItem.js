import React from 'react';
import {Link} from 'react-router-dom';

import Gravatar from './Gravatar';

class BadgeListItem extends React.Component {
    
    render(){
        return(
            <div>
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>

                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`} >
                                
                                <div className="badge_container">
                                    <Gravatar 
                                        email={badge.email}
                                        alt="Imagen"
                                        className="imagen_container"
                                    />

                                    <p className="contenedor_info">
                                    {badge.nombre} {badge.apellido}
                                    <br></br>{badge.twitter}
                                    <br></br>{badge.email}
                                    </p>
                                
                                    
                                </div>

                            </Link>
                            
                            
                        </li>
                    )
                })}
            </div>
        );
    }
}

export default BadgeListItem;