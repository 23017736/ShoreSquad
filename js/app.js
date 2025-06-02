// ShoreSquad Main JavaScript
'use strict';

// Configuration
const CONFIG = {
    weatherApiKey: 'YOUR_API_KEY', // To be moved to environment variables
    mapZoomLevel: 13,
    defaultLocation: { lat: 34.0522, lng: -118.2437 } // Example: Los Angeles
};

// Main app initialization
class ShoreSquad {
    constructor() {
        this.initializeApp();
    }

    async initializeApp() {
        try {
            await this.setupMap();
            await this.setupWeather();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing app:', error);
            this.handleError(error);
        }
    }

    async setupMap() {
        // Map initialization code will go here
        console.log('Map setup pending...');
    }

    async setupWeather() {
        // Weather setup code will go here
        console.log('Weather setup pending...');
    }

    setupEventListeners() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    handleError(error) {
        // Basic error handling - to be expanded
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.setAttribute('role', 'alert');
        errorMessage.textContent = 'Something went wrong. Please try again later.';
        document.body.appendChild(errorMessage);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.shoreSquad = new ShoreSquad();
});
