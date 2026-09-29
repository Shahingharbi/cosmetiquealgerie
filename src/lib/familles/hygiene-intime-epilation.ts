import type { Famille } from "@/lib/familles-produits";

/** Hygiène intime, protections périodiques, épilation et cotons ou lingettes démaquillants : les familles à usage intime ou proche d'une peau sensible, traitées avec sobriété et sans euphémisme. */
export const FAMILLES_HYGIENE_INTIME_EPILATION: Record<string, Famille> = {
  "hygiene-intime": {
    nature: ["soin d'hygiène intime", "gel nettoyant intime"],
    genre: "m",
    zone: "la zone intime",
    role: [
      "{nom} nettoie {zone} avec une formule au pH adapté, différent de celui utilisé pour le reste du corps.",
      "Un {nature} respecte l'équilibre de la flore locale, plus fragile que celui de la peau du reste du corps.",
      "{nom} élimine les résidus de transpiration et les sécrétions naturelles sans agresser une muqueuse plus sensible que le reste de la peau.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} humide, en usage externe uniquement, puis rincer abondamment à l'eau tiède.",
      "Un geste doux suffit : {zone} ne demande ni frottement ni insistance, contrairement au reste du corps.",
      "Utiliser une petite quantité, l'équivalent d'une noisette, sans laisser {ce} en contact prolongé avant le rinçage.",
    ],
    moment: [
      "{Le} s'utilise une fois par jour, lors de la douche, matin ou soir selon les habitudes.",
      "Un second lavage peut s'ajouter après une activité physique intense ou en période de forte chaleur, sans dépasser deux usages quotidiens.",
    ],
    precaution: [
      "{Le} s'utilise exclusivement en usage externe : aucun produit d'hygiène intime ne doit être introduit à l'intérieur du corps.",
      "En cas de rougeur, de démangeaison ou d'inconfort inhabituel, arrêter l'application et consulter un professionnel de santé plutôt que de multiplier les lavages.",
    ],
    faq: [
      {
        q: "Faut-il utiliser {nom} tous les jours ?",
        r: "Un lavage quotidien avec {nom} suffit pour la toilette intime, lors de la douche. Multiplier les lavages, même avec une formule adaptée, peut déséquilibrer la flore locale plutôt que la protéger. En dehors de ce moment, l'eau claire reste suffisante pour le reste de la journée.",
      },
      {
        q: "Quelle différence avec un savon classique ?",
        r: "Un savon classique a un pH proche de 9, plus alcalin que celui de {zone}, naturellement acide. {Le} est formulé à un pH proche de 5, plus respectueux de cet équilibre, ce qui limite les tiraillements et les sensations d'inconfort après la toilette, sans dessécher la peau environnante.",
      },
      {
        q: "Peut-on utiliser {nom} pendant les règles ?",
        r: "Oui, {nom} s'utilise normalement pendant les règles, lors de la toilette quotidienne. Un lavage supplémentaire reste possible en cas d'inconfort, sans dépasser deux usages par jour. Le produit reste un soin d'hygiène externe, sans action sur le flux ni sur son intensité.",
      },
    ],
  },

  "protection-hygienique": {
    nature: ["protection hygiénique", "protection périodique"],
    genre: "f",
    zone: "la zone intime",
    role: [
      "{nom} absorbe le flux menstruel et le retient à distance de {zone} pendant la durée du port.",
      "Une {nature} se décline en plusieurs niveaux d'absorption, du flux léger au flux abondant, à adapter selon les jours du cycle.",
      "{nom} se porte à l'extérieur, contre le sous-vêtement, ou à l'intérieur selon le format choisi, chacun avec ses propres repères de pose et de durée de port.",
    ],
    geste: [
      "Positionner {nom} au centre du sous-vêtement, partie adhésive contre le tissu, ailettes repliées sur les bords quand le modèle en comporte.",
      "Choisir le niveau d'absorption selon l'intensité du flux du jour plutôt que de garder le même format sur tout le cycle.",
      "Retirer {ce} en la repliant sur elle-même, protection contre protection, puis l'envelopper avant de la jeter à la poubelle, jamais dans les toilettes.",
    ],
    moment: [
      "{Le} se change toutes les quatre à six heures en usage diurne, plus souvent si le flux est abondant.",
      "La nuit, un format adapté au port prolongé limite le risque de fuite pendant le sommeil.",
    ],
    precaution: [
      "Respecter la durée de port maximale indiquée par le fabricant limite l'inconfort, tampons compris, où ce repère est particulièrement important.",
      "En cas de démangeaison, de rougeur ou de gêne inhabituelle, changer de format ou de matière et consulter un professionnel de santé si la gêne persiste.",
    ],
    faq: [
      {
        q: "Quelle différence entre une serviette et un tampon ?",
        r: "La serviette hygiénique se porte à l'extérieur, contre le sous-vêtement, et convient dès les premières règles. Le tampon se porte à l'intérieur et demande une manipulation plus précise. Le choix dépend surtout du confort personnel, de l'activité pratiquée et de l'aisance avec chaque format.",
      },
      {
        q: "À quelle fréquence faut-il changer sa protection ?",
        r: "En moyenne toutes les quatre à six heures, davantage si le flux est abondant, un peu moins si le flux est très léger. Pour un tampon, ne jamais dépasser huit heures de port, y compris la nuit, quelle que soit l'intensité du flux ce jour-là.",
      },
      {
        q: "Le protège-slip peut-il remplacer une protection les jours de règles ?",
        r: "Non, un protège-slip absorbe de très faibles quantités, adaptées aux pertes légères de fin ou de début de cycle. Les jours de flux normal ou abondant demandent une serviette ou un tampon dimensionnés pour ce volume, sous peine de fuite rapide dans la journée.",
      },
    ],
  },

  epilation: {
    nature: ["produit d'épilation", "soin épilatoire"],
    genre: "m",
    zone: "les jambes",
    role: [
      "{nom} retire le poil à la racine ou en surface selon la méthode, avec une repousse plus ou moins longue selon la technique choisie.",
      "Un {nature} s'utilise sur {zone} et sur les autres zones du corps où le poil est visible, avec un temps de pose propre à chaque format.",
      "{nom} laisse la peau lisse pour une durée qui dépend de la méthode : plus longue pour une cire arrachée à la racine, plus courte pour une crème qui agit en surface.",
    ],
    geste: [
      "Étaler {nom} dans le sens de la pousse du poil, puis retirer la bande ou la cire dans le sens inverse, d'un geste sec et rapide.",
      "Respecter le temps de pose indiqué sur l'emballage : une crème dépilatoire laissée trop longtemps irrite la peau sans améliorer le résultat.",
      "Tendre la peau d'une main pendant le retrait de l'autre : ce geste limite la douleur et améliore l'efficacité de {ce}.",
    ],
    moment: [
      "L'épilation se pratique toutes les deux à quatre semaines selon la méthode et la vitesse de repousse propre à chacun.",
      "Le soir est souvent préféré : la peau, momentanément rougie par le geste, a toute la nuit pour se calmer avant l'exposition du lendemain.",
    ],
    precaution: [
      "Un test cutané sur une petite zone, la veille, permet de vérifier l'absence de réaction avant d'appliquer {nom} sur une surface plus large.",
      "Après l'épilation, la peau est plus sensible : éviter le soleil et les UV artificiels dans les heures qui suivent limite les taches et les irritations.",
    ],
    faq: [
      {
        q: "Faut-il faire un test avant d'utiliser {nom} ?",
        r: "Oui, un test cutané est recommandé avant toute première utilisation, surtout pour une crème dépilatoire ou une cire chaude. Appliquer une petite quantité sur l'avant-bras, patienter le temps indiqué sur l'emballage, puis vérifier l'absence de rougeur ou de picotement avant d'étendre l'application à {zone}.",
      },
      {
        q: "Combien de temps dure la peau lisse après {nom} ?",
        r: "Cela dépend de la méthode : une cire arrache le poil à la racine, pour une repousse visible après deux à quatre semaines. Une crème dépilatoire agit en surface, avec une repousse plus rapide, souvent en moins d'une semaine. Le résultat dépend aussi de la finesse et de la densité du poil, propre à chaque personne.",
      },
      {
        q: "Peut-on s'épiler juste avant de s'exposer au soleil ?",
        r: "Non, ce n'est pas conseillé. La peau épilée est temporairement plus sensible et plus perméable, ce qui augmente le risque de taches sous l'effet des UV. Mieux vaut espacer l'épilation et l'exposition d'au moins vingt-quatre heures, dans un sens comme dans l'autre.",
      },
    ],
  },

  "coton-lingette": {
    nature: ["coton démaquillant", "disque nettoyant"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} retire les dernières traces de maquillage ou de soin après le nettoyage, sous forme de coton, de disque réutilisable ou de lingette prête à l'emploi.",
      "Un {nature} complète un gel ou une eau micellaire : il essuie sans rinçage, ce qui le rend pratique en dehors de la salle de bain.",
      "{nom} sert aussi à appliquer un tonique ou une lotion de façon homogène sur {zone}, sans gaspiller le produit versé directement sur la peau.",
    ],
    geste: [
      "Utiliser {nom} par un mouvement doux, du centre de {zone} vers l'extérieur, sans repasser au même endroit une fois le coton sali.",
      "Pour une lingette, déplier entièrement la feuille avant usage : une surface repliée frotte davantage sur la même zone et irrite plus vite.",
      "Un coton réutilisable se rince à l'eau claire entre deux usages et se lave en machine une fois par semaine environ.",
    ],
    moment: [
      "{Le} s'utilise à chaque étape qui demande un essuyage : démaquillage, nettoyage ou application de lotion, matin ou soir selon le soin concerné.",
      "La lingette prête à l'emploi trouve surtout sa place en dehors de la maison, quand l'eau n'est pas disponible.",
    ],
    precaution: [
      "Une lingette jetable ne se réutilise pas : replier son côté sale vers l'intérieur ne suffit pas à éviter de redéposer des impuretés sur {zone}.",
      "Sur peau irritée ou après une exposition au soleil, préférer un rinçage à l'eau plutôt qu'un frottement, même doux, avec {nom}.",
    ],
    faq: [
      {
        q: "Coton jetable ou coton réutilisable, quelle différence ?",
        r: "Le coton jetable s'utilise une fois puis se jette, sans entretien particulier. Le coton réutilisable se rince après chaque usage et se lave en machine régulièrement ; il réduit les déchets sur la durée mais demande cet entretien pour rester hygiénique. Les deux nettoient aussi efficacement à l'usage.",
      },
      {
        q: "Une lingette démaquillante remplace-t-elle le nettoyage à l'eau ?",
        r: "Pas totalement. La lingette retire l'essentiel du maquillage et des impuretés en un geste rapide, pratique en voyage ou en dehors de la maison. Un nettoyage à l'eau, avec un gel ou une eau micellaire rincée, reste préférable dès que la salle de bain est accessible.",
      },
      {
        q: "Combien de temps garder un coton réutilisable ?",
        r: "Un coton réutilisable en microfibre ou en bambou se change généralement au bout de six à douze mois d'usage régulier, selon l'entretien apporté. Un tissu qui reste rêche après lavage ou dont les coutures se défont signale qu'il est temps de le remplacer.",
      },
    ],
  },
};
