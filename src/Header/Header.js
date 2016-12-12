import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import { activateMenuItem } from './actionCreators';

import logo from '../images/logo.svg';
import linkedinIcon from '../images/icons/linkedin_icon.png';
import linkedinIconLight from '../images/icons/linkedin_icon_light.png';
import githubIcon from '../images/icons/github_icon.png';
import githubIconLight from '../images/icons/github_icon_light.png';
import './Header.css';

const mapStateToProps = (state) => ({
    menuItems: state.mainMenu.menuItems,
	activeItem: state.mainMenu.activeItem
})

const mapDispatchToProps = (dispatch) => ({
    activateMenuItem: (item) => dispatch (activateMenuItem(item) )
})

const Header = ({
		menuItems,
		activeItem,
		activateMenuItem
	}) => (	
		<Grid className="App-header" fluid>
			<Row>
				<Col xs={12} sm={2} lg={2}>
					<img src={logo} className="App-logo" alt="logo" />
				</Col>
	
				<Col xs={12} sm={8} lg={8}>
					<ul id="App-main-nav">			
						{menuItems.map(item =>
						<li key={item.name}>
							<Link to={item.path} 
							className={item.name === activeItem ? "active" : null}
							onClick={()=> activateMenuItem(item.name)}> {item.name} 
							</Link> 
						</li> 
						)}		
					</ul>
				</Col>
				
				<Col className="header-social-icons" xs={12} sm={2} lg={2}>
					<img src={linkedinIcon} alt="linkedin-icon" />
					<img src={githubIcon} alt="github-icon" />
				</Col>
				
			</Row>
		</Grid>
		)	

export default connect(mapStateToProps, mapDispatchToProps)(Header);