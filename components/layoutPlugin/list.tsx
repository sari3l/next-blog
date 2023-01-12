import React, { PropsWithChildren } from "react";

export const ulList: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <ul className="my-3 list-disc list-inside text-slate-700 dark:highlight-white/5 dark:text-slate-400">
      {children}
    </ul>
  );
};

export const olList: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <ol className="my-3 list-inside list-decimal text-slate-700  dark:highlight-white/5 dark:text-slate-400">
      {children}
    </ol>
  );
};
