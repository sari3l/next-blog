import React from "react";

export interface CodeSandBoxProps {
  /** YouTube id */
  id: string;
  fontsize?: string;
  hidenavigation?: string;
  theme?: string;
  view?: string; // editor or preview
}

const CodeSandBox: React.FC<CodeSandBoxProps> = (props) => {
  const { id, fontsize = 14, hidenavigation = 0, theme = "dark", view } = props;
  const src = `https://codesandbox.io/embed/${id}?fontsize=${fontsize}&hidenavigation=${hidenavigation}&theme=${theme}${
    view ? `&view=${view}` : ""
  }`;

  return (
    <iframe
      title={`CodeSandBox-${id}`}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full ring-2 ring-gray-200 dark:ring-gray-900 rounded-md shadow-2xl"
    ></iframe>
  );
};

export default CodeSandBox;
