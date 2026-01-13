console.log("Script chargé !");

const titre = document.querySelector('#titre-principal');

titre.addEventListener('click', () => {
  // Ce code ne s'exécute QUE si l'utilisateur clique.
  titrePrincipal.textContent = "Vous avez cliqué sur le titre !";
  console.log('Bouton cliqué !');
});