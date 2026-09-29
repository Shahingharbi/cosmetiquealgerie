import type { Famille } from "@/lib/familles-produits";

/** Familles du soin masculin : déodorant, shampoing, soin visage, gel douche et rasage. */
export const FAMILLES_SOIN_HOMME: Record<string, Famille> = {
  "deodorant-homme": {
    nature: ["déodorant homme", "soin anti-transpirant pour homme"],
    genre: "m",
    zone: "les aisselles",
    role: [
      "{nom} limite la transpiration et les odeurs sur {zone}, une zone où la peau masculine produit en moyenne davantage de sueur.",
      "Un {nature} tient compte d'une transpiration généralement plus abondante, liée à une plus grande densité de glandes sudoripares chez l'homme.",
      "{nom} agit localement sur {zone} et ne remplace pas une douche quotidienne ni le lavage du reste du corps.",
    ],
    geste: [
      "Appliquer {nom} sur {zone} propres et sèches, juste après la douche, en une ou deux pressions selon le format bille, spray ou stick.",
      "Laisser sécher quelques secondes avant de s'habiller, pour éviter les traces blanches sur les vêtements sombres.",
      "Ne pas appliquer {nom} sur une peau fraîchement rasée ou irritée : le produit peut piquer et son efficacité en est réduite.",
    ],
    moment: [
      "L'application se fait le matin, juste après la douche, avant de s'habiller pour la journée.",
      "Une seconde application en fin de journée peut être utile lors d'une forte chaleur ou après un effort physique prolongé.",
    ],
    precaution: [
      "Sur une peau irritée par un rasage récent ou une épilation, mieux vaut attendre qu'elle soit apaisée avant d'appliquer {nom}, au risque de picotements.",
    ],
    faq: [
      {
        q: "Est-ce que {nom} tient toute la journée en cas de forte chaleur ?",
        r: "La tenue dépend surtout de la formule et de l'intensité de la transpiration, pas seulement du produit. En Algérie, sur une journée très chaude ou physique, une application matinale peut ne pas suffire : une seconde application en fin de journée reste possible sans risque particulier.",
      },
      {
        q: "Quelle est la différence entre un déodorant homme et un déodorant femme ?",
        r: "La différence tient surtout au parfum, généralement plus boisé ou plus corsé, et parfois à une formule pensée pour une transpiration plus abondante. Le mécanisme de base, limiter la sueur et les odeurs, reste identique d'un déodorant à l'autre, homme ou femme.",
      },
      {
        q: "Faut-il appliquer {nom} avant ou après le rasage des aisselles ?",
        r: "Après, une fois la peau rasée et calmée. Un déodorant appliqué juste après un rasage pique sur une peau encore sensibilisée par la lame, et son efficacité en est réduite. Attendre quelques minutes, le temps que la peau reprenne un aspect normal, suffit généralement.",
      },
    ],
  },

  "shampoing-homme": {
    nature: ["shampoing homme", "shampoing pour cheveux homme"],
    genre: "m",
    zone: "le cuir chevelu et les cheveux",
    role: [
      "{nom} nettoie {zone}, avec un cuir chevelu souvent plus gras chez l'homme, la production de sébum étant stimulée par la testostérone.",
      "Un {nature} retire aussi les résidus de produits coiffants, la transpiration du cuir chevelu et les particules de pollution accumulées dans la journée.",
      "Certains {nature} existent en format 2 en 1, pensé pour laver aussi le corps, une option qui simplifie la routine sous la douche.",
    ],
    geste: [
      "Faire mousser une noisette de {nom} sur cheveux mouillés, masser {zone} du bout des doigts, puis rincer à l'eau tiède.",
      "Le massage du cuir chevelu, une trentaine de secondes, favorise un nettoyage en profondeur sans agresser les racines.",
      "Sur cheveux courts, une seule application suffit généralement ; sur cheveux plus longs, un second passage retire mieux les résidus.",
    ],
    moment: [
      "{Ce} s'utilise sous la douche, deux à trois fois par semaine pour un cuir chevelu normal, tous les jours si besoin sur cuir chevelu gras.",
      "Le shampoing s'applique en premier lorsqu'il est suivi d'un après-shampoing, qui reste une étape facultative.",
    ],
    precaution: [
      "Un rinçage insuffisant laisse des résidus qui alourdissent les cheveux et peuvent irriter un cuir chevelu sensible.",
    ],
    faq: [
      {
        q: "Faut-il vraiment un shampoing spécifique pour homme ?",
        r: "Pas obligatoirement : un shampoing classique nettoie tout aussi bien un cuir chevelu masculin. La différence tient surtout au parfum et à une formule parfois pensée pour un cuir chevelu plus gras, la production de sébum étant en moyenne plus élevée chez l'homme.",
      },
      {
        q: "{Le} peut-il aussi laver le corps ?",
        r: "Seuls les formats explicitement annoncés 2 en 1 sont prévus pour ça. Un shampoing classique reste formulé pour les cheveux et le cuir chevelu, avec un pH différent de celui d'un gel douche, et ne remplace pas un nettoyage du corps.",
      },
      {
        q: "À quelle fréquence faut-il se laver les cheveux ?",
        r: "Cela dépend surtout du cuir chevelu : gras, il supporte un lavage quotidien sans problème particulier. Normal ou sec, deux à trois fois par semaine suffisent généralement, un lavage trop fréquent pouvant accentuer la production de sébum en réaction.",
      },
    ],
  },

  "soin-visage-homme": {
    nature: ["soin visage homme", "crème pour homme"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} hydrate une peau masculine généralement plus épaisse et plus riche en sébum que la peau féminine, avec des pores souvent plus visibles.",
      "Un {nature} agit aussi après le rasage, sur une peau irritée mécaniquement par la lame et donc temporairement plus sensible.",
      "{nom} complète une routine souvent réduite à un seul geste, matin ou soir, plutôt qu'une succession de plusieurs étapes.",
    ],
    geste: [
      "Prélever une noisette de {nom}, la répartir en plusieurs points sur {zone}, puis lisser du centre vers l'extérieur jusqu'à absorption complète.",
      "Appliquer {ce} sur peau propre et sèche, en évitant le contour des yeux si la formule n'est pas prévue pour cette zone.",
      "Après le rasage, attendre quelques minutes que la peau se referme avant d'appliquer {nom}, pour limiter les picotements.",
    ],
    moment: [
      "{Ce} s'applique le matin après le nettoyage, ou après le rasage quand celui-ci a lieu en début de journée.",
      "Une application le soir, sur peau nettoyée, reste possible en complément si la routine en prévoit une seconde.",
    ],
    precaution: [
      "Sur une peau fraîchement rasée et encore sensible, une formule sans alcool est préférable pour éviter les sensations de brûlure.",
    ],
    faq: [
      {
        q: "La peau masculine a-t-elle vraiment besoin d'un soin différent ?",
        r: "Oui dans les grandes lignes : elle est en moyenne plus épaisse, plus riche en sébum et ses pores sont plus visibles que sur une peau féminine. Une texture plus fluide, à absorption rapide, convient généralement mieux qu'une crème riche.",
      },
      {
        q: "Faut-il appliquer {nom} avant ou après le rasage ?",
        r: "Après, une fois la peau rasée. La lame retire une fine couche de peau et laisse une sensibilité temporaire ; appliquer un soin tout de suite après, sur une peau encore irritée, peut picoter. Quelques minutes d'attente suffisent généralement.",
      },
      {
        q: "Un seul produit suffit-il pour toute la routine visage ?",
        r: "Pour la plupart des hommes, oui : un soin hydratant unique couvre l'essentiel des besoins quotidiens. Une peau à problème spécifique, très sèche ou sujette aux imperfections, peut justifier un second produit ciblé, mais ce n'est pas systématique.",
      },
    ],
  },

  "gel-douche-homme": {
    nature: ["gel douche homme", "gel nettoyant corps homme"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} nettoie {zone} en retirant la sueur, le sébum et les impuretés accumulées au fil de la journée ou après un effort physique.",
      "Un {nature} se distingue surtout par son parfum, souvent plus corsé, la fonction nettoyante restant proche d'un gel douche classique.",
      "{nom} n'a pas vocation à traiter les odeurs corporelles à lui seul : le déodorant reste le produit dédié à cette fonction.",
    ],
    geste: [
      "Faire mousser {nom} dans la main ou sur un gant, appliquer sur {zone} humide, puis rincer abondamment à l'eau tiède.",
      "Insister sur les aisselles, les pieds et le dos, zones où la transpiration et les frottements s'accumulent le plus.",
      "Une noix de produit suffit pour tout le corps ; inutile de multiplier les pressions pour obtenir davantage de mousse.",
    ],
    moment: [
      "{Ce} s'utilise une à deux fois par jour, notamment après une activité physique ou une forte chaleur.",
      "Le gel douche s'applique avant ou après le shampoing, l'ordre n'ayant pas d'incidence sur le nettoyage.",
    ],
    precaution: [
      "Une utilisation trop fréquente à l'eau très chaude peut assécher la peau ; l'eau tiède reste préférable.",
    ],
    faq: [
      {
        q: "Un gel douche homme est-il différent d'un gel douche classique ?",
        r: "La différence porte surtout sur le parfum, généralement plus corsé, et parfois sur une texture plus fluide. La fonction nettoyante de base reste la même qu'un gel douche non genré, et rien n'empêche d'utiliser l'un ou l'autre indifféremment.",
      },
      {
        q: "Peut-on utiliser {nom} sur le visage ?",
        r: "Ce n'est pas recommandé : un gel douche a un pH pensé pour le corps, plus résistant, et peut assécher ou irriter la peau du visage, plus fine. Un nettoyant visage dédié reste plus adapté à cette zone.",
      },
      {
        q: "Faut-il changer de routine en été à cause de la chaleur ?",
        r: "Pas de produit différent à prévoir, mais une fréquence plus élevée est logique : la transpiration augmente avec la chaleur, surtout en Algérie en été. Une douche supplémentaire en fin de journée, avec {nom}, reste une option simple.",
      },
    ],
  },

  "rasage-homme": {
    nature: ["soin de rasage", "produit pour la barbe"],
    genre: "m",
    zone: "le visage et la barbe",
    role: [
      "{nom} accompagne un geste répété plusieurs fois par semaine, le rasage, qui retire une fine couche de peau avec le poil.",
      "La peau masculine, plus épaisse et plus riche en glandes sébacées, reste malgré tout sensibilisée par le passage répété de la lame.",
      "{nom} limite les irritations, les rougeurs et la sensation de tiraillement qui suivent souvent un rasage, qu'il s'agisse d'une mousse, d'un gel ou d'un après-rasage.",
    ],
    geste: [
      "Avant de raser {zone}, humidifier la peau à l'eau chaude ou appliquer {nom} pour ramollir le poil et faciliter le passage du rasoir.",
      "Raser dans le sens de la pousse du poil limite les irritations et les poils incarnés, puis rincer à l'eau froide resserre les pores.",
      "Après le rasage, appliquer l'après-rasage ou le soin barbe sur peau propre et sèche, en évitant toute zone encore entaillée.",
    ],
    moment: [
      "{Ce} s'utilise à chaque rasage, à une fréquence qui dépend de la pousse du poil, en général deux à quatre fois par semaine.",
      "Le soin barbe s'applique aussi en dehors des jours de rasage, sur une barbe installée, pour l'entretenir entre deux passages du rasoir.",
    ],
    precaution: [
      "Un après-rasage à base d'alcool pique sur une peau irritée ou fraîchement coupée par le rasoir.",
      "En cas de feu du rasoir ou de poils incarnés, une formule apaisante sans alcool reste préférable.",
    ],
    faq: [
      {
        q: "Comment éviter le feu du rasoir ?",
        r: "Trois points comptent : une lame propre et pas trop usée, une peau bien humidifiée avant de raser, et un passage dans le sens de la pousse du poil plutôt qu'à contre-poil. Un après-rasage apaisant, appliqué ensuite, réduit encore la sensation de brûlure.",
      },
      {
        q: "Faut-il un après-rasage même sans irritation visible ?",
        r: "Oui, il reste utile même sans rougeur apparente : le rasage assèche et fragilise temporairement la peau, que l'irritation se voie ou non. Un après-rasage referme les pores ouverts par l'eau chaude et réhydrate une peau que la mousse a pu dessécher.",
      },
      {
        q: "Comment limiter les poils incarnés ?",
        r: "Raser dans le sens de la pousse du poil, sans tirer sur la peau, réduit nettement leur apparition. Une lame trop usée oblige à repasser plusieurs fois au même endroit, ce qui augmente le risque ; la changer régulièrement aide aussi.",
      },
    ],
  },
};
