import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
            <h1>¿Quieres eliminarlo?</h1>
            <p>Esta acción eliminará la tarjeta</p>

            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Eliminar</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;