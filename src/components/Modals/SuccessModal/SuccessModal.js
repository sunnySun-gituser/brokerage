import React, { Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../ModalStyles.css';

// Redux: showsuccessfully: props.show
//props.successClick: method click on success modal +
// like pop window
const SuccessModal = (props) => {
    return (
        <Fragment>
            <Modal show={props.show} backdrop='static'>
                <Modal.Header>
                    {props.modalHeaderText}
                </Modal.Header>
                <Modal.Body>
                    <p>{props.modalBodyText}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={props.successClick}>{props.okButtonText}</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default SuccessModal;