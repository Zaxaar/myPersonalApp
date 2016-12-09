import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <Grid className="App-footer" fluid>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <h4>Current Date {new Date().getFullYear()} </h4>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer;