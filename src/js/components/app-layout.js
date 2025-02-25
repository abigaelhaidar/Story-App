import { LitElement, html, css } from 'lit';
import './app-navbar';

export class AppLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding-top: 56px; /* Height of navbar */
    }
    .main-content {
      padding: 2rem 0;
    }
    .footer {
      background: #212529;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    .footer a {
      color: #0d6efd;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <app-navbar></app-navbar>

      <main class="main-content">
        <div class="container">
          <slot></slot>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
          <slot name="footer-content">Copy right 2028</slot>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-layout', AppLayout);
