/**
 * Banques de formulations par famille de produit.
 *
 * Une famille regroupe les nœuds de taxonomie dont le geste, le rythme et la
 * place dans la routine sont réellement les mêmes. Le libellé précis du
 * produit vient toujours de la taxonomie (134 valeurs distinctes), la famille
 * ne fournit que le savoir d'usage.
 *
 * Règles de rédaction appliquées à chaque phrase de ce fichier :
 * - aucune promesse thérapeutique, aucun superlatif, aucun vocabulaire de prix ;
 * - une idée par phrase, 15 à 25 mots, sujet explicite (pas d'anaphore en tête
 *   de bloc) : c'est la condition pour qu'un passage soit extrait et cité ;
 * - aucun fait qui ne soit vrai pour tous les produits de la famille.
 *
 * Jetons remplacés à la génération : {TYPE} {NOM} {MARQUE} {PRIX} {CONTENANCE}.
 */

export interface Famille {
  /** Ce que fait le produit. */
  roles: string[];
  /** Le geste d'application. */
  gestes: string[];
  /** Moment et fréquence. */
  rythmes: string[];
  /** Place dans la routine et produits qui l'entourent. */
  places: string[];
  /** À qui il s'adresse, et à qui il ne s'adresse pas. */
  profils: string[];
  /** Questions propres à la famille. Réponse autonome de 25 à 45 mots. */
  faq: { q: string; r: string }[];
}

