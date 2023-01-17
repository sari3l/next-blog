import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";
import Social from "@/components/widget/social";
import dayjs from "dayjs";
import BlurImage from "@/components/layoutPlugin/blurImage";
import { Config } from "@/config/config";
import { ThumbtackComponent } from "@/lib/svg";

export interface IndexLayoutProps {
  posts: Post[];
}

const IndexLayout: React.FC<IndexLayoutProps> = (props) => {
  const { posts } = props;

  return (
    <MainLayout>
      <div className="flex justify-center w-full bg-gray-100 dark:bg-gray-700 p-6">
        <div className="flex h-full w-full lg:w-4/5">
          <div className="pr-3 md:block hidden">
            <Social />
          </div>
          <div className="flex flex-col w-full">
            {posts.map(({ frontmatter, slug }, idx) => (
              <Link href={`/posts/${slug}`} key={idx}>
                <div className="flex max-sm:flex-col bg-white dark:bg-gray-900 rounded-[15px] mb-5 hover:scale-95 duration-150 hover:shadow-xl">
                  <div className="flex-none relative w-1/2 max-sm:w-full max-sm:h-80 min-h-[250px]">
                    <BlurImage
                      src={frontmatter.banner}
                      alt=""
                      fill={true}
                      className="max-sm:rounded-t-lg sm:rounded-l-lg bg-parent object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-between py-3 px-3 w-1/2 max-sm:w-full">
                    <div className="flex-1">
                      <div className="flex">
                        <div className="text-sm flex flex-wrap grow justify-start">
                          {frontmatter.categories &&
                            frontmatter.categories.map((categorie) => (
                              <strong key={categorie} className="mr-2">
                                {categorie}
                              </strong>
                            ))}
                        </div>
                        <div className="justify-end">
                          {frontmatter.pinned && (
                            <ThumbtackComponent className="dark:invert" />
                          )}
                        </div>
                      </div>
                      <div className="text-[30px]">{frontmatter.title}</div>
                    </div>
                    <div className="flex flex-between text-sm text-gray-500 mt-2">
                      <div className="flex-none">
                        {dayjs(frontmatter.date).format("YYYY-MM-DD")}
                      </div>
                      <div className="flex flex-wrap grow justify-end">
                        {frontmatter.tags &&
                          frontmatter.tags.map((tag) => (
                            <p key={tag} className="mr-2 before:content-['#']">
                              {tag}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {posts.length >= Config.post.indexLimit && (
              <div className="flex justify-center">
                <Link href="/posts/">
                  <button className="w-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded">
                    More
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndexLayout;
