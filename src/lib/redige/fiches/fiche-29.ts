import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "acm-duolys-aha-10-creme-peeling-nuit-regenerante-40ml",
    identite: [
      "La Crème Peeling Nuit de la gamme Duolys associe un complexe d'acides de fruits (AHA) dosé à 10% pour exfolier chimiquement la surface de la peau pendant le sommeil, moment où le renouvellement cellulaire est le plus actif. Texture crème, appliquée le soir sur peau nettoyée, elle agit sans grain abrasif contrairement à un gommage mécanique classique. Elle s'adresse aux peaux matures ou ternes qui cherchent à lisser le grain de peau et à atténuer l'aspect des ridules superficielles, dans une gamme ACM construite autour de l'exfoliation douce et répétée plutôt que du peeling ponctuel agressif.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA (acides de fruits) 10%" },
      { libelle: "Galénique", valeur: "crème" },
      { libelle: "Moment d'application", valeur: "soir" },
      { libelle: "Gamme", valeur: "Duolys" },
    ],
    usage: [
      "S'applique le soir, en fine couche sur visage nettoyé et sec, en évitant le contour des yeux. Une utilisation quotidienne ou en alternance selon la tolérance cutanée suffit ; la peau peut picoter légèrement lors des premières applications, signe normal d'un AHA actif. Une protection solaire est nécessaire le lendemain matin car les AHA augmentent la photosensibilité de la peau exfoliée.",
    ],
    positionnement: [
      "Dans le rayon gommage visage, cette crème se distingue des gommages à grains par son action chimique progressive, plus adaptée à un usage régulier sur peau fine ou sensible aux frictions. Elle convient moins aux peaux déjà travaillées à l'acide glycolique concentré ou en cours de traitement au rétinol, chez qui l'association des deux actifs peut irriter.",
    ],
    faq: [
      {
        question: "Peut-on utiliser cette crème tous les soirs ?",
        reponse:
          "L'usage quotidien est possible sur une peau déjà habituée aux AHA. Sur une peau qui découvre l'exfoliation chimique, mieux vaut commencer une à trois fois par semaine puis augmenter la fréquence selon la tolérance observée.",
      },
      {
        question: "Faut-il une protection solaire le lendemain ?",
        reponse:
          "Oui. Les AHA rendent la peau plus sensible aux UV pendant les heures qui suivent l'application ; une protection solaire quotidienne est recommandée tant que ce soin est utilisé.",
      },
      {
        question: "Cette crème peut-elle remplacer un gommage mécanique ?",
        reponse:
          "Oui, elle joue ce rôle par voie chimique plutôt que par friction, avec l'avantage de ne pas créer de micro-lésions sur une peau fine ou sensible aux grains.",
      },
    ],
  },
  {
    slug: "acm-duolys-aha-15-masque-peeling-minute-50ml",
    identite: [
      "Le Masque Peeling Minute Duolys pousse la concentration en acides de fruits à 15%, dans un format masque à temps de pose court plutôt qu'une crème laissée toute la nuit. Il vise un effet peeling plus marqué et plus rapide : appliqué quelques minutes puis rincé, il retire les cellules mortes en surface et relance l'éclat du teint en une seule séance. Conçu pour compléter, et non remplacer, l'usage quotidien de soins Duolys moins concentrés, il s'utilise en geste ponctuel hebdomadaire sur les peaux qui tolèrent déjà bien l'acide glycolique.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA (acides de fruits) 15%" },
      { libelle: "Format", valeur: "masque, temps de pose court" },
      { libelle: "Fréquence conseillée", valeur: "hebdomadaire" },
      { libelle: "Gamme", valeur: "Duolys" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau nettoyée, on laisse poser quelques minutes selon la notice puis on rince abondamment à l'eau tiède. Une à deux applications par semaine suffisent ; il ne remplace pas un nettoyage quotidien. Éviter le contour des yeux et les zones irritées, et ne pas cumuler le même soir avec un autre exfoliant ou un soin au rétinol.",
    ],
    positionnement: [
      "Sa concentration à 15% le place au-dessus des soins d'entretien quotidien du rayon gommage visage : c'est un geste plus intensif, réservé à une peau déjà acclimatée aux acides de fruits. Il convient moins à une peau sensible ou qui découvre l'exfoliation chimique, pour qui la version crème de nuit à 10% de la même gamme est un point d'entrée plus prudent.",
    ],
    faq: [
      {
        question: "Peut-on combiner ce masque avec un sérum au rétinol ?",
        reponse:
          "Pas le même soir. Les deux exfolient la peau par des voies différentes et leur cumul augmente le risque d'irritation ; mieux vaut les espacer sur des jours distincts de la semaine.",
      },
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "Une fois par semaine est un rythme raisonnable pour commencer. Sur une peau bien tolérante, deux applications hebdomadaires restent possibles, sans dépasser ce rythme pour éviter l'irritation.",
      },
      {
        question: "Ce masque pique-t-il pendant la pose ?",
        reponse:
          "Un léger picotement est normal à cette concentration d'AHA. S'il devient franchement désagréable ou brûlant, il faut rincer immédiatement sans attendre la fin du temps de pose indiqué.",
      },
    ],
  },
  {
    slug: "acm-duolys-creme-riche-f-40ml",
    identite: [
      "La Crème Riche de la gamme Duolys est la version la plus nourrissante de cette ligne anti-âge ACM, pensée pour les peaux matures qui ont besoin d'un apport lipidique plus soutenu que les formules courantes de la gamme. Sa texture riche vise à combler l'inconfort de tiraillement et à renforcer la fonction barrière, en complément de l'action anti-âge portée par les autres références Duolys à base d'AHA ou d'acide hyaluronique. Elle s'utilise en soin de jour comme de nuit sur une peau sèche à très sèche, en particulier lorsque le climat accentue la déshydratation cutanée.",
    ],
    faits: [
      { libelle: "Texture", valeur: "riche" },
      { libelle: "Usage", valeur: "jour et nuit" },
      { libelle: "Type de peau", valeur: "sèche à très sèche" },
      { libelle: "Gamme", valeur: "Duolys" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, en couche suffisante pour couvrir sans excès. Elle peut s'utiliser seule ou en complément d'un sérum Duolys appliqué avant, qu'elle vient alors sceller. Sur peau normale à grasse, sa richesse peut alourdir le film cutané en journée ; elle convient alors mieux en soin de nuit uniquement.",
    ],
    positionnement: [
      "Dans le rayon crème hydratante visage, elle se positionne sur le segment des textures riches à visée anti-âge, plus nourrissante que la majorité des hydratantes courantes. Elle convient moins aux peaux grasses ou mixtes en zone T, sur lesquelles une texture plus légère du même rayon sera mieux tolérée en journée.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle à une peau grasse ?",
        reponse:
          "Peu recommandée en soin de jour sur peau grasse, sa texture riche pouvant alourdir le film cutané. Une application le soir uniquement, ou une texture plus légère du même rayon, sera mieux adaptée à ce type de peau.",
      },
      {
        question: "Peut-elle s'utiliser toute l'année ?",
        reponse:
          "Oui, mais son intérêt est surtout marqué en automne et en hiver, ou sur une peau naturellement sèche, quand le besoin en corps gras est le plus important.",
      },
      {
        question: "Faut-il appliquer un sérum avant cette crème ?",
        reponse:
          "Ce n'est pas obligatoire mais c'est cohérent avec la logique de la gamme Duolys, où un sérum ciblé appliqué avant est ensuite scellé par cette crème plus riche.",
      },
    ],
  },
  {
    slug: "acm-duolys-creme-solaire-anti-age-50ml",
    identite: [
      "Cette crème solaire de la gamme Duolys conjugue photoprotection quotidienne et argumentaire anti-âge, dans une texture visage destinée à s'intégrer à la routine Duolys aux côtés des sérums et crèmes anti-rides de la même ligne. L'idée qui porte cette référence est que la protection contre les UV est elle-même un soin anti-âge, le rayonnement solaire étant l'un des principaux facteurs de vieillissement cutané prématuré. Elle se différencie de la version SPF50+ de la gamme par un indice non précisé dans son intitulé, à vérifier sur l'emballage du produit.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Duolys" },
      { libelle: "Usage visé", valeur: "photoprotection visage anti-âge" },
      { libelle: "Texture", valeur: "crème" },
    ],
    usage: [
      "S'applique le matin comme dernière étape de la routine visage, en remplacement de la crème de jour habituelle ou en complément selon l'exposition prévue dans la journée. Un renouvellement est nécessaire après une exposition prolongée ou une transpiration importante. Elle ne dispense pas d'un chapeau ou de lunettes lors d'une exposition directe et prolongée.",
    ],
    positionnement: [
      "Elle se distingue des crèmes solaires génériques du rayon par son positionnement anti-âge assumé, pensé pour s'intégrer à une routine Duolys existante plutôt que comme protection solaire autonome pour toute la famille. Pour un indice clairement affiché à un niveau élevé, la version SPF50+ de la même gamme, présente dans le même rayon, offre une indication plus explicite.",
    ],
    faq: [
      {
        question: "Quel est l'indice de protection de cette crème ?",
        reponse:
          "L'indice n'est pas précisé dans l'intitulé de cette référence ; il figure sur l'emballage du produit. Pour un indice affiché à 50+, la version SPF50+ de la gamme Duolys est disponible dans le même rayon.",
      },
      {
        question: "Peut-elle remplacer la crème de jour habituelle ?",
        reponse:
          "Oui, c'est l'usage prévu : elle se substitue à la crème de jour lors des journées d'exposition au soleil, en conservant l'argument anti-âge propre à la gamme Duolys.",
      },
      {
        question: "Convient-elle à un usage quotidien en ville ?",
        reponse:
          "Oui, une photoprotection quotidienne même en usage urbain limite l'exposition cumulée aux UV, qui reste un facteur de vieillissement cutané même en l'absence d'exposition volontaire au soleil.",
      },
    ],
  },
  {
    slug: "acm-duolys-creme-solaire-anti-age-spf50-50ml",
    identite: [
      "Version SPF50+ de la crème solaire anti-âge Duolys, cette référence affiche l'indice de protection le plus élevé de la nomenclature européenne, destiné aux expositions au soleil franches ou aux peaux claires particulièrement sensibles aux UV. Comme le reste de la gamme Duolys, elle associe la photoprotection à un discours anti-âge : limiter l'exposition aux UVA et UVB est présenté comme un moyen d'aider à prévenir l'apparition de nouvelles rides, plutôt que de seulement éviter le coup de soleil. Sa texture crème est formulée pour le visage, en usage quotidien ou lors d'expositions plus soutenues.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Zone", valeur: "visage" },
      { libelle: "Gamme", valeur: "Duolys" },
      { libelle: "Texture", valeur: "crème" },
    ],
    usage: [
      "S'applique le matin en dernière étape de la routine, en couche suffisante pour atteindre le niveau de protection annoncé — une application trop fine réduit sensiblement l'indice réel. À renouveler après une baignade, une forte transpiration, ou toutes les deux heures lors d'une exposition prolongée en extérieur.",
    ],
    positionnement: [
      "Avec un SPF50+ affiché, elle se situe au niveau de protection maximal du rayon crème solaire, au-dessus de la version sans indice précisé de la même gamme. Elle s'adresse en priorité aux peaux claires, aux expositions prolongées ou aux personnes suivant un soin dermatologique (rétinol, exfoliants) qui augmente la photosensibilité de la peau.",
    ],
    faq: [
      {
        question: "Cette crème suffit-elle pour une journée à la plage ?",
        reponse:
          "L'indice SPF50+ offre une protection élevée, mais elle doit être renouvelée toutes les deux heures et après chaque baignade pour rester efficace sur une exposition longue en extérieur.",
      },
      {
        question: "Peut-on l'utiliser sous un sérum au rétinol ou aux AHA ?",
        reponse:
          "Oui, et c'est même recommandé : ces actifs augmentent la sensibilité de la peau au soleil, ce qui rend une protection élevée comme celle-ci particulièrement indiquée le matin qui suit leur application.",
      },
      {
        question: "Cette crème solaire anti-âge remplace-t-elle une crème de jour ?",
        reponse:
          "Oui, elle est conçue pour cet usage lors des journées où le visage sera exposé au soleil : elle intègre la protection UV à la place de la crème de jour habituelle, sans étape supplémentaire.",
      },
    ],
  },
  {
    slug: "acm-duolys-hyal-serum-intensif-anti-age-15ml",
    identite: [
      "Le Sérum Hyal de la gamme Duolys mise sur l'acide hyaluronique comme actif central, dans une texture sérum concentrée à appliquer avant la crème. Le nom « Hyal » situe directement ce produit sur l'axe hydratation et repulpage plutôt que sur l'exfoliation portée par les autres références AHA de la même gamme : l'objectif est de retenir l'eau dans les couches superficielles de la peau pour en lisser visuellement l'aspect et atténuer les ridules de déshydratation. Le format 15ml, concentré, est pensé pour un usage économe, quelques gouttes suffisant à couvrir le visage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide hyaluronique" },
      { libelle: "Format", valeur: "sérum concentré 15ml" },
      { libelle: "Gamme", valeur: "Duolys" },
      { libelle: "Moment d'application", valeur: "avant la crème" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, quelques gouttes réparties sur le visage puis lissées du centre vers l'extérieur, avant la crème de jour ou de nuit habituelle. Il peut se combiner avec les autres soins Duolys (AHA, rétinol) en respectant un ordre du plus fluide au plus riche, sérum en premier.",
    ],
    positionnement: [
      "Dans le rayon anti-âge visage, ce sérum se distingue par son action hydratation-repulpage plutôt qu'exfoliation ou renouvellement cellulaire : il complète, sans les remplacer, les soins Duolys à base d'AHA ou de rétinol. Il convient moins comme unique geste anti-âge à une peau cherchant surtout un effet sur des rides déjà marquées, pour laquelle le sérum au rétinol de la même gamme est plus indiqué.",
    ],
    faq: [
      {
        question: "Ce sérum peut-il s'utiliser avec le sérum au rétinol de la même gamme ?",
        reponse:
          "Oui, c'est même une association cohérente : le sérum à l'acide hyaluronique hydrate et repulpe pendant que le rétinol agit sur le renouvellement cutané, à des moments qui peuvent être distincts, rétinol le soir, hyaluronique matin et soir.",
      },
      {
        question: "Ce format de 15ml dure-t-il longtemps ?",
        reponse:
          "Un sérum concentré s'utilise en petite quantité, quelques gouttes par application ; ce format reste donc cohérent pour un usage quotidien sur plusieurs semaines de routine.",
      },
      {
        question: "Ce sérum remplace-t-il une crème hydratante ?",
        reponse:
          "Non, il se positionne avant la crème dans la routine et ne la remplace pas ; les deux ont des textures et des rôles complémentaires dans l'hydratation du visage.",
      },
    ],
  },
  {
    slug: "acm-duolys-serum-intensif-anti-rides-retinol-30ml",
    identite: [
      "Ce sérum Duolys.A a pour actif central le rétinol, un dérivé de vitamine A reconnu pour son action sur le renouvellement cellulaire et l'aspect des rides installées. Il se positionne comme le soin le plus actif de la gamme Duolys sur l'axe anti-rides, plus ciblé que les références à base d'AHA ou d'acide hyaluronique de la même ligne. Le format sérum, appliqué en soin ciblé, vise à lisser visuellement le grain de peau et à atténuer l'aspect des rides et ridules, sur une peau mature habituée aux actifs exfoliants ou rénovateurs.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "rétinol" },
      { libelle: "Format", valeur: "sérum" },
      { libelle: "Gamme", valeur: "Duolys.A" },
      { libelle: "Moment d'application conseillé", valeur: "soir" },
    ],
    usage: [
      "S'utilise le soir, sur peau nettoyée et sèche, en couche fine sur l'ensemble du visage en évitant le contour des yeux. Une protection solaire est indispensable le lendemain matin, le rétinol augmentant la photosensibilité de la peau. Il ne doit pas se cumuler le même soir avec un AHA ou un autre exfoliant, au risque d'irriter la peau.",
    ],
    positionnement: [
      "Dans le rayon sérum anti-âge, ce produit se situe sur le segment des actifs les plus étudiés pour leur effet sur les rides installées, au-delà de la simple hydratation. Il convient moins à une peau qui découvre les soins actifs ou à une peau réactive, pour qui une introduction progressive, en alternance avec des soirs sans rétinol, est plus prudente.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce sérum tous les soirs dès la première application ?",
        reponse:
          "Il est plus prudent de commencer par deux à trois applications par semaine, puis d'augmenter la fréquence selon la tolérance de la peau, le rétinol pouvant provoquer des rougeurs en début d'usage.",
      },
      {
        question: "Faut-il une protection solaire le lendemain ?",
        reponse:
          "Oui, systématiquement. Le rétinol rend la peau plus sensible aux UV ; une protection solaire quotidienne est nécessaire tant que ce sérum est utilisé, y compris en usage urbain.",
      },
      {
        question: "Ce sérum peut-il s'utiliser pendant la grossesse ?",
        reponse:
          "Le rétinol est généralement déconseillé pendant la grossesse et l'allaitement ; un avis pharmaceutique est recommandé avant toute utilisation dans cette situation particulière.",
      },
    ],
  },
  {
    slug: "acm-medisun-creme-solaire-spf50-40ml",
    identite: [
      "La crème solaire Medisun d'ACM affiche un indice SPF50+, le niveau de protection le plus élevé de la nomenclature européenne, dans un format crème visage de 40ml. Contrairement à la ligne Duolys qui associe protection solaire et discours anti-âge, Medisun se présente comme une protection solaire plus généraliste, pensée pour un usage quotidien ou une exposition ponctuelle sans argumentaire cosmétique additionnel mis en avant sur l'emballage. Elle s'adresse aux peaux qui recherchent avant tout une haute protection UV pour le visage.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Zone", valeur: "visage" },
      { libelle: "Gamme", valeur: "Medisun" },
      { libelle: "Contenance", valeur: "40ml" },
    ],
    usage: [
      "S'applique le matin, en dernière étape de la routine visage, en couche suffisante pour atteindre le niveau de protection annoncé. À renouveler toutes les deux heures lors d'une exposition prolongée en extérieur, et après une baignade ou une transpiration importante.",
    ],
    positionnement: [
      "Dans le rayon crème solaire SPF50, cette référence se distingue par son format compact de 40ml, adapté à un usage visage plutôt qu'à une protection corps entier. Pour une exposition prolongée ou une protection du corps en plus du visage, le spray Medisun de la même gamme, en contenance plus généreuse, est mieux adapté.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle pour le corps entier ?",
        reponse:
          "Son format de 40ml et sa texture crème la destinent surtout au visage. Pour le corps, le spray Medisun de 200ml de la même gamme couvre une surface plus large plus facilement.",
      },
      {
        question: "Faut-il la renouveler en cas de baignade ?",
        reponse:
          "Oui, comme toute protection solaire, l'immersion dans l'eau réduit son efficacité même sur une formule annoncée résistante à l'eau ; une nouvelle application après la baignade est recommandée.",
      },
      {
        question: "Peut-on l'utiliser sous du maquillage ?",
        reponse:
          "Oui, une crème solaire visage s'applique en dernière étape du soin avant le maquillage ; il est conseillé de laisser quelques minutes de pose pour qu'elle pénètre avant d'appliquer le fond de teint.",
      },
    ],
  },
  {
    slug: "acm-medisun-spray-ecran-total-spf50-200ml",
    identite: [
      "Ce spray Medisun affiche un écran total SPF50+ dans un format 200ml, pensé pour une application rapide sur de grandes surfaces de peau — le corps en particulier, ou le visage pour qui préfère la texture spray à la crème. Le format spray permet une répartition rapide sans nécessiter de frotter longuement, utile pour les zones difficiles d'accès comme le dos. Il s'inscrit dans la gamme Medisun, positionnée sur la haute protection solaire sans argumentaire cosmétique additionnel.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Format", valeur: "spray" },
      { libelle: "Contenance", valeur: "200ml" },
      { libelle: "Gamme", valeur: "Medisun" },
    ],
    usage: [
      "Se vaporise à une distance de quelques centimètres de la peau, en veillant à couvrir uniformément toutes les zones exposées, puis s'étale légèrement à la main pour assurer une application homogène. À renouveler toutes les deux heures lors d'une exposition prolongée et après chaque baignade.",
    ],
    positionnement: [
      "Dans le rayon crème solaire SPF50, ce spray se distingue par sa facilité d'application sur de grandes surfaces et les zones difficiles d'accès, un avantage pratique sur les crèmes classiques pour un usage corps. Il convient moins à une application précise et contrôlée sur le visage, où une crème comme la Medisun 40ml offre un dosage plus maîtrisé.",
    ],
    faq: [
      {
        question: "Ce spray peut-il s'appliquer sur le visage ?",
        reponse:
          "C'est possible, mais son format est surtout pensé pour couvrir rapidement de grandes surfaces comme le corps. Sur le visage, une application à la main après vaporisation dans la paume évite le contact direct du jet avec les yeux.",
      },
      {
        question: "Ce format de 200ml suffit-il pour toute une saison ?",
        reponse:
          "Cela dépend de la fréquence d'exposition et de la surface couverte à chaque application ; une utilisation quotidienne sur tout le corps consomme le flacon plus vite qu'un usage ponctuel.",
      },
      {
        question: "Ce spray résiste-t-il à l'eau ?",
        reponse:
          "Le comportement exact face à l'eau dépend de la formule précise du produit ; dans tous les cas, une nouvelle application après la baignade est recommandée pour maintenir le niveau de protection.",
      },
    ],
  },
  {
    slug: "acm-medisun-creme-spf50-50ml",
    identite: [
      "Cette crème solaire Medisun+ complète la gamme Medisun avec un format de 50ml et une formule présentée comme une version enrichie ou actualisée de la crème SPF50+ standard de la même ligne. Comme le reste de la gamme, elle vise une protection UV élevée dans une texture crème pour le visage, sans argumentaire anti-âge affiché comme sur la ligne Duolys. Le signe « + » dans son nom distingue cette référence de la crème Medisun classique de 40ml, sans que la nature exacte de l'évolution soit précisée dans l'intitulé du produit.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Contenance", valeur: "50ml" },
      { libelle: "Gamme", valeur: "Medisun+" },
      { libelle: "Zone", valeur: "visage" },
    ],
    usage: [
      "S'applique le matin en dernière étape de la routine visage, en couche suffisante pour atteindre le niveau de protection annoncé. À renouveler toutes les deux heures en cas d'exposition prolongée, et après une baignade ou une transpiration importante.",
    ],
    positionnement: [
      "Dans le rayon crème solaire SPF50, cette référence se distingue de la Medisun 40ml classique par sa contenance plus généreuse de 50ml, un avantage pour un usage régulier sur la durée. Elle convient moins à qui cherche un discours anti-âge explicitement affiché, pour lequel la gamme Duolys du même laboratoire est plus explicite sur cet axe.",
    ],
    faq: [
      {
        question: "Quelle différence avec la crème Medisun 40ml classique ?",
        reponse:
          "La principale différence visible dans les données du produit est la contenance, 50ml contre 40ml, et la mention « + » dans le nom. Le détail exact de la formule figure sur l'emballage du produit.",
      },
      {
        question: "Cette crème convient-elle à une peau sensible ?",
        reponse:
          "Les crèmes solaires ACM sont formulées par un laboratoire dermatologique, ce qui en fait généralement un choix raisonnable pour une peau sensible ; en cas de doute, un avis pharmaceutique reste utile avant un premier usage.",
      },
      {
        question: "Peut-elle s'utiliser au quotidien, hors exposition volontaire au soleil ?",
        reponse:
          "Oui, une protection SPF50+ appliquée quotidiennement même en usage urbain limite l'exposition cumulée aux UV, un facteur de vieillissement cutané indépendant de toute exposition volontaire au soleil.",
      },
    ],
  },
  {
    slug: "acm-noviderm-boreade-creme-lavante-peaux-grasses-acneiques-200ml",
    identite: [
      "La Crème Lavante Boréade CL, de la ligne Noviderm dédiée aux peaux à problèmes, est un nettoyant pensé pour les peaux grasses ou sujettes à l'acné. Sa texture crème lavante nettoie sans le côté asséchant de certains gels moussants classiques, un point important sur une peau à tendance acnéique où un nettoyage trop agressif peut aggraver l'aspect des rougeurs. Elle s'utilise matin et/ou soir en première étape de la routine, avant tout soin ciblé de la gamme Noviderm ou d'une autre ligne dédiée aux peaux à problèmes.",
    ],
    faits: [
      { libelle: "Type de peau", valeur: "grasse ou acnéique" },
      { libelle: "Format", valeur: "crème lavante 200ml" },
      { libelle: "Gamme", valeur: "Noviderm Boréade" },
      { libelle: "Usage", valeur: "nettoyant visage" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage humidifié, en massant délicatement puis en rinçant à l'eau tiède. Elle prépare la peau aux soins ciblés appliqués ensuite (crèmes ou sérums anti-imperfections) et ne doit pas être remplacée par un gel moussant classique, plus asséchant sur une peau déjà fragilisée.",
    ],
    positionnement: [
      "Dans le rayon soin anti-acné visage, cette crème lavante se distingue par sa texture douce, pensée pour ne pas décaper une peau grasse déjà sujette à l'inflammation, contrairement à certains nettoyants moussants agressifs. Elle convient moins comme unique geste sur une acné marquée, qui nécessite en complément un soin ciblé et, si besoin, un avis dermatologique.",
    ],
    faq: [
      {
        question: "Cette crème suffit-elle à elle seule contre l'acné ?",
        reponse:
          "Non, c'est un nettoyant, pensé comme première étape d'une routine pour peau à problèmes. Elle prépare la peau mais ne remplace pas un soin ciblé anti-imperfections ni un avis dermatologique en cas d'acné marquée.",
      },
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse:
          "Oui, c'est l'usage prévu pour un nettoyant de ce type, à condition que la peau ne réagisse pas par une sensation de tiraillement excessive, auquel cas un seul nettoyage le soir suffit.",
      },
      {
        question: "Convient-elle à une peau mixte, pas seulement grasse ?",
        reponse:
          "Oui, une peau mixte à tendance grasse en zone T peut aussi l'utiliser ; sur les zones plus sèches du visage, un excès de nettoyage peut être compensé par une crème hydratante adaptée ensuite.",
      },
    ],
  },
  {
    slug: "acm-novophane-creme-ongles-tube-15ml",
    identite: [
      "La Crème des Ongles Novophane cible la santé des ongles plutôt que celle des cheveux, alors que le reste de la gamme Novophane est surtout connue pour ses soins anti-chute. Son format tube de 15ml, très concentré, est pensé pour un soin ciblé appliqué directement sur les ongles et leur pourtour, avec l'idée d'aider à renforcer des ongles cassants, dédoublés ou fragilisés. Elle complète une routine capillaire Novophane pour qui les ongles souffrent des mêmes carences que les cheveux, un lien fréquent en cure de fortification.",
    ],
    faits: [
      { libelle: "Format", valeur: "tube 15ml" },
      { libelle: "Zone d'application", valeur: "ongles et pourtour" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'applique en petite quantité directement sur l'ongle et la peau qui l'entoure, si possible sur ongles propres et secs, en massant légèrement pour faciliter la pénétration. Une utilisation régulière, quotidienne ou presque, est nécessaire pour observer un résultat sur la repousse des ongles, dont le renouvellement complet prend plusieurs mois.",
    ],
    positionnement: [
      "Ce soin cible spécifiquement les ongles, un besoin distinct de l'hydratation du visage ou du corps : il ne remplace ni une crème pour les mains ni un soin capillaire, mais les complète pour qui cherche à traiter ongles et cheveux fragilisés dans une même logique de cure. Il convient moins à qui cherche un résultat rapide, la repousse de l'ongle étant un processus lent par nature.",
    ],
    faq: [
      {
        question: "Combien de temps avant de voir un résultat sur les ongles ?",
        reponse:
          "La repousse complète d'un ongle prend plusieurs mois ; un usage régulier sur cette durée est nécessaire avant de juger l'effet de la crème sur la solidité des nouveaux ongles.",
      },
      {
        question: "Peut-on l'utiliser en même temps que du vernis ?",
        reponse:
          "Elle s'applique mieux sur ongle nu, avant la pose de vernis, ou en soin du soir après un démaquillage complet des ongles, pour une meilleure pénétration.",
      },
      {
        question: "Cette crème convient-elle aussi aux cuticules ?",
        reponse:
          "Oui, l'application sur le pourtour de l'ongle inclut naturellement les cuticules, une zone qui bénéficie aussi d'un apport en soin pour rester souple.",
      },
    ],
  },
  {
    slug: "acm-novophane-lotion-anti-chute-reactional-100ml",
    identite: [
      "Cette lotion Novophane cible spécifiquement la chute réactionnelle, c'est-à-dire une chute de cheveux déclenchée par un facteur identifiable et temporaire — stress, fatigue, changement de saison, période post-partum — par opposition à la chute chronique d'origine génétique. Sa formule vise à accompagner le cuir chevelu pendant cette période et à limiter l'amplification de la chute le temps que le facteur déclenchant s'estompe. Elle s'inscrit dans la gamme Novophane, qui distingue précisément ce type de chute de la chute chronique, traitée par une autre lotion de la même ligne.",
    ],
    faits: [
      { libelle: "Type de chute ciblée", valeur: "réactionnelle (temporaire)" },
      { libelle: "Format", valeur: "lotion 100ml" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'applique directement sur le cuir chevelu, cheveux secs ou légèrement humides, en massant du bout des doigts pour favoriser la pénétration, généralement en cure de plusieurs semaines. Elle se combine bien avec un shampoing Novophane de la même gamme, appliqué en amont, pour renforcer la cohérence de la cure.",
    ],
    positionnement: [
      "Dans le rayon anti-chute cheveux, cette lotion se distingue par son ciblage précis de la chute réactionnelle et temporaire, plutôt que la chute chronique et progressive. Elle convient moins à une chute installée depuis plusieurs années ou d'origine héréditaire, pour laquelle la lotion Novophane Chronique de la même gamme est plus adaptée.",
    ],
    faq: [
      {
        question: "Quelle différence avec la lotion Novophane Chronique ?",
        reponse:
          "Cette lotion cible une chute réactionnelle, déclenchée par un facteur temporaire comme le stress ou une période post-partum. La version Chronique s'adresse à une chute installée depuis longtemps, souvent d'origine génétique, un mécanisme différent.",
      },
      {
        question: "Combien de temps dure une cure avec cette lotion ?",
        reponse:
          "Une cure se compte généralement en semaines plutôt qu'en jours, le cycle du cheveu étant lent ; la régularité d'application compte davantage qu'une durée fixe pour juger du résultat.",
      },
      {
        question: "Peut-on l'utiliser en prévention, sans chute active ?",
        reponse:
          "Elle est surtout pensée pour accompagner une chute déjà constatée et liée à un facteur identifiable. En dehors de tout épisode de chute, un shampoing Novophane adapté au cuir chevelu suffit en entretien courant.",
      },
    ],
  },
  {
    slug: "acm-novophane-lotion-chronique-100ml",
    identite: [
      "À la différence de la version Réactionnelle de la même gamme, cette lotion Novophane cible la chute chronique, une chute progressive et installée dans la durée, le plus souvent d'origine génétique ou hormonale plutôt que déclenchée par un facteur ponctuel. Sa formule est pensée pour un usage au long cours, dans une logique d'entretien du cuir chevelu plutôt que de résolution rapide d'un épisode isolé. Elle s'adresse à qui observe un dégarnissement progressif sur plusieurs mois ou années, plutôt qu'une chute brutale et récente.",
    ],
    faits: [
      { libelle: "Type de chute ciblée", valeur: "chronique (installée)" },
      { libelle: "Format", valeur: "lotion 100ml" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'applique sur le cuir chevelu, cheveux secs ou légèrement humides, en massant du bout des doigts, dans le cadre d'une cure longue de plusieurs mois plutôt que de quelques semaines. Elle se combine avec un shampoing Novophane adapté, appliqué en amont, pour une routine cohérente sur la durée.",
    ],
    positionnement: [
      "Dans le rayon anti-chute cheveux, cette lotion se distingue par son ciblage de la chute chronique et installée, à l'opposé de la chute réactionnelle et temporaire visée par une autre lotion de la même gamme. Elle convient moins à une chute récente et clairement liée à un épisode de stress ou une période post-partum, pour laquelle la version Réactionnelle est plus indiquée.",
    ],
    faq: [
      {
        question: "Cette lotion agit-elle vite ?",
        reponse:
          "Non, elle s'inscrit dans une cure longue, se comptant en mois plutôt qu'en semaines, cohérente avec la nature progressive de la chute chronique qu'elle cible.",
      },
      {
        question: "Faut-il l'utiliser en continu ou par cures ?",
        reponse:
          "Un usage prolongé et régulier est généralement nécessaire pour ce type de chute installée ; une interruption prolongée peut réduire l'effet obtenu, contrairement à une cure ponctuelle pour une chute réactionnelle.",
      },
      {
        question: "Comment savoir si ma chute est chronique ou réactionnelle ?",
        reponse:
          "Une chute chronique s'installe progressivement sur plusieurs mois ou années, souvent sans cause ponctuelle identifiable. Une chute réactionnelle apparaît plus brutalement après un facteur déclencheur précis. En cas de doute, un avis dermatologique aide à orienter le choix.",
      },
    ],
  },
  {
    slug: "acm-novophane-shampoing-energisant-200ml",
    identite: [
      "Ce shampoing énergisant de la gamme Novophane accompagne les lotions anti-chute de la même ligne, en nettoyant le cuir chevelu sans effet asséchant ni film gras résiduel qui gênerait la pénétration d'une lotion appliquée ensuite. Il s'inscrit dans une logique de cure complète associant shampoing et lotion, plutôt qu'un usage isolé comme simple shampoing d'entretien. Sa formule vise à tonifier le cuir chevelu à chaque lavage, en préparation du soin ciblé qui suit.",
    ],
    faits: [
      { libelle: "Format", valeur: "200ml" },
      { libelle: "Usage", valeur: "en complément d'une lotion anti-chute" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'utilise comme un shampoing classique, en massant le cuir chevelu puis en rinçant, idéalement suivi de l'application d'une lotion Novophane (Réactionnelle ou Chronique selon le type de chute) sur cheveux encore légèrement humides ou secs selon la notice de la lotion choisie.",
    ],
    positionnement: [
      "Dans le rayon shampoing anti-chute, ce produit se positionne comme le complément naturel des lotions Novophane plutôt que comme solution autonome : son action reste celle d'un shampoing, moins ciblée qu'une lotion laissée sur le cuir chevelu. Il convient moins à qui cherche un shampoing seul suffisant contre une chute marquée, pour qui l'association avec une lotion de la même gamme est nécessaire.",
    ],
    faq: [
      {
        question: "Ce shampoing suffit-il seul contre la chute de cheveux ?",
        reponse:
          "Il est pensé pour accompagner une lotion Novophane plutôt que pour agir seul ; associé à une lotion adaptée au type de chute, il complète la cure sans la remplacer.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, un shampoing de ce type se prête à un usage régulier, au rythme de lavage habituel de chaque personne, sans nécessité d'espacer les applications.",
      },
      {
        question: "Avec quelle lotion l'associer ?",
        reponse:
          "Le choix dépend du type de chute : la lotion Réactionnelle pour une chute récente et temporaire, la lotion Chronique pour une chute installée depuis plus longtemps.",
      },
    ],
  },
  {
    slug: "acm-novophane-shampoing-sebo-regulateur-200ml",
    identite: [
      "Ce shampoing Novophane cible la régulation du sébum sur le cuir chevelu, pour les cheveux qui regraissent vite après le lavage. Contrairement aux shampoings anti-chute de la même gamme, il s'adresse en priorité à un cuir chevelu gras plutôt qu'à une chute de cheveux active, même si un excès de sébum peut, chez certaines personnes, accompagner une chute réactionnelle. Sa formule nettoie en douceur tout en aidant à limiter la production excessive de sébum entre deux lavages.",
    ],
    faits: [
      { libelle: "Type de cheveux", valeur: "cuir chevelu gras" },
      { libelle: "Format", valeur: "200ml" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'utilise en lavage régulier, en massant le cuir chevelu pour bien répartir le produit avant de rincer. Un lavage trop fréquent peut, à l'inverse, stimuler la production de sébum en réaction ; un rythme adapté au type de cheveux, sans excès, donne généralement de meilleurs résultats sur la durée.",
    ],
    positionnement: [
      "Dans le rayon shampoing, ce produit se distingue par son ciblage du cuir chevelu gras plutôt qu'un usage généraliste ou anti-chute. Il convient moins à un cuir chevelu sec ou normal, pour qui les shampoings sébo-régulateurs peuvent au contraire accentuer une sensation de tiraillement.",
    ],
    faq: [
      {
        question: "Ce shampoing convient-il aussi en cas de chute de cheveux ?",
        reponse:
          "Il cible avant tout l'excès de sébum, pas la chute elle-même. En cas de chute active, un shampoing spécifiquement anti-chute de la gamme Novophane, associé à une lotion adaptée, est plus indiqué.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Un cuir chevelu gras peut tolérer un lavage fréquent, mais un rythme trop rapproché peut aussi stimuler la production de sébum en réaction ; un lavage tous les deux jours est souvent un bon compromis à ajuster.",
      },
      {
        question: "Ce shampoing convient-il aux cheveux colorés ?",
        reponse:
          "La donnée disponible sur ce produit ne précise pas sa compatibilité avec les cheveux colorés ; en cas de coloration récente, il est prudent de vérifier cette information sur l'emballage avant utilisation.",
      },
    ],
  },
  {
    slug: "acm-novophane-shampooing-ultra-nutritif-cheveux-sec-abime-200ml",
    identite: [
      "Ce shampoing Novophane est formulé pour les cheveux secs et abîmés, à l'opposé du shampoing sébo-régulateur de la même gamme pensé pour les cheveux gras. Sa texture ultra-nutritive vise à limiter la sensation de rugosité et l'aspect terne associés aux cheveux déshydratés ou fragilisés par la chaleur, la coloration ou les frottements répétés. Il nettoie en apportant un film nourrissant, plutôt qu'en misant sur un nettoyage strictement dégraissant, pour respecter la fibre capillaire déjà fragilisée.",
    ],
    faits: [
      { libelle: "Type de cheveux", valeur: "sec et abîmé" },
      { libelle: "Format", valeur: "200ml" },
      { libelle: "Texture", valeur: "ultra-nutritive" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'utilise comme un shampoing classique, en massant le cuir chevelu et en faisant glisser la mousse sur les longueurs plutôt que de frotter énergiquement, un geste plus doux pour une fibre déjà fragilisée. Il se combine bien avec un soin démêlant ou un masque appliqué ensuite sur les pointes, la zone la plus sèche de la fibre capillaire.",
    ],
    positionnement: [
      "Dans le rayon shampoing, ce produit se distingue par son positionnement nutritif dédié aux cheveux secs et abîmés, à l'opposé du shampoing sébo-régulateur de la même gamme Novophane conçu pour les cheveux gras. Il convient moins à un cuir chevelu gras ou à des racines qui regraissent vite, sur lesquelles sa richesse peut alourdir la chevelure dès les premiers jours après le lavage.",
    ],
    faq: [
      {
        question: "Ce shampoing convient-il aux cheveux colorés ?",
        reponse:
          "Les cheveux colorés sont souvent plus secs et fragilisés, un profil cohérent avec la cible de ce shampoing nutritif ; la donnée disponible ne précise toutefois pas de mention spécifique couleur, à vérifier sur l'emballage.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Un cheveu sec et abîmé supporte généralement mal un lavage quotidien, qui peut accentuer la sécheresse ; un rythme plus espacé, deux à trois fois par semaine, est souvent mieux adapté.",
      },
      {
        question: "Faut-il un après-shampoing en complément ?",
        reponse:
          "Ce n'est pas obligatoire mais c'est cohérent avec le profil très sec ou abîmé visé par ce shampoing, un après-shampoing ou un masque appliqué sur les longueurs renforçant l'effet nourrissant.",
      },
    ],
  },
  {
    slug: "acm-novophane-shg-energisant-200ml",
    identite: [
      "Ce shampoing énergisant Novophane reprend la même logique que les shampoings anti-chute de la gamme : nettoyer le cuir chevelu sans l'agresser, en préparation d'une lotion tonique appliquée ensuite. Le sigle « SHG » dans l'intitulé de cette référence renvoie au même positionnement énergisant que la version classique de la gamme, pensée pour accompagner une cure anti-chute plutôt qu'un usage isolé. Il s'adresse à qui suit déjà, ou envisage, une cure avec une lotion Novophane et cherche un shampoing cohérent avec cette démarche.",
    ],
    faits: [
      { libelle: "Format", valeur: "200ml" },
      { libelle: "Positionnement", valeur: "shampoing énergisant" },
      { libelle: "Gamme", valeur: "Novophane" },
    ],
    usage: [
      "S'utilise comme un shampoing classique, en massant le cuir chevelu avant de rincer, dans le cadre d'une routine régulière. Il gagne à être suivi de l'application d'une lotion Novophane adaptée au type de chute constaté, sur cuir chevelu propre.",
    ],
    positionnement: [
      "Dans le rayon shampoing, cette référence se distingue par son positionnement énergisant tourné vers l'accompagnement d'une cure anti-chute, plutôt qu'un usage d'entretien général comme un shampoing classique du même rayon. Il convient moins à qui cherche un shampoing ciblé sur un autre besoin précis, comme un cuir chevelu gras ou des cheveux colorés, pour lesquels d'autres références du rayon sont plus adaptées.",
    ],
    faq: [
      {
        question: "Que signifie « SHG » dans le nom du produit ?",
        reponse:
          "Cette abréviation renvoie au shampoing énergisant de la gamme Novophane. Le détail exact de la dénomination figure sur l'emballage du produit.",
      },
      {
        question: "Ce shampoing remplace-t-il une lotion anti-chute ?",
        reponse:
          "Non, il la complète. Le shampoing nettoie et prépare le cuir chevelu, la lotion reste l'étape qui agit spécifiquement sur le cuir chevelu une fois les cheveux lavés.",
      },
      {
        question: "Peut-on l'utiliser sans avoir de chute de cheveux constatée ?",
        reponse:
          "Oui, en shampoing d'entretien courant, mais son intérêt principal se manifeste surtout en accompagnement d'une cure anti-chute avec une lotion Novophane adaptée.",
      },
    ],
  },
  {
    slug: "acm-novophane-ds-shampoing-etats-squameux-moderes-125ml",
    identite: [
      "Ce shampoing Novophane.DS cible les états squameux modérés du cuir chevelu, c'est-à-dire les pellicules et la desquamation visible, sans viser les cas les plus sévères qui relèvent d'un avis dermatologique. Le sigle DS renvoie à cette indication ciblée, distincte du reste de la gamme Novophane centrée sur la chute de cheveux. Sa formule nettoie en douceur tout en aidant à limiter la desquamation, pour un cuir chevelu qui pèle ou démange de façon modérée et récurrente.",
    ],
    faits: [
      { libelle: "Indication", valeur: "états squameux modérés (pellicules)" },
      { libelle: "Format", valeur: "125ml" },
      { libelle: "Gamme", valeur: "Novophane.DS" },
    ],
    usage: [
      "S'utilise en lavage régulier, en laissant le produit poser quelques minutes sur le cuir chevelu avant de rincer, pour laisser le temps aux actifs d'agir sur la desquamation. En cas d'états squameux marqués ou persistants malgré un usage régulier, un avis dermatologique reste recommandé.",
    ],
    positionnement: [
      "Dans le rayon shampoing antipelliculaire, cette référence se distingue par son indication mesurée aux états « modérés », plus ciblée qu'un shampoing antipelliculaire générique grand public. Elle convient moins à des états squameux sévères ou inflammatoires, qui nécessitent un avis et, le cas échéant, un accompagnement dermatologique dédié.",
    ],
    faq: [
      {
        question: "Ce shampoing agit-il sur une dermite séborrhéique sévère ?",
        reponse:
          "Il est indiqué pour des états squameux modérés. En cas de dermite séborrhéique marquée ou de symptômes persistants, un avis dermatologique est recommandé pour orienter vers un soin adapté à la sévérité du cas.",
      },
      {
        question: "Combien de temps le laisser poser sur le cuir chevelu ?",
        reponse:
          "Quelques minutes de pose avant rinçage permettent généralement aux actifs antipelliculaires d'agir ; la durée précise recommandée figure sur l'emballage du produit.",
      },
      {
        question: "Peut-on l'utiliser en usage préventif, sans pellicules visibles ?",
        reponse:
          "Il est surtout pensé pour un état squameux déjà constaté. En prévention sans symptôme, un shampoing doux d'entretien du rayon suffit généralement.",
      },
    ],
  },
  {
    slug: "acm-roll-on-anti-transpirant-intensif-50ml",
    identite: [
      "Ce roll-on ACM se positionne comme un anti-transpirant intensif plutôt qu'un déodorant simple : il vise à réduire la production de transpiration elle-même, et pas seulement à masquer les odeurs qui lui sont associées. Le format roll-on permet une application précise et ciblée sous les bras, avec un dosage contrôlé à chaque passage. Cette intensité renforcée s'adresse à une transpiration plus abondante que la moyenne, pour qui un déodorant classique du rayon ne suffit pas à tenir la journée.",
    ],
    faits: [
      { libelle: "Type", valeur: "anti-transpirant intensif" },
      { libelle: "Format", valeur: "roll-on 50ml" },
      { libelle: "Zone", valeur: "aisselles" },
    ],
    usage: [
      "S'applique sur peau propre et sèche ; se référer à la notice pour le moment d'application recommandé, certaines formules intensives étant pensées pour le soir afin de laisser le temps aux actifs d'agir avant la transpiration du lendemain. Éviter d'appliquer sur peau irritée, fraîchement rasée ou épilée, plus sensible aux actifs concentrés.",
    ],
    positionnement: [
      "Dans le rayon déodorant roll-on, ce produit se distingue par son intensité, au-dessus d'un déodorant classique du même rayon en termes d'action anti-transpirante. Il convient moins à une peau sensible qui réagit déjà aux déodorants standards, pour qui une formule plus douce du même rayon est préférable.",
    ],
    faq: [
      {
        question: "Quelle différence avec un déodorant classique ?",
        reponse:
          "Un déodorant classique masque surtout les odeurs, alors qu'un anti-transpirant intensif comme celui-ci vise aussi à réduire la production de transpiration elle-même, pour une action plus marquée sur la sensation d'humidité.",
      },
      {
        question: "Peut-on l'appliquer juste après un rasage des aisselles ?",
        reponse:
          "Il est préférable d'attendre que la peau ne soit plus irritée par le rasage avant d'appliquer un anti-transpirant intensif, au risque de sensation de picotement sur une peau fraîchement rasée.",
      },
      {
        question: "Faut-il l'appliquer tous les jours ?",
        reponse:
          "Un usage régulier, souvent quotidien, est habituel pour ce type de produit ; certaines formules intensives gagnent en efficacité avec une application le soir, à ajuster selon la notice et la tolérance de la peau.",
      },
    ],
  },
];
