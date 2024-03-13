// Enumération TechType
const TechType = {
  Language: 'Langage',
  Framework: 'Framework',
  Technology: 'Technologie'
};

// Classe Tech
class Tech {
  // Constructeur privé
  constructor(key, color, type) {
    this.key = key;
    this.color = color;
    this.type = type;
  }
}

// Définition des instances pour différentes technologies avec des couleurs uniques

var JAVA = new Tech('Java', '#1A237E', "Language");
var JAVASCRIPT = new Tech('JavaScript', '#1A237E', "Language");
var TYPESCRIPT = new Tech('TypeScript', '#1A237E', "Language");
var PYTHON = new Tech('Python', '#1A237E', "Language");
var MYSQL = new Tech('MySQL', '#1A237E', "Language");
var JQUERY = new Tech('jQuery', '#880E4F', "Framework");
var BOOTSTRAP = new Tech('Bootstrap', '#880E4F', "Framework");
var WORDPRESS = new Tech('WordPress', '#3E2723', "Technology");
var REACT = new Tech('React', '#880E4F', "Framework");
var DJANGO = new Tech('Django', '#880E4F', "Framework");
var SPRINGBOOT = new Tech('Spring Boot', '#880E4F', "Framework");
var CPP = new Tech('C++', '#1A237E', "Language");
var ANGULAR = new Tech('Angular', '#880E4F', "Framework");
var MONGODB = new Tech('MongoDB', '#880E4F', "Framework");
var WINDOWSSERVER = new Tech('Windows Server', '#3E2723', "Technology");
var ANDROIDSTUDIO = new Tech('Android Studio', '#3E2723', "Technology");
var RAPIDAPI = new Tech('RapidAPI', '#3E2723', "Technology");
var MCUEXPRESSO = new Tech('MCU Expresso', '#3E2723', "Technology");
var PACKETTRACER = new Tech('Packet Tracer', '#3E2723', "Technology");
var HTML = new Tech('HTML', '#1A237E', "Language");
var CSS = new Tech('CSS', '#1A237E', "Language");



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
    tech: [ANGULAR, MONGODB],
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
    tech: [ANGULAR, MONGODB],
  },

  {
    id: 2,
    name: 'Site web Portfolio',
    summary: 'Un site web presentant les compétences, les travaux et le parcours professionnel',
    description: "--Introduction:\n" +
      "Ce rapport documente le processus de développement de mon portefeuille personnel, un projet conçu pour mettre en valeur mes compétences en développement, mon expérience et les projets scolaires et personnels que j'ai réalisés. Développé avec Angular, TypeScript et Bootstrap, ce portefeuille vise à présenter de manière claire et interactive mes réalisations antérieures et mon parcours professionnel.\n\n" +
      "--Méthodologie Agile en Développement Solo:\n" +
      "Malgré le développement en solo, j'ai opté pour la méthodologie Agile pour sa flexibilité et sa capacité à s'adapter aux changements. J'ai appliqué les principes Agile en décomposant le projet en tâches plus petites et en livrant des versions itératives du portefeuille. Cette approche m'a permis de recueillir rapidement des retours d'utilisateurs et d'ajuster le développement en conséquence.\n\n" +
      "--Développement Itératif:\n" +
      "Le projet a été développé de manière itérative, avec une attention particulière portée à l'architecture globale du site. Celui-ci se compose de quatre sections principales :\n\n" +
      "- Home: La page d'accueil offre une présentation générale, un accès au portefeuille, un résumé de mes compétences et un moyen de me contacter.\n" +
      "- Portfolio: Cette section présente en détail les projets scolaires et personnels que j'ai réalisés. Chaque projet est accompagné d'une description, de captures d'écran et de liens pertinents.\n" +
      "- Resume: Dans cette section, je présente un résumé de mes compétences, de mon parcours professionnel et de mes études.\n" +
      "- Contact: La section de contact offre aux visiteurs un moyen de me contacter directement via un formulaire ou en téléchargeant mon CV.\n\n" +
      "- -Défis Rencontrés :\n" +
      "Au cours du développement, des défis ont été relevés, notamment la personnalisation du design pour refléter l'identité professionnelle, l'optimisation de la performance du site, et la gestion de la compatibilité avec différents navigateurs. Ces défis ont été surmontés grâce à des ajustements dans le code et des tests approfondis.\n\n" +
      "--Nouveaux Développements :\n" +
      "Pour améliorer les fonctionnalités, des ajouts tels que l'intégration de galeries d'images pour présenter les travaux, l'optimisation pour les appareils mobiles, et la mise en place d'un formulaire de contact interactif ont été introduits. Ces développements visent à rendre le site plus complet et à renforcer l'engagement des visiteurs.\n\n" +
      "--Tests et Qualité :\n" +
      "Des tests exhaustifs ont été réalisés pour évaluer la stabilité, la compatibilité et la réactivité du site sur différents appareils et navigateurs. Les résultats des tests indiquent une performance satisfaisante, assurant une expérience utilisateur fluide.\n\n" +
      "--Ressources Utilisées :\n" +
      "Les ressources techniques comprennent Angular pour le développement, TypeScript comme langage de programmation, Bootstrap pour la conception responsive, et des fonctionnalités interactives telles qu'un formulaire de contact. L'utilisation de bibliothèques d'images a été explorée pour présenter visuellement les travaux.",
    pictures: ["../../assets/porto/porto.png"],
    tech: [ANGULAR, TYPESCRIPT, BOOTSTRAP],
  },
  {
    id: 3,
    name: 'Gestion de Location de Voitures',
    summary: 'Application Java pour la gestion de location de voitures',
    description: "--Introduction:\n" +
      "L'application Java de gestion de location de voitures est un logiciel destiné aux employés d'une compagnie de location de voitures. Il leur permet de gérer les réservations de véhicules pour les clients de manière efficace et organisée. L'objectif principal de cette application est d'automatiser le processus de réservation et de fournir une interface conviviale pour faciliter la gestion des locations de voitures.\n\n" +
      "--Rencontres en Groupes:\n" +
      "Pour le développement de ce projet, nous avons travaillé en groupes de cinq personnes. Ces rencontres en groupe nous ont permis de collaborer de manière efficace, d'échanger des idées et de répartir les tâches de manière équitable. Les réunions régulières nous ont également aidés à suivre l'avancement du projet, à résoudre les problèmes rencontrés et à prendre des décisions importantes ensemble.\n\n" +
      "--Fonctionnalités Principales:\n" +
      "L'application offre plusieurs fonctionnalités essentielles pour la gestion des locations de voitures, notamment :\n" +
      "- Gestion des clients : Les employés peuvent enregistrer les informations des clients, y compris leurs coordonnées et leurs préférences.\n" +
      "- Gestion des véhicules : Le logiciel permet de répertorier les différents véhicules disponibles à la location, avec des détails tels que le modèle, la couleur et les caractéristiques spécifiques.\n" +
      "- Réservation de véhicules : Les employés peuvent effectuer des réservations pour les clients en spécifiant la date, la durée et le type de véhicule requis.\n" +
      "- Suivi des locations : L'application permet de suivre l'état des locations en cours, y compris les retours de véhicules et les paiements effectués.\n\n" +
      "--Utilisation de MySQL pour la Base de Données:\n" +
      "L'application utilise la connectivité de base de données Java avec MySQL pour stocker et gérer les informations sur les clients, les véhicules et les réservations. Cette approche permet un stockage sécurisé et efficace des données, ainsi qu'une manipulation flexible des informations nécessaires pour la gestion des locations de voitures.\n\n" +
      "--Interface Utilisateur Conviviale:\n" +
      "L'interface utilisateur de l'application est conçue de manière conviviale, offrant une navigation intuitive et des fonctionnalités faciles à utiliser. Les employés peuvent accéder rapidement aux différentes fonctionnalités et visualiser les informations pertinentes sur les clients et les véhicules.\n\n" +
      "--Sécurité et Confidentialité:\n" +
      "La sécurité et la confidentialité des données sont des aspects essentiels de l'application. Des mesures de sécurité telles que l'authentification des utilisateurs et le chiffrement des données sont mises en place pour protéger les informations sensibles des clients et de l'entreprise.\n\n" +
      "--Déploiement et Maintenance:\n" +
      "L'application a été  déployée sur un serveur local. Les mises à jour régulières ont été effectuées pour corriger les bugs, améliorer les performances et ajouter de nouvelles fonctionnalités en fonction des besoins.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, l'application Java de gestion de location de voitures est un outil puissant pour simplifier et rationaliser le processus de réservation de véhicules. Son interface conviviale, ses fonctionnalités avancées et son engagement envers la sécurité en font un choix idéal pour les employés chargés de gérer les locations de voitures au sein de l'entreprise.",
    pictures: ["../../assets/location/location1.jpeg", "../../assets/location/location2.jpeg"],
    tech: [JAVA, MYSQL],
  },

  {
    id: 4,
    name: 'Gestionnaire de Tâches en Ligne',
    summary: 'Application Angular pour la gestion de tâches et la livraison de repas',
    description: "--Introduction:\n" +
      "L'application Angular de gestionnaire de tâches est un outil conçu pour aider les utilisateurs à organiser et à suivre leurs tâches quotidiennes. Développé en utilisant le framework Angular, cette application offre une interface conviviale et des fonctionnalités avancées pour une gestion efficace des tâches. Ce projet a été réalisé en collaboration avec un camarade de classe, suivant une approche méthodologique itérative et incrémentale.\n\n" +
      "--Méthode Itérative et Incrémentale:\n" +
      "Pour le développement de ce projet, nous avons adopté une approche méthodologique itérative et incrémentale. Cette méthode nous a permis de diviser le projet en petites itérations, chaque itération ajoutant de nouvelles fonctionnalités ou améliorant les fonctionnalités existantes. Nous avons pu ainsi recueillir rapidement des retours d'utilisateurs et ajuster le développement en conséquence, garantissant ainsi un produit final répondant aux besoins des utilisateurs.\n\n" +
      "--Fonctionnalités Principales:\n" +
      "L'application offre plusieurs fonctionnalités essentielles pour la gestion des tâches, notamment :\n" +
      "- Création de tâches : Les utilisateurs peuvent créer de nouvelles tâches en spécifiant un titre, une description et une date d'échéance.\n" +
      "- Organisation des tâches : Les tâches peuvent être organisées par catégories, étiquettes ou priorités, facilitant ainsi leur gestion et leur suivi.\n" +
      "- Suivi des tâches : Les utilisateurs peuvent marquer les tâches comme complétées, en cours ou en attente, et suivre leur progression au fil du temps.\n" +
      "--Collaboration avec un Camarade de Classe:\n" +
      "Ce projet a été réalisé en collaboration avec un camarade de classe, ce qui nous a permis de partager nos idées, nos connaissances et nos compétences. Nous avons travaillé en étroite collaboration tout au long du processus de développement, en contribuant chacun à notre domaine d'expertise et en résolvant les problèmes ensemble. Cette collaboration a renforcé notre compréhension des concepts d'Angular et a enrichi notre expérience dans le développement d'applications web.\n\n" +
      "--Utilisation de MongoDB pour la Base de Données:\n" +
      "L'application utilise MongoDB comme base de données pour stocker et gérer les informations sur les tâches des utilisateurs. MongoDB offre une flexibilité et une évolutivité élevées, ce qui en fait un choix idéal pour une application de gestion de tâches nécessitant une gestion efficace des données.\n\n" +
      "--Déploiement et Maintenance:\n" +
      "L'application est actuellement déployée sur un serveur local pour les tests et l'évaluation. Des mises à jour régulières seront effectuées pour corriger les bugs, améliorer les performances et ajouter de nouvelles fonctionnalités en fonction des retours des utilisateurs et des besoins évolutifs de l'application.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, l'application Angular de gestionnaire de tâches est un outil précieux pour organiser et suivre les tâches quotidiennes. Son interface conviviale, ses fonctionnalités avancées, sa méthodologie de développement itérative et incrémentale, ainsi que l'utilisation de MongoDB comme base de données en font un choix idéal pour les utilisateurs cherchant à améliorer leur productivité et leur efficacité dans la gestion des tâches.",
    pictures: [],
    tech: [ANGULAR, MONGODB, TYPESCRIPT],
  },

  {
    id: 5,
    name: 'Site d\'Exercices Fitness',
    summary: 'Application React intégrant l\'API Rapid pour des exercices fitness',
    description: "--Introduction:\n" +
      "L'application React pour des exercices fitness est une plateforme conçue pour aider les utilisateurs à suivre et à réaliser des exercices physiques de manière organisée et efficace. Cette application, développée avec React, intègre RapidAPI pour accéder à une vaste gamme de ressources liées au fitness. Le projet a été réalisé en utilisant la méthodologie Agile pour garantir un développement flexible et itératif.\n\n" +
      "--Méthode Agile:\n" +
      "Le développement de cette application a suivi la méthodologie Agile, caractérisée par des cycles de développement courts et itératifs. Cette approche nous a permis de répondre rapidement aux besoins changeants des utilisateurs et d'adapter le produit en conséquence. Les principes Agile tels que la collaboration étroite avec les parties prenantes et la livraison continue ont été intégrés tout au long du processus de développement.\n\n" +
      "--Fonctionnalités Principales:\n" +
      "L'application offre plusieurs fonctionnalités essentielles pour les exercices fitness, notamment :\n" +
      "- Sélection d'exercices : Les utilisateurs peuvent choisir parmi une variété d'exercices, y compris des exercices de cardio, de musculation et de flexibilité.\n" +
      "- Planification d'entraînements : Les utilisateurs peuvent planifier des séances d'entraînement en sélectionnant des exercices spécifiques et en définissant des objectifs de temps et de répétitions.\n" +
      "- Suivi des progrès : L'application permet aux utilisateurs de suivre leurs progrès au fil du temps en enregistrant les séances d'entraînement réalisées et en visualisant les statistiques de performance.\n" +
      "- Intégration avec RapidAPI : RapidAPI est utilisé pour accéder à des informations complémentaires sur les exercices, telles que des vidéos tutorielles, des conseils de forme et des plans d'entraînement prédéfinis.\n\n" +
      "--Utilisation de RapidAPI:\n" +
      "RapidAPI est intégré à l'application pour enrichir l'expérience des utilisateurs en fournissant un accès rapide et facile à des ressources fitness variées. Les utilisateurs peuvent rechercher et découvrir de nouveaux exercices, obtenir des conseils d'experts et accéder à du contenu multimédia instructif, le tout depuis une seule plateforme.\n\n" +
      "--Déploiement et Maintenance:\n" +
      "L'application est actuellement déployée sur une plateforme de test pour évaluer sa stabilité et son fonctionnement. Des mises à jour régulières seront effectuées pour améliorer les fonctionnalités, corriger les bugs et répondre aux commentaires des utilisateurs. La méthodologie Agile nous permettra de continuer à développer et à améliorer l'application de manière itérative.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, l'application React pour des exercices fitness offre une solution complète et personnalisable pour les amateurs de fitness. Grâce à son intégration avec RapidAPI, ses fonctionnalités avancées et son développement Agile, cette application est un outil précieux pour aider les utilisateurs à atteindre leurs objectifs de remise en forme et à adopter un mode de vie sain.",
    pictures: [],
    tech: [REACT, RAPIDAPI, JAVASCRIPT],
  },

  {
    id: 6,
    name: 'Gestion de Station d\'Essence',
    summary: 'Application Web HTML/CSS pour la gestion de station d\'essence',
    description: "--Introduction:\n" +
      "L'application Web simple de gestion de station d'essence est un outil conçu pour aider les employés d'une station-service à gérer les pompes à essence, les transactions avec les clients et les incidents tels que les cas de vol. Développée en utilisant les langages HTML, CSS et JavaScript, cette application offre une interface intuitive pour activer/désactiver les pompes, facturer les clients et signaler les incidents. L'utilisation de la méthode en cascade dans le code JavaScript permet une meilleure gestion et une organisation plus efficace des différentes actions effectuées par les employés.\n\n" +
      "--Fonctionnalités Principales:\n" +
      "L'application offre plusieurs fonctionnalités essentielles pour la gestion d'une station d'essence, notamment :\n" +
      "- Activation/ Désactivation des pompes : Les employés peuvent activer ou désactiver les pompes à essence en fonction de leur disponibilité ou de la maintenance requise.\n" +
      "- Facturation des clients : L'application permet aux employés d'enregistrer les transactions des clients, en calculant le montant total en fonction du prix ou de la quantité d'essence vendue.\n" +
      "- Signalement des cas de vol : Les employés peuvent signaler les cas de vol ou de comportement suspect à travers l'application, en enregistrant les détails pertinents pour une enquête ultérieure.\n\n" +
      "--Technologies Utilisées:\n" +
      "L'application est développée en utilisant les langages HTML, CSS et JavaScript pour assurer une compatibilité maximale avec les navigateurs Web modernes. La méthode en cascade est utilisée dans le code JavaScript pour structurer et organiser les différentes actions de manière logique et efficace.\n\n" +
      "--Interface Utilisateur Conviviale:\n" +
      "L'interface utilisateur de l'application est conçue de manière simple et intuitive, offrant des fonctionnalités facilement accessibles et compréhensibles pour les employés de la station-service. Les actions telles que l'activation/désactivation des pompes et la génération de factures sont présentées de manière claire et organisée.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, l'application Web simple pour la gestion de station d'essence est un outil efficace pour aider les employés de la station-service à gérer les opérations quotidiennes. Son interface conviviale, ses fonctionnalités essentielles et l'utilisation de la méthode en cascade dans le code JavaScript en font un choix idéal pour les stations d'essence cherchant à automatiser et à rationaliser leurs processus de gestion.",
    pictures: ["../../assets/station/station1.jpg", "../../assets/station/station2.jpg"],
    tech: [MYSQL, HTML, CSS],
  },

  {
    id: 7,
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
    tech: [MYSQL],
  },

  {
    id: 8,
    name: 'Capteur de Température',
    summary: 'Programmation d\'un capteur de température avec MCU Expresso',
    description: "--Introduction:\n" +
      "La programmation d'un capteur de température avec MCU Expresso et la carte KL27Z en utilisant le langage C++ est une tâche cruciale pour de nombreux projets d'automatisation et de surveillance. Dans ce rapport, nous décrirons le processus de configuration et de programmation du capteur de température en utilisant le langage C++, ainsi que la mise en œuvre de fonctionnalités de lecture et de traitement des données de température.\n\n" +
      "--Configuration de l'Environnement de Développement:\n" +
      "Avant de commencer la programmation, il est nécessaire de configurer l'environnement de développement pour utiliser le langage C++ avec MCU Expresso et la carte KL27Z. Cela comprend l'installation de l'IDE MCU Expresso, la configuration du projet pour utiliser le langage C++, et l'initialisation des bibliothèques nécessaires pour la communication avec le capteur de température.\n\n" +
      "--Programmation du Capteur de Température en C++:\n" +
      "Une fois l'environnement configuré, nous pouvons commencer la programmation du capteur de température en utilisant le langage C++. Nous devrons écrire du code C++ pour initialiser les broches de communication avec le capteur (par exemple, I2C ou SPI), envoyer les commandes de lecture au capteur, et récupérer les données de température.\n\n" +
      "--Traitement des Données de Température:\n" +
      "Après avoir obtenu les données de température du capteur, nous pouvons les traiter selon les besoins du projet en utilisant le langage C++. Cela peut inclure la conversion des données brutes en valeurs de température en degrés Celsius ou Fahrenheit, l'application de filtres pour réduire le bruit, ou encore l'enregistrement des données dans une mémoire externe.\n\n" +
      "--Tests et Débogage en C++:\n" +
      "Une fois le code écrit, il est essentiel de réaliser des tests approfondis en utilisant le langage C++ pour vérifier son bon fonctionnement. Des techniques de débogage telles que l'utilisation de points d'arrêt, l'inspection des variables et l'analyse des messages de débogage peuvent être utilisées pour détecter les erreurs et les erreurs de communication.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, la programmation d'un capteur de température avec MCU Expresso et la carte KL27Z en utilisant le langage C++ est une tâche réalisable qui offre de nombreuses possibilités dans le domaine de l'automatisation et de la surveillance. Avec les bonnes compétences en programmation et une compréhension approfondie des spécifications du capteur et de la carte, il est possible de créer des systèmes robustes et précis pour la mesure et le contrôle de la température.",
    pictures: ["../../assets/kl27z/capteur1.png", "../../assets/kl27z/capteur2.png"],
    tech: [MCUEXPRESSO, CPP],
  },

  {
    id: 9,
    name: 'Système de Verrouillage de Porte',
    summary: 'Simulation en C++ d\'un système de verrouillage de porte avec Arduino',
    description: "--Introduction:\n" +
      "La simulation en C++ d'un système de verrouillage de porte avec Arduino est un projet visant à développer un système de sécurité robuste et flexible pour les portes. Dans ce rapport, nous décrirons le processus de conception, de développement et de simulation du système de verrouillage de porte, en utilisant la méthode de développement agile pour assurer une progression itérative et une réponse efficace aux changements.\n\n" +
      "--Analyse des Besoins:\n" +
      "Avant de commencer le développement, une analyse détaillée des besoins du système de verrouillage de porte a été réalisée. Cela comprend l'identification des fonctionnalités essentielles telles que l'ouverture et la fermeture de la porte, la vérification de l'identité de l'utilisateur, et la gestion des autorisations d'accès. De plus, des fonctionnalités telles que l'émission de sons et la mise en place de jeux de lumière ont été identifiées pour renforcer l'expérience utilisateur et améliorer la sécurité du système.\n\n" +
      "--Planification Agile:\n" +
      "La méthode de développement agile a été choisie pour ce projet en raison de sa capacité à s'adapter aux changements et à répondre efficacement aux besoins évolutifs du client. Le développement a été divisé en itérations courtes appelées sprints, chaque sprint se concentrant sur la mise en œuvre de fonctionnalités spécifiques et la résolution des problèmes rencontrés. Les ajouts de fonctionnalités tels que les sons et les jeux de lumière ont été intégrés progressivement tout au long du processus de développement, en réponse aux retours d'utilisateurs et aux besoins changeants du projet.\n\n" +
      "--Développement Itératif:\n" +
      "Le développement du système de verrouillage de porte a suivi un processus itératif, avec des cycles de développement courts et répétitifs. À chaque sprint, de nouvelles fonctionnalités ont été ajoutées au système, et des tests ont été réalisés pour s'assurer de son bon fonctionnement. Les ajouts de sons et de jeux de lumière ont été intégrés dans le code existant, en utilisant des bibliothèques compatibles avec la carte Arduino utilisée pour le projet.\n\n" +
      "--Simulation et Tests:\n" +
      "Après chaque itération de développement, le système de verrouillage de porte a été soumis à une simulation approfondie pour évaluer sa robustesse et son efficacité. Des tests ont été réalisés pour vérifier la gestion des scénarios d'utilisation normaux et anormaux, ainsi que la résistance aux attaques de sécurité. Les fonctionnalités telles que les sons et les jeux de lumière ont été testées pour s'assurer de leur fonctionnement correct en réponse aux événements déclenchés par l'utilisateur.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, la simulation en C++ d'un système de verrouillage de porte avec Arduino est un projet réalisable qui permet de développer un système de sécurité fiable et flexible. En utilisant la méthode de développement agile, il est possible de répondre aux besoins changeants du client tout en garantissant la qualité et la fiabilité du système de verrouillage de porte, y compris l'intégration de fonctionnalités telles que les sons et les jeux de lumière pour améliorer l'expérience utilisateur et renforcer la sécurité.",
    pictures: ["../../assets/arduino/arduino1.jpg", "../../assets/arduino/arduino2.jpg"],
    tech: [CPP],
  },

  {
    id: 10,
    name: 'Simulation Trafic Routier + GPS',
    summary: 'Simulation en Java de trafic routier avec intégration d\'un système GPS',
    description: "--Introduction:\n" +
      "La simulation en Java de trafic routier avec intégration d'un système GPS est un projet visant à modéliser et à analyser le comportement du trafic routier dans un environnement urbain. Dans ce rapport, nous décrirons le processus de conception, de développement et de simulation du système de trafic routier, en mettant particulièrement l'accent sur l'intégration du système GPS pour la surveillance et le suivi des véhicules.\n\n" +
      "--Analyse des Besoins:\n" +
      "Avant de commencer le développement, une analyse détaillée des besoins du système de simulation de trafic routier a été réalisée. Cela comprend l'identification des fonctionnalités essentielles telles que la modélisation réaliste des routes, des intersections et des véhicules, la gestion du comportement des conducteurs, ainsi que l'intégration d'un système GPS pour la localisation et la navigation des véhicules.\n\n" +
      "--Conception du Système:\n" +
      "La conception du système de simulation de trafic routier a été réalisée en utilisant des principes de modélisation objet et de conception logicielle. Les différentes entités telles que les routes, les intersections, les véhicules et le système GPS ont été modélisées sous forme de classes Java, avec des relations définies pour représenter les interactions entre elles.\n\n" +
      "--Développement du Système:\n" +
      "Le développement du système de simulation de trafic routier a été réalisé en plusieurs étapes, en suivant une approche itérative et incrémentale. Les fonctionnalités de base telles que la génération aléatoire du trafic, le mouvement des véhicules et la détection des collisions ont été implémentées en premier lieu, puis le système GPS a été intégré pour fournir des fonctionnalités de localisation et de navigation aux véhicules.\n\n" +
      "--Simulation et Tests:\n" +
      "Une fois le système de simulation de trafic routier développé, des tests ont été réalisés pour vérifier son bon fonctionnement et sa robustesse. Des scénarios de simulation variés ont été exécutés pour évaluer les performances du système dans des conditions normales et extrêmes, et les résultats ont été analysés pour identifier les éventuels problèmes et les points d'amélioration.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, la simulation en Java de trafic routier avec intégration d'un système GPS est un projet complexe mais réalisable qui permet de modéliser et d'analyser le comportement du trafic routier dans un environnement urbain. En utilisant des principes de conception logicielle et une approche de développement itérative, il est possible de développer un système de simulation robuste et précis, capable de fournir des informations utiles pour l'amélioration de la sécurité et de l'efficacité des systèmes de transport.",
    pictures: ["../../assets/voiture/voiture1.jpg", "../../assets/voiture/voiture2.png"],
    tech: [JAVA],
  },

  {
    id: 11,
    name: 'Simulation Réseaux d\'Entreprise',
    summary: 'Simulation de réseaux d\'entreprise avec Packet Tracer',
    description: "Introduction :\n"
      + "Le projet vise à créer une simulation de réseaux d'entreprise en utilisant l'outil Packet Tracer. L'objectif principal est de modéliser un environnement réseau d'entreprise réaliste, en intégrant divers dispositifs et en simulant des scénarios opérationnels pour évaluer la performance et la sécurité du réseau.\n\n"
      + "Aperçu Général :\n"
      + "Nom du Projet : SimuReseauxEntreprise.\n"
      + "Objectifs :\n"
      + "- Concevoir une topologie réseau d'entreprise complète.\n"
      + "- Configurer et interconnecter divers périphériques réseau.\n"
      + "- Simuler des scénarios opérationnels pour évaluer la robustesse du réseau.\n"
      + "Avancement Actuel :\n"
      + "La phase initiale du projet a été accomplie avec succès. La topologie réseau d'entreprise a été conçue en utilisant Packet Tracer, intégrant des routeurs, des commutateurs, des serveurs, et des postes de travail. La configuration de base et l'interconnexion des dispositifs ont été réalisées.\n\n"
      + "Défis Rencontrés :\n"
      + "Au cours du développement, des défis ont été relevés, notamment la gestion efficace des adresses IP, la configuration des protocoles de routage, et la mise en place de mécanismes de sécurité tels que les pare-feu et les VLANs. Ces défis ont été surmontés grâce à des connaissances approfondies de Packet Tracer et des ajustements dans la configuration réseau.\n\n"
      + "Nouveaux Développements :\n"
      + "Pour améliorer les fonctionnalités, des fonctionnalités telles que la mise en œuvre de politiques de sécurité réseau, la configuration de services réseau tels que DHCP et DNS, et la simulation de scénarios de reprise après sinistre ont été introduites. Ces développements visent à rendre la simulation plus représentative des environnements réseau d'entreprise complexes.\n\n"
      + "Tests et Qualité :\n"
      + "Des tests exhaustifs ont été réalisés pour évaluer la stabilité, la résilience et la sécurité du réseau simulé. Des scénarios variés, y compris des attaques de réseau, des interruptions de service, et des tests de charge, ont été simulés pour vérifier la robustesse du réseau. Les résultats des tests indiquent une configuration réseau stable et sécurisée.\n\n"
      + "Ressources Utilisées :\n"
      + "Les ressources techniques utilisées comprennent Packet Tracer comme outil de simulation, des connaissances approfondies des protocoles réseau, et des compétences dans la configuration des périphériques réseau. L'utilisation de protocoles tels que OSPF, EIGRP, et la configuration des services réseau a été cruciale.",
    pictures: ["../../assets/reseau/reseau2.png", "../../assets/reseau/reseau.jpg"],
    tech: [PACKETTRACER],
  },

  {
    id: 12,
    name: 'Gestion reseaux d\'Entreprise',
    summary: 'Administration de réseaux d\'entreprise avec Windows Server',
    description: "--Introduction:\n" +
      "L'administration de réseaux d'entreprise avec Windows Server est une tâche essentielle pour garantir le bon fonctionnement et la sécurité des infrastructures informatiques dans les entreprises. Dans ce rapport, nous décrirons les principaux aspects de l'administration de réseaux d'entreprise avec Windows Server, y compris la configuration et la gestion des services réseau, la sécurisation des données et des communications, ainsi que la surveillance et la maintenance des systèmes.\n\n" +
      "--Configuration et Gestion des Services Réseau:\n" +
      "La configuration et la gestion des services réseau sont des éléments clés de l'administration de réseaux d'entreprise avec Windows Server. Cela comprend la mise en place de services tels que le serveur DNS, le serveur DHCP, le serveur Active Directory, le serveur de fichiers et le serveur d'impression. La configuration correcte de ces services garantit la connectivité réseau et facilite la gestion des ressources informatiques.\n\n" +
      "--Sécurisation des Données et des Communications:\n" +
      "La sécurisation des données et des communications est une priorité absolue dans l'administration de réseaux d'entreprise. Windows Server propose une gamme de fonctionnalités de sécurité telles que la gestion des stratégies de groupe, la gestion des certificats, le pare-feu Windows, la détection des intrusions et la protection contre les logiciels malveillants. Ces fonctionnalités permettent de protéger les données sensibles et de garantir la confidentialité et l'intégrité des communications.\n\n" +
      "--Surveillance et Maintenance des Systèmes:\n" +
      "La surveillance et la maintenance des systèmes sont des activités continues dans l'administration de réseaux d'entreprise avec Windows Server. Cela comprend la surveillance des performances du réseau, la détection et la résolution des problèmes, la sauvegarde et la récupération des données, ainsi que la planification des mises à jour et des correctifs de sécurité. Une surveillance proactive et une maintenance régulière contribuent à garantir la disponibilité et la fiabilité des services réseau.\n\n" +
      "--Formation et Support Utilisateur:\n" +
      "En plus de la configuration et de la gestion techniques, l'administration de réseaux d'entreprise avec Windows Server implique également la formation et le support des utilisateurs finaux. Cela comprend la formation des employés sur l'utilisation des ressources réseau, la résolution des problèmes courants et la fourniture d'un support technique en cas de besoin. Une communication claire et efficace avec les utilisateurs finaux est essentielle pour garantir une expérience utilisateur positive.\n\n" +
      "--Conclusion:\n" +
      "En conclusion, l'administration de réseaux d'entreprise avec Windows Server est une responsabilité complexe mais essentielle pour assurer le bon fonctionnement des infrastructures informatiques dans les entreprises. En utilisant les fonctionnalités avancées de Windows Server et en suivant les meilleures pratiques de gestion des réseaux, il est possible de garantir la sécurité, la fiabilité et la performance des services réseau, contribuant ainsi au succès global de l'entreprise.",
    pictures: [],
    tech: [WINDOWSSERVER],
  },

  {
    id: 13,
    name: 'Application de Gestion de Santé',
    summary: 'Application Android Studio pour la gestion de la santé',
    description: "Introduction :\n"
      + "Le projet a pour objectif de développer une application Android dédiée à la gestion de la santé, en utilisant Android Studio et le langage de programmation Java. L'objectif principal est de fournir une plateforme conviviale permettant aux utilisateurs de suivre et de gérer leur santé de manière efficace.\n\n"
      + "Aperçu Général :\n"
      + "Nom du Projet : GestionSanteAndroid.\n"
      + "Objectifs :\n"
      + "- Développer une application Android intuitive pour la gestion de la santé.\n"
      + "- Intégrer des fonctionnalités de suivi des activités physiques, de gestion des rendez-vous médicaux, et de saisie des données de santé.\n"
      + "- Utiliser Android Studio et Java pour le développement.\n"
      + "Défis Rencontrés :\n"
      + "Durant le développement, des défis ont été relevés, notamment l'intégration de capteurs pour le suivi des activités physiques, la gestion de la confidentialité des données de santé, et l'optimisation de la performance de l'application sur différents appareils Android. Ces défis ont été surmontés grâce à des ajustements dans le code et des tests approfondis.\n\n"
      + "Nouveaux Développements :\n"
      + "Pour améliorer les fonctionnalités, des fonctionnalités telles que la mise en œuvre de notifications pour les rappels de rendez-vous, l'intégration de graphiques de suivi des progrès de santé, et l'ajout de conseils de santé personnalisés ont été introduites. Ces développements visent à rendre l'application plus complète et engageante pour les utilisateurs.\n\n"
      + "Tests et Qualité :\n"
      + "Des tests ont été réalisés sur l'ensemble des fonctionnalités de l'application, en mettant l'accent sur la stabilité, la convivialité et la sécurité des données. Des simulations sur différents appareils Android ont été effectuées pour garantir une expérience utilisateur homogène. Les résultats des tests indiquent une application stable et fiable.\n\n"
      + "Ressources Utilisées :\n"
      + "Les ressources techniques utilisées comprennent Android Studio pour le développement de l'application, Java comme langage de programmation, et des bibliothèques tierces pour l'intégration de fonctionnalités spécifiques. L'utilisation de capteurs intégrés dans les appareils Android a été explorée pour le suivi des activités physiques.",
    pictures: ["../../assets/android/android1.jpg", "../../assets/android/android2.jpg"],
    tech: [ANDROIDSTUDIO, JAVA],
  },

  {
    id: 14,
    name: 'Site de Vêtements en Ligne ',
    summary: 'Création d\'un site Web WordPress pour la vente de vêtements en ligne avec un blog ',
    description: "Introduction :\n"
      + "Le projet vise à créer un site web combinant une boutique de vêtements en ligne et un blog, en utilisant la plateforme WordPress. L'objectif principal est de fournir une expérience en ligne immersive pour les utilisateurs, permettant à la fois la découverte et l'achat de vêtements tout en partageant des contenus pertinents à travers un blog.\n\n"
      + "Aperçu Général :\n"
      + "Nom du Projet : FashionWebBlog.\n"
      + "Objectifs :\n"
      + "- Développer un site web attrayant et convivial pour la vente de vêtements en ligne.\n"
      + "- Intégrer un blog pour partager des actualités, des tendances et des conseils de mode.\n"
      + "- Utiliser la plateforme WordPress pour simplifier la gestion du contenu.\n"
      + "Avancement Actuel :\n" + "Défis Rencontrés :\n"
      + "Durant le développement, des défis ont été relevés, notamment la personnalisation du design pour refléter l'identité de la marque, l'optimisation de la boutique en ligne pour une navigation fluide, et la configuration des fonctionnalités de paiement sécurisé. Ces défis ont été surmontés grâce à l'utilisation de thèmes adaptés et à des extensions spécifiques de WordPress.\n\n"
      + "Nouveaux Développements :\n"
      + "Pour améliorer les fonctionnalités, des ajouts tels que la mise en place d'une newsletter pour informer les clients des nouvelles collections, l'intégration de galeries de produits avec des images de haute qualité, et l'optimisation du site pour les moteurs de recherche ont été introduits. Ces développements visent à accroître la visibilité et l'engagement des utilisateurs.\n\n"
      + "Tests et Qualité :\n"
      + "Des tests approfondis ont été réalisés sur l'ensemble du site, en mettant l'accent sur la convivialité, la sécurité des transactions et la performance du site. Des tests de compatibilité ont été effectués sur différents navigateurs et appareils pour garantir une expérience utilisateur uniforme. Les résultats des tests indiquent un site web stable, sécurisé et réactif.\n\n"
      + "Ressources Utilisées :\n"
      + "Les ressources techniques comprennent WordPress comme plateforme de développement, des thèmes personnalisés pour le design, des extensions pour étendre les fonctionnalités, et des solutions de paiement en ligne sécurisées. Des compétences en design web et en optimisation de contenu ont été utilisées pour améliorer l'expérience utilisateur.",
    pictures: [],
    tech: [WORDPRESS],
  }

];




