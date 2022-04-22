import nextJest from "next/jest";
import type { Config } from "@jest/types";

// Add any custom config to be passed to Jest
const customJestConfig: Config.InitialOptions = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^(components|constants|hooks|libs|modules|types)/(.*)$": "<rootDir>/$1/$2",
    // Test utilities
    "^test-utils/(.*)$": "<rootDir>/__tests__/__utils__/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    // NOTE:
    // This overrides next/jest's jest-transformer in favor of babel with next's babel presets.
    // In its current state, the jest.mock doesn't appear to work with jest-transformer.
    // Since next/jest appears to be the future of configuring and running jest in next.js apps,
    // this keeps the majority of the config, but uses babel while we wait on a more stable transformer -JR
    // This is specifically overriding this transform:
    // https://github.com/vercel/next.js/blob/v12.0.7/packages/next/build/jest/jest.ts#L106-L115
    // More info on jest + babel + next:
    // https://github.com/vercel/next.js/blob/v12.0.7/examples/with-jest-babel/jest.config.js#L29
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  testPathIgnorePatterns: ["/__utils__/"],
};

async function createJestConfig() {
  return nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
  })(customJestConfig);
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig;
