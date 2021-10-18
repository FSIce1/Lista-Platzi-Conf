import React from 'react';

import './styles/BadgeNew.css';

import logo from '../img/platziconf-logo.svg';
import Header from '../components/Header';
import api from '../api';

import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component{

    state = {
        loading: true,
        error: null,
        form: {
        nombre: '',
        apellido: '',
        trabajo: '',
        twitter: '',
        avatar: ''
    }};

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({
            loading: true,
            error: null
        })

        try {
            /* Error */
            
            const data = await api.badges.read(
                this.props.match.params.badgeEdit
            );
            

            this.setState({
                loading: false,
                form: data
            });
            

        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }

    }

    handleChange = e => {
        
        //const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        //e.preventSubmit();
        e.preventDefault();
        this.setState({loading: true, error: null})

        try {
            await api.badges.update(this.props.match.params.badgeEdit,this.state.form);
            this.setState({loading: false});

            /* RUTA */
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error})
        }

    }

    render(){

        if(this.state.loading){
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={logo} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Header 
                                nombre={this.state.form.nombre || 'FIRST_NAME'}
                                apellido={this.state.form.apellido || 'LAST_NAME'}
                                trabajo={this.state.form.email || 'EMAIL'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                avatar={this.state.form.email}
                                //"https://es.gravatar.com/userimage/191517058/393863189473d3effef47bf89b53c075.jpg" 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default BadgeEdit;