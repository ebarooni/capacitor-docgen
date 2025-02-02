import config from "@ebarooni/eslint-config";

export default [
  ...config.javascript,
  config.markdown,
  config.json,
  {
    ignores: ["**/dist"],
  },
];
