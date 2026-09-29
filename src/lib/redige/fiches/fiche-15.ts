import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "medicube-pdrn-pink-cica-soothing-toner-250ml",
    identite: [
      "Ce toner appartient à la ligne PDRN Pink de Medicube, une gamme coréenne construite autour du PDRN (polynucléotides d'origine marine) associé ici au centella asiatica (cica), reconnu pour son effet apaisant sur les peaux réactives. La texture est fluide, non collante, pensée pour préparer la peau et calmer les rougeurs avant l'application du sérum ou de la crème de la même ligne.",
      "Il s'utilise en première étape de routine, après le nettoyage, sur une peau encore légèrement humide. La ligne PDRN Pink de Medicube s'est fait connaître pour son approche combinant raffermissement et apaisement, plutôt qu'un seul bénéfice isolé.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "PDRN Pink (Medicube)" },
      { libelle: "Actif clé", valeur: "PDRN et extrait de centella asiatica (cica)" },
      { libelle: "Galénique", valeur: "toner fluide" },
      { libelle: "Usage", valeur: "première étape de routine, après nettoyage" },
    ],
    usage: [
      "S'applique matin et soir après le nettoyage, à la main ou au coton, en tapotant légèrement jusqu'à absorption complète. Peut être superposé en plusieurs couches sur les zones les plus sensibles ou sujettes aux rougeurs. Il précède le sérum et la crème de la même ligne PDRN Pink, dont il prépare l'absorption. Éviter de l'associer le même soir à un exfoliant acide fort, le temps d'évaluer la tolérance de la peau au cica.",
    ],
    positionnement: [
      "Dans le rayon des soins coréens, ce toner se distingue par son double axe cica et PDRN, plus orienté apaisement que les toners hydratants classiques à base d'acide hyaluronique seul. Il convient aux peaux sensibilisées, sujettes aux rougeurs ou fragilisées par une routine active trop riche. Il apporte en revanche moins de résultat immédiat sur le grain de peau qu'un toner exfoliant, et ne remplace pas un soin ciblé anti-imperfections pour une peau à tendance acnéique marquée.",
    ],
    faq: [
      {
        question: "Ce toner remplace-t-il une crème hydratante ?",
        reponse:
          "Non. Un toner apporte une première couche d'hydratation et prépare la peau, mais ne contient pas assez d'agents occlusifs pour remplacer une crème. Il s'utilise avant le sérum et la crème de la routine, jamais comme unique soin hydratant, en particulier sur peau sèche.",
      },
      {
        question: "Peut-on l'utiliser sur une peau à tendance acnéique ?",
        reponse:
          "Le centella asiatica est généralement bien toléré sur peau à imperfections car il apaise sans obstruer les pores. Le PDRN n'est pas connu pour être comédogène. Il convient donc en théorie, mais toute nouvelle formule doit être testée sur une petite zone avant application complète.",
      },
    ],
  },
  {
    slug: "medicube-pdrn-pink-collagen-gel-mask-28g",
    identite: [
      "Ce masque appartient à la même ligne PDRN Pink que le toner et le sérum Medicube, mais dans un format monodose en gel, pensé pour un soin ponctuel plutôt que quotidien. Sa texture jelly, riche en collagène marin et en PDRN, est conçue pour repulper visuellement la peau et lui redonner du rebond après une journée ou avant un événement.",
      "Le format de 28g correspond à une seule application complète du visage. Il s'inscrit dans la même logique que le reste de la gamme rose de Medicube, positionnée sur le raffermissement et l'éclat plutôt que sur le traitement des imperfections.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "PDRN Pink (Medicube)" },
      { libelle: "Format", valeur: "masque gel monodose 28 g" },
      { libelle: "Actif clé", valeur: "collagène marin et PDRN" },
      { libelle: "Fréquence conseillée", valeur: "1 à 2 fois par semaine" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau nettoyée, en évitant le contour des yeux, et se laisse poser 15 à 20 minutes. Le surplus non absorbé se masse dans la peau plutôt que d'être rincé systématiquement, selon la texture obtenue. Convient en soin du soir, avant la crème habituelle, une à deux fois par semaine plutôt qu'en usage quotidien compte tenu du format à usage unique.",
    ],
    positionnement: [
      "Face aux masques tissu classiques, ce format gel apporte une sensation de fraîcheur et un fini plus repulpant immédiat, au prix d'un coût à l'usage plus élevé puisqu'il est à usage unique. Il convient à qui cherche un geste ponctuel avant un événement plutôt qu'un soin de fond quotidien. Il ne remplace pas une routine hydratante régulière et n'a pas vocation à traiter des imperfections actives.",
    ],
    faq: [
      {
        question: "Ce masque peut-il s'utiliser tous les jours ?",
        reponse:
          "Il est conçu comme un soin ponctuel, une à deux fois par semaine, plutôt qu'un geste quotidien à intégrer à la routine du matin ou du soir. Un usage plus fréquent n'apporte pas de bénéfice supplémentaire démontré et alourdit inutilement la routine, sans compter le coût à l'usage d'un format monodose.",
      },
      {
        question: "Faut-il rincer après application ?",
        reponse:
          "Cela dépend de la quantité restante après le temps de pose : l'excédent peut être massé jusqu'à absorption plutôt que rincé systématiquement. Sur peau grasse ou par forte chaleur, un rinçage à l'eau tiède en fin de pose reste une option plus confortable.",
      },
    ],
  },
  {
    slug: "medicube-pdrn-pink-collagen-glow-jelly-mist-serum-100ml",
    identite: [
      "Ce sérum-brume complète la ligne PDRN Pink de Medicube dans un format hybride : une texture jelly légère, à vaporiser plutôt qu'à appliquer à la main, pensée pour un geste rapide d'éclat en cours de journée ou en fin de routine. Il combine PDRN et collagène marin, les deux actifs signature de la gamme, dans une formule plus fluide que la crème ou le masque de la même ligne.",
      "Le format 100ml et l'embout spray en font un soin facile à superposer sans alourdir le grain de peau, adapté aussi bien au matin qu'à une retouche d'après-midi.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "PDRN Pink (Medicube)" },
      { libelle: "Galénique", valeur: "sérum en brume (spray)" },
      { libelle: "Actif clé", valeur: "PDRN et collagène marin" },
      { libelle: "Contenance", valeur: "100 ml" },
    ],
    usage: [
      "Se vaporise à environ 20 cm du visage, yeux fermés, sur peau nue ou par-dessus le maquillage pour un regain d'éclat en journée. Peut aussi s'utiliser comme dernière étape de la routine du soir, après le sérum classique, pour sceller l'hydratation. Ne dispense pas d'une crème en cas de peau sèche, la texture étant légère et rapidement absorbée.",
    ],
    positionnement: [
      "Ce format brume le distingue des sérums PDRN classiques appliqués à la main : il convient à qui cherche un geste rapide, y compris par-dessus le maquillage, plutôt qu'un soin de fond appliqué matin et soir. Il apporte moins d'occlusion qu'une crème et ne suffit pas seul sur une peau très sèche en hiver, où il complète une routine plutôt qu'il ne la remplace.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser par-dessus le maquillage ?",
        reponse:
          "Oui, c'est l'un des usages prévus par son format en brume : la texture jelly légère se vaporise sans faire bouger le maquillage et redonne un aspect frais en cours de journée, contrairement à un sérum classique appliqué à la main.",
      },
      {
        question: "Remplace-t-il la crème hydratante du soir ?",
        reponse:
          "Non, sa texture est plus légère et moins occlusive qu'une crème. Il complète la routine en apportant de l'éclat et une sensation de fraîcheur, mais une peau sèche a besoin d'une crème appliquée après lui pour retenir l'hydratation.",
      },
    ],
  },
  {
    slug: "medicube-pdrn-pink-niacinamide-whip-cleanser-120g",
    identite: [
      "Ce nettoyant appartient également à la ligne PDRN Pink, mais associe cette fois le PDRN à la niacinamide dans un nettoyant moussant à la texture whip, c'est-à-dire une mousse dense et onctueuse proche d'une chantilly. Il se positionne comme un nettoyant doux au quotidien, pensé pour ne pas décaper la peau tout en apportant les bénéfices éclaircissants et lissants habituellement associés à la niacinamide.",
      "Le format pot de 120g s'utilise avec les doigts ou un pinceau à mousser pour développer la texture avant application. Il s'inscrit en première étape de la routine PDRN Pink, avant le toner de la même gamme.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "PDRN Pink (Medicube)" },
      { libelle: "Actif clé", valeur: "niacinamide et PDRN" },
      { libelle: "Galénique", valeur: "mousse nettoyante texture whip" },
      { libelle: "Contenance", valeur: "120 g" },
    ],
    usage: [
      "Se prélève avec les doigts humides ou un pinceau à mousser, puis se fait mousser dans les mains avant application sur visage humide, en massage circulaire, et se rince à l'eau tiède. S'utilise matin et soir comme première étape de la routine, avant le toner. La texture dense limite la sensation de tiraillement propre à certains nettoyants moussants classiques.",
    ],
    positionnement: [
      "Face aux nettoyants moussants classiques, souvent plus asséchants, ce format whip à la niacinamide convient aux peaux qui cherchent un nettoyage confortable sans sensation de peau tendue après rinçage. Il est en revanche moins indiqué comme seul geste de démaquillage complet : sur peau maquillée, un premier passage à l'huile ou au démaquillant reste préférable avant ce nettoyant.",
    ],
    faq: [
      {
        question: "Ce nettoyant suffit-il à retirer le maquillage ?",
        reponse:
          "Un nettoyant moussant, même doux, ne dissout pas efficacement les formules waterproof ou les fonds de teint. Il est conseillé de le faire suivre un démaquillant à l'huile ou une eau micellaire en cas de maquillage, puis de l'utiliser en second nettoyage.",
      },
      {
        question: "Convient-il aux peaux sensibles ?",
        reponse:
          "Sa texture whip et sa base douce en font un nettoyant généralement bien toléré, la niacinamide n'étant pas connue pour irriter. Comme pour tout nouveau produit, un test sur une petite zone reste recommandé avant une utilisation régulière sur l'ensemble du visage.",
      },
    ],
  },
  {
    slug: "medicube-red-acne-body-peeling-shot-110g",
    identite: [
      "Ce peeling corps appartient à la ligne RED de Medicube, dédiée aux peaux sujettes à l'acné, notamment sur le dos et le torse, des zones où les soins ciblés sont plus rares que pour le visage. Sa texture en gel s'applique sur peau sèche ou humide et combine généralement des exfoliants chimiques (types AHA/BHA) pour aider à désincruster les pores et limiter l'apparition de nouvelles imperfections corporelles.",
      "Le nom « shot » indique un format concentré, pensé pour un usage ciblé plutôt qu'un gel douche quotidien. Il s'adresse à un usage régulier mais espacé, en complément de la douche habituelle.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "RED (Medicube)" },
      { libelle: "Zone", valeur: "dos, torse, corps" },
      { libelle: "Type d'actif", valeur: "exfoliant chimique type AHA/BHA" },
      { libelle: "Contenance", valeur: "110 g" },
    ],
    usage: [
      "S'applique sur peau sèche avant la douche ou en cours de douche sur les zones concernées (dos, torse, épaules), en massant, puis se rince après quelques minutes de pose. Un usage de deux à trois fois par semaine suffit généralement, un rythme quotidien risquant d'irriter la peau. À éviter en association avec un autre exfoliant corporel le même jour.",
    ],
    positionnement: [
      "Face aux gels douche classiques, ce peeling cible spécifiquement les imperfections corporelles, un besoin peu couvert par les gammes généralistes. Il convient à une peau du dos ou du torse sujette aux boutons, mais n'est pas fait pour une peau déjà sensibilisée, irritée ou pour un usage sur le visage. Il ne remplace pas un avis dermatologique en cas d'acné corporelle sévère ou persistante.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Non, ce peeling est formulé pour la peau plus épaisse du corps, en particulier le dos et le torse. Le visage, plus fin et plus réactif, nécessite des produits d'exfoliation dosés différemment et n'est pas la zone d'usage prévue pour ce format.",
      },
      {
        question: "À quelle fréquence l'utiliser sans irriter la peau ?",
        reponse:
          "Deux à trois applications par semaine constituent un rythme raisonnable pour laisser à la peau le temps de se renouveler entre deux exfoliations. Un usage quotidien augmente le risque de tiraillements ou de rougeurs, en particulier les premières semaines d'utilisation.",
      },
    ],
  },
  {
    slug: "medicube-red-cream-50ml",
    identite: [
      "Cette crème fait partie de la ligne RED de Medicube, orientée vers les peaux à imperfections et sujettes aux rougeurs. Sa formule associe généralement des actifs apaisants et régulateurs (niacinamide, extraits calmants) à une texture crème plus riche que les sérums de la même gamme, pensée pour hydrater sans obstruer les pores ni aggraver les boutons existants.",
      "Elle s'utilise en dernière étape de la routine du soir ou du matin, après le sérum RED Succinic Acid de la même ligne, sur une peau nettoyée. Le format 50ml correspond à un usage quotidien sur plusieurs mois.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "RED (Medicube)" },
      { libelle: "Public visé", valeur: "peau à imperfections et rougeurs" },
      { libelle: "Galénique", valeur: "crème hydratante non comédogène" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique matin et/ou soir en dernière étape de la routine visage, après le sérum, en quantité modérée pour éviter un film gras propice aux points noirs. Se combine bien avec le sérum RED Succinic Acid de la même gamme. Éviter de superposer plusieurs actifs exfoliants forts le même soir sous cette crème, au risque d'irriter une peau déjà fragilisée par l'acné.",
    ],
    positionnement: [
      "Dans le rayon des crèmes anti-imperfections, celle-ci se positionne sur l'hydratation non grasse plutôt que sur le traitement agressif des boutons actifs. Elle convient aux peaux mixtes à grasses sujettes aux imperfections, mais n'est pas une crème traitante forte : une peau avec de l'acné inflammatoire importante aura besoin d'un soin ciblé en complément, pas de cette seule crème.",
    ],
    faq: [
      {
        question: "Cette crème suffit-elle à traiter l'acné ?",
        reponse:
          "Non, une crème hydratante aide à limiter la sécheresse et le déséquilibre cutané qui peuvent aggraver les imperfections, mais elle ne remplace pas un soin ciblé anti-imperfections ni un avis médical en cas d'acné marquée et persistante.",
      },
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse:
          "Oui, sa texture est conçue pour un usage biquotidien, en couche fine pour ne pas alourdir une peau mixte à grasse. En cas de peau très grasse, une application le soir uniquement peut suffire selon la tolérance de chacun.",
      },
    ],
  },
  {
    slug: "medicube-red-succinic-acid-serum-30ml",
    identite: [
      "Ce sérum de la ligne RED de Medicube met en avant l'acide succinique, un actif utilisé pour son action régulatrice sur les peaux à imperfections et son effet apaisant sur les rougeurs associées à l'acné. Sa texture fluide de sérum est conçue pour pénétrer rapidement sans laisser de film gras, un point important sur une peau déjà sujette à la brillance.",
      "Il s'utilise après le nettoyage et avant la crème de la même gamme, en ciblant en particulier le front, le nez et le menton, zones les plus concernées par l'excès de sébum.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "RED (Medicube)" },
      { libelle: "Actif clé", valeur: "acide succinique" },
      { libelle: "Galénique", valeur: "sérum fluide" },
      { libelle: "Contenance", valeur: "30 ml" },
    ],
    usage: [
      "S'applique en quelques gouttes sur l'ensemble du visage ou en ciblé sur la zone T, après le nettoyage et avant la crème hydratante. Un usage quotidien, matin ou soir, convient à la plupart des peaux, mais il est préférable de ne pas le combiner le même soir à un rétinol ou un exfoliant acide fort tant que la tolérance n'est pas établie.",
    ],
    positionnement: [
      "Face aux sérums anti-imperfections à base d'acide salicylique, plus connus mais parfois asséchants, l'acide succinique se positionne comme une alternative jugée plus douce. Il convient aux peaux à imperfections qui tolèrent mal les BHA classiques. Il reste cependant un actif à part entière : une peau très sèche ou très réactive devra l'introduire progressivement plutôt que quotidiennement dès le départ.",
    ],
    faq: [
      {
        question: "Peut-on l'associer à un rétinol ?",
        reponse:
          "Il est préférable de les utiliser à des moments différents (l'un le matin, l'autre le soir) plutôt qu'en même application, le temps d'évaluer la tolérance de la peau. Les deux actifs combinés peuvent accroître le risque d'irritation, en particulier en début d'utilisation.",
      },
      {
        question: "Ce sérum est-il adapté à une peau sèche ?",
        reponse:
          "Il peut convenir, mais une peau sèche a intérêt à l'introduire progressivement, deux à trois fois par semaine au départ, et à toujours le faire suivre d'une crème hydratante pour éviter toute sensation de tiraillement.",
      },
    ],
  },
  {
    slug: "medicube-rosemary-pdrn-scalp-serum-20ml",
    identite: [
      "Ce sérum cible le cuir chevelu plutôt que la peau du visage : il associe le romarin, une plante traditionnellement utilisée pour stimuler le cuir chevelu, au PDRN, l'actif signature des gammes Medicube. Le format en flacon de 20ml avec embout fin permet une application précise à la racine, séparation par séparation, plutôt qu'une application diffuse sur l'ensemble de la chevelure.",
      "Il s'adresse à un cuir chevelu qui a besoin d'un soin ciblé, en complément du shampoing, plutôt qu'à un soin capillaire de longueur destiné aux pointes.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Medicube (soin cuir chevelu)" },
      { libelle: "Actif clé", valeur: "romarin et PDRN" },
      { libelle: "Zone", valeur: "cuir chevelu, racine" },
      { libelle: "Contenance", valeur: "20 ml" },
    ],
    usage: [
      "S'applique à sec ou sur cheveux légèrement humides, directement à la racine à l'aide de l'embout fin, en séparant les cheveux mèche par mèche. Se masse du bout des doigts pendant quelques minutes pour favoriser la pénétration, sans rincer. Un usage régulier, plusieurs fois par semaine, est nécessaire pour juger de son effet sur le cuir chevelu dans la durée.",
    ],
    positionnement: [
      "Sur un marché où les soins du cuir chevelu restent moins développés que ceux du visage, ce sérum se distingue par son application ciblée à la racine. Il convient à qui constate un cuir chevelu inconfortable ou une chevelure qui manque de vitalité à la racine, mais ne traite pas les pointes abîmées ni ne remplace un soin capillaire de longueur en cas de cheveux secs sur toute la fibre.",
    ],
    faq: [
      {
        question: "Faut-il rincer ce sérum après application ?",
        reponse:
          "Non, il est conçu comme un soin sans rinçage (leave-in), à laisser en place sur le cuir chevelu. Il peut se masser puis se sécher normalement, ou s'appliquer le soir pour agir pendant la nuit selon la préférence de chacun.",
      },
      {
        question: "Ce sérum aide-t-il en cas de chute de cheveux ?",
        reponse:
          "Le romarin est traditionnellement associé au confort du cuir chevelu, mais aucun soin cosmétique ne peut garantir un effet sur la chute de cheveux. En cas de chute importante ou persistante, un avis médical reste la démarche appropriée.",
      },
    ],
  },
  {
    slug: "mixa-atopiance-baume-apaisant-250ml",
    identite: [
      "Atopiance est la ligne de Mixa dédiée aux peaux très sèches à tendance atopique, un terrain cutané fragile marqué par des tiraillements et des rougeurs récurrentes. Ce baume, plus riche qu'une crème classique, associe généralement niacinamide et agents émollients pour renforcer la barrière cutanée et limiter l'inconfort au quotidien.",
      "Le format pot de 250ml, pensé pour toute la famille, s'applique sur le corps entier, y compris chez l'enfant selon les indications du produit. Sa texture baume, dense et fondante, est conçue pour tenir plus longtemps sur peau très sèche qu'un lait corporel classique.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Atopiance (Mixa)" },
      { libelle: "Public visé", valeur: "peau très sèche à tendance atopique" },
      { libelle: "Galénique", valeur: "baume corps riche" },
      { libelle: "Contenance", valeur: "250 ml" },
    ],
    usage: [
      "S'applique sur peau propre et sèche, en couche généreuse sur les zones les plus sujettes aux tiraillements (coudes, genoux, jambes), idéalement après la douche sur peau encore légèrement humide pour mieux retenir l'eau. Un usage quotidien, voire biquotidien en période de grand froid, aide à maintenir le confort cutané dans la durée. Ne pas appliquer sur une plaie ouverte.",
    ],
    positionnement: [
      "Face aux laits corporels classiques, ce baume apporte un film plus riche et plus durable, adapté aux peaux très sèches qui tiraillent malgré une hydratation régulière. Il convient moins à une peau normale à grasse, pour laquelle un lait plus fluide suffit et évite une sensation de film gras. Il ne remplace pas un avis dermatologique en cas de poussée d'eczéma marquée.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Ce baume est formulé pour le corps. Certaines lignes Atopiance proposent des soins visage dédiés, à texture plus légère et adaptée à cette zone plus fine. Il est préférable de vérifier l'emballage du produit avant une application sur le visage.",
      },
      {
        question: "Convient-il aux enfants ?",
        reponse:
          "Les baumes de la ligne Atopiance sont généralement formulés pour toute la famille, peau sensible comprise, mais il reste utile de vérifier les indications précises inscrites sur l'emballage, en particulier pour un nourrisson ou un enfant en bas âge.",
      },
    ],
  },
  {
    slug: "mixa-creme-anti-dessechement-peaux-seches-400ml",
    identite: [
      "Cette crème corps de Mixa cible spécifiquement les peaux sèches sujettes aux tiraillements, avec un grand format de 400ml pensé pour un usage quotidien sur l'ensemble du corps plutôt que pour un soin ponctuel. Sa texture crème, plus riche qu'un lait fluide mais plus légère qu'un baume, s'inscrit dans la gamme dermo-cosmétique classique de Mixa, orientée vers des formules simples et bien tolérées.",
      "Elle s'applique après la douche pour reconstituer le film hydrolipidique et limiter la sensation de peau qui tire, en particulier en hiver ou après une exposition au chlore.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mixa" },
      { libelle: "Public visé", valeur: "peaux sèches" },
      { libelle: "Galénique", valeur: "crème corps" },
      { libelle: "Contenance", valeur: "400 ml" },
    ],
    usage: [
      "S'applique en massage sur l'ensemble du corps après la douche ou le bain, sur peau propre, idéalement encore légèrement humide pour une meilleure pénétration. Un usage quotidien est recommandé pour les peaux sèches, avec une attention particulière aux zones les plus rêches comme les coudes, les genoux et les jambes.",
    ],
    positionnement: [
      "Dans le rayon des crèmes corps, ce format se positionne sur le quotidien et le grand volume plutôt que sur un soin ciblé ou premium. Il convient à une utilisation familiale régulière sur peau sèche standard, mais une peau très sèche ou atopique trouvera davantage de bénéfice dans une formule dédiée comme Atopiance, plus riche et plus spécifique.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle à une peau très sèche voire atopique ?",
        reponse:
          "Elle convient à une peau sèche standard au quotidien. Pour une peau très sèche sujette à l'eczéma ou à des poussées d'atopie, une ligne dédiée comme Atopiance, plus riche et formulée pour ce terrain plus fragile, apportera un confort mieux adapté à cette sensibilité particulière.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Cette crème est formulée pour le corps, avec une texture plus riche que celle habituellement recherchée pour le visage. Il est préférable de réserver le visage à une crème hydratante spécifique, dont la texture et la formule sont pensées pour cette peau plus fine.",
      },
    ],
  },
  {
    slug: "mixa-gel-douche-dermo-protecteur-400ml",
    identite: [
      "Ce gel douche appartient à la gamme dermo-protectrice de Mixa, formulée pour nettoyer sans agresser le film hydrolipidique de la peau, contrairement à certains gels douche moussants classiques plus décapants. Sa base nettoyante douce, généralement sans savon, respecte un pH proche de celui de la peau, un point important pour un usage quotidien sur peau sensible ou simplement sèche.",
      "Le format 400ml correspond à un usage familial courant. Il s'utilise sur le corps entier, sous la douche ou au bain, comme geste d'hygiène de base plutôt que comme soin ciblé.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mixa" },
      { libelle: "Type", valeur: "gel douche dermo-protecteur" },
      { libelle: "Formule", valeur: "sans savon, respect du pH cutané" },
      { libelle: "Contenance", valeur: "400 ml" },
    ],
    usage: [
      "S'applique sur peau mouillée, en faisant mousser dans les mains ou sur un gant, puis se rince abondamment à l'eau tiède plutôt que chaude, l'eau très chaude ayant tendance à assécher la peau. Convient à un usage quotidien pour toute la famille. Une crème hydratante appliquée juste après la douche complète utilement le geste sur peau sèche.",
    ],
    positionnement: [
      "Face aux gels douche parfumés classiques, souvent plus moussants mais aussi plus asséchants, ce gel dermo-protecteur privilégie la douceur au détriment d'une mousse abondante. Il convient particulièrement aux peaux sensibles ou sèches qui réagissent mal aux nettoyants trop décapants. Une peau normale sans sensibilité particulière peut se satisfaire d'un gel douche plus classique sans changement notable de confort.",
    ],
    faq: [
      {
        question: "Ce gel douche est-il parfumé ?",
        reponse:
          "Les formules dermo-protectrices privilégient généralement une parfumerie discrète, voire l'absence de parfum, pour limiter le risque d'irritation sur peau sensible. Il est utile de vérifier la mention exacte sur l'emballage si l'absence totale de parfum est un critère important.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Sa formule douce et sans savon le rend compatible avec un usage occasionnel sur le visage en dépannage, mais un nettoyant visage dédié reste préférable au quotidien pour cette zone plus fine, dont les besoins diffèrent de ceux du corps.",
      },
    ],
  },
  {
    slug: "mixa-niacinamide-bright-creme-400ml",
    identite: [
      "Cette crème corps de Mixa met en avant la niacinamide, un actif reconnu pour son effet sur l'aspect uniforme du teint et des taches, appliqué ici à l'échelle du corps entier plutôt qu'au seul visage. Le grand format 400ml indique un usage quotidien étendu, sur les bras, jambes et zones sujettes aux marques ou au teint irrégulier.",
      "La texture crème, ni trop grasse ni trop fluide, est pensée pour un usage courant sous les vêtements, sans effet collant. Elle s'inscrit dans une tendance plus large de soins corps à actifs autrefois réservés au visage.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mixa" },
      { libelle: "Actif clé", valeur: "niacinamide" },
      { libelle: "Galénique", valeur: "crème corps" },
      { libelle: "Contenance", valeur: "400 ml" },
    ],
    usage: [
      "S'applique en massage sur le corps entier après la douche, sur peau propre, idéalement chaque jour pour un effet visible sur la durée, la niacinamide agissant progressivement et non de façon immédiate. Peut s'utiliser sur les zones marquées par des taches résiduelles ou un teint inégal, en insistant légèrement sur ces zones sans dépasser la dose habituelle.",
    ],
    positionnement: [
      "Face aux crèmes corps hydratantes classiques, celle-ci ajoute une dimension éclat et uniformité du teint, un positionnement encore peu courant sur ce format corps. Elle convient à qui cherche un effet sur l'aspect du teint en plus de l'hydratation de base. Elle ne traite pas les taches pigmentaires profondes ni ne remplace un soin dermatologique ciblé en cas d'hyperpigmentation marquée.",
    ],
    faq: [
      {
        question: "En combien de temps voit-on un effet sur le teint ?",
        reponse:
          "La niacinamide agit progressivement, généralement après plusieurs semaines d'utilisation quotidienne régulière. Un usage ponctuel ou irrégulier ne permet pas de juger correctement son effet sur l'aspect du teint, qui reste par ailleurs modéré et non comparable à un soin dermatologique ciblé.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Cette crème est formulée et testée pour le corps, avec une texture pensée pour cette zone. Le visage, à la peau plus fine et plus réactive, bénéficie généralement d'une texture et d'une concentration différentes, que l'on trouve dans les soins visage dédiés à la niacinamide.",
      },
    ],
  },
  {
    slug: "mixsoon-bean-cream-50ml",
    identite: [
      "Mixsoon est une marque coréenne connue pour des formules minimalistes centrées sur un actif végétal unique par produit, sans liste d'ingrédients à rallonge. La Bean Cream met en avant un extrait de fève de soja fermentée, choisi pour son apport nourrissant et sa texture qui devient plus fondante au contact de la peau, souvent décrite comme proche d'une pâte qui se transforme en huile fine à l'application.",
      "Le produit s'est fait connaître au-delà de la Corée pour cette simplicité de formule et sa capacité à hydrater sans laisser de film gras, y compris sur peau sensible ou réactive.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mixsoon" },
      { libelle: "Actif clé", valeur: "extrait de fève de soja fermentée" },
      { libelle: "Galénique", valeur: "crème/sérum, texture pâte à huile" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique en petite quantité sur le visage, en dernière étape de la routine ou juste avant la crème habituelle, en tapotant jusqu'à ce que la texture se transforme et pénètre. Convient matin et soir. Sa formule minimaliste facilite l'association avec d'autres actifs de la routine, sans risque de surcharge d'ingrédients ni d'interaction complexe.",
    ],
    positionnement: [
      "Face aux crèmes multi-actifs plus chargées, la Bean Cream se distingue par sa formule réduite à quelques ingrédients, un argument qui séduit particulièrement les peaux sensibles ou les routines simplifiées. Elle convient moins à qui cherche un soin ciblé multi-bénéfices (anti-âge, éclaircissant, anti-imperfections combinés) dans un seul produit, la marque misant justement sur l'inverse : un actif, un usage.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle aux peaux sensibles ?",
        reponse:
          "Sa liste d'ingrédients réduite en fait un produit souvent bien toléré, y compris par des peaux réactives, l'absence d'ingrédients multiples limitant le risque d'irritation croisée. Comme pour tout nouveau soin, un test sur une petite zone reste recommandé avant une application complète du visage.",
      },
      {
        question: "Pourquoi la texture change-t-elle à l'application ?",
        reponse:
          "La formule est conçue pour passer d'une texture pâte à une texture huileuse fine au contact de la chaleur de la peau, ce qui facilite l'absorption et explique la sensation particulière souvent décrite par les utilisateurs de ce produit.",
      },
    ],
  },
  {
    slug: "mustela-bain-mousse-eveil-200ml",
    identite: [
      "Ce bain moussant fait partie de la gamme Éveil de Mustela, pensée pour les tout premiers mois de bébé, un moment où le bain fait aussi office de rituel sensoriel et d'éveil. La formule, généralement à base d'ingrédients d'origine végétale, est conçue pour nettoyer en douceur le corps et les cheveux sans piquer les yeux, un critère essentiel pour ce type de produit.",
      "Le format 200ml, avec sa mousse légère, permet un bain ludique tout en restant respectueux de la peau fine du nourrisson. Il s'utilise dès la naissance selon les indications habituelles de la gamme.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mustela" },
      { libelle: "Gamme", valeur: "Éveil" },
      { libelle: "Public visé", valeur: "nourrisson, dès la naissance" },
      { libelle: "Contenance", valeur: "200 ml" },
    ],
    usage: [
      "Se verse directement sous l'eau du bain pour faire mousser, ou s'applique sur un gant humide pour laver le corps et les cheveux de bébé en une seule étape. La formule sans savon limite le risque de picotement en cas de contact avec les yeux, un point important à cet âge. Un rinçage soigneux reste recommandé en fin de bain.",
    ],
    positionnement: [
      "Face à un savon classique, ce bain moussant 2-en-1 corps et cheveux simplifie le rituel du bain du nourrisson en un seul geste, tout en limitant le risque d'irritation oculaire. Il convient aux tout premiers mois de vie. Pour un enfant plus grand avec des besoins capillaires spécifiques, un shampoing dédié séparé peut devenir plus adapté que la formule tout-en-un.",
    ],
    faq: [
      {
        question: "Ce bain moussant peut-il être utilisé dès la naissance ?",
        reponse:
          "Les produits de la gamme Éveil de Mustela sont généralement formulés pour convenir dès la naissance, avec une tolérance cutanée et oculaire adaptée au nouveau-né. Il reste utile de vérifier la mention précise indiquée sur l'emballage du produit avant la première utilisation.",
      },
      {
        question: "Faut-il un shampoing séparé en plus de ce bain moussant ?",
        reponse:
          "Pas nécessairement pour un nourrisson : ce produit est conçu comme un nettoyant 2-en-1 corps et cheveux. Un shampoing dédié devient utile plus tard, lorsque l'enfant grandit et que ses cheveux nécessitent un soin plus spécifique.",
      },
    ],
  },
  {
    slug: "mustela-creme-change-100ml",
    identite: [
      "Cette crème de change de Mustela est formulée pour protéger la peau du siège du nourrisson, une zone exposée à l'humidité et au contact prolongé avec la couche, facteurs classiques d'irritation et de rougeurs. Sa texture, généralement riche et couvrante, forme un film protecteur limitant les frottements et le contact direct avec les selles et l'urine.",
      "Le format tube de 100ml est pensé pour un usage fréquent, à chaque change ou en prévention selon la sensibilité de la peau du bébé. Elle s'utilise en dernière étape du change, après le nettoyage du siège.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mustela" },
      { libelle: "Usage", valeur: "crème de change, protection du siège" },
      { libelle: "Public visé", valeur: "nourrisson" },
      { libelle: "Contenance", valeur: "100 ml" },
    ],
    usage: [
      "S'applique en couche généreuse sur une peau propre et sèche, à chaque change ou dès l'apparition de rougeurs, sur les fesses et les plis de l'aine. Ne nécessite pas de retrait complet à chaque change suivant, un léger nettoyage suffisant avant une nouvelle application. En cas de rougeur persistante malgré une application régulière, un avis médical est recommandé.",
    ],
    positionnement: [
      "Face à un simple lait de toilette, cette crème apporte une protection barrière plus ciblée sur la zone du siège, particulièrement utile en période de poussée dentaire ou de selles fréquentes, deux facteurs qui fragilisent souvent cette zone. Elle ne remplace pas un traitement médical en cas d'érythème fessier installé ou de surinfection, qui relève d'un avis pédiatrique.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser en prévention à chaque change ?",
        reponse:
          "Oui, de nombreux parents l'utilisent en prévention systématique, en particulier lorsque la peau du bébé est connue pour être sensible. Elle peut aussi s'utiliser de façon ciblée, dès les premiers signes de rougeur, sans qu'un usage systématique soit strictement nécessaire.",
      },
      {
        question: "Que faire si les rougeurs persistent malgré la crème ?",
        reponse:
          "Une rougeur qui ne s'améliore pas après quelques jours d'application régulière, ou qui s'accompagne de plaies, justifie un avis médical plutôt qu'une poursuite seule de l'application, un érythème fessier persistant pouvant nécessiter un traitement adapté.",
      },
    ],
  },
  {
    slug: "mustela-eau-rafraichissante-coiffante-200ml",
    identite: [
      "Cette eau rafraîchissante et coiffante de Mustela s'adresse aux cheveux des enfants, avec une double fonction : démêler et faciliter le coiffage, tout en apportant une sensation de fraîcheur, utile notamment après une journée active ou en période de chaleur. Sa texture en spray léger, sans rinçage, s'applique directement sur cheveux secs ou humides avant le coiffage.",
      "Le format 200ml en fait un produit d'usage courant, à garder dans la salle de bain familiale plutôt qu'un soin ponctuel. Elle s'inscrit dans la gamme toilette de Mustela pensée pour les enfants au-delà de la période nourrisson.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mustela" },
      { libelle: "Usage", valeur: "démêlage et coiffage sans rinçage" },
      { libelle: "Public visé", valeur: "enfant" },
      { libelle: "Contenance", valeur: "200 ml" },
    ],
    usage: [
      "Se vaporise sur cheveux secs ou légèrement humides avant le coiffage, à environ 20cm de la tête, puis se démêle avec une brosse ou un peigne adapté aux cheveux fins de l'enfant. Ne nécessite pas de rinçage. Peut s'utiliser au quotidien, notamment avant l'école ou après le bain, pour faciliter le coiffage sans tirer sur les cheveux.",
    ],
    positionnement: [
      "Face à un simple après-shampoing rincé, cette eau sans rinçage offre plus de praticité pour le quotidien avec un enfant pressé, au prix d'un effet démêlant généralement plus léger. Elle convient aux cheveux fins à mi-longs de l'enfant, pour un démêlage courant, mais reste insuffisante seule sur des cheveux très emmêlés ou épais, où un après-shampoing rincé reste plus efficace.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa formule sans rinçage est conçue pour un usage quotidien, notamment pour faciliter le coiffage du matin avant l'école. Elle n'a pas vocation à remplacer un shampoing régulier, mais à compléter le geste de démêlage entre deux lavages.",
      },
      {
        question: "Convient-elle à tous les types de cheveux d'enfant ?",
        reponse:
          "Elle convient bien aux cheveux fins à mi-longs, les plus courants chez l'enfant. Sur des cheveux épais ou très bouclés et emmêlés, un après-shampoing rincé en complément apporte généralement un démêlage plus efficace que cette eau seule.",
      },
    ],
  },
  {
    slug: "mustela-liniment-400ml",
    identite: [
      "Le liniment est un produit classique de la toilette du nourrisson en France, une émulsion eau et huile utilisée pour nettoyer en douceur la peau du siège à chaque change, en alternative ou en complément de l'eau et du savon. Ce liniment Mustela au format 400ml, pensé pour un usage quotidien sur plusieurs semaines, s'applique sur un coton pour retirer les résidus de selles tout en laissant un léger film protecteur qui limite les frottements de la couche.",
      "Il s'utilise dès la naissance et reste un produit d'hygiène de base plutôt qu'un soin traitant.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mustela" },
      { libelle: "Type", valeur: "liniment, émulsion eau-huile" },
      { libelle: "Usage", valeur: "nettoyage du siège à chaque change" },
      { libelle: "Contenance", valeur: "400 ml" },
    ],
    usage: [
      "S'applique sur un coton, à agiter avant usage car l'émulsion eau-huile se sépare naturellement au repos, puis se passe en douceur sur les fesses et les plis de l'aine à chaque change pour retirer les résidus de selles. Ne nécessite pas de rinçage à l'eau ensuite. Le film résiduel laissé sur la peau participe à limiter les frottements de la couche.",
    ],
    positionnement: [
      "Face à l'eau et au savon classiques, le liniment nettoie sans décaper et laisse un film protecteur supplémentaire, un avantage pour une peau de nourrisson particulièrement fine. Il convient à un usage quotidien courant. En cas de rougeurs déjà installées, une crème de change ciblée en complément reste plus adaptée que le liniment seul.",
    ],
    faq: [
      {
        question: "Faut-il secouer le flacon avant chaque usage ?",
        reponse:
          "Oui, l'émulsion eau et huile qui compose ce liniment se sépare naturellement lorsqu'elle repose. Il est donc nécessaire de bien agiter le flacon avant chaque prélèvement afin de retrouver une texture homogène et d'assurer un nettoyage efficace de la peau du siège.",
      },
      {
        question: "Le liniment remplace-t-il l'eau et le savon ?",
        reponse:
          "Il peut s'utiliser en alternative à l'eau et au savon pour le nettoyage quotidien du siège, mais un lavage à l'eau reste utile en cas de selles abondantes, le liniment étant surtout adapté à un nettoyage courant plutôt qu'à un nettoyage en profondeur.",
      },
    ],
  },
  {
    slug: "mustela-liniment-hygiene-change-400ml",
    identite: [
      "Cette variante, intitulée « liniment hygiène de change », reprend le même principe que le liniment classique de Mustela : une émulsion eau-huile appliquée au coton pour nettoyer en douceur la peau du siège à chaque change du nourrisson. Le nom insiste ici sur la fonction d'hygiène plutôt que de soin, ce qui correspond à une formulation généralement recentrée sur le nettoyage plutôt que sur des actifs protecteurs additionnels.",
      "Comme le liniment classique, il se présente en flacon de 400ml et s'utilise dès la naissance, en alternative à l'eau et au savon lors des changes quotidiens.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mustela" },
      { libelle: "Type", valeur: "liniment, émulsion eau-huile" },
      { libelle: "Usage", valeur: "nettoyage hygiénique du siège à chaque change" },
      { libelle: "Contenance", valeur: "400 ml" },
    ],
    usage: [
      "S'utilise comme le liniment classique : flacon à agiter avant chaque usage, application sur un coton, puis nettoyage en douceur de la zone du siège à chaque change, sans rinçage à l'eau nécessaire ensuite. Convient dès la naissance, en usage quotidien, comme geste d'hygiène de base plutôt que comme soin traitant en cas de rougeurs installées.",
    ],
    positionnement: [
      "Il occupe la même place que le liniment classique dans la routine de change, avec une formulation orientée hygiène plutôt que protection renforcée. Le choix entre les deux versions dépend surtout de la disponibilité en pharmacie et de la formule exacte à un moment donné, les deux répondant au même besoin de nettoyage doux et quotidien du siège du nourrisson.",
    ],
    faq: [
      {
        question: "Quelle est la différence avec le liniment classique Mustela ?",
        reponse:
          "Les deux produits reposent sur le même principe d'émulsion eau-huile pour nettoyer la peau du siège. Celui-ci met l'accent sur la fonction hygiénique du geste de change, avec une formulation qui peut varier légèrement selon les versions commercialisées dans le temps.",
      },
      {
        question: "Peut-on l'utiliser dès la naissance ?",
        reponse:
          "Oui, ce type de liniment est conçu pour la toilette du nourrisson dès la naissance, dans le cadre du change quotidien. Il reste utile de vérifier les indications précises inscrites sur l'emballage du flacon avant la première utilisation.",
      },
    ],
  },
  {
    slug: "mustela-musti-eau-soin-parfumee-50ml",
    identite: [
      "Musti est la gamme historique de Mustela reconnaissable à son flacon en forme d'ourson, un classique de la puériculture française depuis plusieurs décennies. Cette eau de soin parfumée n'est pas un parfum au sens classique du terme : sa formule douce, testée pour la peau du nourrisson, allie un léger parfum délicat à des propriétés hydratantes légères, pensées pour ne pas irriter une peau aussi sensible que celle d'un bébé.",
      "Le format 50ml, facilement transportable, en fait un produit que l'on vaporise après le bain ou en cours de journée, davantage pour le rituel et la douceur du geste que pour une tenue parfumée prolongée.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Musti (Mustela)" },
      { libelle: "Type", valeur: "eau de soin légèrement parfumée, non un parfum classique" },
      { libelle: "Public visé", valeur: "nourrisson, enfant" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "Se vaporise à distance sur les vêtements ou légèrement sur la peau après le bain, en évitant le visage et les yeux. Ne se destine pas à une application directe et répétée comme un parfum classique, mais à un geste ponctuel de douceur dans le rituel du soir. Convient dès les premiers mois selon les indications de la gamme.",
    ],
    positionnement: [
      "Face à un parfum pour adulte, cette eau se distingue par sa formule pensée pour la peau fine du nourrisson et par une tenue volontairement plus discrète. Elle convient au rituel du bain ou du coucher plutôt qu'à une recherche de sillage. Elle ne remplace pas un soin hydratant : sa fonction reste avant tout sensorielle et rituelle, pas traitante.",
    ],
    faq: [
      {
        question: "Peut-on la vaporiser directement sur la peau de bébé ?",
        reponse:
          "Elle peut s'appliquer légèrement sur la peau ou les vêtements, à distance et en évitant le visage. Sa formule est testée pour convenir à la peau du nourrisson, mais un test sur une petite zone reste prudent en cas de peau particulièrement réactive.",
      },
      {
        question: "Cette eau tient-elle aussi longtemps qu'un parfum classique ?",
        reponse:
          "Non, sa tenue est volontairement plus discrète qu'un parfum pour adulte, la formule étant pensée pour la douceur et la tolérance cutanée plutôt que pour un sillage prolongé. Le geste se renouvelle simplement au fil de la journée si besoin.",
      },
    ],
  },
  {
    slug: "mustela-shampoing-mousse-nourrisson-croutes-lait-150ml",
    identite: [
      "Ce shampoing mousse de Mustela cible spécifiquement les croûtes de lait, ces plaques squameuses fréquentes sur le cuir chevelu du nourrisson durant les premiers mois, sans gravité mais parfois inesthétiques ou inconfortables. Sa texture mousse, plus douce qu'un shampoing liquide classique, est pensée pour ramollir ces croûtes et faciliter leur élimination progressive au fil des lavages, sans frotter ni gratter le cuir chevelu fragile du bébé.",
      "Le format 150ml correspond à un usage régulier sur plusieurs semaines, le temps que les croûtes s'atténuent naturellement avec des lavages répétés.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Mustela" },
      { libelle: "Usage", valeur: "croûtes de lait du nourrisson" },
      { libelle: "Galénique", valeur: "shampoing mousse" },
      { libelle: "Contenance", valeur: "150 ml" },
    ],
    usage: [
      "S'applique sur cuir chevelu mouillé, en mousse, avec un léger massage circulaire du bout des doigts pour ramollir les croûtes sans les gratter, puis se rince à l'eau claire. Un usage répété sur plusieurs lavages est nécessaire pour voir les croûtes s'atténuer progressivement, un seul lavage ne suffisant généralement pas à les faire disparaître.",
    ],
    positionnement: [
      "Face à un shampoing bébé classique, ce format mousse cible spécifiquement les croûtes de lait plutôt que le seul nettoyage général du cuir chevelu. Il convient aux premiers mois de vie, période où ces croûtes sont les plus fréquentes. Pour un cuir chevelu sans croûtes, un shampoing doux classique suffit et ce produit n'apporte pas de bénéfice supplémentaire notable.",
    ],
    faq: [
      {
        question: "Faut-il gratter les croûtes de lait avant le shampoing ?",
        reponse:
          "Non, il est déconseillé de gratter ou de forcer sur le cuir chevelu fragile du nourrisson. Ce shampoing mousse est conçu pour ramollir les croûtes progressivement au fil des lavages successifs, un léger massage circulaire suffisant sans jamais frotter la peau encore immature du bébé.",
      },
      {
        question: "En combien de temps les croûtes de lait disparaissent-elles ?",
        reponse:
          "Cela varie selon les nourrissons, mais plusieurs lavages réguliers sont généralement nécessaires avant de voir une amélioration nette. Les croûtes de lait s'atténuent aussi souvent naturellement avec le temps, indépendamment du shampoing utilisé, qui vient surtout faciliter le processus.",
      },
    ],
  },
];
