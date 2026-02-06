class FeatureCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .feature-card {
          background-color: var(--surface-color, #fff);
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-card ::slotted(img) {
            width: 100%;
            height: auto;
            display: block;
        }
        .feature-card-content {
            padding: 1.5rem;
        }
        .feature-card ::slotted(h3) {
            margin-top: 0;
            font-family: var(--heading-font, 'Lora', serif);
            font-size: 1.5rem;
            color: var(--primary-color, #333);
        }
        .feature-card ::slotted(p) {
            font-family: var(--body-font, 'Lato', sans-serif);
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-color, #555);
        }
        .feature-card ::slotted(a) {
            display: inline-block;
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            background-color: var(--accent-color, #AEC6CF);
            color: var(--surface-color, #fff);
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }
        .feature-card ::slotted(a:hover) {
            background-color: var(--primary-color, #333);
        }
      </style>
      <div class="feature-card">
        <slot name="image"></slot>
        <div class="feature-card-content">
          <slot name="title"></slot>
          <slot name="description"></slot>
          <slot name="button"></slot>
        </div>
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('feature-card', FeatureCard);
