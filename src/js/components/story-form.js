import { LitElement, html, css } from 'lit';
import { addStory } from '../data/story-data';

export class StoryForm extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    textarea,
    input[type='file'] {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .preview-image {
      max-width: 100%;
      margin-top: 1rem;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0b5ed7;
    }
  `;

  static properties = {
    photoPreview: { type: String },
  };

  constructor() {
    super();
    this.photoPreview = null;
  }

  render() {
    return html`
      <div class="form-container">
        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" rows="3" required @input=${this._validateForm}></textarea>
          </div>

          <div class="form-group">
            <label for="photo">Photo</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              required
              @change=${this._handlePhotoChange}
            />
          </div>

          ${this.photoPreview
            ? html` <img src="${this.photoPreview}" class="preview-image" alt="Preview" /> `
            : ''}

          <button type="submit">Submit Story</button>
        </form>
      </div>
    `;
  }

  _handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    const description = this.renderRoot.querySelector('#description').value;
    const newStory = {
      id: `story-${Date.now()}`,
      name: 'User',
      description,
      photoUrl: this.photoPreview,
      createdAt: new Date().toISOString(),
    };

    addStory(newStory);
    window.location.href = '/';
  }

  _validateForm(e) {
    const input = e.target;
    input.setCustomValidity('');
    input.checkValidity();
  }
}

customElements.define('story-form', StoryForm);