window.addEventListener("load", function () {

  let projrecenthtml = document.getElementById('projetrecent');
  let projrecentId = Math.floor(Math.random() * 2);
  console.log(projrecentId);
  let projrecent = projets[projrecentId];

  let projrecentname = document.createElement('h4');
  projrecentname.textContent = projrecent.name;

  let projetrecentpicture = document.createElement('img');
  projetrecentpicture.src = projrecent.pictures[0];

  let projrecentresume = document.createElement('p');
  projrecentresume.textContent = projrecent.summary;

  projrecenthtml.appendChild(projrecentname);
  projrecenthtml.appendChild(projetrecentpicture);
  projrecenthtml.appendChild(projrecentresume);

  const projectsContainer = document.getElementById('projectscontainer');

  // Parcourir tous les projets
  projets.forEach(project => {


    /** creation des card de projet  */
    let projectId = creatid(project.id);

    let projectCard = document.createElement('div');
    projectCard.classList.add('card', 'text-center', 'shadow', 'mx-3', 'col-lg-4', 'col-md-6', 'mb-5');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = project.name;

    let resume = document.createElement('p');
    resume.classList.add('card-text');
    resume.textContent = project.summary;

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Voir plus';
    button.setAttribute('data-bs-toggle', 'modal');
    let htmlid = '#' + projectId;
    button.setAttribute('data-bs-target', htmlid);

    button.addEventListener('click', function () {
      let modal = document.querySelector(htmlid);
      let modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    });

    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer', 'bg-transparent', 'border-dark', 'text-center');

    let techContainer = document.createElement('div');
    techContainer.classList.add('d-flex', 'justify-content-center');

    /** creation des representation de technologie */
    project.tech.forEach(tech => {
      let techElement = document.createElement('div');
      techElement.classList.add('tech', 'me-2', 'mb-1');
      techElement.style.backgroundColor = tech.color;
      techElement.textContent = tech.key;
      techContainer.appendChild(techElement);
    });


    /** création du modal pour chaque projet */
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = projectId;
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-hidden', 'true');

    let modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-lg');

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalHeader.innerHTML = '<h5 class="modal-title">Titre du Projet</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';

    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    let img = document.createElement('img');
    img.src = project.pictures.length ? project.pictures[0] : 'assets/indisponible.png';
    img.classList.add('img-fluid', 'mb-3');
    let description = document.createElement('pre');
    description.textContent = project.description;
    modalBody.appendChild(img);
    modalBody.appendChild(description);

    let techContainermodal = document.createElement('div');
    techContainermodal.classList.add('d-flex', 'justify-content-center');

    /** creation des representation de technologie pour le modal*/
    project.tech.forEach(tech => {
      let techElement = document.createElement('div');
      techElement.classList.add('tech', 'mb-1');
      techElement.style.backgroundColor = tech.color;
      techElement.textContent = tech.key;
      techContainermodal.appendChild(techElement);
    });

    let modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer', 'bg-transparent', 'border-dark', 'text-center','justify-content-center');
    modalFooter.appendChild(techContainermodal);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    cardBody.appendChild(title);
    cardBody.appendChild(resume);
    cardBody.appendChild(button);

    cardFooter.appendChild(techContainer);

    projectCard.appendChild(cardBody);
    projectCard.appendChild(cardFooter);
    projectsContainer.appendChild(projectCard);
    document.body.appendChild(modal);
  });
  

  function creatid(id) {
    text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let a = text.substring(id, id + 1);
    return a;
  }

});


