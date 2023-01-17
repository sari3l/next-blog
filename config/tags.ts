export type TagStruct = {
  color: string;
  shadow?: string;
  border?: string;
};

export const Tags: { [key: string]: TagStruct } = {
  test: {
    color: "text-green-100",
  },
  mdx: {
    color: "#000000",
  },
};
