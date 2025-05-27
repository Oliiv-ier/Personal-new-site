/**
 * booking.js - Gestion des fonctionnalités de prise de rendez-vous
 * - Calendrier de l'Ostéo'Van
 * - Liens vers Doctolib
 * - Formulaire de contact
 */

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des onglets du calendrier
    function setupCalendarTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const monthName = this.textContent.toLowerCase().split(' ')[0];
                openMonth(monthName);
            });
        });
    }
    
    // Fonction pour ouvrir un mois spécifique
    window.openMonth = function(monthName) {
        // Masquer tout le contenu des onglets
        const tabContents = document.getElementsByClassName("calendar-tab-content");
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active");
        }
        
        // Désactiver tous les boutons d'onglets
        const tabButtons = document.getElementsByClassName("tab-button");
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove("active");
        }
        
        // Afficher l'onglet sélectionné et activer son bouton
        const selectedTab = document.getElementById(monthName);
        if (selectedTab) {
            selectedTab.classList.add("active");
        }
        
        // Trouver et activer le bouton correspondant
        const buttons = document.querySelectorAll(".tab-button");
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent.toLowerCase().includes(monthName)) {
                buttons[i].classList.add("active");
                break;
            }
        }
    }
    
    // Initialiser les onglets de calendrier si présents
    if (document.querySelector('.calendar-tabs')) {
        setupCalendarTabs();
    }
    
    // Gestion du clic sur les cartes de villages
    const villageCards = document.querySelectorAll('.village-card');
    
    villageCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Enregistrer l'analytique de clic (exemple)
            const villageName = this.querySelector('h4').textContent;
            console.log(`Clic sur le village: ${villageName}`);
            
            // Le comportement par défaut (ouverture du lien) est maintenu
        });
    });
    
    // Fonctionnalité de filtre pour les événements du calendrier
    const setupCalendarFilter = () => {
        const calendarRows = document.querySelectorAll('.calendar tbody tr');
        const filterInput = document.getElementById('calendar-filter');
        
        if (filterInput) {
            filterInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                calendarRows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    let rowVisible = false;
                    
                    cells.forEach(cell => {
                        const eventIndicator = cell.querySelector('.event-indicator');
                        if (eventIndicator) {
                            const eventText = eventIndicator.textContent.toLowerCase();
                            if (eventText.includes(searchTerm)) {
                                rowVisible = true;
                            }
                        }
                    });
                    
                    row.style.display = searchTerm === '' || rowVisible ? '' : 'none';
                });
            });
        }
    };
    
    // Initialiser le filtre du calendrier si présent
    if (document.getElementById('calendar-filter')) {
        setupCalendarFilter();
    }
    
    // Validation du formulaire de contact
    const contactForm = document.querySelector('.wpform-placeholder');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Vérification des champs requis
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            const consentInput = this.querySelector('input[name="consent"]');
            
            let isValid = true;
            
            // Réinitialiser les erreurs
            const errorMessages = this.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.remove());
            
            // Validation du nom
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Veuillez entrer votre nom');
                isValid = false;
            }
            
            // Validation de l'email
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Veuillez entrer votre email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Veuillez entrer un email valide');
                isValid = false;
            }
            
            // Validation du message
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Veuillez entrer votre message');
                isValid = false;
            }
            
            // Validation du consentement
            if (!consentInput.checked) {
                showError(consentInput, 'Veuillez accepter le traitement de vos données');
                isValid = false;
            }
            
            // Si le formulaire est valide
            if (isValid) {
                // Simulation d'envoi (à remplacer par l'envoi réel)
                const submitBtn = this.querySelector('.btn-submit');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Envoi en cours...';
                submitBtn.disabled = true;
                
                // Simuler un délai d'envoi
                setTimeout(() => {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.';
                    successMessage.style.color = 'var(--vert-fonce)';
                    successMessage.style.padding = '1rem';
                    successMessage.style.backgroundColor = 'rgba(58, 114, 89, 0.1)';
                    successMessage.style.borderRadius = '5px';
                    successMessage.style.marginTop = '1rem';
                    
                    this.appendChild(successMessage);
                    this.reset();
                    
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Faire disparaître le message après 5 secondes
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        successMessage.style.transition = 'opacity 0.5s ease';
                        
                        setTimeout(() => {
                            successMessage.remove();
                        }, 500);
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    // Fonction pour afficher une erreur
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '0.25rem';
        
        const parentElement = input.parentElement;
        parentElement.appendChild(errorDiv);
        
        input.style.borderColor = 'red';
        
        // Réinitialiser le style après la correction
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            const error = parentElement.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        });
    }
    
    // Fonction pour valider un email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
