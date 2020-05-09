/* eslint-disable max-len */

export const packages: Record<string, string> = {
  'q':
    'Use native promise support instead, as it is now widely supported in all modern platforms.',
  'extend':
    'Use Object.assign or the spread operator (i.e. `{...foo, ...bar}`) instead to merge and extend objects.',
  'qs':
    "Use URLSearchParams instead to parse query strings (e.g. `new URLSearchParams('x=5')`) and to build them.",
  'query-string':
    "Use URLSearchParams instead to parse query strings (e.g. `new URLSearchParams('x=5')`) and to build them.",
  'querystring':
    "Use URLSearchParams instead to parse query strings (e.g. `new URLSearchParams('x=5')`) and to build them.",
  'querystringify':
    "Use URLSearchParams instead to parse query strings (e.g. `new URLSearchParams('x=5')`) and to build them.",
  'xtend':
    'Use Object.assign or the spread operator (i.e. `{...foo, ...bar}`) instead to merge and extend objects.',
  'tslint':
    'Use ESLint instead. TSLint has long been obsolete as ESLint now fully supports TypeScript through the @typescript-eslint packages.',
  'bower': 'Use NPM for web packages with help from a bundler such as Rollup.',
  'rx':
    'Use rxjs instead as newer RxJS versions will be published there rather than under "rx".',
  'jshint':
    'Use ESLint instead. It provides the same features with support for modern syntax and a larger ecosystem of plugins.',
  'extend-shallow':
    'Use Object.assign or the spread operator (i.e. `{...foo, ...bar}`) instead to merge and extend objects.',
  'left-pad':
    'Use `String.prototype.padStart` instead, e.g. `"foo".padStart(6)`.',
  'defaults':
    'Use Object.assign or the spread operator (i.e. `{...foo, ...bar}`) instead to merge and extend objects.',
  'is-regexp': 'Use `instanceof` instead: `foo instanceof RegExp`.',
  'delay':
    'Use a Promise with a setTimeout rather than introducing a micro-dependency: `new Promise((r) => setTimeout(r, 1000))`',
  'has-own-prop':
    'Use `Object.prototype.hasOwnProperty.call(obj, prop)` rather than introducing a micro-dependency.',
  'is-travis':
    "Use `'TRAVIS' in process.env` rather than introducing a micro-dependency.",
  'is-npm':
    "Use `process.env.npm_config_user_agent?.startsWith('npm')` rather than introducing a micro-dependency.",
  'invert-kv':
    'Use your own function rather than a micro-dependency, e.g. `Object.fromEntries(Object.entries(obj).map(e => e.reverse()))`',
  'clone-regexp':
    'Use the RegExp constructor instead, e.g.: `new RegExp(otherRegExp)`.',
  'split-lines':
    'Use `String.prototype.split` rather than introducing a micro-dependency.',
  'lodash.assign':
    'Use Object.assign or the spread operator (i.e. `{...foo, ...bar}`) instead to merge and extend objects.',
  'lodash.defaults':
    'Use Object.assign or the spread operator (i.e. `{...foo, ...bar}`) instead to merge and extend objects.',
  'lodash.tolower': 'Use `String.prototype.toLowerCase` instead.',
  'lodash.toupper': 'Use `String.prototype.toUpperCase` instead.',
  'lodash.isnan':
    'Use `Number.isNaN` to check for NaN, and `isNaN` to check if a value is not a number.',
  'lodash.endswith': 'Use `String.prototype.endsWith` instead.',
  'lodash.startswith': 'Use `String.prototype.startsWith` instead.',
  'lodash.padend': 'Use `String.prototype.padEnd` instead.',
  'lodash.padstart': 'Use `String.prototype.padStart` instead.',
  'lodash.findindex': 'Use `Array.prototype.findIndex` instead.',
  'lodash.find': 'Use `Array.prototype.find` instead.',
  'lodash.keys': 'Use `Object.keys` instead.',
  'define-properties': 'Use `Object.defineProperties` instead.',
  'is-buffer':
    'Use `Buffer.isBuffer` instead, or `obj.constructor?.isBuffer(obj)` to avoid bundling Buffer.',
  'is-windows': 'Use `process.platform === \'win32\'` instead.',
  'is-dotfile': 'Use `startsWith(\'.\')` on the base name of the file or folder instead.',
  'is-whitespace': 'Use `str.trim() === \'\'` or a RegExp instead.',
  'array-first': 'Use `Array.prototype.slice` instead.',
  'array-last': 'Use `Array.prototype.slice` instead.',
  'array-rest': 'Use `Array.prototype.slice` instead.',
  'array-initial': 'Use `Array.prototype.slice` instead.',
  'filter-array': 'Use `Array.prototype.filter` instead.',
  'array-every': 'Use `Array.prototype.every` instead.',
  'index-of': 'Use `Array.prototype.indexOf` instead.',
  'last-index-of': 'Use `Array.prototype.lastIndexOf` instead.',
  'array-pull': 'Use `Array.prototype.splice` instead.',
  'pad-left': 'Use `String.prototype.padStart` instead, e.g. `"foo".padStart(6)`.',
  'is-primitive': 'Type-check the value manually, i.e. `typeof val !== \'object\' && typeof val !== \'function\'`',
  'is-odd': 'Use `(n % 2) === 1` instead.',
  'is-even': 'Use `(n % 2) === 0` instead.',
  'is-string': 'Use `typeof foo === \'string\'` instead.'
};
