import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8 col-sm-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} title={video.snippet.title} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <h1 className="lead">{video.snippet.title}</h1>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
