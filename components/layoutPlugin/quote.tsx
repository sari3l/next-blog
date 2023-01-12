import React, { PropsWithChildren } from "react";

const Quote: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div
      className="flex text-gray-500 justify-center mx-auto dark:text-true-gray-400
            before:content-['❝'] before:text-4xl before:font-bold before:leading-8
            after:content-['❞'] after:text-2xl after:text-gray-500 after:flex after:items-end"
    >
      <blockquote className="italic px-1 text-md leading-7 text-gray-500 dark:text-true-gray-50 ">
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
