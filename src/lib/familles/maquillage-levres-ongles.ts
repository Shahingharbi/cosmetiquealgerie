import type { Famille } from "@/lib/familles-produits";

/** Familles de maquillage centrées sur les sourcils, les lèvres, les ongles et leurs accessoires d'application. */
export const FAMILLES_MAQUILLAGE_LEVRES_ONGLES: Record<string, Famille> = {
  sourcils: {
    nature: ["produit à sourcils", "maquillage des sourcils"],
    genre: "m",
    zone: "les sourcils",
    role: [
      "{nom} redessine la ligne naturelle des sourcils et comble les zones plus clairsemées, poil par poil ou par estompe selon la texture.",
      "Un {nature} structure {zone} et équilibre visuellement le regard, sans modifier la pousse ni la densité réelle des poils.",
      "{nom} s'intègre au maquillage du teint et des yeux, dans la même logique de mise en valeur du visage.",
    ],
    geste: [
      "Tracer {ce} par petits traits fins dans le sens de la pousse du poil, du départ du sourcil vers la queue.",
      "Estomper aussitôt avec une brosse à sourcils ou le bout du doigt pour éviter un tracé trop marqué ou figé.",
      "Construire l'intensité par couches légères plutôt qu'en une seule application dense, plus facile à corriger si besoin.",
    ],
    moment: [
      "{Ce} s'applique après le teint et avant le maquillage des yeux, pour ajuster l'intensité du regard en connaissance de cause.",
      "Un raccord en cours de journée reste possible sur un sourcil estompé, sans reprendre l'ensemble du maquillage.",
    ],
    precaution: [
      "Le tracé reste au-dessus de l'arcade osseuse, à distance de la paupière mobile, pour éviter tout contact avec la zone sensible de l'œil.",
    ],
    faq: [
      {
        q: "Comment choisir la teinte d'un produit à sourcils ?",
        r: "La teinte se choisit un ton plus clair que la couleur naturelle des cheveux pour un rendu qui reste crédible. Un sourcil trop foncé par rapport à la chevelure attire l'œil et durcit l'expression du visage, surtout sur cheveux clairs ou roux.",
      },
      {
        q: "Faut-il se maquiller les sourcils tous les jours ?",
        r: "Non, ce n'est pas obligatoire. Certaines personnes l'utilisent chaque jour pour compenser des zones clairsemées, d'autres seulement pour une occasion précise ou une photo. La fréquence dépend surtout de la densité naturelle des sourcils et de l'effet recherché, sans règle universelle.",
      },
      {
        q: "Comment éviter un résultat trop dessiné ?",
        r: "En construisant l'intensité par petites touches plutôt qu'en une seule application, et en estompant systématiquement avec une brosse ou le doigt. Suivre le sens naturel de la pousse du poil, plutôt que de tracer une ligne continue, donne un rendu plus proche du sourcil naturel.",
      },
    ],
  },

  "rouge-a-levres": {
    nature: ["rouge à lèvres", "soin coloré pour les lèvres"],
    genre: "m",
    zone: "les lèvres",
    role: [
      "{nom} dépose un pigment coloré sur {zone} et en redessine le contour, dans une intensité qui va du voile léger au mat couvrant.",
      "Un {nature} associe des pigments à une base cireuse ou huileuse, dont la proportion détermine la tenue et le confort en bouche.",
      "{nom} complète le maquillage du visage en dernière touche, en cohérence avec le teint et les yeux déjà maquillés.",
    ],
    geste: [
      "Appliquer {nom} du centre de {zone} vers les commissures, en suivant le contour naturel plutôt qu'en l'élargissant.",
      "Une première couche appliquée directement du bâton, puis une seconde après avoir tamponné l'excédent, prolonge la tenue de la couleur.",
      "Essuyer légèrement les bords avec un coton-tige corrige les débordements sans reprendre l'ensemble de l'application.",
    ],
    moment: [
      "{Ce} ferme le maquillage du visage, appliqué en dernier après le teint, les yeux et la poudre de finition.",
      "Une retouche en cours de journée, après un repas ou une boisson, redonne à {zone} leur couleur d'origine.",
    ],
    precaution: [
      "Le climat chaud et sec accentue la déshydratation de {zone} : une base hydratante appliquée avant {nom} limite l'effet asséchant des formules mates.",
      "Un {nature} ne se partage pas : le contact direct avec les lèvres expose à la transmission de bactéries ou du virus de l'herpès labial.",
    ],
    faq: [
      {
        q: "Un rouge à lèvres mat tient-il mieux avec la chaleur en Algérie ?",
        r: "Une formule mate résiste généralement mieux à la chaleur et aux frottements qu'une formule brillante, car elle contient moins de corps gras qui fondent. Elle assèche en revanche davantage les lèvres, d'où l'intérêt d'appliquer un baume hydratant avant, surtout en climat chaud et sec.",
      },
      {
        q: "Comment faire tenir {nom} plus longtemps ?",
        r: "Appliquer une première couche, tamponner avec un mouchoir, puis superposer une seconde couche : cette technique fixe davantage de pigment que l'application unique. Une poudre translucide passée légèrement sur {zone} avant l'application prolonge aussi la tenue de la couleur au fil de la journée.",
      },
      {
        q: "Une texture mate assèche-t-elle vraiment les lèvres ?",
        r: "Oui, davantage qu'une texture satinée ou brillante, car elle contient moins d'agents gras et davantage de pigments en poudre. Un baume hydratant appliqué quelques minutes avant l'application compense cet effet sans nuire à la tenue de la couleur au cours de la journée.",
      },
    ],
  },

  gloss: {
    nature: ["gloss", "brillant à lèvres"],
    genre: "m",
    zone: "les lèvres",
    role: [
      "{nom} dépose un film brillant sur {zone}, qui reflète la lumière et donne une impression de volume sans effet mat.",
      "Un {nature} contient généralement moins de pigments qu'un rouge à lèvres, pour un résultat plus proche de la couleur naturelle des lèvres.",
      "{nom} s'utilise seul pour un effet naturel, ou en dernière couche sur un rouge à lèvres pour en adoucir le fini.",
    ],
    geste: [
      "Appliquer {nom} à l'aide de l'applicateur, du centre de {zone} vers les commissures, en une couche fine et régulière.",
      "Une couche épaisse accentue la brillance mais accroît aussi la sensation collante ; une couche fine reste plus confortable au porter.",
      "Presser légèrement les lèvres l'une contre l'autre répartit {ce} de façon uniforme, sans repasser plusieurs fois au même endroit.",
    ],
    moment: [
      "{Ce} s'applique en dernière étape du maquillage, seul ou par-dessus un rouge à lèvres déjà posé.",
      "Sa tenue étant plus courte que celle d'un rouge à lèvres, une réapplication en cours de journée fait partie de l'usage courant.",
    ],
    precaution: [
      "Conservé loin d'une source de chaleur directe, {nom} garde une texture stable ; exposé au soleil ou dans une voiture chauffée, il peut se liquéfier et devenir difficile à appliquer.",
    ],
    faq: [
      {
        q: "Le gloss tient-il aussi longtemps qu'un rouge à lèvres ?",
        r: "Non, en général un gloss tient moins longtemps : sa texture plus fluide et moins pigmentée s'estompe avec les repas et les boissons. Une réapplication en cours de journée est courante et fait partie de l'usage normal de ce type de produit.",
      },
      {
        q: "Peut-on appliquer un gloss sur un rouge à lèvres ?",
        r: "Oui, cette association est courante : le rouge à lèvres apporte la couleur et la tenue, le gloss ajoute la brillance en surface. Il s'applique alors surtout au centre des lèvres, pour un effet de volume, sans repasser sur tout le contour.",
      },
      {
        q: "Pourquoi le gloss colle-t-il parfois aux cheveux par grand vent ?",
        r: "La texture collante vient des résines et des huiles qui donnent la brillance : elles retiennent naturellement les mèches de cheveux au contact. Une couche plus fine limite cet effet, tout comme éviter d'en appliquer juste avant une sortie par vent fort et sec.",
      },
    ],
  },

  "vernis-ongles": {
    nature: ["vernis à ongles", "laque pour ongles"],
    genre: "m",
    zone: "les ongles",
    role: [
      "{nom} dépose un film coloré et brillant sur {zone}, qui sèche à l'air libre pour former une couche rigide et lisse.",
      "Un {nature} protège temporairement la surface de l'ongle des petits chocs et du contact direct avec l'eau et les produits ménagers.",
      "{nom} se décline en finitions mates, brillantes ou pailletées, sans que la formule ne nourrisse ni ne fortifie l'ongle en profondeur.",
    ],
    geste: [
      "Appliquer {nom} en couche fine, une bande centrale puis deux bandes latérales, de la base vers le bout de l'ongle.",
      "Capuchonner le bord libre de l'ongle en faisant glisser le pinceau sur son extrémité prolonge la tenue du vernis.",
      "Laisser sécher chaque couche avant d'appliquer la suivante : une couche encore humide se marque au moindre contact.",
    ],
    moment: [
      "{Ce} intervient en dernière étape de la manucure, après la préparation de l'ongle et, le cas échéant, une base protectrice.",
      "Une couche de finition transparente appliquée par-dessus prolonge la brillance et retarde l'apparition des premiers éclats.",
    ],
    precaution: [
      "Le dissolvant utilisé pour retirer {nom} assèche l'ongle et la cuticule ; hydrater les mains après chaque retrait limite cet effet.",
      "Bien ventiler la pièce pendant l'application, les solvants contenus dans {nature} étant volatils.",
    ],
    faq: [
      {
        q: "Combien de temps tient un vernis à ongles classique ?",
        r: "En moyenne trois à cinq jours sans éclat visible, selon l'activité des mains, le contact avec l'eau et les produits ménagers. Une base protectrice et une couche de finition transparente prolongent généralement la tenue de plusieurs jours supplémentaires, sans changer la couleur appliquée.",
      },
      {
        q: "Faut-il une base avant d'appliquer le vernis ?",
        r: "Ce n'est pas obligatoire mais c'est conseillé : une base protège l'ongle d'une éventuelle coloration par les pigments foncés et améliore l'accroche du vernis. Cela retarde l'apparition des éclats sur les bords et facilite un retrait propre en fin d'usage.",
      },
      {
        q: "Comment retirer le vernis sans abîmer les ongles ?",
        r: "Avec un dissolvant, de préférence non acétone, appliqué sur un coton posé quelques secondes avant de frotter sans forcer. Un ongle qui reste terne ou strié après plusieurs retraits profite d'une pause de quelques jours sans vernis, le temps qu'il retrouve son aspect habituel.",
      },
    ],
  },

  "palette-maquillage": {
    nature: ["palette de maquillage", "palette multi-teintes"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} regroupe plusieurs teintes complémentaires dans un même format, pensées pour se combiner sur {zone} sans multiplier les produits séparés.",
      "Une {nature} associe souvent plusieurs finitions, mates et satinées ou nacrées, pour construire une intensité progressive plutôt qu'un aplat unique.",
      "{nom} centralise en un seul objet ce que plusieurs produits isolés couvriraient séparément, du regard au teint selon sa composition.",
    ],
    geste: [
      "Prélever chaque teinte avec un pinceau adapté à sa taille, plus fin pour les zones précises, plus large pour les surfaces étendues.",
      "Commencer par la teinte la plus claire pour poser une base, puis superposer les teintes plus soutenues pour construire le relief.",
      "Estomper les limites entre deux teintes avec un pinceau propre évite les démarcations nettes d'une couleur à l'autre.",
    ],
    moment: [
      "{Ce} intervient pendant l'étape du maquillage qui lui correspond, yeux, teint ou les deux selon sa composition.",
      "Son format compact en fait un produit facile à emporter pour une retouche loin de la salle de bain.",
    ],
    precaution: [
      "Refermer le couvercle après chaque utilisation limite le dessèchement des textures crème et protège les fards poudre de la poussière et de l'humidité.",
    ],
    faq: [
      {
        q: "Dans quel ordre utiliser les teintes d'une palette ?",
        r: "En général du plus clair vers le plus foncé : la teinte claire sert de base, les teintes moyennes structurent, les plus soutenues interviennent en dernier sur de petites zones ciblées. Cet ordre donne un résultat modulable, plus facile à corriger qu'une application inversée.",
      },
      {
        q: "Comment faire tenir plus longtemps les teintes d'une palette ?",
        r: "Une base appliquée sur la zone concernée avant le maquillage améliore l'accroche des pigments et limite leur migration au cours de la journée. Prélever le produit en petite quantité et superposer les couches donne aussi un résultat plus stable qu'une application unique généreuse.",
      },
      {
        q: "Une palette de maquillage se conserve-t-elle longtemps ?",
        r: "Une palette bien refermée après chaque usage se conserve généralement plusieurs mois, voire plusieurs années pour les fards poudre. Les textures crème sont plus sensibles au dessèchement et à la contamination si les mains ou les pinceaux utilisés ne sont pas propres.",
      },
    ],
  },

  "pinceau-maquillage": {
    nature: ["pinceau de maquillage", "accessoire d'application"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} répartit le produit de façon plus régulière qu'une application aux doigts, avec une pression et une couverture modulables selon la zone traitée.",
      "Selon l'accessoire, la matière change la prise de produit : poils synthétiques ou naturels pour un pinceau, mousse pour une éponge.",
      "{nom} propre limite le dépôt de sébum et de bactéries sur {zone}, contrairement à un doigt qui n'est jamais totalement neutre.",
    ],
    geste: [
      "Travailler {ce} par petites touches successives, sans appuyer, pour un rendu progressif et modulable selon l'intensité recherchée.",
      "Tapoter plutôt qu'étaler sur les zones à estomper : ce geste disperse le produit plus uniformément qu'un mouvement appuyé et continu.",
      "Humidifier légèrement une éponge avant usage en réduit l'absorption de produit et donne un fini plus fin qu'à sec.",
    ],
    moment: [
      "{Ce} intervient dès l'application du teint, avant les gestes plus ciblés sur les yeux, les sourcils ou les lèvres.",
      "Un accessoire propre peut resservir pour une retouche en cours de journée, sans altérer le maquillage déjà posé.",
    ],
    precaution: [
      "Un accessoire non lavé accumule sébum, résidus de produit et bactéries, ce qui favorise les imperfections et fausse le rendu réel des teintes appliquées ensuite.",
      "Le sécher à plat plutôt que debout évite que l'eau ne s'infiltre dans la partie qui retient les poils et ne les décolle.",
    ],
    faq: [
      {
        q: "À quelle fréquence faut-il laver ses pinceaux et éponges de maquillage ?",
        r: "Une éponge se lave idéalement après chaque usage, car sa texture poreuse et humide retient rapidement bactéries et résidus de produit. Un pinceau utilisé avec des textures crème ou liquides se nettoie environ une fois par semaine, un peu moins souvent pour un usage limité aux poudres.",
      },
      {
        q: "Comment nettoyer un pinceau de maquillage ?",
        r: "Mouiller les poils à l'eau tiède en évitant la partie métallique qui les maintient, puis faire mousser un savon doux dans la paume de la main. Rincer jusqu'à ce que l'eau ressorte claire, essorer sans tordre, puis laisser sécher à plat, loin d'une source de chaleur.",
      },
      {
        q: "Au bout de combien de temps faut-il remplacer un pinceau ou une éponge ?",
        r: "Un pinceau bien entretenu se garde en général un à deux ans, jusqu'à ce que les poils perdent leur forme ou tombent en nombre. Une éponge se dégrade plus vite : sa texture poreuse s'use en quelques mois d'utilisation régulière et retient de plus en plus de résidus.",
      },
    ],
  },
};
