/**
 * Banque de familles de produits.
 *
 * Une « famille » regroupe les nœuds de la taxonomie qui se décrivent de la
 * même façon : un gel nettoyant et un parfum n'ont ni le même geste, ni le
 * même moment d'application, ni les mêmes questions. C'est cette table qui
 * empêche le générateur de retomber sur un texte passe-partout.
 *
 * Aucun import : données pures, consommées par `descriptions.ts`.
 *
 * Jetons disponibles dans les gabarits :
 *   {nom} {marque} {contenance} {prix} {keyword} {catNom}
 *   {nature} {Nature} {natureArt} {NatureArt} {ce} {Ce} {le} {Le} {zone}
 * Les jetons conditionnels ({marque}, {contenance}) ne sont utilisés que dans
 * les blocs génériques du moteur, jamais ici : une famille doit rendre un
 * texte correct même quand la marque est inconnue.
 */

export interface QuestionReponse {
  q: string;
  r: string;
}

export interface Famille {
  /** Façons de nommer le type de produit, en toutes lettres. */
  nature: readonly string[];
  /** Genre grammatical de `nature`, pour accorder « ce » / « cette ». */
  genre: "m" | "f";
  /** Zone d'application par défaut, déjà articulée. Ex. « le visage ». */
  zone: string;
  /** À quoi sert le produit. Des faits, jamais une promesse de résultat. */
  role: readonly string[];
  /** Geste d'application, concret et actionnable. */
  geste: readonly string[];
  /** Place dans la routine : moment, fréquence, produits qui l'entourent. */
  moment: readonly string[];
  /** Précaution d'usage. Absente quand il n'y en a pas de réelle. */
  precaution?: readonly string[];
  /** Questions propres à la famille, telles qu'un acheteur les taperait. */
  faq: readonly QuestionReponse[];
}

