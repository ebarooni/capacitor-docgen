// @ts-check

import config from "@ebarooni/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...config.javascript,
  ...config.typescript,
  config.json,
  {
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  },
  {
    ignores: ["dist", "src/test/**"],
  },
);
