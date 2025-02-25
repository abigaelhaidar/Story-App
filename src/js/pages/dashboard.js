import { LitElement, html, css } from 'lit';
import { getStories } from '../data/story-data';

export class DashboardPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .story-grid {
      display: grid;
      gap: 1rem;
      padding: 1rem;
    }
    @media (min-width: 768px) {
      .story-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .story-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

  static properties = {
    stories: { type: Array },
  };

  constructor() {
    super();
    this.stories = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadStories();
  }

  _loadStories() {
    const storiesData = getStories();
    if (!storiesData.error) {
      this.stories = storiesData.listStory;
    }
  }

  render() {
    return html`
      <div class="story-grid">
        ${this.stories.map((story) => html` <story-card .story=${story}></story-card> `)}
      </div>
    `;
  }
}

customElements.define('dashboard-page', DashboardPage);
export default DashboardPage;
