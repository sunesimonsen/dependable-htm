import htm from "htm";
import { h } from "@dependable/view";

/**
 * Create VDom for <a href="https://github.com/sunesimonsen/dependable-view"
 * target="_blank">@dependable/view</a> from a template literal using <a
 * href="https://github.com/developit/htm" target="_blank">htm</a>.
 *
 * See <a href="https://github.com/developit/htm" target="_blank">htm</a> for
 * details.
 *
 * @example
 *
 * ```js
 * import { render } from "@dependable/view"
 * import { html } from "@dependable/htm"
 *
 * class ColorIt {
 *   render({ color, children }) {
 *     return html`
 *       <span style=${{color}}>${children}</span>
 *     `
 *   }
 * }
 *
 * render(html`<${ColorIt} color="blueviolet">I'm colored<//>`)
 * ```
 */
export const html = htm.bind(h);
