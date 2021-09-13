import Vue from 'vue';

const ATTR_TARGET_PREFIX = 'headway-target-';
const ATTR_TRIGGER_PREFIX = 'headway-trigger-';

const getRandomID = () =>
  Math.random()
    .toString()
    .slice(2);

Vue.directive('headway', {
  inserted: el => {
    const randomID = getRandomID();
    const attribute = ATTR_TARGET_PREFIX + randomID;

    el.setAttribute(attribute, '');

    window.HW_config.selector = `[${attribute}]`;

    if (window.Headway?.init) {
      window.Headway.init(window.HW_config);
    }
  }
});

Vue.directive('headway-trigger', {
  inserted: el => {
    const randomID = getRandomID();
    const attribute = ATTR_TRIGGER_PREFIX + randomID;

    el.setAttribute(attribute, '');
    const trigger = window.HW_config.trigger || '';
    const selectors = trigger.split(',').filter(selector => selector.trim());
    selectors.push(`[${attribute}]`);
    window.HW_config.trigger = selectors.join(',');

    if (window.Headway?.init) {
      window.Headway.init(window.HW_config);
    }
  }
});

export default function(context, inject) {
  let resolveOnReady;
  const exec = ([fn, ...args]) => {
    window.Headway[fn](...args);
  };
  const instance = {
    push: ([...args]) => {
      if (window.Headway) {
        exec(args);
      } else {
        instance.queue.push(args);
      }
    },
    onReady: new Promise(resolve => (resolveOnReady = resolve)),
    queue: [],
    ready: false
  };
  const injectHeadway = () => {
    instance.sync = window.Headway;
    instance.ready = true;
    resolveOnReady(instance);
  };

  inject('headway', instance);

  if (window.Headway) {
    injectHeadway();
    return;
  }

  const interval = setInterval(() => {
    if (!window.Headway) {
      return;
    }
    clearInterval(interval);

    const opNb = instance.queue.length;
    for (let i = 0; i < opNb; i++) {
      exec(instance.queue.shift());
    }

    injectHeadway();
  }, 100);
}
