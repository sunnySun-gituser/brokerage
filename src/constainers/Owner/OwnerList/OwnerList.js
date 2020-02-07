import React, { Fragment, useEffect } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as repositoryActions from '../../../store/actions/repositoryActions'
import { useSelector, useDispatch } from 'react-redux';
import Owner from '../../../components/OwnerComponents/Owner/Owner';

// owners: to hold all owners in the db
const OwnerList = (props) => {

    let owners = [];
    // display multiplay owner on the owner array: currently empty
    // get any from action, db
    // put in the state, get it out from state, put it on the page
    // const data = useSelector(state => state.data);
    // useSeletor: to access the state
    // state reducers: repository, errorHandler
    const data = useSelector(state => state.repository.data);

    // {...props}: to pass route to owner.js: using props.history to redirect 
    // owner: props.owner
    // key: for creating child components from the array 
    if(data && data.length > 0){
        owners = data.map(owner => {
            return (
                <Owner key={owner.id} owner={owner} {...props} />
            )
        })
    }

    const dispatch = useDispatch();
    //using hooks:useEffect()
    useEffect(() =>{
        let url = '/api/owner';
        console.log('line 30')
        //don't change props: 
        dispatch(repositoryActions.getData(url, {...props}));
    }, [dispatch, props])//dependency array: by default if dispatch, props change, it run again

    return (
        <Fragment>
            <Row>
                <Col mdOffset={10} md={2}>
                    <Link to='/createOwner' >Create Owner</Link>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={12}>
                    <Table responsive striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>Address</th>
                                <th>Details</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {owners}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Fragment>
    )
}

export default OwnerList;