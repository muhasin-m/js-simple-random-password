const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = "@#$%^&()_+~|={}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const button = document.querySelector("button");
button.addEventListener("click", createPassword);

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};

const copyImg = document.querySelector(".copy-img");
copyImg.addEventListener("click", copyPassword);
