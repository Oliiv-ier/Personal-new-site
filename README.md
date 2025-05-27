# Site Web Valentin HENRY - Ostéopathe D.O.

Ce projet contient le code source du site web de Valentin HENRY, ostéopathe D.O. exerçant à Grenoble et dans les régions du Trièves et de la Matheysine.

## Structure du Projet

```
site-osteopathie/
│
├── index.html               # Page d'accueil principale
│
├── css/                     # Tous les fichiers CSS
│   ├── variables.css        # Variables CSS (couleurs, polices, etc.)
│   ├── main.css             # Styles communs et imports
│   ├── components.css       # Styles des composants réutilisables
│   ├── layout.css           # Styles de mise en page
│   └── responsive.css       # Styles pour l'adaptation mobile
│
├── js/                      # Tous les fichiers JavaScript
│   ├── navigation.js        # Script pour la navigation
│   ├── animations.js        # Animations du site
│   └── booking.js           # Fonctionnalités de prise de rendez-vous
│
├── img/                     # Images du site
│   ├── common/              # Images communes (logo, favicon, etc.)
│   ├── soins/               # Images pour la section soins
│   └── backgrounds/         # Arrière-plans et images décoratives
│
├── fonts/                   # Polices utilisées (si hébergées localement)
│
├── pages/                   # Pages HTML séparées
│   ├── a-propos.html        # Page À propos
│   ├── soins.html           # Page Soins
│   ├── rdv.html             # Page de prise de rendez-vous
│   ├── contact.html         # Page Contact
│   └── infos.html           # Page Informations
│
├── components/              # Composants HTML réutilisables
│   ├── header.html          # En-tête du site
│   ├── footer.html          # Pied de page
│   ├── booking-form.html    # Formulaire de réservation
│   └── contact-form.html    # Formulaire de contact
│
└── docs/                    # Documentation pour les développeurs
    └── README.md            # Ce fichier
```

## Technologies Utilisées

- HTML5
- CSS3 (avec architecture modulaire)
- JavaScript (vanilla)
- Google Fonts (Open Sans et Raleway)
- Google Maps (iframe d'intégration)

## Fonctionnalités

- Site responsive adapté à tous les appareils
- Navigation fluide avec défilement doux
- Formulaire de contact fonctionnel
- Intégration avec Doctolib pour la prise de rendez-vous
- Affichage du planning de l'Ostéo'Van
- Animations et transitions pour une expérience utilisateur agréable

## Installation et Déploiement

1. Clonez ce dépôt :
   ```
   git clone https://github.com/votre-username/site-osteopathie.git
   ```

2. Ouvrez `index.html` dans votre navigateur pour visualiser le site en local.

3. Pour déployer le site, téléchargez tous les fichiers sur votre serveur web via FTP ou utilisez un service d'hébergement comme Netlify, Vercel ou GitHub Pages.

## Intégration WordPress

Pour intégrer ce site dans WordPress :

1. Utilisez un thème comme Elementor ou Divi pour recréer la structure et le design.

2. Ajoutez les codes CSS personnalisés dans l'éditeur de thème ou un plugin comme "Simple Custom CSS".

3. Utilisez les plugins suivants :
   - Contact Form 7 ou WPForms pour les formulaires de contact
   - Un plugin de réservation compatible avec Doctolib ou utilisez directement les liens Doctolib

## Personnalisation

### Couleurs

Les variables de couleur sont définies dans `css/variables.css` :

```css
:root {
  --beige-clair: #f5f0e6;
  --beige-fonce: #e0ceb1;
  --vert-fonce: #2c5545;
  --vert-moyen: #3a7259;
  --texte-fonce: #333333;
  --fond-clair: #e8f0eb;
  /* etc. */
}
```

### Images

Remplacez les images par défaut dans le dossier `img/` par vos propres images.

## Maintenance

Pour maintenir le site à jour :

1. Mettez à jour régulièrement les informations de contact, horaires et tarifs si nécessaire
2. Vérifiez que les liens vers Doctolib fonctionnent correctement
3. Mettez à jour le planning de l'Ostéo'Van chaque mois
4. Ajoutez du contenu à la page "Informations" lorsqu'il sera disponible

## Auteur

Ce site a été développé pour Valentin HENRY, Ostéopathe D.O.

## Licence

Tous droits réservés © 2025 Valentin HENRY
