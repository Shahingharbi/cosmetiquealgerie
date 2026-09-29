import type { Famille } from "@/lib/familles-produits";

/** Familles du département Bébé et maman : toilette et soin du bébé, change, confort de grossesse et puériculture. */
export const FAMILLES_BEBE_MAMAN: Record<string, Famille> = {
  "soin-bebe": {
    nature: ["soin lavant pour bébé", "produit de toilette pour bébé"],
    genre: "m",
    zone: "la peau du bébé",
    role: [
      "{nom} nettoie {zone} en douceur, grâce à une base lavante adaptée à un épiderme encore immature.",
      "Un {nature} respecte le film hydrolipidique du nourrisson, plus fin que celui d'un adulte et donc plus vite fragilisé.",
      "{nom} s'utilise sur le corps, parfois sur le cuir chevelu, selon ce qu'indique l'étiquette du produit.",
    ],
    geste: [
      "Verser une petite quantité de {nom} dans l'eau du bain ou sur une main humide, puis laver {zone} sans frotter.",
      "Rincer abondamment à l'eau tiède, même calcaire, en insistant sur les plis du cou, des aisselles et de l'aine.",
      "Sécher {zone} en tamponnant avec une serviette douce, sans frotter, en particulier au niveau des plis.",
    ],
    moment: [
      "Le bain ou la toilette a lieu une fois par jour, à un horaire calme qui devient vite un repère pour le bébé.",
      "Par forte chaleur, {ce} peut servir à un rinçage supplémentaire qui retire la transpiration sans multiplier les lavages complets.",
    ],
    precaution: [
      "La peau du nourrisson est plus fine et plus perméable que celle d'un adulte : éviter tout contact avec les yeux et la bouche.",
      "En cas de rougeur qui persiste, de plaque inhabituelle ou de doute, l'avis d'un pédiatre reste nécessaire ; conserver {nom} hors de portée des enfants.",
    ],
    faq: [
      {
        q: "À partir de quel âge peut-on utiliser {nom} ?",
        r: "La plupart des soins de toilette pour bébé indiquent un usage dès la naissance, mais l'étiquette du produit fait foi. En cas de peau très réactive ou de prématurité, l'avis du pédiatre avant toute utilisation reste la précaution la plus sûre.",
      },
      {
        q: "Faut-il un savon spécial ou un gel douche classique suffit-il ?",
        r: "Un gel douche classique est formulé pour une peau adulte et peut irriter celle d'un nourrisson, plus fine et plus sensible. Un {nature} est pensé pour respecter cet équilibre encore fragile, avec une base lavante douce et souvent sans parfum ajouté.",
      },
      {
        q: "Le bain quotidien est-il obligatoire ?",
        r: "Non, un bain par jour n'est pas indispensable à l'hygiène du bébé : une toilette localisée du visage, des mains et du siège peut suffire certains jours. Le bain reste surtout un moment de confort et de rituel, à adapter au rythme de la famille.",
      },
    ],
  },

  "change-bebe": {
    nature: ["crème de change", "liniment pour le change"],
    genre: "f",
    zone: "le siège",
    role: [
      "{nom} protège {zone} du contact prolongé avec l'urine et les selles, principale cause des irritations chez le nourrisson.",
      "Un {nature} forme une barrière qui limite le contact direct entre la peau et la couche, notamment pendant les heures de sommeil.",
      "{nom} nettoie ou protège selon sa formule : un liniment nettoie en douceur, une crème de change protège une peau déjà propre.",
    ],
    geste: [
      "Nettoyer {zone} à l'eau tiède ou au liniment, puis sécher chaque pli avant d'appliquer {nom}.",
      "Étaler une couche fine de {nom} sur {zone}, sans chercher à la faire pénétrer en frottant.",
      "Renouveler l'application à chaque change si la peau montre des signes d'irritation, sans dépasser une fine pellicule à chaque fois.",
    ],
    moment: [
      "{Ce} s'utilise à chaque change, ou de façon ciblée dès l'apparition d'une rougeur.",
      "La nuit, une application avant le coucher aide à protéger {zone} pendant les longues heures où la couche reste en place.",
    ],
    precaution: [
      "La peau du siège est particulièrement fine et déjà mise à l'épreuve par l'humidité prolongée de la couche.",
      "Si une rougeur persiste plus de deux à trois jours, s'accompagne de fièvre ou de lésions qui suintent, mieux vaut consulter un pédiatre ; garder {nom} hors de portée des enfants.",
    ],
    faq: [
      {
        q: "Faut-il mettre {nom} à chaque change ?",
        r: "Une application systématique n'est pas toujours nécessaire sur une peau saine : beaucoup de familles réservent {le} aux périodes où la peau montre déjà des signes de rougeur ou d'inconfort. En usage préventif, une fine couche à chaque change reste une option courante.",
      },
      {
        q: "Peut-on utiliser {nom} sous une couche toute la journée ?",
        r: "Oui, c'est l'usage prévu : {ce} est conçue pour rester en contact avec la peau sous une couche fermée. L'essentiel est d'appliquer une couche fine, car une épaisseur excessive peut retenir l'humidité au lieu de protéger.",
      },
      {
        q: "Que faire si les rougeurs ne partent pas ?",
        r: "Si l'irritation persiste plus de deux à trois jours malgré {nom}, s'étend, ou s'accompagne de fièvre ou de lésions qui suintent, il faut consulter un pédiatre. Il pourra distinguer un simple érythème fessier d'une cause nécessitant un traitement adapté.",
      },
    ],
  },

  "soin-grossesse": {
    nature: ["soin vergetures grossesse", "crème de confort pour la grossesse"],
    genre: "m",
    zone: "le ventre, les hanches et la poitrine",
    role: [
      "{nom} hydrate {zone}, des zones où la peau s'étire rapidement au fil des mois de grossesse.",
      "Un {nature} entretient le confort cutané par un apport régulier en agents hydratants et nourrissants.",
      "{nom} apaise les sensations de tiraillement qui accompagnent la prise de volume, un inconfort fréquent en fin de grossesse.",
    ],
    geste: [
      "Appliquer {nom} en mouvements circulaires sur {zone}, matin et soir, jusqu'à absorption complète.",
      "Masser sans appuyer fortement sur le ventre, en suivant le rythme des sensations plutôt qu'en cherchant à forcer la pénétration du produit.",
      "Renouveler l'application dès qu'une sensation de tiraillement apparaît, y compris en dehors des deux applications quotidiennes habituelles.",
    ],
    moment: [
      "{Ce} s'applique dès le début de grossesse, avant l'apparition d'une prise de volume visible, puis se poursuit jusqu'à l'accouchement.",
      "Un usage matin et soir, après la douche sur peau encore légèrement humide, favorise l'absorption du produit.",
    ],
    precaution: [
      "Certaines formules contiennent des huiles essentielles ou des actifs déconseillés pendant la grossesse ; vérifier la composition avec une sage-femme ou un médecin en cas de doute.",
      "En cas de démangeaisons intenses, de rougeur inhabituelle ou de douleur, l'avis d'un professionnel de santé reste nécessaire avant de poursuivre l'application de {nom}.",
    ],
    faq: [
      {
        q: "{Le} empêche-t-il vraiment les vergetures ?",
        r: "Aucun soin ne garantit l'absence de vergetures, qui dépendent surtout de facteurs génétiques et de la vitesse de prise de poids. {Le} hydrate la peau et limite les tiraillements, ce qui améliore le confort, mais son effet sur leur apparition reste variable d'une personne à l'autre.",
      },
      {
        q: "À partir de quand faut-il commencer à appliquer {nom} ?",
        r: "Beaucoup de futures mamans commencent dès les premières semaines, avant que le ventre ne s'arrondisse, pour habituer la peau à une hydratation régulière. Il n'y a pas de moment obligatoire : {ce} peut être intégré à la routine dès que le besoin d'hydratation se fait sentir.",
      },
      {
        q: "{Le} est-il compatible avec l'allaitement ?",
        r: "Cela dépend de la formule et de la zone d'application, en particulier sur la poitrine. Il est préférable de vérifier la composition et de rincer la zone du mamelon avant une tétée si {le} y a été appliqué. En cas de doute, demander conseil à une sage-femme ou un pharmacien.",
      },
    ],
  },

  "accessoire-bebe": {
    nature: ["accessoire de puériculture", "matériel de soin pour bébé"],
    genre: "m",
    zone: "le quotidien du bébé",
    role: [
      "{nom} accompagne {zone}, qu'il s'agisse de l'alimentation, de la toilette ou du suivi de sa santé.",
      "Un {nature} est conçu en matériaux adaptés à un usage par un bébé ou sur un bébé, sans arête ni pièce qui se détache facilement.",
      "{nom} facilite un geste répété plusieurs fois par jour, comme préparer un biberon, démêler des cheveux fins ou prendre une température.",
    ],
    geste: [
      "Nettoyer {nom} avant la première utilisation, puis après chaque usage selon le mode d'emploi du fabricant.",
      "Vérifier l'état de {nom} avant chaque utilisation : une fissure sur une tétine ou un embout s'use plus vite qu'il n'y paraît.",
      "Suivre les instructions de nettoyage propres à chaque accessoire, un biberon et une brosse à cheveux ne se traitant pas de la même façon.",
    ],
    moment: [
      "La fréquence d'usage dépend de l'accessoire : plusieurs fois par jour pour un biberon, une à deux fois par jour pour une brosse à cheveux.",
      "Un contrôle régulier de l'état de {nom} permet de le remplacer avant qu'une pièce usée ne présente un risque.",
    ],
    precaution: [
      "Les petites pièces (bouchons, tétines, embouts) présentes sur certains accessoires peuvent se détacher : vérifier qu'elles sont bien fixées avant chaque usage et tenir {nom} hors de portée d'un bébé livré à lui-même.",
      "En cas de doute sur la lecture d'un thermomètre, un signe inhabituel ou une réaction liée à un accessoire, l'avis d'un pédiatre reste la référence.",
    ],
    faq: [
      {
        q: "Comment nettoyer {nom} correctement ?",
        r: "Le nettoyage dépend du matériau et de l'usage : un biberon se lave à l'eau chaude savonneuse puis se stérilise durant les premiers mois, une brosse à cheveux se rince simplement. Le mode d'emploi fourni avec {nom} précise la méthode et la fréquence recommandées.",
      },
      {
        q: "À partir de quel âge peut-on utiliser {nom} ?",
        r: "Cela dépend du type d'accessoire : certains sont conçus dès la naissance, d'autres à partir de quelques mois, une fois que le bébé tient sa tête ou que ses premières dents apparaissent. L'emballage précise toujours la tranche d'âge recommandée par le fabricant.",
      },
      {
        q: "Faut-il remplacer {nom} régulièrement ?",
        r: "Oui, les accessoires en contact avec la bouche ou la peau du bébé s'usent avec le temps : une tétine se fissure, une brosse perd ses picots. Un contrôle visuel avant chaque usage permet de repérer le moment où {nom} doit être changé.",
      },
    ],
  },
};
