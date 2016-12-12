import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <Grid className="App-footer" fluid>
                <Row>
                    <Col className="footer-copy" xs={12} sm={12} lg={12}>
                        <h5>Copyright &copy; {new Date().getFullYear()} </h5>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer;