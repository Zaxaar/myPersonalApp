import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

import logo from '../images/logo.svg';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <Grid className="App-header" fluid>
                <Row>
                    <Col xs={12} sm={4} lg={4}>
                        <h2><img src={logo} className="App-logo" alt="logo" />Hello</h2>
                    </Col>

                    <Col xs={12} sm={8} lg={8}>
                        <ul id="App-main-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Projekty</Link></li>
                            <li><Link to="/">O mnie</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Header;