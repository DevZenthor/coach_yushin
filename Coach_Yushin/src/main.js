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

<!-- HERO / Présentation -->
<section id="hero">
  <div class="hero-container">
    <img src="/yushin.jpg" alt="Coach Yushin" class="avatar">
    <h2>Coach Yushin</h2>
    <p class="description">Fortnite Coach</p>
  </div>
</section>

<!-- CONTACT -->
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

<!-- EXPERIENCE -->
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

<!-- COLLABORATION -->
<section id="collaboration">
  <h2>Collaborations actuelles</h2>
  <ul>
    <li>Equipe Esport XYZ</li>
    <li>Créateurs Fortnite</li>
    <li>Tournois privés</li>
  </ul>
</section>

<!-- FOOTER -->
<footer>
  <p>Coach Yushin</p>
  <p>
    <a href="https://twitter.com/coach" target="_blank">Twitter</a> |
    <a href="https://twitch.tv/coach" target="_blank">Twitch</a> |
    <a href="https://discord.gg/coach" target="_blank">Discord</a>
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

document.querySelectorAll('.hero-container, .contact-card, .experience-card').forEach(el => {
  observer.observe(el);
});