export const FAMILLES: Record<string, Famille> = {
  /* ---------------------------------------------------------------- */
  /* Visage — nettoyage                                                */
  /* ---------------------------------------------------------------- */

  "nettoyant-visage": {
    roles: [
      "Un nettoyant visage retire le sébum, les particules de pollution et les résidus déposés sur la peau au fil de la journée.",
      "Le nettoyage conditionne toute la routine : sur une peau nette, le sérum et la crème pénètrent sans obstacle.",
      "Le rôle d'un nettoyant est de laisser la peau propre sans décaper le film hydrolipidique qui la protège.",
      "Un nettoyant bien choisi laisse la peau souple après rinçage, sans sensation de tiraillement.",
    ],
    gestes: [
      "Faire mousser une noisette de produit entre les mains humides, masser le visage en petits cercles, puis rincer à l'eau tiède.",
      "Appliquer sur peau humide, éviter le contour des yeux, rincer abondamment et sécher en tamponnant avec une serviette propre.",
      "Émulsionner du bout des doigts pendant une trentaine de secondes, en insistant sur le nez et le menton, puis rincer.",
      "Rincer à l'eau tiède plutôt qu'à l'eau chaude : l'eau chaude accentue la sensation de tiraillement après le nettoyage.",
    ],
    rythmes: [
      "Le nettoyage du soir est le plus important : c'est celui qui retire ce que la journée a déposé.",
      "Deux nettoyages par jour au maximum. Au-delà, la peau compense en produisant davantage de sébum.",
      "Un usage quotidien, matin et soir, correspond à l'usage courant de ce type de produit.",
    ],
    places: [
      "Le nettoyant ouvre la routine. Il précède la lotion tonique, puis le sérum, puis la crème hydratante.",
      "Après une journée maquillée, il intervient en seconde étape, après un démaquillant : c'est le principe du double nettoyage.",
      "La peau reste réceptive quelques minutes après le rinçage. C'est le moment d'appliquer le sérum.",
    ],
    profils: [
      "Les peaux mixtes à grasses, qui produisent du sébum en continu, sont les premières concernées par un nettoyage quotidien.",
      "Une peau qui tiraille après le rinçage signale un nettoyant trop détergent pour elle : une texture plus riche convient mieux.",
      "Les peaux réactives privilégient une formule sans parfum et un temps de contact court.",
    ],
    faq: [
      {
        q: "Faut-il se nettoyer le visage matin et soir ?",
        r: "Le nettoyage du soir est indispensable : il retire le sébum, la pollution et les résidus de maquillage accumulés. Le matin, un nettoyage léger suffit aux peaux sèches, un nettoyage complet convient mieux aux peaux grasses.",
      },
      {
        q: "Peut-on l'utiliser sur le contour des yeux ?",
        r: "Non. Le contour des yeux se démaquille avec un produit dédié, plus doux et formulé pour une zone sans glandes sébacées. Un nettoyant visage classique n'est pas conçu pour cette zone.",
      },
      {
        q: "Ce nettoyant se rince-t-il ?",
        r: "Oui, {TYPE} s'utilise sur peau humide et se rince à l'eau tiède. Un résidu laissé sur la peau entretient une sensation de film et peut gêner l'application des soins suivants.",
      },
      {
        q: "Qu'est-ce que le double nettoyage ?",
        r: "Le double nettoyage consiste à retirer d'abord le maquillage et la protection solaire avec un produit gras, puis à nettoyer la peau avec un produit aqueux. Il ne se justifie que les jours de maquillage.",
      },
    ],
  },

  demaquillant: {
    roles: [
      "Un démaquillant dissout le maquillage, la protection solaire et les corps gras que l'eau seule ne retire pas.",
      "Le démaquillage est la seule étape capable de retirer un fond de teint longue tenue ou un mascara résistant à l'eau.",
      "Ce produit agit par affinité : les corps gras du maquillage se dissolvent dans les corps gras de la formule.",
      "Se démaquiller chaque soir évite que les pigments et les filtres solaires ne restent au contact de la peau toute la nuit.",
    ],
    gestes: [
      "Imbiber un coton, poser quelques secondes sur la paupière sans frotter, puis faire glisser vers l'extérieur.",
      "Appliquer sur peau sèche, masser pour dissoudre le maquillage, puis émulsionner avec un peu d'eau avant de rincer.",
      "Deux passages valent mieux qu'un frottement appuyé : la zone du contour des yeux ne supporte pas la friction.",
      "Terminer par un nettoyant aqueux si la journée comportait un fond de teint ou une protection solaire.",
    ],
    rythmes: [
      "Chaque soir, avant le nettoyage. Le démaquillage ne se pratique pas le matin.",
      "Uniquement les jours de maquillage ou de protection solaire : une peau nue n'a pas besoin d'être démaquillée.",
      "Un usage quotidien en fin de journée correspond à l'usage courant de ce type de produit.",
    ],
    places: [
      "Le démaquillage précède le nettoyage. Il ouvre la routine du soir et ne remplace pas le nettoyant.",
      "Après démaquillage et rinçage viennent la lotion tonique, puis le sérum, puis le soin de nuit.",
      "Cette étape est la première du double nettoyage, méthode issue des routines coréennes.",
    ],
    profils: [
      "Toute personne qui se maquille ou applique une protection solaire quotidienne a besoin d'une étape de démaquillage.",
      "Les porteurs de lentilles vérifient la mention « testé sous contrôle ophtalmologique » avant d'utiliser un démaquillant sur les yeux.",
      "Les peaux réactives préfèrent une formule sans parfum, appliquée sans frottement.",
    ],
    faq: [
      {
        q: "Faut-il rincer après le démaquillage ?",
        r: "Oui dans la plupart des cas. Un résidu de démaquillant laissé sur la peau entretient un film gras qui gêne l'application du sérum. Un nettoyage à l'eau après démaquillage règle la question.",
      },
      {
        q: "Une eau micellaire suffit-elle à nettoyer la peau ?",
        r: "Elle retire le maquillage, mais elle ne remplace pas un nettoyage à l'eau. Les tensioactifs qu'elle contient sont conçus pour capter les impuretés, pas pour rester au contact de la peau.",
      },
      {
        q: "Peut-on se démaquiller les yeux avec ce produit ?",
        r: "Vérifiez la mention « yeux » sur l'emballage. Un démaquillant formulé pour le visage seul peut être irritant sur la muqueuse oculaire, en particulier avec des lentilles de contact.",
      },
      {
        q: "Comment retirer un mascara résistant à l'eau ?",
        r: "Un mascara waterproof se retire avec une formule biphasée ou une huile démaquillante. Poser le coton imbibé sur les cils, laisser agir dix secondes, puis faire glisser sans frotter.",
      },
    ],
  },

  tonique: {
    roles: [
      "Une lotion appliquée après le nettoyage rétablit le confort de la peau et prépare l'absorption des soins qui suivent.",
      "Ce type de produit s'applique sur peau propre et laisse un film d'eau qui facilite l'étalement du sérum.",
      "L'étape de la lotion est courte mais elle change le ressenti : la peau reste souple au lieu de tirer après rinçage.",
      "Une brumisation en cours de journée rafraîchit la peau sans retirer le maquillage.",
    ],
    gestes: [
      "Vaporiser à vingt centimètres du visage, yeux fermés, puis tamponner l'excédent avec les doigts propres.",
      "Imbiber un coton et passer sur l'ensemble du visage, du centre vers l'extérieur, sans repasser deux fois au même endroit.",
      "Appliquer dans la paume puis presser sur le visage : ce geste, issu des routines coréennes, limite les pertes de produit.",
      "Enchaîner le soin suivant tant que la peau est encore humide, sans attendre le séchage complet.",
    ],
    rythmes: [
      "Après chaque nettoyage, matin et soir.",
      "En complément, dans la journée, dès que la peau tire ou après une exposition prolongée à la climatisation.",
      "Un usage quotidien est la norme pour ce type de produit.",
    ],
    places: [
      "La lotion s'intercale entre le nettoyage et le sérum. Elle ne remplace ni l'un ni l'autre.",
      "Elle précède immédiatement le sérum, dont elle facilite la pénétration.",
      "Sur une routine courte, elle peut être suivie directement de la crème hydratante.",
    ],
    profils: [
      "Les peaux sensibles et réactives sont les premières bénéficiaires de cette étape, à condition de choisir une formule sans alcool.",
      "Une peau grasse tolère bien les lotions à effet resserrant, une peau sèche préfère les formules riches en glycérine.",
      "Cette étape reste facultative sur une routine minimale : elle prépare, elle ne traite pas.",
    ],
    faq: [
      {
        q: "À quel moment appliquer une lotion tonique ?",
        r: "Juste après le nettoyage, sur peau encore humide, et avant le sérum. Ce placement lui permet de rétablir le confort de la peau et de faciliter l'étalement des soins suivants.",
      },
      {
        q: "Une eau thermale peut-elle remplacer une crème hydratante ?",
        r: "Non. Une eau thermale apaise et rafraîchit, mais elle ne contient pas les corps gras qui limitent l'évaporation. Sans crème par-dessus, l'eau déposée s'évapore et peut accentuer la sensation de tiraillement.",
      },
      {
        q: "Faut-il rincer après application ?",
        r: "Non. {TYPE} reste sur la peau et se laisse absorber. Seul l'excédent visible se tamponne avec les doigts propres ou un mouchoir.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Visage — hydratation et traitement                                */
  /* ---------------------------------------------------------------- */

  "hydratant-visage": {
    roles: [
      "Une crème hydratante apporte de l'eau à la peau et limite son évaporation grâce aux corps gras de la formule.",
      "L'hydratation quotidienne maintient la souplesse de la peau et sa capacité à jouer son rôle de barrière.",
      "Ce soin se pose en dernière couche aqueuse de la routine : il scelle ce qui a été appliqué avant.",
      "Une peau correctement hydratée réagit mieux aux actifs ciblés qu'une peau qui tiraille.",
    ],
    gestes: [
      "Prélever l'équivalent d'un pois, répartir en cinq points sur le visage, puis lisser du centre vers les tempes.",
      "Appliquer sur peau propre et encore légèrement humide : l'eau résiduelle est retenue par les corps gras de la formule.",
      "Faire remonter le produit jusqu'au cou et à la base de la mâchoire, deux zones souvent oubliées.",
      "Laisser pénétrer deux minutes avant d'appliquer un maquillage, sinon le fond de teint se déstructure.",
    ],
    rythmes: [
      "Matin et soir, tous les jours, sur peau propre.",
      "Le matin sous la protection solaire, le soir en dernière étape de la routine.",
      "Un usage quotidien sans interruption : l'hydratation est un entretien, pas une cure.",
    ],
    places: [
      "La crème vient après le sérum et avant la protection solaire le matin.",
      "Le soir, elle ferme la routine. Aucun produit ne s'applique par-dessus, hormis un baume ciblé.",
      "Sur une routine à trois étapes, elle suit directement le nettoyage et le sérum.",
    ],
    profils: [
      "Les peaux grasses ont autant besoin d'hydratation que les autres : elles choisissent simplement une texture plus légère.",
      "Une peau sèche tolère et réclame des textures riches, une peau mixte préfère un gel-crème sur la zone médiane.",
      "En cas de rougeurs persistantes ou de desquamation, un avis dermatologique prime sur tout changement de crème.",
    ],
    faq: [
      {
        q: "Quand appliquer une crème hydratante ?",
        r: "Matin et soir, sur peau propre et encore légèrement humide, après le sérum. Le matin, elle se place sous la protection solaire ; le soir, elle est la dernière étape de la routine.",
      },
      {
        q: "Une peau grasse a-t-elle besoin d'une crème hydratante ?",
        r: "Oui. Une peau grasse produit beaucoup de sébum mais peut manquer d'eau. Priver la peau d'hydratation entretient souvent une production de sébum accrue. Une texture en gel ou en fluide convient mieux qu'une texture riche.",
      },
      {
        q: "Peut-on appliquer une crème de jour le soir ?",
        r: "C'est possible mais peu utile. Une crème de jour est souvent plus légère et parfois filtrée ; une crème de nuit est plus riche, la peau perdant davantage d'eau pendant le sommeil.",
      },
      {
        q: "Combien de produit faut-il par application ?",
        r: "L'équivalent d'un petit pois suffit pour le visage et le cou. Une quantité supérieure ne s'absorbe pas et laisse un film gras sous le maquillage.",
      },
    ],
  },

  "serum-visage": {
    roles: [
      "Un sérum concentre des actifs dans une base légère, ce qui lui permet de traiter un besoin précis plutôt que d'hydrater largement.",
      "La texture fluide d'un sérum lui permet de se déposer en couche fine sous la crème, sans surcharger la peau.",
      "Un sérum se choisit sur son actif, pas sur sa texture : c'est l'ingrédient qui détermine le besoin traité.",
      "Un sérum ne remplace pas une crème hydratante : il cible, elle protège.",
    ],
    gestes: [
      "Déposer trois à quatre gouttes dans la paume, presser sur le visage plutôt que d'étaler, puis attendre l'absorption.",
      "Appliquer sur peau propre et humide, avant la crème, en évitant le contour immédiat de l'œil.",
      "Superposer au maximum deux sérums, en commençant par le plus fluide : au-delà, la peau ne suit plus.",
      "Introduire un nouveau sérum progressivement, un soir sur deux la première semaine, pour observer la tolérance.",
    ],
    rythmes: [
      "Une à deux fois par jour, selon l'actif et la tolérance de la peau.",
      "Le soir de préférence pour les actifs exfoliants ou renouvelants, le matin pour les antioxydants.",
      "Un sérum s'utilise en continu sur plusieurs semaines : les résultats visibles s'apprécient sur un cycle cutané complet.",
    ],
    places: [
      "Le sérum se place après la lotion et avant la crème hydratante. Cet ordre suit la règle du plus fluide au plus riche.",
      "Le matin, il s'intercale entre le nettoyage et la protection solaire.",
      "Le soir, il précède le soin de nuit, qui scelle l'ensemble.",
    ],
    profils: [
      "Un sérum s'adresse à une peau qui a un besoin identifié : imperfections, manque d'éclat, déshydratation, signes de l'âge.",
      "Les peaux réactives commencent par un usage espacé et un seul actif à la fois.",
      "Les actifs renouvelants sont déconseillés pendant la grossesse sans avis médical.",
    ],
    faq: [
      {
        q: "Sérum ou crème : lequel en premier ?",
        r: "Le sérum en premier, la crème ensuite. La règle est d'appliquer du plus fluide au plus riche : une crème appliquée avant formerait un film qui empêcherait le sérum de pénétrer.",
      },
      {
        q: "Peut-on cumuler plusieurs sérums ?",
        r: "Deux au maximum, en commençant par le plus fluide. Cumuler davantage d'actifs augmente le risque d'irritation sans bénéfice supplémentaire démontré.",
      },
      {
        q: "Au bout de combien de temps voit-on un résultat ?",
        r: "Le renouvellement de l'épiderme dure environ quatre semaines. C'est la durée minimale à respecter avant d'évaluer un sérum, en photographiant la peau au démarrage pour disposer d'un point de comparaison.",
      },
      {
        q: "Un sérum remplace-t-il la crème hydratante ?",
        r: "Non. Un sérum apporte des actifs, une crème apporte des corps gras qui limitent l'évaporation de l'eau. Les deux ont des fonctions distinctes et se complètent.",
      },
    ],
  },

  "anti-age": {
    roles: [
      "Un soin anti-âge agit sur les signes visibles du temps : ridules, perte de fermeté, irrégularité du grain de peau.",
      "Ce type de formule associe généralement des agents hydratants et des actifs qui soutiennent le renouvellement cellulaire.",
      "Aucun soin cosmétique ne supprime une ride installée ; l'objectif est d'entretenir la souplesse et le confort de la peau.",
      "La régularité compte davantage que la concentration : un soin appliqué chaque jour donne plus qu'une cure intensive interrompue.",
    ],
    gestes: [
      "Appliquer du centre du visage vers l'extérieur, en remontant, sans étirer la peau.",
      "Prolonger l'application sur le cou et le décolleté, zones où la peau est plus fine.",
      "Insister par de légères pressions sur les zones de plissement : front, sillons, contour de la bouche.",
      "Associer systématiquement une protection solaire le matin : l'exposition est le premier facteur de vieillissement cutané évitable.",
    ],
    rythmes: [
      "Une application quotidienne, matin ou soir selon la texture et les actifs.",
      "Le soir pour les formules à base de dérivés de vitamine A, qui se dégradent à la lumière.",
      "Un usage continu sur plusieurs mois, la peau se renouvelant par cycles d'environ quatre semaines.",
    ],
    places: [
      "Ce soin se place après le sérum et avant la protection solaire.",
      "Le soir, il ferme la routine et reste en place toute la nuit.",
      "Il se complète d'un soin dédié au contour des yeux, zone que les textures riches ne traitent pas correctement.",
    ],
    profils: [
      "Les premiers signes apparaissent en général à partir de la trentaine, plus tôt sur les peaux fines et exposées.",
      "Une peau réactive introduit les actifs renouvelants progressivement, deux soirs par semaine au départ.",
      "Les dérivés de vitamine A sont déconseillés pendant la grossesse et l'allaitement sans avis médical.",
    ],
    faq: [
      {
        q: "À quel âge commencer un soin anti-âge ?",
        r: "Il n'y a pas d'âge fixe. L'usage courant est de commencer lorsque les premières ridules de déshydratation deviennent visibles, souvent autour de la trentaine. La protection solaire quotidienne reste la mesure la plus déterminante.",
      },
      {
        q: "Un soin anti-âge fait-il disparaître les rides ?",
        r: "Non. Un produit cosmétique agit sur l'aspect de la peau : hydratation, souplesse, éclat, grain. Il n'efface pas une ride installée, dont la correction relève d'actes médicaux.",
      },
      {
        q: "Peut-on l'associer à un sérum ?",
        r: "Oui, en respectant l'ordre du plus fluide au plus riche : sérum d'abord, soin ensuite. Évitez en revanche de cumuler plusieurs actifs exfoliants ou renouvelants le même soir.",
      },
    ],
  },

  "contour-yeux": {
    roles: [
      "La peau du contour de l'œil est la plus fine du visage et ne comporte quasiment pas de glandes sébacées.",
      "Un soin contour des yeux est formulé pour une zone mobile, exposée aux clignements et aux frottements.",
      "Ce type de produit cible les cernes, les poches ou les ridules selon les actifs qu'il contient.",
      "Une crème visage classique est souvent trop riche pour cette zone et peut favoriser l'apparition de grains de milium.",
    ],
    gestes: [
      "Déposer l'équivalent d'un grain de riz par œil et tapoter avec l'annulaire, le doigt qui appuie le moins.",
      "Appliquer sur l'os orbitaire, jamais sur la paupière mobile ni au ras des cils.",
      "Progresser de l'angle interne vers l'extérieur, par petites pressions, sans étirer la peau.",
      "Conserver le produit au frais accentue la sensation de fraîcheur au moment de l'application.",
    ],
    rythmes: [
      "Matin et soir, avant la crème de visage.",
      "Le matin en priorité si l'objectif porte sur les poches, le soir si l'objectif porte sur les ridules.",
      "Un usage quotidien, la zone étant sollicitée en permanence par les mouvements du visage.",
    ],
    places: [
      "Le contour des yeux s'applique après le sérum et avant la crème de visage.",
      "Il complète la routine sans la remplacer : le reste du visage garde son soin habituel.",
      "Le matin, il précède l'application du correcteur et de l'anti-cernes.",
    ],
    profils: [
      "Les cernes creux relèvent de l'anatomie, les cernes pigmentés de la mélanine, les cernes bleutés de la circulation : les trois ne répondent pas aux mêmes actifs.",
      "Les porteurs de lentilles vérifient la mention « testé sous contrôle ophtalmologique ».",
      "Le manque de sommeil et la consommation de sel influencent l'aspect des poches autant qu'un soin cosmétique.",
    ],
    faq: [
      {
        q: "Un soin contour des yeux est-il vraiment nécessaire ?",
        r: "Il n'est pas indispensable, mais il est utile : la peau du contour de l'œil est plus fine et ne supporte pas toujours les textures riches d'une crème de visage. Un produit dédié limite ce risque.",
      },
      {
        q: "Comment appliquer un contour des yeux sans tirer la peau ?",
        r: "Avec l'annulaire, par petites pressions, de l'angle interne vers l'extérieur, sur l'os orbitaire uniquement. L'annulaire est le doigt qui exerce naturellement le moins de pression.",
      },
      {
        q: "Un contour des yeux fait-il disparaître les cernes ?",
        r: "Il agit sur l'aspect de la zone : hydratation, éclat, atténuation visuelle. Un cerne creux d'origine anatomique ne se corrige pas avec un produit cosmétique.",
      },
    ],
  },

  "masque-visage": {
    roles: [
      "Un masque apporte une action ponctuelle et concentrée, sur un temps de pose court, que la routine quotidienne ne permet pas.",
      "Le temps de pose est ce qui distingue un masque d'une crème : la formule reste au contact de la peau plusieurs minutes.",
      "Un masque complète la routine, il ne la remplace pas : nettoyage et hydratation restent quotidiens.",
      "Selon sa base, un masque absorbe le sébum, apporte de l'eau ou lisse le grain de peau.",
    ],
    gestes: [
      "Appliquer en couche uniforme sur peau propre et sèche, en évitant le contour des yeux et de la bouche.",
      "Respecter le temps de pose indiqué : un masque à l'argile laissé jusqu'au séchage complet peut déshydrater la peau.",
      "Rincer à l'eau tiède, sans frotter, puis appliquer immédiatement un soin hydratant.",
      "Une application en couche localisée, sur la zone médiane uniquement, convient aux peaux mixtes.",
    ],
    rythmes: [
      "Une à deux fois par semaine, en fonction de la tolérance de la peau.",
      "Le soir de préférence, quand la peau n'a pas à recevoir de maquillage ensuite.",
      "Un usage ponctuel, jamais quotidien pour les formules exfoliantes ou absorbantes.",
    ],
    places: [
      "Le masque se place après le nettoyage et avant le sérum.",
      "Après rinçage, la peau est réceptive : c'est le meilleur moment pour appliquer un soin hydratant.",
      "Il remplace ponctuellement l'étape du gommage, sans s'y ajouter le même jour.",
    ],
    profils: [
      "Les peaux grasses tirent parti des bases absorbantes, les peaux sèches des bases riches en corps gras.",
      "Une peau réactive limite le temps de pose et teste d'abord sur une petite zone.",
      "Un masque ne s'applique pas sur une peau lésée ou irritée.",
    ],
    faq: [
      {
        q: "À quelle fréquence utiliser un masque visage ?",
        r: "Une à deux fois par semaine suffit dans la plupart des cas. Un usage plus fréquent d'un masque absorbant ou exfoliant fragilise la barrière cutanée sans bénéfice supplémentaire.",
      },
      {
        q: "Faut-il laisser sécher complètement un masque ?",
        r: "Non pour les masques à l'argile. Une fois sec, l'argile continue de capter l'eau de la peau. Rincez dès que la couche commence à mater, sans attendre le craquellement.",
      },
      {
        q: "Quand appliquer un masque dans la routine ?",
        r: "Après le nettoyage et avant le sérum. La peau propre absorbe mieux, et le soin appliqué après le rinçage bénéficie d'une peau réceptive.",
      },
    ],
  },

  "gommage-visage": {
    roles: [
      "Un gommage retire les cellules mortes de la surface de la peau et affine temporairement le grain.",
      "L'exfoliation régulière permet aux soins appliqués ensuite de rencontrer moins de résistance.",
      "Un gommage mécanique agit par frottement, un exfoliant chimique par dissolution des liaisons entre cellules.",
      "L'exfoliation est un geste ponctuel : la peau se renouvelle seule en environ quatre semaines.",
    ],
    gestes: [
      "Masser du bout des doigts, en cercles légers, sur peau humide, pendant une trentaine de secondes.",
      "Éviter le contour des yeux et les zones présentant des boutons enflammés.",
      "Rincer abondamment à l'eau tiède, puis appliquer un soin hydratant sans attendre.",
      "Un frottement appuyé ne rend pas le gommage plus efficace ; il fragilise la barrière cutanée.",
    ],
    rythmes: [
      "Une fois par semaine pour une peau normale, une fois tous les dix jours pour une peau sensible.",
      "Le soir, jamais avant une exposition au soleil : la peau fraîchement exfoliée est plus sensible aux UV.",
      "Deux fois par semaine au maximum, y compris sur peau grasse.",
    ],
    places: [
      "Le gommage se place après le nettoyage, à la place du soin habituel.",
      "Il ne se cumule pas avec un masque exfoliant ni avec un sérum acide le même jour.",
      "La protection solaire du lendemain est d'autant plus importante après une exfoliation.",
    ],
    profils: [
      "Les peaux épaisses et grasses tolèrent une exfoliation hebdomadaire, les peaux fines et réactives beaucoup moins.",
      "Une peau qui présente des lésions actives ou des rougeurs marquées n'est pas exfoliée mécaniquement.",
      "Les grains fins et réguliers sont préférables aux particules irrégulières, qui rayent la surface.",
    ],
    faq: [
      {
        q: "À quelle fréquence faire un gommage du visage ?",
        r: "Une fois par semaine convient à la plupart des peaux, une fois tous les dix jours aux peaux sensibles. Deux fois par semaine est un maximum, au-delà duquel la barrière cutanée se fragilise.",
      },
      {
        q: "Peut-on faire un gommage sur une peau à imperfections ?",
        r: "Sur les zones sans lésion active uniquement. Frotter un bouton enflammé aggrave l'inflammation et peut disperser les bactéries. Un exfoliant chimique doux est souvent mieux adapté.",
      },
      {
        q: "Gommage avant ou après le nettoyage ?",
        r: "Après. La peau doit être débarrassée du sébum et du maquillage pour que l'exfoliation atteigne la couche superficielle plutôt que les résidus déposés dessus.",
      },
    ],
  },

  imperfections: {
    roles: [
      "Un soin pour peaux à imperfections associe généralement des agents qui régulent le sébum et des agents qui désincrustent les pores.",
      "Ce type de produit agit sur l'aspect des imperfections : brillance, pores dilatés, irrégularités de surface.",
      "Une peau à imperfections reste une peau à hydrater : la priver d'eau entretient la production de sébum.",
      "Les résultats s'apprécient sur plusieurs semaines, la peau se renouvelant par cycles d'environ un mois.",
    ],
    gestes: [
      "Appliquer en couche fine sur l'ensemble de la zone concernée, pas uniquement sur les boutons visibles.",
      "Commencer un soir sur deux pendant la première semaine, puis passer à un usage quotidien si la peau le tolère.",
      "Ne pas percer ni gratter : la manipulation d'une lésion est la première cause de marque résiduelle.",
      "Associer une protection solaire quotidienne, les marques post-inflammatoires se fixant sous l'effet des UV.",
    ],
    rythmes: [
      "Une application quotidienne, généralement le soir.",
      "Un usage progressif au démarrage, pour laisser la peau s'habituer aux actifs kératolytiques.",
      "Un usage continu sur au moins un mois avant d'évaluer le résultat.",
    ],
    places: [
      "Ce soin se place après le nettoyage et avant la crème hydratante.",
      "Il ne se cumule pas avec un gommage mécanique le même jour.",
      "L'hydratation reste indispensable : elle limite l'inconfort provoqué par les actifs.",
    ],
    profils: [
      "Les peaux mixtes à grasses de l'adolescence et de l'âge adulte sont les principales concernées.",
      "Une acné inflammatoire étendue, douloureuse ou nodulaire relève d'une consultation dermatologique, pas d'un produit cosmétique.",
      "Les peaux sèches à imperfections choisissent des textures hydratantes plutôt qu'asséchantes.",
    ],
    faq: [
      {
        q: "Faut-il appliquer le soin sur tout le visage ou seulement sur les boutons ?",
        r: "Sur l'ensemble de la zone concernée. Appliquer uniquement sur les lésions visibles traite ce qui est déjà là, sans agir sur les micro-obstructions qui deviendront les boutons suivants.",
      },
      {
        q: "Une peau à imperfections doit-elle être hydratée ?",
        r: "Oui. Assécher la peau déclenche souvent une production de sébum accrue. Une texture légère, en gel ou en fluide, apporte l'eau nécessaire sans surcharger les pores.",
      },
      {
        q: "Au bout de combien de temps voit-on une différence ?",
        r: "Comptez au minimum quatre semaines, durée d'un cycle de renouvellement de l'épiderme. Une aggravation transitoire dans les deux premières semaines est fréquente avec les actifs kératolytiques.",
      },
      {
        q: "Quand consulter un dermatologue ?",
        r: "Dès que les lésions sont douloureuses, profondes, étendues ou laissent des marques. Une acné inflammatoire relève d'un traitement médical, qu'aucun produit cosmétique ne remplace.",
      },
    ],
  },

  taches: {
    roles: [
      "Un soin anti-taches agit sur l'uniformité du teint et l'atténuation visuelle des marques pigmentaires.",
      "Les taches résultent d'une production locale de mélanine, déclenchée par le soleil, l'inflammation ou les variations hormonales.",
      "Sans protection solaire quotidienne, aucun soin anti-taches ne donne de résultat durable : les UV réactivent la pigmentation.",
      "Ce type de formule combine généralement des actifs éclaircissants et des actifs exfoliants doux.",
    ],
    gestes: [
      "Appliquer sur l'ensemble du visage pour une action sur l'uniformité, ou localement sur les zones marquées.",
      "Enchaîner impérativement avec une protection solaire le matin, y compris par temps couvert.",
      "Introduire progressivement, un soir sur deux, pour vérifier la tolérance de la peau.",
      "Ne pas cumuler plusieurs actifs exfoliants le même soir.",
    ],
    rythmes: [
      "Une application quotidienne, le soir de préférence.",
      "Un usage continu sur au moins deux mois : la pigmentation s'atténue lentement.",
      "Une pause en période de forte exposition solaire, si la formule contient des actifs photosensibilisants.",
    ],
    places: [
      "Ce soin se place après le nettoyage, avant la crème hydratante.",
      "La protection solaire du matin est le complément obligatoire de tout protocole anti-taches.",
      "Il se combine mal avec un gommage mécanique appliqué le même jour.",
    ],
    profils: [
      "Les taches post-inflammatoires, fréquentes après une poussée d'acné, répondent généralement mieux que le mélasma.",
      "Le mélasma, d'origine hormonale, relève d'un avis dermatologique et exige une photoprotection stricte.",
      "Les peaux foncées sont plus sujettes aux marques post-inflammatoires et à leur persistance.",
    ],
    faq: [
      {
        q: "Combien de temps pour atténuer une tache ?",
        r: "Comptez plusieurs semaines à plusieurs mois selon la profondeur de la pigmentation. Une tache superficielle post-inflammatoire s'atténue plus vite qu'un mélasma, qui relève d'un suivi dermatologique.",
      },
      {
        q: "Faut-il mettre de la crème solaire avec un soin anti-taches ?",
        r: "Oui, c'est indispensable. Les UV réactivent la production de mélanine et annulent l'effet du soin. Une protection SPF 50 appliquée chaque matin fait partie intégrante du protocole.",
      },
      {
        q: "Peut-on l'utiliser toute l'année ?",
        r: "Oui, à condition de maintenir la protection solaire. Certaines formules à base d'acides s'espacent en été, période où l'exposition est plus forte et la peau plus réactive.",
      },
    ],
  },

  apaisant: {
    roles: [
      "Un soin apaisant vise le confort d'une peau qui réagit : sensations d'échauffement, rougeurs diffuses, tiraillements.",
      "Ce type de formule limite le nombre d'ingrédients pour réduire les risques de réaction.",
      "L'objectif est de restaurer le confort de la barrière cutanée, pas de traiter une pathologie.",
      "Une peau réactive supporte mal les changements : introduire un seul produit à la fois reste la règle.",
    ],
    gestes: [
      "Appliquer sur peau propre, sans frotter, par pressions douces plutôt qu'en étalant.",
      "Tester d'abord sur une petite zone, au pli du coude ou derrière l'oreille, pendant deux jours.",
      "Éviter l'eau chaude, qui accentue les rougeurs, au profit d'un rinçage tiède.",
      "Espacer les actifs exfoliants tant que la peau reste inconfortable.",
    ],
    rythmes: [
      "Deux fois par jour, matin et soir, pendant les périodes d'inconfort.",
      "En usage continu sur les peaux durablement réactives.",
      "En relais après une exposition au froid, au vent ou à un actif mal toléré.",
    ],
    places: [
      "Ce soin remplace temporairement les produits actifs de la routine, le temps que le confort revienne.",
      "Il s'applique après le nettoyage, en dernière couche si sa texture est riche.",
      "Il se combine avec un nettoyant sans tensioactif agressif et sans parfum.",
    ],
    profils: [
      "Les peaux sensibles, réactives et atopiques sont les premières concernées.",
      "Une rougeur persistante, une desquamation ou un suintement relèvent d'un avis médical.",
      "Les formules sans parfum et sans alcool limitent les facteurs de réaction.",
    ],
    faq: [
      {
        q: "Comment reconnaître une peau sensible ?",
        r: "Une peau sensible réagit vite : picotements, échauffement, rougeurs après un produit, l'eau chaude ou un changement de température. Cette réactivité est un état, pas un type de peau : elle peut concerner une peau grasse comme une peau sèche.",
      },
      {
        q: "Ce soin convient-il à une peau atopique ?",
        r: "Les soins émollients sans parfum conviennent à l'entretien quotidien d'une peau atopique entre les poussées. Une poussée active relève d'une prise en charge médicale, qu'aucun produit cosmétique ne remplace.",
      },
      {
        q: "Faut-il supprimer tous les actifs ?",
        r: "Temporairement, oui. Le temps que le confort revienne, une routine réduite à trois produits sans parfum ni acide donne à la barrière cutanée les conditions de se rétablir.",
      },
    ],
  },

  coreen: {
    roles: [
      "La cosmétique coréenne privilégie les textures légères superposées en couches fines plutôt qu'un produit riche unique.",
      "Une routine coréenne repose sur l'hydratation progressive : chaque couche apporte de l'eau, la dernière la retient.",
      "Les formules coréennes emploient fréquemment des extraits végétaux et des ferments comme ingrédients signature.",
      "L'étape de l'essence, propre à cette approche, se place entre la lotion et le sérum.",
    ],
    gestes: [
      "Appliquer dans la paume puis presser sur le visage : ce geste limite les pertes de produit et évite d'étirer la peau.",
      "Superposer les textures de la plus fluide à la plus riche, en attendant l'absorption entre chaque couche.",
      "Sur un masque en tissu, respecter un temps de pose de quinze à vingt minutes et ne pas rincer ensuite.",
      "Terminer la routine du matin par une protection solaire, étape centrale de cette approche.",
    ],
    rythmes: [
      "Matin et soir, en adaptant le nombre d'étapes au temps disponible.",
      "Une routine complète le soir, une routine réduite le matin.",
      "Les masques en tissu s'utilisent une à trois fois par semaine.",
    ],
    places: [
      "L'ordre courant est le suivant : démaquillant, nettoyant, lotion, essence, sérum, masque, contour des yeux, crème, protection solaire.",
      "Toutes les étapes ne sont pas obligatoires : la logique compte plus que le nombre de produits.",
      "La protection solaire ferme la routine du matin sans exception.",
    ],
    profils: [
      "Cette approche convient aux peaux déshydratées, qui tolèrent mieux plusieurs couches légères qu'une texture riche unique.",
      "Les peaux grasses y trouvent un moyen d'hydrater sans surcharger.",
      "Une routine à dix étapes n'a rien d'obligatoire : trois produits bien choisis suffisent.",
    ],
    faq: [
      {
        q: "Faut-il vraiment dix étapes dans une routine coréenne ?",
        r: "Non. La routine dite en dix étapes est un répertoire, pas une obligation quotidienne. Le principe utile est la superposition de textures légères, du plus fluide au plus riche, terminée par une protection solaire.",
      },
      {
        q: "Quelle différence entre une essence et un sérum ?",
        r: "Une essence est plus fluide et moins concentrée : elle prépare et hydrate. Un sérum est plus concentré et cible un besoin précis. L'essence se place avant le sérum dans la routine.",
      },
      {
        q: "À quelle fréquence utiliser un masque en tissu ?",
        r: "Une à trois fois par semaine. Le temps de pose se limite à quinze à vingt minutes : au-delà, le support sec commence à reprendre l'eau déposée sur la peau.",
      },
    ],
  },

  "levres-soin": {
    roles: [
      "La peau des lèvres ne comporte ni glandes sébacées ni film hydrolipidique : elle perd son eau beaucoup plus vite que le reste du visage.",
      "Un baume forme un film occlusif qui limite l'évaporation et protège du froid et du vent.",
      "Ce type de produit soulage l'inconfort des lèvres sèches et gercées.",
      "Se mordre ou humecter ses lèvres accélère leur dessèchement : la salive s'évapore en emportant de l'eau.",
    ],
    gestes: [
      "Appliquer en couche fine sur l'ensemble de la lèvre, y compris le contour.",
      "Renouveler dès que l'inconfort revient, sans limite de fréquence.",
      "Appliquer avant le rouge à lèvres pour éviter que la matière ne marque les plis.",
      "Un passage avant le coucher couvre les heures de sommeil, période de perte en eau importante.",
    ],
    rythmes: [
      "Plusieurs fois par jour, selon l'exposition au froid, au vent et à la climatisation.",
      "Systématiquement avant le coucher et avant une sortie par temps froid.",
      "En continu pendant les périodes de gerçures.",
    ],
    places: [
      "Le baume se pose en dernier dans la routine visage, ou juste avant le maquillage des lèvres.",
      "Il complète un gommage doux des lèvres lorsque des peaux mortes se sont formées.",
      "Il s'utilise indépendamment du reste de la routine.",
    ],
    profils: [
      "Tous les profils sont concernés, la zone n'ayant aucune protection naturelle.",
      "Les lèvres des enfants et des personnes exposées au vent sèchent plus vite.",
      "Une gerçure qui saigne ou une lésion persistante relève d'un avis médical.",
    ],
    faq: [
      {
        q: "Peut-on appliquer un baume à lèvres trop souvent ?",
        r: "Un baume peut s'appliquer autant de fois que nécessaire. Le vrai problème vient du geste de se lécher les lèvres, qui accélère le dessèchement en emportant de l'eau à l'évaporation.",
      },
      {
        q: "Faut-il un baume avec protection solaire ?",
        r: "En cas d'exposition prolongée, oui. Les lèvres n'ont pas de mélanine protectrice et figurent parmi les zones les plus exposées du visage. Un baume avec filtre est utile en montagne et en bord de mer.",
      },
      {
        q: "Comment traiter des lèvres qui pèlent ?",
        r: "Un gommage doux au sucre une fois par semaine retire les peaux mortes, suivi immédiatement d'un baume riche. Ne pas arracher les peaux : la lésion créée met plusieurs jours à se refermer.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Solaire                                                           */
  /* ---------------------------------------------------------------- */

  solaire: {
    roles: [
      "Une protection solaire filtre une partie des rayons UVB, responsables des coups de soleil, et UVA, impliqués dans le vieillissement cutané.",
      "L'indice SPF mesure la protection contre les UVB : un SPF 50 filtre environ 98 % de ces rayons, un SPF 30 environ 97 %.",
      "Aucun filtre solaire ne bloque la totalité des rayons : la protection reste partielle, quel que soit l'indice.",
      "L'exposition solaire est le premier facteur évitable de vieillissement cutané et de pigmentation irrégulière.",
    ],
    gestes: [
      "Appliquer l'équivalent de deux doigts de produit pour le visage et le cou : une quantité inférieure réduit la protection réelle.",
      "Appliquer vingt minutes avant l'exposition, sur peau sèche, en couche uniforme sans oublier les oreilles et la nuque.",
      "Renouveler toutes les deux heures et systématiquement après une baignade, une transpiration importante ou un essuyage.",
      "Sur le corps, compter environ six cuillères à café pour un adulte en maillot.",
    ],
    rythmes: [
      "Tous les jours d'exposition, y compris par temps couvert : les UVA traversent les nuages.",
      "Toutes les deux heures en exposition continue, et après chaque baignade.",
      "En Algérie, l'indice UV reste élevé une grande partie de l'année, ce qui justifie un usage quotidien sur le visage.",
    ],
    places: [
      "La protection solaire est la dernière étape de la routine du matin, appliquée après la crème hydratante.",
      "Le maquillage se pose par-dessus, une fois le filtre absorbé.",
      "Le soir, elle se retire avec un démaquillage complet : les filtres résistent au simple nettoyage à l'eau.",
    ],
    profils: [
      "Tous les phototypes sont concernés. Une peau foncée brûle moins vite mais reste exposée aux UVA et à la pigmentation irrégulière.",
      "Les enfants de moins de trois ans restent à l'ombre : le vêtement et le chapeau priment sur le produit.",
      "Les peaux sujettes aux taches et celles traitées par actifs renouvelants ont un besoin renforcé de photoprotection.",
    ],
    faq: [
      {
        q: "SPF 30 ou SPF 50 : quelle différence réelle ?",
        r: "Un SPF 30 filtre environ 97 % des UVB, un SPF 50 environ 98 %. L'écart est faible sur le papier, mais il compte sur les peaux claires, les peaux sujettes aux taches et en exposition prolongée.",
      },
      {
        q: "Quelle quantité de crème solaire appliquer ?",
        r: "L'équivalent de deux doigts de produit pour le visage et le cou, environ six cuillères à café pour le corps d'un adulte. Une quantité inférieure fait chuter la protection réelle bien en dessous de l'indice affiché.",
      },
      {
        q: "Faut-il en mettre par temps couvert ?",
        r: "Oui. Les UVA traversent les nuages et le verre. C'est la raison pour laquelle une protection quotidienne sur le visage se justifie même sans exposition directe au soleil.",
      },
      {
        q: "Filtre minéral ou filtre organique ?",
        r: "Les filtres minéraux, à base d'oxyde de zinc ou de dioxyde de titane, réfléchissent les rayons et sont souvent mieux tolérés par les peaux réactives. Les filtres organiques sont plus fluides et laissent moins de voile blanc.",
      },
    ],
  },

  "apres-soleil": {
    roles: [
      "Un après-soleil apporte de l'eau et du confort à une peau qui a chauffé et perdu de l'hydratation pendant l'exposition.",
      "Ce type de formule associe généralement des agents hydratants et des extraits apaisants.",
      "Un après-soleil ne soigne pas un coup de soleil : il accompagne le confort d'une peau simplement échauffée.",
      "Une peau bien hydratée après exposition conserve son hâle plus longtemps, la desquamation étant retardée.",
    ],
    gestes: [
      "Appliquer sur peau propre et fraîche, après une douche tiède, sur l'ensemble des zones exposées.",
      "Étaler généreusement sans masser trop fort si la peau reste sensible au toucher.",
      "Conserver le produit au frais accentue la sensation de fraîcheur à l'application.",
      "Renouveler dans la soirée si la peau tire encore.",
    ],
    rythmes: [
      "Le soir même de l'exposition, puis chaque jour tant que la peau reste sèche.",
      "Après chaque baignade prolongée, l'eau de mer et le chlore accentuant la déshydratation.",
      "En usage quotidien pendant toute la période estivale.",
    ],
    places: [
      "L'après-soleil remplace le lait hydratant habituel pendant la période d'exposition.",
      "Il s'applique après la douche, sur peau encore légèrement humide.",
      "Il ne dispense en rien de la protection solaire du lendemain.",
    ],
    profils: [
      "Toutes les peaux exposées, adultes comme enfants, avec une formule adaptée à l'âge.",
      "Un coup de soleil avec cloques, fièvre ou frissons relève d'un avis médical immédiat.",
      "Les peaux réactives choisissent une formule sans parfum et sans alcool.",
    ],
    faq: [
      {
        q: "Un après-soleil soigne-t-il un coup de soleil ?",
        r: "Non. Un coup de soleil est une brûlure : l'après-soleil apporte du confort et de l'hydratation, sans effet curatif. Une brûlure avec cloques, fièvre ou frissons impose une consultation médicale.",
      },
      {
        q: "Peut-on utiliser un lait corps à la place ?",
        r: "Oui, faute de mieux. Un après-soleil est simplement formulé plus léger, plus frais et plus riche en agents apaisants, ce qui le rend plus confortable sur une peau qui a chauffé.",
      },
      {
        q: "Comment éviter que la peau pèle ?",
        r: "En hydratant matin et soir dès le premier jour d'exposition et en évitant les douches chaudes. La desquamation traduit une brûlure superficielle : la meilleure prévention reste la protection solaire.",
      },
    ],
  },

  autobronzant: {
    roles: [
      "Un autobronzant colore la couche superficielle de la peau par une réaction chimique avec la kératine, sans exposition au soleil.",
      "La coloration apparaît en deux à quatre heures et s'estompe avec le renouvellement naturel de l'épiderme.",
      "Un autobronzant ne protège pas du soleil : il colore, il ne filtre pas les UV.",
      "La régularité du résultat dépend presque entièrement de la préparation de la peau.",
    ],
    gestes: [
      "Exfolier la veille et hydrater les zones sèches : coudes, genoux, chevilles, dos des mains.",
      "Appliquer par sections, en mouvements circulaires, avec un gant applicateur pour éviter les traces.",
      "Se laver les mains immédiatement après application, ou porter un gant pendant toute la pose.",
      "Attendre le séchage complet avant de s'habiller, et éviter la douche pendant six à huit heures.",
    ],
    rythmes: [
      "Une application tous les trois à cinq jours pour entretenir la coloration.",
      "Une application unique pour un effet ponctuel, qui s'estompe en cinq à sept jours.",
      "Toujours après l'épilation, jamais dans les vingt-quatre heures qui la suivent.",
    ],
    places: [
      "L'application se fait sur peau propre, sèche et exfoliée, sans crème appliquée juste avant sauf sur les zones sèches.",
      "L'hydratation quotidienne prolonge la tenue de la coloration.",
      "La protection solaire reste indispensable en cas d'exposition.",
    ],
    profils: [
      "Toutes les carnations, en choisissant une intensité progressive et en superposant plutôt qu'en forçant la première application.",
      "Les peaux très claires commencent par une formule graduelle pour éviter un contraste marqué.",
      "Éviter les zones lésées, irritées ou fraîchement épilées.",
    ],
    faq: [
      {
        q: "Un autobronzant protège-t-il du soleil ?",
        r: "Non. La coloration obtenue ne filtre pas les UV. Une protection solaire reste indispensable en cas d'exposition, exactement comme sur une peau non colorée.",
      },
      {
        q: "Comment éviter les traces ?",
        r: "Exfoliez la veille, hydratez les zones sèches comme les coudes et les genoux, appliquez avec un gant par sections régulières, et lavez-vous les mains immédiatement après.",
      },
      {
        q: "Combien de temps tient la coloration ?",
        r: "Cinq à sept jours en moyenne, la couche superficielle de l'épiderme se renouvelant en continu. L'hydratation quotidienne ralentit la desquamation et prolonge le résultat.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Cheveux                                                           */
  /* ---------------------------------------------------------------- */

  shampoing: {
    roles: [
      "Un shampoing nettoie le cuir chevelu : c'est lui qui produit le sébum, pas les longueurs.",
      "La formule associe des tensioactifs, qui captent le sébum et les résidus, et des agents de conditionnement qui limitent l'effet rêche après rinçage.",
      "Un shampoing adapté espace les lavages : un cuir chevelu décapé compense en produisant davantage de sébum.",
      "En Algérie, l'eau calcaire dépose des sels minéraux sur la fibre, ce qui ternit les cheveux et alourdit le rendu.",
    ],
    gestes: [
      "Émulsionner dans les mains avant application : le produit se répartit mieux et la quantité nécessaire diminue.",
      "Masser le cuir chevelu du bout des doigts, jamais avec les ongles, pendant une trentaine de secondes.",
      "Laisser la mousse glisser sur les longueurs au rinçage plutôt que de les frotter directement.",
      "Rincer longuement, à l'eau tiède : un résidu de shampoing alourdit la fibre et démange.",
    ],
    rythmes: [
      "Deux à trois lavages par semaine conviennent à la plupart des cuirs chevelus.",
      "Un lavage quotidien reste possible avec une formule douce, s'il correspond au mode de vie.",
      "Espacer progressivement les lavages permet au cuir chevelu de réguler sa production de sébum.",
    ],
    places: [
      "Le shampoing ouvre la routine capillaire. L'après-shampoing suit, sur les longueurs uniquement.",
      "Un masque remplace l'après-shampoing une à deux fois par semaine.",
      "Un soin sans rinçage se pose ensuite sur cheveux essorés.",
    ],
    profils: [
      "Les cheveux gras à la racine et secs sur les pointes utilisent un shampoing doux et concentrent le soin sur les longueurs.",
      "Les cheveux colorés préfèrent des formules sans sulfates agressifs, qui délavent plus vite la couleur.",
      "Un cuir chevelu qui démange durablement ou desquame relève d'un avis dermatologique.",
    ],
    faq: [
      {
        q: "À quelle fréquence se laver les cheveux ?",
        r: "Deux à trois fois par semaine conviennent à la plupart des cuirs chevelus. Un lavage quotidien est possible avec une formule douce. L'essentiel est la régularité : un cuir chevelu décapé produit davantage de sébum.",
      },
      {
        q: "Faut-il faire deux shampoings ?",
        r: "Un second passage se justifie quand le premier ne mousse pas, signe d'un excès de sébum ou de résidus de coiffage. Sur cheveux peu chargés, un seul lavage suffit.",
      },
      {
        q: "L'eau calcaire abîme-t-elle les cheveux ?",
        r: "Elle ne les abîme pas directement mais dépose des sels minéraux sur la fibre, ce qui ternit la couleur et donne une sensation rêche. Un rinçage final à l'eau froide et un soin chélatant ponctuel limitent le dépôt.",
      },
      {
        q: "Le shampoing s'applique-t-il sur les longueurs ?",
        r: "Non. Le shampoing se masse sur le cuir chevelu, source du sébum. La mousse nettoie suffisamment les longueurs en glissant lors du rinçage ; les frotter directement les rend rêches.",
      },
    ],
  },

  "apres-shampoing": {
    roles: [
      "Un après-shampoing referme les écailles de la fibre ouvertes par le lavage, ce qui facilite le démêlage et limite la casse.",
      "Un masque agit plus en profondeur qu'un après-shampoing grâce à un temps de pose plus long et une concentration plus élevée.",
      "Ce soin s'applique sur les longueurs et les pointes, jamais sur les racines, qu'il alourdirait.",
      "La fibre capillaire est une matière morte : elle ne se répare pas, elle se gaine et se protège.",
    ],
    gestes: [
      "Essorer les cheveux à la main avant application : sur cheveux ruisselants, le produit se dilue et glisse.",
      "Répartir des longueurs vers les pointes, puis démêler au peigne à dents larges pendant le temps de pose.",
      "Respecter deux à trois minutes de pose pour un après-shampoing, cinq à dix minutes pour un masque.",
      "Rincer à l'eau fraîche en fin de douche : la fibre reste plus lisse et plus brillante.",
    ],
    rythmes: [
      "À chaque lavage pour un après-shampoing.",
      "Une à deux fois par semaine pour un masque, en remplacement de l'après-shampoing.",
      "Un usage renforcé après une exposition au sel, au chlore ou à une coloration.",
    ],
    places: [
      "Ce soin se place immédiatement après le shampoing, sur cheveux essorés.",
      "Il précède les soins sans rinçage, qui se posent sur cheveux encore humides.",
      "Il ne remplace pas un soin de longueur appliqué avant le lavage sur cheveux très secs.",
    ],
    profils: [
      "Les cheveux longs, colorés, bouclés ou crépus tirent le plus de bénéfice de cette étape.",
      "Les cheveux fins et à tendance grasse l'appliquent uniquement sur les pointes, en quantité réduite.",
      "Les cheveux courts et non traités peuvent s'en passer sans inconvénient.",
    ],
    faq: [
      {
        q: "Après-shampoing ou masque : quelle différence ?",
        r: "L'après-shampoing agit en surface, en deux à trois minutes, à chaque lavage. Le masque est plus concentré, pose cinq à dix minutes et s'utilise une à deux fois par semaine, en remplacement.",
      },
      {
        q: "Faut-il appliquer l'après-shampoing sur les racines ?",
        r: "Non. Les agents de conditionnement alourdissent le cuir chevelu et accélèrent le regraissage. L'application se limite aux longueurs et aux pointes, à partir de la hauteur des oreilles.",
      },
      {
        q: "Combien de temps laisser poser un masque ?",
        r: "Cinq à dix minutes suffisent. Au-delà, le bénéfice n'augmente plus : les agents de conditionnement se fixent sur la fibre en quelques minutes, la durée supplémentaire n'y ajoute rien.",
      },
    ],
  },

  "anti-chute": {
    roles: [
      "Un soin anti-chute cible le cuir chevelu et l'environnement du bulbe, pas la fibre visible.",
      "La chute saisonnière, au printemps et à l'automne, est un phénomène physiologique courant et transitoire.",
      "Perdre cinquante à cent cheveux par jour correspond au renouvellement normal du cuir chevelu.",
      "Un produit cosmétique accompagne l'entretien du cuir chevelu ; il ne traite pas une alopécie constituée.",
    ],
    gestes: [
      "Appliquer directement sur le cuir chevelu, raie par raie, sur cheveux propres et essorés.",
      "Masser deux à trois minutes du bout des doigts pour répartir le produit et activer la circulation locale.",
      "Ne pas rincer les lotions sans rinçage, conçues pour rester en place.",
      "Éviter les coiffures serrées et les températures élevées de séchage pendant la période de chute.",
    ],
    rythmes: [
      "Une cure de trois mois est la durée de référence, le cycle du cheveu s'étalant sur plusieurs mois.",
      "Deux à trois applications par semaine pour une lotion, à chaque lavage pour un shampoing.",
      "Renouveler la cure aux changements de saison si la chute est saisonnière.",
    ],
    places: [
      "Le shampoing anti-chute se combine avec une lotion sans rinçage appliquée après le lavage.",
      "L'après-shampoing reste réservé aux longueurs pour ne pas alourdir le cuir chevelu.",
      "Le soin s'applique avant le séchage, sur cheveux essorés.",
    ],
    profils: [
      "Les chutes saisonnières et réactionnelles, liées au stress, à la fatigue ou à une carence, répondent le mieux.",
      "Une chute localisée, brutale ou accompagnée de démangeaisons impose une consultation médicale.",
      "L'alopécie androgénétique relève d'un traitement médical, qu'aucun cosmétique ne remplace.",
    ],
    faq: [
      {
        q: "Combien de cheveux perd-on normalement par jour ?",
        r: "Entre cinquante et cent cheveux par jour, ce qui correspond au renouvellement naturel du cuir chevelu. Une perte supérieure sur plusieurs semaines, ou des zones dégarnies, justifie un avis médical.",
      },
      {
        q: "Combien de temps dure une cure anti-chute ?",
        r: "Trois mois constituent la durée de référence, le cycle de croissance du cheveu s'étalant sur plusieurs mois. Interrompre au bout de trois semaines ne permet pas d'évaluer le résultat.",
      },
      {
        q: "Un shampoing anti-chute suffit-il ?",
        r: "Le shampoing reste peu de temps au contact du cuir chevelu. Il se combine généralement avec une lotion sans rinçage, qui reste en place et agit sur la durée.",
      },
    ],
  },

  "huile-cheveux": {
    roles: [
      "Une huile capillaire gaine la fibre, limite la casse au démêlage et discipline les pointes.",
      "Appliquée avant le lavage, une huile végétale limite la pénétration de l'eau dans la fibre et réduit son gonflement.",
      "Sur cheveux secs, quelques gouttes suffisent : l'excédent alourdit et laisse un aspect gras.",
      "Les cheveux bouclés et crépus, dont le sébum descend mal le long de la tige, sont les plus demandeurs.",
    ],
    gestes: [
      "Chauffer deux à trois gouttes entre les paumes, puis passer sur les longueurs et les pointes uniquement.",
      "En bain d'huile, appliquer généreusement une à deux heures avant le shampoing, puis laver deux fois.",
      "Éviter les racines sauf sur cuir chevelu sec, où un massage à l'huile se pratique avant le lavage.",
      "Sur cheveux humides, l'huile se répartit plus facilement et le rendu est moins gras.",
    ],
    rythmes: [
      "En bain avant shampoing, une fois par semaine.",
      "En finition sur cheveux secs, quotidiennement si la quantité reste minime.",
      "Après chaque lavage sur cheveux très secs ou crépus.",
    ],
    places: [
      "En bain d'huile, elle précède le shampoing. En finition, elle ferme la routine.",
      "Elle se combine avec un masque hebdomadaire sur les cheveux très secs.",
      "Elle se pose après un soin sans rinçage, jamais avant.",
    ],
    profils: [
      "Cheveux secs, bouclés, crépus, colorés ou fragilisés par la chaleur.",
      "Les cheveux fins limitent l'application aux pointes, sous peine d'un rendu plat.",
      "Un cuir chevelu à tendance grasse évite l'application à la racine.",
    ],
    faq: [
      {
        q: "Faut-il appliquer l'huile avant ou après le shampoing ?",
        r: "Les deux se pratiquent. Avant le lavage, en bain d'une à deux heures, l'huile protège la fibre pendant le shampoing. Après le lavage, quelques gouttes sur les pointes servent de finition et disciplinent.",
      },
      {
        q: "Quelle quantité d'huile utiliser ?",
        r: "Deux à trois gouttes pour des cheveux mi-longs, chauffées entre les paumes avant application sur les longueurs. L'excédent ne pénètre pas et laisse un aspect gras que le lavage suivant devra retirer.",
      },
      {
        q: "Peut-on laisser un bain d'huile toute la nuit ?",
        r: "C'est possible sur cheveux très secs ou crépus, en protégeant l'oreiller. Sur cuir chevelu à tendance grasse, une à deux heures suffisent : au-delà, le lavage suivant devient difficile.",
      },
    ],
  },

  "sans-rincage": {
    roles: [
      "Un soin sans rinçage reste sur la fibre et prolonge l'effet de l'après-shampoing entre deux lavages.",
      "Ce type de produit facilite le démêlage, limite les frisottis et protège de la chaleur du séchage.",
      "Appliqué sur cheveux humides, il se répartit mieux et évite les surcharges localisées.",
      "Les longueurs et les pointes en tirent le bénéfice ; les racines n'en ont pas besoin.",
    ],
    gestes: [
      "Vaporiser ou répartir sur cheveux essorés, des longueurs vers les pointes, puis démêler au peigne à dents larges.",
      "Ne pas rincer : la formule est conçue pour rester en place et sécher avec les cheveux.",
      "Appliquer avant tout appareil chauffant si le produit annonce une protection thermique.",
      "Renouveler sur cheveux secs en cours de journée pour discipliner les pointes.",
    ],
    rythmes: [
      "À chaque lavage, sur cheveux humides.",
      "En retouche quotidienne sur cheveux secs, en très petite quantité.",
      "Systématiquement avant l'usage d'un sèche-cheveux ou d'un lisseur.",
    ],
    places: [
      "Ce soin se place après le rinçage de l'après-shampoing et avant le séchage.",
      "Il précède une huile de finition, qui se pose en dernier.",
      "Il ne remplace ni l'après-shampoing ni le masque.",
    ],
    profils: [
      "Cheveux longs, bouclés, crépus, colorés ou soumis à la chaleur régulière.",
      "Les cheveux fins choisissent une texture en spray plutôt qu'une crème, plus lourde.",
      "Un cuir chevelu réactif évite l'application à la racine.",
    ],
    faq: [
      {
        q: "Un soin sans rinçage alourdit-il les cheveux ?",
        r: "Seulement en excès ou appliqué à la racine. Sur les longueurs et les pointes, en quantité mesurée, il facilite le démêlage sans alourdir. Les cheveux fins privilégient les textures en spray.",
      },
      {
        q: "Peut-on l'utiliser tous les jours ?",
        r: "Oui, en petite quantité, notamment sur cheveux bouclés ou crépus qui se démêlent quotidiennement. Sur cheveux fins, un usage à chaque lavage suffit.",
      },
      {
        q: "Faut-il l'appliquer avant le sèche-cheveux ?",
        r: "Oui lorsque le produit annonce une protection thermique. La formule doit être en place avant l'exposition à la chaleur, sur cheveux essorés et démêlés.",
      },
    ],
  },

  coloration: {
    roles: [
      "Une coloration modifie la teinte de la fibre, de façon temporaire, semi-permanente ou permanente selon sa formule.",
      "Une coloration permanente ouvre les écailles de la fibre pour déposer les pigments, ce qui la rend plus poreuse.",
      "Les racines repoussent d'environ un centimètre par mois, ce qui détermine le rythme des retouches.",
      "Un test de sensibilité quarante-huit heures avant l'application est recommandé par tous les fabricants.",
    ],
    gestes: [
      "Réaliser le test de sensibilité au pli du coude quarante-huit heures avant, sans exception.",
      "Appliquer sur cheveux secs et non lavés : le film de sébum protège le cuir chevelu.",
      "Commencer par les racines, où la chaleur du cuir chevelu accélère la réaction, puis étirer sur les longueurs.",
      "Respecter le temps de pose indiqué et rincer jusqu'à ce que l'eau soit parfaitement claire.",
    ],
    rythmes: [
      "Toutes les quatre à six semaines pour une retouche de racines.",
      "Une coloration semi-permanente s'estompe en général en six à huit shampoings.",
      "Espacer les colorations permanentes limite la porosité cumulée de la fibre.",
    ],
    places: [
      "Le soin post-coloration fourni avec le produit se pose immédiatement après le rinçage.",
      "Les shampoings sans sulfates agressifs prolongent la tenue de la couleur.",
      "Un masque hebdomadaire compense la porosité créée par la coloration.",
    ],
    profils: [
      "Les cheveux poreux, déjà décolorés ou fragilisés absorbent plus vite et plus intensément les pigments.",
      "Une réaction lors d'une coloration précédente contre-indique tout nouvel usage sans avis médical.",
      "Les colorations sont déconseillées sur cuir chevelu lésé ou irrité.",
    ],
    faq: [
      {
        q: "Faut-il faire un test avant une coloration ?",
        r: "Oui, quarante-huit heures avant, au pli du coude ou derrière l'oreille. Ce test est recommandé par tous les fabricants, y compris si vous avez déjà utilisé le produit auparavant.",
      },
      {
        q: "Faut-il se laver les cheveux avant de colorer ?",
        r: "Non. La coloration s'applique sur cheveux secs et non lavés depuis un ou deux jours. Le film de sébum forme une protection naturelle pour le cuir chevelu pendant la pose.",
      },
      {
        q: "Tous les combien retoucher les racines ?",
        r: "Toutes les quatre à six semaines en moyenne, les cheveux poussant d'environ un centimètre par mois. La retouche se limite aux racines, l'application répétée sur les longueurs les fragilisant inutilement.",
      },
    ],
  },

  coiffant: {
    roles: [
      "Un produit coiffant fixe la forme donnée à la coiffure et la maintient dans le temps.",
      "Le niveau de fixation détermine la tenue : une fixation forte structure, une fixation légère laisse du mouvement.",
      "Ces formules se retirent au lavage : elles se déposent sur la fibre sans la modifier durablement.",
      "Un résidu de produit coiffant accumulé alourdit les cheveux et ternit leur aspect.",
    ],
    gestes: [
      "Répartir une noisette entre les paumes puis travailler mèche par mèche, des longueurs vers les racines.",
      "Sur cheveux humides pour un effet structuré, sur cheveux secs pour une retouche.",
      "Vaporiser un spray à vingt-cinq centimètres pour une répartition régulière.",
      "Un lavage clarifiant ponctuel retire les résidus accumulés.",
    ],
    rythmes: [
      "À chaque coiffage, en quantité adaptée à la longueur.",
      "Un usage quotidien est possible, à condition de laver régulièrement.",
      "En retouche en cours de journée sur les zones qui retombent.",
    ],
    places: [
      "Le produit coiffant se pose en dernier, après les soins sans rinçage.",
      "Il suit le séchage lorsqu'il s'agit d'une finition, il le précède lorsqu'il structure.",
      "Il ne se cumule pas avec une huile de finition, qui annule la fixation.",
    ],
    profils: [
      "Cheveux courts et mi-longs pour les textures fixantes, cheveux bouclés pour les définisseurs de boucles.",
      "Les cheveux fins limitent la quantité, une surcharge écrasant le volume.",
      "Un cuir chevelu réactif évite les formules alcoolisées à la racine.",
    ],
    faq: [
      {
        q: "Sur cheveux secs ou humides ?",
        r: "Sur cheveux humides pour structurer une coiffure au séchage, sur cheveux secs pour une retouche ou une finition. Le rendu diffère nettement selon le moment d'application.",
      },
      {
        q: "Les produits coiffants abîment-ils les cheveux ?",
        r: "Ils se déposent sur la fibre sans la modifier durablement et se retirent au lavage. Le point d'attention est l'accumulation de résidus, que corrige un shampoing clarifiant ponctuel.",
      },
      {
        q: "Quelle quantité utiliser ?",
        r: "L'équivalent d'une noisette pour des cheveux mi-longs, à répartir entre les paumes avant application. Une quantité excessive alourdit et rend le coiffage rigide.",
      },
    ],
  },

  "appareil-coiffant": {
    roles: [
      "Un appareil coiffant met la fibre en forme par la chaleur, de façon temporaire et réversible au lavage.",
      "La chaleur au-delà de 200 °C dégrade la kératine : la température se règle au plus bas qui donne le résultat voulu.",
      "Un protecteur thermique appliqué avant l'usage limite l'impact de la chaleur sur la fibre.",
      "Un appareil ne s'utilise jamais sur cheveux humides, sauf s'il est explicitement conçu pour cet usage.",
    ],
    gestes: [
      "Appliquer un protecteur thermique sur cheveux essorés, puis sécher complètement avant de passer l'appareil.",
      "Travailler par mèches fines : une mèche épaisse impose plusieurs passages et donc plus de chaleur cumulée.",
      "Un seul passage par mèche, sans ralentir sur la même zone.",
      "Nettoyer les plaques à froid après usage : les résidus de produits brûlent au passage suivant.",
    ],
    rythmes: [
      "Un usage occasionnel limite l'exposition cumulée de la fibre à la chaleur.",
      "Espacer les séances et alterner avec des séchages à l'air libre.",
      "Renforcer les soins nourrissants en période d'usage régulier.",
    ],
    places: [
      "L'appareil intervient après le séchage complet et après le protecteur thermique.",
      "Une huile de finition se pose après le coiffage, jamais avant le passage de l'appareil.",
      "Le masque hebdomadaire compense l'exposition à la chaleur.",
    ],
    profils: [
      "Tous types de cheveux, avec des températures adaptées : plus basses sur cheveux fins ou colorés.",
      "Les cheveux déjà fragilisés ou décolorés limitent fortement l'usage.",
      "Les cheveux épais et crépus supportent des températures plus élevées mais restent sensibles au passage répété.",
    ],
    faq: [
      {
        q: "À quelle température régler un lisseur ?",
        r: "Au plus bas réglage donnant le résultat voulu. En pratique, 150 à 180 °C sur cheveux fins ou colorés, jusqu'à 200 °C sur cheveux épais. Au-delà de 200 °C, la kératine se dégrade.",
      },
      {
        q: "Faut-il un protecteur thermique ?",
        r: "Oui, systématiquement. Il se pose sur cheveux essorés, avant le séchage complet, et forme un film qui limite le transfert direct de chaleur à la fibre.",
      },
      {
        q: "Peut-on lisser des cheveux humides ?",
        r: "Non, sauf appareil explicitement conçu pour cela. L'eau contenue dans la fibre se vaporise brutalement au contact des plaques, ce qui fragilise durablement le cheveu.",
      },
    ],
  },

  "soin-cheveux-general": {
    roles: [
      "Un soin capillaire agit soit sur le cuir chevelu, soit sur la fibre : les deux ne demandent pas les mêmes produits.",
      "La fibre capillaire est une matière morte : elle se gaine et se protège, elle ne se répare pas.",
      "Une routine capillaire tient en trois gestes : laver le cuir chevelu, nourrir les longueurs, protéger avant la chaleur.",
      "En Algérie, l'eau calcaire, le soleil et la chaleur sèche sont les trois contraintes les plus courantes.",
    ],
    gestes: [
      "Appliquer sur cheveux propres et essorés, en répartissant des longueurs vers les pointes.",
      "Démêler au peigne à dents larges pendant le temps de pose plutôt qu'à sec après séchage.",
      "Rincer à l'eau fraîche en fin de douche pour refermer les écailles de la fibre.",
      "Limiter la chaleur du séchage et espacer l'usage des appareils coiffants.",
    ],
    rythmes: [
      "À chaque lavage, deux à trois fois par semaine dans l'usage courant.",
      "Un soin renforcé une fois par semaine, en complément de la routine.",
      "Un usage adapté à la saison : les besoins augmentent en été et après exposition au sel.",
    ],
    places: [
      "Le soin suit le shampoing et précède le séchage.",
      "Les produits sans rinçage se posent en dernier, sur cheveux humides.",
      "Les soins de cuir chevelu s'appliquent raie par raie, séparément des soins de longueur.",
    ],
    profils: [
      "Les cheveux secs, bouclés et crépus demandent plus de corps gras que les cheveux fins et raides.",
      "Les cheveux colorés supportent mal les tensioactifs agressifs, qui délavent la couleur.",
      "Un cuir chevelu qui démange ou desquame durablement relève d'un avis dermatologique.",
    ],
    faq: [
      {
        q: "Comment construire une routine capillaire simple ?",
        r: "Trois gestes suffisent : un shampoing adapté au cuir chevelu, un après-shampoing ou un masque sur les longueurs, et un soin sans rinçage avant le séchage. Le reste relève du confort.",
      },
      {
        q: "Les cheveux abîmés peuvent-ils se réparer ?",
        r: "Non au sens strict : la fibre est une matière morte. Les soins la gainent, limitent la casse et améliorent son aspect. Seule la coupe retire définitivement une pointe fourchue.",
      },
      {
        q: "Comment protéger ses cheveux du soleil ?",
        r: "Un couvre-chef reste la protection la plus efficace. En complément, un soin sans rinçage appliqué avant l'exposition limite le dessèchement, et un rinçage à l'eau claire après la baignade retire sel et chlore.",
      },
    ],
  },

  "soin-visage-general": {
    roles: [
      "Une routine visage tient en trois étapes : nettoyer, traiter, protéger.",
      "La protection solaire quotidienne est le geste qui a le plus d'effet mesurable sur l'aspect de la peau dans la durée.",
      "Un soin visage se choisit sur l'état de la peau du moment, pas sur un type figé une fois pour toutes.",
      "La régularité produit davantage de résultat que l'accumulation de produits.",
    ],
    gestes: [
      "Appliquer sur peau propre, du centre du visage vers l'extérieur, sans étirer.",
      "Respecter l'ordre du plus fluide au plus riche : lotion, sérum, crème.",
      "Introduire un produit à la fois, sur une à deux semaines, pour identifier ce qui convient.",
      "Terminer la routine du matin par une protection solaire.",
    ],
    rythmes: [
      "Matin et soir, tous les jours.",
      "Une routine complète le soir, une routine réduite le matin.",
      "Un usage continu : la peau se renouvelle par cycles d'environ quatre semaines.",
    ],
    places: [
      "Le nettoyage ouvre la routine, la crème hydratante la ferme le soir, la protection solaire le matin.",
      "Les soins ciblés s'intercalent entre le nettoyage et l'hydratation.",
      "Les gestes hebdomadaires, masque et gommage, se placent après le nettoyage.",
    ],
    profils: [
      "Le type de peau se détermine deux heures après un nettoyage, sans aucun produit appliqué.",
      "Une peau grasse produit du sébum mais peut manquer d'eau : les deux besoins sont distincts.",
      "Une peau réactive limite le nombre d'actifs et privilégie les formules sans parfum.",
    ],
    faq: [
      {
        q: "Dans quel ordre appliquer ses soins visage ?",
        r: "Du plus fluide au plus riche : nettoyant, lotion, sérum, contour des yeux, crème hydratante, et protection solaire en dernier le matin. Cet ordre permet à chaque texture de pénétrer avant la suivante.",
      },
      {
        q: "Comment connaître son type de peau ?",
        r: "Nettoyez le visage, n'appliquez rien, et observez deux heures plus tard. Une peau qui brille partout est grasse, qui tiraille est sèche, qui brille sur la zone médiane seulement est mixte.",
      },
      {
        q: "Combien de produits faut-il dans une routine ?",
        r: "Trois suffisent : un nettoyant, une crème hydratante et une protection solaire. Les soins ciblés s'ajoutent ensuite selon un besoin identifié, un à la fois.",
      },
    ],
  },
};

/* MARQUEUR_FAMILLES_SUITE */
