import React from 'react';

import './styles/Badge.css';

import BadgeListItem from './BadgeListItem';
import {Link} from 'react-router-dom';

function useSearchBadges(badges) {

    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteresResults] = React.useState(badges);


    React.useMemo(() =>{
        const resultado = badges.filter(badge => {
            return`${badge.nombre} ${badge.apellido}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setFilteresResults(resultado);

    }, [badges, query]);

    return {query, setQuery, filteredBadges};
}

function BadgeList (props) {

    const badges = props.badges;
    
    /* Para listados pequeños */
    /*
    const filteredBadges = badges.filter(badge => {
        return`${badge.nombre} ${badge.apelliod}`.toLowerCase().includes(query.toLowerCase());
    });
    */
        
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

        if(filteredBadges.length ===0){
            return (
                <div>

                <div className="form-group">
                    <label htmlFor="">Filtro</label>
                    <input type="text" 
                    className="form-control" 
                    value={query} 
                    onChange={(e) => {
                        //console.log(e.target.value);
                        setQuery(e.target.value);
                    }}/>
                    <br></br>
                </div>

                    <h3>No encontramos ningún elemento</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crea un nuevo elemento
                    </Link>
                </div>
            )
        }

        return (
            <div className="BadgesList">

                <div className="form-group">
                    <label htmlFor="">Filtro</label>
                    <input type="text" className="form-control" 
                    value={query} 
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}/>
                    <br></br>
                </div>

                <ul className="list-unstyled">
                    <BadgeListItem badges={filteredBadges} />
                </ul>
            </div>
        );
}

export default BadgeList;
