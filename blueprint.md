# Blueprint: End-of-Life Planning & Support Platform

## Overview

This document outlines the development plan for "Eonia," a compassionate, user-centered website that helps individuals and families prepare for end-of-life with dignity, clarity, and peace of mind. The platform will balance practical functionality with emotional sensitivity, offering comprehensive tools for planning, legal preparation, and bereavement support, all while adhering to the highest standards of modern web development, security, and accessibility.

## Design & Features Outline

This section documents the project's style, design, and features as they are implemented.

### Visual Design
*   **Tone & Voice**: Warm, compassionate, clear, respectful, and empowering.
*   **Color Palette**:
    *   `--primary-color-soft-blue`: `#AEC6CF`
    *   `--secondary-color-warm-neutral`: `#F5F5DC`
    *   `--accent-color-gentle-green`: `#B7D1B8`
    *   `--text-color`: `#333333`
    *   `--background-color`: `#FFFFFF`
*   **Typography**:
    *   **Headings**: A clean, accessible serif font (e.g., 'Lora' or 'Georgia').
    *   **Body**: A highly readable sans-serif font (e.g., 'Lato' or 'Open Sans').
*   **Layout**: Clean, uncluttered, mobile-first, and responsive, with ample white space. A subtle noise texture will be applied to the main background for a premium, tactile feel.
*   **Iconography**: Modern, intuitive icons to enhance navigation and understanding.

### Core Features
1.  **Homepage & Navigation**: A welcoming entry point with clear navigation to all main sections.
2.  **End-of-Life & Personal Wishes Planning**: Interactive tools to document advance care plans, living wills, and personal preferences.
3.  **Legal & Administrative Document Support**: Wizards for creating wills, managing digital assets, and finding legal professionals.
4.  **Funeral & Memorial Arrangements**: Tools for planning personalized and meaningful life celebrations.
5.  **Practical Tasks at Time of Death**: Actionable checklists to manage administrative burdens during grief.
6.  **Bereavement & Emotional Support**: A directory of counselors, support groups, and grief education resources.
7.  **Insurance & Financial Settlement Assistance**: Guidance for navigating life insurance, CPF claims, and estate payouts.
8.  **Caregiver Tools**: Resources to support those caring for terminally ill loved ones.

### Technical Stack
*   **Frontend**: HTML5, CSS3, JavaScript (ES6+).
*   **Components**: Web Components for encapsulated, reusable UI elements.
*   **Styling**: Modern CSS including Container Queries, Cascade Layers, `:has()` selector, and CSS Variables.
*   **Security**: End-to-end encryption for all sensitive data, multi-factor authentication, and strict PDPA compliance.
*   **Accessibility**: WCAG 2.1 AA compliance.

## Current Plan: Interactive Feature Cards

To make the homepage more engaging, I will create a `feature-card` web component with a subtle hover effect. This will serve as the first step towards building a more interactive and component-based application.

### Steps:
1.  **Update `main.js`**:
    *   Define a new custom element class named `FeatureCard` that extends `HTMLElement`.
    *   Use the Shadow DOM to encapsulate the card's structure, including slots for the image, title, and description.
    *   The component will take attributes for the image source, title, and description.
2.  **Update `index.html`**:
    *   Replace the existing `div` elements for the feature cards with the new `<feature-card>` custom element.
    *   Pass the content for each card (image, title, description) via attributes.
3.  **Update `style.css`**:
    *   Modify the existing `.feature-card` styles to target the new `<feature-card>` element.
    *   Add a transition and a `transform` property to create a subtle "lift" effect when the user hovers over a feature card.
