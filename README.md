# Reflex

## Getting Started

```sh
gatsby new site reflexjs/gatsby-starter-base
```

## Learn

Visit [https://reflexjs.org/learn](https://reflexjs.org/learn) to get started with Gatsby and Reflex.

## Blocks

Browse the blocks library at [https://reflexjs.org/library/blocks](https://reflexjs.org/library/blocks).

## License

Licensed under the [MIT license](https://github.com/reflexjs/reflex/blob/master/LICENSE).

### Node.js security baseline

Use `nvm install` and `nvm use` to select the patched runtime in `.nvmrc`.
CVE-2026-111497 affects the native Brotli decoder; updating npm dependencies
alone does not patch Node.js. The security version requirement is ^22.23.4 || ^24.22.1 || ^26.12.1 (stable releases only).
See [the Node.js security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases).
