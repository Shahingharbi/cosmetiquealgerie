import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "beauty-dept-hair-parfume-floral-bliss-50ml",
    identite: [
      "Ce format de 50 ml est une brume capillaire parfumée, pensée pour parfumer les cheveux plutôt que la peau : une catégorie à part du parfum classique, plus légère en alcool, formulée pour ne pas alourdir ni dessécher la fibre. L'accord Floral Bliss annonce un bouquet de fleurs blanches et fraîches, sans note lourde ni sucrée, dans un registre facile à porter au quotidien.",
      "Vaporisée à distance sur cheveux secs, elle laisse une odeur propre qui se réactive légèrement au mouvement, plutôt qu'un sillage marqué et continu comme celui d'une eau de parfum appliquée sur la peau.",
    ],
    faits: [
      { libelle: "Format", valeur: "Brume capillaire parfumée" },
      { libelle: "Zone", valeur: "Cheveux" },
      { libelle: "Accord", valeur: "Floral" },
    ],
    usage: [
      "Se vaporise à une vingtaine de centimètres des cheveux secs ou juste séchés, jamais à la racine ni sur le cuir chevelu, pour éviter tout dépôt gras. Un geste léger suffit, sans insister sur une même mèche. Elle se réapplique en cours de journée sans qu'il soit nécessaire de laver les cheveux entre deux vaporisations. Elle ne remplace pas un parfum porté sur la peau, dont la tenue est nettement plus longue.",
    ],
    positionnement: [
      "Face à un parfum classique vaporisé sur la peau, cette brume capillaire tient moins longtemps mais évite tout risque de tache sur les vêtements et ne dessèche pas la peau exposée aux vaporisations répétées. Elle convient à qui veut simplement rafraîchir l'odeur de ses cheveux entre deux shampoings, pas à qui cherche un sillage qui se prolonge plusieurs heures.",
    ],
    faq: [
      {
        question: "Peut-on vaporiser ce produit sur la peau comme un parfum classique ?",
        reponse:
          "Non, il est formulé pour la fibre capillaire, pas pour la peau. Sa concentration et ses ingrédients sont pensés pour cet usage précis ; l'appliquer sur la peau ne donnera ni la même tenue ni le même confort qu'un parfum conçu pour cet effet.",
      },
      {
        question: "Faut-il l'appliquer sur cheveux secs ou humides ?",
        reponse:
          "Sur cheveux secs de préférence, après le brushing ou le séchage naturel. Sur cheveux humides, l'alcool contenu dans la formule peut accentuer la sensation de sécheresse en s'évaporant avec l'eau encore présente sur la fibre.",
      },
    ],
  },
  {
    slug: "beauty-dept-watermelon-body-serum-75ml",
    identite: [
      "Ce sérum corps au parfum pastèque se distingue des laits corporels classiques par une texture plus fluide et non grasse, pensée pour pénétrer rapidement sans laisser de film. Le format 75 ml, plus compact qu'un lait corps traditionnel, en fait un complément ciblé plutôt qu'un soin corps unique du quotidien.",
      "Le fruité pastèque en fait un produit orienté plaisir sensoriel autant que soin, pour une peau qui a besoin d'un apport d'hydratation léger sans sensation collante, notamment en climat chaud.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Sérum fluide, non gras" },
      { libelle: "Parfum", valeur: "Pastèque" },
      { libelle: "Zone", valeur: "Corps" },
    ],
    usage: [
      "S'applique sur peau propre, en massant jusqu'à absorption complète, idéalement après la douche sur peau encore légèrement humide pour optimiser la pénétration. Sa texture fluide permet une application rapide sur l'ensemble du corps sans allonger la routine du matin. Il peut se coupler à une crème plus riche le soir si la peau reste sujette aux tiraillements en fin de journée.",
    ],
    positionnement: [
      "Face à un lait corps classique, ce sérum privilégie la légèreté et la rapidité d'absorption à l'effet nourrissant profond. Il convient bien à une peau normale à mixte qui cherche une hydratation quotidienne sans sensation grasse, moins à une peau très sèche qui a besoin d'un apport plus riche et occlusif, notamment en hiver.",
    ],
    faq: [
      {
        question: "Ce sérum suffit-il seul pour une peau très sèche ?",
        reponse:
          "Pas nécessairement. Sa texture fluide hydrate rapidement mais apporte moins de corps gras qu'une crème ou un lait épais. Sur une peau très sèche, il se complète mieux d'un soin plus riche appliqué par-dessus, notamment le soir.",
      },
      {
        question: "Le parfum pastèque est-il tenace sur la peau ?",
        reponse:
          "Il reste perceptible surtout dans les minutes suivant l'application, comme la plupart des soins corps parfumés, puis s'estompe progressivement au contact des vêtements et de la peau. Il ne joue pas le rôle d'un parfum à sillage prolongé.",
      },
    ],
  },
  {
    slug: "beauty-dept-zanzibar-hair-body-fragrance-mist-150ml",
    identite: [
      "Cette brume corps et cheveux de 150 ml se vaporise indifféremment sur la peau et sur la fibre capillaire, une polyvalence qui la distingue d'un parfum classique réservé à la peau. L'accord Zanzibar annonce une évocation exotique et chaude, dans l'esprit des eaux parfumées légères pensées pour un usage fréquent plutôt que pour un sillage puissant et durable.",
      "Sa concentration plus légère qu'une eau de parfum permet de multiplier les applications dans la journée sans saturer l'air ni la fibre capillaire, un format pensé pour l'entretien plutôt que pour l'occasion.",
    ],
    faits: [
      { libelle: "Format", valeur: "Brume corps et cheveux" },
      { libelle: "Zone", valeur: "Corps et cheveux" },
      { libelle: "Accord", valeur: "Exotique" },
    ],
    usage: [
      "Se vaporise à quelques centimètres de la peau ou des cheveux secs, en un geste rapide sur les zones de pulsation pour le corps ou en voile léger pour les cheveux. Sa texture légère autorise une application plus généreuse qu'un parfum concentré, sans risque de saturation. Elle se réapplique en cours de journée selon le besoin.",
    ],
    positionnement: [
      "Comparée à une eau de parfum classique, cette brume tient moins longtemps mais offre une polyvalence corps et cheveux qu'un parfum concentré ne permet pas toujours sans risquer d'alourdir la fibre. Elle convient à un usage fréquent et léger, moins à qui cherche un sillage qui marque plusieurs heures après l'application.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser à la fois sur le corps et sur les cheveux le même jour ?",
        reponse:
          "Oui, c'est l'usage prévu par ce format. Elle se vaporise sur la peau comme sur cheveux secs sans distinction, contrairement à un parfum concentré dont l'alcool peut davantage assécher la fibre capillaire en application répétée.",
      },
      {
        question: "Combien de temps dure le parfum sur les cheveux ?",
        reponse:
          "Moins longtemps que sur la peau, car les cheveux retiennent moins bien les molécules parfumées que la chaleur cutanée. Une réapplication en cours de journée est normale pour ce type de format, sans que cela signale un défaut du produit.",
      },
    ],
  },
  {
    slug: "home-spray-amber-musk-250ml",
    identite: [
      "Ce spray parfumé pour la maison, au format 250 ml, se vaporise dans l'air ambiant plutôt que sur la peau ou le linge, à la manière d'un parfum d'intérieur classique. L'accord Amber & Musk annonce une ambiance chaude et enveloppante, plus proche des parfums d'ambiance boisés-ambrés que des sprays d'agrumes frais.",
      "Ce type de format vise à parfumer une pièce de vie en quelques pulvérisations, pour une ambiance qui se renouvelle à chaque usage plutôt qu'un parfum diffusé en continu comme un bâtonnet ou une bougie.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray parfumé pour la maison" },
      { libelle: "Accord", valeur: "Ambré et musqué" },
      { libelle: "Zone", valeur: "Intérieur, air ambiant" },
    ],
    usage: [
      "Se vaporise en l'air, au centre d'une pièce, à distance des tissus et des meubles en bois verni pour éviter toute marque. Quelques pulvérisations suffisent pour une pièce de taille moyenne ; renouveler l'application selon la ventilation et la fréquence de passage. Il ne se vaporise pas directement sur la peau ni sur le linge, contrairement à une eau de toilette ou un parfum de linge.",
    ],
    positionnement: [
      "Face à une bougie ou un diffuseur à bâtonnets, ce spray offre un parfum immédiat mais moins durable dans le temps : l'effet s'estompe en quelques heures et demande une nouvelle application, alors qu'un diffuseur continu parfume en fond sur plusieurs semaines. Il convient à qui veut parfumer une pièce ponctuellement, avant une visite par exemple, plutôt qu'en continu.",
    ],
    faq: [
      {
        question: "Peut-on vaporiser ce spray sur les rideaux ou le canapé ?",
        reponse:
          "Ce n'est pas l'usage recommandé pour un spray d'ambiance : il est conçu pour parfumer l'air, pas les textiles, qui peuvent réagir différemment selon leur matière. Un test sur une zone peu visible s'impose avant toute application directe sur un tissu.",
      },
      {
        question: "Combien de temps dure le parfum dans une pièce après vaporisation ?",
        reponse:
          "L'effet est surtout perceptible dans l'heure qui suit la vaporisation, puis s'atténue progressivement selon la ventilation de la pièce. Ce n'est pas un parfum de fond continu comme un diffuseur à bâtonnets ; il s'utilise plutôt en applications répétées selon le besoin.",
      },
    ],
  },
  {
    slug: "home-spray-lilas-ginger-250ml",
    identite: [
      "Comme les autres sprays de cette gamme, ce format 250 ml parfume l'air ambiant plutôt que la peau ou le linge. L'accord Lilas & Ginger associe une note florale printanière au piquant plus chaud du gingembre, un contraste pensé pour éviter l'effet trop sucré ou trop poudré de certains parfums d'ambiance floraux.",
      "Ce contraste floral-épicé le distingue des sprays plus classiquement gourmands ou boisés de la même collection, pour une ambiance plus fraîche et moins enveloppante.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray parfumé pour la maison" },
      { libelle: "Accord", valeur: "Floral et épicé" },
      { libelle: "Zone", valeur: "Intérieur, air ambiant" },
    ],
    usage: [
      "S'utilise en pulvérisation dans l'air, au centre de la pièce, en évitant les surfaces en bois, le tissu d'ameublement et les appareils électroniques. Deux à trois pressions suffisent en général pour une pièce de taille moyenne. Il se réapplique selon le renouvellement de l'air, sans qu'un usage trop rapproché soit nécessaire.",
    ],
    positionnement: [
      "Son profil floral-épicé le rend plus adapté à un salon ou une entrée qu'à une chambre, où un accord plus doux et moins piquant est souvent préféré au moment du coucher. Il convient à qui aime une ambiance fraîche et légèrement épicée plutôt qu'un parfum d'ambiance sucré ou vanillé.",
    ],
    faq: [
      {
        question: "Ce spray convient-il pour une chambre à coucher ?",
        reponse:
          "Son accord épicé au gingembre le rend plus stimulant que relaxant, ce qui le destine plutôt à un salon ou une pièce de passage. Pour une chambre, un accord plus doux, sans note épicée marquée, est en général mieux adapté au moment du coucher.",
      },
      {
        question: "Peut-on mélanger ce spray avec un autre parfum d'ambiance dans la même pièce ?",
        reponse:
          "Ce n'est pas conseillé : deux parfums d'ambiance vaporisés dans le même espace se superposent souvent de façon peu maîtrisée et donnent un résultat confus. Mieux vaut aérer la pièce entre deux usages de sprays différents.",
      },
    ],
  },
  {
    slug: "home-spray-sweet-home-250ml",
    identite: [
      "Ce spray d'intérieur de 250 ml porte un nom qui annonce directement sa vocation : recréer une ambiance de cocon domestique, dans un registre doux plutôt que floral ou boisé marqué. Sweet Home évoque un accord chaud et confortable, dans la lignée des parfums de maison pensés pour un usage quotidien plutôt que pour une occasion précise.",
      "Sans pyramide de parfumeur détaillée pour ce type de spray, l'accord se juge surtout à l'usage, pièce par pièce, selon la ventilation et le mobilier présent.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray parfumé pour la maison" },
      { libelle: "Accord", valeur: "Doux et cocooning" },
      { libelle: "Zone", valeur: "Intérieur, air ambiant" },
    ],
    usage: [
      "Se vaporise dans l'air d'une pièce de vie, à bonne distance des textiles et du bois. Utile en particulier au retour à la maison ou avant de recevoir, pour une ambiance immédiatement plus accueillante. Il ne remplace pas une aération régulière de la pièce, qui reste nécessaire pour renouveler l'air.",
    ],
    positionnement: [
      "Plus doux et moins marqué que les accords floraux ou épicés de la même collection, ce spray convient à un usage quotidien dans toutes les pièces de vie, y compris une chambre. Il apporte moins de caractère qu'un accord signature mais s'impose moins aussi, ce qui en fait un choix par défaut plus consensuel.",
    ],
    faq: [
      {
        question: "Ce parfum convient-il à toutes les pièces de la maison ?",
        reponse:
          "Son profil doux et peu marqué le rend adapté à la plupart des pièces de vie, y compris une chambre, contrairement à un accord plus épicé qui convient mieux à un salon. Il reste un choix consensuel plutôt qu'une signature olfactive forte.",
      },
      {
        question: "Faut-il aérer la pièce avant de vaporiser ce spray ?",
        reponse:
          "Ce n'est pas obligatoire mais c'est préférable : un parfum d'ambiance vaporisé dans une pièce déjà bien aérée se diffuse plus nettement qu'en superposition sur des odeurs de cuisine ou de renfermé déjà présentes. Un simple passage d'air de quelques minutes avant la vaporisation suffit en général à obtenir un résultat plus net et plus durable dans la pièce.",
      },
    ],
  },
  {
    slug: "home-spray-thermal-250ml",
    identite: [
      "Ce spray d'intérieur de 250 ml se distingue des autres accords de la collection par une évocation plus minérale et fraîche, suggérée par son nom Thermal plutôt que par une note florale ou gourmande. Il s'inscrit dans le registre des parfums de maison à l'ambiance épurée, pensés pour une sensation de propreté plutôt que pour un sillage capiteux.",
      "Comme pour les autres sprays de cette gamme, il n'existe pas de pyramide de parfumeur documentée : l'accord se définit surtout par contraste avec les versions plus florales ou sucrées de la collection.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray parfumé pour la maison" },
      { libelle: "Accord", valeur: "Frais et minéral" },
      { libelle: "Zone", valeur: "Intérieur, air ambiant" },
    ],
    usage: [
      "S'emploie en pulvérisation dans l'air, en particulier dans une salle de bain ou une entrée, où une note fraîche et propre est généralement plus recherchée qu'un accord chaud ou sucré. Quelques pressions suffisent, à renouveler selon la ventilation de la pièce.",
    ],
    positionnement: [
      "Son registre frais et minéral le rapproche davantage des parfums de salle de bain que des accords chauds et enveloppants de la même collection. Il convient à qui cherche une sensation de propreté immédiate plutôt qu'une ambiance cocooning, ce que couvrent mieux les versions Sweet Home ou Amber & Musk de la gamme.",
    ],
    faq: [
      {
        question: "Ce spray convient-il pour une salle de bain ?",
        reponse:
          "Oui, son accord frais et minéral correspond bien à cet usage, davantage qu'à un salon où un accord plus chaud est souvent préféré. C'est l'un des usages les plus naturels pour ce type de note dans un spray d'ambiance.",
      },
      {
        question: "Ce parfum ressemble-t-il à une odeur de linge propre ?",
        reponse:
          "Il s'en approche dans l'esprit, par son registre frais et peu sucré, sans reproduire à l'identique un parfum de lessive. C'est une évocation de propreté plutôt qu'une copie d'un produit d'entretien du linge, à juger surtout à l'usage selon les goûts de chacun en la matière.",
      },
    ],
  },
  {
    slug: "mademoiselle-debutante-by",
    identite: [
      "Cette eau parfumée s'inscrit dans le registre des compositions féminines pensées pour un usage quotidien plutôt que pour une occasion précise. Le nom Mademoiselle débutante annonce un profil jeune et frais, dans l'esprit des parfums d'entrée de gamme conçus comme une première approche du parfum plutôt que comme une signature olfactive complexe.",
      "Sans pyramide de parfumeur documentée pour cette référence, son positionnement se juge surtout par contraste avec les eaux de parfum plus concentrées et plus travaillées du rayon, dont la tenue et la complexité sont généralement supérieures.",
    ],
    faits: [
      { libelle: "Format", valeur: "Eau parfumée" },
      { libelle: "Registre", valeur: "Frais et jeune" },
    ],
    usage: [
      "Se vaporise sur les zones de pulsation, poignets et cou, en une à deux pressions selon la tenue recherchée. Comme la plupart des eaux parfumées légères, elle demande une réapplication en cours de journée pour maintenir sa présence, contrairement à une eau de parfum plus concentrée.",
    ],
    positionnement: [
      "Face aux eaux de parfum de marque installée présentes sur le même rayon, cette référence se positionne sur un profil plus simple et une tenue plus courte. Elle convient à une utilisation quotidienne et légère, moins à qui cherche un sillage marqué et durable ou une composition olfactive élaborée.",
    ],
    faq: [
      {
        question: "Cette eau parfumée tient-elle aussi longtemps qu'une eau de parfum ?",
        reponse:
          "Non, sa concentration en huiles parfumées est généralement plus faible que celle d'une eau de parfum, ce qui se traduit par une tenue plus courte sur la peau. Une réapplication en cours de journée est normale pour ce type de référence.",
      },
      {
        question: "À quel moment porter ce parfum ?",
        reponse:
          "Son profil frais et léger le destine surtout à un usage quotidien, au bureau ou en journée, plutôt qu'à une occasion habillée en soirée, où une composition plus concentrée et plus marquée est généralement préférée.",
      },
    ],
  },
  {
    slug: "savon-liquide-coco-500ml",
    identite: [
      "Ce savon liquide de 500 ml au parfum coco s'utilise pour la toilette du corps, en complément ou en alternative à un gel douche classique. Sa texture liquide facilite le dosage et la répartition sur peau mouillée, dans un format familial pensé pour un usage fréquent de toute la maison.",
      "Le parfum coco l'inscrit dans le registre gourmand et vacances plutôt que dans celui, plus neutre, des savons surgras ou des gels douche dermatologiques sans parfum.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Savon liquide" },
      { libelle: "Parfum", valeur: "Coco" },
    ],
    usage: [
      "S'utilise sous la douche ou au lavabo, une noisette dans le creux de la main, à faire mousser sur peau mouillée puis à rincer abondamment. Son grand format, plus généreux qu'un flacon standard, convient à un usage familial fréquent sans épuisement rapide.",
    ],
    positionnement: [
      "Face à un savon surgras neutre, ce savon coco privilégie le plaisir sensoriel du parfum sur le soin ciblé de la peau sèche. Il convient à une peau normale qui tolère bien les parfums, moins à une peau très sèche ou réactive, pour laquelle un savon surgras sans parfum reste préférable.",
    ],
    faq: [
      {
        question: "Ce savon convient-il à une peau sensible ?",
        reponse:
          "Étant parfumé, il n'est pas le premier choix pour une peau sensible ou sujette aux réactions, qui tolère généralement mieux un savon surgras sans parfum. Un test sur une petite zone est recommandé avant un usage régulier sur tout le corps.",
      },
      {
        question: "Peut-on l'utiliser aussi comme savon pour les mains ?",
        reponse:
          "Oui, rien n'empêche cet usage ponctuel, mais sa formule est pensée pour le corps entier sous la douche. Pour un lavage des mains très fréquent dans la journée, un savon pour les mains dédié reste plus adapté.",
      },
    ],
  },
  {
    slug: "savon-liquide-fraise-500ml",
    identite: [
      "Comme les autres savons liquides de cette ligne, ce format de 500 ml se destine à la toilette du corps sous la douche, avec une texture liquide qui facilite le dosage. Le parfum fraise le place dans un registre fruité et gourmand, plus doux et moins entêtant que certains parfums plus sucrés du même rayon.",
      "Son grand contenant en fait un savon pensé pour durer, adapté à un usage quotidien partagé entre plusieurs membres du foyer.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Savon liquide" },
      { libelle: "Parfum", valeur: "Fraise" },
    ],
    usage: [
      "Se verse dans le creux de la main ou directement sur un gant de toilette, à faire mousser sur peau mouillée avant de rincer. Son format généreux permet un usage quotidien sans avoir à renouveler le flacon trop fréquemment.",
    ],
    positionnement: [
      "Son parfum fruité et léger le distingue de la version coco, plus ronde, et de la version vanille, plus enveloppante. Il convient à qui préfère une note fraîche et discrète plutôt qu'un parfum marqué, sans viser un soin ciblé pour peau sèche ou sensible.",
    ],
    faq: [
      {
        question: "Ce savon dessèche-t-il la peau en cas d'usage quotidien ?",
        reponse:
          "Comme la plupart des savons liquides parfumés grand public, un usage biquotidien peut accentuer la sensation de tiraillement sur une peau déjà sèche. Dans ce cas, une crème hydratante après la douche reste utile en complément.",
      },
      {
        question: "Le parfum fraise reste-t-il présent sur la peau après la douche ?",
        reponse:
          "Une note légère persiste généralement quelques minutes après le rinçage, sans intensité comparable à un parfum ou une lotion parfumée laissée sur la peau. L'effet est surtout sensible pendant la douche elle-même, et s'estompe ensuite au séchage, sans laisser de sillage perceptible plus tard dans la journée.",
      },
    ],
  },
  {
    slug: "savon-liquide-vanille-500ml",
    identite: [
      "Cette version vanille du savon liquide de 500 ml reprend le même format et la même texture liquide que le reste de la ligne, avec un parfum plus rond et enveloppant que les versions coco ou fraise. C'est le profil le plus proche d'un registre gourmand chaud, souvent recherché en fin de journée ou en saison froide.",
      "Comme les autres références, il se destine à un usage familial fréquent plutôt qu'à un soin ciblé pour un type de peau particulier.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Savon liquide" },
      { libelle: "Parfum", valeur: "Vanille" },
    ],
    usage: [
      "S'utilise sous la douche, en quantité modérée dans le creux de la main, à faire mousser puis rincer abondamment à l'eau claire. Son parfum chaud en fait un choix apprécié pour une douche du soir plutôt que pour un réveil tonique.",
    ],
    positionnement: [
      "Plus enveloppant que les versions fraise ou coco de la même ligne, ce savon vanille convient à qui recherche une note chaude et réconfortante. Il n'apporte pas de soin ciblé particulier pour la peau sèche ou sensible, pour lesquelles un savon surgras dédié reste préférable.",
    ],
    faq: [
      {
        question: "Ce parfum vanille convient-il à un usage le matin ?",
        reponse:
          "Rien ne l'empêche, mais son profil chaud et enveloppant est souvent davantage associé à une douche du soir. Pour un réveil plus tonique, une note fruitée comme la version fraise de la même ligne est parfois préférée.",
      },
      {
        question: "Peut-on alterner les trois parfums de la gamme dans le même foyer ?",
        reponse:
          "Oui, les trois versions coco, fraise et vanille partagent la même base lavante et ne diffèrent que par le parfum. Elles peuvent être utilisées indifféremment selon les préférences de chacun dans un même foyer, sans qu'il soit nécessaire de s'en tenir à une seule référence pour toute la famille.",
      },
    ],
  },
  {
    slug: "body-shop-gel-douche-satsuma-zesty-750ml",
    identite: [
      "Ce gel douche The Body Shop reprend l'agrume satsuma, l'un des parfums historiques de la marque depuis ses débuts, dans une version zesty pensée pour un effet tonique et énergisant sous la douche. Le format de 750 ml, plus généreux qu'un flacon standard, convient à un usage fréquent.",
      "Sa texture moussante se rince facilement et ne laisse pas de film gras, dans l'esprit des gels douche fruités pensés pour réveiller les sens plutôt que pour un soin ciblé de la peau sèche.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel douche moussant" },
      { libelle: "Parfum", valeur: "Satsuma, agrume" },
      { libelle: "Zone", valeur: "Corps" },
    ],
    usage: [
      "S'applique sur peau mouillée, à faire mousser à la main ou avec un gant de toilette puis à rincer abondamment. Son parfum tonique en fait un choix plus adapté à une douche du matin qu'à une routine du soir orientée détente.",
    ],
    positionnement: [
      "Face à un gel douche neutre ou surgras, celui-ci privilégie l'effet tonique du parfum agrume sur le soin ciblé de la peau sèche. Il convient à une peau normale qui recherche un moment de douche énergisant, moins à une peau très sèche ou sensible, pour laquelle une formule sans parfum reste préférable.",
    ],
    faq: [
      {
        question: "Ce gel douche convient-il à une peau sèche ?",
        reponse:
          "Il n'est pas conçu comme un soin pour peau sèche : son profil moussant et parfumé privilégie le plaisir sensoriel. Sur une peau très sèche, une crème hydratante appliquée après la douche reste nécessaire en complément.",
      },
      {
        question: "Le parfum satsuma est-il proche d'une odeur d'orange classique ?",
        reponse:
          "Le satsuma est une mandarine douce, à l'odeur plus ronde et moins acidulée qu'une orange classique. La version zesty de ce gel douche en accentue le côté tonique sans changer la famille olfactive de fond.",
      },
    ],
  },
  {
    slug: "body-shop-tea-tree-skin-clearing-toner-250ml",
    identite: [
      "Cette lotion tonique The Body Shop de la ligne Tea Tree cible les peaux à tendance grasse ou sujettes aux imperfections. Formulée à base d'huile essentielle de tea tree, reconnue pour ses propriétés purifiantes, elle s'utilise après le nettoyage pour parfaire l'élimination des résidus de sébum et d'impuretés, sans l'effet asséchant d'un tonique à base d'alcool.",
      "Le format de 250 ml en fait un produit d'usage quotidien, à intégrer dans une routine complète avec le nettoyant et les autres soins de la même ligne Tea Tree.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile essentielle de tea tree" },
      { libelle: "Texture", valeur: "Lotion tonique liquide" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance imperfections" },
    ],
    usage: [
      "S'applique matin et soir sur peau nettoyée, à l'aide d'un coton imbibé, sur le visage en évitant le contour des yeux. Il précède la crème ou le soin ciblé anti-imperfections de la même ligne. Un usage régulier, plutôt qu'occasionnel, donne les résultats les plus visibles sur l'aspect net de la peau.",
    ],
    positionnement: [
      "Face à un tonique alcoolisé classique, celui-ci vise à purifier sans dessécher excessivement, ce qui le rend plus adapté à un usage quotidien prolongé. Il convient aux peaux grasses ou mixtes sujettes aux imperfections, moins aux peaux sèches ou très sensibles, pour lesquelles l'huile essentielle de tea tree peut être irritante.",
    ],
    faq: [
      {
        question: "Ce tonique peut-il s'utiliser sur une peau sèche ?",
        reponse:
          "Ce n'est pas sa cible première : formulé pour les peaux grasses et sujettes aux imperfections, il peut accentuer une sensation de sécheresse sur une peau déjà tiraillée. Une lotion apaisante sans tea tree est généralement mieux adaptée à ce type de peau.",
      },
      {
        question: "Faut-il rincer ce tonique après application ?",
        reponse:
          "Non, comme la plupart des toniques, il s'utilise sans rinçage : appliqué au coton, il continue d'agir jusqu'à l'étape de soin suivante. Attendre quelques instants avant d'appliquer la crème permet une meilleure absorption, plutôt que d'enchaîner immédiatement les deux étapes sur une peau encore humide.",
      },
    ],
  },
  {
    slug: "body-shop-white-lusk-sport-anti-perspirant-deodorant-50ml",
    identite: [
      "Ce déodorant anti-transpirant The Body Shop, au format 50 ml, s'inscrit dans l'univers musqué de la marque, décliné ici dans une version plus fraîche et sportive que le parfum musc blanc classique. Il combine une action anti-transpirante avec un parfum plus léger, pensé pour une activité physique ou une journée active plutôt que pour un usage habillé du soir.",
      "Sa formule vise à limiter la sensation d'humidité tout en parfumant discrètement, sans la puissance d'un parfum de sillage porté sur le reste du corps.",
    ],
    faits: [
      { libelle: "Format", valeur: "Déodorant anti-transpirant" },
      { libelle: "Registre olfactif", valeur: "Musqué, frais" },
      { libelle: "Zone", valeur: "Aisselles" },
    ],
    usage: [
      "S'applique sur peau propre et sèche, idéalement le matin, en une à deux pressions ou passages selon le format. Il ne doit pas s'appliquer sur une peau irritée ou fraîchement épilée, ce qui peut accentuer une sensation de picotement. Son effet se maintient sur la journée, avec un renouvellement possible après une activité physique intense.",
    ],
    positionnement: [
      "Face à un déodorant sans parfum ou hypoallergénique, celui-ci ajoute une dimension olfactive fraîche pensée pour l'activité sportive. Il convient à qui tolère bien les parfums sur une zone sensible comme l'aisselle, moins à une peau très réactive, pour laquelle une version sans parfum reste préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer juste après une épilation ou un rasage ?",
        reponse:
          "Ce n'est pas recommandé : la peau fraîchement épilée ou rasée est plus sensible, et un déodorant parfumé peut provoquer une sensation de picotement ou une irritation. Mieux vaut attendre quelques heures avant application, le temps que la peau retrouve son état normal.",
      },
      {
        question: "Ce déodorant tient-il toute la journée en cas d'activité sportive ?",
        reponse:
          "Sa formule anti-transpirante est pensée pour un usage actif, mais une transpiration très abondante lors d'un effort intense peut nécessiter une réapplication en cours de journée, comme pour la plupart des déodorants de ce type.",
      },
    ],
  },
  {
    slug: "colossal-go-extreme-leather-black",
    identite: [
      "Ce mascara de la ligne Colossal Go Extreme mise sur un volume marqué dès la première couche, grâce à une brosse dense pensée pour charger la fibre du cil sans trop l'alourdir. La teinte Leather Black est un noir profond et mat, sans reflet, pour un effet intense plutôt que nuancé.",
      "Cette ligne se positionne dans le registre des mascaras volumateurs à fort rendu immédiat, plutôt que dans celui des mascaras allongeants ou incurvants plus discrets.",
    ],
    faits: [
      { libelle: "Format", valeur: "Mascara volumateur" },
      { libelle: "Teinte", valeur: "Leather Black, noir profond" },
      { libelle: "Fini", valeur: "Mat, intense" },
    ],
    usage: [
      "S'applique de la racine vers la pointe des cils, en zigzag pour bien charger la base, puis en un passage plus lisse pour répartir la matière sur la longueur. Une seconde couche accentue le volume sans figer les cils si elle est appliquée avant séchage complet de la première. Il se retire avec un démaquillant biphasé si la formule résiste à l'eau.",
    ],
    positionnement: [
      "Face à un mascara allongeant, celui-ci privilégie le volume immédiat sur la longueur ou la courbure des cils. Il convient à qui cherche un regard marqué et dense, moins à qui préfère un effet naturel ou porte des lentilles de contact, pour lesquelles une formule plus légère est généralement conseillée.",
    ],
    faq: [
      {
        question: "Ce mascara convient-il aux porteurs de lentilles de contact ?",
        reponse:
          "Un mascara volumateur chargé demande une attention particulière au démaquillage pour éviter tout résidu près de l'œil, ce qui peut être plus contraignant pour un porteur de lentilles. Une application soignée, sans excès à la racine, limite ce risque.",
      },
      {
        question: "Faut-il un démaquillant spécifique pour retirer ce mascara ?",
        reponse:
          "Un démaquillant biphasé, adapté aux formules résistantes, facilite un retrait complet sans frotter. Frotter les yeux pour retirer un mascara volumateur peut fragiliser les cils et la zone du contour de l'œil à la longue.",
      },
    ],
  },
  {
    slug: "colossal-kajal-maybelline",
    identite: [
      "Ce crayon kajal Maybelline de la ligne Colossal est conçu pour tracer la ligne d'eau et le contour de l'œil avec une matière souple qui glisse sans tirer sur la paupière. Sa mine pigmentée dépose une couleur intense dès le premier passage, dans un registre plus dense qu'un eyeliner liquide classique.",
      "Facilement estompable au doigt ou avec un pinceau, il permet aussi bien un trait net qu'un effet smoky plus travaillé, ce qui en fait un format polyvalent du maquillage des yeux.",
    ],
    faits: [
      { libelle: "Format", valeur: "Crayon kajal" },
      { libelle: "Fini", valeur: "Intense, estompable" },
      { libelle: "Zone", valeur: "Contour des yeux, ligne d'eau" },
    ],
    usage: [
      "Se trace sur la paupière supérieure ou dans la ligne d'eau inférieure, en tirant légèrement la paupière pour un trait plus précis. La matière souple permet de l'estomper immédiatement au doigt ou à l'aide d'un pinceau pour un effet plus fondu. Un léger passage de poudre translucide par-dessus prolonge sa tenue sur peau grasse.",
    ],
    positionnement: [
      "Face à un eyeliner liquide, ce kajal offre plus de facilité d'application et une texture qui pardonne mieux les imprécisions, au prix d'un trait moins net et moins durable dans la journée. Il convient à qui débute ou cherche un effet plus doux et fumé, moins à qui recherche un trait graphique très précis et tenace.",
    ],
    faq: [
      {
        question: "Ce kajal tient-il aussi longtemps qu'un eyeliner liquide ?",
        reponse:
          "En général non : la texture crayon, plus grasse, s'estompe davantage au fil de la journée qu'un eyeliner liquide qui sèche en formant un film. Une poudre fixatrice appliquée par-dessus améliore sensiblement sa tenue, en particulier sur une paupière grasse ou en climat chaud.",
      },
      {
        question: "Peut-on l'utiliser dans la ligne d'eau sans irritation ?",
        reponse:
          "Ce type de crayon est conçu pour cet usage, mais la ligne d'eau reste une zone sensible : un test de tolérance est conseillé, et mieux vaut éviter tout usage prolongé en cas d'yeux sensibles ou de lentilles de contact qui deviennent irritantes.",
      },
    ],
  },
  {
    slug: "nordea-acide-salicylique-2-island-lichen-nettoyant",
    identite: [
      "Ce nettoyant annonce dans son nom une concentration de 2 % d'acide salicylique, un actif exfoliant reconnu pour son affinité avec le sébum et son usage sur les peaux à tendance grasse ou sujettes aux points noirs. L'ajout de lichen des îles suggère une dimension apaisante, pensée pour contrebalancer l'effet parfois asséchant de l'acide salicylique seul.",
      "En format nettoyant plutôt que sérum ou masque, il s'utilise en routine quotidienne au moment du lavage du visage, sans rester en pose prolongée sur la peau.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide salicylique 2 %" },
      { libelle: "Texture", valeur: "Gel nettoyant" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance imperfections" },
    ],
    usage: [
      "S'utilise comme un nettoyant classique, sur visage humide, en massant délicatement puis en rinçant à l'eau tiède. Le contact étant bref, l'acide salicylique agit surtout en surface, ce qui en fait une formule plus douce qu'un sérum laissé en pose. Un usage quotidien, matin ou soir, convient à la plupart des peaux grasses.",
    ],
    positionnement: [
      "Face à un nettoyant sans actif exfoliant, celui-ci ajoute une action ciblée sur les peaux à tendance grasse ou à imperfections, sans remplacer un sérum ou un traitement local plus concentré. Il convient moins à une peau sèche ou déjà exfoliée par ailleurs, au risque de cumuler les actifs et d'irriter la peau.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce nettoyant tous les jours ?",
        reponse:
          "Oui en général, car le temps de contact court d'un nettoyant limite l'effet asséchant de l'acide salicylique par rapport à un sérum laissé en pose. Si la peau tire ou pèle après application, réduire à un usage un jour sur deux est préférable.",
      },
      {
        question: "Faut-il ajouter un autre exfoliant en complément de ce nettoyant ?",
        reponse:
          "Ce n'est pas nécessaire dans la plupart des cas : cumuler plusieurs actifs exfoliants dans la même routine augmente le risque d'irritation. Si un exfoliant supplémentaire est utilisé, mieux vaut l'appliquer un autre jour que ce nettoyant.",
      },
    ],
  },
  {
    slug: "nordea-aha-10-bha-2-lingonberry-exfoliante",
    identite: [
      "Cette solution exfoliante combine des AHA à 10 % et du BHA à 2 %, une association qui agit à la fois en surface, sur les cellules mortes, et plus en profondeur dans le pore grâce à l'action lipophile du BHA. L'ajout d'extrait de lingonberry, une baie riche en actifs antioxydants, complète la formule dans un registre de confort pour limiter l'agressivité du duo d'acides.",
      "Une concentration combinée de cet ordre reste un exfoliant pour peau déjà habituée aux acides, à introduire progressivement plutôt qu'en usage quotidien d'emblée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA 10 % et BHA 2 %" },
      { libelle: "Texture", valeur: "Solution liquide" },
      { libelle: "Type de peau", valeur: "Tolérante aux acides, à texture irrégulière" },
    ],
    usage: [
      "S'applique le soir, sur peau nettoyée et sèche, à l'aide d'un coton ou des doigts, en évitant le contour des yeux et des lèvres. Une à deux fois par semaine suffit pour une peau qui découvre ce type de concentration, avec une protection solaire obligatoire le lendemain matin. Ne se combine pas avec un rétinol ou un autre exfoliant le même soir.",
    ],
    positionnement: [
      "Comparée à un exfoliant doux à faible concentration, cette solution agit plus rapidement sur le grain de peau et l'aspect terne, au prix d'un risque d'irritation plus élevé en cas de peau non préparée. Elle convient à une peau déjà habituée aux acides de fruits, pas à une peau sensible ou en première utilisation d'un exfoliant chimique.",
    ],
    faq: [
      {
        question: "Peut-on utiliser cette solution tous les soirs ?",
        reponse:
          "Non, une concentration combinée d'AHA à 10 % et de BHA à 2 % est trop élevée pour un usage quotidien chez la plupart des peaux. Un rythme d'une à deux applications par semaine, ajusté selon la tolérance, est plus prudent.",
      },
      {
        question: "Faut-il une protection solaire après utilisation ?",
        reponse:
          "Oui, systématiquement. Les acides exfoliants comme l'AHA et le BHA augmentent la sensibilité de la peau au soleil ; une protection solaire le lendemain matin n'est pas optionnelle après ce type de soin, même en cas de ciel couvert.",
      },
    ],
  },
  {
    slug: "oerdinary-retinol-1",
    identite: [
      "Ce sérum affiche une concentration de rétinol à 1 %, un niveau élevé pour cet actif reconnu pour son action sur le renouvellement cellulaire et l'aspect du grain de peau au fil des semaines. Une telle concentration se destine à une peau déjà habituée au rétinol, pas à une première utilisation, sous peine d'irritation marquée.",
      "Comme pour tout soin au rétinol, l'effet ne se juge pas après une seule application mais sur plusieurs semaines d'usage régulier et progressif.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Rétinol 1 %" },
      { libelle: "Texture", valeur: "Sérum" },
      { libelle: "Usage", valeur: "Soir uniquement" },
    ],
    usage: [
      "S'applique le soir, sur peau propre et parfaitement sèche, en petite quantité sur l'ensemble du visage en évitant le contour des yeux. Pour une peau qui découvre le rétinol à cette concentration, commencer par une application tous les trois ou quatre jours limite le risque de rougeurs et de pelage. Une protection solaire est indispensable le lendemain matin.",
    ],
    positionnement: [
      "Face à un rétinol à faible concentration, ce sérum agit potentiellement plus vite sur l'aspect des rides et du grain de peau, mais avec un risque d'irritation nettement plus élevé en cas d'usage non progressif. Il ne convient pas à une peau qui découvre le rétinol pour la première fois, ni en cas de grossesse ou d'allaitement, situations pour lesquelles le rétinol est déconseillé.",
    ],
    faq: [
      {
        question: "Peut-on commencer le rétinol directement avec cette concentration à 1 % ?",
        reponse:
          "Ce n'est pas recommandé. Une peau qui n'a jamais utilisé de rétinol devrait débuter par une concentration plus faible avant d'envisager un tel dosage, au risque sinon de rougeurs, de tiraillements et de pelage marqués dans les premières semaines.",
      },
      {
        question: "Peut-on utiliser ce sérum pendant la grossesse ?",
        reponse:
          "Non, le rétinol est déconseillé pendant la grossesse et l'allaitement par mesure de précaution. Il est préférable de se tourner vers des alternatives compatibles, comme certains actifs à base de bakuchiol, et de demander conseil à un professionnel de santé.",
      },
    ],
  },
  {
    slug: "rituals-sakura-4-bestsellers-4pieces",
    identite: [
      "Ce coffret Rituals reprend l'univers Sakura de la marque, construit autour du riz et de la fleur de cerisier, dans un registre doux et apaisant plutôt que tonique. Il réunit quatre formats parmi les références les plus demandées de la ligne, pensés pour se succéder dans une même routine de soin du corps plutôt que pour être utilisés isolément.",
      "Ce type de coffret sert autant d'introduction à une gamme que de format cadeau, en permettant de tester plusieurs textures d'une même famille olfactive sans investir dans les formats pleine taille.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "The Ritual of Sakura" },
      { libelle: "Registre olfactif", valeur: "Riz et fleur de cerisier" },
      { libelle: "Usage", valeur: "Format cadeau ou découverte" },
    ],
    usage: [
      "Les différents formats du coffret s'intègrent aux étapes habituelles d'une routine de soin du corps, généralement du nettoyage à l'hydratation, chacun dans son usage propre selon sa texture. Il convient de vérifier l'usage indiqué sur chaque pièce du coffret plutôt que d'appliquer toutes les références de la même façon.",
    ],
    positionnement: [
      "Face à l'achat de références isolées de la même gamme, ce coffret permet de couvrir plusieurs étapes de la routine pour un investissement plus mesuré, au prix d'une moindre liberté sur les formats et les quantités. Il convient à qui découvre la ligne Sakura ou cherche un format cadeau, moins à qui a déjà ses formats de prédilection en pleine taille.",
    ],
    faq: [
      {
        question: "Faut-il utiliser les quatre produits du coffret dans un ordre précis ?",
        reponse:
          "En général, une routine de soin du corps suit un ordre logique du nettoyage vers l'hydratation, mais chaque référence du coffret garde son usage propre indiqué sur son propre contenant. Se référer à l'étiquette de chaque pièce reste le repère le plus fiable.",
      },
      {
        question: "Ce coffret convient-il comme cadeau ?",
        reponse:
          "Oui, c'est un usage courant pour ce type de format : il permet de découvrir plusieurs textures d'une même famille olfactive sans que la personne qui le reçoit ait à choisir elle-même une référence en particulier.",
      },
    ],
  },
  {
    slug: "toleriane-respectissime-demaquillant-yeux-waterproof-125ml",
    identite: [
      "Ce démaquillant yeux La Roche-Posay de la ligne Toleriane Respectissime est formulé pour retirer un maquillage waterproof sans frotter, une contrainte fréquente sur la zone fine du contour de l'œil. Sa formule, pensée pour les peaux sensibles et les yeux sensibles, minimise le contact prolongé et le risque d'irritation propre à cette zone.",
      "Le format de 125 ml en fait un produit d'usage régulier, à réserver au démaquillage des yeux plutôt qu'à l'ensemble du visage, pour lequel la marque propose des formules dédiées.",
    ],
    faits: [
      { libelle: "Type de peau", valeur: "Peau sensible, yeux sensibles" },
      { libelle: "Zone", valeur: "Contour des yeux" },
      { libelle: "Usage", valeur: "Démaquillage waterproof" },
    ],
    usage: [
      "S'applique sur un coton, posé quelques secondes sur la paupière fermée pour dissoudre le maquillage waterproof avant de glisser sans frotter, de l'intérieur vers l'extérieur de l'œil. Il ne nécessite pas de rinçage systématique mais peut être suivi d'un passage à l'eau claire selon la sensibilité de chacun. Il précède le reste du démaquillage du visage.",
    ],
    positionnement: [
      "Face à un démaquillant biphasé classique, celui-ci met l'accent sur la tolérance oculaire avant l'efficacité pure sur maquillage très résistant. Il convient particulièrement aux porteurs de lentilles de contact et aux yeux sensibles, au prix d'un temps de pose parfois un peu plus long sur un mascara très waterproof.",
    ],
    faq: [
      {
        question: "Ce démaquillant peut-il s'utiliser avec des lentilles de contact ?",
        reponse:
          "Oui, sa formule est pensée pour les yeux sensibles, ce qui inclut les porteurs de lentilles. Il est toutefois conseillé de retirer les lentilles avant le démaquillage et de bien rincer les yeux si une sensation d'inconfort apparaît.",
      },
      {
        question: "Faut-il rincer les yeux après utilisation ?",
        reponse:
          "Ce n'est pas obligatoire, la formule étant conçue pour la zone oculaire, mais un rinçage à l'eau claire reste possible en cas de sensation de film ou de sensibilité particulière ce jour-là, notamment après un démaquillage un peu plus appuyé que d'habitude.",
      },
    ],
  },
  {
    slug: "toleriane-teint-fluide-dore-teinte-15-roche-posay-30ml",
    identite: [
      "Ce fond de teint fluide La Roche-Posay, de la ligne Toleriane Teint, cible les peaux sensibles en quête d'un maquillage couvrant sans compromettre le confort cutané. La teinte 15 Doré correspond à un ton chaud, adapté aux carnations moyennes à dorées.",
      "Sa texture fluide en flacon de 30 ml se travaille facilement du doigt ou au pinceau pour un fini naturel plutôt que mat et couvrant à l'extrême. Formulé pour les peaux sensibles, il s'utilise seul ou par-dessus une base de soin adaptée au type de peau.",
    ],
    faits: [
      { libelle: "Type de peau", valeur: "Peau sensible" },
      { libelle: "Teinte", valeur: "15, Doré" },
      { libelle: "Texture", valeur: "Fluide" },
    ],
    usage: [
      "S'applique au doigt, au pinceau ou à l'éponge, en petite quantité au centre du visage puis en étirant vers l'extérieur pour un fini naturel. Il peut se superposer sur une crème de jour bien absorbée, sans attendre plus de quelques minutes entre les deux étapes. Une application en fines couches successives permet d'ajuster la couvrance sans surcharger la peau.",
    ],
    positionnement: [
      "Face à un fond de teint couvrant classique, celui-ci privilégie le confort et la tolérance cutanée sur une couvrance maximale, ce qui le rend plus adapté aux peaux sensibles ou réactives. Il convient moins à qui cherche un fini très mat et longue tenue pour masquer des imperfections marquées, pour lequel une formule plus couvrante reste préférable.",
    ],
    faq: [
      {
        question: "Comment savoir si la teinte 15 Doré correspond à ma carnation ?",
        reponse:
          "Cette teinte convient aux carnations moyennes à dorées. Le test le plus fiable reste d'appliquer une petite quantité sur la mâchoire, à la lumière du jour, pour vérifier qu'elle se fond sans ligne de démarcation visible avec le cou.",
      },
      {
        question: "Ce fond de teint convient-il à une peau à tendance grasse ?",
        reponse:
          "Sa formule est avant tout pensée pour la tolérance des peaux sensibles, pas spécifiquement pour matifier une peau grasse. Sur ce type de peau, une poudre de finition en cours de journée peut être utile pour limiter les reflets.",
      },
    ],
  },
  {
    slug: "tou-dou-creme-hydratante-150g",
    identite: [
      "Cette crème hydratante Tou Dou se destine à la toilette et au soin quotidien du bébé, dans un registre simple d'hydratation de la peau plutôt que de traitement d'un problème cutané particulier. Sa texture crème, plus riche qu'un lait, convient à une application sur les zones les plus sèches après le bain.",
      "Comme pour tout produit destiné à la peau du nourrisson, une formule minimaliste, sans parfum marqué ni actif superflu, est généralement préférable, ce qu'il convient de vérifier sur l'emballage avant achat.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Crème" },
      { libelle: "Zone", valeur: "Corps du bébé" },
      { libelle: "Usage", valeur: "Après le bain, sur peau sèche" },
    ],
    usage: [
      "S'applique après le bain, sur peau propre et légèrement séchée, en petite quantité répartie sur les zones sèches du corps du bébé. Un test sur une petite zone avant la première utilisation permet de vérifier l'absence de réaction sur une peau aussi fine et sensible que celle d'un nourrisson.",
    ],
    positionnement: [
      "Face à un lait pour bébé plus fluide, cette crème apporte un effet plus riche et occlusif, utile sur les zones particulièrement sèches comme les genoux ou les coudes. Elle convient moins comme soin quotidien du corps entier en climat chaud, où un lait plus léger reste plus confortable au quotidien.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle dès la naissance ?",
        reponse:
          "Cela dépend de la formule précise du produit, qu'il faut vérifier sur l'emballage ou auprès d'un professionnel de santé. En cas de doute sur une peau de nouveau-né, un avis pédiatrique reste la référence la plus sûre avant tout nouveau produit.",
      },
      {
        question: "Faut-il l'utiliser sur le visage du bébé aussi ?",
        reponse:
          "Rien ne l'exclut a priori pour une crème corps douce, mais le visage du bébé reste une zone plus sensible. En cas de doute, mieux vaut réserver cette crème au corps et vérifier la mention d'usage indiquée sur l'emballage.",
      },
    ],
  },
  {
    slug: "trisa-bad-medium",
    identite: [
      "Cette brosse à dents Trisa se décline en dureté medium, un compromis entre la douceur d'une brosse souple et l'efficacité de nettoyage d'une brosse dure. Trisa est une marque suisse spécialisée dans l'hygiène bucco-dentaire, reconnue pour ses brosses manuelles et électriques.",
      "Une dureté medium convient à la majorité des utilisateurs adultes sans sensibilité gingivale particulière, dans un usage quotidien classique du brossage des dents.",
    ],
    faits: [
      { libelle: "Type", valeur: "Brosse à dents manuelle" },
      { libelle: "Dureté", valeur: "Medium" },
    ],
    usage: [
      "S'utilise deux fois par jour, matin et soir, par mouvements courts et sans pression excessive sur les gencives, pendant environ deux minutes. Une brosse medium demande une pression plus mesurée qu'une brosse souple pour éviter d'agresser les gencives ou l'émail à la longue.",
    ],
    positionnement: [
      "Face à une brosse souple, celle-ci retire davantage de plaque dentaire en une seule séance mais expose à un risque plus élevé d'irritation gingivale en cas de brossage trop appuyé. Elle convient à un usage quotidien standard, moins aux personnes aux gencives sensibles ou fragilisées, pour lesquelles une brosse souple reste recommandée.",
    ],
    faq: [
      {
        question: "Une brosse medium convient-elle en cas de gencives sensibles ?",
        reponse:
          "Ce n'est généralement pas le premier choix : une dureté medium peut accentuer l'inconfort sur des gencives déjà sensibles ou en cas de récession gingivale. Une brosse souple est en général mieux tolérée dans ce cas, sur avis d'un dentiste si le doute persiste.",
      },
      {
        question: "Tous les combien faut-il changer cette brosse à dents ?",
        reponse:
          "La recommandation générale pour une brosse manuelle est un changement tous les trois mois environ, ou plus tôt si les poils s'écartent visiblement. Des poils usés nettoient nettement moins bien qu'une brosse neuve, quelle que soit sa dureté d'origine.",
      },
    ],
  },
  {
    slug: "trisa-pro-clean-brosse-dent-electrique-adulte",
    identite: [
      "Cette brosse à dents électrique Trisa de la ligne Pro Clean se destine à un usage adulte quotidien, avec un mouvement mécanique pensé pour un nettoyage plus régulier qu'un brossage manuel, notamment pour les personnes qui ont tendance à brosser trop vite ou trop fort. Trisa est une marque suisse reconnue dans l'hygiène bucco-dentaire, sur les formats manuels comme électriques.",
      "Une brosse électrique de ce type standardise le geste de brossage, un avantage pour une hygiène régulière au quotidien plutôt qu'un remplacement des visites de contrôle chez le dentiste.",
    ],
    faits: [
      { libelle: "Type", valeur: "Brosse à dents électrique" },
      { libelle: "Usage", valeur: "Adulte" },
    ],
    usage: [
      "S'utilise en laissant la brosse électrique faire le travail de mouvement, en déplaçant simplement la tête de dent en dent sans exercer de pression supplémentaire. Deux minutes de brossage, matin et soir, restent la durée de référence. La tête de brosse se change selon les recommandations du fabricant, généralement tous les trois mois.",
    ],
    positionnement: [
      "Face à une brosse manuelle, l'électrique standardise le mouvement de brossage et limite le risque de brossage trop appuyé, une cause fréquente d'usure gingivale. Elle demande en contrepartie un entretien de la batterie et un remplacement régulier de la tête, ce qu'une brosse manuelle n'impose pas.",
    ],
    faq: [
      {
        question: "Faut-il quand même exercer une pression pendant le brossage électrique ?",
        reponse:
          "Non, c'est justement l'un des intérêts de ce type de brosse : le mouvement mécanique fait l'essentiel du travail, et une pression supplémentaire de la main n'améliore pas le nettoyage. Elle risque au contraire d'agresser les gencives à la longue.",
      },
      {
        question: "À quelle fréquence remplacer la tête de cette brosse électrique ?",
        reponse:
          "En général tous les trois mois, comme pour une brosse manuelle, ou plus tôt si les poils s'écartent visiblement. Une tête usée réduit l'efficacité du nettoyage même si le moteur de la brosse continue de fonctionner normalement.",
      },
    ],
  },
  {
    slug: "unazen-culotte-menstruelle",
    identite: [
      "Cette culotte menstruelle Unazen, en taille L, se porte comme un sous-vêtement classique et remplit une fonction d'absorption directe, sans protection externe complémentaire selon l'intensité du flux. Sa construction associe plusieurs couches : une face intérieure absorbante, une couche imperméable centrale qui évite les fuites, et un tissu extérieur au toucher proche d'une lingerie ordinaire.",
      "La taille L correspond à un tour de hanches plus large que les tailles S et M de la même référence, un repère à vérifier sur le guide des tailles de la marque plutôt qu'à déduire de la seule pointure habituelle en vêtement.",
    ],
    faits: [
      { libelle: "Type", valeur: "Culotte menstruelle lavable" },
      { libelle: "Taille", valeur: "L" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "Se porte comme une culotte classique, sans protection supplémentaire pour un flux léger à modéré ; un tampon ou une cup peuvent s'y associer les jours de flux plus abondant. Après usage, un rinçage à l'eau froide avant lavage évite que le sang ne fixe dans les fibres ; un lavage en machine à basse température suit, sans adoucissant qui réduirait la capacité d'absorption du tissu.",
    ],
    positionnement: [
      "Face à une protection jetable, cette culotte réduit le déchet généré à chaque cycle et évite la sensation de protection externe qui glisse. Elle demande en retour une organisation de lavage entre deux utilisations, ce qui la rend moins pratique en déplacement prolongé sans accès à une machine à laver.",
    ],
    faq: [
      {
        question: "Combien de temps peut-on porter cette culotte avant de la changer ?",
        reponse:
          "Cela dépend surtout de l'intensité du flux ce jour-là plutôt que d'une durée fixe. Une vérification en cours de journée, comme pour toute protection menstruelle, permet d'ajuster la fréquence de change selon le ressenti et non selon une règle générale.",
      },
      {
        question: "Comment savoir si la taille L est la bonne taille ?",
        reponse:
          "Le repère le plus fiable est le guide des tailles fourni par la marque, basé sur le tour de hanches plutôt que sur la taille habituelle en vêtement. Une culotte menstruelle mal ajustée, trop lâche ou trop serrée, augmente le risque de fuite sur les côtés.",
      },
    ],
  },
  {
    slug: "unazen-culotte-menstruelle-m",
    identite: [
      "En taille M, cette culotte menstruelle Unazen reprend la même construction en plusieurs couches que le reste de la référence : une face absorbante au contact de la peau, une couche centrale imperméable, et un extérieur textile discret sous les vêtements. La taille M se situe entre les tailles S et L de la gamme, pour un tour de hanches intermédiaire.",
      "Comme les autres tailles de cette référence, elle est pensée pour un lavage et une réutilisation sur plusieurs cycles plutôt que pour un usage unique.",
    ],
    faits: [
      { libelle: "Type", valeur: "Culotte menstruelle lavable" },
      { libelle: "Taille", valeur: "M" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "S'enfile comme une culotte ordinaire, seule pour un flux léger à modéré ou en complément d'un tampon ou d'une cup les jours plus abondants. Après le retrait, un rinçage à l'eau froide avant le lavage en machine facilite l'entretien ; il est préférable d'éviter le sèche-linge, qui peut endommager la couche imperméable à la longue.",
    ],
    positionnement: [
      "Comparée à une serviette jetable, cette culotte offre un maintien plus proche d'un sous-vêtement classique, sans bord qui frotte ni sensation de protection externe. Elle nécessite en contrepartie d'avoir plusieurs pièces en rotation pour couvrir un cycle complet sans lavage quotidien contraignant.",
    ],
    faq: [
      {
        question: "Faut-il plusieurs culottes de ce type pour un cycle complet ?",
        reponse:
          "C'est l'usage le plus pratique, car chaque pièce doit être lavée avant réutilisation. Avoir deux à trois culottes en rotation évite de dépendre d'un lavage quotidien et permet de s'adapter aux jours de flux plus ou moins abondant.",
      },
      {
        question: "Peut-on utiliser un adoucissant pour le lavage ?",
        reponse:
          "Ce n'est pas recommandé : un adoucissant peut déposer un film sur la couche absorbante et réduire sa capacité à retenir le flux dans la durée. Un lavage simple, sans adoucissant ni eau trop chaude, préserve mieux la performance de la culotte.",
      },
    ],
  },
  {
    slug: "unazen-culotte-menstruelle-s",
    identite: [
      "La taille S de cette culotte menstruelle Unazen correspond au tour de hanches le plus fin de la référence, dans une construction identique aux autres tailles : couche absorbante intérieure, barrière imperméable centrale, et tissu extérieur discret. Elle se porte et s'entretient de la même façon que le reste de la gamme, seule la coupe change selon la taille choisie.",
      "Comme toute culotte menstruelle, sa capacité d'absorption reste liée au nombre de couches de la référence plutôt qu'à sa taille, qui ne concerne que l'ajustement à la morphologie.",
    ],
    faits: [
      { libelle: "Type", valeur: "Culotte menstruelle lavable" },
      { libelle: "Taille", valeur: "S" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "S'utilise comme une culotte classique, seule pour un flux léger à modéré. Un rinçage à l'eau froide juste après le retrait facilite le lavage en machine qui suit, à basse température et sans adoucissant. Elle se sèche à l'air libre de préférence, le sèche-linge pouvant à la longue abîmer la couche imperméable.",
    ],
    positionnement: [
      "Face à un protège-slip jetable, cette culotte en taille S offre un maintien plus stable et moins de sensation de glissement au fil de la journée. Elle convient à un flux léger à modéré au quotidien, moins à un flux très abondant en continu, pour lequel une association avec une cup reste souvent plus sûre.",
    ],
    faq: [
      {
        question: "Cette taille S convient-elle en cas de flux abondant ?",
        reponse:
          "La taille ne détermine pas la capacité d'absorption, qui dépend de la construction interne de la culotte. En cas de flux abondant, l'association avec un tampon ou une cup reste conseillée quelle que soit la taille choisie, pour limiter le risque de fuite.",
      },
      {
        question: "Comment sécher cette culotte après lavage ?",
        reponse:
          "Un séchage à l'air libre est préférable à un passage au sèche-linge, dont la chaleur répétée peut fragiliser la couche imperméable centrale au fil des cycles. Un séchage à plat, à l'abri du soleil direct, préserve mieux la matière sur la durée.",
      },
    ],
  },
  {
    slug: "unazen-culotte-menstruelle-xl",
    identite: [
      "La taille XL de cette culotte menstruelle Unazen s'adresse à un tour de hanches plus généreux que les autres références de la gamme, avec la même construction en couches : absorption intérieure, barrière centrale imperméable, extérieur textile discret. Un bon ajustement reste déterminant pour l'efficacité de ce type de sous-vêtement, davantage que pour une culotte ordinaire, car une taille trop petite favorise les fuites sur les côtés.",
      "Comme le reste de la gamme, elle se réutilise sur plusieurs cycles moyennant un lavage adapté entre deux usages.",
    ],
    faits: [
      { libelle: "Type", valeur: "Culotte menstruelle lavable" },
      { libelle: "Taille", valeur: "XL" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "Se porte comme une culotte classique, seule ou en complément d'une protection interne selon l'intensité du flux. Après usage, un rinçage rapide à l'eau froide avant le lavage en machine, à basse température, limite les taches et préserve la couche absorbante. Éviter l'eau chaude et l'adoucissant reste la règle générale pour ce type de textile technique.",
    ],
    positionnement: [
      "Face à une serviette jetable de grande taille, cette culotte XL évite l'inconfort d'un bord qui frotte ou glisse, avec un maintien pensé pour la morphologie qu'elle cible. Elle demande en retour d'avoir plusieurs exemplaires pour couvrir un cycle sans dépendre d'un lavage quotidien.",
    ],
    faq: [
      {
        question: "Comment vérifier qu'une taille XL est bien nécessaire plutôt qu'une taille L ?",
        reponse:
          "Le guide des tailles de la marque, basé sur le tour de hanches, reste le repère le plus fiable, plutôt qu'une correspondance directe avec une taille de vêtement habituelle. Une culotte trop juste réduit le confort et augmente le risque de fuite sur les côtés.",
      },
      {
        question: "Cette culotte XL peut-elle remplacer toute protection pendant les règles ?",
        reponse:
          "Cela dépend de l'intensité du flux : elle suffit seule pour un flux léger à modéré, mais une association avec un tampon ou une cup reste conseillée les jours de flux abondant, quelle que soit la taille de la culotte.",
      },
    ],
  },
  {
    slug: "unazen-culotte-menstruelle-xs",
    identite: [
      "La taille XS complète la gamme de culottes menstruelles Unazen pour les tours de hanches les plus fins. Elle reprend la même construction technique que les autres tailles : une couche absorbante au contact de la peau, une barrière imperméable centrale, et un tissu extérieur discret sous les vêtements du quotidien.",
      "Le choix de la taille XS repose sur la morphologie et non sur l'âge, contrairement à une idée reçue qui associerait automatiquement cette taille à un usage adolescent. Elle s'entretient et se porte selon les mêmes principes que le reste de la référence, pour une réutilisation sur plusieurs cycles.",
    ],
    faits: [
      { libelle: "Type", valeur: "Culotte menstruelle lavable" },
      { libelle: "Taille", valeur: "XS" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "S'utilise comme une culotte classique, seule pour un flux léger à modéré, ou associée à une protection interne les jours plus abondants. Un rinçage à l'eau froide dès le retrait facilite le lavage en machine qui suit, à basse température et sans adoucissant, pour préserver la capacité d'absorption sur la durée.",
    ],
    positionnement: [
      "Face à une protection jetable de petite taille, cette culotte XS offre un maintien plus stable, sans bord qui frotte contre la peau. Elle convient à un flux léger à modéré au quotidien ; pour un flux abondant, une association avec une cup ou un tampon reste préférable, indépendamment de la taille de la culotte.",
    ],
    faq: [
      {
        question: "La taille XS est-elle réservée aux adolescentes ?",
        reponse:
          "Non, la taille se choisit selon le tour de hanches, pas selon l'âge. Une personne adulte avec une morphologie fine peut tout à fait porter cette taille, au même titre qu'une personne plus jeune avec un tour de hanches plus large choisira une taille supérieure.",
      },
      {
        question: "Faut-il changer cette culotte plus souvent qu'une taille plus grande ?",
        reponse:
          "La fréquence de change dépend de l'intensité du flux, pas de la taille de la culotte : les tailles diffèrent par l'ajustement à la morphologie, pas par la capacité d'absorption des couches internes, qui reste identique d'une taille à l'autre au sein de la même référence.",
      },
    ],
  },
];
