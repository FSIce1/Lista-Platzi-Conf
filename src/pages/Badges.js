import React from 'react';

import './styles/Badges.css';


import {Link} from 'react-router-dom';


import logo from '../img/badge-header.svg';

import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

import api from '../api';

class Badges extends React.Component {
    
    
    constructor(){
        super();
        //console.log('1, constructor()');
        
        
        this.state = {
            loading: true,
            error: null,
            data: undefined
        };
    }

    componentDidMount(){
        this.fetchData();

        //this.intervalId = setInterval(this.fetchData, 5000);

    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({
            loading:true,
            error: null
        });

        try {
            const data = await api.badges.list();
            
            this.setState({
                loading: false, 
                data: data 
            })
        } catch (error) {
            this.setState({
                loading: false,
                data: error
            })
        }

    }
    
    componentDidUpdate(prevProps, prevState){
        //console.log('5, componentDidUpdate()');
        /*console.log({
            prevProps: prevProps,
            prevState: prevState,
        });

        console.log({
            props: this.props,
            state: this.state,
        });
        */

    }

/*
    componentWillUnmount(){
        //console.log('6. componentWillUnmount');
        
        clearTimeout(this.timeoutId);
    }
*/

    render(){

        /*
        console.log('2/4, render()')
        */

        if(this.state.loading === true && !this.state.data){
            //return 'loading...';
            return <PageLoading />;
        }

        if(this.state.error === true){
            return <PageError error={this.state.error} />;
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                className="Badges_conf-logo" 
                                src={logo} 
                                alt="Logo" 
                            />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">

                    <div className="Badges__list">
                        <div className="Badges__container">
                            
                            <div className="Badges__buttons">
                                <Link to="badges/new" className="btn btn-primary">
                                    Nuevo
                                </Link>
                            </div>
                            
                            <BadgesList badges={this.state.data} />

                            {this.state.loading && <MiniLoader />}

                        </div>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

export default Badges;