/** @type {import('ts-jest').JestConfigWithTsJest} */
/* module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
}; */

import { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  rootDir: "src",
  testMatch: [
    "<rootDir>/**/*.spec.ts",
    "<rootDir>/**/**/*.spec.ts",
    "<rootDir>/**/**/**/*.spec.ts",
  ],
  collectCoverage: true,
  coverageDirectory: "../test/reports",
  coverageReporters: ["clover", "lcov", "html", "json"],
  collectCoverageFrom: [
    "<rootDir>/**/*.ts",
    "<rootDir>/**/**/*.ts",
    "<rootDir>/**/**/**/*.ts",
  ],
};

export default config;
