module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], // Adjust this path if your tests are not inside src
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Optional: Alias for src
  },
};
