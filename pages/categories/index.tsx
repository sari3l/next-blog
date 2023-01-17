import { GetStaticProps } from "next";
import { getLatestPosts } from "@/lib/post";
import CategoriesLayout from "@/components/layout/categoriesLayout";

export default CategoriesLayout;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLatestPosts();
  const categories: Record<string, CategoriyInfo> = {};

  for (const post of posts) {
    for (const category of post.frontmatter.categories || []) {
      if (!categories[category])
        categories[category] = { cateName: category, postsNum: 0 };
      categories[category].postsNum++;
    }
  }

  return {
    props: {
      categories: Object.values(categories),
    },
  };
};
