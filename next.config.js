const dotenv = require('dotenv').config();
const nextComposePlugins = require('next-compose-plugins');
const headers = require('./config/headers');
const plugins = require('./config/plugins');
const { i18n } = require('./next-i18next.config.js');

/**
 * https://github.com/cyrilwanner/next-compose-plugins/issues/59
 */
const { withPlugins } = nextComposePlugins.extend(() => ({}));

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = withPlugins(plugins, {
  i18n,
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },
  experimental: {
    // urlImports: true,
    // concurrentFeatures: true,
    // serverComponents: true,
  },
  poweredByHeader: false,
  reactStrictMode: false,
  compress: true,
  headers,
  images: {
    domains: ['images.ctfassets.net', 'images.eu.ctfassets.net'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
