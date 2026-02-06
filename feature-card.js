class FeatureCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: flex; /* Use flexbox for layout */
                    flex-direction: column; /* Stack items vertically */
                    background-color: var(--background-color, #FFFFFF);
                    border-radius: 12px;
                    box-shadow: var(--shadow, 0 5px 15px rgba(0,0,0,0.08));
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%; /* Make card fill its container */
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-hover, 0 8px 25px rgba(0,0,0,0.12));
                }
                .card-content {
                    padding: 1.5rem;
                    flex-grow: 1; /* Allow content to grow and fill space */
                }
                ::slotted(img) {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                 h3 {
                    font-family: var(--heading-font, 'Playfair Display', serif);
                    font-size: 1.4rem;
                    margin: 0 0 0.75rem 0;
                    color: var(--heading-color, #263238);
                }
                p {
                    margin: 0;
                    font-family: var(--body-font, 'Montserrat', sans-serif);
                    color: var(--text-color, #333);
                    font-size: 0.95rem;
                }
            </style>
            <slot name="image"></slot>
            <div class="card-content">
                <slot name="title"></slot>
                <slot name="description"></slot>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('feature-card', FeatureCard);
