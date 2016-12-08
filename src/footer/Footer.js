import React from 'react';
import {Grid} from 'react-bootstrap'
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <Grid className="App-footer" fluid>
                <h4>Current Date {new Date().getFullYear()} </h4>
            </Grid>
        )
    }
}

export default Footer;