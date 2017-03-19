import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './Projects.css';

import YouTubeComponent from './yt-component/YouTubeComponent';

class Projects extends React.Component {
    render() {
        return (
            <Grid className="Projects">
                <Row>
                    <Col xs={12} sm={6} lg={6}>
                        <h2>Projekty</h2>
                        <p> Strona w budowie. Trzeba sprawdzić działanie znaków.  </p>
                        <Button bsStyle="success" onClick={()=>console.log("Projects Button!")}>Naciśnij przycisk</Button>
                    </Col>
				        </Row>
                <YouTubeComponent />
            </Grid>
        );
    }
}

export default Projects;
