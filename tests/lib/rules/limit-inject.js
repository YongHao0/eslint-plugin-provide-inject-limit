/**
 * @fileoverview 限制特定目录下 inject 使用
 * @author eslint-plugin-provide-inject-limit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/limit-inject"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("limit-inject", rule, {
  valid: [
    
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "inject(\"test\")",
      errors: [{ messageId: "Fill me in.", type: "Me too" }],
      options: ['error'],
    },
  ],
});
