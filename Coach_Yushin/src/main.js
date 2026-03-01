// ===== IMPORTS =====
import avatar from './assets/yushin.jpg';
import twitterLogo from './assets/X.svg';
import managerLogo from './assets/MZ.svg';

import koyaLogo from './assets/KOYA.svg';
import kaioneLogo from './assets/KAIONE.svg';
import nebulaLogo from './assets/NEBULA.svg';
import lynoxLogo from './assets/LYNOX.svg';

import pauLogo from './assets/pau.jpg';
import woxyLogo from './assets/wozy.jpg';
import toryzenLogo from './assets/toryzen.jpg';
import zukiLogo from './assets/zuki.jpg';

import celteSymbol from './assets/celte.svg';

import './style.css';

const app = document.querySelector("#app");

app.innerHTML = `

<div class="celtic-bg">
  <img src="${celteSymbol}" class="celtic-symbol">
</div>

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
  <img src="${avatar}" class="avatar">
  <h2>Coach Yushin</h2>
  <p class="description">Fortnite Coach</p>
</section>

<section id="contact">
  <h2>Contact</h2>
  <div class="contact-container">
    <a href="https://x.com/coachyushin" target="_blank" class="contact-card">
      <img src="${twitterLogo}">
      <p>X (Twitter)</p>
    </a>

    <a href="https://x.com/MZ_AGENCY" target="_blank" class="contact-card">
      <img src="${managerLogo}">
      <p>Mon Manager</p>
    </a>
  </div>
</section>

<section id="experience">
  <h2>Expérience</h2>
  <div class="experience-container">
    <a href="https://x.com/Koyaesport_" class="experience-card">
      <img src="${koyaLogo}">
      <p>Koya Esport</p>
    </a>

    <a href="https://x.com/Kaionewin1" class="experience-card">
      <img src="${kaioneLogo}">
      <p>Kaione</p>
    </a>

    <a href="https://x.com/NBL_gg" class="experience-card">
      <img src="${nebulaLogo}">
      <p>Nebula</p>
    </a>

    <a href="https://x.com/LynoXEU" class="experience-card">
      <img src="${lynoxLogo}">
      <p>Lynox</p>
    </a>
  </div>
</section>

<section id="collaboration">
  <h2>Collaborations</h2>
  <div class="collaboration-container">
    <a href="https://x.com/pauuiwnl" class="collaboration-card">
      <img src="${pauLogo}">
      <p>Pau</p>
    </a>

    <a href="https://x.com/woxy1z" class="collaboration-card">
      <img src="${woxyLogo}">
      <p>Woxy</p>
    </a>

    <a href="https://x.com/toryzenfv" class="collaboration-card">
      <img src="${toryzenLogo}">
      <p>Toryzen</p>
    </a>

    <a href="https://x.com/VZuki_1" class="collaboration-card">
      <img src="${zukiLogo}">
      <p>Zuki</p>
    </a>
  </div>
</section>

`;

/* ===== PARTICULES ===== */

for (let i = 0; i < 70; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = 6 + Math.random() * 10 + "s";
  particle.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(particle);
}