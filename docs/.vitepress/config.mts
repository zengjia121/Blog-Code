/** @format */

import { defineConfig } from "vitepress";
import { head, nav, sidebar } from "./configs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-cn",
  title: "RoastDuck",
  description: "A VitePress Site",
  head,
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: "/header.png",

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "目录",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/maomao1996/vitepress-nav-template" }],

    footer: {
      message: "如有转载或 CV 的请标注本站原文地址",
      copyright: "Copyright © 2024-present RoastDuck",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    // /*** 自定义配置 ***/
    // visitor: {
    //   badgeId: "maomao1996.vitepress-nav-template",
    // },

    // comment: {
    //   repo: "maomao1996/vitepress-nav-template",
    //   repoId: "R_kgDOJC09Jg",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOJC09Js4Cekn0",
    // },
  },

  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   // nav: [
  //   //   { text: "Home", link: "/" },
  //   //   { text: "Examples", link: "/markdown-examples" },
  //   // ],
  //   nav: topNav,
  //   sidebar: [
  //     {
  //       text: "Examples",
  //       items: [
  //         { text: "Markdown Examples", link: "/markdown-examples" },
  //         { text: "Runtime API Examples", link: "/api-examples" },
  //       ],
  //     },
  //   ],

  //   socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  // },
});
