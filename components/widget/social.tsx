import { Config } from "@/config/config";
import { LinkStruct, Links } from "@/config/links";
import Image from "next/image";
import Friend from "@/components/widget/friend";

const links = () => {
  const socials: { [key: string]: LinkStruct } = {};
  Object.entries(Config.social.links.links).map(([key, value]) => {
    if (key in Links && value != "") {
      socials[key] = Links[key];
      socials[key].url = value;
    }
  });
  return socials;
};

const Social = () => {
  return (
    <div className="rounded-[15px] w-60  bg-white">
      <div className="flex flex-col divide-y divide-gray-100">
        <div className="flex flex-col justify-center items-center pt-5">
          <div className="relative bg-gray-300 h-32 w-32 overflow-hidden rounded-lg">
            <Image fill={true} src={Config.avatar} alt="" />
          </div>
          <div className="py-2">{Config.author}</div>
          {Config.descrption && <div className="pb-2">{Config.descrption}</div>}
        </div>
        {Config.social.links.enable && (
          <div className="flex flex-wrap min-h-max justify-center pt-3">
            {Object.entries(links()).map(([key, link]) => (
              <a
                href={link.url}
                key={key}
                className={`px-3 pb-3 ${
                  Config.social.responsive && "hover:scale-125 duration-100"
                }`}
              >
                <link.icon
                  size={Config.social.links.iconSize}
                  color={Config.social.links.colorful ? link.color : "#00000"}
                />
              </a>
            ))}
          </div>
        )}
      </div>
      {Config.social.friends.enable && <Friend />}
    </div>
  );
};

export default Social;
