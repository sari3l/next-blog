import glob from "fast-glob";
import { orderBy, take } from "lodash";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";

export async function getAllPostPaths() {
  return await glob("public/posts/**/*.mdx");
}

export async function getLatestPosts({
  limit = Infinity,
  order = "desc",
}: {
  limit?: number;
  order?: "asc" | "desc";
} = {}) {
  const postsPath = await getAllPostPaths();
  const allPosts = await Promise.all(
    postsPath.map(async (path) => {
      const slug = path.replace(/^public\/posts\/|\.mdx$/g, "");
      const frontmatter = await getPostFrontmatterBySlug(slug);

      return {
        path,
        slug,
        frontmatter,
      };
    })
  );

  return take(
    orderBy(
      allPosts.filter(({ frontmatter }) => !frontmatter.draft),
      ({ frontmatter }) => dayjs(frontmatter.date).valueOf(),
      [order]
    ),
    limit
  );
}

export async function getPostFrontmatterBySlug(slug: string) {
  const rawMdx = await fs.readFile(
    path.resolve(process.cwd(), `public/posts/${slug}.mdx`),
    "utf8"
  );
  return matter(rawMdx).data as Promise<PostFrontmatter>;
}

export function getSlugByPostPath(postPath: string) {
  return postPath.replace(/^public\/posts\/|\.mdx$/g, "");
}
