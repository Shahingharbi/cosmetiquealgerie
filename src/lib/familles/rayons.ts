import type { Famille } from "@/lib/familles-produits";

/**
 * Contenu de repli pour les produits rangés au niveau du rayon, sans
 * catégorie plus fine (la donnée du marchand ne permettait pas de les
 * classer davantage). Un texte forcément plus général que celui d'une
 * famille précise, mais qui doit rester vrai pour tout le rayon : aucune
 * phrase qui ne tiendrait pas à l'échelle d'un gel nettoyant comme d'une
 * crème solaire.
 *
 * Jetons disponibles : {nom} {nature} {zone} {ce} {Ce} {le} {Le}
 */
export const FAMILLES_RAYONS: Record<string, Famille> = {
  /* ---------------------------------------------------------------- */
  /* Soin du visage                                                    */
  /* ---------------------------------------------------------------- */

  "rayon-soin-visage": {
    nature: ["soin du visage", "produit de soin pour le visage"],
    genre: "m",
    zone: "le visage",
    role: [
      "Un {nature} agit sur {zone} pour nettoyer, hydrater ou protéger la peau selon sa texture et les ingrédients qui le composent.",
      "Dans une routine, {nom} occupe une place précise, entre nettoyage, hydratation et protection, selon l'étape à laquelle il s'applique.",
      "En Algérie, l'air sec et l'eau calcaire sollicitent la barrière cutanée, d'où l'intérêt de choisir {ce} selon le besoin réel de la peau.",
    ],
    geste: [
      "La quantité appliquée reste modérée : une noisette suffit pour la plupart des textures, qu'il s'agisse d'un gel, d'un sérum ou d'une crème.",
      "Dans une routine à plusieurs étapes, les textures fluides comme l'eau ou le sérum précèdent toujours les textures plus riches comme la crème.",
      "Avant tout usage étendu de {nom}, un test sur une petite zone, comme l'intérieur du poignet, permet de vérifier l'absence de réaction.",
    ],
    moment: [
      "{Ce} trouve sa place dans la routine du matin, du soir, ou des deux, selon sa fonction précise dans le soin visage.",
      "L'ordre d'application suit généralement le nettoyage, puis les soins ciblés, puis l'hydratation, et enfin la protection solaire en journée.",
    ],
    precaution: [
      "La notice du fabricant indique le mode d'emploi exact et les précautions propres à {nom}, à lire avant la première utilisation.",
      "Certains actifs comme le rétinol ou les exfoliants augmentent la sensibilité de la peau au soleil, une protection solaire quotidienne devient alors utile.",
    ],
    faq: [
      {
        q: "Dans quel ordre appliquer ses soins visage ?",
        r: "L'ordre suit la texture, du plus fluide au plus riche : nettoyant, tonique, sérum, crème, puis protection solaire le matin. Cette règle évite qu'une texture riche bloque la pénétration d'un soin plus léger appliqué après elle. Le soir, l'étape de protection solaire disparaît simplement de l'enchaînement.",
      },
      {
        q: "Comment savoir si un produit convient à ma peau ?",
        r: "Un test sur une petite zone, comme le pli du coude, avant l'application sur {zone}, permet de repérer une réaction avant qu'elle ne s'étende. L'absence de rougeur, de picotement ou de démangeaison après 24 à 48 heures est un signal favorable. Le type de peau indiqué sur l'emballage reste aussi un repère utile au moment du choix.",
      },
      {
        q: "Combien de temps avant de voir un effet ?",
        r: "Le délai dépend du type de soin : un nettoyant agit immédiatement, un soin hydratant en quelques jours, un soin ciblé sur plusieurs semaines d'usage régulier. La régularité compte davantage que la quantité appliquée à chaque fois. Sans changement perceptible après plusieurs semaines, mieux vaut revoir le choix du produit avec un professionnel de santé.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin du corps                                                     */
  /* ---------------------------------------------------------------- */

  "rayon-soin-corps": {
    nature: ["soin du corps", "produit de soin pour le corps"],
    genre: "m",
    zone: "le corps",
    role: [
      "Un {nature} entretient l'hydratation et la souplesse de {zone}, une zone à la peau plus épaisse et moins réactive que le visage.",
      "{Nom} intervient après la douche ou le bain, moment où la peau, encore légèrement humide, absorbe mieux les actifs.",
      "Le choix entre un lait léger et un baume plus riche dépend de la saison et des zones plus sèches comme les coudes, les genoux ou les talons.",
    ],
    geste: [
      "La quantité dépend de la surface à couvrir : une noix de produit par membre suffit généralement pour {zone} entier.",
      "Les textures fluides comme le lait s'appliquent en premier sur les grandes surfaces, les baumes plus riches se réservent aux zones les plus sèches.",
      "Avant un usage étendu de {nom}, un test sur une petite zone comme l'avant-bras permet de vérifier l'absence de réaction cutanée.",
    ],
    moment: [
      "{Ce} s'applique idéalement juste après la douche, sur une peau propre et encore légèrement humide.",
      "En climat chaud et sec, un geste quotidien limite les tiraillements liés à l'évaporation rapide de l'eau contenue dans la peau.",
    ],
    precaution: [
      "La notice du fabricant précise le mode d'emploi et les précautions propres à {nom}, à consulter avant la première application.",
      "Sur une peau présentant des irritations ou des plaies, l'avis d'un pharmacien reste utile avant d'utiliser {ce}.",
    ],
    faq: [
      {
        q: "Faut-il appliquer le soin corps avant ou après la douche ?",
        r: "Après, de préférence sur une peau encore légèrement humide : l'eau résiduelle aide le produit à mieux se répartir et limite la sensation collante. Attendre que la peau soit complètement sèche rend l'application plus difficile et moins agréable. Un séchage en tamponnant, sans frotter, prépare mieux la peau que l'essuyage énergique.",
      },
      {
        q: "Comment adapter son soin corps au climat algérien ?",
        r: "L'air sec accélère la perte d'eau de la peau, surtout en été et dans les régions à faible humidité. Une texture plus riche ou une application plus fréquente compense cette évaporation, en particulier sur les zones exposées. Boire suffisamment d'eau complète, sans remplacer, le rôle d'un soin appliqué directement sur la peau.",
      },
      {
        q: "Pourquoi certaines zones du corps restent-elles sèches malgré un soin régulier ?",
        r: "Les coudes, les genoux et les talons ont une peau plus épaisse et moins de glandes sébacées que le reste du corps. Ils demandent souvent une texture plus riche ou une application plus fréquente que le reste de {zone}. Un gommage occasionnel avant le soin favorise aussi une meilleure pénétration du produit.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin cheveux                                                      */
  /* ---------------------------------------------------------------- */

  "rayon-soin-cheveux": {
    nature: ["soin capillaire", "produit de soin pour les cheveux"],
    genre: "m",
    zone: "les cheveux",
    role: [
      "Un {nature} nettoie, répare ou protège la fibre capillaire et le cuir chevelu, selon sa formule et son usage.",
      "{Nom} occupe une étape précise de la routine capillaire, entre le nettoyage, le soin des longueurs et la protection avant coiffage.",
      "En Algérie, l'eau du robinet souvent calcaire dépose du tartre sur la fibre, ce qui rend {ce} utile pour restaurer la douceur du cheveu.",
    ],
    geste: [
      "La quantité dépend de la longueur des cheveux : une noisette suffit pour un carré, deux à trois pour des cheveux longs.",
      "Les produits nettoyants s'appliquent sur cuir chevelu et racines, les soins nourrissants se concentrent sur les longueurs et les pointes, plus sèches.",
      "Avant un usage étendu de {nom}, un test sur une petite mèche permet de vérifier l'absence de réaction ou d'alourdissement du cheveu.",
    ],
    moment: [
      "{Ce} s'utilise généralement au lavage, sur cheveux mouillés ou essorés selon le type de produit.",
      "Un rinçage à l'eau tiède plutôt que chaude referme mieux les écailles du cheveu et limite l'effet terne laissé par l'eau calcaire.",
    ],
    precaution: [
      "La notice du fabricant précise le temps de pose et le mode de rinçage propres à {nom}.",
      "Sur cuir chevelu irrité ou après une coloration récente, un avis en pharmacie ou en salon évite les mauvaises surprises.",
    ],
    faq: [
      {
        q: "Dans quel ordre appliquer un shampoing, un après-shampoing et un masque ?",
        r: "Le shampoing nettoie en premier, sur cuir chevelu et racines, avant un rinçage complet. L'après-shampoing ou le masque se concentre ensuite sur les longueurs et les pointes, là où la fibre est la plus sèche. Le masque remplace l'après-shampoing lors des séances plus intensives, il ne s'utilise pas en plus à chaque lavage.",
      },
      {
        q: "Comment savoir si un soin capillaire convient à mon type de cheveux ?",
        r: "L'indication sur l'emballage (cheveux secs, gras, colorés, bouclés) donne un premier repère à croiser avec l'état réel du cheveu. Un cheveu qui regraisse vite tolère mal une formule trop riche, un cheveu sec réagit mieux à des textures nourrissantes. Observer les racines et les pointes séparément aide à choisir plus précisément.",
      },
      {
        q: "L'eau calcaire abîme-t-elle vraiment les cheveux ?",
        r: "L'eau calcaire dépose des minéraux sur la fibre capillaire, ce qui peut ternir la couleur et rendre le cheveu plus rêche au toucher. Ce dépôt s'accumule avec le temps et concerne surtout les cheveux longs ou poreux. Un soin adapté et un rinçage soigné limitent cet effet sans l'éliminer complètement.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Maquillage                                                        */
  /* ---------------------------------------------------------------- */

  "rayon-maquillage": {
    nature: ["produit de maquillage", "cosmétique de maquillage"],
    genre: "m",
    zone: "le visage",
    role: [
      "Un {nature} sert à unifier le teint, souligner un trait ou apporter de la couleur, selon sa fonction précise dans la routine.",
      "{Nom} s'intègre dans un enchaînement précis : base, teint, yeux, puis lèvres, un ordre qui conditionne le rendu final.",
      "Le choix dépend du type de peau et de la tenue recherchée, la chaleur pouvant accélérer le transfert ou la fonte du produit.",
    ],
    geste: [
      "La quantité reste réduite au départ : il est plus simple d'ajouter que de retirer un excès de {nom} déjà appliqué.",
      "Les textures fluides comme les fonds de teint liquides se posent avant les poudres, qui fixent et prolongent la tenue.",
      "Avant un usage étendu de {nom}, un test sur l'intérieur du poignet ou derrière l'oreille permet de vérifier l'absence de réaction.",
    ],
    moment: [
      "{Ce} s'applique en journée, sur une peau nettoyée et éventuellement protégée par un soin hydratant ou solaire au préalable.",
      "En fin de journée, un démaquillage complet retire {ce} avant le coucher, quelle que soit la légèreté du maquillage porté.",
    ],
    precaution: [
      "Les produits destinés aux yeux ou aux lèvres, zones proches des muqueuses, demandent une attention particulière à la date d'ouverture indiquée sur l'emballage.",
      "En cas de picotement, de rougeur ou de gonflement, le produit se retire immédiatement à l'eau claire.",
    ],
    faq: [
      {
        q: "Dans quel ordre appliquer son maquillage ?",
        r: "L'ordre habituel commence par une base ou un soin hydratant, puis le teint (fond de teint, correcteur, poudre), suivi du maquillage des yeux, et enfin des lèvres. Ce sens évite qu'une étape n'efface la précédente, notamment autour des yeux. Le résultat final gagne en tenue lorsque chaque couche est laissée à sécher avant la suivante.",
      },
      {
        q: "Comment savoir si un produit de maquillage convient à ma peau ?",
        r: "Un test sur une petite zone, avant application sur {zone} entier, permet de repérer une réaction avant qu'elle ne s'étende. La texture doit aussi correspondre au type de peau : les formules mates conviennent mieux aux peaux grasses, les formules hydratantes aux peaux sèches. La date d'ouverture indiquée sur l'emballage limite les risques liés à un produit trop ancien.",
      },
      {
        q: "Pourquoi le maquillage tient-il moins bien par forte chaleur ?",
        r: "La chaleur augmente la production de sébum et la transpiration, deux facteurs qui favorisent le transfert et la fonte du maquillage. Une base matifiante et une fixation par poudre légère prolongent la tenue dans ces conditions. Éviter les couches trop épaisses aide aussi : un maquillage fin résiste souvent mieux qu'une application chargée.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Hygiène et bain                                                   */
  /* ---------------------------------------------------------------- */

  "rayon-hygiene-bain": {
    nature: ["produit d'hygiène corporelle", "soin pour le bain ou la douche"],
    genre: "m",
    zone: "le corps",
    role: [
      "Un {nature} sert au nettoyage quotidien du corps, à l'eau, dans le cadre de la toilette du matin ou du soir.",
      "{Nom} retire la transpiration, les impuretés et les résidus de la journée, une étape renouvelée au moins une fois par jour.",
      "Le choix entre une formule douce et une formule plus nettoyante dépend du type de peau et de la fréquence d'utilisation souhaitée.",
    ],
    geste: [
      "Une noix de produit suffit généralement pour {zone} entier, à faire mousser à l'eau tiède plutôt qu'à l'eau chaude.",
      "Le rinçage doit être complet : un résidu de produit laissé sur la peau peut irriter ou assécher au fil des lavages répétés.",
      "Avant un usage étendu de {nom}, un test sur une petite zone du bras permet de vérifier l'absence de réaction cutanée.",
    ],
    moment: [
      "{Ce} s'utilise lors de la toilette quotidienne, le matin, le soir, ou aux deux moments selon les habitudes.",
      "Après un effort physique ou une forte chaleur, un lavage supplémentaire reste possible sans excès si la formule reste douce.",
    ],
    precaution: [
      "La notice du fabricant précise la fréquence d'usage recommandée et les précautions propres à {nom}.",
      "Sur une peau sèche ou sensible, un lavage trop fréquent ou une eau trop chaude accentuent les tiraillements.",
    ],
    faq: [
      {
        q: "Faut-il utiliser de l'eau chaude ou tiède avec un produit d'hygiène ?",
        r: "L'eau tiède est préférable : l'eau chaude dissout davantage les lipides naturels de la peau et accentue la sensation de tiraillement après la toilette. Cet effet se remarque surtout en climat sec, où la peau perd déjà de l'eau plus vite. Réduire légèrement la température de l'eau suffit souvent à limiter l'inconfort ressenti après le lavage.",
      },
      {
        q: "Combien de fois par jour peut-on utiliser un savon ou un gel douche ?",
        r: "Une à deux fois par jour convient à la majorité des peaux, sans dépasser ce rythme sauf besoin particulier lié à l'activité physique. Un usage plus fréquent, avec une formule mal adaptée, peut fragiliser la barrière cutanée et provoquer des tiraillements. Le choix d'une formule douce permet un usage plus régulier sans ce désagrément.",
      },
      {
        q: "Comment choisir entre une formule douce et une formule plus nettoyante ?",
        r: "Une peau sèche ou sensible tolère mieux une formule douce, souvent surgraissée, qui préserve le film protecteur naturel. Une peau grasse ou exposée à une forte transpiration supporte mieux une formule plus nettoyante. En cas de doute, une formule neutre et douce reste le choix le plus sûr pour un usage quotidien.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Parfum                                                            */
  /* ---------------------------------------------------------------- */

  "rayon-parfum": {
    nature: ["parfum", "produit parfumant"],
    genre: "m",
    zone: "la peau",
    role: [
      "Un {nature} diffuse une fragrance composée de notes qui évoluent dans le temps, de l'application aux heures qui suivent.",
      "{Nom} se juge aussi sur peau, pas seulement sur papier : la chaleur corporelle modifie la façon dont les notes se révèlent.",
      "La concentration en huiles parfumées (eau de toilette, eau de parfum) détermine surtout la tenue et l'intensité perçue, plus que la fragrance elle-même.",
    ],
    geste: [
      "Deux à trois pulvérisations suffisent généralement, appliquées sur les points de pulsation comme les poignets, le cou ou l'intérieur des coudes.",
      "Ne pas frotter les poignets l'un contre l'autre après application : ce geste use les notes de tête et altère la fragrance.",
      "Avant un usage étendu de {nom}, une application sur une petite zone de peau permet de vérifier l'absence de réaction cutanée.",
    ],
    moment: [
      "{Ce} s'applique en dernier, après les soins de la peau, sur une peau propre et sans résidu de crème parfumée qui pourrait interférer.",
      "Une réapplication en cours de journée reste possible si la tenue diminue, en particulier par forte chaleur.",
    ],
    precaution: [
      "{Ce} se conserve à l'abri de la lumière directe et de la chaleur, deux facteurs qui altèrent la fragrance avec le temps.",
      "La notice du fabricant précise les précautions d'usage propres à {nom}, notamment en cas d'exposition au soleil juste après application.",
    ],
    faq: [
      {
        q: "Où appliquer son parfum pour une meilleure tenue ?",
        r: "Les points de pulsation (poignets, cou, intérieur des coudes) diffusent mieux la fragrance grâce à la chaleur naturelle qu'ils dégagent. Une application sur les vêtements prolonge parfois la tenue, mais peut aussi laisser une trace sur certains tissus clairs ou délicats. Éviter de frotter les poignets après application préserve les premières notes de la fragrance.",
      },
      {
        q: "Pourquoi un parfum ne sent-il pas pareil sur deux personnes différentes ?",
        r: "La peau, son pH et sa chaleur naturelle modifient légèrement la façon dont les notes d'une fragrance se révèlent au contact. C'est pourquoi tester {nom} sur sa propre peau, et pas seulement sur une bande de papier, donne une idée plus fiable du résultat. Porter la fragrance quelques heures avant de juger reste le test le plus fiable.",
      },
      {
        q: "Comment conserver un parfum plus longtemps sans qu'il s'altère ?",
        r: "La lumière directe et la chaleur accélèrent la dégradation des composés parfumés, un flacon exposé en été perd donc plus vite en qualité. Un rangement à l'abri, dans son emballage d'origine si possible, préserve mieux la fragrance dans la durée. La salle de bain, souvent humide et chaude, n'est pas l'endroit le plus adapté pour le stockage.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Crème solaire                                                     */
  /* ---------------------------------------------------------------- */

  "rayon-creme-solaire": {
    nature: ["protection solaire", "crème solaire"],
    genre: "f",
    zone: "la peau",
    role: [
      "Une {nature} filtre une partie du rayonnement ultraviolet avant qu'il n'atteigne les couches profondes de la peau.",
      "{Nom} se choisit selon l'indice de protection (SPF) affiché, un chiffre plus élevé filtrant une plus grande part du rayonnement.",
      "En Algérie, l'ensoleillement reste fort une grande partie de l'année, y compris par temps voilé, ce qui rend {ce} pertinente au-delà du seul été.",
    ],
    geste: [
      "La quantité compte autant que le produit choisi : une dose insuffisante réduit fortement le niveau de protection réellement obtenu.",
      "{Nom} s'applique quinze à vingt minutes avant l'exposition, en couche uniforme, sans oublier les oreilles, la nuque et le dessus des pieds.",
      "Une réapplication toutes les deux heures, et après une baignade ou une transpiration importante, maintient le niveau de protection dans le temps.",
    ],
    moment: [
      "{Ce} s'applique en dernière étape de la routine du matin, après les soins hydratants et avant toute exposition au soleil.",
      "L'usage reste pertinent même en dehors des jours de plage, dès qu'une exposition prolongée au soleil est prévue.",
    ],
    precaution: [
      "Une protection solaire même élevée ne permet pas de prolonger l'exposition sans limite : elle réduit le rayonnement reçu sans l'annuler.",
      "La notice du fabricant précise l'indice, la résistance à l'eau et la fréquence de réapplication propres à {nom}.",
    ],
    faq: [
      {
        q: "Quelle quantité de crème solaire faut-il réellement appliquer ?",
        r: "La quantité recommandée pour le visage correspond environ à une cuillère à café, et à un verre à liqueur pour l'ensemble du corps. La plupart des utilisateurs appliquent moins que cette quantité, ce qui réduit sensiblement le niveau de protection obtenu par rapport à celui indiqué sur l'emballage. Une couche visible et uniforme reste le meilleur repère au moment de l'application.",
      },
      {
        q: "Faut-il utiliser une protection solaire même par temps nuageux ?",
        r: "Oui, une partie du rayonnement ultraviolet traverse les nuages et continue d'atteindre la peau même par ciel voilé. L'intensité de l'exposition dépend surtout de la position du soleil et de la saison, plus que de la présence visible de nuages. En Algérie, l'ensoleillement reste soutenu une grande partie de l'année, ce qui justifie un usage régulier.",
      },
      {
        q: "À quelle fréquence faut-il réappliquer sa crème solaire ?",
        r: "Toutes les deux heures environ, et plus souvent après une baignade, une transpiration importante ou un contact avec une serviette. La protection s'estompe avec le temps et les frottements, même si l'indice affiché reste le même sur l'emballage. Une première application le matin ne suffit donc pas pour couvrir une journée entière d'exposition.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Soin homme                                                        */
  /* ---------------------------------------------------------------- */

  "rayon-soin-homme": {
    nature: ["soin pour homme", "produit de soin masculin"],
    genre: "m",
    zone: "le visage",
    role: [
      "Un {nature} répond aux besoins d'une peau souvent plus épaisse et plus grasse, avec des formules généralement plus légères.",
      "{Nom} s'intègre dans une routine simplifiée, autour de trois étapes courantes : nettoyage, hydratation et, selon les jours, rasage.",
      "Le choix dépend surtout de la fréquence de rasage et du type de peau, plus que d'un besoin spécifique lié au genre.",
    ],
    geste: [
      "La quantité reste proche de celle d'un soin visage classique : une noisette suffit pour {zone} entier dans la plupart des cas.",
      "Autour du rasage, les textures fluides comme un baume après-rasage s'appliquent sur peau propre, avant une crème hydratante si la routine en comporte une.",
      "Avant un usage étendu de {nom}, un test sur une petite zone du visage permet de vérifier l'absence de réaction, en particulier après le rasage.",
    ],
    moment: [
      "{Ce} s'utilise matin ou soir selon sa fonction, et immédiatement après le rasage pour les produits apaisants dédiés à cette étape.",
      "Un nettoyage suivi d'une hydratation reste la base, avec une protection solaire ajoutée en journée si {zone} reste exposé.",
    ],
    precaution: [
      "Juste après un rasage, la peau est plus perméable et plus sensible : un produit non parfumé limite le risque d'irritation.",
      "La notice du fabricant précise le mode d'emploi et les précautions propres à {nom}.",
    ],
    faq: [
      {
        q: "Faut-il des soins spécifiques pour la peau masculine ?",
        r: "La peau masculine est en moyenne plus épaisse et plus grasse, avec des pores plus visibles, ce qui oriente vers des textures plus légères. Le rasage régulier sollicite aussi la peau différemment et justifie des produits apaisants dédiés à cette étape. En dehors de ces différences, les principes de nettoyage et d'hydratation restent les mêmes que pour toute autre peau.",
      },
      {
        q: "Dans quel ordre appliquer ses soins autour du rasage ?",
        r: "Un nettoyage avant le rasage assouplit le poil et limite les irritations liées à la lame. Après le rasage, un baume apaisant, non parfumé de préférence, calme la peau avant l'application d'une crème hydratante classique. La protection solaire vient en dernier si une exposition est prévue dans la journée.",
      },
      {
        q: "Comment limiter les irritations après le rasage ?",
        r: "Un rasage sur peau propre et humide, avec une lame propre, réduit déjà une grande partie des irritations courantes. Un produit apaisant sans alcool ni parfum, appliqué juste après, calme la peau échauffée par le passage de la lame. Éviter tout soin exfoliant le jour même du rasage limite aussi les rougeurs sur une peau déjà sollicitée.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Bébé et maman                                                     */
  /* ---------------------------------------------------------------- */

  "rayon-bebe-maman": {
    nature: [
      "produit de soin pour bébé ou jeune maman",
      "cosmétique dédié à la petite enfance et à la maternité",
    ],
    genre: "m",
    zone: "la peau",
    role: [
      "Un {nature} répond aux besoins d'une peau de bébé plus fine et plus perméable, ou accompagne les changements de peau liés à la grossesse.",
      "{Nom} se choisit selon l'âge de l'enfant ou l'étape de la grossesse, deux situations qui demandent des formules différentes.",
      "Les mentions présentes sur l'emballage (âge minimum, sans parfum, testé sous contrôle pédiatrique) orientent {ce} vers le bon usage.",
    ],
    geste: [
      "Chez le bébé, une petite quantité suffit : la peau, plus fine, absorbe plus vite qu'une peau adulte.",
      "Chez la future ou jeune maman, {nom} s'applique généralement en mouvements circulaires, sans frotter les zones sensibles ou récemment sollicitées.",
      "Avant un usage étendu de {nom}, un test sur une petite zone de peau permet de vérifier l'absence de réaction, en particulier chez un nourrisson.",
    ],
    moment: [
      "Chez le bébé, {ce} s'utilise souvent après le bain, sur une peau propre et sèche, dans le cadre du change ou de la toilette.",
      "Chez la maman, le moment dépend du produit : les soins liés à la grossesse s'appliquent en général quotidiennement, sur le ventre, les hanches ou la poitrine.",
    ],
    precaution: [
      "Chez le nourrisson, un avis du pédiatre reste utile avant d'introduire un nouveau produit, en particulier durant les premiers mois.",
      "La notice du fabricant précise l'âge minimum d'usage et les précautions propres à {nom}.",
    ],
    faq: [
      {
        q: "À partir de quel âge peut-on utiliser un soin sur un bébé ?",
        r: "L'âge minimum recommandé figure sur l'emballage et varie selon la formule, certains produits étant réservés aux enfants de plus de trois ans. Pour un nouveau-né, les formules les plus simples et les moins parfumées restent les plus prudentes. En cas de doute, l'avis du pédiatre ou du médecin traitant reste la référence la plus fiable.",
      },
      {
        q: "Comment savoir si un soin convient à la peau sensible d'un bébé ?",
        r: "Un test sur une petite zone, comme l'intérieur du poignet ou du mollet, permet de vérifier l'absence de rougeur avant une application plus large. L'absence de réaction après 24 à 48 heures est un signal favorable. Les mentions sans parfum et testé sous contrôle pédiatrique réduisent, sans l'annuler complètement, le risque d'irritation chez les peaux les plus réactives.",
      },
      {
        q: "Les soins pour la grossesse préviennent-ils vraiment les vergetures ?",
        r: "Leur rôle principal est de maintenir la souplesse de la peau pendant qu'elle s'étire, ce qui peut limiter l'inconfort ressenti au quotidien. L'apparition de vergetures dépend aussi de facteurs génétiques et hormonaux sur lesquels un soin appliqué en surface n'agit pas directement. Une application régulière, dès le début de la grossesse, reste la façon la plus courante de les utiliser.",
      },
    ],
  },
};
