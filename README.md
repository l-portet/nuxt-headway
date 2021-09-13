# nuxt-headway

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Integrate Headway into your Nuxt app ✌️

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-headway` dependency to your project

```bash
yarn add nuxt-headway # or npm install nuxt-headway
```

2. Add `nuxt-headway` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-headway',

    // With options
    ['nuxt-headway', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Lucas Portet <lucasportet@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-headway/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-headway

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-headway.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-headway

[github-actions-ci-src]: https://github.com/l-portet/nuxt-headway/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/l-portet/nuxt-headway/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/l-portet/nuxt-headway.svg
[codecov-href]: https://codecov.io/gh/l-portet/nuxt-headway

[license-src]: https://img.shields.io/npm/l/nuxt-headway.svg
[license-href]: https://npmjs.com/package/nuxt-headway
