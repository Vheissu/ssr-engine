import { replaceString } from './utils';
/**
 * Inserts the rendered app immediately after the opening body tag
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html, transformerCtx, options) {
    return replaceString(html, /<body[^>]*>/im, replaceString(transformerCtx.app, '</body>', ''));
}
;
