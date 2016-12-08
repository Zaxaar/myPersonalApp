import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import logo from '../images/logo.svg';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <Grid className="App-header" fluid>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Hello</h2>
            </Grid>
        )
    }
}

export default Header;