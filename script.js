"use strict";
async function fetchData() {
  try {
    const data = await fetch("https://api.github.com/users/springmeyer");
    const userData = await data.json();
    username.textContent = userData.login;
    followers.textContent = userData.followers;
    following.textContent = userData.following;
    repos.textContent = userData.public_repos;
    company.textContent =
      userData.company === null ? "Desconhecido" : userData.company;
    userLocation.textContent = null ? "Desconhecido" : userData.location;
    userImage.setAttribute("src", userData.avatar_url);
    cardWrapper.addEventListener("click", (e) => {
      navigator.clipboard.writeText("https://api.github.com/users/springmeyer");
      alert("URL do usuário copiado");
    });
  } catch (e) {
    alert("Erro ao recuperar as informações do usuário");
  }
}

let user = null;

function randomColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

const toggleBackground = document.querySelector(`#toggleBackground`);
const cardWrapper = document.querySelector(`#card-wrapper`);
const username = document.querySelector(`.username`);
const followers = document.querySelector(`.followers`);
const following = document.querySelector(`.following`);
const repos = document.querySelector(`.repos`);
const company = document.querySelector(`.company`);
const userLocation = document.querySelector(`.location`);
const userImage = document.querySelector(`.image`);

toggleBackground.addEventListener("click", (e) => {
  cardWrapper.style.backgroundColor = randomColor();
});

fetchData();
