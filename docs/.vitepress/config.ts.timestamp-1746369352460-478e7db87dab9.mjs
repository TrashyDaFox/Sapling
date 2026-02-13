// docs/.vitepress/config.ts
import { defineConfigWithTheme } from "file:///C:/Users/trashy/leaf-wiki/node_modules/vitepress/dist/node/index.js";
import taskListsPlugin from "file:///C:/Users/trashy/leaf-wiki/node_modules/markdown-it-task-lists/index.js";

// docs/.vitepress/theme/languages/json.ts
var language = {
  scopeName: "source.json",
  displayName: "JSON",
  name: "json",
  patterns: [
    { include: "#objectsnippet" },
    // Syntax highlighting for am object without surrounding curly brackets
    { include: "#value" }
  ],
  repository: {
    array: {
      begin: "\\[",
      beginCaptures: {
        0: {
          name: "punctuation.definition.array.begin.json"
        }
      },
      end: "]",
      endCaptures: {
        0: {
          name: "punctuation.definition.array.end.json"
        }
      },
      name: "meta.structure.array.json",
      patterns: [
        {
          include: "#value"
        },
        {
          match: ",",
          name: "punctuation.separator.array.json"
        },
        {
          match: "[^]\\s]",
          name: "invalid.illegal.expected-array-separator.json"
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: "/\\*\\*(?!/)",
          captures: {
            0: {
              name: "punctuation.definition.comment.json"
            }
          },
          end: "\\*/",
          name: "comment.block.documentation.json"
        },
        {
          begin: "/\\*",
          captures: {
            0: {
              name: "punctuation.definition.comment.json"
            }
          },
          end: "\\*/",
          name: "comment.block.json"
        },
        {
          captures: {
            1: {
              name: "punctuation.definition.comment.json"
            }
          },
          match: "(//).*$\\n?",
          name: "comment.line.double-slash.js"
        }
      ]
    },
    constant: {
      match: "\\b(?:true|false|null)\\b",
      name: "constant.language.json"
    },
    number: {
      match: "-?(?:0|[1-9]\\d*)(?:(?:\\.\\d+)?(?:[Ee][-+]?\\d+)?)?",
      name: "constant.numeric.json"
    },
    object: {
      begin: "\\{",
      beginCaptures: {
        0: {
          name: "punctuation.definition.dictionary.begin.json"
        }
      },
      end: "}",
      endCaptures: {
        0: {
          name: "punctuation.definition.dictionary.end.json"
        }
      },
      name: "meta.structure.dictionary.json",
      patterns: [
        { include: "#objectkey" },
        { include: "#comments" },
        {
          begin: ":",
          beginCaptures: {
            0: {
              name: "punctuation.separator.dictionary.key-value.json"
            }
          },
          end: "(,)|(?=})",
          endCaptures: {
            1: {
              name: "punctuation.separator.dictionary.pair.json"
            }
          },
          name: "meta.structure.dictionary.value.json",
          patterns: [
            { include: "#value" },
            {
              match: "[^,\\s]",
              name: "invalid.illegal.expected-dictionary-separator.json"
            }
          ]
        },
        {
          match: "[^}\\s]",
          name: "invalid.illegal.expected-dictionary-separator.json"
        }
      ]
    },
    objectkey: {
      begin: '"',
      beginCaptures: {
        0: {
          name: "punctuation.support.type.property-name.begin.json"
        }
      },
      end: '"',
      endCaptures: {
        0: {
          name: "punctuation.support.type.property-name.end.json"
        }
      },
      name: "string.json support.type.property-name.json",
      patterns: [{ include: "#stringcontent" }]
    },
    objectsnippet: {
      begin: '^("[^"]*")(:)',
      beginCaptures: {
        1: {
          patterns: [{ include: "#objectkey" }]
        },
        2: {
          name: "punctuation.separator.dictionary.key-value.json"
        }
      },
      end: ",",
      endCaptures: {
        0: {
          name: "punctuation.separator.dictionary.pair.json"
        }
      },
      patterns: [{ include: "#value" }],
      name: "meta.structure.dictionary.snippet.json"
    },
    string: {
      begin: '"',
      beginCaptures: {
        0: {
          name: "punctuation.definition.string.begin.json"
        }
      },
      end: '"',
      endCaptures: {
        0: {
          name: "punctuation.definition.string.end.json"
        }
      },
      name: "string.quoted.double.json",
      patterns: [{ include: "#stringcontent" }]
    },
    stringcontent: {
      patterns: [
        {
          match: '\\\\(?:["/\\\\bfnrt]|u\\h{4})',
          name: "constant.character.escape.json"
        },
        {
          match: "\\\\.",
          name: "invalid.illegal.unrecognized-string-escape.json"
        }
      ]
    },
    value: {
      patterns: [
        { include: "#constant" },
        { include: "#number" },
        { include: "#string" },
        { include: "#array" },
        { include: "#object" },
        { include: "#comments" }
      ]
    }
  }
};
var json_default = language;

// docs/.vitepress/theme/languages/molang.ts
var keywords = ["break", "continue", "return"];
var types = {
  array: {
    readonly: true
  },
  context: {
    alias: "c",
    readonly: true
  },
  geometry: {
    readonly: true
  },
  material: {
    readonly: true
  },
  math: {
    readonly: true
  },
  query: {
    alias: "q",
    readonly: true
  },
  temp: {
    alias: "t"
  },
  texture: {
    readonly: true
  },
  variable: {
    alias: "v"
  }
};
var language2 = {
  scopeName: "source.molang",
  displayName: "Molang",
  name: "molang",
  patterns: [
    { include: "#boolean" },
    { include: "#number" },
    { include: "#string" },
    { include: "#this" },
    { include: "#keywords" },
    { include: "#operators" },
    { include: "#function" },
    { include: "#types" },
    { include: "#comma" },
    { include: "#semicolon" }
  ],
  repository: {
    boolean: {
      match: "(?i)\\b(false|true)\\b",
      name: "constant.language.molang"
    },
    comma: {
      match: ",",
      name: "punctuation.separator.comma.molang"
    },
    function: {
      match: "\\b\\w+(?=\\()",
      name: "entity.name.function.molang"
    },
    keywords: {
      match: `(?i)\\b(${keywords.join("|")})\\b`,
      name: "keyword.control.molang"
    },
    number: {
      match: "(?i)(\\b|-)\\d+(\\.\\d+)?(e[+-]?\\d+)?f?\\b",
      name: "constant.numeric.molang"
    },
    operators: {
      match: "[!=<>]=?|[?:*/+-]|&&|\\|\\||\\?\\?|->",
      name: "keyword.operator.molang"
    },
    string: {
      begin: "'",
      beginCaptures: {
        "0": {
          name: "punctuation.definition.string.begin.molang"
        }
      },
      end: "'",
      endCaptures: {
        "0": {
          name: "punctuation.definition.string.end.molang"
        }
      },
      name: "string.quoted.single.molang"
    },
    semicolon: {
      match: ";",
      name: "punctuation.terminator.statement.molang"
    },
    this: {
      match: "(?i)\\bthis\\b",
      name: "variable.language.molang"
    },
    types: {
      patterns: [
        {
          match: `(?i)\\b(${getTypeKeywords().join("|")})(?=\\.)`,
          name: "storage.type.molang"
        },
        {
          match: `(?i)(?<=(${getTypeKeywords(true).join("|")})\\.)\\w+`,
          name: "variable.other.constant.molang"
        },
        {
          match: `(?i)(?<=(${getTypeKeywords(false).join("|")})\\.)\\w+`,
          name: "variable.other.readwrite.molang"
        }
      ]
    }
  }
};
function getTypeKeywords(readonlyValue) {
  const keywords2 = [];
  for (const type in types) {
    const { alias, readonly = false } = types[type];
    if (readonlyValue !== void 0 && readonlyValue !== readonly) continue;
    keywords2.push(type);
    if (!alias) continue;
    keywords2.push(alias);
  }
  return keywords2;
}
var molang_default = language2;

// docs/.vitepress/theme/languages/leafformat.ts
var language3 = {
  scopeName: "source.leafformat",
  displayName: "Leaf Formatting",
  name: "leafformat",
  patterns: [
    { include: "#mcColorCode" },
    { include: "#string" },
    { include: "#functionCall" },
    { include: "#variable" },
    { include: "#usernameVariable" },
    { include: "#number" },
    { include: "#normalText" }
  ],
  repository: {
    functionCall: {
      begin: "{{",
      beginCaptures: {
        0: {
          name: "punctuation.definition.block.begin.custom"
          // this will style the {{
        }
      },
      end: "}}",
      endCaptures: {
        0: {
          name: "punctuation.definition.block.end.custom"
          // this will style the }}
        }
      },
      name: "meta.function-call.custom",
      patterns: [
        {
          match: "[a-zA-Z_][a-zA-Z0-9_]*",
          name: "entity.name.function.custom"
          // only highlights function name
        },
        {
          match: '"[^"]*"',
          name: "string.quoted.double.custom"
        },
        {
          match: "\\s+",
          name: "text.whitespace.custom"
        },
        {
          match: '[^\\s{}"]+',
          name: "invalid.unexpected.custom"
        }
      ]
    },
    mcColorCode: {
      match: "\xA7[0-9a-fklmnorqusd]",
      name: "storage.type"
    },
    string: {
      begin: '"',
      beginCaptures: {
        0: {
          name: "punctuation.definition.string.begin.leafformat"
        }
      },
      end: '"',
      endCaptures: {
        0: {
          name: "punctuation.definition.string.end.leafformat"
        }
      },
      name: "string.quoted.double.leafformat",
      patterns: [
        {
          match: '\\\\(?:["/\\\\bfnrt]|u\\h{4})',
          name: "constant.character.escape.leafformat"
        },
        {
          match: "\\\\.",
          name: "invalid.illegal.unrecognized-string-escape.leafformat"
        }
      ]
    },
    variable: {
      match: "<[a-zA-Z0-9_]+>",
      name: "variable"
    },
    usernameVariable: {
      match: "@([a-zA-Z0-9_]+)",
      // Fixed regex for username variable.
      name: "variable"
    },
    number: {
      match: "(\\[\\d+\\]|\\d+)",
      // Match numbers in brackets or standalone numbers.
      name: "constant.numeric"
    },
    normalText: {
      match: '[^{}<>@"\\[\\]]+',
      // Match plain text excluding special characters.
      name: "text.plain"
    }
  }
};
var leafformat_default = language3;

