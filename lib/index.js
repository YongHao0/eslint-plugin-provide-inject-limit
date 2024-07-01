/**
 * @fileoverview 限制特定目录下的 provide、inject
 * @author eslint-plugin-provide-inject-limit
 */
"use strict";

const requireIndex = require("requireindex");

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



