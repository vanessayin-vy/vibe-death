class AcpForm extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <link rel="stylesheet" href="acp-form.css">
            <form class="acp-form">
                <div class="form-step active-step" data-step="1">
                    <h2>Step 1: Personal Information</h2>
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required>
                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required>
                    <button type="button" class="next-btn">Next</button>
                </div>

                <div class="form-step" data-step="2">
                    <h2>Step 2: Healthcare Preferences</h2>
                    <p>In the event you cannot make your own decisions, what are your wishes regarding life-sustaining treatment?</p>
                    <textarea name="healthcareWishes"></textarea>
                    <button type="button" class="prev-btn">Previous</button>
                    <button type="button" class="next-btn">Next</button>
                </div>

                <div class="form-step" data-step="3">
                    <h2>Step 3: Final Wishes</h2>
                     <p>Use this space to outline any final wishes, messages, or instructions.</p>
                    <textarea name="finalWishes"></textarea>
                    <button type="button" class="prev-btn">Previous</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        this.currentStep = 1;
        this.formSteps = shadow.querySelectorAll('.form-step');

        shadow.querySelector('.acp-form').addEventListener('click', (e) => {
            if (e.target.matches('.next-btn')) {
                this.changeStep(this.currentStep + 1);
            }
            if (e.target.matches('.prev-btn')) {
                this.changeStep(this.currentStep - 1);
            }
        });
    }

    changeStep(step) {
        if (step > 0 && step <= this.formSteps.length) {
            this.formSteps[this.currentStep - 1].classList.remove('active-step');
            this.formSteps[step - 1].classList.add('active-step');
            this.currentStep = step;
        }
    }
}

customElements.define('acp-form', AcpForm);
