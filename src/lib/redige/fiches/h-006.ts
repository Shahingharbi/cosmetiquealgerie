import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "item-alphalight-shampooing-illumination-adoucissement-cheveux-200ml",
    identite: [
      "Alphalight fait partie de la gamme capillaire de la marque de dermo-cosmétique Item, pensée pour les cheveux ternes ou fragilisés qui ont besoin d'un lavage doux plutôt que d'un traitement ciblé sur le cuir chevelu. La base lavante nettoie sans agresser la fibre et laisse les longueurs plus souples au démêlage, avec un effet d'éclat visible dès le séchage. Il s'adresse aux cheveux normaux à ternes, sans problème de cuir chevelu particulier, davantage sur un objectif de confiance et de brillance que sur une pathologie.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Item, ligne capillaire Alpha" },
      { libelle: "Effet recherché", valeur: "Illumination et adoucissement" },
      { libelle: "Usage", valeur: "Shampooing de lavage courant" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en faisant mousser sur les racines puis en laissant glisser la mousse sur les longueurs pour ne pas les alourdir. Un temps de pose de quelques instants avant rinçage suffit à profiter de l'effet adoucissant. Il convient à un usage régulier et se combine bien avec un soin démêlant appliqué sur les pointes après le rinçage.",
    ],
    positionnement: [
      "Face aux shampooings anti-chute ou antipelliculaires de la même marque, Alphalight se distingue en visant un cheveu sans problème identifié, sur un objectif d'esthétique plutôt que de traitement. Il convient moins bien à un cuir chevelu qui pellicule, gratte ou perd ses cheveux de façon marquée, pour lequel une référence ciblée de la même gamme sera plus pertinente.",
    ],
    faq: [
      {
        question: "Ce shampooing peut-il remplacer un shampooing anti-chute ?",
        reponse:
          "Non, il n'est pas formulé pour cet usage. Alphalight vise l'éclat et la douceur d'un cheveu qui n'a pas de problème de cuir chevelu identifié. En cas de chute ou de pelliculaire, une référence Item dédiée à ce besoin est plus indiquée.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse:
          "Le shampooing ne mentionne pas de protection spécifique de la couleur. Sur cheveux colorés, l'effet d'illumination reste intéressant mais un soin capillaire dédié aux cheveux colorés protégera mieux la tenue du pigment dans la durée.",
      },
    ],
  },
  {
    slug: "item-alpharepair-shampooing-reparateur-fortifiant-200ml",
    identite: [
      "Alpharepair est le shampooing réparateur et fortifiant de la gamme Item, destiné aux cheveux affaiblis par la chaleur, la coloration ou une fibre capillaire abîmée dans la longueur. Il nettoie en douceur tout en travaillant sur la résistance du cheveu, avec pour objectif des longueurs qui cassent moins et qui retrouvent une meilleure tenue au coiffage. C'est un shampooing de soin plutôt qu'un shampooing traitant de cuir chevelu : il agit sur la fibre capillaire elle-même, pas sur les racines.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Item, ligne capillaire Alpha" },
      { libelle: "Effet recherché", valeur: "Réparation et fortification de la fibre" },
      { libelle: "Type de cheveux", valeur: "Affaiblis, abîmés" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, sur cheveux mouillés, en insistant sur les longueurs plutôt que sur le cuir chevelu. Sur cheveux très abîmés, il gagne à être suivi d'un masque ou d'un après-shampooing riche pour prolonger l'effet réparateur au-delà du temps de rinçage, qui reste court sur un shampooing.",
    ],
    positionnement: [
      "Par rapport à un shampooing anti-chute qui cible le cuir chevelu, Alpharepair se concentre sur l'état de la fibre dans la longueur, ce qui en fait un choix pertinent après un lissage, une coloration répétée ou une exposition fréquente à la chaleur. Il convient moins bien à un cheveu fin qui a surtout besoin de volume, un shampooing réparateur pouvant alourdir légèrement la racine.",
    ],
    faq: [
      {
        question: "À quelle fréquence l'utiliser sur cheveux très abîmés ?",
        reponse:
          "Un usage à chaque lavage est adapté tant que les cheveux restent fragilisés, en le complétant par un soin sans rinçage sur les pointes. Une fois la fibre visiblement renforcée, il peut être alterné avec un shampooing plus doux pour l'usage courant.",
      },
    ],
  },
  {
    slug: "item-alphacade-shampoing-pso-item-200ml",
    identite: [
      "Alphacade Pso est le shampooing de la gamme Item formulé pour les cuirs chevelus sujets aux plaques, aux squames épaisses et aux tiraillements, le type de terrain que l'on associe au psoriasis du cuir chevelu. Son nom renvoie à l'huile de cade, un actif traditionnellement utilisé sur les cuirs chevelus irrités et squameux pour aider à assainir la zone. C'est un shampooing traitant, pensé pour un cuir chevelu inconfortable et visiblement squameux, pas pour un usage cosmétique courant.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Item, ligne Alpha, usage dermatologique" },
      { libelle: "Cuir chevelu", valeur: "À plaques, squameux, inconfortable" },
      { libelle: "Usage", valeur: "Shampooing traitant ciblé" },
    ],
    usage: [
      "S'applique sur cuir chevelu mouillé, en laissant poser quelques minutes avant de rincer pour laisser le temps à la formule d'agir sur les zones squameuses. Il s'utilise en cure, sur la durée où les plaques sont présentes, plutôt qu'en usage quotidien permanent une fois le cuir chevelu assaini.",
    ],
    positionnement: [
      "Comparé à un shampooing antipelliculaire classique, Alphacade Pso vise un inconfort plus marqué, avec plaques et squames épaisses, pas de simples pellicules fines. Il ne convient pas à un cuir chevelu simplement sec ou terne, pour lequel un shampooing doux suffit ; un cuir chevelu qui reste très irrité malgré la cure mérite un avis dermatologique.",
    ],
    faq: [
      {
        question: "Ce shampooing traite-t-il le psoriasis du cuir chevelu ?",
        reponse:
          "Il aide à limiter l'inconfort et l'aspect squameux du cuir chevelu, mais un cosmétique n'a pas vocation à traiter le psoriasis lui-même. Un diagnostic et un suivi dermatologique restent nécessaires en cas de plaques persistantes ou étendues.",
      },
    ],
  },
  {
    slug: "item-shampoing-alphactif-100ml",
    identite: [
      "Alphactif est le shampooing anti-chute de la gamme Item, conçu pour accompagner un cuir chevelu qui perd ses cheveux de façon inhabituelle, en complément d'un soin anti-chute appliqué sans rinçage. Sa formule lavante douce n'agresse pas un cuir chevelu déjà sensibilisé et prépare le terrain plutôt qu'elle ne le traite à elle seule : dans une routine anti-chute, le shampooing reste un soutien, le traitement principal se jouant ailleurs, en lotion ou en ampoules.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Item, ligne Alpha, anti-chute" },
      { libelle: "Cuir chevelu", valeur: "Sujet à la chute" },
      { libelle: "Format", valeur: "100 ml, format d'appoint ou de découverte" },
    ],
    usage: [
      "S'utilise à chaque lavage, en massant le cuir chevelu pour stimuler la zone sans frotter excessivement, geste à éviter sur un cuir chevelu déjà fragilisé. Il se combine naturellement avec un soin anti-chute sans rinçage de la même gamme, appliqué sur cuir chevelu propre et sec.",
    ],
    positionnement: [
      "Face à un shampooing sébo-régulateur qui cible l'excès de gras, Alphactif se positionne sur la chute en général, sans viser un mécanisme précis. Il convient à qui cherche un shampooing d'accompagnement doux plutôt qu'un traitement à lui seul ; une chute brutale ou localisée mérite un avis médical au-delà du soin cosmétique.",
    ],
    faq: [
      {
        question: "Le format 100 ml suffit-il pour une cure complète ?",
        reponse:
          "C'est un format d'appoint, utile pour tester la routine ou pour un usage nomade, mais une cure anti-chute se compte en semaines de lavages réguliers : un format plus grand est souvent plus économique sur la durée.",
      },
    ],
  },
  {
    slug: "item-shampoing-alphakeptol-ds-200ml",
    identite: [
      "Alphakeptol DS est le shampooing antipelliculaire de la gamme Item, dont le sigle DS renvoie aux cuirs chevelus sujets à la dermite séborrhéique : rougeurs, sensation de tiraillement et pellicules grasses associées à un cuir chevelu réactif. Il vise donc un pelliculaire plus inconfortable que de simples pellicules sèches, avec un objectif d'apaisement du cuir chevelu en plus de l'effet antipelliculaire proprement dit.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Item, ligne Alpha, antipelliculaire" },
      { libelle: "Cuir chevelu", valeur: "Sujet à la dermite séborrhéique" },
      { libelle: "Usage", valeur: "Shampooing traitant, deux à trois fois par semaine" },
    ],
    usage: [
      "S'applique sur cuir chevelu mouillé, en laissant poser quelques minutes avant de rincer pour laisser agir la formule sur les zones squameuses et rouges. Un usage de deux à trois fois par semaine est en général suffisant ; un lavage quotidien peut être complété par un shampooing doux les autres jours.",
    ],
    positionnement: [
      "Comparé à Alphacade, plus orienté sur les plaques épaisses, Alphakeptol DS cible un pelliculaire associé à des rougeurs et à un cuir chevelu réactif. Il convient moins bien à un cuir chevelu simplement sec sans rougeur, pour lequel un shampooing doux hydratant sera mieux toléré.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Un usage quotidien n'est pas nécessaire dans la plupart des cas : deux à trois lavages par semaine suffisent en général à contrôler les pellicules et les rougeurs, en alternance avec un shampooing doux le reste de la semaine.",
      },
    ],
  },
  {
    slug: "jumiso-antioxydant-glow-facial-essence-intensive-radiance-40ml",
    identite: [
      "Cette essence de Jumiso vise l'éclat du teint par un apport d'antioxydants en texture légère, à mi-chemin entre la lotion et le sérum, typique des routines de soin coréennes. Elle s'applique après le nettoyage pour préparer la peau à mieux recevoir les soins suivants, tout en travaillant sur l'aspect terne et fatigué du teint. Le format essence permet une application en plusieurs couches sans effet lourd, ce qui la rend adaptée à une utilisation matin et soir.",
    ],
    faits: [
      { libelle: "Format", valeur: "Essence, texture fluide" },
      { libelle: "Effet recherché", valeur: "Éclat, action antioxydante" },
      { libelle: "Type de peau", valeur: "Toutes peaux, teint terne" },
    ],
    usage: [
      "S'applique sur peau nettoyée, en tapotant plusieurs fines couches avec les paumes plutôt qu'en frottant, méthode classique des essences coréennes. Elle précède le sérum et la crème dans l'ordre de la routine et se combine bien avec une protection solaire le matin pour prolonger l'effet antioxydant dans la journée.",
    ],
    positionnement: [
      "Face à un sérum concentré, l'essence apporte une hydratation et un effet antioxydant plus légers, en étape préparatoire plutôt qu'en traitement ciblé. Elle convient à qui construit une routine en plusieurs étapes ; pour une routine minimaliste, un sérum unique plus concentré peut suffire sans essence intermédiaire.",
    ],
    faq: [
      {
        question: "Une essence remplace-t-elle un sérum ?",
        reponse:
          "Non, elle joue un rôle différent : elle prépare la peau et apporte une première dose d'hydratation et d'antioxydants, tandis que le sérum reste l'étape la plus concentrée en actifs ciblés. Les deux se complètent dans une routine coréenne classique.",
      },
    ],
  },
  {
    slug: "jumiso-nettoyant-moussant-purifiant-pores-lacide-salicylique-120g",
    identite: [
      "Ce nettoyant moussant de Jumiso associe l'acide salicylique, un actif reconnu pour son affinité avec le sébum, à une base moussante pensée pour ne pas dessécher la peau. Il vise les peaux à pores marqués ou sujettes aux imperfections, avec un nettoyage qui aide à limiter l'accumulation de sébum et d'impuretés au fil des lavages, sans viser une action agressive de décapage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide salicylique" },
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Type de peau", valeur: "Mixte à grasse, pores marqués" },
    ],
    usage: [
      "S'utilise matin et soir sur peau humide, en massant délicatement puis en rinçant à l'eau tiède. Sur peau sensible, un usage le soir uniquement limite le risque de tiraillement, surtout en association avec d'autres actifs exfoliants utilisés par ailleurs dans la routine.",
    ],
    positionnement: [
      "Face à un nettoyant doux sans actif, celui-ci apporte un vrai geste de purification utile sur peau à pores marqués ou à tendance grasse. Il convient moins bien à une peau sèche ou très réactive, pour laquelle un nettoyant sans acide salicylique évitera un dessèchement inutile.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser avec un sérum au rétinol le soir ?",
        reponse:
          "L'association est possible mais demande de la prudence : deux actifs exfoliants ou renouvelants cumulés peuvent irriter une peau non habituée. Il est plus prudent de les alterner certains soirs plutôt que de les superposer systématiquement.",
      },
    ],
  },
  {
    slug: "jumiso-niacinamide-20-serum-40ml",
    identite: [
      "Ce sérum de Jumiso met en avant une forte concentration en niacinamide, un actif recherché pour aider à uniformiser l'aspect du teint et à limiter la brillance sur peau mixte à grasse. À ce niveau de concentration, il s'adresse à une peau déjà habituée à la niacinamide plutôt qu'à une première utilisation, pour éviter l'effet de picotement que peuvent ressentir certaines peaux sensibles sur les fortes concentrations.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide à forte concentration" },
      { libelle: "Texture", valeur: "Sérum fluide" },
      { libelle: "Type de peau", valeur: "Mixte à grasse" },
    ],
    usage: [
      "S'applique sur peau nettoyée, avant la crème, matin ou soir. Sur une peau qui découvre la niacinamide, mieux vaut commencer par une application tous les deux jours pour évaluer la tolérance avant de passer à un usage quotidien.",
    ],
    positionnement: [
      "Comparé à une niacinamide à faible concentration, ce sérum vise un résultat plus marqué sur les peaux qui tolèrent bien l'actif, notamment contre les pores dilatés et la brillance. Il convient moins bien à une peau sèche ou très réactive découvrant tout juste cet actif, pour laquelle une concentration plus basse est plus prudente.",
    ],
    faq: [
      {
        question: "Faut-il craindre des picotements avec une concentration aussi élevée ?",
        reponse:
          "Certaines peaux sensibles peuvent ressentir un léger picotement au début, surtout sans accoutumance préalable à la niacinamide. Un test sur une petite zone et une introduction progressive limitent ce risque.",
      },
    ],
  },
  {
    slug: "jumiso-snail-mucin-95-peptide-facial-essence-140ml",
    identite: [
      "Cette essence de Jumiso associe une forte proportion de mucine d'escargot à des peptides, une combinaison classique du soin coréen pour apaiser une peau irritée et soutenir son aspect réparé. La mucine d'escargot est reconnue dans la cosmétique coréenne pour sa texture filante et son effet apaisant immédiat, tandis que les peptides accompagnent l'aspect de fermeté de la peau dans la durée. Le grand format en fait un produit pensé pour un usage quotidien prolongé.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Mucine d'escargot, peptides" },
      { libelle: "Texture", valeur: "Essence filante" },
      { libelle: "Type de peau", valeur: "Peaux sensibilisées, en quête d'apaisement" },
    ],
    usage: [
      "S'applique en tapotant sur peau nettoyée, avant le sérum et la crème. Elle peut aussi s'utiliser en couches successives sur les zones les plus tiraillées, méthode fréquente dans les routines coréennes pour renforcer l'effet apaisant sans alourdir la peau.",
    ],
    positionnement: [
      "Face à une crème riche classique, cette essence apporte un apaisement plus immédiat en texture légère, adaptée aux climats chauds où une crème dense est moins agréable. Elle convient moins bien à une peau qui cherche surtout une action anti-âge marquée, pour laquelle un sérum plus ciblé sera plus pertinent.",
    ],
    faq: [
      {
        question: "La mucine d'escargot convient-elle aux peaux à tendance acnéique ?",
        reponse:
          "Elle est généralement bien tolérée car non comédogène dans la plupart des cas, mais chaque peau réagit différemment. Un test sur une petite zone reste recommandé avant une application sur l'ensemble du visage.",
      },
    ],
  },
  {
    slug: "k18-leave-in-molecular-repair-hair-mask-reparation-moleculaire-1-50ml",
    identite: [
      "Le masque sans rinçage K18 s'appuie sur un complexe de peptides bio-actifs breveté par la marque, conçu pour reconstituer les liaisons internes de la fibre capillaire abîmée par la coloration, la décoloration ou les outils chauffants. Contrairement à un soin qui se contente de lisser la surface du cheveu, K18 revendique une action à l'intérieur de la fibre, en quatre minutes de pose, sans rinçage. C'est une référence installée dans les salons professionnels avant d'arriver en vente directe.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe peptidique K18Peptide" },
      { libelle: "Temps de pose", valeur: "Environ quatre minutes" },
      { libelle: "Usage", valeur: "Sans rinçage, après le shampooing" },
    ],
    usage: [
      "S'applique sur cheveux essorés après le shampooing, en répartissant sur les longueurs et pointes, puis se laisse poser environ quatre minutes avant l'après-shampooing ou le soin coiffant habituel, sans rinçage intermédiaire. Il peut aussi s'utiliser en soin ponctuel juste après une coloration ou une décoloration en institut.",
    ],
    positionnement: [
      "Face à un masque capillaire classique qui reste en surface de la fibre, K18 se distingue par une action revendiquée sur la structure interne du cheveu, ce qui le rend particulièrement pertinent après un traitement chimique agressif. Il convient moins bien à un cheveu simplement terne sans dommage réel, pour lequel un masque hydratant classique suffit largement.",
    ],
    faq: [
      {
        question: "Faut-il rincer ce masque après les quatre minutes de pose ?",
        reponse:
          "Non, c'est un soin sans rinçage : après le temps de pose, on passe directement à l'après-shampooing ou au soin coiffant habituel, sans repasser sous l'eau. Le rinçage neutraliserait l'intérêt du format leave-in.",
      },
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "Une à deux fois par semaine suffit pour un entretien régulier, avec un usage plus fréquent juste après une coloration ou une décoloration si le cheveu est particulièrement fragilisé sur cette période.",
      },
    ],
  },
  {
    slug: "k18-airwash-dry-shampoo-118ml",
    identite: [
      "Airwash est le shampooing sec de K18, qui va au-delà de l'absorption d'excès de sébum classique des shampooings secs en intégrant le même type de complexe peptidique que la gamme de réparation de la marque. L'idée est de prolonger la propreté visuelle des racines entre deux lavages tout en prenant soin de la fibre, plutôt que de simplement masquer le gras avec une poudre absorbante.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray sec, sans rinçage" },
      { libelle: "Effet recherché", valeur: "Racines fraîches, soin de la fibre" },
      { libelle: "Gamme", valeur: "K18" },
    ],
    usage: [
      "Se vaporise à environ 15 centimètres des racines, sur cheveux secs, puis se masse du bout des doigts pour répartir la poudre et redonner du volume. Il s'utilise entre deux shampooings, idéalement la veille ou le matin même, en évitant les excès qui peuvent laisser un voile visible sur cheveux foncés.",
    ],
    positionnement: [
      "Face à un shampooing sec classique, Airwash ajoute un argument de soin de la fibre en plus de l'absorption du sébum, ce qui l'inscrit dans une logique d'entretien plutôt que de simple dépannage visuel. Il convient moins bien à qui cherche uniquement un volume racine sans considération de soin, un shampooing sec basique répondant alors tout aussi bien au besoin.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur cheveux foncés sans laisser de trace ?",
        reponse:
          "Comme la plupart des shampooings secs, un excès de produit peut laisser un léger voile sur cheveux très foncés. Il est préférable de vaporiser par petites quantités et de bien masser pour répartir la poudre avant d'en rajouter si besoin.",
      },
    ],
  },
  {
    slug: "k18-masque-capilaire-50ml",
    identite: [
      "Ce format de 50 ml reprend le masque sans rinçage K18, bâti sur le complexe peptidique propre à la marque pour agir sur les liaisons internes du cheveu abîmé. Il s'adresse aux mêmes cheveux fragilisés par la coloration, la décoloration ou la chaleur, dans un format pensé pour un usage régulier à la maison, en complément d'un passage en institut ou en remplacement pour qui n'y a pas accès.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe peptidique K18Peptide" },
      { libelle: "Format", valeur: "50 ml, usage régulier à domicile" },
      { libelle: "Usage", valeur: "Sans rinçage, après le shampooing" },
    ],
    usage: [
      "S'applique sur cheveux essorés après le shampooing, en répartissant sur longueurs et pointes, avec un temps de pose d'environ quatre minutes avant l'après-shampooing habituel, sans rinçage entre les deux étapes.",
    ],
    positionnement: [
      "Le format 50 ml convient à un usage régulier sur plusieurs semaines, contrairement à un format voyage pensé pour un usage ponctuel. Il reste moins pertinent sur un cheveu qui n'a pas subi de traitement chimique ou thermique marqué, pour lequel un masque hydratant classique suffit.",
    ],
    faq: [
      {
        question: "Ce format suffit-il pour un usage hebdomadaire sur plusieurs mois ?",
        reponse:
          "À raison d'une à deux applications par semaine, ce format tient plusieurs semaines d'usage régulier. La fréquence exacte dépend de la longueur des cheveux et de la quantité appliquée à chaque fois.",
      },
    ],
  },
  {
    slug: "k18-masque-capillaire-15ml",
    identite: [
      "Ce format de 15 ml correspond au masque sans rinçage K18 en version voyage ou découverte, avec le même complexe peptidique que les formats plus grands de la gamme. Il permet de tester le soin ou de l'emporter en déplacement, pour un ou deux usages, sans engager l'achat d'un format complet.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe peptidique K18Peptide" },
      { libelle: "Format", valeur: "15 ml, format découverte ou voyage" },
      { libelle: "Usage", valeur: "Sans rinçage, après le shampooing" },
    ],
    usage: [
      "S'applique sur cheveux essorés après le shampooing, en quantité adaptée à la longueur des cheveux, avec un temps de pose d'environ quatre minutes avant l'après-shampooing, sans rinçage intermédiaire.",
    ],
    positionnement: [
      "Ce petit format est utile pour découvrir le soin avant d'investir dans un format plus grand, ou pour l'emporter en voyage. Il convient moins bien à un usage régulier sur la durée, pour lequel le format 50 ml est plus économique à l'usage.",
    ],
    faq: [
      {
        question: "Ce format permet-il de juger de l'efficacité du soin ?",
        reponse:
          "Un ou deux usages donnent déjà une idée de la texture et du toucher obtenu sur les longueurs, mais l'effet réparateur revendiqué par la marque se juge davantage sur un usage répété dans la durée.",
      },
    ],
  },
  {
    slug: "karseell-masque-original-500ml",
    identite: [
      "Ce masque capillaire de Karseell se présente en grand format et met en avant sa teneur en collagène dans son argumentaire, un ingrédient associé à la douceur et à la souplesse du cheveu. Il vise un usage régulier sur cheveux qui manquent de brillance ou de souplesse au toucher, dans une logique de soin d'entretien plutôt que de traitement réparateur ciblé sur un dommage précis.",
    ],
    faits: [
      { libelle: "Actif mis en avant", valeur: "Collagène" },
      { libelle: "Format", valeur: "500 ml, grand format" },
      { libelle: "Usage", valeur: "Masque avec rinçage" },
    ],
    usage: [
      "S'applique sur cheveux lavés et essorés, en répartissant sur les longueurs et pointes, avec un temps de pose de quelques minutes avant rinçage à l'eau tiède. Le grand format permet un usage fréquent sans compter, à raison d'une à deux fois par semaine selon le besoin des longueurs.",
    ],
    positionnement: [
      "Comparé à un masque plus technique comme ceux à base de peptides, celui-ci se positionne sur un usage d'entretien courant, à un format généreux pensé pour durer. Il convient moins bien à un cheveu très abîmé par la chimie, pour lequel un soin plus ciblé donnera un résultat plus net sur la fibre.",
    ],
    faq: [
      {
        question: "Ce masque remplace-t-il l'après-shampooing quotidien ?",
        reponse:
          "Il peut s'utiliser à la place de l'après-shampooing certains jours, mais son usage type reste hebdomadaire pour un effet de soin plus marqué, en alternance avec un après-shampooing plus léger au quotidien.",
      },
    ],
  },
  {
    slug: "karseell-traitement-capillaire-collagene-cheveux-secs-abimes-500ml",
    identite: [
      "Cette version du masque Karseell associe le collagène mis en avant par la marque à de l'huile d'argan, dans un format spécifiquement destiné aux cheveux secs et abîmés. L'ajout d'huile d'argan renforce l'argument nourrissant, utile sur des longueurs déshydratées par la chaleur, le soleil ou des lavages fréquents, avec un objectif de souplesse et de brillance retrouvées au toucher.",
    ],
    faits: [
      { libelle: "Actif mis en avant", valeur: "Collagène et huile d'argan" },
      { libelle: "Type de cheveux", valeur: "Secs et abîmés" },
      { libelle: "Format", valeur: "500 ml" },
    ],
    usage: [
      "S'applique sur cheveux lavés et essorés, en insistant sur les longueurs et les pointes plus sèches, avec un temps de pose de quelques minutes avant rinçage. Un usage hebdomadaire régulier aide à maintenir la souplesse sur cheveux durablement déshydratés.",
    ],
    positionnement: [
      "Face au masque original de la même marque, cette version cible plus spécifiquement la sécheresse grâce à l'huile d'argan, ce qui la rend plus pertinente sur cheveux très secs. Elle convient moins bien à un cheveu fin qui a tendance à regraisser vite, l'huile pouvant alourdir la racine si elle est appliquée trop près du cuir chevelu.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sur les racines ?",
        reponse:
          "Il est préférable de le réserver aux longueurs et pointes, zones les plus sèches, et d'éviter les racines pour ne pas alourdir inutilement le cuir chevelu, surtout sur cheveux fins ou à tendance grasse à la racine.",
      },
    ],
  },
  {
    slug: "ksecret-creme-seoul-1988-cream-snail-mucin-93-rice",
    identite: [
      "Cette crème de la ligne Seoul 1988 de KSecret associe une forte proportion de mucine d'escargot à du riz, un actif traditionnellement utilisé en cosmétique coréenne pour son effet éclaircissant et adoucissant sur le teint. La texture crème, plus riche qu'une essence, convient à une hydratation quotidienne avec un objectif combiné d'apaisement et d'éclat, dans l'esprit des soins coréens qui misent sur des ingrédients fermentés ou naturels à forte concentration.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Mucine d'escargot 93 %, riz" },
      { libelle: "Texture", valeur: "Crème" },
      { libelle: "Type de peau", valeur: "Toutes peaux, en quête d'éclat et d'apaisement" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin ou du soir, sur peau nettoyée et après le sérum, en quantité suffisante pour couvrir l'ensemble du visage. Elle peut aussi s'utiliser en couche plus épaisse le soir sur les zones les plus sèches ou tiraillées.",
    ],
    positionnement: [
      "Face à une essence plus légère, cette crème apporte une hydratation plus durable, adaptée aux peaux normales à sèches ou aux climats plus secs. Elle convient moins bien à une peau très grasse en climat chaud, pour laquelle une texture plus fluide sera plus confortable au quotidien.",
    ],
    faq: [
      {
        question: "Le riz a-t-il un effet éclaircissant sur les taches ?",
        reponse:
          "Le riz est traditionnellement associé à un effet d'éclat sur le teint dans la cosmétique coréenne, mais il n'a pas vocation à traiter des taches pigmentaires établies. Sur ce point, l'effet reste une amélioration visuelle de l'aspect du teint plutôt qu'un traitement ciblé.",
      },
    ],
  },
  {
    slug: "ksecret-seoul-1988-serum-retinal-liposome-2-black-ginseng-30ml",
    identite: [
      "Ce sérum de KSecret associe le rétinal, une forme de rétinoïde considérée comme plus active que le rétinol classique à concentration égale, à un système liposomal pour en faciliter la pénétration, ainsi qu'au ginseng noir. C'est un soin destiné aux peaux déjà habituées aux rétinoïdes, cherchant un effet sur les signes de l'âge et la texture de la peau, à réserver à un usage du soir accompagné d'une protection solaire le lendemain.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Rétinal liposomé 2 %, ginseng noir" },
      { libelle: "Texture", valeur: "Sérum" },
      { libelle: "Usage", valeur: "Application du soir uniquement" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée et sèche, en petite quantité, en évitant le contour des yeux. Une protection solaire quotidienne est indispensable en journée pendant toute la durée d'utilisation, la peau étant plus sensible au soleil sous rétinoïde.",
    ],
    positionnement: [
      "Face à un sérum au rétinol classique, le rétinal est en général considéré comme plus rapide à agir à concentration comparable, ce qui en fait un choix pour une peau déjà accoutumée aux rétinoïdes. Il ne convient pas à une première utilisation de rétinoïde ni à une peau réactive, pour lesquelles un rétinol à faible concentration reste plus prudent.",
    ],
    faq: [
      {
        question: "Peut-on commencer directement par ce sérum si l'on n'a jamais utilisé de rétinoïde ?",
        reponse:
          "Ce n'est pas recommandé. Une peau qui découvre les rétinoïdes gagne à commencer par un rétinol à faible concentration, en usage progressif, avant d'envisager une forme plus active comme le rétinal.",
      },
      {
        question: "Ce sérum peut-il s'utiliser avec un exfoliant acide ?",
        reponse:
          "Il est préférable de ne pas les appliquer le même soir pour limiter le risque d'irritation, deux actifs renouvelants cumulés étant plus agressifs pour la barrière cutanée. Une alternance sur des soirs différents est plus prudente.",
      },
    ],
  },
  {
    slug: "ksecret-seoul-1988-sun-cre-pine-tree-ceramide",
    identite: [
      "Cette crème solaire de la ligne Seoul 1988 de KSecret associe un extrait de pin à des céramides, ces dernières étant recherchées pour soutenir la barrière cutanée pendant l'exposition au soleil. Le format s'inscrit dans la tradition des écrans solaires coréens, à texture légère et facilement absorbée, pensée pour un usage quotidien sous maquillage sans laisser de film gras ni de traces blanches.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 50" },
      { libelle: "Actif complémentaire", valeur: "Céramides, extrait de pin" },
      { libelle: "Texture", valeur: "Fluide, légère" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, en quantité généreuse sur l'ensemble du visage et du cou, à renouveler en cas d'exposition prolongée. Elle peut se porter seule ou sous maquillage grâce à sa texture non grasse.",
    ],
    positionnement: [
      "Face à une crème solaire épaisse plus classique, celle-ci se distingue par une texture typiquement coréenne, plus légère et plus agréable au quotidien, y compris sous maquillage. Elle convient moins bien à qui cherche une texture très couvrante ou teintée, pour laquelle une formule occidentale plus riche sera parfois préférée.",
    ],
    faq: [
      {
        question: "Cette crème solaire laisse-t-elle un film blanc ?",
        reponse:
          "Les écrans solaires coréens sont en général formulés pour s'absorber sans laisser de trace blanche visible, à la différence de certains filtres minéraux occidentaux plus épais. Le rendu reste à confirmer selon la carnation et la quantité appliquée.",
      },
    ],
  },
  {
    slug: "laformul-creme-ultra-hydratante-b5",
    identite: [
      "Cette crème de Laformul met en avant la vitamine B5, le panthénol, reconnu pour son effet apaisant et hydratant sur une peau qui tiraille. Elle vise un usage quotidien sur peau sèche à très sèche, avec une texture pensée pour combler la sensation d'inconfort plutôt que pour cibler un problème spécifique comme les rides ou les taches. C'est une crème de soin de base, pas un traitement ciblé.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Panthénol (vitamine B5)" },
      { libelle: "Type de peau", valeur: "Sèche à très sèche" },
      { libelle: "Usage", valeur: "Hydratation quotidienne" },
    ],
    usage: [
      "S'applique matin et soir sur peau nettoyée, en couche généreuse sur les zones qui tiraillent le plus. Elle peut aussi s'utiliser en soin d'appoint sur les zones sèches du corps, pas uniquement sur le visage, selon la sensation de tiraillement ressentie.",
    ],
    positionnement: [
      "Face à une crème anti-âge ou éclaircissante, celle-ci reste centrée sur le confort et l'hydratation, sans revendication ciblée sur les rides ou les taches. Elle convient bien à une peau sèche cherchant un soin simple, mais moins à une peau mixte à grasse pour laquelle une texture plus légère est préférable.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle en cas de peau très réactive ?",
        reponse:
          "Le panthénol est généralement bien toléré, y compris sur peau sensible, car il est reconnu pour son effet apaisant plutôt qu'irritant. Un test sur une petite zone reste toutefois recommandé en cas de peau très réactive ou allergique.",
      },
    ],
  },
  {
    slug: "laformul-emulsion-ultra-apaisante-reparatrice",
    identite: [
      "Cette émulsion de Laformul cible les peaux inconfortables, tiraillées ou irritées, avec un objectif d'apaisement immédiat et de soutien de la barrière cutanée dans la durée. La texture émulsion, plus fluide qu'une crème riche, convient à une application fréquente sans effet collant, utile sur une peau qui réagit facilement au froid, au vent ou à un soin trop actif utilisé par ailleurs.",
    ],
    faits: [
      { libelle: "Effet recherché", valeur: "Apaisement et réparation de la barrière cutanée" },
      { libelle: "Texture", valeur: "Émulsion fluide" },
      { libelle: "Type de peau", valeur: "Sensible, irritée" },
    ],
    usage: [
      "S'applique aussi souvent que nécessaire sur les zones inconfortables, matin et soir en usage régulier, ou en soin ponctuel après une exposition au froid, au vent ou à un actif exfoliant mal toléré la veille.",
    ],
    positionnement: [
      "Face à une crème riche classique, cette émulsion apporte un apaisement rapide sans texture lourde, ce qui la rend pratique en usage fréquent sur une peau réactive. Elle convient moins bien à une peau très sèche qui a besoin d'un soin occlusif plus riche pour tenir la journée.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser après un soin exfoliant qui a irrité la peau ?",
        reponse:
          "Oui, c'est un usage pertinent : elle aide à apaiser une peau qui réagit après un actif exfoliant ou renouvelant trop fort, le temps que la barrière cutanée retrouve son confort habituel.",
      },
    ],
  },
  {
    slug: "laformul-gel-nettoyant-anti-imperfection-aha-180ml",
    identite: [
      "Ce gel nettoyant de Laformul associe un nettoyage moussant à des AHA, des acides exfoliants qui agissent en surface de la peau pour aider à limiter l'aspect des imperfections et affiner le grain de peau au fil des lavages. Il s'adresse aux peaux à tendance grasse ou à imperfections qui tolèrent bien les acides exfoliants, avec un usage qui reste un nettoyant plutôt qu'un soin exfoliant à part entière laissé en pose.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA (acides de fruits)" },
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Type de peau", valeur: "Grasse, à imperfections" },
    ],
    usage: [
      "S'utilise matin et/ou soir sur peau humide, en massant délicatement puis en rinçant à l'eau tiède, sans laisser poser. Sur peau sensible ou en cas d'usage d'un autre exfoliant dans la routine, un usage un soir sur deux limite le risque d'irritation.",
    ],
    positionnement: [
      "Face à un gel nettoyant neutre, celui-ci apporte un vrai geste exfoliant en plus du nettoyage, utile sur peau à imperfections qui supporte les acides. Il convient moins bien à une peau sèche ou très réactive, pour laquelle un nettoyant sans acide sera mieux toléré au quotidien.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Un usage quotidien est possible sur une peau qui tolère bien les AHA, mais en cas de tiraillement ou de sensibilité accrue au soleil, il est préférable de réduire à un usage un jour sur deux et de renforcer la protection solaire en journée.",
      },
    ],
  },
  {
    slug: "lea-nature-so-bio-mascara-courbe-audacieuse-noir",
    identite: [
      "Ce mascara noir de la ligne So Bio de Léa Nature s'inscrit dans une démarche de cosmétique certifiée biologique, avec une brosse pensée pour recourber les cils et donner du volume sans agglomérer. Il vise un effet de regard ouvert et structuré, dans un format classique de mascara du quotidien, pour qui recherche une alternative certifiée bio aux mascaras conventionnels sans renoncer à la tenue.",
    ],
    faits: [
      { libelle: "Teinte", valeur: "Noir" },
      { libelle: "Effet recherché", valeur: "Courbe et volume des cils" },
      { libelle: "Gamme", valeur: "So Bio, Léa Nature, certifié biologique" },
    ],
    usage: [
      "S'applique de la base à la pointe des cils, en zigzaguant légèrement la brosse pour bien séparer et volumiser sans paquets. Une seconde couche sur les cils encore légèrement humides renforce l'effet de courbe sans les alourdir.",
    ],
    positionnement: [
      "Face à un mascara conventionnel waterproof, celui-ci mise sur une formule certifiée biologique, un argument qui compte pour une clientèle attentive à la composition. Il convient moins bien à un usage en climat très humide ou pour une tenue longue journée exigeante, où un mascara waterproof résistera mieux.",
    ],
    faq: [
      {
        question: "Ce mascara est-il waterproof ?",
        reponse:
          "Rien n'indique une formule waterproof : c'est un mascara classique pensé pour la courbe et le volume au quotidien. En cas de forte chaleur ou d'humidité, sa tenue sera moins résistante qu'une version waterproof dédiée.",
      },
    ],
  },
  {
    slug: "lovryc-woman-wave-epilation-douce-precise-3-lames",
    identite: [
      "Woman Wave est un rasoir pour femme de la marque Lov'yc, équipé de trois lames pour un rasage précis sur les zones sensibles du corps. Sa conception vise un passage doux sur la peau, avec une bande lubrifiante qui limite les tiraillements, dans un format pensé pour un usage régulier sur jambes, aisselles ou zone bikini selon la finesse de la tête de rasage.",
    ],
    faits: [
      { libelle: "Nombre de lames", valeur: "3" },
      { libelle: "Usage", valeur: "Rasage du corps, zones sensibles" },
      { libelle: "Gamme", valeur: "Lov'yc, ligne Woman" },
    ],
    usage: [
      "S'utilise sur peau mouillée, idéalement après quelques minutes sous la douche pour assouplir le poil, avec un gel ou une mousse de rasage pour limiter les irritations. Un rinçage de la tête entre chaque passage prolonge la précision de la coupe.",
    ],
    positionnement: [
      "Face à un rasoir jetable basique à une ou deux lames, ce modèle à trois lames offre un rasage plus précis et plus confortable sur la durée. Il convient moins bien à qui cherche une solution d'épilation longue durée, un rasoir n'agissant que sur la partie visible du poil.",
    ],
    faq: [
      {
        question: "Ce rasoir convient-il à la zone bikini ?",
        reponse:
          "Sa conception à trois lames et sa bande lubrifiante le rendent adapté aux zones sensibles, en veillant à raser dans le sens de la pousse du poil pour limiter le risque d'irritation ou de poils incarnés sur cette zone particulière.",
      },
    ],
  },
  {
    slug: "lovyc-woman-kiss-epilation-douce-4-cartouches",
    identite: [
      "Ce lot de quatre cartouches Woman Kiss de Lov'yc est destiné au renouvellement des têtes de rasoir de la même gamme, pour un rasage doux et précis sur le corps. L'intérêt du lot est de garantir une lame toujours nette, condition importante pour un rasage confortable et pour limiter le risque d'irritation lié à une lame émoussée.",
    ],
    faits: [
      { libelle: "Contenu", valeur: "4 cartouches de rechange" },
      { libelle: "Compatibilité", valeur: "Manche Woman Kiss, Lov'yc" },
      { libelle: "Usage", valeur: "Rasage du corps" },
    ],
    usage: [
      "Se clipse sur le manche Woman Kiss en remplacement de la cartouche usagée. Il est conseillé de changer de cartouche dès que le rasage devient moins net ou tire sur la peau, en général après plusieurs utilisations selon la fréquence de rasage.",
    ],
    positionnement: [
      "Face à l'achat répété d'un rasoir jetable complet, ce lot de cartouches revient à renouveler uniquement la partie qui s'use, en gardant le même manche. Il ne convient qu'aux personnes déjà équipées du manche Woman Kiss, les cartouches n'étant pas universelles.",
    ],
    faq: [
      {
        question: "Ces cartouches sont-elles compatibles avec d'autres manches Lov'yc ?",
        reponse:
          "Elles sont conçues pour le manche Woman Kiss. Une compatibilité avec un autre modèle de la marque n'est pas garantie, mieux vaut vérifier la référence du manche possédé avant l'achat.",
      },
    ],
  },
  {
    slug: "lovyc-woman-kiss-rasage-doux-precis-non-visible",
    identite: [
      "Ce rasoir Woman Kiss de Lov'yc mise sur un rasage doux et précis avec une tête conçue pour rester discrète, la mention non visible renvoyant à un design de lame protégée qui limite le risque de coupure au contact direct. Il s'adresse à un usage courant sur le corps, dans une gamme pensée spécifiquement pour la peau féminine.",
    ],
    faits: [
      { libelle: "Conception", valeur: "Tête de lame protégée" },
      { libelle: "Usage", valeur: "Rasage du corps" },
      { libelle: "Gamme", valeur: "Lov'yc, ligne Woman Kiss" },
    ],
    usage: [
      "S'utilise sur peau mouillée, avec un gel ou une mousse de rasage, en passant la lame dans le sens de la pousse du poil pour un résultat plus doux. Un rinçage régulier de la tête maintient la précision de la coupe pendant toute la durée du rasage.",
    ],
    positionnement: [
      "Face à un rasoir classique à lame apparente, la conception protégée de ce modèle réduit le risque de petite coupure, un argument pour une utilisation rapide ou sur une peau qui marque facilement. Il convient moins bien à qui recherche un rasage très ras en une seule passe, la protection de la lame pouvant légèrement limiter cet effet.",
    ],
    faq: [
      {
        question: "Ce rasoir réduit-il vraiment le risque de coupure ?",
        reponse:
          "La conception de la tête vise à limiter le contact direct avec le tranchant, ce qui réduit le risque par rapport à une lame classique exposée. Cela n'élimine pas totalement le risque en cas de pression excessive ou de passage sur une peau très irrégulière.",
      },
    ],
  },
  {
    slug: "lovyc-woman-vibe-rasage-doux-precis",
    identite: [
      "Woman Vibe est un rasoir de Lov'yc dont le nom évoque une fonction vibrante, pensée pour assouplir légèrement le passage de la lame sur la peau et faciliter un rasage plus doux. Il s'adresse à un usage régulier sur le corps, dans la même logique de confort que le reste de la gamme Woman de la marque.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Vibration au passage de la lame" },
      { libelle: "Usage", valeur: "Rasage du corps" },
      { libelle: "Gamme", valeur: "Lov'yc, ligne Woman Vibe" },
    ],
    usage: [
      "S'utilise sur peau mouillée, avec un gel de rasage, en activant la fonction vibrante avant de passer la lame sur la zone à traiter. Le remplacement des piles ou la recharge, selon le modèle, conditionne le bon fonctionnement de cette fonction dans la durée.",
    ],
    positionnement: [
      "Face à un rasoir manuel classique, la fonction vibrante ajoute un argument de confort supplémentaire, utile pour une peau sensible aux irritations de rasage. Il convient moins bien à qui préfère un rasoir simple sans pile ni entretien supplémentaire.",
    ],
    faq: [
      {
        question: "Le rasoir fonctionne-t-il sans pile ?",
        reponse:
          "La fonction vibrante nécessite une alimentation, généralement par pile selon le modèle. Sans pile ou avec une pile déchargée, le rasoir reste utilisable comme un rasoir manuel classique, simplement sans l'effet vibrant.",
      },
    ],
  },
  {
    slug: "lovyc-woman-vibe-rasage-doux-precis-3-lames",
    identite: [
      "Cette version à trois lames du rasoir Woman Vibe de Lov'yc combine la fonction vibrante de la gamme à une tête à trois lames pour un rasage plus précis en un seul passage. Elle s'adresse à un usage régulier sur le corps, pour qui cherche à la fois le confort de la vibration et l'efficacité d'une tête multi-lames.",
    ],
    faits: [
      { libelle: "Nombre de lames", valeur: "3" },
      { libelle: "Fonction", valeur: "Vibration au passage de la lame" },
      { libelle: "Gamme", valeur: "Lov'yc, ligne Woman Vibe" },
    ],
    usage: [
      "S'utilise sur peau mouillée avec un gel de rasage, fonction vibrante activée, en un ou deux passages selon la densité du poil. Un rinçage régulier de la tête entre les passages maintient l'efficacité des trois lames.",
    ],
    positionnement: [
      "Face à la version à lame simple de la même gamme, ce modèle à trois lames offre un rasage plus efficace en moins de passages, utile sur une peau qui tolère bien le rasage rapproché. Il convient moins bien à une peau très réactive, pour laquelle un nombre de lames plus réduit limite le risque de tiraillement.",
    ],
    faq: [
      {
        question: "La fonction vibrante est-elle utile avec trois lames ?",
        reponse:
          "Elle vise à assouplir le passage de la lame sur la peau, un confort qui reste appréciable même avec une tête à trois lames, notamment sur les zones les plus sensibles du corps.",
      },
    ],
  },
  {
    slug: "lucerna-bourse-anti-humidite-parfumee",
    identite: [
      "Cette bourse anti-humidité parfumée de Lucerna n'est pas un parfum à porter mais un sachet à placer dans une armoire, un tiroir ou un dressing, pour absorber l'humidité ambiante tout en diffusant un parfum d'intérieur discret. Elle s'adresse à qui veut protéger son linge de l'humidité et des odeurs de renfermé sans utiliser de produit chimique lourd.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Absorbeur d'humidité parfumé pour armoire ou tiroir" },
      { libelle: "Format", valeur: "Sachet ou bourse" },
      { libelle: "Gamme", valeur: "Lucerna" },
    ],
    usage: [
      "Se place directement dans une armoire, un tiroir à linge ou un dressing fermé, sans manipulation particulière. L'effet dure tant que le parfum reste perceptible ; il est conseillé de la remplacer une fois l'odeur estompée pour maintenir l'effet anti-humidité et parfumant.",
    ],
    positionnement: [
      "Face à un absorbeur d'humidité classique sans parfum, celle-ci ajoute un effet parfumant agréable au linge stocké. Elle ne remplace pas un déshumidificateur électrique dans une pièce très humide, son usage restant limité à un espace fermé de petite taille comme une armoire ou un tiroir.",
    ],
    faq: [
      {
        question: "Peut-on la placer directement au contact du linge ?",
        reponse:
          "Oui, c'est l'usage prévu : elle se glisse entre les piles de linge ou sur une étagère d'armoire, sans risque de tache si elle est utilisée normalement et remplacée avant d'être complètement saturée.",
      },
    ],
  },
  {
    slug: "lucerna-huile-damande-douce-125ml",
    identite: [
      "Cette huile d'amande douce de Lucerna est une huile végétale classique, reconnue pour sa texture souple et son usage traditionnel sur peau sèche, y compris chez le nourrisson dans certaines routines familiales. Elle s'utilise pure, sans parfum ajouté marqué, pour nourrir la peau du corps ou démêler les longueurs en soin capillaire, selon l'usage recherché.",
    ],
    faits: [
      { libelle: "Composition", valeur: "Huile d'amande douce" },
      { libelle: "Usage", valeur: "Corps, cheveux" },
      { libelle: "Format", valeur: "125 ml" },
    ],
    usage: [
      "S'applique sur peau légèrement humide après la douche pour mieux pénétrer, en massant jusqu'à absorption complète. En soin capillaire, quelques gouttes sur longueurs et pointes avant le shampooing nourrissent la fibre en profondeur avant le lavage.",
    ],
    positionnement: [
      "Face à une crème corps classique, cette huile pure convient à une peau très sèche cherchant un soin nourrissant sans additifs, mais laisse un toucher plus gras qu'une crème, moins pratique sous des vêtements immédiatement après application.",
    ],
    faq: [
      {
        question: "Cette huile convient-elle aux bébés ?",
        reponse:
          "L'huile d'amande douce est traditionnellement utilisée sur la peau des nourrissons dans certaines routines familiales, mais un avis médical reste recommandé avant tout usage chez le tout-petit, notamment en cas d'antécédent allergique dans la famille.",
      },
    ],
  },
  {
    slug: "lucerna-parfum-dambiance-interieur-textile-150ml",
    identite: [
      "Ce parfum d'ambiance de Lucerna se vaporise dans l'air ou directement sur le textile, pour parfumer une pièce ou du linge d'intérieur, comme des rideaux ou du linge de maison. Ce n'est pas un parfum à porter sur la peau : son usage reste celui d'un désodorisant d'intérieur parfumé, pensé pour rafraîchir une atmosphère plutôt que pour une fragrance corporelle.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Parfum d'intérieur et textile" },
      { libelle: "Format", valeur: "150 ml, spray" },
      { libelle: "Gamme", valeur: "Lucerna" },
    ],
    usage: [
      "Se vaporise à distance dans la pièce ou directement sur un textile non fragile, en évitant les tissus délicats ou colorés qui pourraient marquer. Un test sur une petite zone cachée du textile est recommandé avant une première utilisation généralisée.",
    ],
    positionnement: [
      "Face à une bougie parfumée, ce spray offre un effet plus immédiat et plus facile à doser ponctuellement, sans flamme à surveiller. Il ne convient pas à un usage sur la peau, contrairement à une eau de parfum classique, la formulation étant pensée pour le textile et l'air ambiant.",
    ],
    faq: [
      {
        question: "Peut-on vaporiser ce parfum directement sur les vêtements que l'on porte ?",
        reponse:
          "Ce n'est pas l'usage prévu : il est conçu pour le linge de maison et l'air ambiant, pas comme parfum corporel. Il est préférable de le réserver aux textiles d'intérieur et de tester sur une zone discrète avant un usage sur un tissu neuf.",
      },
    ],
  },
];
