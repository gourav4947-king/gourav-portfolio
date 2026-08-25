import { db, firebaseReady } from "./firebase.js";
import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const $ = (selector) => document.querySelector(selector);

$("#year").textContent = new Date().getFullYear();

const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");
menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  $("#scrollProgress").style.width = `${progress}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = $("#contactForm");
const status = $("#formStatus");
const submitBtn = $("#submitBtn");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!firebaseReady) {
    status.textContent = "Firebase is not configured yet. Add your Firebase config in firebase.js.";
    return;
  }

  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  status.textContent = "";

  try {
    await addDoc(collection(db, "portfolioMessages"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
      source: "portfolio"
    });

    form.reset();
    status.textContent = "Message sent successfully. Thank you!";
  } catch (error) {
    console.error(error);
    status.textContent = "Could not send the message. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});
