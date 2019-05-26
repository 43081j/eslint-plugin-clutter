import {Rule} from 'eslint';
import * as ESTree from 'estree';
import {scanPackages} from './scanner';

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Disallows use of unnecessary packages',
      url:
        'https://github.com/43081j/notneeded/README.md'
    },
    messages: {
      unnecessary:
        'Package is unnecessary and should not be depended on: {{err}}'
    }
  },

  create(context): Rule.RuleListener {
    return {
      'ImportDeclaration': async (node: ESTree.Node): Promise<void> => {
        if (node.type === 'ImportDeclaration' &&
          node.source.type === 'Literal' &&
          typeof node.source.value === 'string') {
          const name = node.source.value;
          const result = await scanPackages([name]);
          const keys = Object.keys(result);

          if (keys.length > 0) {
            context.report({
              node: node,
              messageId: 'unnecessary',
              data: {err: result[name]}
            });
          }
        }
      }
    };
  }
};

export default rule;
