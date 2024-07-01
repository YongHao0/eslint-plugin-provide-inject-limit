/**
 * @fileoverview 限制特定目录下 inject 使用
 * @author eslint-plugin-provide-inject-limit
 */
"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "限制特定目录下 inject 使用",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        enum: ['error', 'never']
      },
      // {
      //   type: 'object',
      // }
    ], // Add a schema if the rule has options
    messages: {
      test: "不能使用 inject"
    }, // Add messageId and message
  },

  create(context) {
    // const restrictedDir = context.options[0]?.directory;

    function checkNode(node) {
      // const filename = context.getFilename();

      if (node.callee.name === 'inject') {
        context.report({
          node,
          messageId: "test",
          // message: `Usage of '${node.callee.name}' is not allowed in ${restrictedDir}`
        });
      }

      // if (filename.startsWith(restrictedDir)) {
        
      // }
    }
   
    return {
      CallExpression: checkNode,
    };
  },
};
