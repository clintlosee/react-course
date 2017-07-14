import React from 'react';
import YouTube from 'react-youtube';

class AboutPage extends React.Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };

        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
                <YouTube videoId="2g811Eo7K8U"
                    opts={opts}
                    onReady={this._onReady} />
            </div>
        );
    }
}

export default AboutPage;
