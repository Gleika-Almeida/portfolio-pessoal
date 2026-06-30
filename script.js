const themeButton = document.getElementById("themeButton");
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Alternar menu mobile
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

// Tema claro e escuro
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDarkTheme = document.body.classList.contains("dark-theme");

  if (isDarkTheme) {
    themeButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Carregar tema salvo
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "☀️";
  }
});



// Função para mostrar erro
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");

  errorMessage.textContent = message;
  input.style.borderColor = "#e11d48";
}

// Função para limpar erro
function clearError(input) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");

  errorMessage.textContent = "";
  input.style.borderColor = "";
}

// Validar e-mail
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validação do formulário
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  clearError(nameInput);
  clearError(emailInput);
  clearError(messageInput);

  successMessage.textContent = "";

  if (nameValue === "") {
    showError(nameInput, "Por favor, digite seu nome.");
    isValid = false;
  } else if (nameValue.length < 3) {
    showError(nameInput, "O nome deve ter pelo menos 3 caracteres.");
    isValid = false;
  }

  if (emailValue === "") {
    showError(emailInput, "Por favor, digite seu e-mail.");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, "Digite um e-mail válido.");
    isValid = false;
  }

  if (messageValue === "") {
    showError(messageInput, "Por favor, digite sua mensagem.");
    isValid = false;
  } else if (messageValue.length < 10) {
    showError(messageInput, "A mensagem deve ter pelo menos 10 caracteres.");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Mensagem enviada com sucesso!";

    contactForm.reset();
  }
});


const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);