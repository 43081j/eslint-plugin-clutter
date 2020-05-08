import {Rule} from 'eslint';
import * as ESTree from 'estree';
import {packages} from '../messages';

export const noUnnecessaryDependency: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'Disallows use of unnecessary dependencies.',
      url:
        'https://github.com/43081j/notneeded/README.md'
    },
    messages: {
      unnecessary:
        'Package "{{package}}" is unnecessary and should not be' +
          ' depended on: {{message}}'
    }
  },

  create(context): Rule.RuleListener {
    return {
      'ImportDeclaration': async (node: ESTree.Node): Promise<void> => {
        if (node.type === 'ImportDeclaration' &&
          node.source.type === 'Literal' &&
          typeof node.source.value === 'string') {
          const name = node.source.value;
          const msg = packages[name.toLowerCase()];
          if (msg) {
            context.report({
              node: node,
              messageId: 'unnecessary',
              data: {package: name, message: msg}
            });
          }
        }
      }
    };
  }
};