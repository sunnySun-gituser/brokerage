import React, { useState, useEffect } from 'react';
import Input from '../../../UI/Inputs/Input';
import { Form, Well, Button, FormGroup, Col } from 'react-bootstrap';
import * as formUtilityActions from '../../../Utility/AccountFormUtility'
import { useSelector, useDispatch } from 'react-redux';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import { returnAccountConfiguration } from '../../../Utility/returnAccountConfiguration';


// connection to reducer: useSelector, useDispatch
// and need actions: repositoryActions.js, errorHandleActions.js
const CreateAccount = (props) => {
    let ownerId = props.match.params.ownerId;
    console.log('ownerId=' + ownerId)

    const [accountForm, setAccountForm] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.errorHandler.errorMessage);
    const showErrorModal = useSelector(state => state.errorHandler.showErrorModal);
    const showSuccessModal = useSelector(state => state.repository.showSuccessModal);

    useEffect(() => {
        setAccountForm(returnAccountConfiguration());
    },[]);

    const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects({ ...accountForm });

    const createAccount = (event) => {
        event.preventDefault();
    
        // create new owner object from the form
        const accountToCreate = {
            dateCreated: accountForm.dateCreated.value,
            accountType: accountForm.accountType.value,
            ownerId: ownerId
        }
        console.log(accountToCreate)

        const createAccountUrl = 'api/accounts';
        // with the props: for redirect: postData: go to definatoin right click
        // execute500: props is to push error value('/500')repositoryActions
        dispatch(repositoryActions.postData(createAccountUrl, 
                                                accountToCreate, 
                                                { ...props }));
    }

    const redirectToOwnerList = () => {
        console.log(props);
        props.history.push('/owner-list');
    }

    const handleChangeEvent = (event, id) => {
        const updatedAccountForm = { ...accountForm };
        updatedAccountForm[id] = 
            formUtilityActions.executeValidationAndReturnFormElement(event, 
                                                                    updatedAccountForm, 
                                                                    id);
    
        const counter = formUtilityActions.countInvalidElements(updatedAccountForm);
    
        setAccountForm(updatedAccountForm);
        setIsFormValid(counter === 0);
    }

    return (
        <Well>
            <Form horizontal onSubmit={createAccount}>
                {
                    formElementsArray.map(element => {
                            return <Input key={element.id} elementType={element.config.element}
                            id={element.id} label={element.config.label}
                            type={element.config.type} value={element.config.value}
                            changed={(event) => handleChangeEvent(event, element.id)}
                            errorMessage={element.config.errorMessage}
                            invalid={!element.config.valid} shouldValidate={element.config.validation}
                            touched={element.config.touched}
                            blur={(event) => handleChangeEvent(event, element.id)} />
                    })
                }
                <br />
                <FormGroup>
                        <Col mdOffset={6} md={1}>
                            <Button type='submit' bsStyle='info' disabled={!isFormValid}>Create</Button>
                        </Col>
                        <Col md={1}>
                            <Button bsStyle='danger' onClick={redirectToOwnerList}>Cancel</Button>
                        </Col>
                </FormGroup>
            </Form>
            <SuccessModal show={showSuccessModal}
                    modalHeaderText={'Success message'}
                    modalBodyText={'Action completed successfully'}
                    okButtonText={'OK'}
                    successClick={() => dispatch(repositoryActions.closeSuccessModal({ ...props }, '/owner-List'))} />
            <ErrorModal show={showErrorModal}
                    modalHeaderText={'Error message'}
                    modalBodyText={errorMessage}
                    okButtonText={'OK'} 
                    closeModal={() => dispatch(errorHandlerActions.closeErrorModal())} />
        </Well>
    )
}

export default CreateAccount;