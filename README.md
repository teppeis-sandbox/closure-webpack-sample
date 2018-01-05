closure-webpack-sample
====

Sample project for [closure-webpack-plugin](https://github.com/webpack-contrib/closure-webpack-plugin)

![Node.js Version Support][node-version]

## How to build

```console
$ npm install
$ npm run build
$ npm start
listening at http://[::]:1337
```

### `npm run build:deps`

Generates `dist/deps.js` with `depswriter.py`.

### `npm run build:webpack`

Generates `dist/bundle.aggressive_bundle.advanced.js`.
If you change mode from `AGGRESSIVE_BUNDLE` to `NONE`, it generates `dist/bundle.none.advanced.js`.

Note: In `NONE` mode, optimization is not performed. The `advanced` in the filename is meaningless. 

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[node-version]: https://img.shields.io/badge/Node.js%20support-v8-brightgreen.svg
