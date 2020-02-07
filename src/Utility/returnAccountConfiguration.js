import moment from 'moment';

// it is better clients side validation or server validation? both
// clients side: vali nice use interface
// server side: validation:
// name address dateofBirth: validation true? false? 
// touched: use move the cursor in that field
// if touched is not validate 
// value: moment(), for date
export const returnAccountConfiguration = () => {
    return {
        dateCreated: {
            element: 'datePicker', type: 'text', value: moment(),
            valid: true, touched: false,
            errorMessage: '', label: 'DateCreated:'
        },
        accountType: {
            element: 'input', type: 'text', value: '',
            validation: { required: true, maxLength: 60 }, valid: false, touched: false,
            errorMessage: '', label: 'AccountType:'
        }
    }
}