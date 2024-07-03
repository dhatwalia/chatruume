import React from 'react';
import fetch from 'isomorphic-unfetch';

const RecordingVideos = ({ videos }) => {
    return (
        <div>
            <h1>Recording Videos</h1>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        <p>ID: {video.id}</p>
                        {video.url && <p>URL: {video.url}</p>}
                        <p>Price: {video.price}</p>
                        <p>End At: {video.endAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/recording-videos');
    const videos = await res.json();

    return {
        props: { videos },
    };
}

export default RecordingVideos;
