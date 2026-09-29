import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "avene-creme-solaire-teintee-unifiant-spf50-50ml",
    identite: [
      "Crème solaire teintée pour le visage, indice de protection très élevé SPF50+, destinée aux peaux sensibles et intolérantes au soleil. La formule associe protection solaire et effet unifiant immédiat sur le teint, masquant les rougeurs sans épaisseur de maquillage. Texture crème non grasse, base Eau Thermale Avène. S'inscrit dans la gamme solaire visage de la maison dédiée aux peaux réactives.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Format", valeur: "Crème teintée" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Type de peau", valeur: "Sensible, intolérante au soleil" },
    ],
    usage: [
      "S'applique le matin en dernière étape de la routine, en couche généreuse sur le visage et le cou, à renouveler toutes les deux heures en cas d'exposition prolongée ou après une baignade. Peut remplacer un fond de teint léger les jours de forte exposition.",
    ],
    positionnement: [
      "Cette crème s'adresse aux peaux qui rougissent ou réagissent mal au soleil et cherchent, en un seul geste, protection et unification du teint. Elle convient moins à qui cherche une couvrance de maquillage marquée ou une teinte modulable, une seule nuance étant proposée.",
    ],
    faq: [
      {
        question: "Cette crème remplace-t-elle un fond de teint ?",
        reponse:
          "Elle offre un effet unifiant léger, pas la couvrance d'un fond de teint. Elle convient pour un teint plus frais au quotidien, mais un maquillage classique reste nécessaire pour masquer des imperfections marquées.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, elle s'applique en dernière étape de soin avant un maquillage léger. Il vaut mieux laisser le produit pénétrer quelques minutes avant d'appliquer une poudre ou un fond de teint par-dessus.",
      },
    ],
  },
  {
    slug: "avene-creme-teintee-spf50-50ml",
    identite: [
      "Version teintée de la crème solaire visage Avène, SPF50+, formulée pour les peaux sensibles et intolérantes au soleil. La teinte, unique et dite universelle, s'ajuste visuellement à différentes carnations en unifiant le teint à l'application. Texture crème non comédogène, à base d'Eau Thermale Avène, pensée pour un usage quotidien sous exposition modérée à forte.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Teinte", valeur: "Universelle" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Texture", valeur: "Crème" },
    ],
    usage: [
      "Application quotidienne le matin, en dernière étape avant exposition, sur visage et cou nettoyés. Renouveler l'application toutes les deux heures en cas d'exposition prolongée, de baignade ou de transpiration importante.",
    ],
    positionnement: [
      "Face aux fluides solaires non teintés de la même gamme, cette crème convient à qui veut unifier son teint sans ajouter d'étape maquillage. Elle apporte moins de matité qu'un fluide dédié aux peaux grasses, qui lui préféreront une texture plus légère en été.",
    ],
    faq: [
      {
        question: "La teinte convient-elle à toutes les carnations ?",
        reponse:
          "Elle est annoncée comme universelle et s'ajuste visuellement selon la carnation, mais l'effet reste plus net sur les teints clairs à intermédiaires. Sur une peau très mate, l'effet unifiant peut être plus discret.",
      },
      {
        question: "Peut-on l'utiliser tous les jours, même sans exposition longue ?",
        reponse:
          "Oui, elle convient à un usage quotidien de protection urbaine, en plus de son usage lors d'une exposition solaire volontaire.",
      },
    ],
  },
  {
    slug: "avene-demaquillant-yeux-douceur-125ml",
    identite: [
      "Démaquillant pour les yeux, formulé pour les yeux sensibles et les porteurs de lentilles de contact. Retire le maquillage waterproof et les résidus de mascara sans frotter, à base d'Eau Thermale Avène. Format de 125 ml pensé pour un usage quotidien ciblé sur le contour de l'œil, zone la plus fine et la plus réactive du visage.",
    ],
    faits: [
      { libelle: "Zone", valeur: "Contour des yeux" },
      { libelle: "Contenance", valeur: "125 ml" },
      { libelle: "Tolérance", valeur: "Yeux sensibles, lentilles de contact" },
      { libelle: "Formule", valeur: "Sans savon" },
    ],
    usage: [
      "Imbiber un coton et le laisser poser quelques secondes sur la paupière fermée avant de retirer le maquillage sans frotter. Utiliser matin ou soir avant le nettoyage du reste du visage, jamais directement au contact de l'œil ouvert.",
    ],
    positionnement: [
      "Ce démaquillant cible spécifiquement la zone des yeux, plus fragile que le reste du visage, là où un nettoyant visage classique peut irriter. Il ne remplace pas un nettoyant global pour le reste du visage et s'utilise en complément, pas en soin unique.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser avec des lentilles de contact ?",
        reponse:
          "Oui, la formule est étudiée pour les yeux sensibles et les porteurs de lentilles, mais il est conseillé de retirer les lentilles avant le démaquillage puis de les remettre après rinçage.",
      },
      {
        question: "Retire-t-il le mascara waterproof ?",
        reponse:
          "Oui, c'est l'un des usages principaux de ce type de démaquillant, à condition de laisser le produit agir quelques secondes avant d'essuyer sans frotter.",
      },
    ],
  },
  {
    slug: "avene-dermabsolu-serum-concentre-resculptant-30ml",
    identite: [
      "Sérum anti-âge de la gamme DermAbsolu d'Avène, positionné sur le resculptant : perte de fermeté, relâchement des contours, volumes affaissés. Texture sérum concentrée, à appliquer avant la crème de la même gamme, destinée aux peaux matures marquées par plusieurs signes d'âge cumulés. Format 30 ml, pensé pour un usage quotidien.",
    ],
    faits: [
      { libelle: "Format", valeur: "Sérum concentré" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Gamme", valeur: "DermAbsolu" },
      { libelle: "Cible", valeur: "Signes d'âge cumulés, fermeté" },
    ],
    usage: [
      "Appliquer matin et/ou soir sur peau nettoyée, avant la crème de jour ou de nuit, en mouvements ascendants sur le visage et le cou. Laisser pénétrer avant d'appliquer la suite de la routine.",
    ],
    positionnement: [
      "Ce sérum vise les peaux qui cumulent plusieurs signes de vieillissement plutôt qu'un seul, à la différence d'un soin ciblé sur les seules rides. Il convient moins à une peau jeune cherchant un soin préventif léger, pour qui une texture plus fine suffit.",
    ],
    faq: [
      {
        question: "Peut-on l'associer à d'autres sérums (vitamine C, rétinol) ?",
        reponse:
          "Il peut se combiner à d'autres actifs, mais mieux vaut espacer les applications matin et soir plutôt que de superposer plusieurs sérums concentrés en même temps, pour limiter le risque d'irritation.",
      },
      {
        question: "À partir de quel âge est-il pertinent ?",
        reponse:
          "Il s'adresse aux peaux déjà marquées par un relâchement visible, en général à partir de la quarantaine, plutôt qu'en prévention précoce.",
      },
    ],
  },
  {
    slug: "avene-fluide-mineral-teinte-spf-50-40ml",
    identite: [
      "Fluide solaire visage à filtres minéraux, teinté, SPF50+, conçu pour les peaux sensibles et intolérantes aux filtres chimiques. Texture fluide légère, teinte unique s'adaptant à la carnation. Les filtres minéraux sont réputés mieux tolérés sur peau réactive ou après un acte dermatologique récent. Format 40 ml.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Filtres", valeur: "Minéraux" },
      { libelle: "Format", valeur: "Fluide teinté" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "Appliquer le matin en dernière étape avant exposition, en couche suffisante sur le visage et le cou. Bien répartir immédiatement après application, les filtres minéraux pouvant laisser un fini plus visible que les filtres chimiques.",
    ],
    positionnement: [
      "Ce fluide s'adresse aux peaux qui ne tolèrent pas les filtres chimiques, notamment après un peeling, un laser ou en cas de rosacée, et cherchent un écran mieux toléré. Il peut laisser un fini plus marqué qu'un fluide à filtres chimiques, moins discret sur peau mate.",
    ],
    faq: [
      {
        question: "Quelle différence avec un fluide solaire classique de la gamme ?",
        reponse:
          "La différence tient aux filtres : minéraux ici, plus adaptés aux peaux réactives ou post-actes dermatologiques, contre des filtres chimiques dans les fluides solaires standards de la gamme, généralement plus discrets.",
      },
      {
        question: "Laisse-t-il un film blanc ?",
        reponse:
          "Les filtres minéraux peuvent laisser une trace plus visible qu'un filtre chimique, surtout sur peau mate. Une application en couche fine et bien étalée limite cet effet.",
      },
    ],
  },
  {
    slug: "avene-fluide-solaire-spf50-50ml",
    identite: [
      "Fluide solaire visage non teinté, SPF50+, formulé pour les peaux grasses ou mixtes à tendance grasse. Texture fluide à fini mat, non comédogène, pensée pour ne pas alourdir ni faire briller la peau sous exposition. Base Eau Thermale Avène. Fait partie de la gamme solaire visage dédiée aux peaux à problèmes de brillance.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Fini", valeur: "Mat" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Formule", valeur: "Non comédogène" },
    ],
    usage: [
      "Appliquer le matin en dernière étape avant exposition, sur peau nettoyée. Renouveler toutes les deux heures en cas d'exposition prolongée. Peut s'utiliser seul ou sous un maquillage léger grâce à son fini mat.",
    ],
    positionnement: [
      "Ce fluide convient aux peaux grasses qui rejettent les crèmes solaires classiques trop riches ou brillantes. Il apporte moins de confort qu'une crème solaire sur une peau sèche, qui lui préférera une texture plus nourrissante.",
    ],
    faq: [
      {
        question: "Convient-il aux peaux à tendance acnéique ?",
        reponse:
          "Sa formule non comédogène le rend adapté aux peaux à imperfections, mais il ne traite pas l'acné : il s'agit d'une protection solaire pensée pour ne pas aggraver les points noirs ni les boutons.",
      },
      {
        question: "Peut-il remplacer une crème hydratante le matin ?",
        reponse:
          "Non, il protège du soleil mais n'a pas de vocation hydratante forte. Sur peau sèche, une crème hydratante reste nécessaire avant son application.",
      },
    ],
  },
  {
    slug: "avene-fluide-teinte-50-50ml",
    identite: [
      "Version teintée du fluide solaire visage Avène pour peaux grasses, SPF50+. Fini mat, teinte unique unifiante, texture fluide non comédogène. Permet d'associer protection solaire et léger effet teint en un seul geste, sans ajouter de couche de maquillage. Pensé pour les peaux mixtes à grasses qui supportent mal les textures riches.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Fini", valeur: "Mat" },
      { libelle: "Teinte", valeur: "Universelle" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "Appliquer le matin en dernière étape, sur peau nettoyée, en couche homogène sur visage et cou. Renouveler l'application en cas d'exposition prolongée ou de transpiration importante.",
    ],
    positionnement: [
      "Face au fluide non teinté de la même gamme, celui-ci ajoute un effet unifiant du teint sans matifiant supplémentaire à appliquer par-dessus. Il convient moins à qui cherche une teinte modulable ou une forte couvrance.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser à la place d'un fond de teint sur peau grasse ?",
        reponse:
          "Il peut suffire pour un usage quotidien léger grâce à son fini mat et sa teinte unifiante, mais il n'offre pas la couvrance d'un fond de teint pour masquer des imperfections marquées.",
      },
      {
        question: "Tient-il toute la journée sur peau grasse ?",
        reponse:
          "Le fini mat limite les brillances sans les empêcher totalement en fin de journée sur peau très grasse ; une poudre matifiante en renfort peut être utile.",
      },
    ],
  },
  {
    slug: "avene-fluide-ultra-leger-penetration-3sec-spf50-50ml",
    identite: [
      "Fluide solaire visage à absorption rapide annoncée, SPF50+, non teinté. Texture ultra-légère destinée aux peaux grasses ou mixtes cherchant une protection solaire sans sensation grasse ni long temps de pose avant le maquillage. S'inscrit dans la gamme solaire visage peau grasse d'Avène.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "Ultra-légère" },
      { libelle: "Absorption", valeur: "Rapide" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "Appliquer le matin en dernière étape, laisser pénétrer quelques instants avant d'appliquer un maquillage si besoin. Renouveler toutes les deux heures en cas d'exposition prolongée.",
    ],
    positionnement: [
      "Son atout face aux autres fluides de la gamme est la rapidité d'absorption, utile pour qui applique son maquillage juste après. Il convient moins à une peau très sèche, qui a besoin d'un temps de pose et d'un film plus nourrissant.",
    ],
    faq: [
      {
        question: "Peut-on maquiller immédiatement après application ?",
        reponse:
          "L'absorption rapide annoncée permet d'appliquer un maquillage peu après, mais laisser tout de même une ou deux minutes de pose limite le risque de faire glisser le maquillage.",
      },
      {
        question: "Ce fluide est-il gras sous le maquillage ?",
        reponse:
          "Non, c'est précisément l'intérêt de sa texture ultra-légère : elle est conçue pour ne pas laisser de film gras qui ferait glisser un fond de teint appliqué par-dessus.",
      },
    ],
  },
  {
    slug: "avene-gelee-gommante-douceur-visage-75ml",
    identite: [
      "Gel exfoliant doux pour le visage, sans grains abrasifs marqués, formulé pour les peaux sensibles sujettes aux rougeurs. Retire les cellules mortes en surface sans agresser la barrière cutanée. Texture gelée, rincée à l'eau, base Eau Thermale Avène. Positionné comme le soin d'exfoliation de la gamme dédiée aux peaux réactives, en complément du nettoyage habituel.",
    ],
    faits: [
      { libelle: "Format", valeur: "Gelée exfoliante" },
      { libelle: "Contenance", valeur: "75 ml" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Type de peau", valeur: "Sensible, sujette aux rougeurs" },
    ],
    usage: [
      "Appliquer une à deux fois par semaine sur peau humide, en massant doucement puis en rinçant à l'eau tiède. Éviter le contour des yeux. Ne pas utiliser sur une peau irritée ou en poussée de rosacée active.",
    ],
    positionnement: [
      "Ce gommage doux s'adresse aux peaux sensibles qui ne supportent pas les exfoliants classiques à grains épais ou aux acides forts. Il convient moins à une peau épaisse ou très grasse cherchant une exfoliation plus intense et plus fréquente.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser en cas de rosacée ?",
        reponse:
          "Il est pensé pour les peaux sujettes aux rougeurs, mais en cas de rosacée active ou de poussée inflammatoire, mieux vaut suspendre toute exfoliation et demander l'avis d'un dermatologue avant reprise.",
      },
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "Une à deux fois par semaine suffit sur peau sensible ; une utilisation plus fréquente risque de fragiliser la barrière cutanée au lieu d'améliorer le grain de peau.",
      },
    ],
  },
  {
    slug: "avene-hyaluron-activ-b3-creme-regeneration-cellulaire-50ml",
    identite: [
      "Crème anti-âge associant acide hyaluronique et vitamine B3, positionnée sur la régénération cellulaire et le comblement des rides déjà installées. Texture crème riche, destinée aux peaux matures marquées par une perte de densité et des rides creusées. Fait partie de la ligne Hyaluron Activ B3, l'une des gammes anti-âge les plus avancées d'Avène.",
    ],
    faits: [
      { libelle: "Actifs", valeur: "Acide hyaluronique, vitamine B3" },
      { libelle: "Format", valeur: "Crème" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Cible", valeur: "Rides installées, perte de densité" },
    ],
    usage: [
      "Appliquer matin et/ou soir sur visage et cou nettoyés, en dernière étape de la routine. Peut s'associer à un sérum de la même gamme le matin pour renforcer l'effet repulpant.",
    ],
    positionnement: [
      "Cette crème cible des rides déjà creusées et une perte de fermeté avancée, à la différence d'une crème premières rides destinée à la prévention. Elle convient moins à une peau jeune sans signe d'âge marqué, pour qui une texture plus légère suffit.",
    ],
    faq: [
      {
        question: "À partir de quel stade de rides est-elle pertinente ?",
        reponse:
          "Elle s'adresse aux rides déjà creusées et à une perte de densité visible, plutôt qu'à la prévention des toutes premières ridules, pour lesquelles une gamme plus légère de la maison convient mieux.",
      },
      {
        question: "Peut-on l'utiliser avec un sérum à l'acide hyaluronique ?",
        reponse:
          "Oui, un sérum à l'acide hyaluronique appliqué avant peut renforcer l'effet repulpant de la crème, à condition de le laisser pénétrer avant d'appliquer la crème par-dessus.",
      },
    ],
  },
  {
    slug: "avene-hydrance-aqua-gel-50ml",
    identite: [
      "Soin hydratant de la gamme Hydrance d'Avène, dans sa texture gel-crème, plus légère que la version riche de la même ligne. Formulé pour les peaux déshydratées, normales à mixtes, qui cherchent une hydratation sans effet gras ni film occlusif. Base Eau Thermale Avène, absorption rapide, pour un confort immédiat face au manque d'eau plutôt qu'au manque de lipides.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel-crème" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Gamme", valeur: "Hydrance" },
      { libelle: "Cible", valeur: "Déshydratation, peau normale à mixte" },
    ],
    usage: [
      "Appliquer matin et/ou soir sur peau nettoyée, en dernière étape de la routine ou sous un soin solaire le matin. Sa texture légère convient bien sous maquillage.",
    ],
    positionnement: [
      "Face à la version riche de la même gamme, ce gel-crème convient aux peaux qui manquent d'eau sans manquer de lipides et rejettent les textures épaisses. Il apporte moins de nutrition qu'une crème riche pour une peau réellement sèche, qui lui préférera une texture plus nourrissante.",
    ],
    faq: [
      {
        question: "Quelle différence avec la version riche de la gamme Hydrance ?",
        reponse:
          "La version riche est plus nourrissante et convient aux peaux sèches, tandis que ce gel-crème, plus léger, cible les peaux normales à mixtes déshydratées qui cherchent de l'eau sans matière grasse supplémentaire.",
      },
      {
        question: "Peut-on l'utiliser en été sur peau mixte ?",
        reponse:
          "Oui, sa texture légère et non grasse le rend adapté à un usage estival, y compris sur une peau qui brille facilement en journée.",
      },
    ],
  },
  {
    slug: "avene-intense-protect-sans-parfum-spf50-150ml",
    identite: [
      "Protection solaire très haute résistance de la gamme Intense Protect, sans parfum, SPF50+, grand format de 150 ml pensé pour couvrir visage et corps lors d'expositions prolongées ou intenses, en montagne ou en mer. Formule résistante à l'eau, destinée aux peaux sensibles et intolérantes qui doivent éviter les parfums.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Parfum", valeur: "Sans parfum" },
      { libelle: "Contenance", valeur: "150 ml" },
      { libelle: "Résistance à l'eau", valeur: "Élevée" },
    ],
    usage: [
      "Appliquer généreusement avant l'exposition sur toutes les zones découvertes, renouveler toutes les deux heures et systématiquement après une baignade ou une transpiration importante malgré la résistance à l'eau annoncée.",
    ],
    positionnement: [
      "Ce grand format sans parfum convient aux expositions longues et intenses et aux peaux qui réagissent aux parfums, à l'inverse d'un fluide visage classique pensé pour un usage urbain quotidien. Il est moins pratique au quotidien en ville qu'un format plus petit et discret.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur les enfants ?",
        reponse:
          "Sa version sans parfum et sa tolérance pensée pour peaux sensibles la rendent compatible avec un usage familial, mais il convient de vérifier l'absence de contre-indication propre à l'âge de l'enfant avant usage sur les tout-petits.",
      },
      {
        question: "Résiste-t-elle vraiment à l'eau ?",
        reponse:
          "La formule est annoncée résistante à l'eau, ce qui limite la perte de protection à la baignade, mais une nouvelle application après sortie de l'eau ou séchage à la serviette reste recommandée.",
      },
    ],
  },
  {
    slug: "avene-intense-protect-spf-50-150ml",
    identite: [
      "Version corps de la protection solaire Intense Protect, SPF50+, grand format de 150 ml, destinée aux expositions longues et intenses. Résistante à l'eau, pensée pour couvrir de larges surfaces de peau lors d'activités en extérieur, plage, montagne ou sport. Complète la version visage de la même gamme dans une routine solaire complète.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Contenance", valeur: "150 ml" },
      { libelle: "Résistance à l'eau", valeur: "Élevée" },
    ],
    usage: [
      "Appliquer généreusement sur le corps avant l'exposition, en insistant sur les zones les plus exposées : épaules, nuque, dessus des pieds. Renouveler toutes les deux heures et après chaque baignade.",
    ],
    positionnement: [
      "Ce format corps se distingue des fluides visage de la gamme par son grand volume et sa texture pensée pour de larges surfaces de peau, moins adaptée à une application fine sur le visage. Il convient à qui cherche une protection unique pour toute la famille à la plage plutôt qu'un soin ciblé visage.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser aussi sur le visage ?",
        reponse:
          "Elle peut s'utiliser sur le visage en dépannage, mais une texture visage dédiée de la même gamme reste préférable au quotidien, notamment sous maquillage.",
      },
      {
        question: "Convient-elle aux activités sportives en extérieur ?",
        reponse:
          "Sa résistance à l'eau et à la transpiration annoncée la rend adaptée aux activités sportives extérieures, avec un renouvellement recommandé toutes les deux heures.",
      },
    ],
  },
  {
    slug: "avene-lait-solaire-toucher-sec-spf50-100ml",
    identite: [
      "Lait solaire corps à fini toucher sec, SPF50, formulé pour ne pas laisser de film gras ni collant après application. Absorption rapide annoncée, texture lait fluide facile à étaler sur de grandes surfaces. Format de 100 ml, pensé pour un usage corps régulier lors d'expositions estivales.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Fini", valeur: "Toucher sec" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Contenance", valeur: "100 ml" },
    ],
    usage: [
      "Appliquer généreusement sur le corps avant exposition, en couche uniforme sur toutes les zones découvertes. Renouveler toutes les deux heures et après chaque baignade malgré le fini sec.",
    ],
    positionnement: [
      "Son fini toucher sec le distingue des laits solaires classiques plus gras, appréciable pour qui n'aime pas la sensation collante sous les vêtements après application. Il convient moins à une peau très sèche, qui a besoin d'un apport lipidique plus riche en complément.",
    ],
    faq: [
      {
        question: "Laisse-t-il des traces sur les vêtements ?",
        reponse:
          "Le fini toucher sec limite les traces grasses sur le tissu par rapport à un lait solaire classique, ce qui le rend pratique à appliquer avant de se rhabiller.",
      },
      {
        question: "Faut-il quand même réappliquer après la baignade ?",
        reponse:
          "Oui, le fini sec n'implique pas une résistance totale et illimitée à l'eau ; une nouvelle application après la baignade et le séchage reste nécessaire.",
      },
    ],
  },
  {
    slug: "avene-lait-tres-haute-protection-spf50-peux-sensibles-100ml",
    identite: [
      "Lait solaire très haute protection, SPF50, spécifiquement formulé pour les peaux sensibles et intolérantes au soleil. Texture lait, facile à étaler sur le corps, base Eau Thermale Avène. Positionné comme une protection de référence pour peau réactive lors d'expositions au soleil, en complément de la version visage de la gamme peau sensible.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Type de peau", valeur: "Sensible, intolérante au soleil" },
    ],
    usage: [
      "Appliquer généreusement sur le corps avant exposition, sur peau propre et sèche. Renouveler toutes les deux heures et après chaque baignade ou transpiration importante.",
    ],
    positionnement: [
      "Ce lait cible spécifiquement les peaux réactives au soleil, allergies solaires ou intolérances, à la différence d'un lait solaire générique pour peau normale. Il convient moins comme unique protection pour un usage quotidien urbain léger, pour lequel un format plus léger suffit.",
    ],
    faq: [
      {
        question: "Convient-il en cas de lucite estivale, l'allergie au soleil ?",
        reponse:
          "Sa formulation pensée pour les peaux intolérantes au soleil en fait une option pertinente, mais en cas d'allergie solaire connue, l'avis d'un dermatologue avant l'exposition reste recommandé.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Il peut dépanner sur le visage, mais une texture visage dédiée de la gamme peau sensible reste préférable au quotidien pour cette zone plus fine.",
      },
    ],
  },
  {
    slug: "avene-mousse-nettoyante-visage-yeux-50ml",
    identite: [
      "Mousse nettoyante douce pour le visage et les yeux, à rincer, formulée sans savon pour respecter le film hydrolipidique des peaux sensibles. Nettoie le visage et retire le maquillage léger des yeux en un seul geste. Format de 50 ml, pensé comme nettoyant quotidien matin et/ou soir pour peau réactive.",
    ],
    faits: [
      { libelle: "Format", valeur: "Mousse à rincer" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Zone", valeur: "Visage et yeux" },
      { libelle: "Formule", valeur: "Sans savon" },
    ],
    usage: [
      "Appliquer sur peau humide en mousse légère, masser délicatement puis rincer à l'eau tiède ou froide. Utilisable matin et soir, y compris pour un démaquillage yeux léger, un maquillage waterproof nécessitant un démaquillant dédié en complément.",
    ],
    positionnement: [
      "Cette mousse combine nettoyage du visage et des yeux en un seul produit, pratique pour une routine simplifiée, contrairement à un nettoyant visage seul qui nécessite un démaquillant yeux séparé. Elle convient moins pour retirer un maquillage waterproof marqué, qui demande un démaquillant dédié.",
    ],
    faq: [
      {
        question: "Retire-t-elle le mascara ?",
        reponse:
          "Elle retire un maquillage léger des yeux, mais un mascara waterproof résiste souvent à ce type de mousse et nécessite un démaquillant biphasé dédié en complément.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa formule sans savon est pensée pour un usage quotidien matin et soir sur peau sensible, sans agresser la barrière cutanée.",
      },
    ],
  },
  {
    slug: "avene-pack-solaire-creme-spf50-eau-thermale-2-50ml",
    identite: [
      "Coffret associant une crème solaire visage SPF50 de 50 ml et un format de l'Eau Thermale Avène, pensé comme un duo de routine solaire complète : protection et apaisement. L'eau thermale sert de brumisation apaisante avant ou après exposition, en complément de la crème protectrice. Format duo pratique pour un usage nomade en été.",
    ],
    faits: [
      { libelle: "Contenu", valeur: "Crème solaire SPF50 et eau thermale" },
      { libelle: "Format", valeur: "Coffret 2 pièces" },
      { libelle: "Contenance crème", valeur: "50 ml" },
    ],
    usage: [
      "Appliquer la crème solaire le matin avant exposition, puis utiliser l'eau thermale en brumisation pour apaiser la peau après exposition ou pour se rafraîchir en cours de journée. Les deux produits se complètent sans se substituer l'un à l'autre.",
    ],
    positionnement: [
      "Ce coffret convient à qui part en vacances ou en voyage et cherche une routine solaire complète en un seul achat, plutôt que d'acheter séparément crème et brumisation. Il apporte moins de flexibilité que l'achat des deux produits en formats indépendants adaptés à des besoins différents.",
    ],
    faq: [
      {
        question: "L'eau thermale remplace-t-elle la crème solaire ?",
        reponse:
          "Non, l'eau thermale apaise et rafraîchit la peau mais n'apporte aucune protection solaire. La crème SPF50 du coffret reste le seul produit protecteur du duo.",
      },
      {
        question: "Peut-on utiliser l'eau thermale sur peau déjà maquillée ?",
        reponse:
          "Oui, elle peut se vaporiser sur le maquillage pour rafraîchir et apaiser la peau en journée, sans retirer le maquillage en place.",
      },
    ],
  },
  {
    slug: "avene-physiolift-baume-nuit-30ml",
    identite: [
      "Baume de nuit de la gamme PhysioLift d'Avène, ligne anti-âge positionnée sur le lissage et la redensification des traits. Texture baume riche, pensée pour l'action nocturne de régénération cutanée, sur peau mature marquée par des rides et une perte de fermeté. Fait partie d'une routine jour et nuit dédiée aux premiers signes d'âge marqués.",
    ],
    faits: [
      { libelle: "Format", valeur: "Baume" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Gamme", valeur: "PhysioLift" },
      { libelle: "Usage", valeur: "Soin de nuit" },
    ],
    usage: [
      "Appliquer le soir sur visage et cou nettoyés, en dernière étape de la routine, en mouvements ascendants. Éviter une application le matin, la texture riche étant pensée pour l'action réparatrice nocturne, sans photoprotection associée.",
    ],
    positionnement: [
      "Ce baume de nuit cible spécifiquement l'action réparatrice pendant le sommeil, avec une texture plus riche que le soin de jour de la même gamme. Il convient moins à une peau grasse ou à une application matinale sous maquillage, pour lesquelles une texture plus légère est préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser le matin ?",
        reponse:
          "Il est formulé pour une action nocturne avec une texture riche peu compatible avec une application sous maquillage ; le soin de jour de la même gamme PhysioLift est plus adapté le matin.",
      },
      {
        question: "À partir de quand commencer ce type de soin ?",
        reponse:
          "Il s'adresse aux peaux qui présentent déjà des rides et un relâchement visibles des traits, plutôt qu'en prévention précoce sur une peau encore ferme.",
      },
    ],
  },
  {
    slug: "avene-reflex-solaire-spf50-30ml",
    identite: [
      "Format compact de protection solaire, SPF50, de 30 ml, pensé pour tenir dans un sac ou une poche et permettre une réapplication facile en journée. Complète un premier format solaire utilisé à la maison en offrant une solution nomade pour renouveler la protection sans transporter un grand flacon.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Format", valeur: "Nomade, format poche" },
    ],
    usage: [
      "Garder dans le sac pour renouveler l'application toutes les deux heures en cas d'exposition prolongée, en complément d'une première application faite à la maison avec un format plus grand. Pratique pour les zones oubliées lors de la première application.",
    ],
    positionnement: [
      "Ce petit format se distingue des laits et crèmes solaires en grand contenant par sa portabilité, pensé pour la réapplication plutôt que pour la première protection généreuse du matin. Il convient moins comme unique protection solaire pour une journée entière à la plage, où un plus grand format est plus économique.",
    ],
    faq: [
      {
        question: "Ce format suffit-il pour une journée à la plage ?",
        reponse:
          "Un format de 30 ml s'épuise vite s'il sert à toute la protection de la journée ; il est plutôt pensé comme complément nomade pour les réapplications, avec un plus grand flacon à la maison pour l'application initiale.",
      },
      {
        question: "Peut-on le garder dans une voiture en été ?",
        reponse:
          "Il vaut mieux éviter une exposition prolongée à la chaleur directe, qui peut altérer la stabilité des filtres solaires ; un rangement à l'abri de la chaleur excessive est préférable.",
      },
    ],
  },
  {
    slug: "avene-reflexe-solaire-spf-50-peaux-sensibles-30ml",
    identite: [
      "Version peaux sensibles du format compact Reflexe Solaire d'Avène, SPF50+, 30 ml, pensée pour la réapplication nomade tout en respectant les peaux réactives et intolérantes. Complète une première application solaire visage faite à la maison avec un format plus grand de la gamme peau sensible.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Type de peau", valeur: "Sensible" },
      { libelle: "Format", valeur: "Nomade" },
    ],
    usage: [
      "Transporter dans un sac pour renouveler la protection du visage toutes les deux heures en cas d'exposition prolongée, en complément d'une première application faite à la maison. Particulièrement utile en usage urbain quotidien pour peau réactive.",
    ],
    positionnement: [
      "Face au format Reflex Solaire générique de la gamme, celui-ci cible spécifiquement les peaux sensibles avec une formule assortie. Il convient moins comme unique protection solaire pour toute la journée, un plus grand format restant plus adapté pour l'application initiale généreuse.",
    ],
    faq: [
      {
        question: "Quelle différence avec l'Avène Reflex Solaire SPF50 30 ml classique ?",
        reponse:
          "La différence tient à la formule, ici pensée spécifiquement pour les peaux sensibles et intolérantes, alors que le format classique de la gamme s'adresse à un usage plus généraliste.",
      },
      {
        question: "Peut-on l'utiliser comme seule protection solaire du visage ?",
        reponse:
          "Son petit format le rend plus adapté à la réapplication nomade qu'à l'application initiale généreuse ; un format plus grand de la gamme peau sensible reste préférable pour le matin.",
      },
    ],
  },
];
