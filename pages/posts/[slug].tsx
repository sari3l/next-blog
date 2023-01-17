import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkDirective from "remark-directive";
import rehpyeImageMeta from "@/lib/plugins/rehypeImage";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkCodeHike } from "@code-hike/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAdjacentPosts,
  getAllPostPaths,
  getSlugByPostPath,
} from "@/lib/post";
import PostLayout from "@/components/layout/postLayout";
import { Config } from "@/config/config";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = await getAllPostPaths();

  return {
    paths: [
      ...paths.map((p) => ({
        params: { slug: getSlugByPostPath(p) },
      })),
    ],

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}) => {
  // can be from a local file, database, anywhere
  const { slug } = params!;

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    file: path.resolve(process.cwd(), `./public/posts/${slug}.mdx`),
    cwd: path.resolve(process.cwd(), "./public/posts"),
    mdxOptions(options) {
      // https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [
          remarkCodeHike,
          {
            theme: Config.codeBlock.theme,
            lineNumbers: Config.codeBlock.lineNumbers,
            showCopyButton: Config.codeBlock.showCopyButton,
            showExpandButton: Config.codeBlock.showExpandButton,
          },
        ],
        [remarkGfm],
        [remarkToc],
        [remarkDirective],
      ];
      // https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehpyeImageMeta],
        [rehypeSlug],
        [
          rehypeAutolinkHeadings,
          { behavior: "wrap", properties: { class: "anchor" } },
        ],
      ];

      return options;
    },
  });

  const { prev, next } = await getAdjacentPosts(slug);
  return {
    props: {
      code,
      frontmatter,
      prevPost: prev
        ? { link: `/posts/${prev.slug}`, title: prev.frontmatter.title }
        : null,
      nextPost: next
        ? { link: `/posts/${next.slug}`, title: next.frontmatter.title }
        : null,
    },
  };
};

export default PostLayout;
