/**
 * animations.js - Animations et effets visuels du site
 * - Apparition des éléments au scroll
 * - Animations au survol
 * - Transitions de pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animation d'apparition au défilement
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkInView() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Si l'élément est dans la fenêtre visible
            if (elementPosition.top < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    }
    
    // Vérifier les éléments visibles au chargement et au défilement
    window.addEventListener('load', checkInView);
    window.addEventListener('scroll', checkInView);
    
    // Animation de survol pour les cartes de soins
    const soinCards = document.querySelectorAll('.soin-card');
    
    soinCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.soin-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.soin-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Transition douce lors du retour depuis les pages détaillées
    const backButtons = document.querySelectorAll('.back-button');
    
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('onclick').match(/'#([^']+)'/)[1];
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Masquer la page détaillée en douceur
                const detailsPage = this.closest('section');
                detailsPage.style.opacity = '0';
                detailsPage.style.transition = 'opacity 0.3s ease';
                
                // Rediriger après la transition
                setTimeout(() => {
                    window.location.hash = targetId;
                    targetSection.style.opacity = '0';
                    targetSection.style.display = 'block';
                    
                    // Afficher la section principale en douceur
                    setTimeout(() => {
                        targetSection.style.opacity = '1';
                        targetSection.style.transition = 'opacity 0.3s ease';
                    }, 50);
                }, 300);
            }
        });
    });
    
    // Animation des séparateurs dans les titres de section
    const separators = document.querySelectorAll('.separator');
    
    separators.forEach(separator => {
        const parent = separator.parentElement;
        
        if (parent) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        separator.style.width = '0';
                        separator.style.transition = 'width 0.8s ease';
                        
                        setTimeout(() => {
                            separator.style.width = '80px';
                        }, 300);
                        
                        observer.unobserve(parent);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(parent);
        }
    });
});
