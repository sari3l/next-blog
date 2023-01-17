import Link from "next/link";
import { Config } from "@/config/config";
import ThemeSwitch from "@/components/themeSwitch";

const navigation = [
  {
    name: "posts",
    text: "文档",
    href: "/posts",
    current: false,
  },
  {
    name: "categories",
    text: "分类",
    href: "/categories",
    current: false,
  },
];

const Navbar = () => {
  return (
    <div className="z-50 w-full fixed bg-gray-300 dark:bg-gray-800 bg-opacity-70 backdrop-blur-lg backdrop-saturate-200 lg:px-10 lg:w-screen-lg">
      <nav className="container-lg flex w-full items-center py-2">
        <div className="pl-6 min-w-max">
          <Link href="/">{Config.title}</Link>
        </div>
        <div className="flex justify-end w-full ">
          <div className="hidden w-full md:block md:w-auto">
            <div className="flex items-center pr-6">
              {navigation.map((n, i) => (
                <Link href={n.href} key={i} className="px-3 text-sm">
                  {n.text}
                </Link>
              ))}
              <div className="px-3 text-sm">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
