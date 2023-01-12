import {
  Discord,
  Facebook,
  Github,
  IconType,
  Linkedin,
  Twitter,
  Zhihu,
} from "@icons-pack/react-simple-icons";

export type LinkStruct = {
  icon: IconType;
  text: string;
  url?: string;
  color?: string;
  shadow?: string;
  border?: string;
};

export const Links: { [key: string]: LinkStruct } = {
  github: {
    icon: Github,
    text: "Github",
    color: "#000000",
  },
  twitter: {
    icon: Twitter,
    text: "Twitter",
    color: "#1d9bf0",
  },
  zhihu: {
    icon: Zhihu,
    text: "知乎",
    color: "#056de8",
  },
  linkedin: {
    icon: Linkedin,
    text: "Linkedin",
    color: "#0077b5",
  },
  discord: {
    icon: Discord,
    text: "Discord",
    color: "#7289da",
  },
  facebook: {
    icon: Facebook,
    text: "Facebook",
    color: "#3b5998",
  },
};
