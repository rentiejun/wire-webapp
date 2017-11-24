/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: 'dist',
    browsers: ['ChromeHeadless'],
    colors: true,
    concurrency: Infinity,
    coverageReporter: {
      check: {
        each: {
          branches: 0,
          functions: 0,
          lines: 0,
          statements: 0,
        },
        global: {
          branches: 25,
          functions: 20,
          lines: 40,
          statements: 40,
        },
      },
      reporters: [
        {
          dir: '../docs/coverage',
          type: 'html',
        },
        {
          dir: '../docs/coverage',
          file: 'coverage-summary.txt',
          type: 'text-summary',
        },
      ],
    },
    exclude: [],
    files: [],
    frameworks: ['jasmine'],
    logLevel: config.LOG_ERROR,
    port: 9876,
    preprocessors: {
      '../dist/script/**/*.js': ['coverage'],
    },
    proxies: {},
    reporters: ['coverage', 'progress'],
    singleRun: true,
  });

  if (process.env.TRAVIS) {
    config.set({
      port: 9877,
    });
  }
};
