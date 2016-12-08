import React from 'react';
import {Grid} from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <Grid className="Home">
                <h4>Żyrafy wchodzą do szafy</h4>
                <p>Witam na mojej stronie.</p>
            </Grid>
        );
    }
}

export default Home;