// docs/.vitepress/theme/languages/index.ts
var languages_default = [json_default, molang_default, leafformat_default];

// docs/.vitepress/config.ts
import * as shiki from "file:///C:/Users/trashy/leaf-wiki/node_modules/shiki/dist/index.mjs";

// docs/.vitepress/head/transform.ts
function transformHead({ pageData, siteConfig }) {
  const config = siteConfig.site;
  const site = config.title;
  const { frontmatter, relativePath } = pageData;
  const title = frontmatter.title ?? "The Bedrock Wiki";
  const description = frontmatter.description ?? config.description;
  const image = `${config.themeConfig.url}/assets/images/homepage/wikilogo.png`;
  const imageAlt = "Bedrock Wiki Logo";
  const path = relativePath.replace(".md", "");
  let url = config.themeConfig.url;
  if (path !== "index") url += `/${path}`;
  const data = {
    // Open Graph (used by Discord)
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:image:alt": imageAlt,
    "og:url": url,
    "og:site_name": site,
    // Twitter
    "twitter:card": "summary",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:image:alt": imageAlt,
    "twitter:site": site
  };
  if (frontmatter.hidden) data.robots = "noindex";
  const out = [];
  Object.entries(data).forEach(([name, content]) => {
    out.push([
      "meta",
      {
        name,
        content
      }
    ]);
  });
  return out;
}

// docs/.vitepress/head/index.ts
var head_default = [
  [
    "link",
    {
      rel: "icon",
      href: "/favicon.ico"
    }
  ],
  [
    "apple-touch-icon",
    {
      rel: "icon",
      href: "/assets/images/favicons/apple-touch-icon.png",
      sizes: "180x180"
    }
  ],
  [
    "mask-icon",
    {
      rel: "icon",
      href: "/assets/images/favicons/safari-pinned-tab.svg",
      color: "#60c3fa"
    }
  ],
  [
    "meta",
    {
      name: "theme-color",
      content: "#60c3fa"
    }
  ]
];

// docs/.vitepress/redirects.ts
var redirects_default = {
  "/blocks/block-materials": "/blocks/block-components#render-methods",
  "/blocks/blocks-16": "/blocks/blocks-intro",
  "/blocks/blocks-stable": "/blocks/blocks-intro",
  "/blocks/custom-trapdoor": "/blocks/custom-trapdoors",
  "/concepts/animation-controllers": "/animation-controllers/animation-controllers-intro",
  "/concepts/biomes": "/world-generation/biomes",
  "/concepts/blocks": "/blocks/blocks-intro",
  "/concepts/components-events-groups": "/entities/entity-intro-bp",
  "/concepts/entity-properties": "/entities/entity-properties",
  "/concepts/items": "/items/item-components",
  "/concepts/json-ui": "/json-ui/json-ui-intro",
  "/concepts/math-based-animations": "/visuals/math-based-animations",
  "/concepts/mcfunction": "/commands/mcfunction",
  "/concepts/render-controller": "/visuals/render-controller",
  "/documentation/biome-tags": "/world-generation/biome-tags",
  "/documentation/block-model-materials": "/blocks/block-components#render-methods",
  "/documentation/block-shapes": "/blocks/block-shapes",
  "/documentation/block-tags": "/blocks/block-tags",
  "/documentation/creative-categories": "/documentation/menu-categories",
  "/documentation/dummy-components": "/entities/dummy-components",
  "/documentation/emojis": "/concepts/emojis",
  "/documentation/item-groups": "/items/item-groups",
  "/documentation/json-ui": "/json-ui/json-ui-documentation",
  "/documentation/projectiles": "/entities/projectiles",
  "/documentation/runtime-identifier": "/entities/runtime-identifier",
  "/documentation/subpacks": "/concepts/subpacks",
  "/documentation/tellraw": "/commands/tellraw",
  "/entities/entities-intro": "/entities/entity-intro-bp",
  "/entities/npc-dialogs": "/entities/npc-dialogues",
  "/items/3d-items": "/items/attachables",
  "/items/item-categories": "/items/creative-categories",
  "/json-ui/custom-buttons": "/json-ui/buttons-and-toggles",
  "/knowledge/addon-performance": "/meta/addon-performance",
  "/knowledge/addon-programming": "/meta/addon-programming",
  "/knowledge/bedrock-modeling": "/visuals/bedrock-modeling",
  "/knowledge/entity-movement": "/entities/entity-movement",
  "/knowledge/nbt_commands": "/commands/nbt-commands",
  "/knowledge/style-guide": "/meta/style-guide",
  "/knowledge/useful-links": "/meta/useful-links",
  "/knowledge/using-schemas": "/meta/using-schemas",
  "/knowledge/version-control": "/meta/version-control",
  "/scripting/gametest-qna": "/meta/gametest-qna",
  "/scripting/scripting-editor-qna": "/meta/scripting-editor-qna",
  "/scripting/starting-scripts": "/scripting/scripting-intro",
  "/troubleshooting/entities": "/entities/troubleshooting-entities",
  "/troubleshooting/items": "/items/troubleshooting-items",
  "/tutorials/beginner-commands": "/commands/commands-intro",
  "/tutorials/block-texture-variation": "/blocks/block-texture-variation",
  "/tutorials/boat-entities": "/entities/boat-entities",
  "/tutorials/cancelling-death-animation": "/entities/cancelling-death-animation",
  "/tutorials/controlling-flying-entities": "/entities/flying-entities",
  "/tutorials/craftable-spawneggs": "/loot/craftable-spawneggs",
  "/tutorials/custom-armor": "/entities/custom-armor",
  "/tutorials/disabling-particles": "/visuals/disabling-particles",
  "/tutorials/disabling-team-damage": "/entities/disabling-team-damage",
  "/tutorials/egg-drops": "/loot/egg-drops",
  "/tutorials/entity-commands": "/commands/animation-controllers",
  "/tutorials/entity-events": "/entities/entity-events",
  "/tutorials/entity-holds-item": "/entities/entity-holds-item",
  "/tutorials/fake_blocks": "/blocks/fake-blocks",
  "/tutorials/invulnerable-entities": "/entities/invulnerable-entities",
  "/tutorials/item-models": "/items/attachables",
  "/tutorials/npc-dialogs": "/entities/npc-dialogues",
  "/tutorials/pathfinding-entities": "/entities/pathfinding-entities",
  "/tutorials/player-geometry": "/visuals/player-geometry",
  "/tutorials/remove-shadows": "/visuals/remove-shadows",
  "/tutorials/respawn-commands": "/commands/respawn-commands",
  "/tutorials/retexturing-spawn-eggs": "/visuals/retexturing-spawn-eggs",
  "/tutorials/solid-entities": "/entities/solid-entities",
  "/tutorials/spawning-items": "/items/spawning-items",
  "/tutorials/text-localization": "/concepts/text-localization",
  "/tutorials/timers": "/entities/timers",
  "/vanilla-usage/items": "/items/vanilla-usage-items",
  "/vanilla-usage/components": "/entities/vanilla-usage-components",
  "/vanilla-usage/spawn-rules": "/entities/vanilla-usage-spawn-rules",
  "/visuals/deferred-qna": "/meta/deferred-qna",
  "/visuals/entity-visuals-intro": "/entities/render-controllers",
  "/visuals/render-controllers": "/entities/render-controllers",
  "/world-generation/randomized-structure-loot": "/loot/randomized-structure-loot"
};

// docs/.vitepress/tags.ts
var tags_default = {
  beginner: {
    color: "blue"
  },
  advanced: {
    color: "pink",
    sidebar: true
  },
  beta: {
    color: "yellow"
  },
  deprecated: {
    color: "red",
    sidebar: true
  },
  easy: {
    color: "blue"
  },
  experimental: {
    color: "orange"
  },
  expert: {
    color: "red"
  },
  function: {
    color: "blue",
    sidebar: true
  },
  guide: {
    color: "green",
    sidebar: true
  },
  help: {
    color: "blue",
    sidebar: true
  },
  info: {
    color: "blue",
    sidebar: true
  },
  intermediate: {
    color: "orange"
  },
  method: {
    color: "orange"
  },
  outdated: {
    color: "red",
    sidebar: true
  },
  scripting: {
    color: "yellow",
    sidebar: {
      text: "Scripts"
    }
  }
};

