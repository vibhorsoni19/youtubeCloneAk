import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constant";
import VideoCard ,{RedBorderVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("error fetching videos", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <RedBorderVideoCard info={videos[0]}/>}
      {loading ? (
        <p>Loading videos...</p>
      ) : (
        videos?.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
