"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
/**
 * Inserts the rendered app immediately after the opening body tag
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
function default_1(html, transformerCtx, options) {
    return utils_1.replaceString(html, /<body[^>]*>/im, utils_1.replaceString(transformerCtx.app, '</body>', ''));
}
exports.default = default_1;
;
