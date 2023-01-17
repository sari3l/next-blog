import React from "react";

export interface YouTubeProps {
  /** YouTube id */
  videoId?: string;
  /** YouTube Playlist id */
  playlistId?: string;
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Autoplay the video */
  autoPlay?: boolean;
}

const YouTube: React.FC<YouTubeProps> = (props) => {
  const {
    videoId,
    playlistId,
    skipTo = { h: 0, m: 0, s: 0 },
    autoPlay = false,
  } = props;
  const { h, m, s } = skipTo;
  const tH = h! * 60;
  const tM = m * 60;
  const startTime = tH + tM + s;
  const src = `https://www.youtube.com/embed/${
    videoId
      ? `${videoId}?&autoplay=${autoPlay}&start=${startTime}`
      : `&videoseries?list=${playlistId}`
  }`;
  return (
    <iframe
      title={`YouTube-${videoId || playlistId}`}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full ring-2 ring-gray-200 dark:ring-gray-900 rounded-md shadow-2xl"
    ></iframe>
  );
};

export default YouTube;
