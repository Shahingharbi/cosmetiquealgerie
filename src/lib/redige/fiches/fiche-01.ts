import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "acm-novophane-shampooing-sebo-regulateur-200ml",
    identite: [
      "ACM Novophane est la ligne de la marque pharmaceutique ACM dédiée à la chute de cheveux. Cette version sébo-régulateur du shampooing vise un cuir chevelu qui produit un excès de sébum, un facteur qui aggrave souvent la chute en resserrant l'environnement du follicule. La base lavante est sans savon, respecte le film hydrolipidique et n'agresse pas un cuir chevelu déjà fragilisé par un traitement anti-chute utilisé en parallèle, lotion ou ampoules Novophane. Le résultat recherché est un cuir chevelu assaini et des racines moins grasses plus rapidement après le lavage, sans dessécher les longueurs.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Shampooing gel, base lavante sans savon" },
      { libelle: "Cuir chevelu", valeur: "Gras, sujet à la chute" },
      { libelle: "Gamme", valeur: "Novophane, ligne anti-chute ACM" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en massant le cuir chevelu du bout des doigts pour favoriser le décollement du sébum, puis se rince bien. Il s'utilise en alternance ou en association avec le soin anti-chute Novophane appliqué sur cuir chevelu sec, sans rinçage. Un usage fréquent, deux à trois fois par semaine, ne dessèche pas le cuir chevelu grâce à sa base sans savon.",
    ],
    positionnement: [
      "Face aux shampooings anti-chute généralistes, celui-ci a l'avantage de cibler spécifiquement l'excès de sébum, un point que beaucoup de gammes anti-chute négligent en se concentrant seulement sur les vitamines fortifiantes. Il convient moins bien à un cuir chevelu déjà sec ou sensibilisé sans production excessive de sébum, pour lequel un shampooing anti-chute classique, plus doux, sera mieux toléré au quotidien.",
    ],
    faq: [
      {
        question: "Ce shampooing suffit-il seul à stopper la chute de cheveux ?",
        reponse: "Non. Un shampooing sébo-régulateur assainit le cuir chevelu et prépare le terrain, mais l'action anti-chute proprement dite vient du soin laissé en place, lotion ou ampoules Novophane, qui s'applique en complément sur cuir chevelu propre et sec, selon le protocole conseillé par la gamme.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse: "Sa base sans savon le permet sans dessécher excessivement, mais un rythme de deux à trois lavages par semaine, adapté à la vitesse de repousse du sébum, suffit généralement à contrôler un cuir chevelu gras sans fragiliser la fibre ni perturber l'équilibre du cuir chevelu.",
      },
    ],
  },
  {
    slug: "anua-birch-70-moisture-boosting-serum-30ml",
    identite: [
      "Anua construit ce sérum autour de la sève de bouleau, utilisée à hauteur de 70% de la formule, une matière première scandinave réputée pour sa capacité à retenir l'eau sans laisser de film gras. La texture est fluide, proche de l'eau, et pénètre en quelques secondes, ce qui en fait un soin apprécié dans la routine coréenne en plusieurs couches où chaque étape doit rester légère. Il s'adresse à une peau déshydratée, y compris grasse ou à tendance acnéique, puisque l'hydratation apportée ne repose pas sur des corps gras occlusifs. Le panthénol qui l'accompagne renforce l'effet apaisant sur une peau tiraillée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Sève de bouleau (birch sap) 70%" },
      { libelle: "Galénique", valeur: "Sérum fluide, texture aqueuse" },
      { libelle: "Type de peau", valeur: "Déshydratée, y compris grasse ou mixte" },
    ],
    usage: [
      "S'applique après la lotion tonique, en tapotant deux à trois gouttes sur l'ensemble du visage avant le sérum suivant ou la crème. Sa texture fine permet de superposer d'autres soins sans effet de surcharge, ce qui en fait une bonne base d'hydratation avant un actif plus ciblé comme la niacinamide ou un rétinoïde, appliqué ensuite pour ne pas diluer son action.",
    ],
    positionnement: [
      "Comparé aux sérums hydratants classiques à base d'acide hyaluronique, celui-ci mise sur une matière première unique plutôt que sur un cocktail d'actifs, ce qui le rend simple à intégrer sans risque d'interaction. Il convient moins bien à une peau cherchant une action ciblée anti-âge ou anti-tache, pour laquelle il ne joue qu'un rôle de base hydratante, pas de traitement à proprement parler.",
    ],
    faq: [
      {
        question: "Ce sérum remplace-t-il une crème hydratante ?",
        reponse: "Non, sa texture aqueuse hydrate en surface mais n'apporte pas l'effet occlusif d'une crème. Sur peau sèche, il s'utilise avant une crème plus riche pour renforcer l'hydratation ; sur peau grasse ou mixte, il peut suffire seul en journée sans alourdir la peau ni laisser de film.",
      },
      {
        question: "Peut-il s'utiliser avec de la niacinamide ou un rétinol ?",
        reponse: "Oui, sa formule simple et apaisante en fait une bonne base avant d'appliquer un actif plus actif comme la niacinamide le matin ou un rétinoïde le soir, sans risque de réaction entre les deux produits, ce sérum jouant surtout un rôle de préparation hydratante.",
      },
    ],
  },
  {
    slug: "anua-heartleaf-77-soothing-toner-250ml",
    identite: [
      "Ce toner d'Anua est formulé à 77% d'extrait de heartleaf, une plante utilisée en médecine traditionnelle coréenne pour ses propriétés apaisantes, et devenue un classique des routines K-beauty pour peau sujette aux rougeurs et à l'acné. La texture est aqueuse, sans alcool, et se comporte comme une première lotion qui rééquilibre le pH après le nettoyage plutôt que comme un tonique astringent à l'ancienne. Le format 250 ml, généreux pour un toner, permet un usage en tampon ou en plusieurs couches successives, sans craindre d'en manquer rapidement en cours de routine.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Extrait de heartleaf 77%" },
      { libelle: "Galénique", valeur: "Lotion tonique aqueuse, sans alcool" },
      { libelle: "Type de peau", valeur: "Sensible, sujette aux rougeurs ou à l'acné" },
    ],
    usage: [
      "S'applique au coton ou à la main, en tapotant, juste après le nettoyage du visage. Peut s'utiliser en une seule couche pour rééquilibrer le pH avant le sérum, ou en plusieurs couches successives sur une peau très déshydratée ou irritée, en laissant chaque couche pénétrer avant d'appliquer la suivante.",
    ],
    positionnement: [
      "Par rapport aux toners parfumés ou à base d'alcool encore courants, celui-ci privilégie l'apaisement au détriment de la sensation immédiate de fraîcheur : pas d'effet tenseur ni parfum marqué. Il convient moins à qui cherche un tonique exfoliant ou resserrant les pores, deux fonctions qu'il ne remplit pas, cette gamme se concentrant sur le confort de la peau réactive.",
    ],
    faq: [
      {
        question: "Ce toner pique-t-il en cas de peau irritée ?",
        reponse: "Non, c'est justement sa raison d'être : une formule sans alcool ni parfum marqué, pensée pour ne pas piquer sur une peau réactive ou fraîchement exfoliée, contrairement aux toniques astringents classiques qui peuvent aggraver une sensation d'inconfort déjà présente sur ce type de peau fragilisée.",
      },
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse: "Oui, sa formule douce et sans actif exfoliant le permet sans risque d'irritation cumulée, ce qui en fait une étape stable à garder aux deux bouts de la routine, y compris les jours où la peau est particulièrement sensibilisée ou tiraillée.",
      },
    ],
  },
  {
    slug: "anua-rice-70-intensive-moisturizing-milk-150ml",
    identite: [
      "Ce lait hydratant d'Anua s'appuie sur un extrait de riz à 70%, une matière traditionnellement associée en Corée à l'éclat et à l'adoucissement du grain de peau. La texture est plus riche qu'un simple toner sans être une crème : un lait qui nourrit et apaise, pensé pour les peaux qui tiraillent ou présentent des rougeurs après le nettoyage. Il s'inscrit dans la gamme Rice d'Anua, orientée confort et douceur plutôt que traitement ciblé, et convient aussi bien en soin du soir qu'en base avant maquillage pour une peau instantanément plus souple.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Extrait de riz 70%" },
      { libelle: "Galénique", valeur: "Lait fluide, non collant" },
      { libelle: "Type de peau", valeur: "Sèche, sensible ou sujette aux rougeurs" },
    ],
    usage: [
      "S'applique après le toner, en quantité généreuse sur le visage et le cou, en massant jusqu'à absorption complète. Sa texture lactée permet de l'utiliser seul les jours où la peau est simplement fatiguée, ou en dessous d'une crème plus riche l'hiver. Convient également en soin apaisant après une exposition au soleil ou au vent.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes classiques, ce lait a une texture plus légère et pénètre plus vite, ce qui le rend adapté à un usage en toute saison, y compris sur peau mixte. Il convient moins bien à une peau très sèche en hiver qui recherche un effet occlusif fort ; dans ce cas, il fonctionnera mieux en base sous une crème plus riche qu'en soin unique.",
    ],
    faq: [
      {
        question: "Ce lait convient-il aux peaux à tendance grasse ?",
        reponse: "Oui, sa texture fluide et non collante ne bouche pas les pores et apporte du confort sans excès de gras, ce qui le rend utilisable même sur une peau mixte à grasse en quête d'apaisement, notamment après un nettoyage un peu asséchant.",
      },
      {
        question: "Peut-il remplacer le sérum du soir ?",
        reponse: "Il joue un rôle d'hydratation et de confort plutôt que de traitement ciblé. Sur une routine simplifiée, il peut suffire seul le soir, mais ne remplace pas un sérum à actif spécifique comme la niacinamide pour une problématique précise du teint.",
      },
    ],
  },
  {
    slug: "arencia-retinal-booster-shot-30ml",
    identite: [
      "Ce soin d'Arencia est construit autour du rétinaldéhyde, souvent abrégé retinal, un dérivé de la vitamine A reconnu pour agir plus vite que le rétinol tout en restant mieux toléré que l'acide rétinoïque pur. Le format booster shot désigne un concentré destiné à être utilisé seul en cure ou ajouté ponctuellement à la routine du soir, plutôt qu'un sérum d'usage quotidien classique. Il vise les premiers signes de l'âge, ride fine, perte d'éclat, grain de peau irrégulier, sur une peau déjà accoutumée aux actifs, la vitamine A étant potentiellement irritante en début d'utilisation.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Rétinaldéhyde (retinal)" },
      { libelle: "Format", valeur: "Concentré type booster, cure ciblée" },
      { libelle: "Usage conseillé", valeur: "Le soir, peau déjà accoutumée aux rétinoïdes" },
    ],
    usage: [
      "S'utilise le soir, sur peau propre et sèche, en très petite quantité au départ pour habituer la peau. Il ne se combine pas avec un acide exfoliant fort ou un autre rétinoïde le même soir, au risque d'irriter inutilement la barrière cutanée. Une protection solaire quotidienne est indispensable en parallèle, la vitamine A rendant la peau plus sensible au soleil.",
    ],
    positionnement: [
      "Comparé à un sérum au rétinol classique, le rétinaldéhyde agit en général plus rapidement sur le grain de peau, avec une tolérance intermédiaire entre le rétinol et l'acide rétinoïque sur prescription. Il convient moins bien à une peau débutante en vitamine A ou déjà réactive, pour laquelle une introduction progressive avec un rétinol plus doux sera plus prudente avant d'envisager ce type de concentré.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser dès la première utilisation de rétinoïdes ?",
        reponse: "Ce n'est pas conseillé. Le format booster est concentré et convient mieux à une peau déjà habituée à un rétinol classique introduit progressivement, plutôt qu'à un tout premier contact avec la vitamine A, au risque d'une irritation inutilement marquée en début de traitement.",
      },
      {
        question: "Faut-il l'associer à une protection solaire ?",
        reponse: "Oui, impérativement. Le rétinaldéhyde augmente la photosensibilité de la peau ; une protection solaire quotidienne le matin est indispensable pendant toute la durée d'utilisation de ce type de soin, y compris les jours sans exposition volontaire au soleil ou par temps couvert.",
      },
    ],
  },
  {
    slug: "avene-cleanance-gel-nettoyant-200ml",
    identite: [
      "Cleanance est la gamme d'Avène dédiée aux peaux grasses et à tendance acnéique. Ce gel nettoyant, à base d'eau thermale d'Avène, élimine l'excès de sébum et les impuretés du quotidien sans savon et sans agresser la barrière cutanée, ce qui évite l'effet rebond de sébum que provoquent certains nettoyants trop décapants. La texture gel mousse légèrement au contact de l'eau et se rince sans laisser de film. Il s'adresse à une peau grasse, avec ou sans imperfections actives, cherchant un nettoyage efficace mais non asséchant, en première étape d'une routine anti-imperfections.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Gel moussant, sans savon" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance acnéique" },
      { libelle: "Gamme", valeur: "Cleanance (Avène)" },
    ],
    usage: [
      "S'applique matin et soir sur peau humide, en massant délicatement le visage puis en rinçant à l'eau tiède. Ne pas insister avec des mouvements agressifs pour ne pas stimuler davantage la production de sébum. Convient en première étape avant un soin ciblé anti-imperfections de la même gamme, appliqué ensuite sur une peau propre.",
    ],
    positionnement: [
      "Face aux nettoyants purifiants qui misent sur des tensioactifs puissants et assèchent souvent la peau à moyen terme, celui-ci reste doux tout en nettoyant efficacement, ce qui le rend adapté à un usage biquotidien prolongé. Il convient moins bien à une peau sèche ou normale sans excès de sébum, pour laquelle un nettoyant plus riche en agents hydratants sera mieux toléré au quotidien.",
    ],
    faq: [
      {
        question: "Ce gel nettoyant assèche-t-il la peau à la longue ?",
        reponse: "Non, sa base sans savon est justement pensée pour éviter l'effet tiraillement des nettoyants purifiants classiques. Un usage biquotidien régulier reste bien toléré, même sur une peau grasse fragilisée par d'autres soins asséchants utilisés en parallèle, comme un traitement local anti-imperfections.",
      },
      {
        question: "Peut-on l'utiliser en cas d'acné légère à modérée ?",
        reponse: "Oui, c'est l'un de ses usages principaux. Il nettoie sans irriter davantage une peau à imperfections et s'utilise en complément d'un soin traitant plus ciblé de la gamme Cleanance, appliqué après le nettoyage sur une peau bien séchée et apaisée.",
      },
    ],
  },
  {
    slug: "avene-hydrance-uv-emulsion-hydratante-legere-spf30-40ml",
    identite: [
      "Hydrance est la gamme hydratation d'Avène pour peau déshydratée, et cette version UV ajoute une protection solaire SPF30 à l'émulsion légère habituelle. La texture fluide, à base d'eau thermale d'Avène, hydrate sans laisser de film gras ni d'effet blanc marqué, ce qui la rend utilisable comme soin du matin unique, hydratation et protection en un seul geste. Elle s'adresse à une peau normale à sèche, déshydratée, qui souhaite éviter de superposer une crème hydratante puis un écran solaire séparé au quotidien.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF30" },
      { libelle: "Galénique", valeur: "Émulsion légère" },
      { libelle: "Type de peau", valeur: "Normale à sèche, déshydratée" },
    ],
    usage: [
      "S'applique le matin, en dernière étape de la routine avant le maquillage, sur le visage et le cou. La protection SPF30 qu'elle apporte ne dispense pas d'une réapplication en cas d'exposition prolongée au soleil, la quantité utilisée en soin du visage étant généralement insuffisante pour maintenir l'indice annoncé sur plusieurs heures.",
    ],
    positionnement: [
      "Par rapport à une routine classique crème hydratante puis solaire séparé, cette émulsion deux-en-un simplifie le geste du matin sans sacrifier le confort. Elle convient moins bien à une exposition solaire volontaire et prolongée, plage ou sport extérieur, pour laquelle une crème solaire dédiée, appliquée en quantité suffisante et réappliquée régulièrement, reste préférable à ce soin pensé pour l'exposition incidente du quotidien.",
    ],
    faq: [
      {
        question: "Cette émulsion suffit-elle pour une journée à la plage ?",
        reponse: "Non. Sa protection SPF30 est pensée pour l'exposition incidente du quotidien, en ville. Pour une exposition prolongée au soleil, une crème solaire dédiée, appliquée généreusement et réappliquée toutes les deux heures environ, reste nécessaire en complément de ce soin léger.",
      },
      {
        question: "Laisse-t-elle un film blanc sous le maquillage ?",
        reponse: "Sa texture émulsion légère est formulée pour minimiser cet effet, contrairement à certaines crèmes solaires plus épaisses. Un léger temps de pose avant l'application du maquillage améliore encore le résultat et facilite l'accroche du fond de teint appliqué juste après, sans effet cireux.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-ginseng-essence-water-150ml",
    identite: [
      "Beauty of Joseon puise dans la pharmacopée coréenne traditionnelle, et cette essence associe le ginseng, réputé tonifiant et légèrement raffermissant, à une texture aqueuse proche d'un toner mais plus riche en actifs. Le terme essence, en soin coréen, désigne une étape intermédiaire entre le tonique et le sérum : elle prépare la peau à mieux recevoir les soins suivants tout en apportant une première dose d'hydratation et d'éclat. Le format 150 ml, généreux, encourage un usage en plusieurs couches légères plutôt qu'en une seule application économe.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Ginseng" },
      { libelle: "Galénique", valeur: "Essence aqueuse" },
      { libelle: "Étape", valeur: "Intermédiaire entre toner et sérum" },
    ],
    usage: [
      "S'applique après le toner, à la main ou au coton, en tapotant une à plusieurs couches selon les besoins d'hydratation du jour. Elle prépare la peau avant le sérum ciblé et la crème, sans se substituer à eux. Convient matin et soir dans une routine construite en plusieurs étapes successives.",
    ],
    positionnement: [
      "Comparé à un sérum concentré en un actif unique, cette essence joue un rôle plus modeste mais polyvalent, celui de préparer la peau et d'apporter un premier confort. Elle convient moins bien à qui cherche un résultat ciblé rapide sur une problématique précise, taches ou rides marquées, pour laquelle un sérum dédié, appliqué après elle, sera plus efficace.",
    ],
    faq: [
      {
        question: "Une essence est-elle indispensable dans la routine ?",
        reponse: "Non, c'est une étape de confort plutôt qu'une nécessité stricte. Elle prépare la peau et améliore l'absorption des soins suivants, mais une routine simplifiée fonctionne aussi sans elle, en passant directement du toner au sérum sans perte majeure d'efficacité au quotidien.",
      },
      {
        question: "Peut-elle remplacer le sérum du jour ?",
        reponse: "Elle peut suffire les jours de routine allégée, mais elle n'a pas la concentration en actifs ciblés d'un sérum dédié, comme celui à la niacinamide de la même marque, pensé pour une action plus marquée sur une problématique précise du teint.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-glow-serum-propolis-niacinamide-30ml",
    identite: [
      "Ce sérum est l'un des produits les plus connus de Beauty of Joseon, associant propolis, réputée apaisante et nourrissante, et niacinamide, un actif largement documenté pour affiner l'aspect des pores et unifier le teint. La texture, légèrement collante à l'application, laisse ensuite un fini lumineux caractéristique qui a fait la réputation du produit sous le nom de glow serum. Il s'adresse à une peau terne ou marquée par des pores dilatés, cherchant un coup d'éclat immédiat autant qu'une amélioration progressive du grain de peau avec un usage régulier.",
    ],
    faits: [
      { libelle: "Actifs principaux", valeur: "Propolis et niacinamide" },
      { libelle: "Galénique", valeur: "Sérum, texture légèrement collante" },
      { libelle: "Effet recherché", valeur: "Éclat immédiat, grain de peau affiné" },
    ],
    usage: [
      "S'applique après le toner ou l'essence, quelques gouttes réparties sur le visage puis lissées jusqu'à absorption. Sa texture collante se fluidifie avec la chaleur des mains ; il est préférable de laisser le temps de pénétrer avant de superposer un maquillage poudré. Utilisable matin et soir selon la tolérance de la peau.",
    ],
    positionnement: [
      "Face aux sérums à la niacinamide seule, celui-ci ajoute l'apport apaisant de la propolis, ce qui le rend plus confortable sur une peau sensibilisée par d'autres actifs. Il convient moins bien à une peau très grasse en climat chaud, pour laquelle la texture collante peut peser sous le maquillage ; un sérum plus fluide sera alors préférable en journée.",
    ],
    faq: [
      {
        question: "Pourquoi ce sérum colle-t-il un peu à l'application ?",
        reponse: "C'est une caractéristique connue de sa texture, liée à la concentration en propolis. Une petite quantité, bien répartie et laissée à pénétrer quelques minutes avant la suite de la routine, limite nettement cette sensation collante, en particulier sous le maquillage.",
      },
      {
        question: "Peut-il s'utiliser avec un rétinol ?",
        reponse: "Oui, la niacinamide et la propolis sont généralement bien tolérées avec un rétinoïde. Il est conseillé de l'appliquer avant le rétinol, sur peau bien sèche, pour limiter le risque d'irritation et profiter de l'effet apaisant de la propolis en amont.",
      },
    ],
  },
  {
    slug: "bioderma-photoderm-pediatrics-spray-200ml",
    identite: [
      "Photoderm Pediatrics est la version de la gamme solaire Bioderma pensée pour la peau des enfants, plus fine et plus réactive au soleil que celle d'un adulte. Le format spray facilite l'application sur un enfant qui bouge, sans nécessiter de frotter longuement. La formule vise une protection large spectre avec une texture résistante à l'eau, pensée pour tenir pendant la baignade et le jeu en extérieur, tout en limitant le risque de réaction cutanée sur une peau sensible et encore fine.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "Très haute protection, spray pédiatrique" },
      { libelle: "Format", valeur: "Spray, résistant à l'eau" },
      { libelle: "Zone", valeur: "Corps de l'enfant" },
    ],
    usage: [
      "S'applique généreusement sur toutes les zones exposées avant le début de l'exposition solaire, en laissant pénétrer avant l'habillage. Une réapplication après la baignade, la transpiration ou le séchage à la serviette est nécessaire même si le produit est annoncé résistant à l'eau, l'effet s'atténuant avec le temps passé dans l'eau.",
    ],
    positionnement: [
      "Par rapport à une crème solaire adulte utilisée par défaut sur un enfant, ce spray pédiatrique est pensé pour une peau plus fine, avec une formule qui limite le risque de picotements aux yeux en cas de contact. Il convient moins bien à un usage sur le visage à proximité immédiate des yeux, où une texture crème appliquée à la main reste plus facile à contrôler.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage de l'enfant ?",
        reponse: "Le spray peut être vaporisé sur les mains de l'adulte puis appliqué sur le visage de l'enfant, pour éviter tout contact direct avec les yeux, plutôt que pulvérisé directement sur cette zone, comme pour la plupart des solaires en spray destinés aux enfants.",
      },
      {
        question: "Faut-il réappliquer après la baignade ?",
        reponse: "Oui, systématiquement, même si la formule est résistante à l'eau. La baignade, le séchage à la serviette et la transpiration réduisent l'efficacité de la protection au fil du temps, un point d'autant plus important sur la peau fine d'un enfant.",
      },
    ],
  },
  {
    slug: "bioderma-pigmentbio-foaming-cream-nettoyant-eclaircissant-200ml",
    identite: [
      "Pigmentbio est la gamme de Bioderma dédiée aux taches pigmentaires et au teint irrégulier. Cette crème moussante en est l'étape de nettoyage, pensée pour préparer la peau au reste de la routine anti-taches sans l'agresser, un point important car une peau pigmentée est souvent aussi une peau fragilisée. La texture crème se transforme en mousse légère au contact de l'eau et élimine les impuretés du quotidien sans décaper, condition nécessaire pour que les actifs éclaircissants appliqués ensuite restent bien tolérés.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Crème moussante" },
      { libelle: "Gamme", valeur: "Pigmentbio, anti-taches" },
      { libelle: "Type de peau", valeur: "Terne, marquée par des taches pigmentaires" },
    ],
    usage: [
      "S'utilise matin et soir en première étape, sur visage humide, en massant délicatement puis en rinçant à l'eau tiède. Prépare la peau avant l'application du soin ciblé anti-taches de la même gamme, qui pénètre mieux sur une peau propre mais non agressée par un nettoyage trop décapant.",
    ],
    positionnement: [
      "Comparé à un nettoyant purifiant classique pensé pour l'excès de sébum, celui-ci est formulé pour une peau pigmentée souvent aussi sensibilisée, avec une tolérance pensée en conséquence. Il convient moins bien à une peau grasse cherchant avant tout une action matifiante forte, pour laquelle un nettoyant de la gamme Sébium sera plus adapté que celui-ci.",
    ],
    faq: [
      {
        question: "Ce nettoyant éclaircit-il vraiment la peau à lui seul ?",
        reponse: "Son rôle principal est de nettoyer sans agresser une peau sujette aux taches, en préparant le terrain. L'effet sur l'uniformité du teint vient surtout des soins ciblés de la gamme Pigmentbio appliqués après lui, et non du nettoyant utilisé seul.",
      },
      {
        question: "Convient-il à une peau sensible ?",
        reponse: "Oui, sa formule moussante douce est pensée pour ne pas fragiliser davantage une peau pigmentée, qui est souvent aussi réactive, ce qui permet de l'utiliser sur la durée sans provoquer de tiraillement ni compromettre la tolérance des soins appliqués ensuite.",
      },
    ],
  },
  {
    slug: "bioderma-sebium-gel-moussant-200ml",
    identite: [
      "Sébium est la gamme historique de Bioderma pour peau grasse et à tendance acnéique, et ce gel moussant en est le nettoyant de référence. Sans savon, il élimine l'excès de sébum et les impuretés en surface tout en respectant l'équilibre de la peau, évitant l'effet de sur-production de sébum que déclenchent certains nettoyants trop agressifs. La texture gel devient légèrement moussante au contact de l'eau et se rince sans laisser de film gras, ce qui en fait une base fiable avant un soin ciblé anti-imperfections.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Gel moussant, sans savon" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance acnéique" },
      { libelle: "Gamme", valeur: "Sébium (Bioderma)" },
    ],
    usage: [
      "S'applique matin et soir sur visage humide, en massant sans frotter puis en rinçant à l'eau tiède. Ne pas multiplier les lavages dans la journée, au risque de stimuler la production de sébum en réaction à un nettoyage trop fréquent. Convient en première étape avant un soin traitant de la gamme Sébium.",
    ],
    positionnement: [
      "Face à d'autres nettoyants purifiants souvent asséchants à l'usage, celui-ci reste doux tout en nettoyant efficacement, un équilibre qui explique sa notoriété en pharmacie. Il convient moins bien à une peau sèche ou déshydratée sans excès de sébum, pour laquelle un nettoyant plus riche en agents hydratants évitera une sensation de tiraillement après le rinçage.",
    ],
    faq: [
      {
        question: "Existe-t-il en plusieurs formats ?",
        reponse: "Oui, ce gel moussant Sébium existe en plusieurs contenances, du petit format au grand conditionnement pour un usage prolongé, la formule restant strictement identique quel que soit le format choisi, seul le conditionnement change entre les différentes tailles proposées en pharmacie.",
      },
      {
        question: "Peut-on l'utiliser en cas d'acné inflammatoire ?",
        reponse: "Il nettoie sans irriter une peau à imperfections, ce qui en fait une bonne base, mais il ne remplace pas un traitement anti-acné ciblé, prescrit ou recommandé, pour agir directement sur l'inflammation ; il prépare simplement le terrain pour ce traitement.",
      },
    ],
  },
  {
    slug: "bioderma-sebium-gel-moussant-400ml",
    identite: [
      "Ce grand format du gel moussant Sébium reprend la formule sans savon de la gamme phare de Bioderma pour peau grasse, pensée pour un nettoyage quotidien qui n'agresse pas la barrière cutanée. Le conditionnement de 400 ml correspond à un usage biquotidien prolongé sur plusieurs mois, ou à une utilisation par plusieurs personnes de la même famille ayant une peau grasse. La texture reste identique au petit format : un gel qui mousse légèrement, élimine sébum et impuretés, et se rince sans laisser de film gras.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Gel moussant, sans savon" },
      { libelle: "Format", valeur: "Grand conditionnement, usage prolongé" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance acnéique" },
    ],
    usage: [
      "S'utilise comme un nettoyant quotidien classique, matin et soir, sur visage humide, en massant puis en rinçant à l'eau tiède. Ce grand format facilite la régularité du geste sur plusieurs mois, un facteur important pour stabiliser une peau grasse dans la durée plutôt que de changer fréquemment de nettoyant.",
    ],
    positionnement: [
      "Par rapport au format plus petit de la même formule, ce conditionnement s'adresse à qui a déjà validé le produit et cherche à l'inscrire durablement dans sa routine plutôt qu'à le tester. Il convient moins bien à une découverte du produit, pour laquelle un format plus réduit reste plus raisonnable avant de s'engager sur un usage prolongé.",
    ],
    faq: [
      {
        question: "Quelle différence avec le petit format ?",
        reponse: "Aucune différence de formule, seulement le conditionnement. Le format 400 ml convient à un usage quotidien prolongé ou partagé entre plusieurs personnes, quand un plus petit format suffit pour une découverte du produit ou un usage plus occasionnel de la même formule.",
      },
      {
        question: "Peut-on l'utiliser en double nettoyage ?",
        reponse: "Oui, il peut suivre une huile ou un baume démaquillant en seconde étape pour bien éliminer les résidus gras, un enchaînement courant sur peau grasse maquillée en fin de journée, avant de poursuivre avec le reste de la routine du soir.",
      },
    ],
  },
  {
    slug: "bioderma-sebium-gel-moussant-500ml",
    identite: [
      "Ce grand format du gel moussant Sébium s'adresse à une peau à imperfections actives, dans une logique de traitement au long cours plutôt que de simple nettoyage quotidien. La formule sans savon nettoie en profondeur sans perturber davantage une peau déjà fragilisée par l'inflammation et par d'éventuels soins asséchants, peroxyde de benzoyle ou acide salicylique, utilisés en parallèle. Le conditionnement de 500 ml correspond au rythme d'un protocole anti-imperfections mené sur plusieurs mois, où le nettoyage biquotidien est une étape aussi importante que le soin traitant lui-même.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Gel moussant, sans savon" },
      { libelle: "Usage conseillé", valeur: "Nettoyage biquotidien en cure anti-imperfections" },
      { libelle: "Format", valeur: "500 ml, pensé pour un usage prolongé" },
    ],
    usage: [
      "S'utilise matin et soir sur peau à imperfections, en particulier en complément d'un traitement local asséchant appliqué ensuite, pour lequel une peau propre et non irritée par le nettoyage améliore la tolérance. Éviter de frotter ou d'insister sur les boutons actifs, le nettoyage devant rester doux même sur une peau à traiter.",
    ],
    positionnement: [
      "Comparé à des nettoyants anti-acné plus agressifs, à base d'acide salicylique par exemple, celui-ci reste neutre et sert de socle propre plutôt que de traitement en lui-même, ce qui limite le risque de sur-traiter une peau déjà exposée à d'autres actifs asséchants. Il convient moins bien à qui cherche un nettoyant à action exfoliante directe, pour lequel un gel avec acide salicylique sera plus indiqué.",
    ],
    faq: [
      {
        question: "Ce nettoyant traite-t-il l'acné à lui seul ?",
        reponse: "Non, il nettoie sans agresser une peau à imperfections mais ne contient pas d'actif exfoliant ciblé. Il se combine avec un soin traitant local pour la partie active du protocole anti-imperfections, ce dernier apportant l'action directe sur les boutons et l'inflammation.",
      },
      {
        question: "Peut-il s'utiliser avec un traitement au peroxyde de benzoyle ?",
        reponse: "Oui, sa formule douce et sans savon limite le risque de sur-irritation quand elle est associée à un traitement asséchant comme le peroxyde de benzoyle, appliqué généralement après le nettoyage et le séchage complet de la peau pour une meilleure tolérance.",
      },
    ],
  },
  {
    slug: "bioderma-sebium-h2o-500ml",
    identite: [
      "Sébium H2O est l'eau micellaire de référence de Bioderma pour peau grasse et mixte à tendance acnéique, une formule aussi connue que la marque elle-même dans les rayons pharmacie. Elle démaquille et nettoie en un seul geste, sans rinçage, grâce à des micelles qui captent les impuretés et l'excès de sébum sans agresser la peau. Le grand format 500 ml correspond à un usage quotidien, matin et soir, sur plusieurs mois, pour qui en a fait son geste de nettoyage habituel plutôt qu'un produit d'appoint.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Eau micellaire, sans rinçage" },
      { libelle: "Type de peau", valeur: "Grasse, mixte, à tendance acnéique" },
      { libelle: "Format", valeur: "500 ml, usage quotidien prolongé" },
    ],
    usage: [
      "S'applique au coton, en passant délicatement sur le visage et les yeux pour retirer maquillage et impuretés, sans frotter. Ne nécessite pas de rinçage, mais peut être suivie d'un gel moussant en seconde étape en cas de maquillage épais ou de peau très grasse en fin de journée.",
    ],
    positionnement: [
      "Face à un démaquillant à l'huile, cette eau micellaire est plus adaptée à une peau grasse car elle n'ajoute pas de corps gras supplémentaire, tout en restant efficace sur le maquillage léger. Elle convient moins bien à un maquillage waterproof ou très couvrant, pour lequel un double nettoyage avec une huile démaquillante en première étape reste plus efficace.",
    ],
    faq: [
      {
        question: "Faut-il rincer le visage après l'avoir utilisée ?",
        reponse: "Non, c'est tout l'intérêt d'une eau micellaire : elle ne nécessite pas de rinçage. Un rinçage reste possible en complément si la peau est très grasse ou si le maquillage était épais, mais il n'est pas obligatoire pour un usage courant du quotidien.",
      },
      {
        question: "Convient-elle pour démaquiller les yeux ?",
        reponse: "Oui, sa formule est testée pour la zone des yeux et retire le maquillage, y compris le mascara léger, sans agresser cette zone sensible, à condition de ne pas frotter et de laisser le coton imbibé poser quelques secondes avant de retirer.",
      },
    ],
  },
  {
    slug: "bioderma-sebium-pain-100g",
    identite: [
      "Sébium Pain est la version solide du nettoyant Bioderma pour peau grasse à tendance acnéique, un format pain dermatologique plutôt qu'un savon classique malgré son apparence. Sa formule reste sans savon, avec un pH respectueux de la peau, ce qui évite l'effet asséchant et l'inconfort que provoquent souvent les vrais savons sur une peau à imperfections. Le format solide en fait aussi une option pratique pour le voyage ou la salle de bain partagée, sans flacon à transporter ni risque de fuite dans une trousse.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Pain dermatologique, sans savon" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance acnéique" },
      { libelle: "Format", valeur: "Solide, 100 g" },
    ],
    usage: [
      "S'utilise comme un savon, en le faisant mousser entre les mains humides ou directement sur le visage humide, puis en rinçant à l'eau tiède. Le laisser sécher sur un porte-savon aéré entre deux usages prolonge sa durée et évite qu'il ramollisse trop vite dans une salle de bain humide.",
    ],
    positionnement: [
      "Par rapport au gel moussant de la même gamme, ce pain offre le même niveau de douceur dans un format plus compact et sans flacon plastique, ce qui séduit une clientèle sensible au format autant qu'à la formule elle-même. Il convient moins bien à qui préfère une texture qui ne touche pas directement le porte-savon, pour des raisons d'hygiène en salle de bain partagée.",
    ],
    faq: [
      {
        question: "Ce pain assèche-t-il la peau comme un savon classique ?",
        reponse: "Non, malgré son format solide, sa formule est sans savon et respecte le pH de la peau, ce qui évite l'effet tiraillement des vrais savons sur une peau grasse ou à imperfections, tout en nettoyant efficacement les impuretés du quotidien.",
      },
      {
        question: "Peut-il s'utiliser sur le corps en plus du visage ?",
        reponse: "Il est formulé et pensé pour le visage, la peau du corps étant généralement moins sujette au même excès de sébum localisé ; un pain ou gel dédié au corps reste préférable pour cette zone plus étendue et moins réactive.",
      },
    ],
  },
  {
    slug: "bioderma-sensibio-gel-moussant-200ml",
    identite: [
      "Sensibio est la gamme de Bioderma pour peau sensible et réactive, et ce gel moussant en est le nettoyant quotidien. Formulé sans savon et sans parfum agressif, il nettoie la peau sans altérer sa barrière déjà fragile, un point essentiel pour une peau sensible où le nettoyage est souvent le moment le plus à risque d'irritation dans toute la routine. La texture gel devient légèrement moussante au contact de l'eau, pour un nettoyage en douceur qui n'assèche pas.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Gel moussant, sans savon" },
      { libelle: "Type de peau", valeur: "Sensible, réactive" },
      { libelle: "Gamme", valeur: "Sensibio (Bioderma)" },
    ],
    usage: [
      "S'applique matin et soir sur visage humide, en massant très délicatement puis en rinçant à l'eau tiède, idéalement peu calcaire si la peau y est sensible. Éviter l'eau trop chaude, qui accentue les sensations de tiraillement même avec un nettoyant doux comme celui-ci, conçu pour minimiser l'inconfort du geste.",
    ],
    positionnement: [
      "Comparé à un nettoyant purifiant pensé pour peau grasse, celui-ci renonce à toute action matifiante forte pour privilégier le confort immédiat, ce qui le rend inadapté à une peau grasse en quête d'un nettoyage plus actif. Il convient particulièrement à une peau qui réagit mal aux nettoyants du commerce, avec rougeurs ou tiraillements récurrents après le lavage.",
    ],
    faq: [
      {
        question: "Ce nettoyant convient-il aussi aux peaux atopiques ?",
        reponse: "Sa formule douce, sans savon et sans parfum agressif, est pensée pour les peaux réactives en général, ce qui inclut souvent les peaux atopiques, mais un avis médical reste indiqué en cas de poussée active ou de lésions cutanées étendues.",
      },
      {
        question: "Peut-on l'utiliser sans eau, en lingette ?",
        reponse: "Non, ce gel moussant nécessite un rinçage à l'eau pour être retiré correctement de la peau ; pour un nettoyage sans rinçage, la gamme Sensibio propose une eau micellaire dédiée, plus adaptée à un usage nomade ou sans point d'eau.",
      },
    ],
  },
  {
    slug: "bioderma-sensibio-gel-moussant-500ml",
    identite: [
      "Ce grand format du gel moussant Sensibio reprend la formule sans savon et sans parfum agressif de la gamme de Bioderma pour peau sensible, dans un conditionnement de 500 ml pensé pour un usage quotidien prolongé. Une peau réactive gagne à garder le même nettoyant sur la durée plutôt qu'à en changer régulièrement, chaque nouveau produit représentant un risque de réaction ; ce grand format répond à cette logique de stabilité recherchée dans la routine.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Gel moussant, sans savon" },
      { libelle: "Format", valeur: "Grand conditionnement, 500 ml" },
      { libelle: "Type de peau", valeur: "Sensible, réactive" },
    ],
    usage: [
      "S'utilise comme le format standard, matin et soir sur visage humide, en massant délicatement puis en rinçant à l'eau tiède. Le grand format convient bien à un usage familial si plusieurs membres du foyer ont une peau sensible, ou à un usage prolongé sans changer de nettoyant durant plusieurs mois.",
    ],
    positionnement: [
      "Face au petit format de la même formule, ce grand conditionnement s'adresse à qui a déjà validé la tolérance du produit et cherche à le garder durablement, une démarche fréquente sur peau sensible où la stabilité de la routine compte autant que la formule elle-même. Il convient moins à une première utilisation, pour laquelle un format plus réduit reste plus prudent.",
    ],
    faq: [
      {
        question: "Pourquoi garder le même nettoyant longtemps sur peau sensible ?",
        reponse: "Une peau réactive tolère souvent mal les changements fréquents de produits, chaque nouvelle formule représentant un risque de réaction. Adopter un nettoyant neutre sur la durée, comme celui-ci, limite ce risque et stabilise la routine de nettoyage sur le long terme.",
      },
      {
        question: "Ce format convient-il à un usage familial ?",
        reponse: "Oui, sa formule neutre et bien tolérée par la plupart des peaux sensibles en fait une option raisonnable à partager entre plusieurs membres d'un foyer ayant chacun une peau réactive, sans risquer d'irriter les profils les plus sensibles parmi eux.",
      },
    ],
  },
  {
    slug: "caudalie-resveratrol-lift-serum-liftant-fermete-30ml",
    identite: [
      "Ce sérum s'inscrit dans la gamme Resvératrol[Lift] de Caudalie, dédiée au relâchement cutané et à la perte de fermeté liés à l'âge. Il associe le resvératrol, une molécule antioxydante extraite de la vigne emblématique de la marque, à des actifs raffermissants dans une texture sérum qui pénètre rapidement sans laisser de film gras. Il vise une peau mature qui commence à perdre en tonicité, en complément d'une crème de la même gamme plutôt qu'en soin isolé, l'objectif étant un effet tenseur progressif plus qu'immédiat.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Resvératrol" },
      { libelle: "Galénique", valeur: "Sérum fluide" },
      { libelle: "Effet recherché", valeur: "Fermeté, effet liftant progressif" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, avant la crème de jour ou de nuit de la même gamme, en mouvements ascendants qui accompagnent l'effet tenseur recherché. Un usage régulier sur plusieurs semaines est nécessaire avant de juger de son effet sur la fermeté, ce type d'actif agissant progressivement plutôt que dès la première application.",
    ],
    positionnement: [
      "Comparé à un sérum anti-âge généraliste ciblant surtout les rides, celui-ci met l'accent sur la fermeté et le relâchement du contour du visage, une problématique légèrement différente. Il convient moins bien à une peau jeune sans perte de tonicité, pour laquelle un soin anti-âge préventif, plus léger, sera mieux adapté que ce sérum pensé pour une peau déjà mature.",
    ],
    faq: [
      {
        question: "À partir de quel âge ce sérum est-il pertinent ?",
        reponse: "Il s'adresse à une peau qui commence à montrer une perte de fermeté visible, généralement à partir de la quarantaine, plutôt qu'en prévention précoce, pour laquelle des soins anti-âge plus légers de Caudalie sont mieux indiqués sur une peau encore tonique.",
      },
      {
        question: "Peut-on l'utiliser avec la crème Resvératrol[Lift] ?",
        reponse: "Oui, c'est l'usage recommandé : le sérum s'applique en première étape après le nettoyage, la crème vient ensuite sceller l'hydratation et compléter l'action raffermissante de la gamme, pour un effet cumulé sur la fermeté du visage et du cou avec le temps.",
      },
    ],
  },
  {
    slug: "caudalie-vinohydra-masque-creme-hydratant-75ml",
    identite: [
      "VinoHydra est la gamme hydratation intense de Caudalie, construite autour de l'eau de raisin, et ce soin se présente comme une crème-masque : une texture riche que l'on peut utiliser en couche généreuse le temps d'un masque, ou en couche plus fine comme crème hydratante classique. Il s'adresse à une peau déshydratée qui tiraille, cherchant un confort immédiat et une sensation de rebond, plus qu'une action anti-âge ciblée. Le format 75 ml, plus grand qu'un simple pot de masque, encourage un usage flexible entre soin du quotidien et masque ponctuel plus généreux.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau de raisin" },
      { libelle: "Galénique", valeur: "Crème-masque riche" },
      { libelle: "Usage", valeur: "En crème quotidienne ou en masque ponctuel" },
    ],
    usage: [
      "En masque, s'applique en couche généreuse sur le visage nettoyé, on laisse poser une dizaine de minutes puis on retire l'excédent sans forcément rincer. En usage quotidien, une noisette suffit en couche plus fine, le matin ou le soir, sur une peau qui tiraille après le nettoyage.",
    ],
    positionnement: [
      "Face à un masque hydratant à usage unique, cette crème-masque a l'avantage de la double fonction : elle dure dans le temps comme soin quotidien tout en gardant l'option d'un masque plus généreux ponctuellement. Elle convient moins bien à une peau grasse cherchant une texture matifiante, sa richesse étant pensée pour le confort d'une peau sèche ou déshydratée.",
    ],
    faq: [
      {
        question: "Faut-il rincer après l'avoir utilisée en masque ?",
        reponse: "Ce n'est pas obligatoire : l'excédent peut simplement être retiré ou massé jusqu'à pénétration complète, la texture étant conçue pour fonctionner aussi bien comme soin laissé en place que comme masque rincé, selon la préférence et le temps disponible ce jour-là.",
      },
      {
        question: "Peut-on l'utiliser tous les jours comme crème ?",
        reponse: "Oui, en couche plus fine qu'en usage masque, elle fonctionne comme une crème hydratante riche au quotidien pour une peau qui a besoin d'un confort renforcé, en particulier en hiver ou en climat sec, matin comme soir selon les besoins.",
      },
    ],
  },
];
