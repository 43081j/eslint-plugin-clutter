# eslint-plugin-clutter

ESLint plugin for detecting micro-dependencies and redundant packages.

The JavaScript ecosystem is filled with _clutter_:

* Micro-packages - one-liners, often with native equivalents you should
use instead
* Obsolete packages - packages made obsolete by a better, newer package. NPM
should take care of this but not all authors remember to mark their 
packages as obsolete
* Obsolete packages (native replacements) - packages no longer needed because
the platform (e.g. browsers, node, etc.) support the functionality out
of the box

Micro-packages are a bad idea, a horrible idea. They are high risk,
often untrusted and usually completely unnecessary. Let's get rid of them.

## Install

```
$ npm i -D eslint eslint-plugin-clutter
```

## Usage

Add `clutter` to the plugins section of your `.eslintrc` file:

```json
{
  "plugins": ["clutter"]
}
```

Configure your rules like so:

```json
{
  "rules": {
    "clutter/no-unnecessary-dependency": "error"
  }
}
```

## Configuration

You may also extend the recommended configuration like so:

```json
{
  "extends": ["plugin:clutter/recommended"]
}
```

## Supported Rules

### Possible Errors (recommended)

| Rule                                                                    |                                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------- |
| [clutter/no-unnecessary-dependency](docs/rules/no-unnecessary-dependency.md) | Disallows unnecessary dependencies |
