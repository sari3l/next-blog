import { GetStaticPaths, GetStaticProps } from "next";
import { getLatestPosts } from "@/lib/post";
import PostsLayout from "pages/posts";

export const getStaticPaths: GetStaticPaths<{
  cate: string;
}> = async () => {
  const posts = await getLatestPosts();
  const categories = new Set<string>();

  for (const post of posts) {
    for (const category of post.frontmatter.categories || []) {
      categories.add(category);
    }
  }

  return {
    paths: Array.from(categories).map((category) => ({
      params: { cate: `${category}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { cate: string }> = async ({
  params,
}) => {
  const { cate } = params;
  const posts = await getLatestPosts();

  return {
    props: {
      posts: posts.filter((post) =>
        post.frontmatter.categories?.includes(cate)
      ),
      category: cate,
    },
  };
};

export default PostsLayout;