// docs/.vitepress/config.ts
var excludedPages = [
  "*/index.md"
  // Do not include section definition files
];
var isFastBuild = process.env.FAST_BUILD?.trim() === "true";
var highlighter = shiki.createHighlighterCoreSync({
  engine: shiki.createJavaScriptRegexEngine(),
  themes,
  langs: languages_default
});
var themes = [];
for await (const theme of Object.values(shiki.bundledThemes)) {
  themes.push((await theme()).default);
}
for await (const language4 of Object.values(shiki.bundledLanguages)) {
  languages_default.push((await language4()).default[0]);
}
var largePages = [
  "entities/vanilla-usage-components.md",
  "entities/vanilla-usage-spawn-rules.md",
  "entities/vuc-full.md",
  "entities/vusr-full.md"
];
if (isFastBuild) {
  excludedPages.push(...largePages);
  console.log(
    "[FAST_BUILD] Excluding the following large pages from this build:",
    largePages,
    "\n"
  );
}
var config_default = defineConfigWithTheme({
  title: "Leaf Essentials Wiki",
  description: "The official documentation for leaf",
  cleanUrls: true,
  head: head_default,
  transformHead,
  srcExclude: excludedPages,
  ignoreDeadLinks: isFastBuild,
  themeConfig: {
    url: "https://wiki.bedrock.dev",
    repository: "https://github.com/Bedrock-OSS/bedrock-wiki",
    algolia: {
      appId: "N9ZHAYJQII",
      apiKey: "a664f5a5da631810a08e1a48554fe523",
      indexName: "wiki-bedrock",
      placeholder: "Search Bedrock Wiki\u2026"
    },
    navigation: [
      {
        text: "Discord",
        link: "/discord"
      },
      {
        text: "Contribute",
        link: "/contribute"
      },
      {
        text: "MCBETools",
        link: "https://mcbetools.com/s/leaf"
      },
      {
        text: "Github",
        link: "https://github.com/TrashyDaFox/Leaf"
      }
    ],
    redirects: redirects_default,
    tags: tags_default
  },
  markdown: {
    anchor: {
      level: [2, 3, 4, 5, 6]
    },
    headers: {
      level: [2, 3, 4, 5, 6]
    },
    math: true,
    languages: languages_default,
    lineNumbers: true,
    theme: {
      dark: "dark-plus",
      light: "light-plus"
    },
    config(md) {
      md.use(taskListsPlugin, { label: true });
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern"
        }
      }
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvbGFuZ3VhZ2VzL2pzb24udHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL2xhbmd1YWdlcy9tb2xhbmcudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL2xhbmd1YWdlcy9sZWFmZm9ybWF0LnRzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9sYW5ndWFnZXMvaW5kZXgudHMiLCAiZG9jcy8udml0ZXByZXNzL2hlYWQvdHJhbnNmb3JtLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9oZWFkL2luZGV4LnRzIiwgImRvY3MvLnZpdGVwcmVzcy9yZWRpcmVjdHMudHMiLCAiZG9jcy8udml0ZXByZXNzL3RhZ3MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0cmFzaHlcXFxcbGVhZi13aWtpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90cmFzaHkvbGVhZi13aWtpL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWdXaXRoVGhlbWUgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmltcG9ydCB0YXNrTGlzdHNQbHVnaW4gZnJvbSBcIm1hcmtkb3duLWl0LXRhc2stbGlzdHNcIjtcclxuXHJcbmltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IGxhbmd1YWdlcyBmcm9tIFwiLi90aGVtZS9sYW5ndWFnZXNcIjtcclxuaW1wb3J0ICogYXMgc2hpa2kgZnJvbSBcInNoaWtpXCI7XHJcbmltcG9ydCBoZWFkLCB7IHRyYW5zZm9ybUhlYWQgfSBmcm9tIFwiLi9oZWFkXCI7XHJcbmltcG9ydCByZWRpcmVjdHMgZnJvbSBcIi4vcmVkaXJlY3RzXCI7XHJcbmltcG9ydCB0YWdzIGZyb20gXCIuL3RhZ3NcIjtcclxuXHJcbmNvbnN0IGV4Y2x1ZGVkUGFnZXMgPSBbXHJcbiAgXCIqL2luZGV4Lm1kXCIsIC8vIERvIG5vdCBpbmNsdWRlIHNlY3Rpb24gZGVmaW5pdGlvbiBmaWxlc1xyXG5dO1xyXG5cclxuY29uc3QgaXNGYXN0QnVpbGQgPSBwcm9jZXNzLmVudi5GQVNUX0JVSUxEPy50cmltKCkgPT09IFwidHJ1ZVwiO1xyXG5jb25zdCBoaWdobGlnaHRlciA9IHNoaWtpLmNyZWF0ZUhpZ2hsaWdodGVyQ29yZVN5bmMoe1xyXG4gIGVuZ2luZTogc2hpa2kuY3JlYXRlSmF2YVNjcmlwdFJlZ2V4RW5naW5lKCksXHJcbiAgdGhlbWVzOiB0aGVtZXMsXHJcbiAgbGFuZ3M6IGxhbmd1YWdlcyxcclxufSk7XHJcbmNvbnN0IHRoZW1lcyA9IFtdIGFzIHNoaWtpLlRoZW1lUmVnaXN0cmF0aW9uW107XHJcbmZvciBhd2FpdCAoY29uc3QgdGhlbWUgb2YgT2JqZWN0LnZhbHVlcyhzaGlraS5idW5kbGVkVGhlbWVzKSkge1xyXG4gIHRoZW1lcy5wdXNoKChhd2FpdCB0aGVtZSgpKS5kZWZhdWx0KTtcclxufVxyXG5mb3IgYXdhaXQgKGNvbnN0IGxhbmd1YWdlIG9mIE9iamVjdC52YWx1ZXMoc2hpa2kuYnVuZGxlZExhbmd1YWdlcykpIHtcclxuICBsYW5ndWFnZXMucHVzaCgoYXdhaXQgbGFuZ3VhZ2UoKSkuZGVmYXVsdFswXSk7XHJcbn1cclxuY29uc3QgbGFyZ2VQYWdlcyA9IFtcclxuICBcImVudGl0aWVzL3ZhbmlsbGEtdXNhZ2UtY29tcG9uZW50cy5tZFwiLFxyXG4gIFwiZW50aXRpZXMvdmFuaWxsYS11c2FnZS1zcGF3bi1ydWxlcy5tZFwiLFxyXG4gIFwiZW50aXRpZXMvdnVjLWZ1bGwubWRcIixcclxuICBcImVudGl0aWVzL3Z1c3ItZnVsbC5tZFwiLFxyXG5dO1xyXG5cclxuaWYgKGlzRmFzdEJ1aWxkKSB7XHJcbiAgZXhjbHVkZWRQYWdlcy5wdXNoKC4uLmxhcmdlUGFnZXMpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiW0ZBU1RfQlVJTERdIEV4Y2x1ZGluZyB0aGUgZm9sbG93aW5nIGxhcmdlIHBhZ2VzIGZyb20gdGhpcyBidWlsZDpcIixcclxuICAgIGxhcmdlUGFnZXMsXHJcbiAgICBcIlxcblwiXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnV2l0aFRoZW1lPFRoZW1lQ29uZmlnPih7XHJcbiAgdGl0bGU6IFwiTGVhZiBFc3NlbnRpYWxzIFdpa2lcIixcclxuICBkZXNjcmlwdGlvbjogXCJUaGUgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbiBmb3IgbGVhZlwiLFxyXG5cclxuICBjbGVhblVybHM6IHRydWUsXHJcblxyXG4gIGhlYWQsXHJcbiAgdHJhbnNmb3JtSGVhZCxcclxuXHJcbiAgc3JjRXhjbHVkZTogZXhjbHVkZWRQYWdlcyxcclxuICBpZ25vcmVEZWFkTGlua3M6IGlzRmFzdEJ1aWxkLFxyXG5cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgdXJsOiBcImh0dHBzOi8vd2lraS5iZWRyb2NrLmRldlwiLFxyXG4gICAgcmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vQmVkcm9jay1PU1MvYmVkcm9jay13aWtpXCIsXHJcblxyXG4gICAgYWxnb2xpYToge1xyXG4gICAgICBhcHBJZDogXCJOOVpIQVlKUUlJXCIsXHJcbiAgICAgIGFwaUtleTogXCJhNjY0ZjVhNWRhNjMxODEwYTA4ZTFhNDg1NTRmZTUyM1wiLFxyXG4gICAgICBpbmRleE5hbWU6IFwid2lraS1iZWRyb2NrXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBCZWRyb2NrIFdpa2lcdTIwMjZcIixcclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGlvbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJEaXNjb3JkXCIsXHJcbiAgICAgICAgbGluazogXCIvZGlzY29yZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJDb250cmlidXRlXCIsXHJcbiAgICAgICAgbGluazogXCIvY29udHJpYnV0ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJNQ0JFVG9vbHNcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbWNiZXRvb2xzLmNvbS9zL2xlYWZcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiR2l0aHViXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vVHJhc2h5RGFGb3gvTGVhZlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICByZWRpcmVjdHMsXHJcbiAgICB0YWdzLFxyXG4gIH0sXHJcblxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBhbmNob3I6IHtcclxuICAgICAgbGV2ZWw6IFsyLCAzLCA0LCA1LCA2XSxcclxuICAgIH0sXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGxldmVsOiBbMiwgMywgNCwgNSwgNl0sXHJcbiAgICB9LFxyXG4gICAgbWF0aDogdHJ1ZSxcclxuICAgIGxhbmd1YWdlcyxcclxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgdGhlbWU6IHtcclxuICAgICAgZGFyazogXCJkYXJrLXBsdXNcIixcclxuICAgICAgbGlnaHQ6IFwibGlnaHQtcGx1c1wiLFxyXG4gICAgfSxcclxuICAgIGNvbmZpZyhtZCkge1xyXG4gICAgICBtZC51c2UodGFza0xpc3RzUGx1Z2luLCB7IGxhYmVsOiB0cnVlIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgdml0ZToge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhcGk6IFwibW9kZXJuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbGFuZ3VhZ2VzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0cmFzaHlcXFxcbGVhZi13aWtpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxsYW5ndWFnZXNcXFxcanNvbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdHJhc2h5L2xlYWYtd2lraS9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbGFuZ3VhZ2VzL2pzb24udHNcIjtpbXBvcnQgeyBMYW5ndWFnZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCJzaGlraVwiO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2U6IExhbmd1YWdlUmVnaXN0cmF0aW9uID0ge1xyXG4gIHNjb3BlTmFtZTogXCJzb3VyY2UuanNvblwiLFxyXG4gIGRpc3BsYXlOYW1lOiBcIkpTT05cIixcclxuICBuYW1lOiBcImpzb25cIixcclxuICBwYXR0ZXJuczogW1xyXG4gICAgeyBpbmNsdWRlOiBcIiNvYmplY3RzbmlwcGV0XCIgfSwgLy8gU3ludGF4IGhpZ2hsaWdodGluZyBmb3IgYW0gb2JqZWN0IHdpdGhvdXQgc3Vycm91bmRpbmcgY3VybHkgYnJhY2tldHNcclxuICAgIHsgaW5jbHVkZTogXCIjdmFsdWVcIiB9LFxyXG4gIF0sXHJcbiAgcmVwb3NpdG9yeToge1xyXG4gICAgYXJyYXk6IHtcclxuICAgICAgYmVnaW46IFwiXFxcXFtcIixcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5hcnJheS5iZWdpbi5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgZW5kOiBcIl1cIixcclxuICAgICAgZW5kQ2FwdHVyZXM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uYXJyYXkuZW5kLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiBcIm1ldGEuc3RydWN0dXJlLmFycmF5Lmpzb25cIixcclxuICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpbmNsdWRlOiBcIiN2YWx1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IFwiLFwiLFxyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuYXJyYXkuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IFwiW15dXFxcXHNdXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImludmFsaWQuaWxsZWdhbC5leHBlY3RlZC1hcnJheS1zZXBhcmF0b3IuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgY29tbWVudHM6IHtcclxuICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBiZWdpbjogXCIvXFxcXCpcXFxcKig/IS8pXCIsXHJcbiAgICAgICAgICBjYXB0dXJlczoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmNvbW1lbnQuanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDogXCJcXFxcKi9cIixcclxuICAgICAgICAgIG5hbWU6IFwiY29tbWVudC5ibG9jay5kb2N1bWVudGF0aW9uLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJlZ2luOiBcIi9cXFxcKlwiLFxyXG4gICAgICAgICAgY2FwdHVyZXM6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5jb21tZW50Lmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbmQ6IFwiXFxcXCovXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbW1lbnQuYmxvY2suanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2FwdHVyZXM6IHtcclxuICAgICAgICAgICAgMToge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5jb21tZW50Lmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtYXRjaDogXCIoLy8pLiokXFxcXG4/XCIsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbW1lbnQubGluZS5kb3VibGUtc2xhc2guanNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIGNvbnN0YW50OiB7XHJcbiAgICAgIG1hdGNoOiBcIlxcXFxiKD86dHJ1ZXxmYWxzZXxudWxsKVxcXFxiXCIsXHJcbiAgICAgIG5hbWU6IFwiY29uc3RhbnQubGFuZ3VhZ2UuanNvblwiLFxyXG4gICAgfSxcclxuICAgIG51bWJlcjoge1xyXG4gICAgICBtYXRjaDogXCItPyg/OjB8WzEtOV1cXFxcZCopKD86KD86XFxcXC5cXFxcZCspPyg/OltFZV1bLStdP1xcXFxkKyk/KT9cIixcclxuICAgICAgbmFtZTogXCJjb25zdGFudC5udW1lcmljLmpzb25cIixcclxuICAgIH0sXHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgYmVnaW46IFwiXFxcXHtcIixcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5kaWN0aW9uYXJ5LmJlZ2luLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBlbmQ6IFwifVwiLFxyXG4gICAgICBlbmRDYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5kaWN0aW9uYXJ5LmVuZC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogXCJtZXRhLnN0cnVjdHVyZS5kaWN0aW9uYXJ5Lmpzb25cIixcclxuICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICB7IGluY2x1ZGU6IFwiI29iamVjdGtleVwiIH0sXHJcbiAgICAgICAgeyBpbmNsdWRlOiBcIiNjb21tZW50c1wiIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmVnaW46IFwiOlwiLFxyXG4gICAgICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuZGljdGlvbmFyeS5rZXktdmFsdWUuanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVuZDogXCIoLCl8KD89fSlcIixcclxuICAgICAgICAgIGVuZENhcHR1cmVzOiB7XHJcbiAgICAgICAgICAgIDE6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLnNlcGFyYXRvci5kaWN0aW9uYXJ5LnBhaXIuanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG5hbWU6IFwibWV0YS5zdHJ1Y3R1cmUuZGljdGlvbmFyeS52YWx1ZS5qc29uXCIsXHJcbiAgICAgICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6IFwiI3ZhbHVlXCIgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1hdGNoOiBcIlteLFxcXFxzXVwiLFxyXG4gICAgICAgICAgICAgIG5hbWU6IFwiaW52YWxpZC5pbGxlZ2FsLmV4cGVjdGVkLWRpY3Rpb25hcnktc2VwYXJhdG9yLmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtYXRjaDogXCJbXn1cXFxcc11cIixcclxuICAgICAgICAgIG5hbWU6IFwiaW52YWxpZC5pbGxlZ2FsLmV4cGVjdGVkLWRpY3Rpb25hcnktc2VwYXJhdG9yLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIG9iamVjdGtleToge1xyXG4gICAgICBiZWdpbjogJ1wiJyxcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uc3VwcG9ydC50eXBlLnByb3BlcnR5LW5hbWUuYmVnaW4uanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogJ1wiJyxcclxuICAgICAgZW5kQ2FwdHVyZXM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLnN1cHBvcnQudHlwZS5wcm9wZXJ0eS1uYW1lLmVuZC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogXCJzdHJpbmcuanNvbiBzdXBwb3J0LnR5cGUucHJvcGVydHktbmFtZS5qc29uXCIsXHJcbiAgICAgIHBhdHRlcm5zOiBbeyBpbmNsdWRlOiBcIiNzdHJpbmdjb250ZW50XCIgfV0sXHJcbiAgICB9LFxyXG4gICAgb2JqZWN0c25pcHBldDoge1xyXG4gICAgICBiZWdpbjogJ14oXCJbXlwiXSpcIikoOiknLFxyXG4gICAgICBiZWdpbkNhcHR1cmVzOiB7XHJcbiAgICAgICAgMToge1xyXG4gICAgICAgICAgcGF0dGVybnM6IFt7IGluY2x1ZGU6IFwiI29iamVjdGtleVwiIH1dLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMjoge1xyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuZGljdGlvbmFyeS5rZXktdmFsdWUuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogXCIsXCIsXHJcbiAgICAgIGVuZENhcHR1cmVzOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5zZXBhcmF0b3IuZGljdGlvbmFyeS5wYWlyLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBwYXR0ZXJuczogW3sgaW5jbHVkZTogXCIjdmFsdWVcIiB9XSxcclxuICAgICAgbmFtZTogXCJtZXRhLnN0cnVjdHVyZS5kaWN0aW9uYXJ5LnNuaXBwZXQuanNvblwiLFxyXG4gICAgfSxcclxuICAgIHN0cmluZzoge1xyXG4gICAgICBiZWdpbjogJ1wiJyxcclxuICAgICAgYmVnaW5DYXB0dXJlczoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuYmVnaW4uanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuZDogJ1wiJyxcclxuICAgICAgZW5kQ2FwdHVyZXM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogXCJzdHJpbmcucXVvdGVkLmRvdWJsZS5qc29uXCIsXHJcbiAgICAgIHBhdHRlcm5zOiBbeyBpbmNsdWRlOiBcIiNzdHJpbmdjb250ZW50XCIgfV0sXHJcbiAgICB9LFxyXG4gICAgc3RyaW5nY29udGVudDoge1xyXG4gICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoOiAnXFxcXFxcXFwoPzpbXCIvXFxcXFxcXFxiZm5ydF18dVxcXFxoezR9KScsXHJcbiAgICAgICAgICBuYW1lOiBcImNvbnN0YW50LmNoYXJhY3Rlci5lc2NhcGUuanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IFwiXFxcXFxcXFwuXCIsXHJcbiAgICAgICAgICBuYW1lOiBcImludmFsaWQuaWxsZWdhbC51bnJlY29nbml6ZWQtc3RyaW5nLWVzY2FwZS5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgIHsgaW5jbHVkZTogXCIjY29uc3RhbnRcIiB9LFxyXG4gICAgICAgIHsgaW5jbHVkZTogXCIjbnVtYmVyXCIgfSxcclxuICAgICAgICB7IGluY2x1ZGU6IFwiI3N0cmluZ1wiIH0sXHJcbiAgICAgICAgeyBpbmNsdWRlOiBcIiNhcnJheVwiIH0sXHJcbiAgICAgICAgeyBpbmNsdWRlOiBcIiNvYmplY3RcIiB9LFxyXG4gICAgICAgIHsgaW5jbHVkZTogXCIjY29tbWVudHNcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2U7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbGFuZ3VhZ2VzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0cmFzaHlcXFxcbGVhZi13aWtpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxsYW5ndWFnZXNcXFxcbW9sYW5nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90cmFzaHkvbGVhZi13aWtpL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9sYW5ndWFnZXMvbW9sYW5nLnRzXCI7aW1wb3J0IHsgTGFuZ3VhZ2VSZWdpc3RyYXRpb24gfSBmcm9tIFwic2hpa2lcIjtcclxuXHJcbmNvbnN0IGtleXdvcmRzID0gW1wiYnJlYWtcIiwgXCJjb250aW51ZVwiLCBcInJldHVyblwiXTtcclxuXHJcbmNvbnN0IHR5cGVzID0ge1xyXG4gIGFycmF5OiB7XHJcbiAgICByZWFkb25seTogdHJ1ZSxcclxuICB9LFxyXG4gIGNvbnRleHQ6IHtcclxuICAgIGFsaWFzOiBcImNcIixcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gIH0sXHJcbiAgZ2VvbWV0cnk6IHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gIH0sXHJcbiAgbWF0ZXJpYWw6IHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gIH0sXHJcbiAgbWF0aDoge1xyXG4gICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgfSxcclxuICBxdWVyeToge1xyXG4gICAgYWxpYXM6IFwicVwiLFxyXG4gICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgfSxcclxuICB0ZW1wOiB7XHJcbiAgICBhbGlhczogXCJ0XCIsXHJcbiAgfSxcclxuICB0ZXh0dXJlOiB7XHJcbiAgICByZWFkb25seTogdHJ1ZSxcclxuICB9LFxyXG4gIHZhcmlhYmxlOiB7XHJcbiAgICBhbGlhczogXCJ2XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlOiBMYW5ndWFnZVJlZ2lzdHJhdGlvbiA9IHtcclxuICBzY29wZU5hbWU6IFwic291cmNlLm1vbGFuZ1wiLFxyXG4gIGRpc3BsYXlOYW1lOiBcIk1vbGFuZ1wiLFxyXG4gIG5hbWU6IFwibW9sYW5nXCIsXHJcbiAgcGF0dGVybnM6IFtcclxuICAgIHsgaW5jbHVkZTogXCIjYm9vbGVhblwiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI251bWJlclwiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI3N0cmluZ1wiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI3RoaXNcIiB9LFxyXG4gICAgeyBpbmNsdWRlOiBcIiNrZXl3b3Jkc1wiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI29wZXJhdG9yc1wiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI2Z1bmN0aW9uXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjdHlwZXNcIiB9LFxyXG4gICAgeyBpbmNsdWRlOiBcIiNjb21tYVwiIH0sXHJcbiAgICB7IGluY2x1ZGU6IFwiI3NlbWljb2xvblwiIH0sXHJcbiAgXSxcclxuICByZXBvc2l0b3J5OiB7XHJcbiAgICBib29sZWFuOiB7XHJcbiAgICAgIG1hdGNoOiBcIig/aSlcXFxcYihmYWxzZXx0cnVlKVxcXFxiXCIsXHJcbiAgICAgIG5hbWU6IFwiY29uc3RhbnQubGFuZ3VhZ2UubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAgY29tbWE6IHtcclxuICAgICAgbWF0Y2g6IFwiLFwiLFxyXG4gICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLnNlcGFyYXRvci5jb21tYS5tb2xhbmdcIixcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbjoge1xyXG4gICAgICBtYXRjaDogXCJcXFxcYlxcXFx3Kyg/PVxcXFwoKVwiLFxyXG4gICAgICBuYW1lOiBcImVudGl0eS5uYW1lLmZ1bmN0aW9uLm1vbGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIGtleXdvcmRzOiB7XHJcbiAgICAgIG1hdGNoOiBgKD9pKVxcXFxiKCR7a2V5d29yZHMuam9pbihcInxcIil9KVxcXFxiYCxcclxuICAgICAgbmFtZTogXCJrZXl3b3JkLmNvbnRyb2wubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIG1hdGNoOiBcIig/aSkoXFxcXGJ8LSlcXFxcZCsoXFxcXC5cXFxcZCspPyhlWystXT9cXFxcZCspP2Y/XFxcXGJcIixcclxuICAgICAgbmFtZTogXCJjb25zdGFudC5udW1lcmljLm1vbGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIG9wZXJhdG9yczoge1xyXG4gICAgICBtYXRjaDogXCJbIT08Pl09P3xbPzoqLystXXwmJnxcXFxcfFxcXFx8fFxcXFw/XFxcXD98LT5cIixcclxuICAgICAgbmFtZTogXCJrZXl3b3JkLm9wZXJhdG9yLm1vbGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIHN0cmluZzoge1xyXG4gICAgICBiZWdpbjogXCInXCIsXHJcbiAgICAgIGJlZ2luQ2FwdHVyZXM6IHtcclxuICAgICAgICBcIjBcIjoge1xyXG4gICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLnN0cmluZy5iZWdpbi5tb2xhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBlbmQ6IFwiJ1wiLFxyXG4gICAgICBlbmRDYXB0dXJlczoge1xyXG4gICAgICAgIFwiMFwiOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5tb2xhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiBcInN0cmluZy5xdW90ZWQuc2luZ2xlLm1vbGFuZ1wiLFxyXG4gICAgfSxcclxuICAgIHNlbWljb2xvbjoge1xyXG4gICAgICBtYXRjaDogXCI7XCIsXHJcbiAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24udGVybWluYXRvci5zdGF0ZW1lbnQubW9sYW5nXCIsXHJcbiAgICB9LFxyXG4gICAgdGhpczoge1xyXG4gICAgICBtYXRjaDogXCIoP2kpXFxcXGJ0aGlzXFxcXGJcIixcclxuICAgICAgbmFtZTogXCJ2YXJpYWJsZS5sYW5ndWFnZS5tb2xhbmdcIixcclxuICAgIH0sXHJcbiAgICB0eXBlczoge1xyXG4gICAgICBwYXR0ZXJuczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoOiBgKD9pKVxcXFxiKCR7Z2V0VHlwZUtleXdvcmRzKCkuam9pbihcInxcIil9KSg/PVxcXFwuKWAsXHJcbiAgICAgICAgICBuYW1lOiBcInN0b3JhZ2UudHlwZS5tb2xhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoOiBgKD9pKSg/PD0oJHtnZXRUeXBlS2V5d29yZHModHJ1ZSkuam9pbihcInxcIil9KVxcXFwuKVxcXFx3K2AsXHJcbiAgICAgICAgICBuYW1lOiBcInZhcmlhYmxlLm90aGVyLmNvbnN0YW50Lm1vbGFuZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2g6IGAoP2kpKD88PSgke2dldFR5cGVLZXl3b3JkcyhmYWxzZSkuam9pbihcInxcIil9KVxcXFwuKVxcXFx3K2AsXHJcbiAgICAgICAgICBuYW1lOiBcInZhcmlhYmxlLm90aGVyLnJlYWR3cml0ZS5tb2xhbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0VHlwZUtleXdvcmRzKHJlYWRvbmx5VmFsdWU/OiBib29sZWFuKSB7XHJcbiAgY29uc3Qga2V5d29yZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGZvciAoY29uc3QgdHlwZSBpbiB0eXBlcykge1xyXG4gICAgY29uc3QgeyBhbGlhcywgcmVhZG9ubHkgPSBmYWxzZSB9ID0gdHlwZXNbdHlwZV07XHJcblxyXG4gICAgaWYgKHJlYWRvbmx5VmFsdWUgIT09IHVuZGVmaW5lZCAmJiByZWFkb25seVZhbHVlICE9PSByZWFkb25seSkgY29udGludWU7XHJcblxyXG4gICAga2V5d29yZHMucHVzaCh0eXBlKTtcclxuXHJcbiAgICBpZiAoIWFsaWFzKSBjb250aW51ZTtcclxuXHJcbiAgICBrZXl3b3Jkcy5wdXNoKGFsaWFzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBrZXl3b3JkcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2U7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbGFuZ3VhZ2VzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0cmFzaHlcXFxcbGVhZi13aWtpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxsYW5ndWFnZXNcXFxcbGVhZmZvcm1hdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdHJhc2h5L2xlYWYtd2lraS9kb2NzLy52aXRlcHJlc3MvdGhlbWUvbGFuZ3VhZ2VzL2xlYWZmb3JtYXQudHNcIjtpbXBvcnQgeyBMYW5ndWFnZVJlZ2lzdHJhdGlvbiB9IGZyb20gXCJzaGlraVwiO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2U6IExhbmd1YWdlUmVnaXN0cmF0aW9uID0ge1xyXG4gIHNjb3BlTmFtZTogXCJzb3VyY2UubGVhZmZvcm1hdFwiLFxyXG4gIGRpc3BsYXlOYW1lOiBcIkxlYWYgRm9ybWF0dGluZ1wiLFxyXG4gIG5hbWU6IFwibGVhZmZvcm1hdFwiLFxyXG4gIHBhdHRlcm5zOiBbXHJcbiAgICB7IGluY2x1ZGU6IFwiI21jQ29sb3JDb2RlXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjc3RyaW5nXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjZnVuY3Rpb25DYWxsXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjdmFyaWFibGVcIiB9LFxyXG4gICAgeyBpbmNsdWRlOiBcIiN1c2VybmFtZVZhcmlhYmxlXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjbnVtYmVyXCIgfSxcclxuICAgIHsgaW5jbHVkZTogXCIjbm9ybWFsVGV4dFwiIH0sXHJcbiAgXSxcclxuICByZXBvc2l0b3J5OiB7XHJcbiAgICBmdW5jdGlvbkNhbGw6IHtcclxuICAgICAgICBiZWdpbjogXCJ7e1wiLFxyXG4gICAgICAgIGJlZ2luQ2FwdHVyZXM6IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJwdW5jdHVhdGlvbi5kZWZpbml0aW9uLmJsb2NrLmJlZ2luLmN1c3RvbVwiIC8vIHRoaXMgd2lsbCBzdHlsZSB0aGUge3tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZDogXCJ9fVwiLFxyXG4gICAgICAgIGVuZENhcHR1cmVzOiB7XHJcbiAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5ibG9jay5lbmQuY3VzdG9tXCIgLy8gdGhpcyB3aWxsIHN0eWxlIHRoZSB9fVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZTogXCJtZXRhLmZ1bmN0aW9uLWNhbGwuY3VzdG9tXCIsXHJcbiAgICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWF0Y2g6IFwiW2EtekEtWl9dW2EtekEtWjAtOV9dKlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImVudGl0eS5uYW1lLmZ1bmN0aW9uLmN1c3RvbVwiIC8vIG9ubHkgaGlnaGxpZ2h0cyBmdW5jdGlvbiBuYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtYXRjaDogJ1wiW15cIl0qXCInLFxyXG4gICAgICAgICAgICBuYW1lOiBcInN0cmluZy5xdW90ZWQuZG91YmxlLmN1c3RvbVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtYXRjaDogXCJcXFxccytcIixcclxuICAgICAgICAgICAgbmFtZTogXCJ0ZXh0LndoaXRlc3BhY2UuY3VzdG9tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hdGNoOiBcIlteXFxcXHN7fVxcXCJdK1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImludmFsaWQudW5leHBlY3RlZC5jdXN0b21cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgbWNDb2xvckNvZGU6IHtcclxuICAgICAgICBtYXRjaDogXCJcdTAwQTdbMC05YS1ma2xtbm9ycXVzZF1cIixcclxuICAgICAgICBuYW1lOiBcInN0b3JhZ2UudHlwZVwiXHJcbiAgICAgIH0sICAgICAgICAgICAgXHJcbiAgICBzdHJpbmc6IHtcclxuICAgICAgICBiZWdpbjogJ1wiJyxcclxuICAgICAgICBiZWdpbkNhcHR1cmVzOiB7XHJcbiAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHVuY3R1YXRpb24uZGVmaW5pdGlvbi5zdHJpbmcuYmVnaW4ubGVhZmZvcm1hdFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZDogJ1wiJyxcclxuICAgICAgICBlbmRDYXB0dXJlczoge1xyXG4gICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24uc3RyaW5nLmVuZC5sZWFmZm9ybWF0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZTogXCJzdHJpbmcucXVvdGVkLmRvdWJsZS5sZWFmZm9ybWF0XCIsXHJcbiAgICAgICAgcGF0dGVybnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWF0Y2g6ICdcXFxcXFxcXCg/OltcIi9cXFxcXFxcXGJmbnJ0XXx1XFxcXGh7NH0pJyxcclxuICAgICAgICAgICAgbmFtZTogXCJjb25zdGFudC5jaGFyYWN0ZXIuZXNjYXBlLmxlYWZmb3JtYXRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hdGNoOiBcIlxcXFxcXFxcLlwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImludmFsaWQuaWxsZWdhbC51bnJlY29nbml6ZWQtc3RyaW5nLWVzY2FwZS5sZWFmZm9ybWF0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgdmFyaWFibGU6IHtcclxuICAgICAgbWF0Y2g6IFwiPFthLXpBLVowLTlfXSs+XCIsXHJcbiAgICAgIG5hbWU6IFwidmFyaWFibGVcIixcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZVZhcmlhYmxlOiB7XHJcbiAgICAgIG1hdGNoOiBcIkAoW2EtekEtWjAtOV9dKylcIiwgLy8gRml4ZWQgcmVnZXggZm9yIHVzZXJuYW1lIHZhcmlhYmxlLlxyXG4gICAgICBuYW1lOiBcInZhcmlhYmxlXCIsXHJcbiAgICB9LFxyXG4gICAgbnVtYmVyOiB7XHJcbiAgICAgIG1hdGNoOiBcIihcXFxcW1xcXFxkK1xcXFxdfFxcXFxkKylcIiwgLy8gTWF0Y2ggbnVtYmVycyBpbiBicmFja2V0cyBvciBzdGFuZGFsb25lIG51bWJlcnMuXHJcbiAgICAgIG5hbWU6IFwiY29uc3RhbnQubnVtZXJpY1wiLFxyXG4gICAgfSxcclxuICAgIG5vcm1hbFRleHQ6IHtcclxuICAgICAgbWF0Y2g6IFwiW157fTw+QFxcXCJcXFxcW1xcXFxdXStcIiwgLy8gTWF0Y2ggcGxhaW4gdGV4dCBleGNsdWRpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gICAgICBuYW1lOiBcInRleHQucGxhaW5cIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRyYXNoeVxcXFxsZWFmLXdpa2lcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXGxhbmd1YWdlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcbGFuZ3VhZ2VzXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90cmFzaHkvbGVhZi13aWtpL2RvY3MvLnZpdGVwcmVzcy90aGVtZS9sYW5ndWFnZXMvaW5kZXgudHNcIjtpbXBvcnQganNvbiBmcm9tIFwiLi9qc29uXCI7XHJcbmltcG9ydCBtb2xhbmcgZnJvbSBcIi4vbW9sYW5nXCI7XHJcbmltcG9ydCBsZWFmZm9ybWF0IGZyb20gXCIuL2xlYWZmb3JtYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtqc29uLCBtb2xhbmcsIGxlYWZmb3JtYXRdO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRyYXNoeVxcXFxsZWFmLXdpa2lcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGhlYWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRyYXNoeVxcXFxsZWFmLXdpa2lcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGhlYWRcXFxcdHJhbnNmb3JtLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90cmFzaHkvbGVhZi13aWtpL2RvY3MvLnZpdGVwcmVzcy9oZWFkL3RyYW5zZm9ybS50c1wiO2ltcG9ydCB7IEhlYWRDb25maWcsIFRyYW5zZm9ybUNvbnRleHQgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtSGVhZCh7IHBhZ2VEYXRhLCBzaXRlQ29uZmlnIH06IFRyYW5zZm9ybUNvbnRleHQpIHtcclxuICBjb25zdCBjb25maWcgPSBzaXRlQ29uZmlnLnNpdGU7XHJcbiAgY29uc3Qgc2l0ZSA9IGNvbmZpZy50aXRsZTtcclxuXHJcbiAgY29uc3QgeyBmcm9udG1hdHRlciwgcmVsYXRpdmVQYXRoIH0gPSBwYWdlRGF0YTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBmcm9udG1hdHRlci50aXRsZSA/PyBcIlRoZSBCZWRyb2NrIFdpa2lcIjtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZyb250bWF0dGVyLmRlc2NyaXB0aW9uID8/IGNvbmZpZy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBgJHtjb25maWcudGhlbWVDb25maWcudXJsfS9hc3NldHMvaW1hZ2VzL2hvbWVwYWdlL3dpa2lsb2dvLnBuZ2A7XHJcbiAgY29uc3QgaW1hZ2VBbHQgPSBcIkJlZHJvY2sgV2lraSBMb2dvXCI7XHJcblxyXG4gIGNvbnN0IHBhdGggPSByZWxhdGl2ZVBhdGgucmVwbGFjZShcIi5tZFwiLCBcIlwiKTtcclxuXHJcbiAgbGV0IHVybCA9IGNvbmZpZy50aGVtZUNvbmZpZy51cmw7XHJcbiAgaWYgKHBhdGggIT09IFwiaW5kZXhcIikgdXJsICs9IGAvJHtwYXRofWA7XHJcblxyXG4gIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICAvLyBPcGVuIEdyYXBoICh1c2VkIGJ5IERpc2NvcmQpXHJcbiAgICBcIm9nOnR5cGVcIjogXCJ3ZWJzaXRlXCIsXHJcbiAgICBcIm9nOnRpdGxlXCI6IHRpdGxlLFxyXG4gICAgXCJvZzpkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcclxuICAgIFwib2c6aW1hZ2VcIjogaW1hZ2UsXHJcbiAgICBcIm9nOmltYWdlOmFsdFwiOiBpbWFnZUFsdCxcclxuICAgIFwib2c6dXJsXCI6IHVybCxcclxuICAgIFwib2c6c2l0ZV9uYW1lXCI6IHNpdGUsXHJcbiAgICAvLyBUd2l0dGVyXHJcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlcIixcclxuICAgIFwidHdpdHRlcjp0aXRsZVwiOiB0aXRsZSxcclxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcclxuICAgIFwidHdpdHRlcjppbWFnZVwiOiBpbWFnZSxcclxuICAgIFwidHdpdHRlcjppbWFnZTphbHRcIjogaW1hZ2VBbHQsXHJcbiAgICBcInR3aXR0ZXI6c2l0ZVwiOiBzaXRlLFxyXG4gIH07XHJcblxyXG4gIGlmIChmcm9udG1hdHRlci5oaWRkZW4pIGRhdGEucm9ib3RzID0gXCJub2luZGV4XCI7XHJcblxyXG4gIGNvbnN0IG91dDogSGVhZENvbmZpZ1tdID0gW107XHJcblxyXG4gIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtuYW1lLCBjb250ZW50XSkgPT4ge1xyXG4gICAgb3V0LnB1c2goW1xyXG4gICAgICBcIm1ldGFcIixcclxuICAgICAge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gb3V0O1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcaGVhZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcaGVhZFxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdHJhc2h5L2xlYWYtd2lraS9kb2NzLy52aXRlcHJlc3MvaGVhZC9pbmRleC50c1wiO2ltcG9ydCB7IEhlYWRDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmV4cG9ydCB7IHRyYW5zZm9ybUhlYWQgfSBmcm9tIFwiLi90cmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxIZWFkQ29uZmlnW10+W1xyXG4gIFtcclxuICAgIFwibGlua1wiLFxyXG4gICAge1xyXG4gICAgICByZWw6IFwiaWNvblwiLFxyXG4gICAgICBocmVmOiBcIi9mYXZpY29uLmljb1wiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIFwiYXBwbGUtdG91Y2gtaWNvblwiLFxyXG4gICAge1xyXG4gICAgICByZWw6IFwiaWNvblwiLFxyXG4gICAgICBocmVmOiBcIi9hc3NldHMvaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIsXHJcbiAgICAgIHNpemVzOiBcIjE4MHgxODBcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIm1hc2staWNvblwiLFxyXG4gICAge1xyXG4gICAgICByZWw6IFwiaWNvblwiLFxyXG4gICAgICBocmVmOiBcIi9hc3NldHMvaW1hZ2VzL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiLFxyXG4gICAgICBjb2xvcjogXCIjNjBjM2ZhXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJtZXRhXCIsXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwidGhlbWUtY29sb3JcIixcclxuICAgICAgY29udGVudDogXCIjNjBjM2ZhXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbl07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRyYXNoeVxcXFxsZWFmLXdpa2lcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHJlZGlyZWN0cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdHJhc2h5L2xlYWYtd2lraS9kb2NzLy52aXRlcHJlc3MvcmVkaXJlY3RzLnRzXCI7aW1wb3J0IHsgUmVkaXJlY3RzIH0gZnJvbSBcIi4vdGhlbWVcIjtcclxuXHJcbi8vIEFscGhhYmV0aWNhbCBvcmRlciBwbGVhc2UgOilcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFwiL2Jsb2Nrcy9ibG9jay1tYXRlcmlhbHNcIjogXCIvYmxvY2tzL2Jsb2NrLWNvbXBvbmVudHMjcmVuZGVyLW1ldGhvZHNcIixcclxuICBcIi9ibG9ja3MvYmxvY2tzLTE2XCI6IFwiL2Jsb2Nrcy9ibG9ja3MtaW50cm9cIixcclxuICBcIi9ibG9ja3MvYmxvY2tzLXN0YWJsZVwiOiBcIi9ibG9ja3MvYmxvY2tzLWludHJvXCIsXHJcbiAgXCIvYmxvY2tzL2N1c3RvbS10cmFwZG9vclwiOiBcIi9ibG9ja3MvY3VzdG9tLXRyYXBkb29yc1wiLFxyXG5cclxuICBcIi9jb25jZXB0cy9hbmltYXRpb24tY29udHJvbGxlcnNcIjogXCIvYW5pbWF0aW9uLWNvbnRyb2xsZXJzL2FuaW1hdGlvbi1jb250cm9sbGVycy1pbnRyb1wiLFxyXG4gIFwiL2NvbmNlcHRzL2Jpb21lc1wiOiBcIi93b3JsZC1nZW5lcmF0aW9uL2Jpb21lc1wiLFxyXG4gIFwiL2NvbmNlcHRzL2Jsb2Nrc1wiOiBcIi9ibG9ja3MvYmxvY2tzLWludHJvXCIsXHJcbiAgXCIvY29uY2VwdHMvY29tcG9uZW50cy1ldmVudHMtZ3JvdXBzXCI6IFwiL2VudGl0aWVzL2VudGl0eS1pbnRyby1icFwiLFxyXG4gIFwiL2NvbmNlcHRzL2VudGl0eS1wcm9wZXJ0aWVzXCI6IFwiL2VudGl0aWVzL2VudGl0eS1wcm9wZXJ0aWVzXCIsXHJcbiAgXCIvY29uY2VwdHMvaXRlbXNcIjogXCIvaXRlbXMvaXRlbS1jb21wb25lbnRzXCIsXHJcbiAgXCIvY29uY2VwdHMvanNvbi11aVwiOiBcIi9qc29uLXVpL2pzb24tdWktaW50cm9cIixcclxuICBcIi9jb25jZXB0cy9tYXRoLWJhc2VkLWFuaW1hdGlvbnNcIjogXCIvdmlzdWFscy9tYXRoLWJhc2VkLWFuaW1hdGlvbnNcIixcclxuICBcIi9jb25jZXB0cy9tY2Z1bmN0aW9uXCI6IFwiL2NvbW1hbmRzL21jZnVuY3Rpb25cIixcclxuICBcIi9jb25jZXB0cy9yZW5kZXItY29udHJvbGxlclwiOiBcIi92aXN1YWxzL3JlbmRlci1jb250cm9sbGVyXCIsXHJcblxyXG4gIFwiL2RvY3VtZW50YXRpb24vYmlvbWUtdGFnc1wiOiBcIi93b3JsZC1nZW5lcmF0aW9uL2Jpb21lLXRhZ3NcIixcclxuICBcIi9kb2N1bWVudGF0aW9uL2Jsb2NrLW1vZGVsLW1hdGVyaWFsc1wiOiBcIi9ibG9ja3MvYmxvY2stY29tcG9uZW50cyNyZW5kZXItbWV0aG9kc1wiLFxyXG4gIFwiL2RvY3VtZW50YXRpb24vYmxvY2stc2hhcGVzXCI6IFwiL2Jsb2Nrcy9ibG9jay1zaGFwZXNcIixcclxuICBcIi9kb2N1bWVudGF0aW9uL2Jsb2NrLXRhZ3NcIjogXCIvYmxvY2tzL2Jsb2NrLXRhZ3NcIixcclxuICBcIi9kb2N1bWVudGF0aW9uL2NyZWF0aXZlLWNhdGVnb3JpZXNcIjogXCIvZG9jdW1lbnRhdGlvbi9tZW51LWNhdGVnb3JpZXNcIixcclxuICBcIi9kb2N1bWVudGF0aW9uL2R1bW15LWNvbXBvbmVudHNcIjogXCIvZW50aXRpZXMvZHVtbXktY29tcG9uZW50c1wiLFxyXG4gIFwiL2RvY3VtZW50YXRpb24vZW1vamlzXCI6IFwiL2NvbmNlcHRzL2Vtb2ppc1wiLFxyXG4gIFwiL2RvY3VtZW50YXRpb24vaXRlbS1ncm91cHNcIjogXCIvaXRlbXMvaXRlbS1ncm91cHNcIixcclxuICBcIi9kb2N1bWVudGF0aW9uL2pzb24tdWlcIjogXCIvanNvbi11aS9qc29uLXVpLWRvY3VtZW50YXRpb25cIixcclxuICBcIi9kb2N1bWVudGF0aW9uL3Byb2plY3RpbGVzXCI6IFwiL2VudGl0aWVzL3Byb2plY3RpbGVzXCIsXHJcbiAgXCIvZG9jdW1lbnRhdGlvbi9ydW50aW1lLWlkZW50aWZpZXJcIjogXCIvZW50aXRpZXMvcnVudGltZS1pZGVudGlmaWVyXCIsXHJcbiAgXCIvZG9jdW1lbnRhdGlvbi9zdWJwYWNrc1wiOiBcIi9jb25jZXB0cy9zdWJwYWNrc1wiLFxyXG4gIFwiL2RvY3VtZW50YXRpb24vdGVsbHJhd1wiOiBcIi9jb21tYW5kcy90ZWxscmF3XCIsXHJcblxyXG4gIFwiL2VudGl0aWVzL2VudGl0aWVzLWludHJvXCI6IFwiL2VudGl0aWVzL2VudGl0eS1pbnRyby1icFwiLFxyXG4gIFwiL2VudGl0aWVzL25wYy1kaWFsb2dzXCI6IFwiL2VudGl0aWVzL25wYy1kaWFsb2d1ZXNcIixcclxuXHJcbiAgXCIvaXRlbXMvM2QtaXRlbXNcIjogXCIvaXRlbXMvYXR0YWNoYWJsZXNcIixcclxuICBcIi9pdGVtcy9pdGVtLWNhdGVnb3JpZXNcIjogXCIvaXRlbXMvY3JlYXRpdmUtY2F0ZWdvcmllc1wiLFxyXG5cclxuICBcIi9qc29uLXVpL2N1c3RvbS1idXR0b25zXCI6IFwiL2pzb24tdWkvYnV0dG9ucy1hbmQtdG9nZ2xlc1wiLFxyXG5cclxuICBcIi9rbm93bGVkZ2UvYWRkb24tcGVyZm9ybWFuY2VcIjogXCIvbWV0YS9hZGRvbi1wZXJmb3JtYW5jZVwiLFxyXG4gIFwiL2tub3dsZWRnZS9hZGRvbi1wcm9ncmFtbWluZ1wiOiBcIi9tZXRhL2FkZG9uLXByb2dyYW1taW5nXCIsXHJcbiAgXCIva25vd2xlZGdlL2JlZHJvY2stbW9kZWxpbmdcIjogXCIvdmlzdWFscy9iZWRyb2NrLW1vZGVsaW5nXCIsXHJcbiAgXCIva25vd2xlZGdlL2VudGl0eS1tb3ZlbWVudFwiOiBcIi9lbnRpdGllcy9lbnRpdHktbW92ZW1lbnRcIixcclxuICBcIi9rbm93bGVkZ2UvbmJ0X2NvbW1hbmRzXCI6IFwiL2NvbW1hbmRzL25idC1jb21tYW5kc1wiLFxyXG4gIFwiL2tub3dsZWRnZS9zdHlsZS1ndWlkZVwiOiBcIi9tZXRhL3N0eWxlLWd1aWRlXCIsXHJcbiAgXCIva25vd2xlZGdlL3VzZWZ1bC1saW5rc1wiOiBcIi9tZXRhL3VzZWZ1bC1saW5rc1wiLFxyXG4gIFwiL2tub3dsZWRnZS91c2luZy1zY2hlbWFzXCI6IFwiL21ldGEvdXNpbmctc2NoZW1hc1wiLFxyXG4gIFwiL2tub3dsZWRnZS92ZXJzaW9uLWNvbnRyb2xcIjogXCIvbWV0YS92ZXJzaW9uLWNvbnRyb2xcIixcclxuXHJcbiAgXCIvc2NyaXB0aW5nL2dhbWV0ZXN0LXFuYVwiOiBcIi9tZXRhL2dhbWV0ZXN0LXFuYVwiLFxyXG4gIFwiL3NjcmlwdGluZy9zY3JpcHRpbmctZWRpdG9yLXFuYVwiOiBcIi9tZXRhL3NjcmlwdGluZy1lZGl0b3ItcW5hXCIsXHJcbiAgXCIvc2NyaXB0aW5nL3N0YXJ0aW5nLXNjcmlwdHNcIjogXCIvc2NyaXB0aW5nL3NjcmlwdGluZy1pbnRyb1wiLFxyXG5cclxuICBcIi90cm91Ymxlc2hvb3RpbmcvZW50aXRpZXNcIjogXCIvZW50aXRpZXMvdHJvdWJsZXNob290aW5nLWVudGl0aWVzXCIsXHJcbiAgXCIvdHJvdWJsZXNob290aW5nL2l0ZW1zXCI6IFwiL2l0ZW1zL3Ryb3VibGVzaG9vdGluZy1pdGVtc1wiLFxyXG5cclxuICBcIi90dXRvcmlhbHMvYmVnaW5uZXItY29tbWFuZHNcIjogXCIvY29tbWFuZHMvY29tbWFuZHMtaW50cm9cIixcclxuICBcIi90dXRvcmlhbHMvYmxvY2stdGV4dHVyZS12YXJpYXRpb25cIjogXCIvYmxvY2tzL2Jsb2NrLXRleHR1cmUtdmFyaWF0aW9uXCIsXHJcbiAgXCIvdHV0b3JpYWxzL2JvYXQtZW50aXRpZXNcIjogXCIvZW50aXRpZXMvYm9hdC1lbnRpdGllc1wiLFxyXG4gIFwiL3R1dG9yaWFscy9jYW5jZWxsaW5nLWRlYXRoLWFuaW1hdGlvblwiOiBcIi9lbnRpdGllcy9jYW5jZWxsaW5nLWRlYXRoLWFuaW1hdGlvblwiLFxyXG4gIFwiL3R1dG9yaWFscy9jb250cm9sbGluZy1mbHlpbmctZW50aXRpZXNcIjogXCIvZW50aXRpZXMvZmx5aW5nLWVudGl0aWVzXCIsXHJcbiAgXCIvdHV0b3JpYWxzL2NyYWZ0YWJsZS1zcGF3bmVnZ3NcIjogXCIvbG9vdC9jcmFmdGFibGUtc3Bhd25lZ2dzXCIsXHJcbiAgXCIvdHV0b3JpYWxzL2N1c3RvbS1hcm1vclwiOiBcIi9lbnRpdGllcy9jdXN0b20tYXJtb3JcIixcclxuICBcIi90dXRvcmlhbHMvZGlzYWJsaW5nLXBhcnRpY2xlc1wiOiBcIi92aXN1YWxzL2Rpc2FibGluZy1wYXJ0aWNsZXNcIixcclxuICBcIi90dXRvcmlhbHMvZGlzYWJsaW5nLXRlYW0tZGFtYWdlXCI6IFwiL2VudGl0aWVzL2Rpc2FibGluZy10ZWFtLWRhbWFnZVwiLFxyXG4gIFwiL3R1dG9yaWFscy9lZ2ctZHJvcHNcIjogXCIvbG9vdC9lZ2ctZHJvcHNcIixcclxuICBcIi90dXRvcmlhbHMvZW50aXR5LWNvbW1hbmRzXCI6IFwiL2NvbW1hbmRzL2FuaW1hdGlvbi1jb250cm9sbGVyc1wiLFxyXG4gIFwiL3R1dG9yaWFscy9lbnRpdHktZXZlbnRzXCI6IFwiL2VudGl0aWVzL2VudGl0eS1ldmVudHNcIixcclxuICBcIi90dXRvcmlhbHMvZW50aXR5LWhvbGRzLWl0ZW1cIjogXCIvZW50aXRpZXMvZW50aXR5LWhvbGRzLWl0ZW1cIixcclxuICBcIi90dXRvcmlhbHMvZmFrZV9ibG9ja3NcIjogXCIvYmxvY2tzL2Zha2UtYmxvY2tzXCIsXHJcbiAgXCIvdHV0b3JpYWxzL2ludnVsbmVyYWJsZS1lbnRpdGllc1wiOiBcIi9lbnRpdGllcy9pbnZ1bG5lcmFibGUtZW50aXRpZXNcIixcclxuICBcIi90dXRvcmlhbHMvaXRlbS1tb2RlbHNcIjogXCIvaXRlbXMvYXR0YWNoYWJsZXNcIixcclxuICBcIi90dXRvcmlhbHMvbnBjLWRpYWxvZ3NcIjogXCIvZW50aXRpZXMvbnBjLWRpYWxvZ3Vlc1wiLFxyXG4gIFwiL3R1dG9yaWFscy9wYXRoZmluZGluZy1lbnRpdGllc1wiOiBcIi9lbnRpdGllcy9wYXRoZmluZGluZy1lbnRpdGllc1wiLFxyXG4gIFwiL3R1dG9yaWFscy9wbGF5ZXItZ2VvbWV0cnlcIjogXCIvdmlzdWFscy9wbGF5ZXItZ2VvbWV0cnlcIixcclxuICBcIi90dXRvcmlhbHMvcmVtb3ZlLXNoYWRvd3NcIjogXCIvdmlzdWFscy9yZW1vdmUtc2hhZG93c1wiLFxyXG4gIFwiL3R1dG9yaWFscy9yZXNwYXduLWNvbW1hbmRzXCI6IFwiL2NvbW1hbmRzL3Jlc3Bhd24tY29tbWFuZHNcIixcclxuICBcIi90dXRvcmlhbHMvcmV0ZXh0dXJpbmctc3Bhd24tZWdnc1wiOiBcIi92aXN1YWxzL3JldGV4dHVyaW5nLXNwYXduLWVnZ3NcIixcclxuICBcIi90dXRvcmlhbHMvc29saWQtZW50aXRpZXNcIjogXCIvZW50aXRpZXMvc29saWQtZW50aXRpZXNcIixcclxuICBcIi90dXRvcmlhbHMvc3Bhd25pbmctaXRlbXNcIjogXCIvaXRlbXMvc3Bhd25pbmctaXRlbXNcIixcclxuICBcIi90dXRvcmlhbHMvdGV4dC1sb2NhbGl6YXRpb25cIjogXCIvY29uY2VwdHMvdGV4dC1sb2NhbGl6YXRpb25cIixcclxuICBcIi90dXRvcmlhbHMvdGltZXJzXCI6IFwiL2VudGl0aWVzL3RpbWVyc1wiLFxyXG5cclxuICBcIi92YW5pbGxhLXVzYWdlL2l0ZW1zXCI6IFwiL2l0ZW1zL3ZhbmlsbGEtdXNhZ2UtaXRlbXNcIixcclxuICBcIi92YW5pbGxhLXVzYWdlL2NvbXBvbmVudHNcIjogXCIvZW50aXRpZXMvdmFuaWxsYS11c2FnZS1jb21wb25lbnRzXCIsXHJcbiAgXCIvdmFuaWxsYS11c2FnZS9zcGF3bi1ydWxlc1wiOiBcIi9lbnRpdGllcy92YW5pbGxhLXVzYWdlLXNwYXduLXJ1bGVzXCIsXHJcblxyXG4gIFwiL3Zpc3VhbHMvZGVmZXJyZWQtcW5hXCI6IFwiL21ldGEvZGVmZXJyZWQtcW5hXCIsXHJcbiAgXCIvdmlzdWFscy9lbnRpdHktdmlzdWFscy1pbnRyb1wiOiBcIi9lbnRpdGllcy9yZW5kZXItY29udHJvbGxlcnNcIixcclxuICBcIi92aXN1YWxzL3JlbmRlci1jb250cm9sbGVyc1wiOiBcIi9lbnRpdGllcy9yZW5kZXItY29udHJvbGxlcnNcIixcclxuXHJcbiAgXCIvd29ybGQtZ2VuZXJhdGlvbi9yYW5kb21pemVkLXN0cnVjdHVyZS1sb290XCI6IFwiL2xvb3QvcmFuZG9taXplZC1zdHJ1Y3R1cmUtbG9vdFwiLFxyXG59IHNhdGlzZmllcyBSZWRpcmVjdHM7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdHJhc2h5XFxcXGxlYWYtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRyYXNoeVxcXFxsZWFmLXdpa2lcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRhZ3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3RyYXNoeS9sZWFmLXdpa2kvZG9jcy8udml0ZXByZXNzL3RhZ3MudHNcIjtpbXBvcnQgeyBUYWdzIH0gZnJvbSBcIi4vdGhlbWVcIjtcclxuXHJcbi8vIEFscGhhYmV0aWNhbCBvcmRlciBwbGVhc2UgOilcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJlZ2lubmVyOiB7XHJcbiAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgfSxcclxuICBhZHZhbmNlZDoge1xyXG4gICAgY29sb3I6ICdwaW5rJyxcclxuICAgIHNpZGViYXI6IHRydWUsXHJcbiAgfSxcclxuICBiZXRhOiB7XHJcbiAgICBjb2xvcjogXCJ5ZWxsb3dcIixcclxuICB9LFxyXG4gIGRlcHJlY2F0ZWQ6IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgc2lkZWJhcjogdHJ1ZVxyXG4gIH0sXHJcbiAgZWFzeToge1xyXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gIH0sXHJcbiAgZXhwZXJpbWVudGFsOiB7XHJcbiAgICBjb2xvcjogXCJvcmFuZ2VcIixcclxuICB9LFxyXG4gIGV4cGVydDoge1xyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgfSxcclxuICBmdW5jdGlvbjoge1xyXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgc2lkZWJhcjogdHJ1ZSxcclxuICB9LFxyXG4gIGd1aWRlOiB7XHJcbiAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgc2lkZWJhcjogdHJ1ZSxcclxuICB9LFxyXG4gIGhlbHA6IHtcclxuICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgIHNpZGViYXI6IHRydWUsXHJcbiAgfSxcclxuICBpbmZvOiB7XHJcbiAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICBzaWRlYmFyOiB0cnVlLFxyXG4gIH0sXHJcbiAgaW50ZXJtZWRpYXRlOiB7XHJcbiAgICBjb2xvcjogXCJvcmFuZ2VcIixcclxuICB9LFxyXG4gIG1ldGhvZDoge1xyXG4gICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgfSxcclxuICBvdXRkYXRlZDoge1xyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICBzaWRlYmFyOiB0cnVlLFxyXG4gIH0sXHJcbiAgc2NyaXB0aW5nOiB7XHJcbiAgICBjb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgIHNpZGViYXI6IHtcclxuICAgICAgdGV4dDogXCJTY3JpcHRzXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIFRhZ3M7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1MsU0FBUyw2QkFBNkI7QUFDclYsT0FBTyxxQkFBcUI7OztBQ0M1QixJQUFNLFdBQWlDO0FBQUEsRUFDckMsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLElBQ1IsRUFBRSxTQUFTLGlCQUFpQjtBQUFBO0FBQUEsSUFDNUIsRUFBRSxTQUFTLFNBQVM7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLFFBQ2IsR0FBRztBQUFBLFVBQ0QsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxhQUFhO0FBQUEsUUFDWCxHQUFHO0FBQUEsVUFDRCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxZQUNSLEdBQUc7QUFBQSxjQUNELE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsWUFDUixHQUFHO0FBQUEsY0FDRCxN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OEJBQThCO0FBQUEsRUFDOUIsMEJBQTBCO0FBQUEsRUFDMUIsOEJBQThCO0FBQUEsRUFDOUIscUNBQXFDO0FBQUEsRUFDckMsMkJBQTJCO0FBQUEsRUFDM0IsMEJBQTBCO0FBQUEsRUFFMUIsNEJBQTRCO0FBQUEsRUFDNUIseUJBQXlCO0FBQUEsRUFFekIsbUJBQW1CO0FBQUEsRUFDbkIsMEJBQTBCO0FBQUEsRUFFMUIsMkJBQTJCO0FBQUEsRUFFM0IsZ0NBQWdDO0FBQUEsRUFDaEMsZ0NBQWdDO0FBQUEsRUFDaEMsK0JBQStCO0FBQUEsRUFDL0IsOEJBQThCO0FBQUEsRUFDOUIsMkJBQTJCO0FBQUEsRUFDM0IsMEJBQTBCO0FBQUEsRUFDMUIsMkJBQTJCO0FBQUEsRUFDM0IsNEJBQTRCO0FBQUEsRUFDNUIsOEJBQThCO0FBQUEsRUFFOUIsMkJBQTJCO0FBQUEsRUFDM0IsbUNBQW1DO0FBQUEsRUFDbkMsK0JBQStCO0FBQUEsRUFFL0IsNkJBQTZCO0FBQUEsRUFDN0IsMEJBQTBCO0FBQUEsRUFFMUIsZ0NBQWdDO0FBQUEsRUFDaEMsc0NBQXNDO0FBQUEsRUFDdEMsNEJBQTRCO0FBQUEsRUFDNUIseUNBQXlDO0FBQUEsRUFDekMsMENBQTBDO0FBQUEsRUFDMUMsa0NBQWtDO0FBQUEsRUFDbEMsMkJBQTJCO0FBQUEsRUFDM0Isa0NBQWtDO0FBQUEsRUFDbEMsb0NBQW9DO0FBQUEsRUFDcEMsd0JBQXdCO0FBQUEsRUFDeEIsOEJBQThCO0FBQUEsRUFDOUIsNEJBQTRCO0FBQUEsRUFDNUIsZ0NBQWdDO0FBQUEsRUFDaEMsMEJBQTBCO0FBQUEsRUFDMUIsb0NBQW9DO0FBQUEsRUFDcEMsMEJBQTBCO0FBQUEsRUFDMUIsMEJBQTBCO0FBQUEsRUFDMUIsbUNBQW1DO0FBQUEsRUFDbkMsOEJBQThCO0FBQUEsRUFDOUIsNkJBQTZCO0FBQUEsRUFDN0IsK0JBQStCO0FBQUEsRUFDL0IscUNBQXFDO0FBQUEsRUFDckMsNkJBQTZCO0FBQUEsRUFDN0IsNkJBQTZCO0FBQUEsRUFDN0IsZ0NBQWdDO0FBQUEsRUFDaEMs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O0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBRUE7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBRUEsVUFBVTtBQUFBLElBQ1IsUUFBUTtBQUFBLE1BQ04sT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDdkI7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsT0FBTyxJQUFJO0FBQ1QsU0FBRyxJQUFJLGlCQUFpQixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsSUFFekM7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImxhbmd1YWdlIiwgImtleXdvcmRzIiwgImxhbmd1YWdlIiwgImxhbmd1YWdlIl0KfQo=
