const packageJson = require("./package.json");

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  rootDir: "./",
  preset: "ts-jest",
  globalSetup: "./jest.setup.js",
  globalTeardown: "./jest.teardown.js",
  moduleNameMapper: {
    "firebase-admin/auth": "<rootDir>/node_modules/firebase-admin/lib/auth",
  },
};
