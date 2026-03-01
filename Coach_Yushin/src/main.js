const app = document.querySelector("#app");

app.innerHTML = `
<header>
  <h1>Coach Yushin</h1>
  <nav>
    <a href="#hero">Accueil</a>
    <a href="#contact">Contact</a>
    <a href="#experience">Expérience</a>
    <a href="#collaboration">Collaborations</a>
  </nav>
</header>

<section id="hero">
  <div class="hero-container">
    <img src="/yushin.jpg" alt="Coach Yushin" class="avatar">
    <h2>Coach Yushin</h2>
    <p class="description">Fortnite Coach</p>
  </div>
</section>

<section id="contact">
  <h2>Contact</h2>
  <div class="contact-container">
    <a href="https://x.com/coachyushin" target="_blank" class="contact-card">
      <img src="/X.png" alt="Twitter X" class="contact-logo">
      <p>X (Twitter)</p>
    </a>
    <a href="https://x.com/MZ_AGENCY" target="_blank" class="contact-card">
      <img src="/MZ.png" alt="Manager MZ" class="contact-logo">
      <p>Mon manager</p>
    </a>
  </div>
</section>

<section id="experience">
  <h2>Expérience</h2>
  <div class="experience-container">
    <a href="https://x.com/Koyaesport_" target="_blank" class="experience-card">
      <img src="/KOYA.png" alt="Team 1" class="experience-logo">
      <p>Koya Esport</p>
    </a>
    <a href="https://x.com/Kaionewin1" target="_blank" class="experience-card">
      <img src="/KAIONE.png" alt="Team 2" class="experience-logo">
      <p>Kaione</p>
    </a>
    <a href="https://x.com/NBL_gg" target="_blank" class="experience-card">
      <img src="/NEBULA.png" alt="Team 3" class="experience-logo">
      <p>Nebula</p>
    </a>
    <a href="https://x.com/LynoXEU" target="_blank" class="experience-card">
      <img src="/LYNOX.png" alt="Team 4" class="experience-logo">
      <p>Lynox Esport</p>
    </a>
  </div>
</section>

<section id="collaboration">
  <h2>Collaborations actuelles</h2>
  <div class="collaboration-container">
    <a href="https://x.com/pauuiwnl" target="_blank" class="collaboration-card">
      <img src="/pau.jpg" alt="Joueur 1" class="collaboration-logo">
      <p>Pau</p>
    </a>
    <a href="https://x.com/woxy1z" target="_blank" class="collaboration-card">
      <img src="/wozy.jpg" alt="Joueur 2" class="collaboration-logo">
      <p>Woxy</p>
    </a>
    <a href="https://x.com/toryzenfv" target="_blank" class="collaboration-card">
      <img src="/toryzen.jpg" alt="Joueur 3" class="collaboration-logo">
      <p>Toryzen</p>
    </a>
    <a href="https://x.com/VZuki_1" target="_blank" class="collaboration-card">
      <img src="/zuki.jpg" alt="Joueur 4" class="collaboration-logo">
      <p>Zuki</p>
    </a>
  </div>
</section>

<footer>
  <p>Coach Yushin</p>
  <p>
    <a href="https://x.com/coachyushin" target="_blank">Twitter</a> |
    <a href="https://x.com/MZ_AGENCY" target="_blank">Manager</a> 
  </p>
</footer>
`;

// ===== Animation au scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

// Observer pour Hero et toutes les cartes
document.querySelectorAll('.hero-container, .contact-card, .experience-card, .collaboration-card').forEach(el => {
  observer.observe(el);
});