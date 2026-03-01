// ===== Import images depuis assets =====
import avatar from './assets/yushin.jpg';
import background from './assets/background.gif';
import twitterLogo from './assets/X.png';
import managerLogo from './assets/MZ.png';

// Experience logos
import koyaLogo from './assets/KOYA.png';
import kaioneLogo from './assets/KAIONE.png';
import nebulaLogo from './assets/NEBULA.png';
import lynoxLogo from './assets/LYNOX.png';

// Collaboration logos
import pauLogo from './assets/pau.jpg';
import woxyLogo from './assets/wozy.jpg';
import toryzenLogo from './assets/toryzen.jpg';
import zukiLogo from './assets/zuki.jpg';
import './style.css';

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
    <img src="${avatar}" alt="Coach Yushin" class="avatar">
    <h2>Coach Yushin</h2>
    <p class="description">Fortnite Coach</p>
  </div>
</section>

<section id="contact">
  <h2>Contact</h2>
  <div class="contact-container">
    <a href="https://x.com/coachyushin" target="_blank" class="contact-card">
      <img src="${twitterLogo}" alt="Twitter X" class="contact-logo">
      <p>X (Twitter)</p>
    </a>
    <a href="https://x.com/MZ_AGENCY" target="_blank" class="contact-card">
      <img src="${managerLogo}" alt="Manager MZ" class="contact-logo">
      <p>Mon manager</p>
    </a>
  </div>
</section>

<section id="experience">
  <h2>Expérience</h2>
  <div class="experience-container">
    <a href="https://x.com/Koyaesport_" target="_blank" class="experience-card">
      <img src="${koyaLogo}" alt="Koya Esport" class="experience-logo">
      <p>Koya Esport</p>
    </a>
    <a href="https://x.com/Kaionewin1" target="_blank" class="experience-card">
      <img src="${kaioneLogo}" alt="Kaione" class="experience-logo">
      <p>Kaione</p>
    </a>
    <a href="https://x.com/NBL_gg" target="_blank" class="experience-card">
      <img src="${nebulaLogo}" alt="Nebula" class="experience-logo">
      <p>Nebula</p>
    </a>
    <a href="https://x.com/LynoXEU" target="_blank" class="experience-card">
      <img src="${lynoxLogo}" alt="Lynox Esport" class="experience-logo">
      <p>Lynox Esport</p>
    </a>
  </div>
</section>

<section id="collaboration">
  <h2>Collaborations actuelles</h2>
  <div class="collaboration-container">
    <a href="https://x.com/pauuiwnl" target="_blank" class="collaboration-card">
      <img src="${pauLogo}" alt="Pau" class="collaboration-logo">
      <p>Pau</p>
    </a>
    <a href="https://x.com/woxy1z" target="_blank" class="collaboration-card">
      <img src="${woxyLogo}" alt="Woxy" class="collaboration-logo">
      <p>Woxy</p>
    </a>
    <a href="https://x.com/toryzenfv" target="_blank" class="collaboration-card">
      <img src="${toryzenLogo}" alt="Toryzen" class="collaboration-logo">
      <p>Toryzen</p>
    </a>
    <a href="https://x.com/VZuki_1" target="_blank" class="collaboration-card">
      <img src="${zukiLogo}" alt="Zuki" class="collaboration-logo">
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

document.querySelectorAll('.hero-container, .contact-card, .experience-card, .collaboration-card').forEach(el => {
  observer.observe(el);
});