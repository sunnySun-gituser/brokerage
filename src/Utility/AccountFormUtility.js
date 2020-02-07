export const convertStateToArrayOfFormObjects = (formObject) => {
    const formElementsArray = [];
    for (let key in formObject) {
        formElementsArray.push({
            id: key,
            config: formObject[key]
        });
    }

    return formElementsArray;
}

// copy the form triggle the event
// copy the form element chanaged, get value from the form element: id, dateofbirth, value is the event
// == true: 
// validation: inputConfiguration.js
// return isValid, errormessage, then return formElement
export const executeValidationAndReturnFormElement = (event, updatedAccountForm, id) => {
    let formElement = { ...updatedAccountForm[id] };
    console.log('id='+id)
    formElement.value = id === 'DateCreated' ? event : event.target.value;
    formElement.touched = true;

    const validationResponse = checkValidity(formElement.value, formElement.validation);

    formElement.valid = validationResponse.isValid;
    formElement.errorMessage = validationResponse.errorMessage;

    return formElement;
}

// get value, and validation
// check required, isValid...
// check main line
const checkValidity = (value, validation) => {
    let validationObject = {
        isValid: true,
        errorMessage: ''
    };

    if (validation) {
        if (validation.required) {
            validationObject.isValid = value.trim() !== '';
            validationObject.errorMessage = validationObject.isValid ? '' : 'Field is required';
        }

        if (validationObject.isValid && validation.maxLength) {
            validationObject.isValid = value.length <= validation.maxLength;
            validationObject.errorMessage = `Not allowed more than ${validation.maxLength} characters`;
        }

        return validationObject;
    }
    else {
        return validationObject;
    }
}

// handle change: do validation
// looping each elements form add one to countInvalidElements
// ==0 if are +1, 
// 0 or 1
export const countInvalidElements = (accountForm) => {
    let countInvalidElements = 0;
    for (let element in accountForm) {
        if (!accountForm[element].valid) {
            countInvalidElements = countInvalidElements + 1;
            break;
        }
    }
    return countInvalidElements;
}
