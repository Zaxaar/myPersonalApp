import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <Grid className="Home" fluid>
                <Row>
                    <Col className="Home-headline-text" xs={12} sm={6} lg={6}>
                        <h2>Home</h2>
                        <p> Strona w budowie. Trzeba sprawdzić działanie polskich znaków.  </p>
                        <Button bsStyle="danger" onClick={()=>alert("hello!")} >Naciśnij przycisk</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;
