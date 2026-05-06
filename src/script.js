const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const emailFeedback = document.getElementById("emailFeedback");
const usernameFeedback = document.getElementById("usernameFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

togglePasswordButton.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordButton.textContent = isPassword ? "🙊" : "🙈";
});

// email validation
emailInput.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailFeedback.classList.remove("hidden");
  } else {
    emailFeedback.classList.add("hidden");
  }
});

// username

usernameInput.addEventListener("input", () => {
  if (usernameInput.value === "") {
    usernameFeedback.classList.remove("hidden");
  } else {
    usernameFeedback.classList.add("hidden");
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.classList.remove("hidden");
  } else {
    passwordFeedback.classList.add("hidden");
  }
});
