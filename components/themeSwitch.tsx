import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themes = [
    { mode: "light", text: "浅色" },
    { mode: "dark", text: "深色" },
    { mode: "system", text: "自动" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // return (
  //   <Menu>
  //     <Menu.Button className="flex justify-center align-middle">
  //       <SwitchComponent className="dark:invert" />
  //     </Menu.Button>
  //     <Menu.Items className="z-50 absolute right-6 lg:right-16 mt-2 divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-600 dark:divide-gray-700 shadow-lg">
  //       {themes.map((theme) => (
  //         <Menu.Item key={theme.mode} as={Fragment}>
  //           {({ active }) => (
  //             <a
  //               className="flex flex-col px-2 py-2 text-sm text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-600 dark:hover:bg-gray-800 rounded-md"
  //               onClick={() => setTheme(theme.mode)}
  //             >
  //               {theme.text}
  //             </a>
  //           )}
  //         </Menu.Item>
  //       ))}
  //     </Menu.Items>
  //   </Menu>
  // );

  return (
    <div className="flex justify-center align-middle">
      <input
        type="checkbox"
        id="themetoggle"
        className="themeswitch"
        checked={theme === "dark"}
        readOnly={true}
      ></input>
      <label
        htmlFor="themetoggle"
        className="themelabel"
        onClick={() => handleClick()}
      ></label>
    </div>
  );
};

export default ThemeSwitch;
