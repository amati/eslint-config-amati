# eslint-config-amati

personal eslint / prettier setting

## Features

- Lint javascript based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- Formatting error with [prettier-config-amati](https://www.npmjs.com/package/prettier-config-amati)

## Install

Check a list of packages to be installed.

```shell
$ npm info "eslint-config-amati@latest" peerDependencies
```

If using npm 5+, you can use this shortcut

```shell
$ npx install-peerdeps --dev eslint-config-amati
```

## Usage for Eslint

### edit `.eslintrc` for react project

```js
module.exports = {
  extends: ['amati', 'amati/react'],
  // optional override
};
```

## Usage for Prettier

### edit `package.json`

```json
{
  // ...
  "prettier": "prettier-config-amati"
}
```

### edit `prettier.config.js` or `.prettierrc.js`:

```js
module.exports = {
  ...require('prettier-config-amati'),
  // optional overrides
};
```
