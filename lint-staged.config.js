module.exports = {
  "**/*.ts?(x)": () => ["yarn type-check", "yarn ts-prune:all", "yarn lint"],
};