export const FAMILLES: Record<string, Famille> = {
  /* ---------------------------------------------------------------- */
  /* Soin du visage — nettoyage                                        */
  /* ---------------------------------------------------------------- */

  "nettoyant-visage": {
    nature: ["nettoyant visage", "soin nettoyant pour le visage"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} retire le sébum, les particules de pollution et les résidus de maquillage accumulés sur {zone} au fil de la journée.",
      "Un {nature} prépare la peau aux soins suivants : sur une peau propre, un sérum ou une crème pénètrent sans obstacle.",
      "{nom} nettoie sans décaper, ce qui évite l'effet rebond où la peau produit davantage de sébum après un lavage trop agressif.",
    ],
    geste: [
      "Faire mousser une noisette de {nom} entre les mains humides, masser {zone} en mouvements circulaires, puis rincer à l'eau tiède.",
      "Appliquer {ce} sur peau humide en évitant le contour des yeux, rincer abondamment, puis sécher en tamponnant avec une serviette propre.",
      "Deux pressions suffisent : le produit se travaille sur peau mouillée pendant trente secondes, puis se rince sans frotter.",
    ],
    moment: [
      "Le nettoyage se place matin et soir, avant le sérum et la crème hydratante.",
      "Le soir, {ce} intervient après le démaquillage : c'est la seconde étape du double nettoyage.",
    ],
    precaution: [
      "L'eau tiède est préférable à l'eau chaude, qui dissout les lipides de surface et laisse une sensation de tiraillement.",
    ],
    faq: [
      {
        q: "Faut-il utiliser {nom} matin et soir ?",
        r: "Deux nettoyages par jour conviennent à la plupart des peaux : un le matin pour retirer le sébum de la nuit, un le soir pour éliminer pollution et maquillage. Sur peau sèche ou réactive, un seul nettoyage le soir suffit souvent.",
      },
      {
        q: "{Le} s'utilise avant ou après le démaquillant ?",
        r: "Après. Le démaquillant dissout les corps gras et le maquillage, {le} prend le relais pour retirer ce qui reste et les impuretés hydrosolubles. Cet enchaînement est ce qu'on appelle le double nettoyage.",
      },
      {
        q: "Peut-on l'utiliser sur le contour des yeux ?",
        r: "Non, la zone du contour des yeux est plus fine et plus perméable. Un démaquillant dédié aux yeux est plus adapté. {Le} s'arrête au niveau des pommettes et du front.",
      },
    ],
  },

  "eau-micellaire": {
    nature: ["eau micellaire", "solution micellaire"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} fonctionne par micelles : de minuscules structures qui capturent le sébum et les pigments de maquillage, puis les retirent avec le coton.",
      "Une {nature} nettoie sans rinçage obligatoire, ce qui la rend utile quand l'eau du robinet est calcaire.",
      "{nom} démaquille et nettoie en un seul geste, sur {zone} comme sur les yeux quand la formule est indiquée pour les deux.",
    ],
    geste: [
      "Imbiber un coton de {nom}, le poser quelques secondes sur la zone à démaquiller, puis essuyer sans frotter.",
      "Deux à trois cotons imbibés suffisent pour {zone} : un pour les yeux, un pour le teint, un dernier pour vérifier qu'il ne reste rien.",
      "Appliquer {ce} sur peau sèche, jamais sur peau humide : l'eau dilue les micelles et réduit leur pouvoir nettoyant.",
    ],
    moment: [
      "L'eau micellaire ouvre la routine du soir, avant le nettoyant moussant si vous en utilisez un.",
      "Le matin, {ce} remplace le nettoyage à l'eau quand la peau est réactive ou l'eau très calcaire.",
    ],
    precaution: [
      "Un rinçage à l'eau claire après usage est recommandé si la peau tiraille : les tensioactifs restent sinon en surface.",
    ],
    faq: [
      {
        q: "Faut-il rincer après {nom} ?",
        r: "Le rinçage n'est pas obligatoire, mais il est conseillé sur peau grasse ou sujette aux imperfections : les tensioactifs qui restent en surface peuvent finir par irriter. Sur peau sèche, laisser en place ne pose pas de problème.",
      },
      {
        q: "{Le} démaquille-t-elle le maquillage waterproof ?",
        r: "Une eau micellaire classique retire mal le waterproof, conçu pour résister à l'eau. Il faut une formule biphasée ou une huile démaquillante pour ce type de maquillage. Pour le reste, {le} suffit.",
      },
      {
        q: "Peut-on utiliser {nom} tous les jours ?",
        r: "Oui, un usage quotidien est prévu, matin et soir si besoin. La seule limite est l'accumulation de tensioactifs sur les peaux fragilisées, d'où l'intérêt d'alterner avec un nettoyage à l'eau.",
      },
    ],
  },

  demaquillant: {
    nature: ["démaquillant visage", "soin démaquillant"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} dissout le maquillage, les filtres solaires et le sébum, trois choses qu'un nettoyant à l'eau seul ne retire pas complètement.",
      "Un {nature} évite de laisser des pigments dans les pores pendant la nuit, ce qui est la première cause de points noirs chez les personnes qui se maquillent quotidiennement.",
      "{nom} ouvre la routine du soir : tout ce qui vient après agit mieux sur une peau réellement débarrassée de sa journée.",
    ],
    geste: [
      "Appliquer {nom} sur peau sèche, masser {zone} une trentaine de secondes pour dissoudre le maquillage, puis retirer au coton ou à l'eau selon la texture.",
      "Chauffer le produit entre les mains, l'étaler sur {zone} sans frotter les yeux, puis émulsionner avec un peu d'eau tiède.",
      "Insister sur les ailes du nez et la lisière des cheveux, deux zones où le fond de teint s'accumule.",
    ],
    moment: [
      "Le démaquillage se fait le soir, avant le nettoyant, jamais l'inverse.",
      "{Ce} n'a pas d'utilité le matin : la peau n'a rien à démaquiller après une nuit.",
    ],
    faq: [
      {
        q: "Le démaquillage suffit-il ou faut-il nettoyer après ?",
        r: "Un nettoyage à l'eau après le démaquillage reste recommandé : le démaquillant dissout les corps gras mais laisse un film résiduel. Cette double étape est la routine standard le soir pour une peau maquillée.",
      },
      {
        q: "{Le} convient-il aux yeux ?",
        r: "Cela dépend de la formule : seuls les démaquillants portant la mention yeux ou visage et yeux sont testés sur cette zone. En l'absence de mention, mieux vaut réserver {le} au reste de {zone}.",
      },
      {
        q: "Faut-il se démaquiller quand on ne se maquille pas ?",
        r: "Oui si vous portez une protection solaire ou vivez en ville : les filtres UV et les particules de pollution se retirent comme du maquillage. Sans crème solaire ni maquillage, un nettoyant simple suffit.",
      },
    ],
  },

  "huile-demaquillante": {
    nature: ["huile démaquillante", "baume démaquillant"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} fonctionne sur le principe que le gras dissout le gras : elle décolle les filtres solaires et le maquillage longue tenue que l'eau ne délie pas.",
      "Une {nature} s'émulsionne au contact de l'eau et se rince entièrement, sans laisser le film huileux qu'on lui prête souvent.",
      "{nom} constitue la première étape du double nettoyage, méthode issue des routines coréennes et devenue standard sur peau maquillée.",
    ],
    geste: [
      "Appliquer {nom} sur peau et mains sèches, masser {zone} une minute, ajouter un peu d'eau tiède pour émulsionner, puis rincer.",
      "Le geste clé est l'émulsion : sans eau ajoutée avant le rinçage, l'huile part mal et laisse un voile.",
      "Deux pompes couvrent {zone} entier, y compris les paupières si la formule est indiquée pour les yeux.",
    ],
    moment: [
      "{Ce} ouvre la routine du soir, avant le nettoyant moussant.",
      "Un usage le soir uniquement est la règle : le matin, la peau n'a pas de maquillage à dissoudre.",
    ],
    faq: [
      {
        q: "{Le} laisse-t-elle un film gras sur la peau ?",
        r: "Non si elle est correctement émulsionnée : il faut ajouter de l'eau tiède et masser avant de rincer. La formule se transforme alors en lait qui part entièrement. Un film résiduel signale un rinçage trop rapide.",
      },
      {
        q: "Une peau grasse peut-elle utiliser {nom} ?",
        r: "Oui, et c'est souvent l'inverse de l'intuition : les huiles démaquillantes retirent le sébum durci dans les pores mieux qu'un gel. Le rinçage complet est la seule condition.",
      },
      {
        q: "Faut-il nettoyer après {nom} ?",
        r: "Oui, un nettoyant à l'eau prend le relais pour retirer sueur et impuretés hydrosolubles. Le double nettoyage se fait dans cet ordre : huile d'abord, gel ou mousse ensuite.",
      },
    ],
  },

  tonique: {
    nature: ["lotion tonique visage", "tonique"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} rééquilibre le pH de la peau après le nettoyage et retire les traces de calcaire laissées par l'eau du robinet.",
      "Une {nature} humidifie légèrement {zone}, ce qui améliore la pénétration du sérum appliqué juste après.",
      "{nom} termine le nettoyage en retirant les dernières impuretés que le rinçage a laissées.",
    ],
    geste: [
      "Verser {nom} sur un coton et passer sur {zone} du centre vers l'extérieur, ou l'appliquer directement à la main en tapotant.",
      "L'application à la paume limite le gaspillage : trois pressions dans le creux de la main, puis pression sur {zone} jusqu'à absorption.",
      "Ne pas rincer : {ce} reste en place et sert de base humide au soin suivant.",
    ],
    moment: [
      "{Ce} s'utilise juste après le nettoyage, matin et soir, avant le sérum.",
      "Sur une routine courte, {ce} peut précéder directement la crème hydratante.",
    ],
    faq: [
      {
        q: "À quoi sert {nom} exactement ?",
        r: "Elle rétablit le pH cutané après un nettoyage et retire les résidus de calcaire de l'eau. Elle humidifie aussi la peau, ce qui rend le sérum suivant plus efficace. Ce n'est pas un produit de nettoyage à part entière.",
      },
      {
        q: "Le tonique est-il indispensable ?",
        r: "Non, c'est une étape de confort. Elle devient utile quand l'eau est très calcaire, quand la peau tiraille après le nettoyage, ou pour préparer la peau à un sérum. Une routine sans tonique reste cohérente.",
      },
      {
        q: "Faut-il un coton pour appliquer {nom} ?",
        r: "Les deux méthodes fonctionnent. Le coton retire mécaniquement les résidus, la main économise le produit et évite le frottement. Sur peau sensible, l'application à la main est préférable.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin du visage — hydratation                                      */
  /* ---------------------------------------------------------------- */

  "creme-visage": {
    nature: ["crème hydratante visage", "soin hydratant pour le visage"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} apporte de l'eau à la couche superficielle de la peau et pose un film qui limite son évaporation au cours de la journée.",
      "Une {nature} bien tolérée est la base d'une routine : c'est le produit qu'on garde quand on simplifie tout le reste.",
      "{nom} entretient la barrière cutanée, dont l'affaiblissement se traduit par des tiraillements, des rougeurs et une sensibilité accrue.",
    ],
    geste: [
      "Prélever l'équivalent d'un pois de {nom}, le répartir en cinq points sur {zone}, puis lisser du centre vers l'extérieur.",
      "Appliquer {ce} sur peau encore légèrement humide : l'eau résiduelle est captée par la formule au lieu de s'évaporer.",
      "Faire remonter le produit jusqu'au cou et à la mâchoire, zones souvent oubliées et exposées au soleil.",
    ],
    moment: [
      "L'hydratation se place après le sérum et avant la protection solaire le matin.",
      "{Ce} s'utilise matin et soir ; le soir, elle referme la routine.",
    ],
    faq: [
      {
        q: "Combien de temps faut-il pour voir un effet ?",
        r: "Le confort est immédiat : la sensation de tiraillement disparaît dès les premières applications. Pour un changement visible de l'état de la peau, comptez trois à quatre semaines d'usage régulier, le temps d'un cycle de renouvellement cellulaire.",
      },
      {
        q: "{Le} s'applique avant ou après le sérum ?",
        r: "Après. Les textures s'appliquent de la plus fluide à la plus riche : sérum d'abord, crème ensuite. La crème scelle le sérum et limite son évaporation.",
      },
      {
        q: "Une peau grasse a-t-elle besoin d'une crème hydratante ?",
        r: "Oui. Une peau grasse peut être déshydratée : elle manque d'eau, pas de gras. Priver la peau d'hydratation entretient souvent la surproduction de sébum. Une texture gel ou fluide convient mieux qu'une texture riche.",
      },
    ],
  },

  "creme-nuit": {
    nature: ["crème de nuit", "soin de nuit visage"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} agit pendant la phase de réparation nocturne, quand la peau perd davantage d'eau et renouvelle ses cellules plus vite.",
      "Une {nature} est plus riche qu'un soin de jour : elle n'a pas à supporter le maquillage ni à se combiner à une protection solaire.",
      "{nom} compense la perte insensible en eau, qui atteint son maximum entre vingt-trois heures et quatre heures du matin.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} nettoyé, en dernière étape, une vingtaine de minutes avant le coucher pour éviter les transferts sur l'oreiller.",
      "Une noisette suffit : la texture est concentrée et un excès reste en surface sans bénéfice.",
      "Étendre {ce} au cou en remontant, du bas vers la mâchoire.",
    ],
    moment: [
      "{Ce} s'utilise le soir uniquement, après le sérum, en clôture de routine.",
      "Un usage quotidien est prévu ; en cas de texture très riche, une nuit sur deux convient sur peau mixte.",
    ],
    faq: [
      {
        q: "Peut-on utiliser {nom} le matin ?",
        r: "Ce n'est pas conseillé. Une crème de nuit est plus occlusive et ne contient pas de filtre solaire ; sous le maquillage, la texture tient mal. Une crème de jour reste plus adaptée avant de sortir.",
      },
      {
        q: "Faut-il une crème de nuit différente de celle du jour ?",
        r: "Ce n'est pas obligatoire, mais utile si votre peau tiraille au réveil ou si vous utilisez des actifs photosensibilisants le soir. Sinon, une bonne crème hydratante peut couvrir les deux moments.",
      },
      {
        q: "{Le} s'applique avant ou après le sérum du soir ?",
        r: "Après le sérum, en dernière couche. La crème referme la routine et limite l'évaporation des actifs appliqués avant elle.",
      },
    ],
  },

  "eau-thermale": {
    nature: ["eau thermale", "brume d'eau thermale"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} apaise les sensations d'échauffement après une exposition au soleil, un rasage ou un soin exfoliant.",
      "Une {nature} est composée d'eau de source et de minéraux, sans actif cosmétique ajouté : c'est un produit de confort, pas un soin traitant.",
      "{nom} rafraîchit {zone} sans altérer le maquillage, ce qui la rend utile en pleine chaleur.",
    ],
    geste: [
      "Vaporiser {nom} à une vingtaine de centimètres de {zone}, laisser poser trente secondes, puis tamponner l'excédent avec un mouchoir.",
      "Le séchage à l'air libre est à éviter : l'eau qui s'évapore emporte de l'eau de la peau avec elle.",
      "{Ce} peut aussi se vaporiser sur un coton pour un usage plus ciblé.",
    ],
    moment: [
      "{Ce} s'utilise à tout moment de la journée, en particulier après l'exposition au soleil.",
      "Après le nettoyage, {ce} peut remplacer le tonique sur une peau réactive.",
    ],
    faq: [
      {
        q: "{Le} hydrate-t-elle vraiment la peau ?",
        r: "Elle apporte un confort immédiat mais n'hydrate pas durablement : sans agent occlusif, l'eau s'évapore. Il faut tamponner puis appliquer une crème pour retenir cet apport. Son rôle réel est l'apaisement.",
      },
      {
        q: "Peut-on l'utiliser sur le maquillage ?",
        r: "Oui, une vaporisation fine à distance ne fait pas couler le maquillage et rafraîchit le teint. Il faut simplement tamponner l'excédent plutôt que de l'essuyer.",
      },
      {
        q: "Convient-elle aux bébés ?",
        r: "La plupart des eaux thermales sont indiquées dès la naissance, notamment pour apaiser les rougeurs du siège. Vérifiez toutefois la mention de la marque sur le conditionnement avant usage sur un nourrisson.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin du visage — sérums                                           */
  /* ---------------------------------------------------------------- */

  "serum-visage": {
    nature: ["sérum visage", "concentré de soin pour le visage"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} concentre plus d'actifs qu'une crème, dans une texture fluide conçue pour traverser rapidement la couche cornée.",
      "Un {nature} cible un besoin précis, là où la crème hydratante joue un rôle de fond.",
      "{nom} se pose sous la crème : il apporte les actifs, la crème les retient.",
    ],
    geste: [
      "Trois à quatre gouttes de {nom} suffisent pour {zone} : les répartir puis presser la paume sur la peau plutôt que d'étaler.",
      "Appliquer {ce} sur peau propre et légèrement humide, en évitant la paupière mobile.",
      "Attendre une minute avant la crème, le temps que la formule pénètre.",
    ],
    moment: [
      "{Ce} s'applique après le nettoyage et avant la crème hydratante.",
      "Un usage matin et soir est courant ; en démarrage, une application quotidienne suffit.",
    ],
    faq: [
      {
        q: "Un sérum remplace-t-il la crème hydratante ?",
        r: "Non. Un sérum apporte des actifs concentrés mais ne contient pas assez de corps gras pour limiter l'évaporation de l'eau. La crème appliquée par-dessus retient ces actifs. Les deux produits sont complémentaires.",
      },
      {
        q: "Combien de gouttes de {nom} faut-il par application ?",
        r: "Trois à quatre gouttes couvrent le visage et le cou. Au-delà, l'excédent reste en surface sans bénéfice supplémentaire. Un flacon utilisé à cette dose dure généralement entre six et huit semaines.",
      },
      {
        q: "Peut-on superposer plusieurs sérums ?",
        r: "Oui, du plus fluide au plus épais, en laissant une minute entre chaque. Certaines associations sont à éviter, notamment un rétinol avec un acide exfoliant dans la même application.",
      },
    ],
  },

  "serum-anti-age": {
    nature: ["sérum anti-âge", "concentré anti-âge visage"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} cible les signes visibles du temps : ridules, perte de fermeté, irrégularités de grain de peau.",
      "Un {nature} agit sur la surface et le confort de la peau ; aucun soin cosmétique ne modifie les structures profondes du derme.",
      "{nom} s'inscrit dans la durée : les changements de texture cutanée se mesurent en mois, pas en jours.",
    ],
    geste: [
      "Appliquer {nom} en fine couche sur {zone} et le cou, en remontant des mâchoires vers les tempes.",
      "Presser {ce} sur la peau plutôt que de le frotter : le frottement n'améliore pas la pénétration.",
      "Insister sur les zones d'expression, contour de la bouche et coin externe des yeux.",
    ],
    moment: [
      "{Ce} s'applique le soir, quand la peau se répare, après le nettoyage.",
      "Une application matin et soir est possible si la formule ne contient pas d'actif photosensibilisant.",
    ],
    precaution: [
      "Une protection solaire quotidienne est indissociable d'une routine anti-âge : l'exposition UV est le premier facteur de vieillissement cutané.",
    ],
    faq: [
      {
        q: "À quel âge commencer un sérum anti-âge ?",
        r: "Il n'y a pas d'âge fixe. Les premières ridules apparaissent généralement entre vingt-cinq et trente-cinq ans selon l'exposition solaire et la génétique. Commencer quand les premiers signes sont visibles est un repère raisonnable.",
      },
      {
        q: "En combien de temps voit-on un résultat ?",
        r: "Comptez huit à douze semaines d'usage régulier. Le renouvellement cellulaire prend environ vingt-huit jours chez l'adulte jeune et davantage avec l'âge ; un changement visible demande plusieurs cycles.",
      },
      {
        q: "{Le} suffit-il ou faut-il une crème en plus ?",
        r: "Une crème reste nécessaire par-dessus pour retenir les actifs et limiter la perte en eau. Le sérum apporte la concentration, la crème la protection. Le matin, une protection solaire complète l'ensemble.",
      },
    ],
  },

  "serum-anti-imperfections": {
    nature: ["sérum anti-imperfections", "concentré ciblé imperfections"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} agit sur les imperfections : excès de sébum, pores marqués, marques laissées après un bouton.",
      "Un {nature} se travaille sur la durée et en douceur ; l'agression répétée d'une peau à imperfections aggrave généralement la situation.",
      "{nom} peut s'utiliser en application localisée ou sur l'ensemble de la zone concernée selon la tolérance.",
    ],
    geste: [
      "Appliquer {nom} en couche fine sur les zones concernées, généralement le front, le nez et le menton.",
      "Commencer par une application un soir sur deux, puis passer au quotidien si la peau le supporte.",
      "Ne pas superposer {ce} à un gommage le même soir : le cumul d'actifs fragilise la barrière cutanée.",
    ],
    moment: [
      "{Ce} s'applique le soir, après le nettoyage et avant la crème.",
      "L'application se fait sur peau parfaitement sèche : l'humidité augmente la pénétration et donc le risque de picotement.",
    ],
    precaution: [
      "Une protection solaire est nécessaire le lendemain : la plupart des actifs anti-imperfections rendent la peau plus sensible au soleil.",
    ],
    faq: [
      {
        q: "Peut-on l'appliquer sur tout le visage ?",
        r: "Oui dans la plupart des cas, en commençant par une application espacée pour tester la tolérance. Une application localisée sur les boutons est possible mais n'agit pas sur les imperfections en formation.",
      },
      {
        q: "Combien de temps avant de voir une différence ?",
        r: "Comptez quatre à huit semaines. Une phase d'ajustement avec davantage d'imperfections dans les deux premières semaines est fréquente. Si les rougeurs persistent au-delà, espacez les applications.",
      },
      {
        q: "Faut-il arrêter sa crème hydratante ?",
        r: "Non, c'est une erreur courante. Une peau desséchée par un actif produit davantage de sébum en réaction. La crème hydratante reste indispensable, en texture légère si la peau est grasse.",
      },
    ],
  },

  "serum-hyaluronique": {
    nature: ["sérum à l'acide hyaluronique", "concentré hydratant à l'acide hyaluronique"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} repose sur l'acide hyaluronique, une molécule qui retient l'eau dans la couche superficielle de la peau.",
      "Un {nature} agit sur l'hydratation, pas sur la ride elle-même : une peau mieux hydratée présente un grain plus lisse et des ridules moins marquées.",
      "{nom} convient à tous les types de peau, y compris grasse, car il n'apporte pas de corps gras.",
    ],
    geste: [
      "Appliquer {nom} sur peau légèrement humide : l'acide hyaluronique capte l'eau disponible, y compris celle laissée par le tonique.",
      "Sceller {ce} avec une crème dans la minute qui suit, sans quoi la molécule peut puiser l'eau de la peau dans un air très sec.",
      "Trois gouttes réparties sur {zone} suffisent, cou compris.",
    ],
    moment: [
      "{Ce} s'utilise matin et soir, après le nettoyage et avant la crème.",
      "Le matin, il se place sous la protection solaire sans gêner son application.",
    ],
    faq: [
      {
        q: "L'acide hyaluronique convient-il aux peaux grasses ?",
        r: "Oui. Il hydrate sans apporter de corps gras et ne bouche pas les pores. Les peaux grasses sont souvent déshydratées, et cette déshydratation entretient la production de sébum.",
      },
      {
        q: "Faut-il appliquer {nom} sur peau humide ?",
        r: "Oui, c'est la condition de son efficacité. L'acide hyaluronique fixe l'eau présente au moment de l'application. Sur peau sèche et dans un air sec, il peut au contraire tirer l'eau des couches inférieures.",
      },
      {
        q: "Peut-on l'associer à d'autres actifs ?",
        r: "Oui, l'acide hyaluronique est l'un des actifs les mieux tolérés en association : vitamine C, niacinamide ou rétinol s'y combinent sans conflit. Il est souvent utilisé pour tamponner un actif irritant.",
      },
    ],
  },

  "serum-vitamine-c": {
    nature: ["sérum à la vitamine C", "concentré éclat à la vitamine C"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} apporte de la vitamine C, un antioxydant qui limite l'action des radicaux libres produits par le soleil et la pollution.",
      "Un {nature} est utilisé pour l'uniformité du teint et l'atténuation des marques pigmentaires légères.",
      "{nom} s'oxyde à la lumière et à l'air : une formule qui vire à l'orange foncé a perdu une partie de son activité.",
    ],
    geste: [
      "Appliquer {nom} le matin sur peau propre, avant la crème et la protection solaire.",
      "Quelques gouttes suffisent : au-delà, la tolérance diminue sans gain d'efficacité.",
      "Refermer soigneusement le flacon et le conserver à l'abri de la lumière, l'oxydation étant le principal ennemi de la formule.",
    ],
    moment: [
      "{Ce} s'utilise le matin : son action antioxydante complète celle de la protection solaire dans la journée.",
      "Une application quotidienne est la règle ; espacer sur peau réactive au début.",
    ],
    precaution: [
      "L'association avec un acide exfoliant dans la même application est déconseillée : le cumul d'acidité irrite.",
    ],
    faq: [
      {
        q: "Vitamine C le matin ou le soir ?",
        r: "Le matin de préférence. Son action antioxydante est utile pendant l'exposition à la lumière et à la pollution, et elle complète la protection solaire. Une application le soir n'est pas nocive, seulement moins pertinente.",
      },
      {
        q: "La vitamine C rend-elle la peau sensible au soleil ?",
        r: "Non, contrairement à une idée répandue. Elle n'est pas photosensibilisante et agit plutôt comme un complément de la protection solaire. La crème solaire reste indispensable, mais pour d'autres raisons.",
      },
      {
        q: "Pourquoi {nom} change-t-il de couleur ?",
        r: "La vitamine C s'oxyde au contact de l'air et de la lumière et brunit progressivement. Une teinte ambrée claire reste utilisable ; une couleur orange foncé indique une formule dégradée qu'il vaut mieux ne plus appliquer.",
      },
    ],
  },

  "serum-retinol": {
    nature: ["sérum au rétinol", "concentré au rétinol"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} contient un dérivé de vitamine A, l'actif cosmétique le plus documenté sur le renouvellement cellulaire.",
      "Un {nature} demande une introduction progressive : la peau met plusieurs semaines à s'y habituer.",
      "{nom} agit sur le grain de peau, les ridules et les marques laissées par les imperfections.",
    ],
    geste: [
      "Commencer par une application de {nom} deux soirs par semaine, puis augmenter progressivement selon la tolérance.",
      "Appliquer {ce} sur peau parfaitement sèche, en évitant les ailes du nez et le contour immédiat des yeux.",
      "Une quantité de la taille d'un petit pois couvre {zone} : le surdosage est la cause la plus fréquente d'irritation.",
    ],
    moment: [
      "{Ce} s'utilise le soir exclusivement : le rétinol se dégrade à la lumière.",
      "Faire suivre d'une crème apaisante pour limiter la sécheresse des premières semaines.",
    ],
    precaution: [
      "Le rétinol est déconseillé pendant la grossesse et l'allaitement, et impose une protection solaire quotidienne.",
    ],
    faq: [
      {
        q: "Comment commencer le rétinol sans irriter la peau ?",
        r: "Deux applications par semaine le soir pendant un mois, puis une augmentation progressive. Appliquer sur peau sèche, en petite quantité, suivi d'une crème. Une rougeur légère au début est habituelle, une desquamation marquée signale un rythme trop rapide.",
      },
      {
        q: "Peut-on utiliser le rétinol enceinte ?",
        r: "Non. Les dérivés de vitamine A sont déconseillés pendant la grossesse et l'allaitement par principe de précaution. Un avis médical est nécessaire avant tout usage dans cette situation.",
      },
      {
        q: "Rétinol et vitamine C dans la même routine ?",
        r: "Oui, mais pas dans la même application. La vitamine C le matin, le rétinol le soir : cette séparation évite le cumul d'irritation tout en conservant l'intérêt des deux actifs.",
      },
    ],
  },

  "serum-niacinamide": {
    nature: ["sérum à la niacinamide", "concentré à la niacinamide"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} contient de la niacinamide, aussi appelée vitamine B3, connue pour son action sur la production de sébum et l'uniformité du teint.",
      "Un {nature} fait partie des actifs les mieux tolérés, y compris sur peau réactive.",
      "{nom} est souvent choisi pour les pores visibles et les marques rouges laissées après un bouton.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} propre, matin ou soir, avant la crème hydratante.",
      "Quatre gouttes suffisent ; un excès de niacinamide peut provoquer des picotements passagers.",
      "Sur peau non habituée, commencer par une application quotidienne avant de passer à deux.",
    ],
    moment: [
      "{Ce} s'utilise matin et soir, sans contrainte de lumière.",
      "Le matin, il se combine bien à la protection solaire posée par-dessus.",
    ],
    faq: [
      {
        q: "La niacinamide, c'est quoi exactement ?",
        r: "C'est la vitamine B3, un actif hydrosoluble utilisé en cosmétique pour réguler la production de sébum, atténuer les marques pigmentaires et renforcer la barrière cutanée. Elle est bien tolérée par la plupart des peaux.",
      },
      {
        q: "Peut-on associer niacinamide et vitamine C ?",
        r: "Oui. L'incompatibilité souvent citée reposait sur des conditions de laboratoire à haute température, pas sur un usage cosmétique normal. En pratique, les deux s'utilisent ensemble ou à des moments différents sans problème.",
      },
      {
        q: "À quelle concentration choisir un sérum niacinamide ?",
        r: "Les formulations courantes vont de 4 à 10 %. Au-delà, la tolérance diminue sans bénéfice démontré. Une peau réactive commencera plutôt autour de 5 %.",
      },
    ],
  },

  "serum-collagene": {
    nature: ["sérum au collagène", "concentré fermeté au collagène"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} apporte du collagène ou des peptides associés, utilisés en cosmétique pour l'aspect de fermeté et le confort de la peau.",
      "Un {nature} agit en surface : les molécules de collagène appliquées sur la peau ne remplacent pas celui du derme, elles retiennent l'eau et lissent le grain.",
      "{nom} s'inscrit dans une routine de fermeté, aux côtés d'une protection solaire quotidienne.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} et le cou, en remontant du bas vers le haut.",
      "Presser {ce} sur la peau et laisser pénétrer une minute avant la crème.",
      "Étendre le geste à la zone du décolleté, qui vieillit aussi vite que le visage.",
    ],
    moment: [
      "{Ce} s'applique matin et soir, après le nettoyage.",
      "Le soir, il précède une crème plus riche.",
    ],
    faq: [
      {
        q: "Le collagène appliqué sur la peau pénètre-t-il ?",
        r: "La molécule de collagène native est trop grosse pour franchir la couche cornée. En cosmétique, son rôle est de retenir l'eau en surface et de lisser le grain de peau. Les peptides, plus petits, sont utilisés pour un effet plus profond.",
      },
      {
        q: "À quel moment de la routine appliquer {nom} ?",
        r: "Après le nettoyage et le tonique, avant la crème hydratante. C'est la place classique d'un sérum : la texture fluide passe avant les textures plus riches.",
      },
      {
        q: "Combien de temps garder un flacon entamé ?",
        r: "La durée après ouverture est indiquée par le symbole du pot ouvert sur l'emballage, généralement six à douze mois. En Algérie, conservez le flacon à l'abri de la chaleur pour préserver la formule.",
      },
    ],
  },

  "anti-age-visage": {
    nature: ["soin anti-âge visage", "crème anti-âge"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} cible la fermeté et la densité apparente de la peau, deux paramètres qui évoluent avec l'âge et l'exposition solaire.",
      "Un {nature} travaille sur le confort et l'aspect de surface ; les résultats se lisent sur plusieurs mois.",
      "{nom} complète les gestes de fond : protection solaire, hydratation régulière, sommeil.",
    ],
    geste: [
      "Appliquer {nom} sur {zone}, le cou et le décolleté, en mouvements ascendants.",
      "Réchauffer {ce} entre les paumes avant de le poser : une texture riche s'étale mieux tiède.",
      "Insister sur l'ovale du visage et la zone sous-maxillaire.",
    ],
    moment: [
      "{Ce} s'applique matin et soir, en dernière étape avant la protection solaire le matin.",
      "Sur une routine du soir, il referme l'application après le sérum.",
    ],
    precaution: [
      "Sans protection solaire quotidienne, un soin anti-âge travaille contre un facteur qui continue d'agir tous les jours.",
    ],
    faq: [
      {
        q: "Un soin anti-âge efface-t-il les rides ?",
        r: "Non. Un produit cosmétique agit sur l'hydratation, le grain de peau et l'aspect de surface ; il peut atténuer visuellement une ridule mais ne supprime pas une ride installée. Toute promesse contraire relève du discours publicitaire.",
      },
      {
        q: "Faut-il l'appliquer sur le cou ?",
        r: "Oui. La peau du cou est plus fine et contient moins de glandes sébacées que celle du visage, elle marque donc plus vite. Étendre systématiquement l'application jusqu'au décolleté est la règle.",
      },
      {
        q: "À quel âge commencer ?",
        r: "Les premiers signes apparaissent le plus souvent entre vingt-cinq et trente-cinq ans. Le repère utile n'est pas l'âge mais l'état de la peau : perte de rebond, ridules de déshydratation persistantes, teint moins uniforme.",
      },
    ],
  },

  "contour-yeux": {
    nature: ["soin contour des yeux", "crème contour des yeux"],
    genre: "m",
    zone: "le contour des yeux",
    role: [
      "{nom} est formulé pour {zone}, où la peau est jusqu'à quatre fois plus fine que sur le reste du visage.",
      "Un {nature} cible les cernes, les poches et les ridules de la zone périorbitaire.",
      "{nom} tient compte de la proximité de l'œil : la formule est testée pour cette zone, ce que n'est pas une crème visage classique.",
    ],
    geste: [
      "Déposer trois petits points de {nom} sous l'œil, de l'angle interne vers l'externe, et tapoter avec l'annulaire.",
      "Ne pas appliquer {ce} sur la paupière mobile ni trop près du cil : la formule migre naturellement vers l'œil.",
      "Le tapotement du bout du doigt suffit ; étirer la peau de cette zone la marque durablement.",
    ],
    moment: [
      "{Ce} s'applique matin et soir, après le sérum et avant la crème visage.",
      "Le matin, il prépare la zone au maquillage : attendre deux minutes avant l'anti-cernes.",
    ],
    faq: [
      {
        q: "Une crème visage peut-elle remplacer un contour des yeux ?",
        r: "Ce n'est pas idéal. Les crèmes visage ne sont pas systématiquement testées ophtalmologiquement et leur texture, plus riche, peut favoriser les gonflements sur cette zone fine. Un soin dédié reste préférable.",
      },
      {
        q: "{Le} agit-il sur les cernes bruns ?",
        r: "Cela dépend de leur origine. Un cerne pigmentaire répond partiellement aux actifs éclaircissants, un cerne vasculaire aux actifs décongestionnants, un cerne creux relève du volume et ne se corrige pas en cosmétique.",
      },
      {
        q: "Combien de produit faut-il par œil ?",
        r: "L'équivalent d'un grain de riz par œil suffit. Un excès s'accumule dans les plis, favorise les gonflements au réveil et peut migrer dans l'œil pendant la nuit.",
      },
    ],
  },

  "masque-visage": {
    nature: ["masque visage", "soin masque pour le visage"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} agit en application ponctuelle et concentrée, avec un temps de pose qui prolonge le contact des actifs avec la peau.",
      "Un {nature} vient compléter la routine quotidienne, il ne la remplace pas.",
      "{nom} produit un effet visible immédiat sur le confort et l'éclat, qui s'estompe en quelques jours sans usage régulier.",
    ],
    geste: [
      "Appliquer {nom} en couche épaisse sur {zone} nettoyé, éviter le contour des yeux et des lèvres, laisser poser le temps indiqué puis rincer.",
      "Un pinceau plat donne une couche plus régulière qu'une application aux doigts et limite le gaspillage.",
      "Rincer {ce} à l'eau tiède, sans frotter, puis enchaîner sur un sérum.",
    ],
    moment: [
      "Une à deux applications par semaine suffisent, de préférence le soir.",
      "{Ce} se place après le nettoyage et avant le sérum.",
    ],
    faq: [
      {
        q: "Combien de fois par semaine utiliser {nom} ?",
        r: "Une à deux fois par semaine convient à la majorité des peaux. Au-delà, le risque est de fragiliser la barrière cutanée, en particulier avec un masque purifiant à l'argile. Un masque hydratant tolère un rythme plus soutenu.",
      },
      {
        q: "Faut-il rincer ou laisser poser toute la nuit ?",
        r: "Cela dépend du type : un masque à rincer se retire après le temps indiqué, un masque de nuit reste en place jusqu'au matin. Laisser sécher complètement un masque à rincer déshydrate la peau.",
      },
      {
        q: "À quel moment de la routine placer un masque ?",
        r: "Après le nettoyage, sur peau propre et sèche, avant le sérum et la crème. Un masque appliqué sur une peau maquillée ou grasse agit surtout sur le film de surface.",
      },
    ],
  },

  "gommage-visage": {
    nature: ["gommage visage", "exfoliant visage"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} retire les cellules mortes de la surface de la peau, dont l'accumulation ternit le teint et gêne la pénétration des soins.",
      "Un {nature} agit soit mécaniquement par des particules, soit chimiquement par des acides ; les deux voies ne se cumulent pas le même jour.",
      "{nom} lisse le grain de peau de façon temporaire : l'effet se renouvelle avec un usage régulier mais espacé.",
    ],
    geste: [
      "Appliquer {nom} sur peau humide et masser {zone} du bout des doigts en évitant le contour des yeux, puis rincer à l'eau tiède.",
      "Le geste doit rester léger : la pression n'améliore pas l'exfoliation et provoque des micro-lésions.",
      "Enchaîner avec un soin hydratant, la peau étant plus perméable juste après.",
    ],
    moment: [
      "Une à deux applications par semaine au maximum, le soir de préférence.",
      "{Ce} se place après le nettoyage et avant le sérum.",
    ],
    precaution: [
      "Une exfoliation trop fréquente fragilise la barrière cutanée et provoque rougeurs et sensibilité ; la protection solaire du lendemain est indispensable.",
    ],
    faq: [
      {
        q: "À quelle fréquence exfolier le visage ?",
        r: "Une à deux fois par semaine suffit pour la plupart des peaux. Une peau sensible ou réactive s'en tiendra à une fois tous les dix jours. Le signe d'un excès est une peau brillante, tendue et rouge après le geste.",
      },
      {
        q: "Gommage à grains ou exfoliant aux acides ?",
        r: "Les grains agissent en surface et conviennent aux peaux tolérantes ; les acides travaillent plus uniformément et sont préférables sur peau à imperfections, où le frottement peut propager l'inflammation.",
      },
      {
        q: "Peut-on exfolier une peau avec des boutons ?",
        r: "Sur des boutons inflammatoires, le gommage mécanique est déconseillé : il irrite et étale les bactéries. Un exfoliant chimique doux, utilisé une fois par semaine, est plus adapté.",
      },
    ],
  },

  "anti-acne": {
    nature: ["soin anti-imperfections", "soin ciblé pour peau à imperfections"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} s'adresse aux peaux sujettes aux imperfections : excès de sébum, pores obstrués, boutons localisés.",
      "Un {nature} agit sur les facteurs de surface ; une acné installée ou étendue relève d'un avis dermatologique, pas de la cosmétique.",
      "{nom} s'utilise en cure, avec une régularité plus importante que la quantité appliquée.",
    ],
    geste: [
      "Appliquer {nom} sur peau propre et sèche, en couche fine sur la zone concernée.",
      "Ne pas cumuler {ce} avec un gommage le même jour : l'addition d'actifs fragilise la peau.",
      "Poursuivre l'application quelques jours après la disparition du bouton pour limiter la récidive au même endroit.",
    ],
    moment: [
      "{Ce} s'applique le soir, après le nettoyage, avant la crème hydratante.",
      "L'usage quotidien est prévu ; espacer si des tiraillements apparaissent.",
    ],
    precaution: [
      "La plupart des actifs anti-imperfections augmentent la sensibilité au soleil : une protection solaire le lendemain matin est nécessaire.",
    ],
    faq: [
      {
        q: "Ce soin traite-t-il l'acné ?",
        r: "Non. Un produit cosmétique aide à limiter les imperfections légères et l'excès de sébum. Une acné inflammatoire, étendue ou laissant des cicatrices relève d'une consultation dermatologique et d'un traitement médical.",
      },
      {
        q: "Faut-il arrêter d'hydrater une peau à imperfections ?",
        r: "Non, c'est l'erreur la plus fréquente. Une peau asséchée compense en produisant plus de sébum. Une texture fluide non comédogène, appliquée matin et soir, fait partie de la routine.",
      },
      {
        q: "Combien de temps avant un résultat visible ?",
        r: "Quatre à huit semaines d'usage régulier. Les deux premières semaines peuvent s'accompagner d'une aggravation passagère. Sans amélioration après deux mois, un avis médical est préférable à un changement de produit.",
      },
    ],
  },

  "anti-taches": {
    nature: ["soin anti-taches visage", "soin ciblé taches pigmentaires"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} cible les taches pigmentaires : marques post-inflammatoires, taches de soleil, irrégularités du teint.",
      "Un {nature} agit sur la mélanine déjà présente en surface et sur sa production ; le processus est lent par nature.",
      "{nom} n'a d'effet durable que si l'exposition solaire est maîtrisée, faute de quoi les taches se reforment.",
    ],
    geste: [
      "Appliquer {nom} sur la tache et sa périphérie immédiate, sur peau propre et sèche.",
      "Sur un teint globalement irrégulier, étendre {ce} à l'ensemble de {zone} plutôt qu'en application ponctuelle.",
      "Poursuivre l'application sans interruption : un arrêt de quelques semaines annule une partie du chemin parcouru.",
    ],
    moment: [
      "{Ce} s'applique le soir, après le nettoyage.",
      "Le matin, une protection solaire d'indice élevé est la condition de l'efficacité du soin.",
    ],
    precaution: [
      "Une protection solaire SPF 50 quotidienne est indissociable d'un soin anti-taches, y compris par temps couvert.",
    ],
    faq: [
      {
        q: "Combien de temps pour atténuer une tache ?",
        r: "Comptez trois à six mois d'usage quotidien pour une tache superficielle, davantage pour une tache ancienne ou profonde. Le facteur limitant n'est pas le produit mais l'exposition solaire pendant la cure.",
      },
      {
        q: "Faut-il une crème solaire avec ce soin ?",
        r: "Oui, elle est indispensable. Les UV stimulent la production de mélanine et reforment la tache plus vite que le soin ne l'atténue. Un SPF 50 appliqué chaque matin fait partie du protocole.",
      },
      {
        q: "Ce soin éclaircit-il la peau ?",
        r: "Un soin anti-taches uniformise le teint en agissant sur des zones précises. Il ne modifie pas la carnation générale et ne doit pas être confondu avec un produit de dépigmentation, dont l'usage détourné présente des risques réels.",
      },
    ],
  },

  "apaisant-rougeurs": {
    nature: ["soin apaisant visage", "soin pour peau sensible et réactive"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} s'adresse aux peaux réactives : rougeurs, sensations d'échauffement, inconfort après le nettoyage ou l'exposition au vent.",
      "Un {nature} vise d'abord la barrière cutanée : quand elle est fragilisée, la peau réagit à des stimuli qu'elle tolérait auparavant.",
      "{nom} privilégie une formule courte, à faible risque de réaction, plutôt qu'une accumulation d'actifs.",
    ],
    geste: [
      "Appliquer {nom} en couche fine sur {zone} propre, sans masser longuement : le frottement accentue la rougeur.",
      "Réchauffer {ce} entre les doigts et le poser par pression plutôt que par étalement.",
      "Concentrer l'application sur les zones les plus réactives, joues et ailes du nez.",
    ],
    moment: [
      "{Ce} s'utilise matin et soir, après un nettoyage sans savon.",
      "En période de forte réactivité, il peut constituer l'unique soin de la routine.",
    ],
    precaution: [
      "Réduire le nombre de produits est souvent plus efficace qu'en ajouter un : une peau réactive supporte mal les routines longues.",
    ],
    faq: [
      {
        q: "Peau sensible ou peau sèche, comment faire la différence ?",
        r: "La peau sèche manque de lipides et desquame ; la peau sensible réagit par des rougeurs et des picotements, quel que soit son niveau de gras. Les deux peuvent coexister mais n'appellent pas les mêmes soins.",
      },
      {
        q: "Que faire quand la peau rougit après un nouveau produit ?",
        r: "Arrêter le produit, revenir à une routine minimale nettoyant plus crème apaisante pendant deux semaines, puis réintroduire un seul produit à la fois. Une rougeur persistante au-delà justifie un avis médical.",
      },
      {
        q: "L'eau du robinet aggrave-t-elle les rougeurs ?",
        r: "Une eau très calcaire laisse un dépôt minéral qui peut accentuer les tiraillements. Terminer le nettoyage par une eau thermale ou un tonique sans alcool limite ce phénomène.",
      },
    ],
  },

  cicatrisant: {
    nature: ["soin réparateur", "baume réparateur"],
    genre: "m",
    zone: "la peau",
    role: [
      "{nom} accompagne la réparation de la peau après une agression : irritation, frottement, sécheresse extrême, suite de rasage.",
      "Un {nature} pose un film protecteur qui limite les pertes en eau pendant la phase de reconstruction.",
      "{nom} s'applique sur peau lésée superficiellement, jamais sur une plaie ouverte ou une brûlure étendue.",
    ],
    geste: [
      "Appliquer {nom} en couche fine sur la zone propre et sèche, deux à trois fois par jour.",
      "Ne pas masser une zone irritée : poser {ce} par pression et laisser pénétrer.",
      "Poursuivre l'application quelques jours après la disparition des signes visibles.",
    ],
    moment: [
      "L'application se répète autant que nécessaire dans la journée, sans horaire fixe.",
      "{Ce} s'utilise en cure courte, le temps de la réparation.",
    ],
    precaution: [
      "Sur une plaie ouverte, une brûlure ou une lésion infectée, l'avis d'un professionnel de santé prime sur tout produit cosmétique.",
    ],
    faq: [
      {
        q: "Peut-on appliquer ce soin sur une plaie ?",
        r: "Non, pas sur une plaie ouverte. Ces soins s'utilisent sur peau refermée, en phase de réparation : rougeurs, desquamation, irritation superficielle. Une plaie ouverte ou suintante relève d'un avis médical.",
      },
      {
        q: "Combien de fois par jour l'appliquer ?",
        r: "Deux à trois applications quotidiennes sont l'usage courant, en couche fine. Une couche épaisse ne fait pas gagner de temps et peut macérer, en particulier sous un vêtement ou par forte chaleur.",
      },
      {
        q: "Peut-on l'utiliser sur un enfant ?",
        r: "La plupart de ces formules sont indiquées dès le plus jeune âge, notamment pour le change. Vérifiez la mention sur le conditionnement, elle figure toujours quand l'usage pédiatrique est prévu.",
      },
    ],
  },

  "soin-coreen": {
    nature: ["soin visage coréen", "soin issu de la routine coréenne"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} s'inscrit dans l'approche coréenne du soin : des textures légères, superposées en fines couches plutôt qu'un produit riche unique.",
      "Un {nature} privilégie l'hydratation et la tolérance ; la routine coréenne repose sur la régularité plus que sur la concentration en actifs.",
      "{nom} se combine facilement avec d'autres étapes, ce qui est le principe même de cette méthode.",
    ],
    geste: [
      "Appliquer {nom} en couche fine sur {zone}, puis presser la paume sur la peau pour favoriser l'absorption.",
      "Superposer deux applications légères plutôt qu'une couche épaisse, en attendant l'absorption de la première.",
      "Appliquer {ce} sur peau encore humide, principe de base de la méthode coréenne.",
    ],
    moment: [
      "{Ce} se place entre le tonique et la crème, dans l'ordre du plus fluide au plus riche.",
      "Un usage matin et soir est prévu.",
    ],
    faq: [
      {
        q: "Faut-il vraiment dix étapes dans une routine coréenne ?",
        r: "Non. La routine en dix étapes est une vitrine, pas une norme. Quatre étapes suffisent au quotidien : nettoyer, tonifier, hydrater, protéger. Le principe utile à retenir est la superposition de textures légères.",
      },
      {
        q: "Les soins coréens conviennent-ils au climat algérien ?",
        r: "Les textures légères et aqueuses de la K-beauty sont bien adaptées à la chaleur, où une crème riche devient inconfortable. La protection solaire, très développée dans cette catégorie, y est particulièrement pertinente.",
      },
      {
        q: "Dans quel ordre appliquer les produits ?",
        r: "Du plus fluide au plus épais : nettoyant, tonique, essence, sérum, émulsion ou crème, puis protection solaire le matin. Cet ordre permet à chaque texture de pénétrer avant que la suivante ne la scelle.",
      },
    ],
  },

  "baume-levres": {
    nature: ["baume à lèvres", "soin des lèvres"],
    genre: "m",
    zone: "les lèvres",
    role: [
      "{nom} protège {zone}, dépourvues de glandes sébacées et donc incapables de produire leur propre film protecteur.",
      "Un {nature} limite la déshydratation liée au vent, au soleil et à l'air sec.",
      "{nom} évite le cercle des lèvres gercées que l'on humecte, ce qui accélère encore leur dessèchement.",
    ],
    geste: [
      "Appliquer {nom} en couche fine sur {zone}, en insistant sur le contour où les gerçures apparaissent en premier.",
      "Renouveler l'application après chaque repas et avant de sortir.",
      "Poser une couche plus épaisse au coucher, la nuit étant le moment où le produit reste le plus longtemps en place.",
    ],
    moment: [
      "{Ce} s'utilise à la demande dans la journée, et systématiquement le soir.",
      "Avant un rouge à lèvres mat, appliquer {ce} puis tamponner l'excédent.",
    ],
    faq: [
      {
        q: "Pourquoi les lèvres se dessèchent-elles si vite ?",
        r: "La peau des lèvres est fine, ne contient pas de glandes sébacées et ne produit donc aucun film protecteur. Elle perd son eau trois à dix fois plus vite que le reste du visage, d'où la nécessité d'un apport externe.",
      },
      {
        q: "Peut-on devenir dépendant d'un baume à lèvres ?",
        r: "Il n'y a pas de dépendance physiologique. La sensation d'en avoir besoin en permanence vient plutôt de formules contenant des agents asséchants comme le menthol ou le camphre, qui donnent un effet de fraîcheur puis un rebond de sécheresse.",
      },
      {
        q: "Faut-il un baume avec protection solaire ?",
        r: "C'est utile en cas d'exposition prolongée : les lèvres, en particulier la lèvre inférieure, comptent parmi les zones les plus exposées du visage et les moins protégées. Un baume SPF est alors préférable.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Crème solaire                                                     */
  /* ---------------------------------------------------------------- */

  "solaire-visage": {
    nature: ["crème solaire visage", "protection solaire pour le visage"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} filtre une partie du rayonnement ultraviolet qui atteint {zone}, premier facteur de vieillissement cutané et de taches pigmentaires.",
      "Une {nature} se porte toute l'année : l'indice UV reste élevé en Algérie plusieurs mois par an, y compris hors saison estivale.",
      "{nom} est la dernière étape du soin du matin et la seule dont l'oubli annule une partie du bénéfice des autres.",
    ],
    geste: [
      "Appliquer {nom} en dernière étape du matin, en quantité suffisante : deux doigts de produit pour {zone} et le cou.",
      "Renouveler l'application toutes les deux heures en exposition, et après chaque baignade ou transpiration importante.",
      "Ne pas oublier les oreilles, la lisière des cheveux et le dessous du menton, où la réverbération agit aussi.",
    ],
    moment: [
      "{Ce} se pose vingt minutes avant la sortie, après la crème hydratante et avant le maquillage.",
      "L'application est quotidienne, même par temps couvert : les UVA traversent les nuages.",
    ],
    precaution: [
      "Aucune protection solaire ne bloque la totalité du rayonnement : l'ombre aux heures les plus chaudes reste la mesure la plus efficace.",
    ],
    faq: [
      {
        q: "Quelle quantité de crème solaire faut-il pour le visage ?",
        r: "L'équivalent de deux doigts de produit, soit environ un gramme, couvre le visage et le cou. La plupart des utilisateurs en appliquent trois à quatre fois moins, ce qui réduit d'autant la protection réelle obtenue.",
      },
      {
        q: "Faut-il en mettre en hiver ou par temps couvert ?",
        r: "Oui. Les UVA, responsables du vieillissement cutané et des taches, traversent les nuages et le verre et sont présents toute l'année. L'application quotidienne est la règle en Algérie, quelle que soit la saison.",
      },
      {
        q: "Peut-on se maquiller par-dessus ?",
        r: "Oui, en laissant la protection solaire sécher deux à trois minutes avant le fond de teint. Pour renouveler dans la journée sans défaire le maquillage, une poudre ou une brume avec filtre est plus pratique.",
      },
    ],
  },

  "solaire-corps": {
    nature: ["crème solaire corps", "protection solaire pour le corps"],
    genre: "f",
    zone: "le corps",
    role: [
      "{nom} protège les zones exposées du corps pendant une exposition prolongée : plage, sport en extérieur, trajets en pleine journée.",
      "Une {nature} doit être appliquée en quantité généreuse ; l'indice indiqué sur le flacon suppose une dose de deux milligrammes par centimètre carré de peau.",
      "{nom} limite le risque de coup de soleil, mais ne permet pas d'allonger indéfiniment le temps d'exposition.",
    ],
    geste: [
      "Appliquer {nom} sur peau sèche vingt minutes avant l'exposition, en insistant sur les épaules, le dessus des pieds et l'arrière des genoux.",
      "Renouveler toutes les deux heures et systématiquement après la baignade, même avec une formule résistante à l'eau.",
      "Une application pour un adulte demande environ six cuillères à café de produit pour l'ensemble du corps.",
    ],
    moment: [
      "{Ce} s'applique avant l'exposition et se renouvelle pendant toute la durée passée dehors.",
      "En fin de journée, un rinçage puis un soin après-soleil complètent l'usage.",
    ],
    precaution: [
      "Entre douze et seize heures, l'ombre reste la meilleure protection ; aucune crème ne compense une exposition prolongée à ces heures.",
    ],
    faq: [
      {
        q: "Combien de temps une crème solaire protège-t-elle ?",
        r: "Deux heures au maximum en conditions réelles, moins en cas de baignade, de transpiration ou de frottement avec une serviette. Le renouvellement régulier compte davantage que le choix de l'indice.",
      },
      {
        q: "Résistante à l'eau signifie-t-il qu'on ne réapplique pas ?",
        r: "Non. La mention signifie que la protection subsiste partiellement après deux bains de vingt minutes. Une réapplication après chaque sortie de l'eau reste nécessaire, notamment après s'être séché.",
      },
      {
        q: "Peut-on utiliser la crème solaire de l'an dernier ?",
        r: "Si le flacon a été conservé à l'abri de la chaleur et que la texture n'a pas changé, oui, dans la limite de la durée après ouverture. Un produit resté dans une voiture ou sur le sable brûlant a perdu en efficacité.",
      },
    ],
  },

  "solaire-enfant": {
    nature: ["crème solaire enfant", "protection solaire pour enfant"],
    genre: "f",
    zone: "la peau",
    role: [
      "{nom} est formulée pour la peau des enfants, plus fine et plus perméable que celle de l'adulte.",
      "Une {nature} affiche généralement un indice très haute protection et une résistance à l'eau adaptée aux jeux.",
      "{nom} limite les coups de soleil de l'enfance, dont on sait qu'ils comptent dans le risque cutané à l'âge adulte.",
    ],
    geste: [
      "Appliquer {nom} vingt minutes avant la sortie, sur toutes les zones découvertes, visage et oreilles compris.",
      "Renouveler toutes les deux heures et après chaque baignade, sans exception.",
      "Compléter par un tee-shirt anti-UV et un chapeau : le textile protège mieux qu'une crème sur un enfant qui bouge.",
    ],
    moment: [
      "L'application se fait avant chaque sortie et se renouvelle tout au long de la journée.",
      "{Ce} s'utilise en complément de l'ombre, jamais à sa place.",
    ],
    precaution: [
      "Avant six mois, l'exposition directe au soleil est déconseillée : à cet âge, l'ombre et le vêtement priment sur tout produit solaire.",
    ],
    faq: [
      {
        q: "À partir de quel âge peut-on mettre de la crème solaire ?",
        r: "Les formules pédiatriques sont généralement indiquées à partir de six mois. Avant cet âge, l'exposition au soleil est à éviter et la protection passe par l'ombre, le vêtement couvrant et le chapeau.",
      },
      {
        q: "Quel indice choisir pour un enfant ?",
        r: "Un SPF 50+ est le choix standard pour un enfant, quelle que soit sa carnation. Les indices intermédiaires laissent passer une part de rayonnement trop importante pour une peau encore immature.",
      },
      {
        q: "Faut-il en remettre après la baignade ?",
        r: "Oui, systématiquement, même avec un produit résistant à l'eau. Le séchage à la serviette retire une grande partie du film protecteur, plus encore que le bain lui-même.",
      },
    ],
  },

  "apres-soleil": {
    nature: ["soin après-soleil", "lait après-soleil"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} réhydrate la peau après une exposition : le soleil et le sel assèchent et la peau perd son eau plus vite pendant les heures qui suivent.",
      "Un {nature} apaise les sensations d'échauffement et prolonge le hâle en limitant la desquamation.",
      "{nom} ne soigne pas un coup de soleil : il accompagne le retour au confort d'une peau simplement exposée.",
    ],
    geste: [
      "Appliquer {nom} sur peau propre après la douche, en couche généreuse, sur l'ensemble des zones exposées.",
      "Une application le soir même de l'exposition est la plus utile ; la peau perd son eau surtout dans les premières heures.",
      "Renouveler les jours suivants tant que la peau tiraille.",
    ],
    moment: [
      "{Ce} s'utilise après la douche du soir, pendant toute la période d'exposition.",
      "Conserver le flacon au frais rend l'application plus agréable en été.",
    ],
    precaution: [
      "Un coup de soleil avec cloques ou fièvre relève d'un avis médical, pas d'un soin cosmétique.",
    ],
    faq: [
      {
        q: "Un après-soleil soigne-t-il un coup de soleil ?",
        r: "Non. Il apaise et réhydrate une peau exposée mais n'a pas d'action sur une brûlure constituée. Un coup de soleil avec cloques, douleur intense ou fièvre nécessite un avis médical.",
      },
      {
        q: "Une crème hydratante classique fait-elle l'affaire ?",
        r: "Elle hydrate, mais les formules après-soleil sont conçues pour être plus fluides, plus fraîches et plus apaisantes sur une peau échauffée. Sur une grande surface, la différence de confort est nette.",
      },
      {
        q: "L'après-soleil prolonge-t-il le bronzage ?",
        r: "Indirectement. Une peau hydratée desquame moins, et le hâle disparaît donc moins vite. Aucun soin ne fixe la mélanine, mais limiter la desquamation change la durée visible du bronzage.",
      },
    ],
  },

  autobronzant: {
    nature: ["autobronzant", "soin autobronzant"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} colore la couche superficielle de la peau par réaction chimique, sans exposition au soleil ni production de mélanine.",
      "Un {nature} ne protège pas du rayonnement ultraviolet : la coloration obtenue n'a aucune valeur de protection.",
      "{nom} s'estompe en cinq à sept jours, au rythme du renouvellement des cellules de surface.",
    ],
    geste: [
      "Exfolier la veille, puis appliquer {nom} sur peau sèche par mouvements circulaires, en allégeant sur les genoux, coudes et chevilles.",
      "Se laver les mains immédiatement après l'application pour éviter les paumes colorées.",
      "Attendre le temps de pose indiqué avant de s'habiller, la formule transférant sur les textiles clairs.",
    ],
    moment: [
      "L'application se fait le soir, pour laisser la coloration se développer pendant la nuit.",
      "Un entretien tous les trois à quatre jours maintient un résultat régulier.",
    ],
    precaution: [
      "Un autobronzant ne remplace jamais une protection solaire : la peau reste aussi vulnérable aux UV qu'avant l'application.",
    ],
    faq: [
      {
        q: "L'autobronzant protège-t-il du soleil ?",
        r: "Non, en aucun cas. La coloration obtenue est superficielle et ne filtre pas les ultraviolets. Une crème solaire reste indispensable, exactement comme sur une peau non colorée.",
      },
      {
        q: "Combien de temps tient la coloration ?",
        r: "Cinq à sept jours en moyenne, le temps du renouvellement des cellules de surface. La durée dépend surtout de la fréquence des gommages et des bains prolongés.",
      },
      {
        q: "Comment éviter les traces ?",
        r: "Exfolier la veille, sécher soigneusement la peau, appliquer par petites zones en mouvements circulaires et alléger sur les articulations. Les traces viennent presque toujours d'une peau mal préparée.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin des cheveux                                                  */
  /* ---------------------------------------------------------------- */

  shampoing: {
    nature: ["shampoing", "soin lavant pour les cheveux"],
    genre: "m",
    zone: "les cheveux",
    role: [
      "{nom} nettoie le cuir chevelu et retire le sébum, la poussière et les résidus de produits coiffants accumulés entre deux lavages.",
      "Un {nature} agit d'abord sur le cuir chevelu ; les longueurs se nettoient au rinçage, sans avoir besoin d'être frottées.",
      "{nom} conditionne la tenue de la coiffure : un cuir chevelu mal rincé alourdit la racine dès le lendemain.",
    ],
    geste: [
      "Émulsionner {nom} dans les mains, masser le cuir chevelu du bout des doigts pendant une minute, puis rincer abondamment.",
      "Un second lavage plus court est utile après plusieurs jours sans shampoing ou après un produit coiffant.",
      "Rincer {ce} jusqu'à ce que les cheveux crissent sous les doigts : un rinçage insuffisant ternit la fibre.",
    ],
    moment: [
      "La fréquence dépend du cuir chevelu : deux à trois lavages par semaine conviennent à la plupart des cheveux.",
      "{Ce} se rince avant l'après-shampoing, jamais l'inverse.",
    ],
    precaution: [
      "L'eau calcaire, courante en Algérie, laisse un dépôt minéral sur la fibre : un dernier rinçage à l'eau froide limite ce dépôt.",
    ],
    faq: [
      {
        q: "À quelle fréquence se laver les cheveux ?",
        r: "Deux à trois fois par semaine convient à la plupart des cuirs chevelus. Un cheveu gras peut demander un lavage quotidien avec une formule douce, un cheveu crépu ou très sec se contente d'un lavage hebdomadaire.",
      },
      {
        q: "Faut-il faire deux shampoings ?",
        r: "Un double lavage est utile après plusieurs jours sans shampoing, après un bain d'huile ou l'usage de produits coiffants. Le premier décolle, le second nettoie. Sur cheveu propre, un seul lavage suffit.",
      },
      {
        q: "L'eau calcaire abîme-t-elle les cheveux ?",
        r: "Elle ne les abîme pas directement mais dépose des minéraux sur la fibre, ce qui ternit la couleur et rend le cheveu rêche. Un rinçage final à l'eau froide et un soin chélatant occasionnel limitent l'accumulation.",
      },
    ],
  },

  "shampoing-antipelliculaire": {
    nature: ["shampoing antipelliculaire", "shampoing traitant antipelliculaire"],
    genre: "m",
    zone: "le cuir chevelu",
    role: [
      "{nom} agit sur les pellicules, dont l'origine est le plus souvent un déséquilibre du cuir chevelu associé à une levure naturellement présente.",
      "Un {nature} demande un temps de pose : c'est le contact prolongé avec {zone}, pas le lavage, qui fait la différence.",
      "{nom} s'utilise en cure puis en entretien, les pellicules revenant fréquemment à l'arrêt du traitement.",
    ],
    geste: [
      "Masser {nom} sur {zone} humide et laisser poser trois à cinq minutes avant de rincer.",
      "Appliquer {ce} directement sur les racines plutôt que sur les longueurs, les pellicules venant du cuir chevelu.",
      "Deux à trois lavages par semaine pendant la phase de cure, puis un par semaine en entretien.",
    ],
    moment: [
      "La cure dure généralement quatre à six semaines, suivie d'un entretien régulier.",
      "{Ce} peut alterner avec un shampoing doux les autres jours de lavage.",
    ],
    precaution: [
      "Des démangeaisons intenses, des plaques rouges ou des croûtes relèvent d'un avis dermatologique et non d'un shampoing cosmétique.",
    ],
    faq: [
      {
        q: "Combien de temps laisser poser un shampoing antipelliculaire ?",
        r: "Trois à cinq minutes sur cuir chevelu humide. C'est la durée de contact qui compte : rincé immédiatement, l'actif n'a pas le temps d'agir, ce qui explique la plupart des échecs perçus.",
      },
      {
        q: "Les pellicules reviennent-elles après l'arrêt ?",
        r: "Souvent, oui. Le déséquilibre du cuir chevelu est chronique chez beaucoup de personnes. Un lavage d'entretien par semaine après la cure limite nettement les récidives.",
      },
      {
        q: "Peut-on l'utiliser tous les jours ?",
        r: "Ce n'est pas nécessaire et cela peut assécher le cuir chevelu. Deux à trois fois par semaine en phase active suffisent, en alternance avec un shampoing doux le reste du temps.",
      },
    ],
  },

  "shampoing-sec": {
    nature: ["shampoing sec", "shampoing sans rinçage en spray"],
    genre: "m",
    zone: "les racines",
    role: [
      "{nom} absorbe le sébum des racines par des poudres et redonne du volume sans passer par le lavage.",
      "Un {nature} est un dépannage entre deux shampoings, pas un substitut : il ne nettoie pas {zone}.",
      "{nom} rend service quand l'eau manque, en voyage, ou après une séance de sport.",
    ],
    geste: [
      "Secouer le flacon, vaporiser {nom} à une vingtaine de centimètres des racines, raie par raie, puis attendre une minute et masser.",
      "Brosser ensuite pour retirer le résidu de poudre : l'étape la plus souvent oubliée, et la cause du voile blanc.",
      "Ne pas vaporiser {ce} sur les longueurs, où il n'a aucune utilité.",
    ],
    moment: [
      "{Ce} s'utilise entre deux lavages, deux fois par semaine au maximum.",
      "Une application le soir laisse le temps aux poudres d'absorber pendant la nuit.",
    ],
    precaution: [
      "Un usage trop fréquent finit par obstruer les orifices folliculaires : le shampoing sec ne remplace jamais un lavage.",
    ],
    faq: [
      {
        q: "Le shampoing sec lave-t-il vraiment les cheveux ?",
        r: "Non. Il absorbe le sébum et masque l'aspect gras, mais ne retire ni les impuretés ni les résidus. Il dépanne entre deux lavages, sans jamais remplacer un shampoing à l'eau.",
      },
      {
        q: "Comment éviter le voile blanc sur cheveux foncés ?",
        r: "Vaporiser à distance, en petite quantité, attendre une minute puis masser et brosser soigneusement. Les formules teintées existent pour les cheveux bruns et limitent le problème à la racine.",
      },
      {
        q: "Peut-on en utiliser tous les jours ?",
        r: "Ce n'est pas conseillé. Au-delà de deux fois par semaine, l'accumulation de poudres et de sébum peut irriter le cuir chevelu et favoriser les démangeaisons.",
      },
    ],
  },

  "apres-shampoing": {
    nature: ["après-shampoing", "soin démêlant après lavage"],
    genre: "m",
    zone: "les longueurs",
    role: [
      "{nom} referme les écailles de la fibre ouvertes par le lavage, ce qui facilite le démêlage et limite la casse au brossage.",
      "Un {nature} s'applique sur {zone} et les pointes, jamais sur les racines qu'il alourdit.",
      "{nom} réduit l'électricité statique et rend la coiffure plus facile à travailler une fois sèche.",
    ],
    geste: [
      "Essorer les cheveux, appliquer {nom} sur {zone} en évitant les racines, laisser agir deux minutes puis rincer à l'eau tiède.",
      "Démêler avec un peigne à dents larges pendant le temps de pose, jamais après séchage.",
      "Terminer par un rinçage à l'eau froide pour resserrer les écailles.",
    ],
    moment: [
      "{Ce} s'utilise après chaque shampoing, sur cheveux essorés.",
      "Sur cheveu fin, une application aux pointes uniquement évite l'effet plat.",
    ],
    faq: [
      {
        q: "Faut-il un après-shampoing à chaque lavage ?",
        r: "Sur cheveu long, sec, bouclé ou coloré, oui : le démêlage sans soin provoque de la casse. Sur cheveu court et gras, une application aux pointes une fois sur deux suffit.",
      },
      {
        q: "Pourquoi ne pas en mettre aux racines ?",
        r: "Les agents démêlants se déposent sur la fibre et alourdissent la racine, ce qui donne un aspect gras dès le lendemain. Le cuir chevelu n'a pas besoin de démêlant, il produit déjà son propre sébum.",
      },
      {
        q: "Combien de temps le laisser poser ?",
        r: "Deux à trois minutes suffisent pour un après-shampoing classique. Un temps plus long n'améliore pas le résultat : c'est un masque, avec une concentration plus élevée, qui joue sur la durée de pose.",
      },
    ],
  },

  "masque-cheveux": {
    nature: ["masque cheveux", "soin profond pour les cheveux"],
    genre: "m",
    zone: "les longueurs",
    role: [
      "{nom} est plus concentré qu'un après-shampoing et vise la reconstruction de la fibre plutôt que le simple démêlage.",
      "Un {nature} s'utilise en soin hebdomadaire, sur cheveux essorés pour que la formule ne soit pas diluée.",
      "{nom} agit surtout sur les longueurs et les pointes, parties les plus anciennes et les plus abîmées du cheveu.",
    ],
    geste: [
      "Essorer soigneusement les cheveux, appliquer {nom} mèche par mèche sur {zone}, laisser poser cinq à dix minutes puis rincer.",
      "Envelopper la chevelure dans une serviette tiède pendant la pose : la chaleur ouvre les écailles et améliore la pénétration.",
      "Rincer {ce} à l'eau tiède puis terminer à l'eau froide.",
    ],
    moment: [
      "Une application par semaine suffit, en remplacement de l'après-shampoing ce jour-là.",
      "{Ce} se place après le shampoing, sur cheveux essorés.",
    ],
    faq: [
      {
        q: "Masque ou après-shampoing, quelle différence ?",
        r: "L'après-shampoing démêle et referme les écailles en deux minutes. Le masque est plus concentré en agents nourrissants et demande cinq à dix minutes de pose. L'un est hebdomadaire, l'autre s'utilise à chaque lavage.",
      },
      {
        q: "Peut-on laisser un masque toute la nuit ?",
        r: "Ce n'est utile que pour les formules prévues pour cela. Un masque classique laissé trop longtemps peut alourdir la fibre sans bénéfice supplémentaire : au-delà de vingt minutes, l'absorption ne progresse plus.",
      },
      {
        q: "Faut-il l'appliquer avant ou après le shampoing ?",
        r: "Après, sur cheveux lavés et essorés. Sur cheveux non lavés, le sébum et les résidus empêchent la formule d'atteindre la fibre.",
      },
    ],
  },

  "anti-chute": {
    nature: ["soin anti-chute", "traitement capillaire anti-chute"],
    genre: "m",
    zone: "le cuir chevelu",
    role: [
      "{nom} s'adresse aux chutes de cheveux réactionnelles : saison, fatigue, suite d'accouchement, carence passagère.",
      "Un {nature} agit sur {zone} et l'environnement du follicule ; il ne fait pas repousser un cheveu dont le follicule ne fonctionne plus.",
      "{nom} s'utilise en cure de trois mois minimum, durée d'un cycle capillaire.",
    ],
    geste: [
      "Appliquer {nom} raie par raie directement sur {zone}, puis masser du bout des doigts pendant une minute.",
      "Ne pas rincer les formules en lotion : elles sont conçues pour rester en place.",
      "Le massage quotidien du cuir chevelu accompagne utilement le soin.",
    ],
    moment: [
      "L'application est quotidienne ou trois fois par semaine selon la formule, sur cheveux secs ou humides.",
      "Une cure se mène sur trois mois sans interruption, la repousse se mesurant en cycles.",
    ],
    precaution: [
      "Une chute brutale, par plaques ou accompagnée de démangeaisons, relève d'un avis dermatologique avant tout produit cosmétique.",
    ],
    faq: [
      {
        q: "Combien de temps dure une cure anti-chute ?",
        r: "Trois mois au minimum. Le cycle de vie d'un cheveu comprend une phase de croissance de plusieurs années et une phase de chute de trois mois : aucun résultat n'est mesurable avant la fin d'un cycle complet.",
      },
      {
        q: "Perdre des cheveux tous les jours est-il normal ?",
        r: "Oui. Une perte de cinquante à cent cheveux par jour fait partie du renouvellement normal. Ce qui doit alerter est une accélération soudaine, une perte par plaques ou un éclaircissement visible du cuir chevelu.",
      },
      {
        q: "Un soin anti-chute fait-il repousser les cheveux ?",
        r: "Un produit cosmétique agit sur l'environnement du follicule et peut limiter une chute réactionnelle. Il ne réactive pas un follicule définitivement arrêté, ce qui relève d'un traitement médical.",
      },
    ],
  },

  "huile-cheveux": {
    nature: ["huile pour cheveux", "huile capillaire"],
    genre: "f",
    zone: "les longueurs",
    role: [
      "{nom} gaine la fibre et limite l'évaporation de l'eau qu'elle contient, ce qui réduit la sensation de cheveu rêche.",
      "Une {nature} s'utilise en bain avant le shampoing ou en finition sur {zone} sèches, à dose très réduite.",
      "{nom} apporte de la brillance en lissant les écailles à la surface du cheveu.",
    ],
    geste: [
      "En bain d'huile, appliquer {nom} sur cheveux secs, laisser poser au moins trente minutes, puis laver deux fois.",
      "En finition, chauffer deux gouttes entre les paumes et les passer sur {zone} et les pointes uniquement.",
      "Ne pas appliquer {ce} sur les racines en finition : l'aspect gras est immédiat.",
    ],
    moment: [
      "Le bain d'huile se pratique une fois par semaine, avant le lavage.",
      "En finition, {ce} s'utilise sur cheveux humides ou secs, après le coiffage.",
    ],
    faq: [
      {
        q: "Faut-il appliquer l'huile avant ou après le shampoing ?",
        r: "Les deux usages existent. Avant le shampoing, en bain de trente minutes à une nuit, l'huile nourrit en profondeur. Après, sur longueurs sèches et en très petite quantité, elle sert de finition brillante.",
      },
      {
        q: "Combien de gouttes utiliser en finition ?",
        r: "Deux à trois gouttes pour une chevelure mi-longue, chauffées entre les paumes puis réparties des mi-longueurs aux pointes. Un excès alourdit la fibre et se voit immédiatement.",
      },
      {
        q: "L'huile fait-elle pousser les cheveux ?",
        r: "Non, la croissance se joue au niveau du follicule, dans le cuir chevelu. L'huile limite en revanche la casse des longueurs, ce qui permet de conserver la longueur gagnée.",
      },
    ],
  },

  "serum-cheveux": {
    nature: ["sérum cheveux", "soin sans rinçage pour les cheveux"],
    genre: "m",
    zone: "les longueurs",
    role: [
      "{nom} reste sur la fibre après application et agit tout au long de la journée, contrairement à un soin rincé.",
      "Un {nature} discipline les frisottis et facilite le coiffage sans alourdir comme le ferait une huile.",
      "{nom} peut aussi jouer un rôle de protection avant l'usage d'un appareil chauffant, quand la formule le précise.",
    ],
    geste: [
      "Appliquer {nom} sur cheveux essorés, des mi-longueurs aux pointes, puis coiffer normalement.",
      "Deux à trois pressions suffisent : un excès rend la chevelure lourde dès le lendemain.",
      "Ne pas rincer, et éviter le contact avec {zone} au niveau des racines.",
    ],
    moment: [
      "{Ce} s'utilise après chaque lavage, sur cheveux humides.",
      "Une retouche sur cheveux secs est possible en journée pour lisser les frisottis.",
    ],
    faq: [
      {
        q: "Faut-il rincer un sérum cheveux ?",
        r: "Non, c'est un soin sans rinçage, conçu pour rester sur la fibre. Le rincer annule son intérêt. La seule précaution est le dosage : deux à trois pressions pour une chevelure mi-longue.",
      },
      {
        q: "Sur cheveux secs ou humides ?",
        r: "De préférence sur cheveux essorés, encore humides : la répartition est plus régulière et la fibre absorbe mieux. Une retouche sur cheveux secs reste possible pour discipliner les frisottis.",
      },
      {
        q: "Un sérum remplace-t-il l'après-shampoing ?",
        r: "Non. L'après-shampoing démêle et referme les écailles pendant le lavage, le sérum protège et discipline après. Les deux se complètent, en particulier sur cheveu bouclé ou abîmé.",
      },
    ],
  },

  "creme-cheveux": {
    nature: ["crème coiffante", "soin coiffant sans rinçage"],
    genre: "f",
    zone: "les longueurs",
    role: [
      "{nom} hydrate et définit la coiffure sans effet de fixation rigide.",
      "Une {nature} est particulièrement adaptée aux cheveux bouclés et crépus, dont la boucle a besoin d'eau et de corps gras pour se former.",
      "{nom} reste sur la fibre, ce qui prolonge son action jusqu'au lavage suivant.",
    ],
    geste: [
      "Appliquer {nom} sur cheveux humides, mèche par mèche, en froissant la boucle dans la paume.",
      "Répartir des mi-longueurs aux pointes, sans toucher {zone} au niveau des racines.",
      "Laisser sécher à l'air libre ou au diffuseur, sans manipuler la chevelure pendant le séchage.",
    ],
    moment: [
      "{Ce} s'utilise après chaque lavage, sur cheveux essorés.",
      "Une retouche à l'eau permet de réactiver la boucle les jours suivants.",
    ],
    faq: [
      {
        q: "Sur cheveux mouillés ou secs ?",
        r: "Sur cheveux humides, essorés mais non séchés. L'eau est ce qui forme la boucle ; la crème sert à la fixer en limitant l'évaporation. Appliquée sur cheveux secs, elle définit beaucoup moins.",
      },
      {
        q: "Quelle quantité pour des cheveux bouclés ?",
        r: "L'équivalent d'une noisette pour une chevelure mi-longue, à ajuster selon la densité. Il vaut mieux appliquer en deux fois qu'une quantité trop importante d'un coup, qui alourdit les boucles.",
      },
      {
        q: "Peut-on l'associer à un gel ?",
        r: "Oui, c'est une combinaison courante : la crème hydrate, le gel fixe par-dessus. On applique la crème d'abord, puis le gel sur cheveux encore humides.",
      },
    ],
  },

  coloration: {
    nature: ["coloration cheveux", "produit de coloration capillaire"],
    genre: "f",
    zone: "les cheveux",
    role: [
      "{nom} modifie la couleur de la fibre, de façon permanente, semi-permanente ou par simple dépôt selon la formule.",
      "Une {nature} s'applique d'abord sur les racines, dont la repousse est le point le plus visible.",
      "{nom} donne un résultat qui dépend de la base de départ : le nuancier indique une cible, pas une garantie.",
    ],
    geste: [
      "Réaliser un test de tolérance quarante-huit heures avant, derrière l'oreille, comme l'indique la notice.",
      "Appliquer {nom} sur cheveux secs et non lavés, racines d'abord, puis longueurs sur les dernières minutes.",
      "Respecter strictement le temps de pose indiqué et rincer jusqu'à ce que l'eau soit claire.",
    ],
    moment: [
      "Une retouche des racines toutes les quatre à six semaines suit le rythme de la repousse.",
      "{Ce} s'utilise sur cheveux non lavés depuis un ou deux jours, le sébum protégeant le cuir chevelu.",
    ],
    precaution: [
      "Le test de tolérance quarante-huit heures avant est indispensable, y compris pour une coloration déjà utilisée par le passé.",
    ],
    faq: [
      {
        q: "Faut-il faire un test avant de colorer ?",
        r: "Oui, systématiquement, quarante-huit heures avant, sur une petite zone derrière l'oreille. Une allergie aux colorants peut apparaître même après des années d'usage sans incident. C'est une consigne réglementaire, pas une précaution facultative.",
      },
      {
        q: "Peut-on colorer des cheveux déjà colorés ?",
        r: "Oui, en appliquant d'abord sur les racines puis en étirant sur les longueurs les dernières minutes. Appliquer partout dès le départ superpose les pigments et fonce progressivement les pointes.",
      },
      {
        q: "Combien de temps attendre entre deux colorations ?",
        r: "Quatre à six semaines, le temps d'une repousse visible. Colorer plus souvent fragilise la fibre, surtout avec une formule éclaircissante.",
      },
    ],
  },

  coiffant: {
    nature: ["gel coiffant", "produit de coiffage"],
    genre: "m",
    zone: "les cheveux",
    role: [
      "{nom} fixe la coiffure et maintient la forme donnée au moment du coiffage.",
      "Un {nature} agit en surface : il ne nourrit pas la fibre et se retire au lavage suivant.",
      "{nom} définit aussi la boucle sur cheveu bouclé, en figeant la forme prise au séchage.",
    ],
    geste: [
      "Prélever une noisette de {nom}, la répartir entre les paumes puis l'appliquer sur cheveux humides ou secs selon l'effet recherché.",
      "Sur cheveu bouclé, froisser la mèche dans la main puis laisser sécher sans y toucher, avant de casser le film au frottement final.",
      "Éviter le contact avec {zone} au niveau du cuir chevelu, où le produit peut obstruer et démanger.",
    ],
    moment: [
      "{Ce} s'applique au moment du coiffage, sur cheveux propres.",
      "Un lavage est nécessaire pour retirer le produit : il ne se dilue pas à l'eau seule.",
    ],
    faq: [
      {
        q: "Le gel abîme-t-il les cheveux ?",
        r: "Il n'abîme pas la fibre directement, mais un usage quotidien sans lavage complet laisse une accumulation qui ternit et alourdit. Un shampoing clarifiant occasionnel suffit à repartir sur une base propre.",
      },
      {
        q: "Sur cheveux mouillés ou secs ?",
        r: "Sur cheveux humides pour une fixation nette et une boucle définie, sur cheveux secs pour retoucher ou texturiser. L'application sur cheveux humides donne un résultat plus régulier.",
      },
      {
        q: "Comment enlever l'effet cartonné ?",
        r: "Laisser sécher complètement, puis froisser les mèches entre les paumes. Ce geste casse le film de fixation en surface et libère le mouvement sans défaire la forme.",
      },
    ],
  },

  "appareil-coiffant": {
    nature: ["appareil coiffant", "appareil de coiffage"],
    genre: "m",
    zone: "les cheveux",
    role: [
      "{nom} met en forme la chevelure par la chaleur, en modifiant temporairement les liaisons internes de la fibre.",
      "Un {nature} demande un protecteur thermique : au-delà de cent quatre-vingts degrés, la kératine se dégrade de façon irréversible.",
      "{nom} donne un résultat qui tient jusqu'au prochain lavage ou jusqu'à la prochaine exposition à l'humidité.",
    ],
    geste: [
      "Appliquer un protecteur thermique sur cheveux secs, puis travailler mèche par mèche, sans repasser plusieurs fois au même endroit.",
      "Commencer à la température la plus basse qui donne le résultat voulu : cheveu fin autour de cent cinquante degrés, cheveu épais plus haut.",
      "Laisser refroidir la mèche avant de la manipuler, la forme se fixant au refroidissement.",
    ],
    moment: [
      "Un usage quotidien est déconseillé : deux à trois fois par semaine limite l'usure de la fibre.",
      "{Ce} s'utilise toujours sur cheveux parfaitement secs, sauf appareil conçu pour le cheveu humide.",
    ],
    precaution: [
      "Un appareil chauffant utilisé sur cheveu humide provoque une évaporation brutale de l'eau interne et fragilise durablement la fibre.",
    ],
    faq: [
      {
        q: "À quelle température régler l'appareil ?",
        r: "Entre cent cinquante et cent soixante-dix degrés pour un cheveu fin ou coloré, jusqu'à cent quatre-vingt-dix pour un cheveu épais ou crépu. Au-delà de deux cents degrés, la dégradation de la kératine devient irréversible.",
      },
      {
        q: "Faut-il un protecteur thermique ?",
        r: "Oui, systématiquement. Il forme une barrière qui répartit la chaleur et limite l'évaporation brutale de l'eau contenue dans la fibre. Sans lui, la casse apparaît en quelques semaines d'usage régulier.",
      },
      {
        q: "Peut-on l'utiliser sur cheveux humides ?",
        r: "Non, sauf appareil explicitement conçu pour cela. L'eau contenue dans la fibre se vaporise brutalement au contact de la plaque et fragilise le cheveu de l'intérieur.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin du corps                                                     */
  /* ---------------------------------------------------------------- */

  "lait-corps": {
    nature: ["lait corps", "lait hydratant pour le corps"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} apporte de l'eau à la peau du corps, dont la densité en glandes sébacées est bien inférieure à celle du visage.",
      "Un {nature} pénètre vite grâce à sa phase aqueuse dominante, ce qui permet de se rhabiller sans attendre.",
      "{nom} limite la sensation de peau qui tiraille après la douche, moment où le film protecteur vient d'être retiré.",
      "La texture lait couvre de grandes surfaces avec peu de produit : c'est le format le plus économe en quantité appliquée.",
    ],
    geste: [
      "Appliquer {nom} sur peau propre et encore tiède, en remontant des chevilles vers les épaules.",
      "Insister sur les coudes, les genoux et les talons, où la peau est plus épaisse et se dessèche en premier.",
      "Deux pressions suffisent par jambe : masser jusqu'à absorption complète, sans laisser de film gras.",
      "Répartir {ce} en filet sur les bras et les jambes, puis lisser à deux mains pour une couche régulière.",
    ],
    moment: [
      "Le moment le plus efficace est la sortie de douche, sur peau encore humide, quand la peau capte l'eau résiduelle.",
      "{Ce} s'utilise une fois par jour ; en période de forte chaleur, une application le soir suffit souvent.",
      "En hiver ou après une exposition au soleil, deux applications quotidiennes sont justifiées.",
    ],
    faq: [
      {
        q: "Quelle différence entre un lait et une crème pour le corps ?",
        r: "Un lait contient plus d'eau et moins de corps gras qu'une crème : il pénètre plus vite et laisse un fini léger. Une crème est plus riche et convient mieux aux peaux très sèches ou aux zones rugueuses.",
      },
      {
        q: "Faut-il l'appliquer sur peau humide ou sèche ?",
        r: "Sur peau légèrement humide, dans les trois minutes qui suivent la douche. L'eau restée en surface est alors captée par la formule au lieu de s'évaporer, ce qui augmente nettement le confort obtenu.",
      },
      {
        q: "Peut-on utiliser {nom} sur le visage ?",
        r: "Ce n'est pas conseillé. Les formules corps sont plus parfumées et pensées pour une peau plus épaisse. Sur le visage, elles peuvent obstruer les pores et provoquer des imperfections.",
      },
    ],
  },

  "creme-corps": {
    nature: ["crème hydratante corps", "crème nourrissante pour le corps"],
    genre: "f",
    zone: "le corps",
    role: [
      "{nom} associe une phase aqueuse et une phase grasse : la première hydrate, la seconde ralentit l'évaporation.",
      "Une {nature} convient aux peaux qui restent rugueuses malgré l'usage d'un lait, notamment en saison sèche.",
      "{nom} reconstitue le film protecteur retiré par les lavages répétés et par l'eau calcaire.",
      "La texture crème reste plus longtemps en surface qu'un lait, ce qui prolonge son effet sur les zones exposées.",
    ],
    geste: [
      "Réchauffer une noisette de {nom} entre les paumes, puis masser {zone} par mouvements circulaires jusqu'à absorption.",
      "Traiter en priorité les coudes, les genoux, les talons et le dos des mains, plus épais et plus secs que le reste.",
      "Appliquer {ce} en couche fine : une couche épaisse ne pénètre pas mieux, elle reste sur la peau et marque les vêtements.",
      "Sur les zones très sèches, superposer deux couches à quelques minutes d'intervalle plutôt qu'une seule couche épaisse.",
    ],
    moment: [
      "{Ce} s'applique après la douche et, si besoin, une seconde fois le soir sur les zones rugueuses.",
      "Un usage quotidien est prévu ; l'effet devient net après une à deux semaines d'application régulière.",
      "En cas d'exposition prolongée au soleil ou à la climatisation, l'application du soir devient la plus utile.",
    ],
    faq: [
      {
        q: "Combien de temps une peau sèche met-elle à s'améliorer ?",
        r: "Comptez sept à quatorze jours d'application quotidienne pour un changement net de confort. La couche cornée se renouvelle en trois à quatre semaines : c'est ce cycle qui fixe le délai réel.",
      },
      {
        q: "Une crème corps convient-elle aux mains ?",
        r: "Oui, mais les mains sont lavées plusieurs fois par jour et perdent le produit à chaque lavage. Une crème mains dédiée, plus concentrée en corps gras, tient mieux sur cette zone.",
      },
      {
        q: "{Le} laisse-t-elle un film gras ?",
        r: "Une crème corps met plus de temps à pénétrer qu'un lait. Appliquée en couche fine sur peau humide, elle est absorbée en deux à trois minutes et ne marque pas les vêtements.",
      },
    ],
  },

  "huile-corps": {
    nature: ["huile corps", "huile pour le corps"],
    genre: "f",
    zone: "le corps",
    role: [
      "{nom} ne contient pas d'eau : elle agit en limitant la perte de celle que la peau contient déjà.",
      "Une {nature} laisse un fini souple et lisse, apprécié sur les peaux sèches et sur les jambes après épilation.",
      "{nom} facilite le massage, l'huile réduisant le frottement entre la main et la peau.",
      "Une huile s'utilise seule sur peau bien hydratée, ou en couche finale par-dessus un lait pour retenir l'hydratation.",
    ],
    geste: [
      "Chauffer quelques gouttes de {nom} dans les mains, puis lisser {zone} en remontant vers le cœur.",
      "Appliquer {ce} sur peau humide : l'huile piège alors l'eau restée en surface au lieu de la laisser s'évaporer.",
      "Trois à cinq gouttes suffisent par zone ; un excès reste en surface et transfère sur les vêtements.",
      "Masser lentement pendant une minute par zone : la chaleur de la main facilite la pénétration.",
    ],
    moment: [
      "{Ce} s'utilise à la sortie de la douche, ou le soir pour un temps de pose long sans contrainte vestimentaire.",
      "Un usage quotidien convient sur peau sèche ; deux à trois fois par semaine suffisent sur peau normale.",
      "Attendre cinq minutes avant de s'habiller, le temps que le film gras soit absorbé.",
    ],
    precaution: [
      "Une huile appliquée avant une exposition au soleil peut accentuer la pénétration des rayons : elle ne remplace jamais une protection solaire.",
    ],
    faq: [
      {
        q: "Une huile hydrate-t-elle vraiment la peau ?",
        r: "Une huile n'apporte pas d'eau : elle limite l'évaporation de celle déjà présente. Sur une peau déshydratée, il faut l'appliquer sur peau humide ou par-dessus un lait pour obtenir un vrai résultat.",
      },
      {
        q: "{Le} laisse-t-elle des traces sur les vêtements ?",
        r: "Appliquée en petite quantité et massée jusqu'à absorption, elle ne marque pas. Le transfert vient presque toujours d'un excès de produit ou d'un habillage trop rapide.",
      },
      {
        q: "Peut-on l'utiliser sur les cheveux ?",
        r: "Une huile corps peut convenir sur les pointes si sa composition est végétale et sans parfum lourd. Une huile capillaire reste mieux formulée pour la fibre et se rince plus facilement.",
      },
    ],
  },

  "huile-vegetale": {
    nature: ["huile végétale", "huile végétale pure"],
    genre: "f",
    zone: "la peau",
    role: [
      "{nom} est issue d'une pression de graines ou de fruits : sa composition en acides gras détermine son usage.",
      "Une {nature} s'emploie seule ou intégrée à une préparation, sur {zone}, les cheveux ou les ongles.",
      "{nom} contient naturellement des acides gras insaturés et de la vitamine E, sans ajout de conservateur dans les versions pures.",
      "Les huiles riches en acide linoléique conviennent aux peaux mixtes ; celles riches en acide oléique aux peaux sèches.",
    ],
    geste: [
      "Verser quelques gouttes de {nom} dans le creux de la main, réchauffer, puis appliquer sur la zone visée.",
      "Faire un essai dans le pli du coude avant la première utilisation étendue, en particulier sur peau réactive.",
      "Sur le visage, deux à trois gouttes suffisent en dernière étape de routine, le soir.",
      "Sur les longueurs de cheveux, appliquer {ce} avant le shampoing en bain d'huile, puis laisser poser une heure.",
    ],
    moment: [
      "{Ce} s'utilise le soir sur le visage, à tout moment sur le corps, et avant le lavage sur les cheveux.",
      "Une à trois applications par semaine suffisent en bain capillaire ; un usage quotidien est possible sur la peau.",
      "Conserver le flacon à l'abri de la lumière et de la chaleur : une huile pure s'oxyde et change d'odeur.",
    ],
    precaution: [
      "Une huile végétale pure ne contient pas de conservateur : refermer le flacon après usage et respecter la durée d'ouverture indiquée.",
    ],
    faq: [
      {
        q: "Une huile végétale est-elle comédogène ?",
        r: "Cela dépend de l'huile. Le jojoba, le squalane et le chanvre sont considérés comme non comédogènes ; l'huile de coco et le germe de blé le sont davantage. Sur peau à imperfections, mieux vaut choisir une huile légère.",
      },
      {
        q: "Comment conserver {nom} ?",
        r: "À l'abri de la lumière et de la chaleur, bouchon fermé, et de préférence sous vingt-cinq degrés. Une huile oxydée prend une odeur âcre : elle ne doit plus être appliquée sur la peau.",
      },
      {
        q: "Peut-on mélanger deux huiles végétales ?",
        r: "Oui, c'est une pratique courante : on associe souvent une huile pénétrante et une huile plus couvrante. Le mélange se prépare en petite quantité, pour être utilisé dans les semaines qui suivent.",
      },
    ],
  },

  "huile-essentielle": {
    nature: ["huile essentielle", "extrait aromatique concentré"],
    genre: "f",
    zone: "la peau",
    role: [
      "{nom} est un extrait aromatique très concentré, obtenu par distillation de la plante entière ou d'une de ses parties.",
      "Une {nature} ne s'applique pas pure sur {zone} : elle se dilue dans une huile végétale ou dans une base neutre.",
      "{nom} s'emploie en diffusion atmosphérique, en dilution cosmétique, ou dans une préparation de massage.",
      "La concentration usuelle en cosmétique se situe entre un et trois pour cent du produit fini.",
    ],
    geste: [
      "Diluer une à deux gouttes de {nom} dans une cuillère d'huile végétale avant toute application cutanée.",
      "Tester la dilution dans le pli du coude et attendre vingt-quatre heures avant un usage plus large.",
      "En diffusion, cinq à dix gouttes suffisent pour une pièce, par séquences de vingt minutes.",
      "Refermer le flacon immédiatement : les composés aromatiques sont volatils et s'évaporent à l'air libre.",
    ],
    moment: [
      "{Ce} s'utilise ponctuellement, sur une durée limitée, et non en usage quotidien prolongé.",
      "La diffusion se fait en dehors de la présence de jeunes enfants et d'animaux.",
    ],
    precaution: [
      "Les huiles essentielles sont déconseillées chez la femme enceinte, la femme allaitante et l'enfant de moins de trois ans, sauf avis d'un professionnel de santé.",
      "Certaines huiles d'agrumes sont photosensibilisantes : ne pas s'exposer au soleil dans les heures qui suivent l'application.",
    ],
    faq: [
      {
        q: "Peut-on appliquer une huile essentielle pure sur la peau ?",
        r: "Non, sauf indication précise pour certaines huiles et sur une très petite surface. La concentration en molécules aromatiques est telle qu'une application pure expose à des irritations et à des sensibilisations durables.",
      },
      {
        q: "Comment diluer {nom} ?",
        r: "Une à deux gouttes pour une cuillère à café d'huile végétale correspondent à une dilution d'environ deux pour cent, valeur usuelle pour un adulte sur une petite surface du corps.",
      },
      {
        q: "Les huiles essentielles conviennent-elles aux enfants ?",
        r: "Avant trois ans, l'usage cutané et la diffusion sont déconseillés sans avis médical. Entre trois et douze ans, seules certaines huiles sont admises, à des dilutions inférieures à celles de l'adulte.",
      },
    ],
  },

  "gommage-corps": {
    nature: ["gommage corps", "exfoliant pour le corps"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} retire les cellules mortes de la surface de la peau au moyen de particules abrasives ou d'acides doux.",
      "Un {nature} lisse le grain de peau et permet aux soins hydratants appliqués ensuite de mieux se répartir.",
      "{nom} limite les poils incarnés en dégageant la surface au-dessus du follicule, avant ou après l'épilation.",
      "Un gommage régulier uniformise l'aspect des zones rugueuses comme les coudes, les genoux et les talons.",
    ],
    geste: [
      "Appliquer {nom} sur peau humide, masser en cercles pendant une minute par zone, puis rincer abondamment.",
      "Éviter d'appuyer : le geste doit rester léger, c'est le grain qui travaille, pas la pression.",
      "Insister sur les zones épaisses et rester rapide sur le ventre et l'intérieur des bras, plus fins.",
      "Appliquer un lait ou une huile juste après le rinçage, la peau étant alors la plus réceptive.",
    ],
    moment: [
      "Une à deux fois par semaine suffisent : un gommage trop fréquent fragilise la barrière cutanée.",
      "{Ce} s'utilise avant l'épilation ou le rasage pour dégager les poils, jamais juste après.",
      "Attendre quarante-huit heures après une exposition solaire intense avant d'exfolier.",
    ],
    precaution: [
      "Un gommage ne s'applique jamais sur une peau lésée, irritée ou après un coup de soleil.",
    ],
    faq: [
      {
        q: "À quelle fréquence faire un gommage du corps ?",
        r: "Une à deux fois par semaine sur peau normale, une fois tous les dix jours sur peau sensible. Au-delà, l'exfoliation retire plus de cellules que la peau n'en renouvelle et laisse une sensation d'inconfort.",
      },
      {
        q: "Avant ou après l'épilation ?",
        r: "Avant, vingt-quatre à quarante-huit heures à l'avance : la surface est dégagée et les poils sortent plus facilement. Juste après une épilation, la peau est trop réactive pour supporter un gommage.",
      },
      {
        q: "Gommage à grains ou gommage chimique ?",
        r: "Les grains agissent mécaniquement et donnent un résultat immédiat ; les acides de fruits agissent en dissolvant les liaisons entre cellules mortes et conviennent mieux aux peaux réactives ou aux poils incarnés.",
      },
    ],
  },

  "creme-mains": {
    nature: ["crème mains", "soin pour les mains"],
    genre: "f",
    zone: "les mains",
    role: [
      "{nom} compense les lavages répétés, qui retirent à chaque passage une partie du film protecteur des mains.",
      "Une {nature} contient une proportion de corps gras supérieure à celle d'un lait corps, pour tenir malgré les lavages.",
      "{nom} traite aussi les ongles et les cuticules, zones qui se dessèchent et se fendillent en premier.",
      "Le dos des mains compte peu de glandes sébacées et une peau fine : c'est la zone du corps qui marque le plus vite.",
    ],
    geste: [
      "Déposer une noisette de {nom} sur le dos d'une main, puis répartir en frottant les deux mains l'une contre l'autre.",
      "Faire pénétrer doigt par doigt et terminer par les cuticules, en petits cercles à la base de l'ongle.",
      "Appliquer {ce} après chaque lavage, en fine couche, plutôt qu'une seule fois en grande quantité.",
      "Une couche plus épaisse au coucher tient toute la nuit et donne le résultat le plus visible au réveil.",
    ],
    moment: [
      "{Ce} s'utilise après chaque lavage des mains et systématiquement le soir.",
      "Un format nomade permet de renouveler l'application dans la journée, moment où le besoin est le plus fréquent.",
      "En hiver et en cas de contact répété avec l'eau, l'application du soir devient la plus utile.",
    ],
    faq: [
      {
        q: "Pourquoi les mains se dessèchent-elles plus que le reste du corps ?",
        r: "Le dos des mains a une peau fine et peu de glandes sébacées. Il subit en plus les lavages, les détergents et l'eau calcaire, qui retirent le film protecteur plusieurs fois par jour.",
      },
      {
        q: "{Le} convient-elle aux ongles et aux cuticules ?",
        r: "Oui. Massée à la base de l'ongle, elle assouplit les cuticules et limite les petites peaux qui se décollent. Un massage quotidien de trente secondes par main suffit.",
      },
      {
        q: "Quand appliquer une crème mains ?",
        r: "Après chaque lavage et avant le coucher. L'application nocturne est la plus efficace : la crème reste plusieurs heures en place sans être retirée par l'eau ou le savon.",
      },
    ],
  },

  "creme-pieds": {
    nature: ["crème pieds", "soin pour les pieds"],
    genre: "f",
    zone: "les pieds",
    role: [
      "{nom} traite une peau plantaire jusqu'à dix fois plus épaisse que celle du visage, qui demande des concentrations plus élevées.",
      "Une {nature} contient souvent de l'urée : cet ingrédient hydrate et assouplit les zones kératinisées comme les talons.",
      "{nom} limite les fissures du talon, qui apparaissent quand la corne sèche perd sa souplesse.",
      "Le soin des pieds prend de l'importance en saison chaude, quand les chaussures ouvertes exposent le talon au frottement et à l'air sec.",
    ],
    geste: [
      "Appliquer {nom} sur pieds propres et secs, en insistant sur le talon, le bord externe et la plante.",
      "Masser jusqu'à absorption, puis enfiler des chaussettes en coton pour maintenir le produit en place.",
      "Éviter l'espace entre les orteils, où l'humidité retenue favorise les macérations.",
      "Sur talons très secs, poncer légèrement la corne avant l'application pour que le produit atteigne les couches vivantes.",
    ],
    moment: [
      "{Ce} s'utilise le soir, la nuit étant la période où le produit reste le plus longtemps sans frottement.",
      "Un usage quotidien pendant deux semaines est nécessaire sur des talons fissurés, puis deux à trois fois par semaine en entretien.",
    ],
    faq: [
      {
        q: "Combien de temps pour réduire la corne des talons ?",
        r: "Comptez deux à trois semaines d'application quotidienne, en associant un ponçage doux hebdomadaire. Une crème à l'urée agit plus vite qu'une crème hydratante classique sur cette zone.",
      },
      {
        q: "Faut-il porter des chaussettes après application ?",
        r: "C'est utile la nuit : les chaussettes maintiennent le produit sur la peau au lieu de le laisser transférer sur les draps, et limitent l'évaporation. Le coton reste préférable aux matières synthétiques.",
      },
      {
        q: "{Le} s'applique-t-elle entre les orteils ?",
        r: "Non. Cette zone reste humide et mal ventilée ; y déposer un corps gras favorise la macération. L'application s'arrête à la base des orteils.",
      },
    ],
  },

  deodorant: {
    nature: ["déodorant", "soin déodorant"],
    genre: "m",
    zone: "les aisselles",
    role: [
      "{nom} agit sur l'odeur, pas sur la transpiration : il limite le développement des bactéries qui dégradent la sueur.",
      "Un {nature} laisse la transpiration se faire normalement, ce qui préserve la régulation thermique du corps.",
      "{nom} associe généralement un agent antibactérien et un parfum, qui prend le relais en surface.",
      "La sueur est inodore à sa sortie : c'est sa dégradation par la flore cutanée qui produit l'odeur.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} propres et sèches, une peau humide diluant le produit et réduisant sa tenue.",
      "Laisser sécher quelques secondes avant de s'habiller pour éviter les traces sur les tissus.",
      "Deux passages suffisent par aisselle : la quantité n'augmente pas la durée d'efficacité.",
      "Éviter l'application juste après le rasage, la peau étant alors microlésée et plus réactive.",
    ],
    moment: [
      "{Ce} s'applique le matin après la douche, et se renouvelle en cours de journée par forte chaleur.",
      "En période chaude, une seconde application après la douche du soir prolonge le confort.",
    ],
    faq: [
      {
        q: "Quelle différence entre un déodorant et un anti-transpirant ?",
        r: "Un déodorant agit sur l'odeur en limitant les bactéries responsables. Un anti-transpirant réduit en plus le flux de sueur grâce à des sels d'aluminium qui resserrent temporairement les canaux sudoraux.",
      },
      {
        q: "Peut-on appliquer {nom} après le rasage ?",
        r: "Mieux vaut attendre quelques heures. Le rasage laisse des microcoupures, et les formules alcoolisées ou parfumées provoquent alors des picotements. Une application le soir pour un rasage du matin évite le problème.",
      },
      {
        q: "Pourquoi le déodorant laisse-t-il des traces blanches ?",
        r: "Les traces viennent des poudres absorbantes et des sels contenus dans la formule, qui se déposent sur le tissu. Laisser sécher complètement avant de s'habiller réduit nettement le phénomène.",
      },
    ],
  },

  "anti-transpirant": {
    nature: ["anti-transpirant", "soin anti-transpirant"],
    genre: "m",
    zone: "les aisselles",
    role: [
      "{nom} réduit le flux de sueur en resserrant temporairement l'ouverture des canaux sudoraux à la surface de la peau.",
      "Un {nature} agit sur la quantité de sueur, là où un déodorant n'agit que sur l'odeur qui en résulte.",
      "{nom} s'adresse aux transpirations abondantes, pour lesquelles un déodorant seul ne suffit pas.",
      "L'efficacité d'un anti-transpirant se mesure en heures de protection annoncées, généralement de vingt-quatre à quarante-huit heures.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} propres et parfaitement sèches, la formule ayant besoin de peau nue pour agir.",
      "L'application du soir est la plus efficace : le débit de sueur est au plus bas pendant la nuit, ce qui laisse le produit agir.",
      "Une couche fine suffit ; la surcharge n'augmente pas l'effet et accentue les traces sur les vêtements.",
      "Ne pas appliquer immédiatement après le rasage, la peau venant d'être microlésée.",
    ],
    moment: [
      "{Ce} s'applique le soir avant le coucher, et non le matin comme un déodorant classique.",
      "Une application tous les deux à trois jours suffit avec la plupart des formules longue durée.",
    ],
    precaution: [
      "En cas de rougeur ou de démangeaison persistante, espacer les applications et privilégier une formule sans alcool.",
    ],
    faq: [
      {
        q: "Pourquoi appliquer un anti-transpirant le soir ?",
        r: "Le débit de sueur est au plus bas pendant la nuit. Les sels d'aluminium ont alors le temps de former le bouchon superficiel qui réduit le flux, sans être dilués ni évacués immédiatement.",
      },
      {
        q: "Un anti-transpirant empêche-t-il le corps d'éliminer ?",
        r: "Non. Il agit sur une surface réduite, les aisselles, qui représentent une part minime des glandes sudoripares. La régulation thermique et l'élimination se poursuivent par le reste du corps.",
      },
      {
        q: "{Le} tache-t-il les vêtements ?",
        r: "Les auréoles jaunes viennent de la réaction entre les sels d'aluminium et les protéines de la sueur sur le tissu. Une application fine, bien sèche avant l'habillage, limite fortement le dépôt.",
      },
    ],
  },

  minceur: {
    nature: ["soin minceur", "soin ciblé corps"],
    genre: "m",
    zone: "les zones ciblées",
    role: [
      "{nom} agit en surface : il hydrate, assouplit et améliore l'aspect de la peau sur {zone}.",
      "Un {nature} s'utilise en complément d'une activité physique et d'une alimentation adaptées, jamais à leur place.",
      "{nom} contient souvent de la caféine ou des extraits végétaux, employés pour leur effet sur l'aspect de la peau.",
      "Le massage associé à l'application compte autant que la formule : il stimule la circulation de surface.",
    ],
    geste: [
      "Appliquer {nom} par mouvements ascendants, des chevilles vers les cuisses, en insistant par palper-rouler.",
      "Consacrer deux à trois minutes par zone : le geste de massage fait partie du protocole d'utilisation.",
      "Sur les vergetures, appliquer {ce} en cercles serrés jusqu'à absorption complète.",
      "Utiliser matin et soir pendant la durée indiquée par la marque, la régularité étant déterminante.",
    ],
    moment: [
      "{Ce} s'utilise deux fois par jour, matin et soir, sur une durée de quatre à huit semaines.",
      "Pendant la grossesse, l'application sur le ventre et les hanches se fait en couche fine, après avis médical.",
    ],
    precaution: [
      "Aucun soin cosmétique ne fait perdre de poids : son action se limite à l'aspect et au confort de la peau.",
    ],
    faq: [
      {
        q: "Un soin minceur fait-il maigrir ?",
        r: "Non. Un cosmétique agit sur les couches superficielles de la peau : il peut en améliorer la fermeté apparente et le grain, mais il ne modifie pas la masse grasse. La perte de poids relève de l'alimentation et de l'activité physique.",
      },
      {
        q: "Les vergetures peuvent-elles disparaître ?",
        r: "Une vergeture installée, blanche et nacrée, ne disparaît pas avec un cosmétique. Appliqué tôt, sur une vergeture encore rouge, un soin hydratant peut en atténuer l'aspect et améliorer la souplesse de la zone.",
      },
      {
        q: "Combien de temps avant de voir un effet ?",
        r: "Les protocoles annoncés par les marques vont de quatre à huit semaines, à raison de deux applications par jour. En dessous de quatre semaines d'usage régulier, aucun effet mesurable n'est attendu.",
      },
    ],
  },
};
