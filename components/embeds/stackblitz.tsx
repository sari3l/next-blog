import React from "react";

export interface StackBlitzProps {
  /** YouTube id */
  id: string;
  file?: string;
}

const StackBlitz: React.FC<StackBlitzProps> = (props) => {
  const { id, file } = props;
  const src = `https://stackblitz.com/edit/${id}${file ? `?file=${file}` : ""}`;

  return (
    <iframe
      title={`StackBlitz-${id}`}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full ring-2 ring-gray-200 dark:ring-gray-900 rounded-md shadow-2xl"
    ></iframe>
  );
};

export default StackBlitz;
