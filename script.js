console.log("Script chargé !");

const titre = document.querySelector('#titre-principal');

titre.addEventListener('click', () => {
  titre.textContent = "Vous avez cliqué sur le titre !";
  console.log('Bouton cliqué !');
});

const themeButton = document.querySelector('#theme-toggle');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

});

document.body.classList.contains('dark-mode')