import MainLayout from "@/components/layout/mainLayout";
import Link from "next/link";

export interface CategoriesLayoutProps {
  categories: CategoriyInfo[];
}

const CategoriesLayout: React.FC<CategoriesLayoutProps> = (props) => {
  const { categories } = props;

  return (
    <MainLayout>
      <div className="flex justify-center w-full dark:bg-gray-700 p-6">
        <div className="flex flex-col h-full w-4/5">
          <h1 className="text-2xl mt-6 mb-10 font-bold">Category</h1>
          <div className="grid grid-cols-3 gap-3 xs:gap-5 md:gap-6 pb-4 lg:pb-8 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, idx) => (
              <Link href={`/categories/${category.cateName}`} key={idx}>
                <span className="relative flex flex-row items-center justify-between bg-gray-300 p-5 rounded-lg hover:shadow-xl hover:bottom-1 hover:bg-slate-400 hover:font-bold transition-all duration-150 dark:bg-gray-800 dark:shadow-slate-600">
                  {category.cateName}

                  <span className="bg-white relative rounded-full w-8 h-8 leading-8 text-center dark:bg-gray-700">
                    <span>{category.postsNum}</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesLayout;
