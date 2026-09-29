import type { Famille } from "@/lib/familles-produits";

/** Familles du département Parfum : les formats de fragrance (concentration croissante) et le coffret qui les regroupe. */
export const FAMILLES_PARFUM: Record<string, Famille> = {
  "eau-de-parfum": {
    nature: ["eau de parfum", "EDP"],
    genre: "f",
    zone: "les points de pulsation",
    role: [
      "{nom} appartient à la famille des eaux de parfum : sa concentration en matière parfumante se situe le plus souvent entre 15 et 20 %, la plus élevée des formats vendus couramment.",
      "Cette concentration donne à {nom} une tenue longue, généralement cinq à huit heures selon la peau, et une diffusion plus marquée dès l'application.",
      "Une {nature} convient aux usages où la tenue prime sur la légèreté, notamment en soirée ou lors d'une sortie prolongée.",
    ],
    geste: [
      "Vaporiser {nom} à une quinzaine de centimètres de la peau, sur {zone}, en particulier poignets, cou, décolleté et intérieur des coudes.",
      "Ne pas frotter les poignets l'un contre l'autre après la vaporisation : le frottement chauffe la peau et altère les premières notes.",
      "Une à deux pressions suffisent pour {zone} : la concentration élevée d'une eau de parfum rend les vaporisations répétées inutiles.",
    ],
    moment: [
      "{Ce} s'applique sur peau propre et hydratée, avant de s'habiller, pour éviter les projections sur un tissu clair.",
      "Une peau hydratée retient mieux le parfum qu'une peau sèche, même avec une simple crème neutre sans parfum.",
    ],
    precaution: [
      "En Algérie, conserver {nom} à l'abri de la chaleur et de la lumière directe : la chaleur estivale altère l'alcool et modifie le jus avec le temps.",
      "Certaines formules contiennent des agrumes, photosensibilisants au soleil : éviter de vaporiser {nom} sur une peau qui va rester exposée en plein soleil.",
    ],
    faq: [
      {
        q: "Quelle différence entre eau de parfum et eau de toilette ?",
        r: "La différence tient à la concentration en matière parfumante : une eau de parfum en contient généralement 15 à 20 %, une eau de toilette 5 à 15 %. Plus concentrée, l'eau de parfum tient plus longtemps sur la peau et se vaporise en moins de pressions. L'eau de toilette reste plus légère, pour un usage quotidien.",
      },
      {
        q: "Combien de temps tient un parfum ?",
        r: "Pour une eau de parfum, comptez en moyenne cinq à huit heures sur la peau, selon le type de peau, la température et l'activité physique. La chaleur et la transpiration accélèrent la dissipation, ce qui est fréquent en climat algérien. Le vêtement garde le parfum plus longtemps que la peau.",
      },
      {
        q: "Comment conserver son parfum ?",
        r: "À l'abri de la lumière directe, de la chaleur et des variations de température, idéalement dans son coffret d'origine. La salle de bain, souvent humide et chaude, et la voiture en été sont à éviter. Un flacon bien conservé garde ses qualités olfactives plusieurs années sans s'altérer.",
      },
    ],
  },

  "eau-de-toilette": {
    nature: ["eau de toilette", "EDT"],
    genre: "f",
    zone: "les points de pulsation",
    role: [
      "{nom} appartient à la famille des eaux de toilette : sa concentration en matière parfumante se situe le plus souvent entre 5 et 15 %, inférieure à celle d'une eau de parfum.",
      "Cette concentration plus légère donne à {nom} une tenue plus courte, généralement trois à cinq heures, avec une diffusion moins appuyée.",
      "Une {nature} convient à un usage quotidien, au bureau ou en journée, quand une diffusion discrète est préférable à une présence marquée.",
    ],
    geste: [
      "Vaporiser {nom} à une quinzaine de centimètres de la peau, sur {zone}, en particulier poignets, cou et intérieur des coudes.",
      "Ne pas frotter les poignets après la vaporisation : le frottement chauffe la peau et dénature les premières notes plus vite qu'un séchage naturel.",
      "Une {nature} se vaporise en général en deux à trois pressions, la concentration plus légère autorisant une application plus généreuse qu'une eau de parfum.",
    ],
    moment: [
      "{Ce} s'applique sur peau propre, avant de s'habiller, pour limiter les traces sur un tissu clair.",
      "Sa légèreté en fait un format adapté à une application répétée dans la journée, notamment après une transpiration importante.",
    ],
    precaution: [
      "En Algérie, conserver {nom} à l'abri de la chaleur et de la lumière directe : l'alcool contenu dans la formule se dégrade plus vite en cas d'exposition prolongée.",
      "Certaines formules contiennent des agrumes, photosensibilisants au soleil : éviter de vaporiser {nom} juste avant une exposition prolongée en plein soleil.",
    ],
    faq: [
      {
        q: "Quelle différence entre eau de parfum et eau de toilette ?",
        r: "Une eau de toilette contient environ 5 à 15 % de matière parfumante, contre 15 à 20 % pour une eau de parfum. Elle est donc plus légère, tient moins longtemps sur la peau, et se vaporise en général en davantage de pressions pour un résultat perceptible. C'est le format le plus courant pour un usage quotidien.",
      },
      {
        q: "Combien de temps tient un parfum ?",
        r: "Une eau de toilette tient en moyenne trois à cinq heures sur la peau, moins qu'une eau de parfum en raison de sa concentration plus faible. La chaleur, la transpiration et le type de peau font varier cette durée. Une réapplication en milieu de journée est courante avec ce format.",
      },
      {
        q: "Comment conserver son parfum ?",
        r: "À l'abri de la lumière et de la chaleur, loin d'une fenêtre, d'une salle de bain humide ou d'une voiture exposée au soleil. Le flacon fermé et rangé dans son coffret d'origine conserve mieux ses qualités. Une eau de toilette bien stockée se garde plusieurs années sans altération notable.",
      },
    ],
  },

  "brume-parfumee": {
    nature: ["brume parfumée", "brume pour le corps"],
    genre: "f",
    zone: "le corps",
    role: [
      "{nom} est une brume parfumée : sa concentration en matière parfumante reste faible, en général sous les 3 %, la plus basse des formats de parfum.",
      "Cette faible concentration donne à {nom} un parfum discret et une tenue courte, souvent une à deux heures selon la peau.",
      "Une {nature} sert à rafraîchir {zone} dans la journée ou à compléter un parfum déjà appliqué, sans le recouvrir.",
    ],
    geste: [
      "Vaporiser {nom} à bonne distance, trente centimètres environ, en balayant {zone} plutôt qu'en ciblant un seul point.",
      "Marcher dans le nuage de brume juste après la vaporisation répartit le produit de façon homogène sur la peau.",
      "La faible concentration autorise une application généreuse, y compris sur des vêtements légers, sans risque de saturer l'odeur.",
    ],
    moment: [
      "{Ce} s'utilise après la douche, sur peau propre, ou en milieu de journée pour se rafraîchir.",
      "Une brume se réapplique sans excès dans la journée, sa légèreté ne saturant pas la peau comme un format plus concentré.",
    ],
    precaution: [
      "En Algérie, conserver {nom} à l'abri de la chaleur : une brume, souvent formulée à base d'eau, supporte encore moins bien une exposition prolongée à une température élevée qu'un parfum alcoolique.",
      "Certaines formules contiennent des agrumes, photosensibilisants au soleil : éviter de vaporiser {nom} sur une peau qui va rester exposée en plein soleil.",
    ],
    faq: [
      {
        q: "Quelle différence entre eau de parfum et eau de toilette ?",
        r: "Ce sont deux formats plus concentrés qu'une brume parfumée. Une eau de parfum contient 15 à 20 % de matière parfumante, une eau de toilette 5 à 15 %, contre moins de 3 % pour une brume. La brume rafraîchit et complète un parfum, elle ne le remplace pas sur la durée.",
      },
      {
        q: "Combien de temps tient un parfum ?",
        r: "Une brume parfumée tient peu, en général une à deux heures, en raison de sa faible concentration en matière parfumante. C'est un format pensé pour être réappliqué dans la journée plutôt que pour durer comme une eau de parfum. La chaleur accélère encore sa dissipation.",
      },
      {
        q: "Comment conserver son parfum ?",
        r: "À l'abri de la chaleur et de la lumière directe, dans un endroit sec. Une brume à base d'eau se conserve moins longtemps qu'un parfum alcoolique une fois ouverte : mieux vaut l'utiliser dans les mois qui suivent l'achat plutôt que la garder plusieurs années.",
      },
    ],
  },

  "eau-de-cologne": {
    nature: ["eau de cologne", "cologne"],
    genre: "f",
    zone: "le corps et les points de pulsation",
    role: [
      "{nom} est une eau de cologne : sa concentration en matière parfumante se situe en général entre 2 et 5 %, plus basse qu'une eau de toilette.",
      "Historiquement construite autour d'agrumes, {nom} vise une sensation de fraîcheur immédiate plutôt qu'une tenue longue.",
      "Une {nature} convient à un usage fréquent dans la journée du fait de sa légèreté et de sa tenue courte, environ deux heures.",
    ],
    geste: [
      "Vaporiser ou verser {nom} sur {zone}, la concentration légère autorisant une application plus généreuse qu'avec une eau de parfum.",
      "Certaines eaux de cologne se présentent en flacon à verser plutôt qu'à vaporiser : dans ce cas, appliquer directement sur la peau humide sans frotter.",
      "Une réapplication en cours de journée est normale avec {nom}, la tenue courte n'étant pas un défaut de la formule.",
    ],
    moment: [
      "{Ce} s'applique après la douche, sur peau propre, pour une sensation de fraîcheur immédiate.",
      "Sa tenue courte en fait un format adapté à une utilisation répétée, notamment après une activité physique ou en pleine chaleur.",
    ],
    precaution: [
      "En Algérie, conserver {nom} à l'abri de la chaleur et de la lumière : l'alcool et les agrumes qui composent souvent la formule se dégradent plus vite en cas d'exposition prolongée.",
      "La forte présence d'agrumes dans ce format rend la photosensibilisation plus probable qu'avec d'autres parfums : éviter une exposition au soleil juste après l'application.",
    ],
    faq: [
      {
        q: "Quelle différence entre eau de parfum et eau de toilette ?",
        r: "Une eau de cologne est encore plus légère que ces deux formats : 2 à 5 % de matière parfumante, contre 5 à 15 % pour une eau de toilette et 15 à 20 % pour une eau de parfum. Elle privilégie la fraîcheur immédiate à la tenue, avec une odeur qui se dissipe en une à deux heures.",
      },
      {
        q: "Combien de temps tient un parfum ?",
        r: "Une eau de cologne tient environ deux heures sur la peau, sa faible concentration en matière parfumante limitant naturellement sa durée. C'est un format pensé pour être réappliqué plusieurs fois dans la journée, pas pour tenir du matin au soir comme une eau de parfum.",
      },
      {
        q: "Comment conserver son parfum ?",
        r: "À l'abri de la chaleur, de la lumière et des variations de température. Les agrumes qui composent souvent une eau de cologne s'oxydent plus vite qu'une base florale ou boisée : un flacon entamé garde idéalement ses qualités d'origine moins d'un an après ouverture.",
      },
    ],
  },

  "coffret-parfum": {
    nature: ["coffret parfum", "coffret de parfum"],
    genre: "m",
    zone: "le corps",
    role: [
      "{nom} regroupe plusieurs pièces autour d'un même parfum, le plus souvent un format principal, eau de parfum ou eau de toilette, accompagné d'un format miniature ou d'un produit complémentaire pour le corps.",
      "Un {nature} permet de tester un parfum sous plusieurs formats avant de racheter uniquement le flacon qui convient le mieux à l'usage recherché.",
      "{nom} se prête à l'offrande, la présentation en boîte fermée facilitant le transport et la conservation jusqu'à l'ouverture.",
    ],
    geste: [
      "Chaque pièce {ce} s'utilise selon son propre format : le flacon de parfum se vaporise sur les points de pulsation, le produit complémentaire s'applique comme un soin classique sur {zone}.",
      "Ouvrir {nom} et vérifier le contenu avant la première utilisation : la disposition varie d'un coffret à l'autre selon les pièces incluses.",
      "Conserver les éléments non utilisés dans leur emballage d'origine, à l'intérieur du coffret, jusqu'à leur utilisation.",
    ],
    moment: [
      "Le format principal {ce} s'applique comme n'importe quel parfum, sur peau propre et avant de s'habiller.",
      "Le format miniature ou de voyage, plus compact, convient aux déplacements où le flacon principal serait encombrant.",
    ],
    precaution: [
      "En Algérie, conserver {nom} fermé, à l'abri de la chaleur et de la lumière directe, la chaleur estivale altérant l'alcool des différentes pièces qu'il contient.",
      "Vérifier la concentration de chaque pièce avant l'achat : un coffret peut associer une eau de parfum et une eau de toilette de la même ligne, avec des tenues différentes.",
    ],
    faq: [
      {
        q: "Quelle différence entre eau de parfum et eau de toilette ?",
        r: "La différence est la concentration en matière parfumante : 15 à 20 % pour une eau de parfum, 5 à 15 % pour une eau de toilette, avec une tenue plus longue pour la première. Un coffret parfum peut contenir l'un ou l'autre format, parfois les deux : mieux vaut vérifier la fiche de chaque pièce avant l'achat.",
      },
      {
        q: "Combien de temps tient un parfum ?",
        r: "Cela dépend du format inclus dans {le} coffret : une eau de parfum tient cinq à huit heures, une eau de toilette trois à cinq heures. Le produit complémentaire, souvent un soin pour le corps, n'a pas vocation à tenir aussi longtemps que le parfum lui-même.",
      },
      {
        q: "Comment conserver son parfum ?",
        r: "Ranger {nom} fermé, à l'abri de la chaleur et de la lumière, de préférence dans son emballage d'origine. Les pièces non entamées se conservent mieux que celles déjà ouvertes, exposées à l'air et à la lumière à chaque utilisation. Un coffret non ouvert se garde plusieurs années sans problème.",
      },
    ],
  },
};
