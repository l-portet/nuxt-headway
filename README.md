# Nuxt Headway

[![npm version][npm-version-src]][npm-version-href]

> Integrate [Headway](https://headwayapp.co) into your Nuxt app ✌️

[Live demo](https://nuxt-headway.netlify.app)

## Setup

1. Install `nuxt-headway`

```bash
npm i nuxt-headway # or yarn add nuxt-headway
```

2. Add it to your `buildModules` and set your Headway account ID

```js
// nuxt.config.js
{
  buildModules: ['nuxt-headway'],

  headway: {
    account: '<your-account-id>'
  }
}
```

3. Add the directive `v-headway` to the node that will contain the widget

```html
<!-- components/your-component.vue -->
<template>
  <div v-headway></div>
</template>
```

## Configure

Set all the options you would set in `HW_config` into `headway` in you `nuxt.config.js`.

See the configuration [official docs](https://docs.headwayapp.co/widget#options).

> You don't need to change `selector` and `trigger`. Use the directives instead.

## Usage

Anywhere in your app components, you can access `this.$headway`.

The original `window.Headway` object is accessible in `this.$headway.sync`.

### Async safe

As the Headway script may load after your app renders, you need to be careful when interacting with the front-end API.

There are 2 ways of safely using it:

**Promise API**

`$headway.onReady.then(() => {})`

```js
// in your component scope
this.$headway.onReady.then(() => {
  this.$headway.sync.toggle();
});
```

**Push API**

`$headway.push('method', 'arg1', 'arg2', ...)`

```js
// in your component scope
this.$headway.push('toggle');
```

### Directives

**v-headway**

The node that will contain the widget. Related to `selector` in the config.

```html
<template>
  <div v-headway>
    <!-- The widget will be injected here -->
  </div>
</template>
```

**v-headway-target**

The node(s) that will trigger the widget. Related to `trigger` in the config.

```html
<template>
  <!-- Clicking on this will open the widget -->
  <div v-headway-target></div>
</template>
```

## Bugs

Found a bug? You can [open an issue](https://github.com/l-portet/nuxt-headway/issues) or feel free to [submit a PR](https://github.com/l-portet/nuxt-headway/pulls).

## Disclaimer

This is a community package. I'm not affiliated with Headway or Nuxt.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-headway/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-headway
