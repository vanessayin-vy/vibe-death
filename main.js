class FeatureCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block; /* Important for custom elements */
                    background-color: var(--background-color, #FFFFFF);
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
                }
                .card-content {
                    padding: 2rem;
                }
                ::slotted(img) {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px 8px 0 0; /* Top corners rounded */
                }
                ::slotted(h3) {
                    font-family: var(--heading-font, 'Lora', serif);
                    font-size: 1.5rem;
                    margin: 1.5rem 0 1rem 0;
                }
                 ::slotted(p) {
                    font-family: var(--body-font, 'Lato', sans-serif);
                }
            </style>
            <slot name="image"></slot>
            <div class="card-content">
                <slot name="title"></slot>
                <slot name="description"></slot>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('feature-card', FeatureCard);
