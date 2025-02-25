import { LitElement, html, css } from 'lit';

export class AboutPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
    }
    .profile-section {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 1.5rem;
    }
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    .social-link {
      color: #0d6efd;
      text-decoration: none;
    }
    .social-link:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <div class="profile-section">
        <h1>About Us</h1>
        <h2>ABI Corp</h2>
        <p>
          We are passionate about creating meaningful stories and sharing them with the world. Our
          mission is to connect people through storytelling and create a platform where everyone's
          voice can be heard.
        </p>

        <h3 class="mt-4">Our Team</h3>
        <p>
          Founded in 2024, our team consists of dedicated developers and creative minds working
          together to bring you the best story-sharing experience.
        </p>

        <div class="social-links">
          <a href="https://github.com/yourusername" class="social-link" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" class="social-link" target="_blank"
            >LinkedIn</a
          >
          <a href="mailto:contact@abicorp.com" class="social-link">Email</a>
        </div>
      </div>
    `;
  }
}

customElements.define('about-page', AboutPage);
