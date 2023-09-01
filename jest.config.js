const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./"
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  // moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    react:
      "<rootDir>/node_modules/next/dist/compiled/react/cjs/react.development.js"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**"
  ],
  transformIgnorePatterns: [],
  moduleFileExtensions: ["ts", "tsx", "js", "mjs", "cjs", "jsx", "json", "node"]
};

module.exports = async (...args) => {
  const fn = createJestConfig(config);
  const res = await fn(...args);

  res.transformIgnorePatterns = res.transformIgnorePatterns.map((pattern) => {
    if (pattern === "/node_modules/") {
      return "/node_modules/next-dx-remote(?!/rsc)/";
    }
    return pattern;
  });

  return res;
};
