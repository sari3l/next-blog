import { GetStaticProps } from "next";

import IndexLayout from "@/components/layout/indexLayout";
import { getLatestPosts } from "@/lib/post";
import { Config } from "@/config/config";

export default IndexLayout;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLatestPosts({
    limit: Config.post.indexLimit,
    pinned: true,
  });
  return {
    props: {
      posts,
    },
  };
};
