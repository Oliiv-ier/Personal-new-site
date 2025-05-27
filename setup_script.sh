#!/bin/bash

# Script de configuration pour le site Valentin HENRY
echo "🏥 Configuration du site Valentin HENRY - Ostéopathe D.O."
echo "=================================================="

# Création de la structure de dossiers
echo "📁 Création de la structure de dossiers..."
mkdir -p css js pages components img/{common,soins,backgrounds} fonts docs config

# Initialisation du repository Git
echo "🔧 Initialisation du repository Git..."
git init

# Création du fichier .gitignore
echo "📝 Création du fichier .gitignore..."
cat > .gitignore << EOF
# Fichiers système
.DS_Store
Thumbs.db

# Fichiers temporaires
*.tmp
*.temp
*~

# Logs
*.log

# Fichiers de sauvegarde
*.bak
*.backup

# Fichiers de développement
.vscode/
.idea/

# Cache
node_modules/
.cache/

# Fichiers de configuration locale (si nécessaire)
config/local.json
EOF

# Création du README.md principal
echo "📖 Création du README.md..."
cat > README.md << EOF
# Site Web Valentin HENRY - Ostéopathe D.O.

Site professionnel pour Valentin HENRY, ostéopathe D.O. exerçant à Grenoble et dans les régions du Trièves et de la Matheysine.

## 🚀 Démarrage rapide

1. Clonez ce repository
2. Ouvrez \`index.html\` dans votre navigateur
3. Pour les modifications, consultez le [Guide de Maintenance](docs/guide-maintenance.md)

## 📁 Structure du projet

- \`css/\` - Feuilles de style
- \`js/\` - Scripts JavaScript
- \`img/\` - Images du site
- \`pages/\` - Pages HTML
- \`components/\` - Composants réutilisables
- \`config/\` - Fichiers de configuration

## 🔧 Configuration

Les paramètres du site (tarifs, horaires, contact) sont centralisés dans \`config/site-config.json\`.

## 📅 Mise à jour du planning

Le planning de l'Ostéo'Van est géré via \`config/planning-osteo-van.json\`.

## 📞 Contact

**Valentin HENRY**  
Ostéopathe D.O.  
📱 06.07.10.19.50  
📧 henry.osteopathe@laposte.net  
📍 2 Place d'Apvril, 38000 Grenoble

## 📄 Licence

Tous droits réservés © 2025 Valentin HENRY
EOF

# Création du premier commit
echo "💾 Création du premier commit..."
git add .
git commit -m "Initial commit - Structure de base du site Valentin HENRY"

echo ""
echo "✅ Configuration terminée !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Créez un repository sur GitHub : https://github.com/new"
echo "2. Nommez-le : valentin-henry-osteopathe"
echo "3. Exécutez ces commandes :"
echo ""
echo "   git remote add origin https://github.com/VOTRE-USERNAME/valentin-henry-osteopathe.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Ajoutez vos images dans les dossiers img/"
echo "5. Configurez vos paramètres dans config/site-config.json"
echo ""
echo "📖 Consultez docs/guide-maintenance.md pour la maintenance quotidienne"
EOF