import React from 'react';
import {Row} from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
import './YouTubeComponent.css';

import YouTubePlayer from './player/YouTubePlayer';

class YouTubeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: []
    }
  }

  componentDidMount() {
    let that = this;

    let apiKey = 'AIzaSyBK-z2nnPoa4TmXXo6JW36zBtz3T2JPa3A';
    let playlistId ='PL64iwtdelkFTbcPaCOwLc8MgAsis3AvWm';
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=' + playlistId +'&key='+ apiKey +'&part=contentDetails,snippet&maxResults=16';

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Error - " + url + response.statusText);
      }
      console.log('Success - '+ url + response.statusText);
      return response.json();
    })
    .then(function(data) {
      that.setState({
        playList: data.items
       });
    });
  }


  render() {
    return (
      <Row>
        <YouTubePlayer
          playList={this.state.playList}
        />
			</Row>
    );
  }

}

export default YouTubeComponent;
