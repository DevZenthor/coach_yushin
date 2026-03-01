const app = document.querySelector("#app");

app.innerHTML = `
<header>
  <h1>Coach Yushin</h1>
  <nav>
    <a href="#hero">Accueil</a>
    <a href="#reseaux">Réseaux</a>
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

<section id="reseaux">
  <ul>
    <li><a href="https://twitter.com/coach" target="_blank">Twitter</a></li>
    <li><a href="https://twitch.tv/coach" target="_blank">Twitch</a></li>
    <li><a href="https://discord.gg/coach" target="_blank">Discord</a></li>
  </ul>
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