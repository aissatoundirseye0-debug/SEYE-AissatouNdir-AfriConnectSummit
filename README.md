# AfriConnect Summit 2026
Projet fil rouge — Site vitrine d’une conférence tech panafricaine fictive.
Auteur : Aissatou Ndir Seye
Promotion : Étudiante en L1 IAGE (Informatique Appliquée à la Gestion des Entreprises) — ISI
⸻
Présentation
AfriConnect Summit est un site web moderne présentant un sommet technologique panafricain fictif. Le projet a été développé dans le cadre d’un apprentissage en développement web en utilisant HTML5, CSS3 et JavaScript.
L’objectif est de présenter l’événement, son programme, ses intervenants et de permettre aux visiteurs de prendre contact, à travers une interface inspirée de l’esthétique d’une “carte d’embarquement panafricaine”.
⸻
Fonctionnalités
Navigation
	•	Navbar avec effet au (scroll)
	•	Navigation entre les différentes pages
	•	Design responsive adapté aux mobiles, tablettes et ordinateurs

Mode sombre
	•	Activation/désactivation du Dark Mode via data-theme="dark" sur <html>
	•	Toggle par emoji (🌙/☀️)
	•	Sauvegarde du thème dans le LocalStorage

Page d’accueil (index.html)
	•	Section Hero avec animation CSS pure (@keyframes)
	•	Présentation de l’événement
	•	Compteurs animés (statistiques)
	•	Compte à rebours (countdown) jusqu’à l’événement
	•	Animations Fade-In au défilement via IntersectionObserver

Page Programme (programme.html)
	•	Navigation par onglets (tabs) pour les différentes journées
	•	Présentation détaillée des sessions

Page Intervenants (intervenants.html)
	•	Affichage des profils sous forme de cartes
	•	Filtrage dynamique par catégorie via attributs data-categorie

Page Contact (contact.html)
	•	Formulaire de contact (nom, email, téléphone, type, pays, message)
	•	Validation JavaScript par champ
	•	Messages d’erreur personnalisés avec retour visuel (classes CSS)

Expérience utilisateur
	•	Animations au défilement (scroll-triggered)
	•	Bouton Retour en haut
	•	Palette et typographie personnalisées (“carte d’embarquement panafricaine”)

⸻
Technologies utilisées
	•	HTML5
	•	CSS3
	•	JavaScript (ES6)
	•	Google Fonts
⸻

Structure du projet
AfriConnectSummit/
├── index.html
├── programme.html
├── intervenants.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── (images du projet)
└── README.md
⸻

Installation
	1.	Cloner le dépôt GitHub :
git clone [URL_DU_DEPOT]
	2.	Ouvrir le dossier du projet.
	3.	Lancer le fichier index.html dans un navigateur.
⸻

Améliorations futures
	•	Système d’authentification pour les participants
	•	Base de données pour les inscriptions
	•	Espace de messagerie pour les intervenants
	•	Paiement en ligne pour les billets
	•	Tableau de bord administrateur
⸻

Déploiement
Projet disponible en ligne via GitHub Pages :
https://aissatoundirseye0-debug.github.io/SEYE-AissatouNdir-AfriConnectSummit/