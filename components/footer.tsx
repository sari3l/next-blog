import { Config } from "@/config/config";

const Footer = () => {
  const powers = Config.footer.powers;
  const thisYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 flex flex-col px-6">
      <section className="pt-2 pb-5 divide-y divide-gray-400">
        <div className="flex justify-between pb-2 my-2 text-xs lg:px-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              Powered by
              <div className="inline-flex px-2 py-1 mx-2 space-x-2 bg-gray-400 dark:bg-gray-600 rounded-full place-items-center">
                {powers.map((tool) => (
                  <a
                    key={tool.url}
                    className="leading-0 dark:text-gray-800 hover:invert"
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <tool.icon size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs flex justify-between pt-3 lg:px-10">
          {Config.footer.copyright && (
            <div>
              <span>{`Copyright © 2020-${thisYear} `}</span>
            </div>
          )}
          {Config.footer.license && (
            <div>
              <span>
                <a
                  className="text-true-gray-600 hover:underline"
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY-NC-SA 4.0
                </a>
              </span>
            </div>
          )}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
