import {
  ArrowComponent,
  CheckedComponent,
  UncheckedComponent,
} from "@/lib/svg";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from "react";

export const UnorderedList: React.FC<JSX.IntrinsicElements["ul"]> = (props) => {
  const { className = "", ...rest } = props;
  const isTaskList = className.includes("contains-task-list");
  return (
    <ListProvider type={isTaskList ? "tl" : "ul"}>
      <ul {...rest} />
    </ListProvider>
  );
};

export const OrderedList: React.FC<JSX.IntrinsicElements["ol"]> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <ListProvider type="ol">
      <ol {...rest} />
    </ListProvider>
  );
};

export interface ListProviderProps {
  type: "ul" | "ol" | "tl";
}

export interface ListContext {
  type: ListProviderProps["type"];
}

export const ListContext = createContext({} as ListContext);

export const ListProvider: React.FC<PropsWithChildren<ListProviderProps>> = (
  props
) => {
  const { children, type } = props;
  return (
    <ListContext.Provider value={{ type }}>{children}</ListContext.Provider>
  );
};

export const List: React.FC<JSX.IntrinsicElements["li"]> = (props) => {
  const { children } = props;
  const { type } = useContext(ListContext);
  const childArr = useMemo(
    () => React.Children.map(children, (child) => child),
    [children]
  );
  const getmark = {
    ul: () => (
      <span className="flex pt-[6px] pr-2 mr-[2px] dark:invert">
        <ArrowComponent />
      </span>
    ),
    ol: () => null,
    tl: () => (
      <span className="flex pt-[6px] pr-2 mr-[2px]">
        {/* @ts-ignore */}
        {childArr[0].props?.checked ? (
          <CheckedComponent />
        ) : (
          <UncheckedComponent />
        )}
      </span>
    ),
  }[type];

  return (
    <li className="flex leading-8 align-middle">
      {getmark()}
      <div className="flex-1 dark:text-gray-300">
        {type !== "tl" ? children : childArr?.slice(2)}
      </div>
    </li>
  );
};
