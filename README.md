# @dependable/htm

[![Checks](https://github.com/sunesimonsen/dependable-htm/workflows/CI/badge.svg)](https://github.com/sunesimonsen/dependable-htm/actions?query=workflow%3ACI+branch%3Amain)
[![Bundle Size](https://img.badgesize.io/https:/unpkg.com/@dependable/htm/dist/dependable-htm.esm.min.js?label=gzip&compression=gzip)](https://unpkg.com/@dependable/htm/dist/dependable-htm.esm.min.js)

Create VDom for
[@dependable/view](https://github.com/sunesimonsen/dependable-view) from a
template literal using [htm](https://github.com/developit/htm).

See [htm](https://github.com/developit/htm) for details.

[API documentation](https://dependable-htm-api.surge.sh/modules/html.html)

## Install

```sh
# npm
npm install --save @dependable/htm

# yarn
yarn add @dependable/htm
```

## Usage

You can create VDom for a UI component using
[htm](https://github.com/developit/htm) and render it in the document body.

```js
import { render } from "@dependable/view";
import { html } from "@dependable/htm";

class ColorIt {
  render({ color, children }) {
    return html` <span style=${{ color }}>${children}</span> `;
  }
}

render(html`<${ColorIt} color="blueviolet">I'm colored<//>`);
```

## License

MIT License

Copyright (c) 2024 Sune Simonsen sune@we-knowhow.dk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
