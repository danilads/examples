module.exports = {
  // for skipping img/files
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest.config.js",
    "\\.(css|less)$": "<rootDir>/jest.config.js"
  },
  // for testing react dom
  testEnvironment: 'jsdom'
};

