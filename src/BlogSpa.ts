import { LitElement, html, css, property } from 'lit-element';

export class BlogSpa extends LitElement {
  @property({ type: String }) page = 'main';

  @property({ type: String }) title = '';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    main {
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <main>
        <h1>Blog SPA</h1>
        <p>Hello universe!</p>
      </main>
    `;
  }
}
