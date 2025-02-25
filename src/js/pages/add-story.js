import { LitElement, html } from 'lit';
import { addStory } from '../data/story-data';

export class AddStoryPage extends LitElement {
  render() {
    return html`
      <div class="container py-4">
        <h2 class="text-center mb-4">Add New Story</h2>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form @submit=${this._handleSubmit} class="needs-validation" novalidate>
                  <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" required></textarea>
                    <div class="invalid-feedback">Please provide a description</div>
                  </div>

                  <div class="mb-3">
                    <label for="photo" class="form-label">Photo</label>
                    <input
                      type="file"
                      class="form-control"
                      id="photo"
                      accept="image/*"
                      required
                      @change=${this._handlePhotoChange}
                    />
                    <div class="invalid-feedback">Please choose a photo</div>
                  </div>

                  ${this.photoPreview
                    ? html`
                        <div class="mb-3">
                          <img
                            src="${this.photoPreview}"
                            class="img-fluid preview-image"
                            alt="Preview"
                          />
                        </div>
                      `
                    : ''}

                  <button type="submit" class="btn btn-primary w-100">Submit Story</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.photoPreview = null;
  }

  _handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
        this.requestUpdate();
      };
      reader.readAsDataURL(file);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.classList.add('was-validated');
      return;
    }

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
}

customElements.define('add-story', AddStoryPage);
export default AddStoryPage;
