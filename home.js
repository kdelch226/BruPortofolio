// Sélectionnez tous les liens dans la navigation
const liens = document.querySelectorAll('nav a');

// Ajoutez un écouteur d'événements de défilement à la fenêtre
window.addEventListener('scroll', function () {
    // Parcourez tous les liens
    liens.forEach(lien => {
        // Obtenez l'élément cible associé à chaque lien
        const sectionId = lien.getAttribute('href');
        const section = document.querySelector(sectionId);

        // Vérifiez si l'élément cible est visible dans la fenêtre
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isInView = (
            rect.top >= 0 &&
            rect.bottom <= windowHeight
        );

        // Si l'élément est visible, changez la couleur du lien, sinon revenez à la couleur par défaut
        if (isInView) {
            lien.classList.add('.link-active'); // Changez la couleur comme vous le souhaitez
        } else {
            lien.style.color = 'black'; // Couleur par défaut
        }
    });
});