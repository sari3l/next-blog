import React, { PropsWithChildren } from "react";

const EvaWarnning: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-[60px]">
      <div className="relative alert h-full">
        <div className="alert inner h-4/5 top-[10%]">
          <data>{children}</data>
        </div>
      </div>
    </div>
  );
};

export default EvaWarnning;
