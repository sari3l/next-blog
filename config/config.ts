import {
  Nextdotjs,
  Tailwindcss,
  Mdx,
  Vercel,
} from "@icons-pack/react-simple-icons";
import theme from "shiki/themes/min-light.json";
import { Friends } from "./friends";

export const Config = {
  title: "安全测试前端",
  avatar:
    "https://cdn.jsdelivr.net/gh/sari3l/sari3l.github.io/assets/avatar.jpg",
  author: "中文",
  descrption: "测试测试",

  // 告警标幅
  alert: {
    enable: false,
    text: "自在观，观自在，无人在，无我在，问此时自家安在？知所在自然自在。",
  },

  // 主页文章设置
  post: {
    indexLimit: 5,
  },

  //** 社交信息 */
  social: {
    responsive: true,
    links: {
      enable: true,
      links: {
        github: "https://github.com/sari3l",
        twitter: "https://twitter.com/Sari3l_D",
        facebook: "sari3l",
        discord: "saril3",
        zhihu: "sari3l",
        linkedin: "dsti",
      },
      colorful: false,
      iconSize: 30,
    },
    friends: {
      enable: true,
      links: Friends,
    },
  },

  //** 页眉页脚 */
  header: {
    archive: true,
    tags: true,
    aboutMe: true,
    themeSwitch: true,
  },

  footer: {
    copyright: true,
    license: true,
    powers: [
      {
        icon: Nextdotjs,
        url: "https://nextjs.org/",
      },
      {
        icon: Tailwindcss,
        url: "https://tailwindcss.com/",
      },
      {
        icon: Vercel,
        url: "https://vercel.com/",
      },
      {
        icon: Mdx,
        url: "https://mdxjs.com/",
      },
    ],
  },

  //** 插件 */
  // 代码块
  codeBlock: {
    theme: theme,
    lineNumbers: true,
    showCopyButton: false,
    showExpandButton: true,
  },

  // Comment 聊天
  comment: {
    disque: {
      enable: true,
    },
    // https://twikoo.js.org/quick-start.html#%E5%9C%A8-hexo-%E4%B8%AD%E4%BD%BF%E7%94%A8
    twikoo: {
      enable: true,
      visitor: true,
      envId: "",
    },
  },
};
