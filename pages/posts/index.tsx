import { GetStaticProps } from "next";
import { getLatestPosts } from "@/lib/post";
import PostsLayout from "@/components/layout/postsLayout";

export default PostsLayout;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLatestPosts();
  return {
    props: {
      posts,
    },
  };
};
