import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <Grid className="About">
                <Row>
                    <Col xs={12} sm={6} lg={6}>
                        <h2>O mnie</h2>
                        <p>Strona w budowie. Trzeba sprawdzić działanie znaków.  </p>
                        <Button bsStyle="info" onClick={()=>alert("hello!")} >Naciśnij przycisk</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default About;
