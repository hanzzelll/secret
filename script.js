const background = document.querySelector('.background');

function createLily() {
    const lily = document.createElement('div');
    lily.classList.add('lily');
    lily.style.left = Math.random() * window.innerWidth + 'px';
    lily.style.animationDuration = 8 + Math.random() * 4 + 's'; // slower
    document.querySelector('.background').appendChild(lily);
  
    setTimeout(() => {
      lily.remove();
    }, 12000);
  }  

setInterval(createLily, 500);

function openSection(section) {
  document.getElementById('letter-section').classList.add('hidden');
  document.getElementById('compliments-section').classList.add('hidden');

  if (section === 'letter') {
    document.getElementById('letter-section').classList.remove('hidden');
    typeLetter();
  } else if (section === 'compliments') {
    document.getElementById('compliments-section').classList.remove('hidden');
    startCarousel();
  }
}

// Typewriter effect
const message = "Happy birthday, My Baby! Please remember that you deserve the best things in life. You make everyone so fond of you kasi super gaan mo kausap. If you're feeling down, andito lang ako lagi para sa'yo, sabi ko naman sa'yo, hindi ako aalis 'di ba. I'm glad na I met you kahit hindi pa personally, pero soon 'yan HAHAHAHHA. Please don't give up kasi there are a lot of people na gustong makita yung pag-achieve mo ng dreams mo. You always say na binobola kita, pero hindi kaya, totoo kaya na ang ganda mo. I hope you enjoy your day! Thank you for being you. 💗";
let i = 0;

function typeLetter() {
  const typed = document.getElementById("typed-letter");
  typed.innerHTML = "";
  i = 0;
  const interval = setInterval(() => {
    typed.textContent += message.charAt(i);
    i++;
    if (i > message.length) clearInterval(interval);
  }, 50);
}

// Compliment Carousel
const compliments = [
  "I love your name",
  "I love your voice",
  "I love your personality",
  "I love your smile",
  "You're more beautiful than a sunrise.",
  "You inspire me every day.",
  "You're like a dream.",
  "You make me feel so happy.",
  "You're the most amazing person I know.",
  "You're so gorgeous.",
  "You're so cute.",
  "You are worth it.",
  "You are kind.",
  "You are lovable.",
  "You are strong, My Baby. 💐"
];
let current = 0;

function startCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.textContent = compliments[current];
  setInterval(() => {
    current = (current + 1) % compliments.length;
    carousel.textContent = compliments[current];
  }, 3500);
}