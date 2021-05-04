module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "max-len": ["error", { ignoreComments: true }],
    "no-param-reassign": ["error", { props: false }], // required for homework 4
  },
  plugins: ["jest"],
};
