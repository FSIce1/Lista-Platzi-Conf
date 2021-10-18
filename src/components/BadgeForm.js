import React from 'react';

class BadgeForm extends React.Component {

    /*state = {};*/

    /*
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    */

    handleClick = e => {
        console.log('Clickaste el botón');
    };
    
    /*
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        console.log('Evento detenido');
    };
    */
    
    

    render(){
        return (
            
            <div>
                <h1>Formulario</h1>

                <form onSubmit={this.props.onSubmit} action="">
                    
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="nombre" 
                            value={this.props.formValues.nombre}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="apellido" 
                            value={this.props.formValues.apellido}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="email" 
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            value={this.props.formValues.twitter}
                        />
                    </div>
                <br></br>
                    <button onClick={this.handleClick} className="btn btn-primary">Enviar</button>

                {
                    this.props.error && (
                        <p className="text-danger" >{this.props.error.message}</p>
                )}

                </form>

            </div>

        )
    }
}

export default BadgeForm;