import {
  Nextdotjs,
  Tailwindcss,
  Mdx,
  Vercel,
} from "@icons-pack/react-simple-icons";
import { Friends } from "./friends";
const theme = require("shiki/themes/min-light.json");

export const Config = {
  title: "安全测试前端",
  avatar:
    "https://cdn.jsdelivr.net/gh/sari3l/sari3l.github.io/assets/avatar.jpg",
  author: "中文",
  descrption: "测试测试",

  // 告警标幅
  evaWarnning: {
    enable: false,
    text: "由于传播、利用本博客所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，作者不为此承担任何责任。",
  },

  // 主页文章设置
  post: {
    indexLimit: 3,
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
      colorful: true,
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
