
var projets = [
    {
      id: 0,
      name: 'Livraison de Repas',
      summary: 'Commande et livraison de repas africains authentiques via une interface conviviale.',
      description: "Introduction :\n"
        + "Le projet consiste à créer une plateforme en ligne permettant aux utilisateurs de commander et de se faire livrer des repas africains traditionnels. L'objectif est de promouvoir la cuisine africaine en offrant une expérience de commande facile et rapide, ainsi qu'un service de livraison fiable.\n\n"
        + "Aperçu Général :\n"
        + "Nom du Projet : AfriFoodDelivery.\n"
        + "Objectifs :\n"
        + "- Développer une plateforme conviviale pour commander des repas africains variés.\n"
        + "- Offrir un service de livraison efficace pour garantir la fraîcheur des repas.\n"
        + "- Mettre en valeur la diversité de la cuisine africaine à travers des menus authentiques.\n"
        + "Avancement Actuel :\n"
        + "La phase de développement initial a été achevée avec succès. La plateforme offre une interface intuitive pour parcourir les menus, passer des commandes et suivre les livraisons en temps réel. Les premiers retours des utilisateurs ont été positifs, mettant en valeur la qualité des repas et la rapidité du service de livraison.\n\n"
        + "Défis Rencontrés :\n"
        + "Pendant le développement, plusieurs défis ont été relevés, notamment la conception d'un système de gestion des commandes efficace, l'intégration de fonctionnalités de suivi des livraisons en temps réel et la mise en place d'une interface utilisateur conviviale sur mobile. Ces défis ont été surmontés grâce à une collaboration étroite entre l'équipe de développement et les utilisateurs finaux pour comprendre leurs besoins et leurs préférences.\n\n"
        + "Nouveaux Développements :\n"
        + "Pour améliorer l'expérience utilisateur, des fonctionnalités telles que la personnalisation des commandes en fonction des préférences alimentaires, l'intégration de promotions spéciales et la mise en place d'un programme de fidélité sont en cours de développement. Ces développements visent à fidéliser les clients et à stimuler les ventes.\n\n"
        + "Tests et Qualité :\n"
        + "Des tests rigoureux ont été effectués sur la plateforme pour garantir sa fiabilité, sa sécurité et sa performance. Des tests d'acceptation utilisateur ont permis de valider les fonctionnalités et d'identifier les éventuels problèmes d'ergonomie. Les résultats des tests ont montré une plateforme stable et réactive, prête à être déployée pour une utilisation publique.\n\n"
        + "Ressources Utilisées :\n"
        + "Les ressources techniques comprennent des frameworks de développement web modernes pour la construction de l'interface utilisateur, des solutions de gestion des commandes et des systèmes de suivi des livraisons en temps réel. Des partenariats ont été établis avec des restaurants africains locaux pour fournir une variété de repas authentiques. Des compétences en conception web, en développement d'applications et en gestion de projet ont été mobilisées pour mener à bien le projet.",
      pictures: ["../../assets/restaurant/restaurant2.png", "../../assets/restaurant/restaurant1.png"],
    },
    {
      id: 1,
      name: 'Service de Nettoyage en Ligne',
      summary: 'Plateforme de gestion de services de nettoyage pour administrateurs et clients.',
      description: "Introduction :\n"
        + "Le projet vise à créer une plateforme en ligne pour faciliter la gestion des services de nettoyage et simplifier la prise de rendez-vous pour les clients. Les propriétaires peuvent gérer leurs services, confirmer les rendez-vous et modifier leur disponibilité, tandis que les clients peuvent réserver des prestations de nettoyage à domicile en quelques clics.\n\n"
        + "Fonctionnalités de l'Administration (Propriétaire) :\n"
        + "- Authentification sécurisée pour les propriétaires avec possibilité de création de compte.\n"
        + "- Interface d'administration pour gérer les services de nettoyage disponibles.\n"
        + "- Possibilité d'ajouter de nouveaux services avec des descriptions détaillées et des tarifs.\n"
        + "- Fonctionnalité de confirmation des rendez-vous planifiés par les clients.\n"
        + "- Option de modification de la disponibilité pour les créneaux horaires de nettoyage.\n\n"
        + "Fonctionnalités du Client :\n"
        + "- Accès à un site web convivial avec une navigation facile pour parcourir les services de nettoyage disponibles.\n"
        + "- Prise de rendez-vous en ligne en sélectionnant un service, une date et une heure convenables.\n"
        + "- Possibilité de consulter les informations sur les services, les tarifs et les disponibilités.\n\n"
        + "Pages du Site Web :\n"
        + "- Page d'Accueil présentant les services de nettoyage et mettant en valeur les avantages du service.\n"
        + "- Page des Services répertoriant les différents types de nettoyage proposés avec des descriptions détaillées.\n"
        + "- Page À Propos fournissant des informations sur l'entreprise, son histoire et son équipe.\n"
        + "- Page de Disponibilité permettant aux propriétaires de gérer leur emploi du temps et leur disponibilité.\n"
        + "- Page de Rendez-vous où les clients peuvent réserver leur nettoyage en ligne en sélectionnant un service et une date.\n\n"
        + "Technologies Utilisées :\n"
        + "Le site web sera développé en utilisant des technologies modernes telles que Angular pour le frontend et Node.js avec MongoDB pour le backend. L'authentification des utilisateurs sera gérée de manière sécurisée et les données seront stockées de manière fiable dans une base de données MongoDB.\n\n"
        + "Objectifs :\n"
        + "L'objectif principal est de fournir une plateforme conviviale et efficace pour la gestion des services de nettoyage et la réservation de rendez-vous en ligne. Le site web offrira une expérience utilisateur optimale pour les propriétaires et les clients, en simplifiant les processus et en garantissant des résultats de nettoyage de qualité.",
      pictures: ["../../assets/cleaning/cleaning.png", "../../assets/cleaning/cleaning1.png", "../../assets/cleaning/cleaning2.png"],
    },
  
    {
        id: 2,
        name: 'Gestion Base de Données d\'Hôtel',
        summary: 'Création d\'une base de données MySQL pour la gestion d\'un hôtel',
        description: "--Introduction:\n" +
          "La création d'une base de données MySQL pour la gestion d'un hôtel est une étape essentielle dans le développement d'un système de gestion hôtelière. Cette base de données permettra de stocker et de gérer les informations relatives aux clients, aux chambres, aux réservations et aux transactions financières. Dans ce rapport, nous décrirons le processus de conception et de mise en place de la base de données, ainsi que l'exécution de requêtes pour ajouter, mettre à jour et afficher les données.\n\n" +
          "--Conception de la Base de Données:\n" +
          "La base de données est conçue pour répondre aux besoins spécifiques de gestion d'un hôtel. Elle est composée de plusieurs tables principales, notamment :\n" +
          "- Table Client : Pour stocker les informations sur les clients, telles que leur nom, prénom, adresse et coordonnées de contact.\n" +
          "- Table Chambre : Pour enregistrer les détails sur les chambres disponibles, y compris le numéro de chambre, le type de chambre et le tarif par nuit.\n" +
          "- Table Réservation : Pour suivre les réservations des clients, en enregistrant les dates d'arrivée et de départ, ainsi que les détails sur la chambre réservée.\n" +
          "- Table Transaction : Pour enregistrer les transactions financières liées aux séjours des clients, telles que les paiements et les frais supplémentaires.\n\n" +
          "--Exécution de Requêtes:\n" +
          "Une fois la base de données créée, des requêtes SQL peuvent être exécutées pour ajouter, mettre à jour et afficher les données. Voici quelques exemples de requêtes couramment utilisées :\n" +
          "- Requête d'Ajout : INSERT INTO Client (nom, prenom, adresse, telephone) VALUES ('Doe', 'John', '123 Rue de l'Échantillon', '1234567890');\n" +
          "- Requête de Mise à Jour : UPDATE Chambre SET tarif_nuit = 150 WHERE numero_chambre = 101;\n" +
          "- Requête d'Affichage : SELECT * FROM Reservation WHERE date_arrivee >= '2024-02-01';\n\n" +
          "--Conclusion:\n" +
          "En conclusion, la création d'une base de données MySQL pour la gestion d'un hôtel est une étape cruciale dans le développement d'un système hôtelier efficace. La conception soigneuse de la structure de la base de données et l'utilisation judicieuse des requêtes SQL garantissent un stockage et une gestion efficaces des données relatives aux clients, aux chambres, aux réservations et aux transactions financières.",
        pictures: ["../../assets/bases/bd1.jpg", "../../assets/bases/bd2.jpg", "../../assets/bases/bd3.jpg"],    
    }
];

window.addEventListener("load", function () {

    var projrecenthtml = document.getElementById('projetrecent');
    var projrecentId = Math.floor(Math.random() * 3);
    console.log(projrecentId);
    var projrecent = projets[projrecentId];
  
    var projrecentname = document.createElement('h4');
    projrecentname.textContent = projrecent.name;
  
    var projetrecentpicture = document.createElement('img');
    projetrecentpicture.src = projrecent.pictures[0];
  
    var projrecentresume = document.createElement('p');
    projrecentresume.textContent = projrecent.summary;
  
    projrecenthtml.appendChild(projrecentname);
    projrecenthtml.appendChild(projetrecentpicture);
    projrecenthtml.appendChild(projrecentresume);
});  