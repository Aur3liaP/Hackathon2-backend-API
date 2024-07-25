const items = [
  {
    id: 1,
    nom: "Furby",
    description:
      "Ce petit animal de compagnie électronique est super interactif ! Il parle, bouge ses oreilles et peut même chanter !",
    argument_de_vente:
      "Un compagnon interactif qui réagit à ta voix et te divertit avec des expressions et des sons uniques.",
    image: "http://localhost:3310/static/furby(API).jpg",
    prix: 399,
    commentaires_client: [
      {
        nom_client: "Sophie",
        commentaire:
          "« J'adore mon Furby ! C'est trop marrant de le voir réagir quand je parle ou le touche. »",
      },
      {
        nom_client: "Julien",
        commentaire:
          "« Au début, c'était génial, mais parfois il devient un peu bruyant et ne cesse de parler ! »",
      },
    ],
  },
  {
    id: 2,
    nom: "Game Boy",
    description:
      "La Game Boy est une console de jeu portable qui te permet de jouer à tes jeux préférés partout où tu vas, comme *Tetris* et *Pokémon* !",
    argument_de_vente:
      "La première console de jeu portable qui t'offre des heures de divertissement avec des titres emblématiques, tout en étant facile à transporter.",
    image: "http://localhost:3310/static/Game-boy(API).jpg",
    prix: 699,
    commentaires_client: [
      {
        nom_client: "Claire",
        commentaire:
          "« La Game Boy est vraiment géniale pour passer le temps. C'est comme avoir une arcade dans ta poche ! »",
      },
      {
        nom_client: "Marc",
        commentaire:
          "« J'adore la Game Boy, mais il faut vraiment être sous la lumière pour voir l'écran correctement. »",
      },
    ],
  },
  {
    id: 3,
    nom: "Pog",
    description:
      "Les pogs sont des petits disques amusants que tu peux collectionner et utiliser pour jouer à des jeux passionnants avec tes amis !",
    argument_de_vente:
      "Un jeu de collection populaire qui encourage les échanges et les défis entre amis, tout en offrant une multitude de designs amusants.",
    image: "http://localhost:3310/static/POG(API).jpg",
    prix: 50,
    commentaires_client: [
      {
        nom_client: "Elodie",
        commentaire:
          "« Collectionner les pogs et jouer avec est super fun. J'en ai une grande boîte pleine ! »",
      },
      {
        nom_client: "Thomas",
        commentaire:
          "« C'est marrant, mais le jeu peut devenir un peu répétitif après un certain temps. »",
      },
    ],
  },
  {
    id: 4,
    nom: "Pez",
    description:
      "Les distributeurs PEZ sont des jouets amusants en forme de personnages qui distribuent des bonbons délicieux en forme de petites pastilles !",
    argument_de_vente:
      "Des distributeurs ludiques en forme de personnages célèbres qui rendent les bonbons encore plus amusants à manger.",
    image: "http://localhost:3310/static/pez-pikachu-orange(API).png",
    prix: 30,
    commentaires_client: [
      {
        nom_client: "Amélie",
        commentaire:
          "« J'adore les distributeurs PEZ ! Ils sont super pour collectionner et les bonbons sont délicieux. »",
      },
      {
        nom_client: "David",
        commentaire:
          "« Les bonbons PEZ sont parfois trop sucrés, mais c'est le distributeur qui est vraiment cool ! »",
      },
    ],
  },
  {
    id: 5,
    nom: "Tamagotchi",
    description:
      "Le Tamagotchi est un animal de compagnie virtuel que tu peux nourrir, jouer avec et soigner. C'est comme avoir un vrai animal de compagnie !",
    argument_de_vente:
      "Un animal de compagnie virtuel qui te permet de vivre l'expérience de l'entretien d'un animal tout en étant compact et portable.",
    image: "http://localhost:3310/static/Tamagochi.png",
    prix: 250,
    commentaires_client: [
      {
        nom_client: "Isabelle",
        commentaire:
          "« Mon Tamagotchi est devenu mon meilleur ami ! J'adore m'en occuper toute la journée. »",
      },
      {
        nom_client: "Alexandre",
        commentaire:
          "« C'est marrant au début, mais c'est un peu stressant d'avoir à toujours surveiller et nourrir mon Tamagotchi. »",
      },
    ],
  },
  {
    id: 6,
    nom: "Bipper",
    description:
      "Le bipper est un petit appareil qui t'envoie des alertes et des messages. C'est super pratique avant l'arrivée des téléphones portables !",
    argument_de_vente:
      "Un outil pratique pour recevoir des alertes et des messages instantanément, avant l'ère des téléphones mobiles.",
    image: "http://localhost:3310/static/Bipper3(API).jpg",
    prix: 150,
    commentaires_client: [
      {
        nom_client: "Nadine",
        commentaire:
          "« Le bipper est parfait pour recevoir des messages rapidement, même si c'est un peu limité. »",
      },
      {
        nom_client: "Philippe",
        commentaire:
          "« Vraiment pratique pour passer un message rapidement. Cependant, mon ex Marlène n'a pas trop apprécié... »",
      },
    ],
  },
  {
    id: 7,
    nom: "Minitel",
    description:
      "Le Minitel est un terminal qui te permet d'accéder à des services en ligne comme les annuaires téléphoniques et même de faire des réservations !",
    argument_de_vente:
      "Un précurseur d'Internet qui te permet d'accéder à divers services en ligne depuis le confort de chez toi.",
    image: "http://localhost:3310/static/minitel2(API).png",
    prix: 2000,
    commentaires_client: [
      {
        nom_client: "Monique",
        commentaire:
          "« Le nouveau Minitel est une vraie révolution. On peut avoir toutes les informations dont on a besoin. »",
      },
      {
        nom_client: "Bernard",
        commentaire:
          "« C'est un peu lent et les services sont basiques, mais c'est vraiment cool. »",
      },
    ],
  },
  {
    id: 8,
    nom: "Magnétoscope / VHS",
    description:
      "Le magnétoscope est parfait pour regarder et enregistrer des films et des émissions sur des cassettes VHS. C'est super pratique pour le divertissement à la maison !",
    argument_de_vente:
      "Un dispositif essentiel pour enregistrer et visionner des émissions et des films à la demande, tout en offrant une flexibilité de visionnage.",
    image: "http://localhost:3310/static/magnetoscope(API).jpg",
    prix: 1500,
    commentaires_client: [
      {
        nom_client: "Elena",
        commentaire:
          "« Le magnétoscope est indispensable pour enregistrer tes émissions préférées et regarder des films à la maison. »",
      },
      {
        nom_client: "Laurent",
        commentaire:
          "« La qualité des VHS n'est pas toujours top, mais c'est pratique pour conserver tes films préférés. Attention à les ranger dans la bonne boîte lol »",
      },
    ],
  },
  {
    id: 9,
    nom: "Walkman",
    description:
      "Le Walkman est un lecteur de cassettes portable qui te permet d'écouter de la musique où que tu sois. Parfait pour les déplacements !",
    argument_de_vente:
      "Le premier lecteur de musique portable qui te permet de profiter de ta musique préférée en déplacement, avec une qualité sonore appréciable.",
    image: "http://localhost:3310/static/lecteurcd(API).png",
    prix: 400,
    commentaires_client: [
      {
        nom_client: "Julie",
        commentaire:
          "« Le Walkman est génial pour écouter de la musique en déplacement. Il est compact et pratique. »",
      },
      {
        nom_client: "Sébastien",
        commentaire:
          "« Les cassettes peuvent s'user avec le temps, mais c'est un excellent moyen de profiter de ta musique préférée partout. »",
      },
    ],
  },
  {
    id: 10,
    nom: "Nokia 3310",
    description:
      "Le Nokia 3310 est un téléphone mobile ultra-résistant avec une batterie qui dure des semaines. Idéal pour rester en contact sans souci !",
    argument_de_vente:
      "Un téléphone mobile robuste et fiable avec une batterie de longue durée, parfait pour une utilisation quotidienne sans tracas.",
    image: "http://localhost:3310/static/nokia-3310(API).png",
    prix: 1200,
    commentaires_client: [
      {
        nom_client: "Catherine",
        commentaire:
          "« Le Nokia 3310 est presque indestructible et la batterie dure une éternité ! »",
      },
      {
        nom_client: "Gérard",
        commentaire:
          "« Je l'ai lancé contre un mur, et maintenant il y a un trou. Le téléphone n'a rien. »",
      },
    ],
  },
  {
    id: 11,
    nom: "PlayStation",
    description:
      "La PlayStation est la première console de jeu de Sony avec des graphismes en 3D impressionnants et des jeux incroyables comme *Final Fantasy VII*. C'est le futur du jeu vidéo !",
    argument_de_vente:
      "Une console révolutionnaire qui apporte des graphismes 3D époustouflants et une bibliothèque de jeux impressionnante, redéfinissant le divertissement à domicile.",
    image: "http://localhost:3310/static/ps1(API).png",
    prix: 1999,
    commentaires_client: [
      {
        nom_client: "Lucie",
        commentaire:
          "« La PlayStation est incroyable ! Les graphismes sont époustouflants et les jeux sont passionnants. »",
      },
      {
        nom_client: "François",
        commentaire:
          "« Les temps de chargement peuvent être un peu longs, mais les jeux en valent vraiment la peine. »",
      },
    ],
  },
  {
    id: 12,
    nom: "TV tube cathodique",
    description:
      "La télévision à tube cathodique est le standard pour les émissions et les films avant l'arrivée des écrans plats. Elle offre une bonne qualité d'image pour son époque !",
    argument_de_vente:
      "Un téléviseur classique qui fournit une bonne qualité d'image et un divertissement visuel fiable avec les technologies de l'époque.",
    image: "http://localhost:3310/static/tv(API).png",
    prix: 3500,
    commentaires_client: [
      {
        nom_client: "Monique",
        commentaire:
          "« Les téléviseurs à tube cathodique sont bons pour regarder des films et des émissions, même s'ils prennent beaucoup de place. »",
      },
      {
        nom_client: "Patrick",
        commentaire:
          "« Les écrans à tube cathodique peuvent être encombrants, mais la qualité d'image est assez bonne pour l'époque. »",
      },
    ],
  },
  {
    id: 13,
    nom: "Pollypocket",
    description:
      "Les Polypocket sont des petites maisons ou véhicules miniatures avec des personnages et des accessoires que tu peux emporter partout !",
    argument_de_vente:
      "Des jouets miniatures qui combinent jeu de rôle et transportabilité, permettant aux enfants d'emporter leurs mondes imaginaires partout.",
    image: "http://localhost:3310/static/pollypocket(API).png",
    prix: 150,
    commentaires_client: [
      {
        nom_client: "Amandine",
        commentaire:
          "« Les Polypocket sont super amusants et faciles à emporter partout. J'adore les petites maisons et leurs accessoires ! »",
      },
      {
        nom_client: "Olivier",
        commentaire:
          "« Les détails sont super, mais certaines pièces peuvent se perdre facilement. »",
      },
    ],
  },
  {
    id: 14,
    nom: "Light Gun PS1",
    description:
      "Le Light Gun pour PlayStation 1 est un pistolet électronique utilisé pour les jeux de tir sur ton téléviseur. C'est une expérience de jeu unique !",
    argument_de_vente:
      "Un accessoire de jeu innovant qui offre une immersion accrue dans les jeux de tir, avec une interaction physique directe avec le téléviseur.",
    image: "http://localhost:3310/static/lightgun_1(API).png",
    prix: 250,
    commentaires_client: [
      {
        nom_client: "Chloé",
        commentaire:
          "« Le light gun est super amusant pour les jeux de tir, bien que la précision puisse varier en fonction de l'écran. »",
      },
      {
        nom_client: "Jérôme",
        commentaire:
          "« Les jeux compatibles sont limités, mais c'est une expérience divertissante et différente des autres jeux. »",
      },
    ],
  },
];

module.exports = items;
