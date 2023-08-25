const { ESLintUtils } = require("@typescript-eslint/utils");

module.exports = ESLintUtils.RuleCreator.withoutDocs({
  defaultOptions: [],
  meta: {
    messages: {
      name: "Expected file name to follow the kebab-case",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    const fileName = !context.getFilename().match("src")
      ? context.getFilename().replace(/^.*[\\/]/, "")
      : context
          .getFilename()
          .replace(
            /^.*[\\/]src(\/|\\)(pages|components|styles|definitions|interfaces|layouts|lib)(\/|\\)/,
            ""
          );

    return {
      Program(node) {
        if (fileName.match(/[A-Z]/)) {
          context.report({ node, messageId: "name" });
        }
      },
    };
  },
});
