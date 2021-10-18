import React from 'react';

import confLogo from '../img/platziconf-logo.svg';

import Header from '../components/Header';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import { Link } from 'react-router-dom';

function useIncreaseCount(max){
    const [count, setCount] = React.useState(0);

    if(count>max){
        setCount(0);
    }

    return [count, setCount];
}

function BadgeDetails(props){

    //const count = 3;
    const [count ,setCount] = useIncreaseCount(4);//React.useState(0);

    const badge = props.badge;

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo" />
                        </div>

                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.nombre} {badge.apellido}</h1>
                        </div>
                        
                    </div>
                </div>
            </div>  
        
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <Header 
                            nombre={badge.nombre || 'FIRST_NAME'}
                            apellido={badge.apellido || 'LAST_NAME'}
                            trabajo={badge.email || 'EMAIL'}
                            twitter={badge.twitter || 'TWITTER'}
                            avatar={badge.email}
                            //"https://es.gravatar.com/userimage/191517058/393863189473d3effef47bf89b53c075.jpg" 
                        />

                    </div>

                    <div className="col">
                        <h2>Acciones</h2>
                        <div> 

                            <button onClick={() => {
                                setCount(count+1);
                            }} className="btn btn-primary">
                                Contador {count}
                            </button>
                            
                            <Link className="btn btn-primary" to={`/badges/${badge.id}/edit`}>
                            Editar</Link>

                            <button onClick={props.onOpenModal} className="btn btn-danger">Eliminar</button>
                            
                            <DeleteBadgeModal 
                                isOpen={props.modalIsOpen} 
                                onClose={props.onCloseModal} 
                                onDeleteBadge={props.onDeleteBadge}    
                            />
                            

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BadgeDetails;