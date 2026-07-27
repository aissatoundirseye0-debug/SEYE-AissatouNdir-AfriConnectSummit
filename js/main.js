// COMPTE À REBOURS
function startCountdown() {
  const targetDate = new Date('2026-09-15T00:00:00').getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(interval);
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

startCountdown();

// COMPTEURS ANIMÉS AU SCROLL
function animateCounter(el) {
  const target = +el.getAttribute('data-target');
  let current = 0;
  const step = Math.ceil(target / 100);

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 20);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.counter').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===============================
// ONGLETS PROGRAMME
// ===============================

const boutons = document.querySelectorAll(".tab-btn");
const contenus = document.querySelectorAll(".tab-content");

if (boutons.length > 0) {

    boutons.forEach(bouton => {

        bouton.addEventListener("click", () => {

            // Retirer la classe active des boutons
            boutons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Cacher tous les contenus
            contenus.forEach(contenu => {
                contenu.classList.remove("active");
            });

            // Activer le bouton cliqué
            bouton.classList.add("active");

            // Afficher le contenu correspondant
            const id = bouton.getAttribute("data-tab");
            document.getElementById(id).classList.add("active");

        });

    });

}
// ===============================
// FILTRAGE DES INTERVENANTS
// ===============================

const filtreBtns = document.querySelectorAll(".filtre-btn");
const cartes = document.querySelectorAll(".intervenant-card");

if (filtreBtns.length > 0) {

    filtreBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            // Retirer la classe active
            filtreBtns.forEach(b => {
                b.classList.remove("active");
            });

            // Ajouter la classe active au bouton cliqué
            btn.classList.add("active");

            const filtre = btn.dataset.filtre;

            cartes.forEach(carte => {

                if (
                    filtre === "tous" ||
                    carte.dataset.categorie === filtre
                ) {
                    carte.style.display = "block";
                } else {
                    carte.style.display = "none";
                }

            });

        });

    });

}
// ===== DARK MODE / LIGHT MODE =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
}

if (themeToggle) {
    if (html.getAttribute('data-theme') === 'dark') {
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        if (newTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            html.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        }

        localStorage.setItem('theme', newTheme);
    });
}
// ===== BOUTON RETOUR EN HAUT =====
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// DYNAMIQUE AU SCROLL + COMPTEURS
    const fadeElements = document.querySelectorAll('section, .card, .stat, .speaker-card');
    const counters = document.querySelectorAll('.counter');
    let countersStarted = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Faire apparaître la section
                entry.target.classList.add('show');
                
                // 2. Lancer les compteurs seulement 1 fois quand on arrive sur .stats
                if(entry.target.classList.contains('stats') && !countersStarted){
                    countersStarted = true;
                    counters.forEach(counter => {
                        const update = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText;
                            const inc = target / 80; // vitesse
                            if (count < target) { 
                                counter.innerText = Math.ceil(count + inc); 
                                setTimeout(update, 25); 
                            } else { 
                                counter.innerText = target + (target === 1200 ? '+' : ''); 
                            }
                        };
                        update();
                    });
                }
            }
        });
    }, { threshold: 0.2 }); // se déclenche quand 20% de la section est visible

    // On applique la classe fade-in à tous les éléments
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    // ===============================
// ===============================
// Validation du formulaire
// ===============================
const form = document.getElementById("inscriptionForm");

if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valide = true;

        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const telephone = document.getElementById("telephone");
        const type = document.getElementById("type");
        const pays = document.getElementById("pays");
        const message = document.getElementById("message");

        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        if (nom.value.trim() === "") {
            nom.nextElementSibling.textContent = "Veuillez saisir votre nom.";
            valide = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value)) {
            email.nextElementSibling.textContent = "Email invalide.";
            valide = false;
        }

        if (telephone.value.trim().length < 9) {
            telephone.nextElementSibling.textContent = "Téléphone invalide.";
            valide = false;
        }

        if (type.value === "") {
            type.nextElementSibling.textContent = "Choisissez un type.";
            valide = false;
        }

        if (pays.value === "") {
            pays.nextElementSibling.textContent = "Choisissez un pays.";
            valide = false;
        }

        if (message.value.trim().length < 10) {
            message.nextElementSibling.textContent = "Le message doit contenir au moins 10 caractères.";
            valide = false;
        }

        if (valide) {
            const success = document.getElementById("successMessage");
            success.style.display = "block";
            success.textContent = "✅ Votre inscription a été envoyée avec succès !";
            form.reset();
        }
    });

}