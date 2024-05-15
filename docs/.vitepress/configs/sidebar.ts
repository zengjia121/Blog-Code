/** @format */

import { DefaultTheme } from "vitepress";
import fs from "fs-extra";
import path from "path";

const postDir = path.resolve(__dirname, "../../post");

function getMarkdownTitle(filePath: string): string {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^---\s*\ntitle:\s*(.*)\n/m);
  return match ? match[1] : path.basename(filePath, ".md");
}

function generateSidebar(dir: string): DefaultTheme.SidebarItem[] {
  const sidebar: DefaultTheme.SidebarItem[] = [];

  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return sidebar;
  }

  const preferredOrder = [
    "ES6",
    "HTTP",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vue",
    "KG",
    "算法",
    "设计模式",
    "Leetcode",
    "其他",
  ]; // 你的优先顺序

  const folders = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== "images")
    .sort((a, b) => {
      const indexA = preferredOrder.indexOf(a.name);
      const indexB = preferredOrder.indexOf(b.name);

      if (indexA === -1 && indexB === -1) {
        // 如果两个文件夹都不在优先列表中，按照名称排序
        return a.name.localeCompare(b.name);
      } else if (indexA !== -1 && indexB !== -1) {
        // 如果两个文件夹都在优先列表中，按照它们在列表中的顺序排序
        return indexA - indexB;
      } else {
        // 如果一个文件夹在优先列表中，另一个不在，那么在列表中的文件夹排在前面
        return indexA === -1 ? 1 : -1;
      }
    });

  folders.forEach((folder) => {
    const folderPath = path.join(dir, folder.name);
    const files = fs.readdirSync(folderPath).filter((file) => file.endsWith(".md"));

    const items = files.map((file) => {
      const filePath = path.join(folderPath, file);
      const title = getMarkdownTitle(filePath);
      return { text: title, link: `/post/${folder.name}/${file}` };
    });

    sidebar.push({
      text: folder.name,
      items: items,
    });
  });

  return sidebar;
}

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/post/": generateSidebar(postDir),
};
