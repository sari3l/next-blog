import React, { PropsWithChildren } from "react";

const Table: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="my-3 bg-slate-50 rounded-xl border-[1px] border-gray-100 overflow-hidden dark:bg-slate-800/25 dark:border-slate-700">
      <table className="border-collapse table-auto w-full text-sm ">
        {children}
      </table>
    </div>
  );
};

export default Table;
