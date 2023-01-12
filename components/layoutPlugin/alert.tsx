import React, { PropsWithChildren } from "react";

export interface AlertProps {}

const Alert: React.FC<PropsWithChildren<AlertProps>> = (props) => {
  const { children } = props;
  return (
    <div className="w-screen h-[75px]">
      <div className="relative alert h-full">
        <div className="alert inner h-4/5 top-[10%]">
          <data>{children}</data>
        </div>
      </div>
    </div>
  );
};

export default Alert;
