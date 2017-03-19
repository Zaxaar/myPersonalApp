import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './YouTubePlayer.css';

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClipId: '',
      currentClipIndex: 0
    }
  }

  componentWillMount(){
    let that = this;
    this.setState({
      currentClipId: 'NCZuYS-9qaw'
    })
  }

  navigate(arg) {
    let index = this.state.currentClipIndex;

    if (arg === 'prev' && index > 0) {
      index--;
    }
    if (arg === 'next' && index < this.props.playList.length-1) {
      index++;
    }
    this.setState({
      currentClipIndex: index,
      currentClipId: this.props.playList[index].contentDetails.videoId
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} lg={6} className="youtube-wrapper">
            <div className="youtube">
              <iframe
                  width="100%" height="360" className="youtube-frame"
                  src={`https://www.youtube.com/embed/${this.state.currentClipId}?autoPlay=0`}
                  allowFullScreen
              />
            </div>
        </Col>
  		</Row>

      <Row>
        <Button bsStyle="success" onClick={()=> this.navigate('prev')}>Prev</Button>
        <Button bsStyle="success" onClick={()=> this.navigate('next')}>Next</Button>
      </Row>
    </Grid>
    );
  }

}

export default YouTubePlayer;
