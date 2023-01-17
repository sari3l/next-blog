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
  pinned = false,
}: {
  limit?: number;
  order?: "asc" | "desc";
  pinned?: boolean;
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

  const posts = () => {
    if (pinned) {
      return orderBy(
        allPosts.filter(({ frontmatter }) => !frontmatter.draft),
        [
          ({ frontmatter }) => frontmatter.pinned,
          ({ frontmatter }) => dayjs(frontmatter.date).valueOf(),
        ],
        ["asc", order]
      );
    } else {
      return orderBy(
        allPosts.filter(({ frontmatter }) => !frontmatter.draft),
        ({ frontmatter }) => dayjs(frontmatter.date).valueOf(),
        order
      );
    }
  };

  return take(posts(), limit);
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

export async function getAdjacentPosts(slug: string) {
  const posts = await getLatestPosts({ order: "asc" });
  const idx = posts.findIndex((post) => post.slug === slug);
  const prevPosts = idx > 0 ? posts[idx - 1] : undefined;
  const nextPosts =
    idx !== -1 && idx < posts.length - 1 ? posts[idx + 1] : undefined;

  return {
    prev: prevPosts
      ? { slug: prevPosts.slug, frontmatter: prevPosts.frontmatter }
      : undefined,
    next: nextPosts
      ? { slug: nextPosts.slug, frontmatter: nextPosts.frontmatter }
      : undefined,
  };
}
