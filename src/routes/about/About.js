import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <Grid className="About">
                <Row className="main-info">
                    <Col xs={12} sm={6} lg={6}>
                        <h2>O mnie</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor. 
						Pellentesque ornare sem lacinia quam venenatis. 
						onec ullamcorper nulla non metus auctor fringilla.Pellentesque ornare sem 
						lacinia quam venenatis. onec ullamcorper nulla non metus auctor fringilla.</p>
                    </Col>				
                </Row>
				
				<Row className="skills-tags">
                    <Col xs={12} sm={3} lg={3}>
                        <h4>HTML/CSS</h4>
                        <span><small>Sample text about html and css.</small></span>
                    </Col>                    
					<Col xs={12} sm={3} lg={3}>
                        <h4>JavaScript</h4>
                        <span><small>Sample text about javascript.</small></span>
                    </Col>
					<Col xs={12} sm={3} lg={3}>
                        <h4>Web Design</h4>
                        <span><small>Sample text about html and web design.</small></span>
                    </Col>                    
					<Col xs={12} sm={3} lg={3}>
                        <h4>ReactJS</h4>
                        <span><small>Sample text about html and reactJS.</small></span>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default About;
