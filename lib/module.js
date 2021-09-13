import path from 'path';

function sanitizeNuxtConfig(config) {
  config.head = config.head || {};
  config.head.__dangerouslyDisableSanitizers =
    config.head.__dangerouslyDisableSanitizers || [];
  config.head.script = config.head.script || [];
}

module.exports = function headwayModule(moduleOptions) {
  const config = this.options;
  const defaults = {
    // To avoid empty selector errors if Headway loads before the app
    selector: '.dumb-selector',
    trigger: '.dumb-selector'
  };
  const options = {
    ...defaults,
    ...moduleOptions,
    ...config.headway
  };

  this.nuxt.hook('build:before', () => {
    const headwayConfigScript = `window.HW_config = ${JSON.stringify(
      options
    )};`;

    sanitizeNuxtConfig(config);
    if (!config.head.__dangerouslyDisableSanitizers.includes('script')) {
      config.head.__dangerouslyDisableSanitizers.push('script');
    }
    config.head.script.push({
      innerHTML: headwayConfigScript
    });
    config.head.script.push({
      src: 'https://cdn.headwayapp.co/widget.js',
      async: true
    });
  });

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    fileName: 'nuxt-headway.js',
    ssr: false
  });
}

module.exports.meta = require('../package.json');
