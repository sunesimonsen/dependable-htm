import expect from "unexpected";
import { render } from "@dependable/view";
import { html } from "../src/html.js";

class ColorIt {
  render({ color, children }) {
    return html`<span style=${{ color }}>${children}</span>`;
  }
}

describe("html", () => {
  it("allows rendering VDom using template literals", () => {
    const target = document.createElement("div");
    render(html`<${ColorIt} color="blueviolet">I'm colored<//>`, target);

    expect(
      target.innerHTML,
      "to equal",
      `<span style="color: blueviolet;">I'm colored</span>`,
    );
  });
});
