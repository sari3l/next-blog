import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";
import Social from "@/components/widget/social";
import { Tags } from "@/config/tags";
import dayjs from "dayjs";
import BlurImage from "../layoutPlugin/blurImage";

export interface IndexLayoutProps {
  posts: Post[];
}

const IndexLayout: React.FC<IndexLayoutProps> = (props) => {
  const { posts } = props;

  return (
    <MainLayout>
      <div className="flex justify-center w-full bg-gray-100 dark:bg-slate-800/5 p-6">
        <div className="flex h-full w-full lg:w-4/5">
          <div className="pr-3 md:block hidden">
            <Social />
          </div>
          <div className="flex flex-col w-full">
            {posts.map(({ frontmatter, slug }, idx) => (
              <Link href={`/posts/${slug}`} key={idx}>
                <div className="flex max-sm:flex-col rounded-[15px] mb-5 hover:scale-95 duration-150 hover:shadow-xl">
                  <div className="flex-none relative w-1/2 max-sm:w-full max-sm:h-80 min-h-[250px]">
                    <BlurImage
                      src={frontmatter.banner}
                      alt=""
                      fill={true}
                      className="max-sm:rounded-t-lg sm:rounded-l-lg bg-parent object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-between py-3 px-3 w-1/2">
                    <div className="flex-1">
                      <div className="text-sm">
                        {frontmatter.tags &&
                          frontmatter.tags.map((tag) => (
                            <strong
                            // color={tag in Tags ? Tags[tag].color : "#5f7865"}
                            >
                              {tag}
                            </strong>
                          ))}
                      </div>
                      <div className="text-[30px]">{frontmatter.title}</div>
                    </div>
                    <div className="flex-none text-sm text-gray-500 mt-2">
                      2023-01-01
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            <div className="flex justify-center">
              <button className="w-20 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-4 border border-blue-500 hover:border-transparent rounded">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndexLayout;
