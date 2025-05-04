import { defineConfigWithTheme } from "vitepress";
import taskListsPlugin from "markdown-it-task-lists";

import { ThemeConfig } from "./theme";
import languages from "./theme/languages";
import * as shiki from "shiki";
import head, { transformHead } from "./head";
import redirects from "./redirects";
import tags from "./tags";

const excludedPages = [
  "*/index.md", // Do not include section definition files
];

const isFastBuild = process.env.FAST_BUILD?.trim() === "true";
const highlighter = shiki.createHighlighterCoreSync({
  engine: shiki.createJavaScriptRegexEngine(),
  themes: themes,
  langs: languages,
});
const themes = [] as shiki.ThemeRegistration[];
for await (const theme of Object.values(shiki.bundledThemes)) {
  themes.push((await theme()).default);
}
for await (const language of Object.values(shiki.bundledLanguages)) {
  languages.push((await language()).default[0]);
}
const largePages = [
  "entities/vanilla-usage-components.md",
  "entities/vanilla-usage-spawn-rules.md",
  "entities/vuc-full.md",
  "entities/vusr-full.md",
];

if (isFastBuild) {
  excludedPages.push(...largePages);

  console.log(
    "[FAST_BUILD] Excluding the following large pages from this build:",
    largePages,
    "\n"
  );
}

export default defineConfigWithTheme<ThemeConfig>({
  title: "Leaf Essentials Wiki",
  description: "The official documentation for leaf",

  cleanUrls: true,

  head,
  transformHead,

  srcExclude: excludedPages,
  ignoreDeadLinks: isFastBuild,

  themeConfig: {
    url: "https://leaf.trashdev.org",
    repository: "https://github.com/TrashyDaFox/Sapling",

    algolia: {
      appId: "N9ZHAYJQII",
      apiKey: "a664f5a5da631810a08e1a48554fe523",
      indexName: "wiki-bedrock",
      placeholder: "Search Bedrock Wiki…",
    },

    navigation: [
      {
        text: "Discord",
        link: "/discord",
      },
      {
        text: "Contribute",
        link: "/contribute",
      },
      {
        text: "MCBETools",
        link: "https://mcbetools.com/s/leaf",
      },
      {
        text: "Github",
        link: "https://github.com/TrashyDaFox/Leaf",
      },
    ],

    redirects,
    tags,
  },

  markdown: {
    anchor: {
      level: [2, 3, 4, 5, 6],
    },
    headers: {
      level: [2, 3, 4, 5, 6],
    },
    math: true,
    languages,
    lineNumbers: true,
    theme: {
      dark: "dark-plus",
      light: "light-plus",
    },
    config(md) {
      md.use(taskListsPlugin, { label: true });

    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
});
