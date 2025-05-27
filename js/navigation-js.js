/**
 * navigation.js - Gestion de la navigation du site
 * - Menu mobile
 * - Liens actifs
 * - Comportement de l'en-tête
 */

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Fermer le menu mobile quand on clique sur un lien
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // En-tête dynamique qui se cache lors du défilement
    const header = document.getElementById('site-header');
    let lastScrollTop = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            
            // Calcul de la moitié de la hauteur visible
            const halfViewport = windowHeight / 2;
            
            // Si le défilement dépasse la moitié de l'écran, masquer l'en-tête
            if (scrollY > halfViewport) {
                header.classList.add('hidden');
            } else {
                // Sinon, l'afficher
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollY;
        });
    }
    
    // Gestion des liens actifs dans la navigation
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Vérifier la section active au chargement et lors du défilement
    window.addEventListener('load', setActiveLink);
    window.addEventListener('scroll', setActiveLink);
    
    // Défilement fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignorer les liens avec href="#" ou qui ouvrent des pages détaillées
            if (targetId === '#' || targetId.includes('details') || targetId.includes('planning') || targetId.includes('booking')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajustement pour l'en-tête fixe
                    behavior: 'smooth'
                });
            }
        });
    });
});
