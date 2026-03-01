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
    <!-- Carte X (Twitter) -->
    <div class="contact-card">
      <a href="https://x.com/coachyushin" target="_blank">
        <img src="/X.png" alt="Twitter X" class="contact-logo">
      </a>
      <p>X (Twitter)</p>
    </div>

    <!-- Carte MZ (Manager) -->
    <div class="contact-card">
      <a href="https://x.com/MZ_AGENCY" target="_blank">
        <img src="/MZ.png" alt="Manager MZ" class="contact-logo">
      </a>
      <p>Mon manager</p>
    </div>
  </div>
</section>

<section id="experience">
  <h2>Expérience</h2>
  <ul>
    <li>Coach depuis 2022</li>
    <li>+200 joueurs coachés</li>
    <li>Analyse VOD</li>
    <li>Stratégies compétitives</li>
  </ul>
</section>

<section id="collaboration">
  <h2>Collaborations actuelles</h2>
  <ul>
    <li>Equipe Esport XYZ</li>
    <li>Créateurs Fortnite</li>
    <li>Tournois privés</li>
  </ul>
</section>

<footer>
  <p>Coach Yushin</p>
  <p>
    <a href="https://twitter.com/coach" target="_blank">Twitter</a> |
    <a href="https://twitch.tv/coach" target="_blank">Twitch</a> |
    <a href="https://discord.gg/coach" target="_blank">Discord</a>
  </p>
</footer>
`;