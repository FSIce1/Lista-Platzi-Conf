import React from 'react';

import not from '../img/404.png';
import './styles/BadgeNew.css';

function NotFound(){
    return(
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={not} alt="" />
        </div>
    );
}

export default NotFound;