import {noUnnecessaryDependency} from '../../rules/no-unnecessary-dependency';
import {RuleTester} from 'eslint';

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015
  }
});

ruleTester.run('no-unnecessary-dependency', noUnnecessaryDependency, {
  valid: [
    {
      code: `import * as fs from 'fs';`,
    },
    {
      code: `import {readFileSync} from 'fs';`,
    },
    {
      code: `const fs = require('fs');`,
    }
  ],

  invalid: [
    {
      code: `import qs from 'qs';`,
      errors: [
        {
          messageId: 'unnecessary',
          line: 1,
          column: 1
        }
      ]
    },
    {
      code: `import {qs} from 'qs';`,
      errors: [
        {
          messageId: 'unnecessary',
          line: 1,
          column: 1
        }
      ]
    },
    {
      code: `const qs = require('qs');`,
      errors: [
        {
          messageId: 'unnecessary',
          line: 1,
          column: 12
        }
      ]
    }
  ]
});
