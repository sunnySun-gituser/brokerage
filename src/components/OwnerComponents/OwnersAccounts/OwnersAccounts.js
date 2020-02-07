import React from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Moment from 'react-moment';

const OwnersAccounts = (props) => {
    console.log("props = ", props)
    let accounts = null;

    const redirectToUpdateAccount = (id, history) => {
        console.log("id = ", id);
        history.push('/updateAccount/' + id);
    }

    const redirectToDeleteAccount = (id, history) => {
        console.log("id = ", id);
        history.push('/deleteAccount/' + id);
    }

    if (props.accounts) {
        accounts = props.accounts.map(account => {
          return (
                <tr key={account.id}>
                    <td>{account.accountType}</td>
                    <td><Moment format="MM/DD/YYYY">{account.dateCreated}</Moment></td>
                    <td>
                        <Button bsStyle="success" onClick={() => redirectToUpdateAccount(account.id, props.history)}>Update</Button>
                    </td>
                    <td>
                        <Button bsStyle="danger" onClick={() => redirectToDeleteAccount(account.id, props.history)}>Delete</Button>
                    </td>
                </tr>
            );
        })
    }

    return (
        <Row>
            <Col md={12}>
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>Account type</th>
                            <th>Date created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default OwnersAccounts;