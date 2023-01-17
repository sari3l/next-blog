import React from "react";

export interface BilibiliProps {
  /** YouTube id */
  aId?: string;
  bvId?: string;
  cId?: string;
  page?: string;
}

const Bilibili: React.FC<BilibiliProps> = (props) => {
  const { aId, bvId, cId, page } = props;
  const params = () => {
    let paramsList = [];
    if (aId) {
      paramsList.push(`aid=${aId}`);
    }
    if (bvId) {
      paramsList.push(`bvid=${bvId}`);
    }
    if (cId) {
      paramsList.push(`cid=${cId}`);
    }
    if (page) {
      paramsList.push(`page=${page}`);
    }
    return paramsList.join("&");
  };
  const src = `https://player.bilibili.com/player.html?${params()}`;

  return (
    <iframe
      title={`Bilibili-${aId || bvId}`}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full ring-2 ring-gray-200 dark:ring-gray-900 dark:bg-gray-800 rounded-md shadow-2xl"
    ></iframe>
  );
};

export default Bilibili;
