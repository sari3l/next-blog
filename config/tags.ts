export type TagStruct = {
  color: string;
  shadow?: string;
  border?: string;
};

export const Tags: { [key: string]: TagStruct } = {
  test: {
    color: "#3354f8",
  },
};
