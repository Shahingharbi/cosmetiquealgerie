import type { Famille } from "@/lib/familles-produits";

/** Familles de l'hygiène courante : gel douche, savon, dentifrice, brosse à dents et bain de bouche. */
export const FAMILLES_HYGIENE: Record<string, Famille> = {
  "gel-douche": {
    nature: ["gel douche", "gel nettoyant pour le corps"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} nettoie {zone} en dissolvant la transpiration, le sébum et les résidus de crème solaire accumulés dans la journée.",
      "Un {nature} mousse au contact de l'eau et élimine les impuretés sans laisser de film collant sur la peau.",
      "{nom} prépare {zone} à recevoir une crème hydratante, un geste utile quand l'eau du robinet est calcaire et assèche la peau.",
    ],
    geste: [
      "Faire mousser une noisette de {nom} dans la main ou sur un gant, puis masser {zone} en mouvements circulaires.",
      "Rincer à l'eau tiède plutôt que chaude, qui accentue les tiraillements déjà fréquents avec une eau calcaire.",
      "Une douche de cinq minutes environ suffit à nettoyer {zone} sans fragiliser le film protecteur naturel de la peau.",
    ],
    moment: [
      "Une douche par jour convient à la majorité des peaux, davantage l'été quand la chaleur multiplie les douches.",
      "{Ce} s'applique en début de douche, avant un shampoing si les cheveux sont lavés dans la foulée.",
    ],
    precaution: [
      "Sur peau sèche ou sensible, un rinçage abondant limite les résidus de tensioactifs qui accentuent les tiraillements après la douche.",
    ],
    faq: [
      {
        q: "Faut-il utiliser {nom} tous les jours ?",
        r: "Un usage quotidien convient à la plupart des peaux, surtout en été quand la transpiration augmente avec la chaleur. Sur peau sèche, réduire à un jour sur deux et privilégier l'eau tiède limite les tiraillements liés à l'eau calcaire fréquente en Algérie.",
      },
      {
        q: "{Le} remplace-t-il le savon pour les mains ?",
        r: "Oui, la formule nettoie les mains aussi bien que {zone}, sans différence d'action entre les deux zones. Certains gardent malgré tout un savon près du lavabo, par habitude plus que par nécessité, les deux produits étant équivalents pour ce geste.",
      },
      {
        q: "Un {nature} suffit-il à exfolier la peau ?",
        r: "Non, {ce} nettoie sans frotter en profondeur et ne retire pas les cellules mortes en surface. Un gommage, utilisé une à deux fois par semaine, reste un geste complémentaire et distinct du nettoyage quotidien {zone}, qui vise seulement les impuretés du jour.",
      },
    ],
  },

  savon: {
    nature: ["savon", "pain de savon"],
    genre: "m",
    zone: "le corps et les mains",
    role: [
      "{nom} nettoie {zone} en formant une mousse qui capture la saleté, la transpiration et les résidus de crème appliqués dans la journée.",
      "Un {nature} agit par simple contact avec l'eau, sans nécessiter d'appareil ni de dosage précis contrairement à un flacon pompe.",
      "{nom} retire les impuretés de surface accumulées sur {zone} au fil de la journée, sans étape supplémentaire.",
    ],
    geste: [
      "Frotter {nom} directement sur peau humide, ou le faire mousser au préalable entre les mains avant d'étaler la mousse.",
      "Masser {zone} quelques secondes, insister sur les mains avant les repas, puis rincer à l'eau tiède.",
      "Laisser sécher {nom} hors de l'eau stagnante entre deux utilisations, ce qui évite qu'il ramollisse et se dissolve plus vite.",
    ],
    moment: [
      "Le lavage des mains se répète plusieurs fois par jour, {ce} se garde alors près du lavabo ou de l'évier.",
      "{Ce} s'utilise à la douche pour nettoyer {zone} en entier, au même rythme qu'un gel douche.",
    ],
    precaution: [
      "Un savon partagé entre plusieurs personnes gagne à s'égoutter sur un porte-savon aéré, ce qui évite qu'il reste détrempé et se dissolve trop vite.",
    ],
    faq: [
      {
        q: "{Le} sèche-t-il plus la peau qu'un gel douche ?",
        r: "Cela dépend surtout de la formule, pas du format. Un savon peut être surgras et doux, comme un gel douche peut être asséchant. Avec une eau calcaire, souvent le cas en Algérie, bien rincer compte davantage que le choix entre pain et flacon pour le confort de la peau.",
      },
      {
        q: "Pourquoi {nom} devient-il mou entre deux utilisations ?",
        r: "Un pain de savon laissé dans l'eau stagnante absorbe l'humidité et se dissout plus vite. Un porte-savon qui égoutte l'eau, ou {ce} rangé hors de la douche entre deux passages, le fait durer sensiblement plus longtemps sans changer son pouvoir nettoyant.",
      },
      {
        q: "{Le} convient-il aussi pour le visage ?",
        r: "Certains savons conviennent au visage, d'autres sont trop asséchants pour cette zone plus fine que le reste du corps. En l'absence d'indication visage sur l'emballage, mieux vaut réserver {nom} au corps et aux mains, et choisir un nettoyant dédié pour le visage.",
      },
    ],
  },

  dentifrice: {
    nature: ["dentifrice", "pâte dentifrice"],
    genre: "m",
    zone: "les dents et les gencives",
    role: [
      "{nom} élimine la plaque dentaire accumulée sur {zone} après chaque repas, à l'aide du brossage mécanique de la brosse.",
      "Un {nature} au fluor participe à la prévention des caries, un usage reconnu et recommandé par les dentistes.",
      "{nom} rafraîchit l'haleine et laisse une sensation de propreté sur {zone} une fois le brossage terminé.",
    ],
    geste: [
      "Déposer une noisette de {nom}, de la taille d'un petit pois, sur les poils humides de la brosse à dents.",
      "Brosser {zone} pendant deux minutes, par petits mouvements circulaires, sans oublier la langue et le fond de la bouche.",
      "Cracher l'excédent de mousse sans rincer abondamment tout de suite, pour laisser le fluor agir quelques minutes de plus.",
    ],
    moment: [
      "Le brossage se fait deux fois par jour, matin et soir, après le petit-déjeuner et avant le coucher.",
      "{Ce} s'utilise à chaque brossage, en quantité identique, sans dépendre d'un autre produit d'hygiène bucco-dentaire.",
    ],
    precaution: [
      "Un dentifrice fluoré à forte teneur ne convient pas aux enfants en bas âge : vérifier l'indication d'âge inscrite sur le tube.",
    ],
    faq: [
      {
        q: "Faut-il rincer la bouche après {nom} ?",
        r: "Un rinçage immédiat à l'eau dilue le fluor et réduit son action de prévention des caries. Il est préférable de cracher l'excédent de mousse et d'attendre quelques minutes avant de boire ou de rincer, pour laisser le produit agir sur {zone}.",
      },
      {
        q: "Quelle quantité de {nom} utiliser ?",
        r: "Une noisette de la taille d'un petit pois suffit pour un adulte, quel que soit le volume du tube. Une quantité plus importante ne nettoie pas mieux {zone} et augmente simplement la consommation du produit sans bénéfice supplémentaire pour le résultat du brossage.",
      },
      {
        q: "{Le} suffit-il sans fil dentaire ?",
        r: "Le brossage nettoie les faces visibles des dents, mais atteint mal les espaces entre elles. Le fil dentaire ou une brossette interdentaire complète {le} sur ces zones, notamment après les repas où des résidus restent coincés entre les dents.",
      },
    ],
  },

  "brosse-a-dents": {
    nature: ["brosse à dents", "brosse dentaire"],
    genre: "f",
    zone: "les dents et les gencives",
    role: [
      "{nom} élimine mécaniquement la plaque dentaire sur {zone}, un rôle que le dentifrice seul ne peut pas remplir.",
      "Une {nature} à poils souples nettoie {zone} sans agresser l'émail ni irriter une gencive sensible.",
      "{nom} atteint les faces externes, internes et masticatoires des dents, trois zones que le rinçage seul ne nettoie pas.",
    ],
    geste: [
      "Incliner {nom} à quarante-cinq degrés contre la gencive et brosser par petits mouvements, sans appuyer trop fort.",
      "Brosser {zone} pendant deux minutes, en couvrant chaque face des dents dans un ordre systématique pour n'en oublier aucune.",
      "Rincer {nom} à l'eau claire après usage et la secouer pour retirer l'excédent d'eau avant de la ranger tête en l'air.",
    ],
    moment: [
      "{Ce} s'utilise deux fois par jour, matin et soir, à chaque brossage avec le dentifrice.",
      "Une brosse électrique se recharge régulièrement, une brosse manuelle se range simplement dans un verre ou un porte-brosse ventilé.",
    ],
    precaution: [
      "Remplacer {nom} tous les trois mois environ, ou dès que les poils s'écartent : une brosse usée nettoie nettement moins bien.",
    ],
    faq: [
      {
        q: "Brosse à dents souple ou dure : laquelle choisir ?",
        r: "Les poils souples ou médiums conviennent à la majorité des utilisateurs et respectent mieux l'émail et les gencives. Les poils durs, plus agressifs, sont réservés à des cas particuliers et déconseillés en usage quotidien, surtout sur une gencive sensible ou qui saigne facilement au brossage.",
      },
      {
        q: "Faut-il préférer {nom} électrique à une brosse manuelle ?",
        r: "Les deux nettoient efficacement quand le geste est correct et la durée respectée. La brosse électrique facilite le mouvement circulaire et intègre souvent un minuteur de deux minutes, ce qui aide les personnes qui brossent trop vite ou trop fort avec une brosse manuelle.",
      },
      {
        q: "Pourquoi changer {nom} aussi souvent ?",
        r: "Les poils s'écartent et perdent leur forme après plusieurs semaines d'usage, ce qui réduit leur efficacité sur {zone}. Une brosse trop ancienne perd aussi de sa souplesse. Le remplacement tous les trois mois, ou après une maladie, reste la référence communément admise.",
      },
    ],
  },

  "bain-de-bouche": {
    nature: ["bain de bouche", "solution buccale"],
    genre: "m",
    zone: "la bouche",
    role: [
      "{nom} rince {zone} dans les recoins que la brosse à dents n'atteint pas, entre les dents et le long des gencives.",
      "Un {nature} complète le brossage et rafraîchit l'haleine pendant plusieurs heures après usage.",
      "{nom} agit en complément du brossage et du fil dentaire, jamais à leur place, sur l'ensemble de {zone}.",
    ],
    geste: [
      "Verser une dose de {nom} dans le bouchon doseur fourni, en respectant la quantité indiquée sur l'emballage.",
      "Garder le produit en bouche environ trente secondes, en le faisant circuler entre les dents, puis le recracher sans avaler.",
      "Ne pas rincer {zone} à l'eau immédiatement après, pour laisser les actifs agir un peu plus longtemps.",
    ],
    moment: [
      "{Ce} s'utilise après le brossage, matin ou soir, une à deux fois par jour selon l'indication du produit.",
      "Il n'a pas vocation à remplacer une seule étape du brossage biquotidien, seulement à le compléter.",
    ],
    precaution: [
      "Garder {nom} en bouche plus longtemps que la durée indiquée n'apporte pas de bénéfice supplémentaire et peut irriter les muqueuses.",
      "{Ce} ne s'avale pas et se range hors de portée des enfants, qui pourraient le confondre avec une boisson.",
    ],
    faq: [
      {
        q: "{Le} remplace-t-il le brossage des dents ?",
        r: "Non, un bain de bouche complète le brossage mais ne le remplace pas : il ne retire pas mécaniquement la plaque dentaire comme le fait une brosse. Il agit en rinçage, sur des zones que le brossage seul atteint parfois mal, notamment entre les dents.",
      },
      {
        q: "Combien de temps garder {nom} en bouche ?",
        r: "La durée indiquée sur l'emballage se situe généralement autour de trente secondes. La respecter suffit : garder le produit plus longtemps n'améliore pas le résultat et peut, chez certaines personnes, irriter les muqueuses de la bouche.",
      },
      {
        q: "Peut-on avaler {nom} par accident ?",
        r: "{Ce} est conçu pour être recraché, pas avalé, et se garde hors de portée des enfants. En cas d'ingestion accidentelle, l'étiquette du produit indique la conduite à tenir ; il est conseillé de la garder visible dans la salle de bain.",
      },
    ],
  },
};
