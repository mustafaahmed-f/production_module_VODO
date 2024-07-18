module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Set the test environment to jsdom
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^vodo-react-components$":
      "<rootDir>/node_modules/vodo-react-components/dist/index.cjs",
  },
  transformIgnorePatterns: ["/node_modules/(?!vodo-react-components/)"],
};
