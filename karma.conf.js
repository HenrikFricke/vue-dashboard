const webpackConfig = require('./build/webpack.test.conf.js');

const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision;
const Downloader = require('puppeteer/utils/ChromiumDownloader');
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);

process.env.CHROME_BIN = revisionInfo.executablePath;

const testSuiteFile = './test-suite.js';

// Karma configuration
module.exports = function karmaConfig(config) {
  config.set({
    browsers: ['ChromeHeadless'],

    files: [testSuiteFile],

    frameworks: ['jasmine'],

    preprocessors: {
      [testSuiteFile]: ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },

    singleRun: true,
  });
};
