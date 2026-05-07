const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const messageButton = document.querySelector('#message-button');
const demoMessage = document.querySelector('#demo-message');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const messages = [
  'HTML sahifaga mazmun beradi.',
  'CSS sahifani chiroyli ko‘rsatadi.',
  'JavaScript sahifani jonlantiradi.',
];

let messageIndex = 0;

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

messageButton.addEventListener('click', () => {
  demoMessage.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name').toString().trim();

  formStatus.textContent = `Rahmat, ${name}! Xabaringiz qabul qilindi.`;
  contactForm.reset();
});
