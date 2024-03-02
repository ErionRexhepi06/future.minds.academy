const toggleButton = document.getElementById("toggleButton");
const passwordInput = document.getElementById("passwordInput");

toggleButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});