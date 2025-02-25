import { LitElement, html, css } from 'lit';

export class StoryCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 1rem;
    }
    .title {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
    }
    .description {
      margin: 0 0 1rem;
      color: #666;
    }
    .date {
      font-size: 0.875rem;
      color: #999;
    }
  `;

  static properties = {
    story: { type: Object },
  };

  render() {
    const date = new Date(this.story.createdAt);
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);

    return html`
      <div class="card">
        <img src="${this.story.photoUrl}" class="card-image" alt="${this.story.name}'s story" />
        <div class="card-content">
          <h3 class="title">${this.story.name}</h3>
          <p class="description">${this.story.description}</p>
          <span class="date">${formattedDate}</span>
        </div>
      </div>
    `;
  }
}

customElements.define('story-card', StoryCard);
