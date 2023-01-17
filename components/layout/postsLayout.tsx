import MainLayout from "@/components/layout/mainLayout";
import dayjs from "dayjs";
import Link from "next/link";

export interface PostsLayoutProps {
  posts: Post[];
  category?: string;
}

const PostsLayout: React.FC<PostsLayoutProps> = (props) => {
  const { posts, category } = props;
  return (
    <MainLayout>
      <div className="flex justify-center w-full dark:bg-gray-700 p-6">
        <div className="flex h-full w-4/5">
          <div className="flex flex-col h-full w-full">
            {category && (
              <div className="text-center text-4xl mt-3 mb-6">{category}</div>
            )}
            <div className="flex flex-col w-2/3 max-md:w-full">
              {posts.map(({ frontmatter, slug }, idx) => (
                <div key={idx}>
                  {(idx === 0 ||
                    dayjs(posts[idx - 1].frontmatter.date).year() !==
                      dayjs(frontmatter.date).year()) && (
                    <h2 className="font-medium text-2xl sm:text-3xl">
                      {dayjs(frontmatter.date).year()}
                    </h2>
                  )}
                  <div className="ml-6">
                    <Link href={`/posts/${slug}`}>
                      <h3 className="text-xl transition">
                        {frontmatter.title}
                      </h3>
                    </Link>
                    <div className="flex text-sm text-gray-500 mt-2">
                      {dayjs(frontmatter.date).format("YYYY-MM-DD")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostsLayout;
