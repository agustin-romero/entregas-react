import React from "react";
import Video from "./Video";

class Videos extends React.Component {
    render() {
        return (
            <>
            {
                this.props.videos.length > 0 
                ? this.props.videos.map((video, index) =>
                <Video
                    key={index}
                    title={video.title}
                    dateAdded={video.dateAdded}
                    channel={video.channel}
                    thumbnail={video.thumbnail}
                    description={video.description} />

                )
                :
                <p>No se encontraron videos</p>
            }
            </>
        );
    }
}

export default Videos;