import type { Famille } from "@/lib/familles-produits";

/** Familles de maquillage du regard et de la base de teint qui l'accompagne : base tenue, BB/CC crème, mascara, eyeliner (khôl inclus) et fard à paupières. */
export const FAMILLES_MAQUILLAGE_YEUX: Record<string, Famille> = {
  "base-de-teint": {
    nature: ["base de teint", "primer visage"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} se pose sur {zone} avant le maquillage pour lisser le grain de peau et combler les pores dilatés.",
      "Une {nature} limite la migration du sébum vers le maquillage au fil de la journée, ce qui prolonge sa tenue sans avoir à le refaire.",
      "{nom} crée aussi une barrière entre la peau et les pigments du fond de teint, ce qui facilite le démaquillage en fin de journée.",
    ],
    geste: [
      "Appliquer une noisette de {nom} du bout des doigts, en partant du centre du visage vers l'extérieur, sur peau bien hydratée.",
      "Laisser {ce} sécher une minute avant de poser le fond de teint, le temps que la texture se fixe sur {zone}.",
      "Insister sur la zone T et les ailes du nez si la priorité est de contrôler les brillances en cours de journée.",
    ],
    moment: [
      "{Ce} s'applique après la crème hydratante et la protection solaire, juste avant le fond de teint.",
      "C'est un geste réservé aux jours de maquillage : sans fond de teint par-dessus, {ce} n'a pas d'utilité réelle.",
    ],
    precaution: [
      "Attendre l'absorption complète du soin hydratant avant d'appliquer {nom}, sinon le produit glisse et perd son effet matifiant sur {zone}.",
    ],
    faq: [
      {
        q: "Faut-il vraiment appliquer {nom} avant le fond de teint ?",
        r: "Ce n'est pas obligatoire, mais {ce} aide le maquillage à mieux tenir par forte chaleur et à moins migrer en cours de journée. Sur peau normale et par temps frais, un fond de teint appliqué directement sur une peau hydratée tient déjà correctement. L'intérêt augmente avec la chaleur et la transpiration.",
      },
      {
        q: "{Le} remplace-t-elle la crème hydratante du matin ?",
        r: "Non. {Nom} prépare {zone} pour le maquillage mais n'apporte pas la même hydratation qu'un soin dédié. Les deux se complètent dans cet ordre : crème hydratante d'abord, {nature} ensuite, une fois la peau bien absorbée. Sauter la crème laisse la peau sans base d'hydratation avant le maquillage.",
      },
      {
        q: "Faut-il choisir {nom} selon son type de peau ?",
        r: "Oui, dans une certaine mesure : les formules matifiantes conviennent mieux aux peaux grasses ou mixtes, tandis que les versions plus hydratantes ou illuminatrices sont pensées pour les peaux sèches ou ternes. Le choix se fait surtout selon l'effet recherché sur le rendu final du maquillage, plus que selon la marque.",
      },
    ],
  },

  "bb-cc-creme": {
    nature: ["BB crème", "CC crème"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} associe un soin hydratant et une teinte légère qui unifie le teint, sans la couvrance d'un fond de teint classique.",
      "Une {nature} laisse transparaître le grain de peau naturel tout en atténuant les rougeurs et les petites imperfections visibles.",
      "{nom} intègre souvent une protection solaire, ce qui en fait une étape rapide les jours sans maquillage complet.",
    ],
    geste: [
      "Appliquer {nom} du bout des doigts ou avec une éponge, en tapotant du centre du visage vers les contours.",
      "Étaler {ce} en fine couche : la teinte se développe au contact de l'air et fonce légèrement en quelques minutes.",
      "Estomper soigneusement à la lisière des cheveux et le long de la mâchoire, pour éviter un effet masque visible.",
    ],
    moment: [
      "{Ce} s'applique le matin, après le soin hydratant, comme dernière étape avant de sortir de la maison.",
      "Elle remplace le fond de teint les jours où une couvrance légère et un geste rapide suffisent amplement.",
    ],
    precaution: [
      "Quand {nom} contient un filtre solaire, sa protection diminue avec la transpiration et doit être renouvelée en cas d'exposition prolongée au soleil.",
    ],
    faq: [
      {
        q: "Quelle est la différence entre une BB crème et une CC crème ?",
        r: "La BB crème (Blemish Balm) privilégie le soin et une teinte légère, pensée à l'origine pour camoufler les imperfections après un geste esthétique. La CC crème (Color Correction) met l'accent sur l'uniformisation du teint, avec une texture souvent plus fluide. Dans la pratique, les deux se choisissent selon la texture et la couvrance recherchées.",
      },
      {
        q: "{Le} remplace-t-elle la crème hydratante ?",
        r: "Non. {Nom} prépare le teint pour le maquillage mais n'apporte pas la même hydratation qu'une crème dédiée. Les deux se complètent : crème hydratante en premier, {nature} ensuite, une fois la peau bien absorbée. Sauter la crème laisse la peau sans base d'hydratation avant la journée.",
      },
      {
        q: "{Nom} tient-elle bien par forte chaleur ?",
        r: "L'effet varie selon la formule et la météo : compter plusieurs heures de tenue supplémentaire par temps chaud et humide, moins par temps sec et frais. {Le} retarde l'apparition de brillance mais ne rend pas le maquillage totalement inaltérable sur une journée entière de forte chaleur.",
      },
    ],
  },

  mascara: {
    nature: ["mascara", "soin coloré pour les cils"],
    genre: "m",
    zone: "les cils",
    role: [
      "{nom} dépose un film pigmenté sur les cils, ce qui accentue leur couleur et leur donne plus de présence dans le regard.",
      "Un {nature} épaissit visuellement chaque cil grâce à la brosse, qui répartit la formule et sépare les cils un à un.",
      "{nom} structure le regard sans recourir à des faux cils ni à un rehaussement permanent, pour un résultat retirable chaque soir.",
    ],
    geste: [
      "Essuyer l'excédent de {nom} sur le bord du tube avant application, pour éviter les paquets sur les cils.",
      "Poser la brosse à la base des cils et remonter en zigzag jusqu'à la pointe, sur les cils du haut puis du bas.",
      "Laisser sécher trente secondes entre deux couches si une deuxième passe est souhaitée, pour ne pas coller les cils entre eux.",
    ],
    moment: [
      "{Ce} se pose en dernière étape du maquillage des yeux, après le fard à paupières et l'eyeliner.",
      "Il se retire chaque soir avant le coucher, jamais laissé sur les cils toute la nuit.",
    ],
    precaution: [
      "Un mascara se périme environ trois mois après ouverture ; passé ce délai, la formule sèche et devient un terrain propice aux bactéries.",
      "Ne jamais partager {nom} ni ajouter de l'eau ou de la salive pour le diluer, au risque d'irriter l'œil.",
    ],
    faq: [
      {
        q: "Combien de temps garder {nom} après ouverture ?",
        r: "Trois mois est la limite généralement admise pour un mascara : passé ce délai, la texture sèche, la brosse accumule des bactéries, et le risque d'irritation oculaire augmente. Noter la date d'ouverture sur le tube ou en changer à chaque saison reste une habitude simple à prendre.",
      },
      {
        q: "{Nom} résiste-t-il à la transpiration et à la chaleur ?",
        r: "Cela dépend de la formule : un mascara waterproof résiste mieux à l'humidité et à la transpiration qu'une version classique, qui peut légèrement couler en fin de journée par forte chaleur. En contrepartie, un mascara waterproof demande un démaquillant biphasé pour être retiré complètement.",
      },
      {
        q: "Comment retirer {nom} sans abîmer les cils ?",
        r: "Un démaquillant adapté aux yeux, posé sur un coton quelques secondes puis essuyé sans frotter, retire le mascara sans tirer sur les cils. Frotter énergiquement ou n'utiliser que de l'eau laisse des résidus et fragilise les cils à la longue.",
      },
    ],
  },

  eyeliner: {
    nature: ["eyeliner", "khôl"],
    genre: "m",
    zone: "le contour des yeux",
    role: [
      "{nom} trace une ligne le long des cils pour souligner le regard, du trait fin et précis au trait plus épais et marqué.",
      "Un {nature} se pose sur la paupière mobile, à la base des cils, ou sur la ligne des muqueuses selon la formule.",
      "{nom} structure la forme de l'œil et fait paraître les cils plus fournis en comblant les espaces entre eux.",
    ],
    geste: [
      "Tirer légèrement la paupière du bout d'un doigt pour la tendre, puis tracer {le} au plus près de la racine des cils.",
      "Travailler par petits traits successifs plutôt qu'en une seule ligne continue, pour garder le contrôle du tracé.",
      "Estomper avec un coton-tige immédiatement après le tracé, si un rendu fumé plutôt que net est recherché.",
    ],
    moment: [
      "{Ce} s'applique après le fard à paupières et avant le mascara, pour ne pas maquiller le trait en appliquant le mascara ensuite.",
      "Il se retouche en cours de journée si besoin, sans obliger à retirer le reste du maquillage des yeux.",
    ],
    precaution: [
      "Un tracé posé sur la ligne des muqueuses se remplace plus souvent qu'un trait externe, car cette zone est davantage exposée aux bactéries.",
      "Éviter de partager {nom} avec une autre personne, surtout s'il est utilisé sur la ligne des muqueuses ou à l'intérieur de l'œil.",
    ],
    faq: [
      {
        q: "Quelle est la différence entre un eyeliner et un khôl ?",
        r: "Le khôl est un crayon tendre, souvent appliqué sur la ligne des muqueuses et à l'intérieur de l'œil, pour un effet estompé. L'eyeliner, en feutre, en gel ou en crayon plus ferme, trace une ligne nette le long des cils. Les deux se retrouvent souvent dans le même maquillage des yeux.",
      },
      {
        q: "Peut-on appliquer {nom} sur la ligne des muqueuses avec des lentilles de contact ?",
        r: "L'application sur la ligne des muqueuses est déconseillée avec des lentilles de contact, car le produit migre facilement vers l'œil et peut irriter ou tacher les lentilles. Un tracé sur la paupière mobile, à la base des cils, reste compatible avec le port de lentilles.",
      },
      {
        q: "Comment tracer une ligne droite avec {nom} sans expérience ?",
        r: "Poser de petits points le long des cils avant de les relier facilite le contrôle du tracé, plutôt que de vouloir une ligne continue du premier coup. Appuyer le coude sur une surface stable évite les tremblements. Un coton-tige imbibé de démaquillant permet de corriger un tracé raté sans tout recommencer.",
      },
    ],
  },

  "fard-a-paupieres": {
    nature: ["fard à paupières", "ombre à paupières"],
    genre: "m",
    zone: "les paupières",
    role: [
      "{nom} dépose de la couleur ou de la matière sur la paupière mobile, du ton neutre proche de la peau au coloris affirmé.",
      "Un {nature} structure le regard en jouant sur les contrastes : une teinte claire ouvre l'œil, une teinte foncée le creuse.",
      "{nom} se décline en fini mat, satiné ou pailleté, chaque texture renvoyant la lumière différemment sur {zone}.",
    ],
    geste: [
      "Appliquer {nom} au pinceau ou du bout du doigt sur la paupière mobile, en partant de la base des cils vers le pli.",
      "Estomper les bords avec un pinceau propre, pour éviter une démarcation nette entre la couleur et le reste de la paupière.",
      "Superposer une teinte plus foncée dans le pli de l'œil, en dernière étape, pour donner du volume au regard.",
    ],
    moment: [
      "{Ce} s'applique après la base pour les yeux, si elle est utilisée, et avant l'eyeliner et le mascara.",
      "Il se pose sur paupière propre et sèche, sans trace de crème résiduelle qui ferait glisser le pigment.",
    ],
    precaution: [
      "Sur les teintes très pigmentées ou pailletées, appliquer {le} avant le fond de teint permet d'essuyer les résidus tombés sans abîmer le reste du maquillage.",
    ],
    faq: [
      {
        q: "Comment faire tenir {nom} toute la journée ?",
        r: "Une base pour paupières appliquée avant {le} évite que le pigment ne se dépose dans le pli de l'œil en cours de journée, surtout sur peau grasse ou par forte chaleur. Sans base, la couleur peut s'estomper après quelques heures, en particulier les teintes claires et mates.",
      },
      {
        q: "Faut-il un pinceau spécial pour appliquer {nom} ?",
        r: "Un pinceau à paupières facilite un dégradé propre entre les teintes, mais le bout du doigt fonctionne aussi pour une application rapide, avec une texture crème ou pailletée. Un pinceau distinct par zone, application et estompage, donne un résultat plus précis pour qui maquille ses yeux régulièrement.",
      },
      {
        q: "Comment éviter les chutes de paillettes sous les yeux ?",
        r: "Appliquer {nom} avant le fond de teint et l'anticernes permet d'essuyer les résidus tombés sans abîmer le reste du maquillage déjà posé. Tenir un papier ou un coton sous l'œil pendant l'application limite aussi les retombées sur les joues et le haut des pommettes.",
      },
    ],
  },
};
