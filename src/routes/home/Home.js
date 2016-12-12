import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import tagImage from '../../images/icons/blank_tag_image.png';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
		<div>
            <Grid className="Home-headline" fluid>
                <Row>
                    <Col className="Home-headline-text" xs={12} sm={12} lg={12}>
                        <h2>Home</h2>
                        <p>Strona w budowie. Trzeba sprawdzić działanie polskich znaków.</p>
                        <Button bsStyle="danger" onClick={()=>console.log("Home Button!")} >Naciśnij</Button>
                    </Col>
                </Row>
            </Grid>
			
			<Grid>
                <Row className="Home-technology-tags">
                    <Col className="Home-tag-block" xs={12} sm={4} lg={4}>
						<img src={tagImage} alt=""/>
                        <h4>Budowa stron www</h4>
                        <p>html / css / bootstrap </p>
                    </Col>
					<Col className="Home-tag-block" xs={12} sm={4} lg={4}>
						<img src={tagImage} alt=""/>
                        <h4>Programowanie JS</h4>
                        <p>JavaScript / jQuery / reactJS</p>
                    </Col>
					<Col className="Home-tag-block" xs={12} sm={4} lg={4}>
						<img src={tagImage} alt=""/>
                        <h4>Web Design</h4>
                        <p>RWD / Photoshop / Illustrator </p>
                    </Col>
                </Row>
            </Grid>
			
		</div>
			
        );
    }
}

export default Home;
