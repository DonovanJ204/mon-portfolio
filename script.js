console.log("Script chargé !");

const titre = document.querySelector('#titre-principal');

titre.addEventListener('click', () => {
  titre.textContent = "Vous avez cliqué sur le titre !";
  console.log('Bouton cliqué !');
});

const themeButton = document.querySelector('#theme-toggle');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = "Mode Clair";
    } else {
        themeButton.textContent = "Mode Sombre";
    }

});

const tousLesTitresa = document.querySelectorAll('a');
console.log(tousLesTitresa);

const href = lien.getAttribute('href');
const section = document.querySelector(href);

tousLesTitresa.forEach(titre => {
    titre.addEventListener('click', () => {
        event.preventDefault()
        console.log('Bouton cliqué !');
        section.scrollIntoView( {behavior: "smooth"} );
    });
});