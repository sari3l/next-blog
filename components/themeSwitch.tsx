import { useTheme } from "next-themes";
import { Menu } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

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

  return (
    <Menu>
      <Menu.Button>外观</Menu.Button>
      <Menu.Items className="z-50 absolute right-7 lg:right-16 left-auto mt-2 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {themes.map((theme) => (
          <Menu.Item key={theme.mode} as={Fragment}>
            {({ active }) => (
              <a
                className="flex flex-col px-2 py-2 text-sm text-gray-900 hover:bg-slate-200"
                onClick={() => setTheme(theme.mode)}
              >
                {theme.text}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default ThemeSwitch;
