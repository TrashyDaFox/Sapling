import { LanguageRegistration } from "shiki";

const language: LanguageRegistration = {
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
    { include: "#normalText" },
  ],
  repository: {
    functionCall: {
        begin: "{{",
        beginCaptures: {
          0: {
            name: "punctuation.definition.block.begin.custom" // this will style the {{
          }
        },
        end: "}}",
        endCaptures: {
          0: {
            name: "punctuation.definition.block.end.custom" // this will style the }}
          }
        },
        name: "meta.function-call.custom",
        patterns: [
          {
            match: "[a-zA-Z_][a-zA-Z0-9_]*",
            name: "entity.name.function.custom" // only highlights function name
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
            match: "[^\\s{}\"]+",
            name: "invalid.unexpected.custom"
          }
        ]
      },
      mcColorCode: {
        match: "§[0-9a-fklmnorqusd]",
        name: "storage.type"
      },            
    string: {
        begin: '"',
        beginCaptures: {
          0: {
            name: "punctuation.definition.string.begin.leafformat",
          },
        },
        end: '"',
        endCaptures: {
          0: {
            name: "punctuation.definition.string.end.leafformat",
          },
        },
        name: "string.quoted.double.leafformat",
        patterns: [
          {
            match: '\\\\(?:["/\\\\bfnrt]|u\\h{4})',
            name: "constant.character.escape.leafformat",
          },
          {
            match: "\\\\.",
            name: "invalid.illegal.unrecognized-string-escape.leafformat",
          },
        ],
    },
    variable: {
      match: "<[a-zA-Z0-9_]+>",
      name: "variable",
    },
    usernameVariable: {
      match: "@([a-zA-Z0-9_]+)", // Fixed regex for username variable.
      name: "variable",
    },
    number: {
      match: "(\\[\\d+\\]|\\d+)", // Match numbers in brackets or standalone numbers.
      name: "constant.numeric",
    },
    normalText: {
      match: "[^{}<>@\"\\[\\]]+", // Match plain text excluding special characters.
      name: "text.plain",
    },
  },
};

export default language;
