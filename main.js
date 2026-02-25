const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
document.addEventListener('DOMContentLoaded', () => {
  const professions = [
    'Associate Cloud Engineer'
    'AI/ML Engineer',
    'Python Programmer',
    'LINUX Enthusiast '
  ];
  
  const typewriterText = document.querySelector('.typewriter-text');
  const cursor = document.querySelector('.cursor');
  let index = 0;
  let isDeleting = false;
  let text = '';

  const cards = document.querySelectorAll('.skills__card');
  cards.forEach(card => {
    const img = card.querySelector('img');
    const text = document.createElement('span');
    text.textContent = img.alt;
    card.appendChild(text);
  });

  function type() {
    const currentProfession = professions[index];
    const typingSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    if (isDeleting) {
      text = currentProfession.substring(0, text.length - 1);
    } else {
      text = currentProfession.substring(0, text.length + 1);
    }

    typewriterText.textContent = text;

    let typeSpeed = typingSpeed;
    if (isDeleting) typeSpeed = deleteSpeed;

    if (!isDeleting && text === currentProfession) {
      typeSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      index = (index + 1) % professions.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});

function showSection(sectionId, element) {
  // Remove active class from all buttons and sections
  const buttons = document.querySelectorAll('.btn');
  const sections = document.querySelectorAll('.section2__container');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));
  
  // Add active class to clicked button and corresponding section
  element.classList.add('active');
  document.getElementById(sectionId).classList.add('active');
}

// Initialize default active tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn.active').click();
});