import Link from "next/link";
import MainLayout from "@/components/layout/mainLayout";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import dayjs from "dayjs";
import Quote from "@/components/layoutPlugin/quote";
import BlurImage from "@/components/layoutPlugin/blurImage";
import Table from "@/components/layoutPlugin/table";
import { olList, ulList } from "@/components/layoutPlugin/list";

export interface PostLayoutProps {
  slug: string;
  code: string;
  frontmatter: PostFrontmatter;
  prevPost?: { link: string; title: string };
  nextPost?: { link: string; title: string };
}

const components = {
  blockquote: Quote,
  img: BlurImage,
  table: Table,
  // ul: ulList,
  // ol: olList,
};

const PostLayout: React.FC<PostLayoutProps> = (props) => {
  const {
    code,
    frontmatter: { title, date, updateOn, tags, toc = true },
    prevPost,
    nextPost,
  } = props;

  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <MainLayout>
      <div className="markdown h-full w-full lg:w-4/5 bg-white dark:bg-slate-800/5 p-6">
        <h1>{title}</h1>
        {/* 最后更新时间 */}
        <div className="text-sm text-gray-600 text-start mt-6">
          {dayjs(props.frontmatter.updateOn).format("YYYY年MM月DD日")}
        </div>

        {/* 标签 */}
        {tags && tags.length > 0 && (
          <div className="flex items-center flex-wrap m-auto mt-3 text-sm gap-2 sm:gap-3">
            {tags.map((tag: string) => (
              <a key={tag} href={`/tags/${tag}`} className="tag">
                {tag}
              </a>
            ))}
          </div>
        )}
        <div className="relative flex w-full">
          <div className="flex-1 w-0">
            {/* 文章顶部图片 */}

            {/* markdown 内容 */}
            <article className="w-full mt-10">
              <Component components={components} />
              {/* @ts-ignore */}
            </article>
          </div>
          {/* 侧边目录导航 */}
        </div>
        <hr className="divider" />
        <div className="mb-20 flex justify-between space-x-6 sm:space-x-12 sm:text-lg font-medium">
          {/* 下一篇 */}
          <span className="w-1/2">
            {prevPost ? (
              <Link href={prevPost.link}>
                <a className="group flex h-full border border-zinc-400/20 rounded-xl p-3 sm:p-6 transition gap-2">
                  {prevPost.title}
                </a>
              </Link>
            ) : null}
          </span>
          {/* 上一篇 */}
          <span className="w-1/2 text-right">
            {nextPost ? (
              <Link href={nextPost.link}>{nextPost.title}</Link>
            ) : null}
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostLayout;
