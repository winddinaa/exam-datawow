import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // รองรับ Next.js พร้อม Core Web Vitals
    "plugin:react/recommended", // แนะนำการใช้งาน React
    "plugin:react-hooks/recommended" // กฎการใช้งาน React Hooks
  ),
  {
    rules: {
      eqeqeq: ["error", "always"],
      "no-debugger": "warn",
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
