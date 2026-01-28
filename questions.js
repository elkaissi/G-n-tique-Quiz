// ===== QUESTIONS DU QUIZ - BASÉES SUR LE PDF =====

const questions = [
    // CATÉGORIE : Introduction (2 questions)
    {
        id: 1,
        category: "introduction",
        question: "Qu'est-ce que l'information génétique selon le cours ?",
        image: "",
        options: [
            "L'ensemble des protéines contenues dans la cellule",
            "L'ensemble des informations contenues dans la cellule qui contrôlent les caractères héréditaires",
            "Les seules informations contenues dans le noyau",
            "Les caractéristiques physiques d'un organisme"
        ],
        correctAnswer: 1,
        explanation: "L'information génétique est définie comme l'ensemble des informations contenues dans la cellule et qui contrôlent les caractères héréditaires. Cette information est stockée dans l'ADN et détermine tous les traits héréditaires d'un organisme.",
        reference: "Page 2 : Définition de l'information génétique"
    },
    {
        id: 2,
        category: "introduction",
        question: "Qu'est-ce qu'un caractère héréditaire ?",
        image: "",
        options: [
            "Une caractéristique acquise pendant la vie d'un organisme",
            "Une caractéristique contrôlée uniquement par l'environnement",
            "Un trait transmis d'une génération à une autre (des parents à leur descendance)",
            "Une maladie génétique rare"
        ],
        correctAnswer: 2,
        explanation: "Un caractère héréditaire est une caractéristique ou un trait d'un organisme qui est transmis d'une génération à une autre, c'est-à-dire des parents à leur descendance. Ces caractères sont contrôlés par l'information génétique.",
        reference: "Page 2 : Définition d'un caractère héréditaire"
    },
    
    // CATÉGORIE : Localisation de l'information génétique (2 questions)
    {
        id: 3,
        category: "localisation",
        question: "Que montre l'expérience de mérotomie chez l'amibe ?",
        image: "",
        options: [
            "Que le cytoplasme est indispensable à la vie cellulaire",
            "Que le noyau est indispensable à la vie, la régénération et la division cellulaire",
            "Que les amibes peuvent survivre sans noyau pendant longtemps",
            "Que toutes les cellules se divisent de la même façon"
        ],
        correctAnswer: 1,
        explanation: "L'expérience de mérotomie montre que le fragment sans noyau dégénère et meurt, tandis que la partie contenant le noyau persiste, se développe et se divise. Cela démontre que le noyau est indispensable à la vie cellulaire.",
        reference: "Pages 7-8 : Expérience de section chez l'amibe"
    },
    {
        id: 4,
        category: "localisation",
        question: "Que conclut-on des expériences de greffe sur l'acétabulaire ?",
        image: "",
        options: [
            "Le cytoplasme détermine la forme du chapeau",
            "La forme du chapeau dépend du type de noyau présent dans le rhizoïde",
            "Les deux espèces d'acétabulaire ont le même type de noyau",
            "Le noyau n'a pas de rôle dans la morphologie de l'algue"
        ],
        correctAnswer: 1,
        explanation: "Les expériences de greffe croisée montrent que la forme du chapeau est déterminée par le type de noyau présent dans le rhizoïde, et non par le type d'algue dont le rhizoïde est issu. Le noyau contient donc l'information génétique.",
        reference: "Page 11 : Expérience de greffe chez l'acétabulaire"
    },
    
    // CATÉGORIE : Mitose (4 questions)
    {
        id: 5,
        category: "mitose",
        question: "Quelle est la définition correcte de la mitose ?",
        image: "",
        options: [
            "Division cellulaire qui réduit de moitié le nombre de chromosomes",
            "Multiplication cellulaire où une cellule mère donne deux cellules filles identiques",
            "Processus de différenciation cellulaire",
            "Division réservée uniquement aux cellules reproductrices"
        ],
        correctAnswer: 1,
        explanation: "La mitose est une multiplication cellulaire où une cellule mère donne deux cellules filles génétiquement identiques. C'est un mécanisme de division équationnelle qui maintient le nombre de chromosomes.",
        reference: "Page 18 : Définition de la mitose"
    },
    {
        id: 6,
        category: "mitose",
        question: "Quelle phase de la mitose est caractérisée par la formation de la plaque équatoriale ?",
        image: "",
        options: [
            "Prophase",
            "Métaphase",
            "Anaphase",
            "Téléphase"
        ],
        correctAnswer: 1,
        explanation: "En métaphase, les chromosomes atteignent leur condensation maximale et se regroupent à l'équateur de la cellule, formant ainsi la plaque équatoriale. C'est le moment où les chromosomes sont alignés et bien visibles.",
        reference: "Page 18 : Caractéristiques de la métaphase"
    },
    {
        id: 7,
        category: "mitose",
        question: "Que se passe-t-il pendant l'anaphase de la mitose ?",
        image: "",
        options: [
            "Les chromosomes se condensent et deviennent visibles",
            "Le centromère se fissure et les chromatides migrent vers les pôles opposés",
            "L'enveloppe nucléaire se reforme autour des chromosomes",
            "La chromatine se décondense et retourne à son état initial"
        ],
        correctAnswer: 1,
        explanation: "Pendant l'anaphase, le centromère de chaque chromosome se fissure (clivage), les chromatides sœurs se séparent et migrent vers les pôles opposés de la cellule. C'est l'ascension polaire des chromosomes.",
        reference: "Page 19 : Description de l'anaphase"
    },
    {
        id: 8,
        category: "mitose",
        question: "Quelle est la principale différence entre la mitose végétale et la mitose animale ?",
        image: "",
        options: [
            "La présence de centrosomes et d'aster uniquement chez les cellules animales",
            "La division du cytoplasme par étranglement chez l'animal vs construction d'une paroi chez le végétal",
            "Les chromosomes sont différents dans les deux types de cellules",
            "Il n'y a aucune différence entre les deux processus"
        ],
        correctAnswer: 1,
        explanation: "La mitose végétale diffère principalement par l'absence de centrosomes (remplacés par des calottes polaires) et par le mode de division cytoplasmique : étranglement chez l'animal, construction d'une nouvelle paroi cellulosique chez le végétal.",
        reference: "Page 20 : Comparaison mitose végétale/animale"
    },
    
    // CATÉGORIE : Cycle cellulaire (2 questions)
    {
        id: 9,
        category: "cycle_cellulaire",
        question: "Qu'est-ce que le cycle cellulaire ?",
        image: "",
        options: [
            "Uniquement la phase de division cellulaire (mitose)",
            "L'interphase + la mitose (ensemble des étapes de croissance et division)",
            "Uniquement la phase S de synthèse d'ADN",
            "La période entre deux divisions cellulaires"
        ],
        correctAnswer: 1,
        explanation: "Le cycle cellulaire représente l'ensemble des étapes par lesquelles passe une cellule pour croître, dupliquer son matériel génétique et se diviser en deux cellules filles. Il comprend donc l'interphase et la mitose.",
        reference: "Page 23 : Définition du cycle cellulaire"
    },
    {
        id: 10,
        category: "cycle_cellulaire",
        question: "Que se passe-t-il pendant la phase S de l'interphase ?",
        image: "",
        options: [
            "La cellule grandit et augmente de volume",
            "Duplication des nucléofilaments de chromatine (synthèse d'ADN)",
            "Préparation à la division cellulaire",
            "Synthèse intensive de protéines"
        ],
        correctAnswer: 1,
        explanation: "La phase S (phase de synthèse) est caractérisée par la duplication des nucléofilaments de chromatine, c'est-à-dire la réplication de l'ADN. Chaque chromosome passe d'une à deux chromatides.",
        reference: "Page 23 : Description de la phase S"
    },
    
    // CATÉGORIE : Expériences historiques (2 questions)
    {
        id: 11,
        category: "experiences",
        question: "Que montre l'expérience de Griffith avec les pneumocoques ?",
        image: "",
        options: [
            "Que les bactéries S tuées peuvent ressusciter et redevenir vivantes",
            "L'existence d'un 'principe transformant' capable de transformer R en S",
            "Que toutes les bactéries sont également mortelles",
            "Que la capsule des bactéries n'a pas d'importance dans la virulence"
        ],
        correctAnswer: 1,
        explanation: "Griffith découvre qu'en présence de bactéries S tuées, les bactéries R vivantes se transforment en bactéries S vivantes et mortelles. Cela révèle l'existence d'une substance (principe transformant) responsable de cette transformation.",
        reference: "Pages 26-27 : Expérience de Griffith"
    },
    {
        id: 12,
        category: "experiences",
        question: "Quelle est la nature chimique du principe transformant selon Avery, MacLeod et McCarthy ?",
        image: "",
        options: [
            "Protéines",
            "ARN (acide ribonucléique)",
            "ADN (acide désoxyribonucléique)",
            "Lipides membranaires"
        ],
        correctAnswer: 2,
        explanation: "En 1944, Avery, MacLeod et McCarthy démontrent que c'est l'ADN qui est responsable de la transformation des pneumocoques R en S. L'addition de désoxyribonucléase (enzyme détruisant l'ADN) empêche cette transformation.",
        reference: "Page 29 : Expérience d'Avery, MacLeod et McCarthy"
    },
    
    // CATÉGORIE : Structure de l'ADN (5 questions)
    {
        id: 13,
        category: "structure_adn",
        question: "Quels sont les trois composants d'un nucléotide d'ADN ?",
        image: "",
        options: [
            "Glucose, groupe phosphate, base azotée",
            "Désoxyribose, acide phosphorique, base azotée",
            "Ribose, groupe sulfate, base azotée",
            "Désoxyribose, acide sulfurique, base azotée"
        ],
        correctAnswer: 1,
        explanation: "Un nucléotide d'ADN est composé de trois éléments : un sucre pentose (le désoxyribose C5H10O4), un acide phosphorique (H3PO4), et une base azotée (A, T, C ou G).",
        reference: "Page 32 : Constituants chimiques de l'ADN"
    },
    {
        id: 14,
        category: "structure_adn",
        question: "Quelles sont les bases puriques de l'ADN ?",
        image: "",
        options: [
            "Adénine et Thymine",
            "Guanine et Cytosine",
            "Adénine et Guanine (bases à double anneau)",
            "Thymine et Cytosine (bases à anneau unique)"
        ],
        correctAnswer: 2,
        explanation: "Les bases puriques ont une structure à double anneau. Dans l'ADN, ce sont l'adénine (A) et la guanine (G). Les bases pyrimidiques (simple anneau) sont la thymine (T) et la cytosine (C).",
        reference: "Page 33 : Bases puriques et pyrimidiques"
    },
    {
        id: 15,
        category: "structure_adn",
        question: "Que montre la règle de Chargaff concernant la composition de l'ADN ?",
        image: "",
        options: [
            "A = C et T = G dans toutes les espèces",
            "A = T et C = G (complémentarité des bases)",
            "A + T = C + G dans tous les cas",
            "Les proportions des bases sont aléatoires et variables"
        ],
        correctAnswer: 1,
        explanation: "La règle de Chargaff établit que dans l'ADN, la quantité d'adénine est égale à celle de thymine (A = T), et la quantité de guanine est égale à celle de cytosine (C = G). Cela reflète la complémentarité des bases.",
        reference: "Page 35 : Règle de Chargaff"
    },
    {
        id: 16,
        category: "structure_adn",
        question: "Combien de liaisons hydrogène lient les paires de bases A-T et G-C respectivement ?",
        image: "",
        options: [
            "1 et 2 liaisons hydrogène",
            "2 et 3 liaisons hydrogène",
            "3 et 2 liaisons hydrogène",
            "2 et 2 liaisons hydrogène (identique)"
        ],
        correctAnswer: 1,
        explanation: "Dans la double hélice d'ADN, l'adénine et la thymine sont liées par 2 liaisons hydrogène, tandis que la guanine et la cytosine sont liées par 3 liaisons hydrogène, ce qui rend la paire G-C plus stable.",
        reference: "Page 37 : Liaisons hydrogène entre bases"
    },
    {
        id: 17,
        category: "structure_adn",
        question: "Quelle est l'orientation des deux brins d'ADN dans la double hélice ?",
        image: "",
        options: [
            "Les deux brins sont parallèles et vont dans le même sens (5'→3')",
            "Les deux brins sont antiparallèles : un brin 5'→3', l'autre 3'→5'",
            "Les brins sont enroulés de façon aléatoire",
            "L'orientation dépend de l'espèce considérée"
        ],
        correctAnswer: 1,
        explanation: "Les deux brins de l'ADN sont antiparallèles : l'un est orienté 5'→3', l'autre est orienté 3'→5'. Cette antiparallélisme est essentiel pour la réplication et la stabilité de la molécule.",
        reference: "Page 37 : Structure antiparallèle de l'ADN"
    },
    
    // CATÉGORIE : Chromosomes et chromatine (2 questions)
    {
        id: 18,
        category: "chromosomes",
        question: "Quelle est la relation entre la chromatine et les chromosomes ?",
        image: "",
        options: [
            "Ce sont deux structures totalement différentes et sans relation",
            "La chromatine est la forme décondensée, les chromosomes la forme condensée du même matériel",
            "Les chromosomes n'existent qu'en interphase, la chromatine qu'en division",
            "La chromatine est présente uniquement dans les cellules animales"
        ],
        correctAnswer: 1,
        explanation: "La chromatine et les chromosomes constituent le même matériel génétique mais sous des états structuraux différents : chromatine (décondensée) en interphase, chromosomes (condensés) pendant la division cellulaire.",
        reference: "Page 40 : Relation chromatine/chromosomes"
    },
    {
        id: 19,
        category: "chromosomes",
        question: "Qu'est-ce qu'un nucléosome ?",
        image: "",
        options: [
            "Un type particulier de chromosome métaphasique",
            "Une molécule d'ADN seule sans protéines associées",
            "L'enroulement d'ADN autour d'un octamère d'histones",
            "Un autre nom pour le centromère"
        ],
        correctAnswer: 2,
        explanation: "Le nucléosome est l'unité fondamentale de la chromatine. Il correspond à l'enroulement d'une molécule d'ADN (environ 146 paires de bases) autour d'un cœur protéique formé de 8 histones (octamère).",
        reference: "Page 40 : Structure du nucléosome"
    },
    
    // CATÉGORIE : Réplication de l'ADN (5 questions)
    {
        id: 20,
        category: "replication",
        question: "Quand se produit la réplication de l'ADN dans le cycle cellulaire ?",
        image: "",
        options: [
            "Phase G1 (première phase de croissance)",
            "Phase S (phase de synthèse)",
            "Phase G2 (deuxième phase de croissance)",
            "Pendant la mitose (phase M)"
        ],
        correctAnswer: 1,
        explanation: "La réplication de l'ADN se produit exclusivement pendant la phase S (Synthèse) de l'interphase. C'est à ce moment que la quantité d'ADN double, passant de la valeur q à 2q.",
        reference: "Page 42 : Réplication pendant la phase S"
    },
    {
        id: 21,
        category: "replication",
        question: "Que montrent les expériences de Meselson et Stahl sur la réplication de l'ADN ?",
        image: "",
        options: [
            "La réplication est conservative (brins parents restent ensemble)",
            "La réplication est semi-conservative (chaque brin sert de matrice)",
            "La réplication est dispersive (fragments mélangés)",
            "L'ADN ne se réplique pas, il est synthétisé de novo"
        ],
        correctAnswer: 1,
        explanation: "Meselson et Stahl démontrent en 1958 que la réplication de l'ADN est semi-conservative : chaque brin de la molécule mère sert de matrice pour la synthèse d'un brin complémentaire. Chaque molécule fille contient un brin ancien et un brin nouveau.",
        reference: "Pages 47-48 : Expérience de Meselson et Stahl"
    },
    {
        id: 22,
        category: "replication",
        question: "Quelle enzyme est responsable de la séparation des brins d'ADN au début de la réplication ?",
        image: "",
        options: [
            "ADN polymérase (synthétise le nouvel ADN)",
            "Hélicase (dénoue la double hélice)",
            "Ligase (lie les fragments d'Okazaki)",
            "Primase (synthétise l'amorce ARN)"
        ],
        correctAnswer: 1,
        explanation: "L'hélicase est l'enzyme qui casse les liaisons hydrogène entre les bases complémentaires, permettant ainsi la séparation et l'ouverture des deux brins d'ADN et la formation des yeux de réplication.",
        reference: "Page 50 : Rôle de l'hélicase"
    },
    {
        id: 23,
        category: "replication",
        question: "Pourquoi la synthèse d'ADN est-elle discontinue sur l'un des brins lors de la réplication ?",
        image: "",
        options: [
            "À cause de l'ADN polymérase qui ne fonctionne que dans le sens 5'→3'",
            "À cause de fréquentes mutations qui interrompent la synthèse",
            "Parce que l'ADN est trop long pour être synthétisé en continu",
            "C'est une erreur du processus de réplication"
        ],
        correctAnswer: 0,
        explanation: "L'ADN polymérase ne peut ajouter des nucléotides que dans le sens 5'→3'. Sur le brin 3'→5' (brin retardé), la synthèse doit se faire de manière discontinue, par fragments d'Okazaki.",
        reference: "Page 50 : Synthèse discontinue sur brin retardé"
    },
    {
        id: 24,
        category: "replication",
        question: "Quelle enzyme relie les fragments d'Okazaki sur le brin retardé ?",
        image: "",
        options: [
            "Hélicase (ouvre la double hélice)",
            "ADN polymérase (ajoute des nucléotides)",
            "Ligase (forme des liaisons phosphodiester)",
            "Topoisomérase (relâche la superstructure)"
        ],
        correctAnswer: 2,
        explanation: "La ligase est l'enzyme qui catalyse la formation de liaisons phosphodiester entre les fragments d'Okazaki adjacents, permettant ainsi de former un brin continu d'ADN sur le brin retardé.",
        reference: "Page 51 : Rôle de la ligase"
    },
    
    // CATÉGORIE : Synthèse (6 questions)
    {
        id: 25,
        category: "synthese",
        question: "Quel est le support moléculaire de l'information génétique ?",
        image: "",
        options: [
            "Les protéines (notamment les histones)",
            "L'ARN (acide ribonucléique)",
            "L'ADN (acide désoxyribonucléique)",
            "Les lipides membranaires"
        ],
        correctAnswer: 2,
        explanation: "L'ADN est le support moléculaire de l'information génétique. Les expériences de transformation bactérienne (Griffith, Avery) ont démontré que c'est l'ADN qui porte l'information héréditaire.",
        reference: "Page 30 : L'ADN support de l'information génétique"
    },
    {
        id: 26,
        category: "synthese",
        question: "Comment s'appelle la région de la racine où se produisent les mitoses ?",
        image: "",
        options: [
            "Zone d'élongation (où les cellules s'allongent)",
            "Zone de maturation (où les cellules se différencient)",
            "Méristème racinaire (zone de croissance)",
            "Cofre apical (extrémité de la racine)"
        ],
        correctAnswer: 2,
        explanation: "Le méristème racinaire est la zone de croissance située dans la zone subapicale de la racine. C'est à cet endroit que les cellules se divisent activement par mitose, permettant la croissance de la racine.",
        reference: "Page 12 : Méristème racinaire"
    },
    {
        id: 27,
        category: "synthese",
        question: "Que représente la relation (A+C)/(T+G) dans l'ADN ?",
        image: "",
        options: [
            "Elle varie considérablement selon les espèces",
            "Elle est toujours égale à 1 (car A=T et C=G)",
            "Elle mesure le taux de mutation de l'ADN",
            "Elle indique le pourcentage de paires G-C"
        ],
        correctAnswer: 1,
        explanation: "Puisque A = T et C = G (règle de Chargaff), alors A + C = T + G, donc (A+C)/(T+G) = 1. Cette relation est constante chez toutes les espèces et reflète la complémentarité des bases.",
        reference: "Page 35 : Relation (A+C)/(T+G)"
    },
    {
        id: 28,
        category: "synthese",
        question: "Quelle coloration spécifique permet de visualiser l'ADN au microscope ?",
        image: "",
        options: [
            "Coloration au vert d'iode (pour l'amidon)",
            "Réaction de Schiff (technique de Feulgen)",
            "Bleu de méthylène (coloration générale)",
            "Rouge Congo (pour la cellulose)"
        ],
        correctAnswer: 1,
        explanation: "La technique de Feulgen utilise le réactif de Schiff pour colorer spécifiquement l'ADN en rouge-violet. C'est une coloration cytochimique qui permet de visualiser les chromosomes et l'ADN.",
        reference: "Page 31 : Technique de Feulgen pour l'ADN"
    },
    {
        id: 29,
        category: "synthese",
        question: "Quel événement essentiel caractérise la phase S du cycle cellulaire ?",
        image: "",
        options: [
            "Croissance cellulaire et augmentation de volume",
            "Duplication des nucléofilaments de chromatine (réplication)",
            "Préparation à la division (synthèse de tubuline)",
            "Condensation des chromosomes en prophase"
        ],
        correctAnswer: 1,
        explanation: "L'événement majeur de la phase S est la duplication des nucléofilaments de chromatine, c'est-à-dire la réplication semi-conservative de l'ADN. Les chromosomes passent d'une à deux chromatides.",
        reference: "Page 24 : Événement de la phase S"
    },
    {
        id: 30,
        category: "synthese",
        question: "Comment appelle-t-on la structure formée par l'ADN associé aux histones ?",
        image: "",
        options: [
            "Chromosome métaphasique",
            "Chromatide (une des deux unités d'un chromosome)",
            "Nucléofilament (fibre de chromatine)",
            "Centromère (point de constriction)"
        ],
        correctAnswer: 2,
        explanation: "Le nucléofilament (ou fibre de chromatine) est la structure résultant de l'association de l'ADN avec les protéines histones. C'est la forme décondensée du matériel génétique en interphase.",
        reference: "Page 40 : Structure du nucléofilament"
    }
];

// Catégories avec noms affichables
const categories = {
    "all": "Toutes les questions",
    "introduction": "Introduction et concepts de base",
    "localisation": "Localisation de l'information génétique",
    "mitose": "La mitose (division cellulaire)",
    "cycle_cellulaire": "Cycle cellulaire et interphase",
    "experiences": "Expériences historiques",
    "structure_adn": "Structure de l'ADN",
    "chromosomes": "Chromosomes et chromatine",
    "replication": "Réplication de l'ADN",
    "synthese": "Synthèse et applications"
};