import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video; //redundant with the constructor args
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		//className is basically css class but name changed for react/js conflict reasons
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;