const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navMenu.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu",
  );
  navMenu.classList.toggle("is-open", !isExpanded);
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();
  const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
  const mailto = new URL("mailto:hirakonaomi26@gmail.com");
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", body);

  formFeedback.textContent =
    "Your email app should open with a draft. If it doesn’t, email hirakonaomi26@gmail.com directly.";
  window.location.href = mailto.toString();
});
