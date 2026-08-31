// Mobile menu

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("active");
}


// Contact form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  const formMessage = document.getElementById("formMessage");

  formMessage.textContent =
    "Thank you " + name + "! Your message has been received.";

  contactForm.reset();

});