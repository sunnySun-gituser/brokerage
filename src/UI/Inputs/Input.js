import React, { Fragment } from 'react';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Input.css';

const input = (props) => {
    let inputField = null;
    let errorMessage = null;

    if(props.invalid && props.shouldValidate && props.touched){
        errorMessage = (<em>{props.errorMessage}</em>);
    }

    // onBlur={props.blur}: input blur
    // onfocus: run when the cursor into that field
    // onblur: run when out of that field
    // DatePicker: create a calender and selecte the date
    switch (props.elementType) {
        case 'input':
            inputField = (
                <FormGroup controlId={props.id}>
                    <Col componentClass={ControlLabel} sm={2}>
                        {props.label}
                    </Col>
                    <Col sm={6}>
                        <FormControl type={props.type} value={props.value} onChange={props.changed} onBlur={props.blur} />
                    </Col>
                    <Col>
                        <em>{errorMessage}</em>
                    </Col>
                </FormGroup>
            )
            break;
        case 'datePicker':
            inputField = (
                <FormGroup controlId={props.id}>
                    <Col componentClass={ControlLabel} sm={2}>
                        {props.label}
                    </Col>
                    <Col sm={6}>
                        <DatePicker selected={props.value} dateFormat="MM/DD/YYYY" readOnly
                            onChange={props.changed} className='datePickerControl'
                            showYearDropdown dropdownMode="select"/>
                    </Col>
                    <Col>
                        <em>{errorMessage}</em>
                    </Col>
                </FormGroup>
            )
            break;
        default: inputField = null;
    }

    return (
        <Fragment>
            {inputField}
        </Fragment>
    )
}

export default input;