import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "tocobo-cica-cooling-sun-stick-spf50-pa",
    identite: [
      "Ce stick solaire coréen combine une protection SPF50+ PA++++ à un effet rafraîchissant immédiat au contact de la peau, grâce à sa bille métallique qui reste fraîche même en extérieur. La formule associe filtres UV et centella asiatica (cica), un actif apaisant qui limite la sensation d'échauffement cutané provoqué par le soleil. Le format stick, sans les mains, permet une application rapide sur le visage et une retouche en journée par-dessus le maquillage sans le déplacer. Tocobo, marque coréenne spécialisée dans les soins minimalistes, le positionne comme un solaire du quotidien, léger, sans film gras, adapté aux peaux mixtes à sensibles qui recherchent une protection sans lourdeur.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+ PA++++" },
      { libelle: "Format", valeur: "stick à bille métallique rafraîchissante" },
      { libelle: "Actif clé", valeur: "centella asiatica (cica)" },
      { libelle: "Applicateur", valeur: "stick nomade, retouche possible sur maquillage" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, en couches croisées sur l'ensemble du visage pour atteindre la protection annoncée, un passage unique et rapide ne suffisant pas à couvrir toute la surface. La bille permet une retouche en cours de journée sans démaquiller, utile en extérieur prolongé. Laisser sécher quelques secondes avant tout contact avec un tissu ou un masque.",
    ],
    positionnement: [
      "Face aux crèmes solaires classiques, ce stick gagne en praticité de retouche mais couvre une surface plus réduite par passage, ce qui demande plus de gestes pour une protection homogène. Il convient bien à qui veut un geste rapide sans repasser par les mains, moins à qui cherche à couvrir en une seule fois de grandes zones comme le corps.",
    ],
    faq: [
      {
        question: "Peut-on appliquer ce stick par-dessus le maquillage ?",
        reponse:
          "Oui, c'est l'un des usages prévus par le format bille : il permet de recharger la protection en journée sans retirer le maquillage, contrairement à une crème qui nécessiterait de tout refaire.",
      },
      {
        question: "L'effet rafraîchissant dure-t-il toute la journée ?",
        reponse:
          "La sensation de fraîcheur est surtout perceptible au moment de l'application, portée par la bille métallique et la centella asiatica ; elle s'estompe ensuite, la protection solaire restant l'effet principal du produit.",
      },
    ],
  },
  {
    slug: "acm-depiwhite-lait-corporel-eclaircissant-500ml",
    identite: [
      "Ce lait corporel de la gamme Depiwhite d'ACM, laboratoire dermatologique français, vise l'unification du teint sur les zones du corps marquées par des taches pigmentaires ou un teint irrégulier (coudes, genoux, aisselles, zones de frottement). Sa texture lait, plus fluide qu'une crème, s'étale facilement sur de grandes surfaces et pénètre sans laisser de film. La formule associe des actifs éclaircissants à visée cosmétique qui agissent sur le renouvellement cellulaire et l'aspect des marques pigmentaires. Le grand format de 500ml correspond à un usage corporel régulier plutôt qu'à une application ciblée, contrairement aux soins visage plus concentrés de la même gamme.",
    ],
    faits: [
      { libelle: "Format", valeur: "lait corporel, 500ml" },
      { libelle: "Gamme", valeur: "Depiwhite (ACM)" },
      { libelle: "Zone d'application", valeur: "corps entier, zones pigmentées" },
      { libelle: "Effet recherché", valeur: "unification du teint, atténuation visuelle des taches" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau propre et sèche, en massant jusqu'à absorption complète, sur les zones concernées par un teint irrégulier. Un usage régulier et prolongé est nécessaire pour percevoir une évolution de l'aspect des taches, les résultats de ce type de produit s'installant progressivement. Une protection solaire est recommandée sur les zones traitées et exposées, pour ne pas relancer la pigmentation.",
    ],
    positionnement: [
      "Ce lait couvre le corps quand la plupart des soins éclaircissants du marché ciblent surtout le visage ; il convient à qui veut agir sur des marques aux bras, aux jambes ou sur des zones de frottement. Il ne remplace pas un soin visage dédié, plus concentré, et ne convient pas à une utilisation sur peau lésée ou fraîchement épilée.",
    ],
    faq: [
      {
        question: "Ce lait peut-il s'utiliser sur le visage ?",
        reponse:
          "Il est formulé pour le corps, avec une texture et une concentration pensées pour de grandes surfaces. Pour le visage, la gamme Depiwhite propose des soins dédiés, plus adaptés à la finesse de cette peau.",
      },
      {
        question: "Faut-il une protection solaire avec ce lait ?",
        reponse:
          "Oui, systématiquement sur les zones traitées. Les actifs éclaircissants rendent la peau plus sensible à l'exposition, et une peau non protégée peut voir la pigmentation revenir plus vite.",
      },
    ],
  },
  {
    slug: "acm-depiwhite-masque-depiwhite-masque-40ml",
    identite: [
      "Ce masque de la gamme Depiwhite d'ACM se présente en format tube de 40ml, pensé pour un usage ponctuel plutôt que quotidien, en complément des soins de fond de la même ligne. Sa texture s'applique en couche sur le visage nettoyé et agit en pose courte pour cibler l'aspect du teint irrégulier et des taches pigmentaires. Il s'inscrit dans la routine anti-taches d'ACM comme un geste d'appoint, à réserver aux moments où le teint paraît le plus terne, sans se substituer à la crème ou au sérum éclaircissant utilisés en continu.",
    ],
    faits: [
      { libelle: "Format", valeur: "masque en tube, 40ml" },
      { libelle: "Gamme", valeur: "Depiwhite (ACM)" },
      { libelle: "Fréquence", valeur: "usage ponctuel, en complément" },
      { libelle: "Zone", valeur: "visage, zones pigmentées" },
    ],
    usage: [
      "S'applique en couche sur peau nettoyée, en évitant le contour des yeux, puis se laisse poser le temps indiqué sur l'emballage avant rinçage. Il vient en renfort d'une routine anti-taches déjà en place, une à deux fois par semaine, plutôt qu'en remplacement du soin quotidien. Éviter de l'associer le même jour à un exfoliant acide pour ne pas irriter la peau.",
    ],
    positionnement: [
      "Face à une crème ou un sérum de la même gamme utilisés tous les jours, ce masque agit comme un geste d'intensification ponctuel plutôt qu'un soin de fond. Il convient à qui a déjà une routine Depiwhite installée et cherche un coup de pouce visible ; il ne suffit pas seul à unifier un teint marqué sans les autres soins de la ligne.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce masque tous les jours ?",
        reponse:
          "Non, il est conçu comme un soin d'appoint, à raison d'une à deux fois par semaine, en complément d'une crème ou d'un sérum de la gamme utilisés au quotidien.",
      },
      {
        question: "Ce masque remplace-t-il la crème Depiwhite ?",
        reponse:
          "Non, il vient en renfort ponctuel. La crème ou le sérum de la gamme restent le socle quotidien du soin, le masque n'intervenant qu'en complément.",
      },
    ],
  },
  {
    slug: "acm-depiwhite-masque-pelliculable-eclaircissant-40ml",
    identite: [
      "Ce masque pelliculable de la gamme Depiwhite d'ACM se retire en un seul film une fois sec, plutôt que de se rincer à l'eau comme une texture crème classique. Appliqué en couche épaisse sur le visage nettoyé, il forme une pellicule qui, en séchant, entraîne avec elle les impuretés de surface tout en délivrant les actifs éclaircissants de la gamme sur les zones marquées par des taches. Le tube de 40ml correspond à un usage d'appoint hebdomadaire, en complément des soins quotidiens anti-taches de la même ligne, pas à une utilisation journalière.",
    ],
    faits: [
      { libelle: "Format", valeur: "masque pelliculable en tube, 40ml" },
      { libelle: "Type", valeur: "film qui se retire sans rinçage" },
      { libelle: "Gamme", valeur: "Depiwhite (ACM)" },
      { libelle: "Fréquence conseillée", valeur: "usage hebdomadaire" },
    ],
    usage: [
      "S'applique en couche épaisse et régulière sur peau nettoyée, en évitant le contour des yeux et des lèvres. Laisser sécher complètement jusqu'à formation du film, puis le décoller délicatement en partant des bords, sans rincer. Une fois par semaine suffit pour ce type de masque, dont l'usage trop fréquent peut assécher la peau.",
    ],
    positionnement: [
      "Le format pelliculable le distingue des masques à rincer ou des masques en tissu du même rayon : le retrait mécanique du film apporte une sensation de peau nette immédiate, en plus de l'action éclaircissante. Il convient moins aux peaux très sèches ou sensibles, pour qui le décollement du film peut être inconfortable ; une version à rincer sera alors préférable.",
    ],
    faq: [
      {
        question: "Comment retirer ce masque une fois posé ?",
        reponse:
          "Une fois complètement sec, le film se décolle à la main en partant des bords, sans eau. Il ne doit pas être rincé comme un masque crème classique, sous peine de perdre l'effet pelliculable.",
      },
      {
        question: "Ce masque convient-il aux peaux sensibles ?",
        reponse:
          "Le retrait en film peut être moins confortable sur une peau sensible ou très sèche. Dans ce cas, un masque à rincer de la même gamme Depiwhite est un choix plus doux.",
      },
    ],
  },
  {
    slug: "acm-duolys-creme-contour-des-yeux-15ml",
    identite: [
      "Cette crème contour des yeux de la gamme Duolys d'ACM cible spécifiquement les cernes et les poches, deux signes de fatigue cutanée qui se logent sur la zone la plus fine du visage. Sa texture est pensée pour cette zone délicate : légère, elle s'estompe sans tirer ni laisser de film gras qui migrerait vers l'œil au cours de la journée. Le petit format de 15ml correspond à l'usage ciblé et économe en quantité propre à un soin contour des yeux, appliqué en petite dose du bout du doigt plutôt qu'étalé largement comme une crème visage.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème contour des yeux, 15ml" },
      { libelle: "Gamme", valeur: "Duolys (ACM)" },
      { libelle: "Zone ciblée", valeur: "cernes et poches" },
      { libelle: "Application", valeur: "petite quantité, du bout du doigt" },
    ],
    usage: [
      "S'applique matin et/ou soir, en très petite quantité, par légères pressions du bout de l'annulaire sur l'os orbitaire, jamais en frottant directement sur la paupière mobile. Elle vient avant la crème de jour ou de nuit dans l'ordre de la routine, jamais après, pour ne pas être bloquée par une texture plus riche. Éviter le contact direct avec l'œil.",
    ],
    positionnement: [
      "Face à une crème visage classique appliquée aussi sur le contour de l'œil, ce soin dédié apporte une texture et un dosage pensés pour cette zone fine, avec moins de risque d'inconfort oculaire. Il s'adresse à qui constate spécifiquement des cernes ou des poches marqués ; pour une peau sans signe de fatigue localisé sur cette zone, la crème visage habituelle suffit généralement.",
    ],
    faq: [
      {
        question: "À partir de quel âge utiliser ce type de contour des yeux ?",
        reponse:
          "Il n'y a pas de seuil strict : ce soin répond à un besoin (cernes, poches) plutôt qu'à un âge précis. Il convient dès que ces signes apparaissent, quel que soit le moment de la vie.",
      },
      {
        question: "Peut-on appliquer cette crème sur la paupière mobile ?",
        reponse:
          "Non, elle est destinée à l'os orbitaire, autour de l'œil. L'appliquer directement sur la paupière mobile augmente le risque qu'elle migre dans l'œil au cours de la journée.",
      },
    ],
  },
  {
    slug: "acm-sebionex-hydra-creme-reparatrice-40ml",
    identite: [
      "Cette crème réparatrice de la gamme Sebionex d'ACM s'adresse aux peaux à tendance acnéique, en particulier celles fragilisées par un traitement asséchant (rétinoïdes, peroxyde de benzoyle ou soin dermatologique local). Sa texture Hydra apporte une hydratation ciblée sans occlure les pores ni relancer les imperfections, ce qui la distingue d'une crème hydratante généraliste. Elle s'inscrit dans la gamme Sebionex consacrée à la régulation du sébum et au confort des peaux à imperfections, comme le soin de compensation à utiliser en parallèle d'un soin plus actif, pour limiter l'inconfort et la sensation de tiraillement.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème réparatrice, 40ml" },
      { libelle: "Gamme", valeur: "Sebionex (ACM)" },
      { libelle: "Peau ciblée", valeur: "peau à tendance acnéique, fragilisée" },
      { libelle: "Texture", valeur: "non comédogène, non grasse" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, en complément d'un soin local contre les imperfections dont elle vient compenser l'effet asséchant. Elle peut s'utiliser seule les jours où la peau ne reçoit pas de soin actif, en couche fine sur l'ensemble du visage. Elle ne remplace pas le soin ciblé sur les imperfections, elle en accompagne les effets secondaires cutanés.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, celle-ci est formulée pour ne pas aggraver les imperfections ni obstruer les pores, ce qui la rend plus adaptée aux peaux à tendance acnéique en cours de soin. Elle ne cible pas directement les boutons ou les points noirs : pour cela, un soin ciblé de la même gamme Sebionex est nécessaire en complément.",
    ],
    faq: [
      {
        question: "Cette crème agit-elle sur les boutons ?",
        reponse:
          "Non, elle n'est pas un soin ciblé sur les imperfections. Elle apporte une hydratation adaptée aux peaux à tendance acnéique et compense la sécheresse provoquée par un soin local, sans intervenir elle-même sur les boutons ou les points noirs.",
      },
      {
        question: "Peut-on l'utiliser sans soin anti-imperfections en parallèle ?",
        reponse:
          "Oui, sa texture non comédogène convient aussi comme hydratant quotidien d'une peau à tendance acnéique en dehors de toute période de soin actif.",
      },
    ],
  },
  {
    slug: "acm-sedacalm-creme-apaisante-120ml",
    identite: [
      "Cette crème apaisante de la gamme Sedacalm d'ACM est formulée pour les peaux sensibles et réactives, sujettes aux rougeurs, tiraillements ou picotements après exposition au froid, au vent ou à un produit mal toléré. Le format 120ml et sa place en soin du corps en font un soin pour les zones étendues (bras, jambes, décolleté) plutôt qu'un soin visage ciblé, avec une texture crème qui apaise sans laisser de film collant. Elle s'inscrit dans une gamme dédiée au confort immédiat de la peau réactive, pensée pour calmer plutôt que pour intervenir sur un problème dermatologique déclaré.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème apaisante, 120ml" },
      { libelle: "Gamme", valeur: "Sedacalm (ACM)" },
      { libelle: "Peau ciblée", valeur: "peau sensible, réactive" },
      { libelle: "Usage", valeur: "corps, zones étendues" },
    ],
    usage: [
      "S'applique en couche généreuse sur les zones sujettes aux rougeurs ou à l'inconfort, autant de fois que nécessaire dans la journée, y compris juste après une exposition au froid ou au vent ayant déclenché une sensation de tiraillement. Elle convient aussi en soin quotidien préventif sur une peau connue pour sa réactivité, sans limite de fréquence particulière.",
    ],
    positionnement: [
      "Face à une crème hydratante corps classique, celle-ci met l'accent sur l'apaisement immédiat plutôt que sur la nutrition ou l'effet anti-âge. Elle convient bien aux peaux qui réagissent facilement (rougeurs, sensations de chaleur) ; une peau simplement sèche sans réactivité particulière trouvera un meilleur bénéfice dans une crème corps nourrissante classique.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle à une peau atopique ?",
        reponse:
          "Elle est pensée pour l'inconfort et les rougeurs liés à la sensibilité cutanée en général. Pour une peau atopique diagnostiquée, l'avis d'un dermatologue reste utile pour choisir un soin adapté au cas précis.",
      },
      {
        question: "Peut-on l'appliquer sur le visage ?",
        reponse:
          "Elle est positionnée comme un soin du corps, avec une texture pensée pour de grandes surfaces. Pour le visage, un format ou une texture plus adaptés à cette peau plus fine sont préférables.",
      },
    ],
  },
  {
    slug: "a-derma-dermalibour-cica-creme-reparatrice-assainissante-50ml",
    identite: [
      "Cette crème de la gamme Dermalibour+ d'A-Derma, marque du groupe Pierre Fabre construite autour de l'avoine Rhealba, est formulée pour les peaux abîmées, irritées ou fragilisées par de petites lésions cutanées (fissures, gerçures, frottements). Le CICA de son nom renvoie à la centella asiatica et aux actifs réparateurs de la formule, tandis que assainissante indique une action sur les peaux à risque de surinfection, sur des zones qui ont besoin d'un soin filmogène et protecteur. Sa texture crème riche forme un film protecteur sans être occlusive au point d'empêcher la cicatrisation naturelle de la peau.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème réparatrice, 50ml" },
      { libelle: "Gamme", valeur: "Dermalibour+ (A-Derma)" },
      { libelle: "Peau ciblée", valeur: "peau abîmée, irritée, à risque de surinfection" },
      { libelle: "Ingrédient signature", valeur: "avoine Rhealba, centella asiatica" },
    ],
    usage: [
      "S'applique en couche épaisse sur la zone abîmée ou irritée, nettoyée et séchée au préalable, une à plusieurs fois par jour selon le besoin, jusqu'à amélioration visible de l'aspect de la peau. Elle peut s'utiliser sur de petites lésions superficielles du quotidien (frottements, gerçures) mais ne remplace pas un avis médical sur une plaie qui ne s'améliore pas ou s'infecte.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, celle-ci cible spécifiquement la réparation d'une peau abîmée plutôt que l'entretien d'une peau saine au quotidien. Elle convient à qui a une zone irritée précise à traiter, en cure courte ; pour une hydratation générale sans lésion ni irritation, une crème de soin courant suffit et n'a pas besoin de cette formule ciblée.",
    ],
    faq: [
      {
        question: "Cette crème peut-elle s'utiliser sur le visage des enfants ?",
        reponse:
          "Les soins Dermalibour+ sont généralement formulés pour convenir aux peaux fragiles, y compris celles des enfants, mais il reste préférable de vérifier les précisions du fabricant sur l'âge minimum recommandé avant emploi.",
      },
      {
        question: "Combien de temps faut-il l'utiliser ?",
        reponse:
          "Jusqu'à amélioration visible de la zone concernée. Si l'irritation persiste ou s'aggrave au-delà de quelques jours, un avis médical est recommandé plutôt que de prolonger l'usage seul.",
      },
    ],
  },
  {
    slug: "a-derma-dermalibour-barrier-creme-isolante-50ml",
    identite: [
      "Cette crème isolante de la gamme Dermalibour+Barrier d'A-Derma forme un film protecteur à la surface de la peau, pensé pour les zones exposées à une agression répétée : frottement, macération, contact avec des liquides ou des textiles irritants. Contrairement à une crème réparatrice classique qui nourrit en profondeur, une crème isolante agit surtout en barrière physique, en créant une interface entre la peau fragilisée et son environnement. Elle s'inscrit dans la même famille que le Dermalibour+ CICA mais répond à un besoin différent : protéger une zone à risque plutôt que réparer une lésion déjà installée.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème isolante, 50ml" },
      { libelle: "Gamme", valeur: "Dermalibour+Barrier (A-Derma)" },
      { libelle: "Fonction", valeur: "film protecteur, barrière physique" },
      { libelle: "Usage", valeur: "zones exposées au frottement ou à la macération" },
    ],
    usage: [
      "S'applique en couche fine et homogène sur peau propre et sèche, sur la zone à protéger, avant toute exposition prévisible à un facteur irritant (frottement, contact prolongé avec un textile ou un liquide). Elle peut s'appliquer plusieurs fois par jour selon le degré d'exposition de la zone concernée, en renouvelant l'application si le film a été essuyé ou rincé.",
    ],
    positionnement: [
      "Face à la crème Dermalibour+ CICA, plus réparatrice, celle-ci se distingue par sa fonction préventive de barrière physique. Elle convient à qui doit protéger une zone à risque avant l'apparition d'une lésion ; une fois la peau déjà abîmée, une crème réparatrice reste plus indiquée pour accompagner la cicatrisation.",
    ],
    faq: [
      {
        question: "Quelle est la différence avec le Dermalibour+ CICA ?",
        reponse:
          "Le CICA répare une peau déjà abîmée grâce à des actifs cicatrisants, tandis que la version Barrier protège en amont, en formant un film qui limite le contact entre la peau et un facteur irritant.",
      },
      {
        question: "Peut-on l'utiliser en usage préventif quotidien ?",
        reponse:
          "Oui, c'est son usage principal : appliquée avant l'exposition à un facteur irritant connu, elle limite le risque d'irritation plutôt que d'intervenir une fois la peau déjà atteinte.",
      },
    ],
  },
  {
    slug: "anua-heartleaf-pore-control-cleansing-oil-200ml",
    identite: [
      "Cette huile démaquillante d'Anua, marque coréenne construite autour de l'heartleaf (Houttuynia cordata, une plante apaisante et purifiante traditionnelle), sert de première étape dans un double nettoyage : elle dissout le maquillage, l'excès de sébum et les filtres solaires avant un nettoyant à l'eau. Le pore control de son nom indique une formule pensée pour ne pas obstruer les pores malgré sa base huileuse, un point sensible pour les peaux mixtes à grasses qui redoutent l'effet gras résiduel de certaines huiles démaquillantes. Elle émulsionne au contact de l'eau, ce qui la rince sans laisser de film.",
    ],
    faits: [
      { libelle: "Format", valeur: "huile démaquillante, 200ml" },
      { libelle: "Ingrédient signature", valeur: "extrait d'heartleaf (Houttuynia cordata)" },
      { libelle: "Étape de routine", valeur: "premier nettoyage (double cleansing)" },
      { libelle: "Peau ciblée", valeur: "peaux mixtes à grasses, pores dilatés" },
    ],
    usage: [
      "S'applique sur peau sèche, en massant sur l'ensemble du visage pour dissoudre maquillage et filtre solaire, puis s'émulsionne avec un peu d'eau avant rinçage. Elle constitue la première étape du double nettoyage du soir, suivie d'un nettoyant moussant qui élimine les résidus d'huile et la transpiration de la journée. Elle ne se laisse pas poser comme un masque : le massage et le rinçage se font dans la foulée.",
    ],
    positionnement: [
      "Face aux huiles démaquillantes classiques, souvent déconseillées aux peaux grasses par crainte des pores obstrués, celle-ci cible justement ce profil de peau grâce à sa formule pore control. Elle convient bien à qui porte maquillage ou solaire au quotidien et veut un nettoyage en profondeur sans finir tiraillé ; une peau très sèche pourra lui préférer un baume démaquillant plus nourrissant.",
    ],
    faq: [
      {
        question: "Cette huile convient-elle à une peau grasse ?",
        reponse:
          "Oui, c'est justement le profil de peau ciblé par sa formule pore control, pensée pour nettoyer en profondeur sans laisser de film gras ni obstruer les pores, contrairement à certaines huiles démaquillantes classiques.",
      },
      {
        question: "Faut-il un second nettoyant après cette huile ?",
        reponse:
          "Oui, dans la logique du double nettoyage coréen : cette huile retire maquillage et sébum en premier lieu, un nettoyant moussant complète ensuite pour éliminer les derniers résidus.",
      },
    ],
  },
  {
    slug: "anua-100-pdrn-hyaluronic-acid-capsule-100-serum-30ml",
    identite: [
      "Ce sérum d'Anua associe le PDRN (polydeoxyribonucléotide, un actif régénérant tiré de fragments d'ADN de saumon, tendance en cosmétique coréenne récente) à de l'acide hyaluronique, dans une formule que la marque présente en concentration élevée (capsule 100). Le PDRN est recherché pour son action sur la régénération et le confort de la barrière cutanée, tandis que l'acide hyaluronique apporte l'hydratation immédiate en surface et en profondeur selon son poids moléculaire. La texture sérum, plus légère qu'une crème, s'utilise en couche fine sous le soin hydratant habituel, pour délivrer ces actifs avant l'occlusion d'une crème.",
    ],
    faits: [
      { libelle: "Format", valeur: "sérum, 30ml" },
      { libelle: "Actifs clés", valeur: "PDRN, acide hyaluronique" },
      { libelle: "Concentration annoncée", valeur: "capsule 100" },
      { libelle: "Étape de routine", valeur: "sérum, avant la crème" },
    ],
    usage: [
      "S'applique après le nettoyage et la lotion tonique, en quelques gouttes réparties sur l'ensemble du visage, matin et/ou soir. Il précède la crème hydratante dans l'ordre de la routine, celle-ci venant sceller les actifs du sérum. Il peut se combiner à d'autres sérums plus actifs (BHA, azélaïque) en les espaçant dans la routine plutôt qu'en les superposant le même soir au départ.",
    ],
    positionnement: [
      "Face à un sérum hyaluronique simple, celui-ci ajoute le PDRN comme actif de régénération, ce qui le positionne sur un segment plus technique et plus récent de la cosmétique coréenne. Il convient à qui cherche un soin réparateur et repulpant plutôt qu'un soin ciblé sur les taches ou les imperfections, pour lequel d'autres sérums de la marque sont plus indiqués.",
    ],
    faq: [
      {
        question: "Qu'est-ce que le PDRN en cosmétique ?",
        reponse:
          "C'est un actif dérivé de fragments d'ADN de saumon, recherché pour son effet régénérant sur la peau. Il est associé ici à l'acide hyaluronique pour combiner réparation et hydratation dans un même sérum.",
      },
      {
        question: "Ce sérum peut-il remplacer la crème hydratante ?",
        reponse:
          "Non, un sérum se superpose à la crème plutôt qu'il ne la remplace. Sa texture plus légère délivre les actifs en profondeur, tandis que la crème scelle l'hydratation en surface.",
      },
    ],
  },
  {
    slug: "anua-azelaic-acid-10-hyaluron-redness-soothing-serum-30ml",
    identite: [
      "Ce sérum d'Anua associe l'acide azélaïque à 10 % à de l'acide hyaluronique, une combinaison pensée pour les peaux marquées par des rougeurs, un teint irrégulier ou des imperfections persistantes. L'acide azélaïque est un actif reconnu en dermo-cosmétique pour son action sur l'aspect des rougeurs et des marques pigmentaires, avec une tolérance généralement meilleure que d'autres actifs exfoliants plus agressifs. L'acide hyaluronique de la formule compense l'effet parfois asséchant de l'azélaïque en apportant une hydratation immédiate, ce qui rend ce sérum utilisable par des peaux réactives que d'autres actifs correcteurs irriteraient.",
    ],
    faits: [
      { libelle: "Format", valeur: "sérum, 30ml" },
      { libelle: "Actif principal", valeur: "acide azélaïque 10%" },
      { libelle: "Actif secondaire", valeur: "acide hyaluronique" },
      { libelle: "Peau ciblée", valeur: "peau à rougeurs, teint irrégulier" },
    ],
    usage: [
      "S'applique le soir, sur peau nettoyée et sèche, en quelques gouttes sur les zones concernées ou l'ensemble du visage. Il est préférable de l'introduire progressivement (un soir sur deux la première semaine) pour évaluer la tolérance, puis d'augmenter la fréquence. Il ne se combine pas le même soir à un rétinol ou à un exfoliant acide fort, au risque d'irriter une peau déjà sensibilisée.",
    ],
    positionnement: [
      "Face aux sérums à la vitamine C, plus stimulants mais parfois irritants, ce sérum à l'azélaïque cible spécifiquement les rougeurs et les marques avec un profil de tolérance plus doux. Il convient bien aux peaux réactives ou à tendance rosacée ; il agit plus lentement qu'un actif exfoliant fort, ce qui ne conviendra pas à qui cherche un résultat rapide sur des taches marquées.",
    ],
    faq: [
      {
        question: "L'acide azélaïque convient-il aux peaux sensibles ?",
        reponse:
          "Oui, c'est l'un des actifs correcteurs les mieux tolérés par les peaux réactives, notamment comparé à des exfoliants acides plus forts. Une introduction progressive reste conseillée pour toute peau qui découvre l'actif.",
      },
      {
        question: "Peut-on associer ce sérum au rétinol ?",
        reponse:
          "Il vaut mieux les alterner plutôt que les superposer le même soir, pour ne pas cumuler deux actifs sur une peau qui pourrait alors devenir irritée.",
      },
    ],
  },
  {
    slug: "anua-azelaic-acid-10-hyaluron-redness-soothing-serum-apaisant-30ml",
    identite: [
      "Ce sérum d'Anua conjugue acide azélaïque à 10 % et acide hyaluronique dans une formule pensée pour apaiser une peau à rougeurs tout en maintenant son niveau d'hydratation. Là où l'azélaïque seul peut assécher certaines peaux, l'ajout d'acide hyaluronique en fait un soin qui reste confortable à l'usage quotidien, avec une sensation de fraîcheur à l'application plutôt qu'un tiraillement. Il s'adresse aux peaux sensibles qui recherchent un actif correcteur pour l'aspect du teint sans sacrifier le confort, un compromis que peu de sérums exfoliants du même rayon proposent.",
    ],
    faits: [
      { libelle: "Format", valeur: "sérum, 30ml" },
      { libelle: "Actifs", valeur: "acide azélaïque 10%, acide hyaluronique" },
      { libelle: "Effet recherché", valeur: "apaisement, hydratation, teint plus uniforme" },
      { libelle: "Peau ciblée", valeur: "peau sensible, sujette aux rougeurs" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée, en fine couche, avant la crème de nuit. Il convient de commencer par un usage espacé (deux à trois soirs par semaine) le temps d'évaluer la tolérance cutanée, avant de passer à un usage quotidien si la peau le supporte bien. Éviter de le superposer à un exfoliant acide le même soir.",
    ],
    positionnement: [
      "Comparé à un sérum hyaluronique pur, celui-ci ajoute une dimension correctrice grâce à l'azélaïque, utile pour qui a des rougeurs en plus d'un besoin d'hydratation. Il convient moins à une peau qui cherche uniquement du volume et de l'hydratation sans problème de rougeur, pour laquelle un sérum hyaluronique simple suffit, sans les précautions d'usage propres à l'azélaïque.",
    ],
    faq: [
      {
        question: "Ce sérum pique-t-il à l'application ?",
        reponse:
          "Une légère sensation de fraîcheur ou de picotement léger est possible au début, en particulier sur peau très sensible ; elle s'atténue généralement avec l'habitude. Une sensation forte ou persistante doit amener à espacer les applications.",
      },
      {
        question: "Peut-on l'utiliser tous les jours dès le départ ?",
        reponse:
          "Il est plus prudent de commencer par quelques applications par semaine, le temps de vérifier la tolérance, avant de passer à un usage quotidien si la peau ne réagit pas.",
      },
    ],
  },
  {
    slug: "anua-bha-2-gentle-exfoliating-toner-150ml",
    identite: [
      "Ce tonique exfoliant d'Anua associe 2 % d'acide salicylique (BHA), un actif reconnu pour son action sur les pores dilatés et les peaux à imperfections, à un extrait d'heartleaf apaisant qui compense l'effet parfois asséchant des exfoliants acides. Le mot gentle du nom reflète un positionnement volontairement doux, pensé pour un usage fréquent plutôt qu'occasionnel, contrairement à des exfoliants BHA plus concentrés réservés à un usage hebdomadaire. Sa texture tonique, fluide et non collante, s'imbibe sur un coton ou s'applique aux mains, en geste rapide dans une routine coréenne en plusieurs étapes.",
    ],
    faits: [
      { libelle: "Format", valeur: "tonique exfoliant, 150ml" },
      { libelle: "Actif principal", valeur: "acide salicylique (BHA) 2%" },
      { libelle: "Actif secondaire", valeur: "extrait d'heartleaf" },
      { libelle: "Fréquence", valeur: "usage fréquent, formule douce" },
    ],
    usage: [
      "S'applique sur peau nettoyée, au coton ou aux mains, en tapotant jusqu'à absorption, avant le reste de la routine (sérums, crème). Sa formule douce permet un usage quotidien pour la plupart des peaux, tout en restant à introduire progressivement pour une peau qui découvre les BHA. Éviter de le cumuler le même jour avec un autre exfoliant acide fort.",
    ],
    positionnement: [
      "Face aux tonics exfoliants plus concentrés du marché, celui-ci mise sur une tolérance élevée compatible avec un usage quotidien, au prix d'une action plus progressive sur les pores marqués. Il convient bien à une peau à imperfections qui veut intégrer un BHA en routine régulière ; pour un résultat plus rapide sur des pores très dilatés, une formule plus concentrée agira davantage mais avec plus de risques d'irritation.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce tonique tous les jours ?",
        reponse:
          "Sa concentration à 2 % et sa formule apaisante à l'heartleaf le permettent pour la plupart des peaux, à condition de l'introduire progressivement les premières semaines si la peau n'a jamais utilisé de BHA.",
      },
      {
        question: "Ce tonique remplace-t-il un sérum exfoliant plus fort ?",
        reponse:
          "Non, il agit en entretien régulier et en douceur. Pour une action plus marquée sur des pores très dilatés ou des points noirs installés, un soin exfoliant plus concentré reste nécessaire en complément ponctuel.",
      },
    ],
  },
  {
    slug: "anua-glow-stick-invisible-finish-sunscreen-spf50-18g",
    identite: [
      "Ce stick solaire d'Anua délivre une protection SPF50+ dans un format nomade de 18g, pensé pour la retouche en journée par-dessus le maquillage. Le nom invisible finish indique une formule qui ne laisse pas de trace blanche visible à l'application, un point sensible sur les peaux mates que certains filtres minéraux marquent nettement. Le fini glow, légèrement lumineux, le distingue des solaires mats du même rayon et le rapproche d'un geste hybride entre protection et embellissement du teint, à réserver au visage plutôt qu'au corps vu son format compact.",
    ],
    faits: [
      { libelle: "Format", valeur: "stick solaire, 18g" },
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Fini", valeur: "glow, sans trace blanche annoncée" },
      { libelle: "Usage", valeur: "retouche en journée, par-dessus le maquillage" },
    ],
    usage: [
      "S'applique en dernière étape le matin, en croisant les passages sur l'ensemble du visage pour une couverture homogène, puis se réapplique en journée directement sur le maquillage, sans démaquiller. Son petit format le rend pratique à transporter mais impose des applications plus fréquentes pour couvrir tout le visage comparé à une crème en pot.",
    ],
    positionnement: [
      "Face à un solaire crème classique, ce stick gagne en praticité de retouche mais couvre une surface plus limitée par passage. Le fini glow convient à qui aime un teint légèrement lumineux ; une peau grasse qui cherche un effet strictement mat lui préférera une version matte finish du même rayon.",
    ],
    faq: [
      {
        question: "Ce stick laisse-t-il un effet blanc sur peau mate ?",
        reponse:
          "Le fini invisible finish est justement pensé pour limiter ce résidu blanc au moment de l'application, un point souvent reproché aux filtres solaires classiques sur les carnations mates.",
      },
      {
        question: "Peut-on l'utiliser sur le corps ?",
        reponse:
          "Son format compact de 18g le destine avant tout au visage et aux retouches ciblées ; pour le corps, un format plus grand en crème reste plus pratique à appliquer sur de grandes surfaces.",
      },
    ],
  },
  {
    slug: "anua-invisible-matte-finish-sunscreen-spf50-50ml",
    identite: [
      "Ce solaire visage d'Anua affiche une protection SPF50+ dans une texture fluide à fini mat, pensée pour les peaux mixtes à grasses qui brillent au bout de quelques heures avec la plupart des solaires classiques. Le invisible du nom renvoie à l'absence de trace blanche à l'application, un enjeu particulier sur les carnations mates que certains filtres minéraux marquent. Contrairement à la version glow stick de la même marque, celle-ci est pensée pour une application quotidienne en couche fine sous ou sans maquillage, sans réhausser l'éclat du teint.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème solaire visage, 50ml" },
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Fini", valeur: "matte, sans trace blanche annoncée" },
      { libelle: "Peau ciblée", valeur: "peaux mixtes à grasses" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, en quantité généreuse et en couches croisées sur l'ensemble du visage pour atteindre la protection annoncée. Elle peut se porter seule ou sous le maquillage, son fini mat limitant les besoins de retouche au cours de la journée comparé à un solaire brillant. Se réapplique en cas d'exposition prolongée.",
    ],
    positionnement: [
      "Face à la version glow stick de la même marque, ce fluide couvre mieux les grandes surfaces du visage en une application et convient davantage à un usage quotidien sous maquillage. Il s'adresse en priorité aux peaux mixtes à grasses gênées par la brillance ; une peau sèche pourra le trouver moins nourrissant qu'un solaire crème plus riche.",
    ],
    faq: [
      {
        question: "Ce solaire convient-il sous le maquillage ?",
        reponse:
          "Oui, son fini mat et sa texture fluide en font une base adaptée avant fond de teint, en laissant quelques minutes de pose pour qu'il se fixe avant l'application du maquillage.",
      },
      {
        question: "Quelle est la différence avec le stick Glow de la même marque ?",
        reponse:
          "Le stick vise surtout la retouche en journée avec un fini légèrement lumineux, tandis que ce fluide est pensé pour l'application initiale du matin en grande quantité, avec un rendu mat.",
      },
    ],
  },
  {
    slug: "anua-niacinamide-10-txa-4-serum-30ml",
    identite: [
      "Ce sérum d'Anua associe 10 % de niacinamide à 4 % d'acide tranexamique (TXA), une combinaison orientée vers l'aspect des taches pigmentaires et l'uniformité du teint. La niacinamide agit sur le confort de la peau et la régulation visuelle du sébum, tandis que l'acide tranexamique est un actif plus récent en cosmétique coréenne, étudié pour son action sur les marques pigmentaires et les rougeurs. La texture sérum légère permet de superposer ces deux actifs sous une crème sans alourdir la routine, dans un format concentré destiné à un usage ciblé sur plusieurs semaines plutôt qu'à un effet immédiat.",
    ],
    faits: [
      { libelle: "Format", valeur: "sérum, 30ml" },
      { libelle: "Actifs", valeur: "niacinamide 10%, acide tranexamique 4%" },
      { libelle: "Effet recherché", valeur: "atténuation visuelle des taches, teint uniforme" },
      { libelle: "Étape de routine", valeur: "sérum, avant la crème" },
    ],
    usage: [
      "S'applique matin et/ou soir, sur peau nettoyée et sèche, en quelques gouttes sur l'ensemble du visage ou les zones marquées. Les résultats sur l'aspect des taches s'installent progressivement sur plusieurs semaines d'usage régulier, pas en quelques jours. Une protection solaire quotidienne reste indispensable en journée pour ne pas relancer la pigmentation.",
    ],
    positionnement: [
      "Face à un sérum à la vitamine C, plus stimulant mais parfois irritant, cette combinaison niacinamide-TXA mise sur une tolérance plus douce pour un usage prolongé. Elle convient à qui cherche à atténuer l'aspect de taches installées avec un soin bien toléré au quotidien ; pour une action rapide et intense sur des marques très marquées, un protocole dermatologique reste plus indiqué.",
    ],
    faq: [
      {
        question: "Combien de temps avant de voir un résultat sur les taches ?",
        reponse:
          "Les actifs comme la niacinamide et l'acide tranexamique agissent progressivement ; un usage régulier de plusieurs semaines est nécessaire avant de percevoir une évolution visible de l'aspect du teint.",
      },
      {
        question: "Faut-il une protection solaire avec ce sérum ?",
        reponse:
          "Oui, indispensable. Un teint en cours de soin anti-taches est plus vulnérable à une exposition non protégée, qui peut annuler une partie des effets recherchés.",
      },
    ],
  },
  {
    slug: "anua-peach-77-niacin-essence-toner-250ml",
    identite: [
      "Ce toner-essence d'Anua s'appuie sur un extrait de pêche à forte concentration associé à de la niacinamide, dans une texture intermédiaire entre le tonique fluide et l'essence plus riche, typique de la routine coréenne en plusieurs étapes. Le nom Peach 77 renvoie à la teneur élevée en extrait de pêche de la formule, recherchée pour son effet apaisant et éclat plutôt que pour une action exfoliante. Le grand format de 250ml correspond à un usage généreux, en plusieurs couches (méthode dite du 7-skin), plutôt qu'à une application unique et parcimonieuse.",
    ],
    faits: [
      { libelle: "Format", valeur: "toner-essence, 250ml" },
      { libelle: "Ingrédient signature", valeur: "extrait de pêche concentré" },
      { libelle: "Actif secondaire", valeur: "niacinamide" },
      { libelle: "Texture", valeur: "intermédiaire entre tonique et essence" },
    ],
    usage: [
      "S'applique après le nettoyage, aux mains ou au coton, en une ou plusieurs couches selon le besoin d'hydratation du jour, avant le reste de la routine. Le grand format permet un usage généreux sans compter les gouttes, contrairement à un sérum concentré à doser au compte-goutte. Il peut se superposer à d'autres soins hydratants sans les alourdir.",
    ],
    positionnement: [
      "Face à un tonique classique, plus fluide et moins concentré en actifs, cette essence apporte davantage d'éclat et de confort en une seule étape. Elle convient bien à une routine coréenne en plusieurs couches ; pour une routine minimaliste en trois gestes, son format généreux sera moins pertinent qu'un tonique simple.",
    ],
    faq: [
      {
        question: "Quelle différence avec un tonique classique ?",
        reponse:
          "La texture est plus riche et la concentration en actifs plus élevée qu'un tonique d'entretien classique, ce qui la rapproche d'une essence, une étape intermédiaire typique de la routine coréenne.",
      },
      {
        question: "Peut-on l'utiliser en plusieurs couches le même soir ?",
        reponse:
          "Oui, c'est un usage courant pour ce type de produit, souvent appliqué en plusieurs passages successifs pour renforcer l'hydratation, une méthode popularisée par la routine coréenne en plusieurs étapes.",
      },
    ],
  },
  {
    slug: "anua-peach-77-niacin-enriched-cream-50ml",
    identite: [
      "Cette crème d'Anua prolonge la ligne Peach 77 en version soin hydratant, avec le même extrait de pêche concentré associé à de la niacinamide, dans une texture crème plus riche que l'essence de la même gamme. Elle vient sceller l'hydratation apportée par les étapes précédentes de la routine (tonique, sérum, essence) tout en poursuivant l'action sur l'éclat et le confort du teint propre à la ligne Peach 77. Sa texture, ni trop légère ni trop occlusive, convient à un usage quotidien sur peau normale à sèche, en dernière étape avant un éventuel soin solaire le matin.",
    ],
    faits: [
      { libelle: "Format", valeur: "crème hydratante, 50ml" },
      { libelle: "Gamme", valeur: "Peach 77 (Anua)" },
      { libelle: "Ingrédient signature", valeur: "extrait de pêche, niacinamide" },
      { libelle: "Peau ciblée", valeur: "peau normale à sèche" },
    ],
    usage: [
      "S'applique en dernière étape de la routine, matin et/ou soir, sur l'ensemble du visage après les soins plus fluides (tonique, sérum). Elle scelle l'hydratation apportée en amont plutôt que de la délivrer seule, un point à considérer sur une peau très sèche qui aura besoin d'associer un sérum hydratant en dessous.",
    ],
    positionnement: [
      "Face à l'essence Peach 77 de la même gamme, plus fluide, cette crème apporte davantage de confort sur peau sèche ou en climat froid, au prix d'une texture plus riche moins adaptée aux peaux grasses. Elle convient à qui veut poursuivre la ligne Peach 77 jusqu'à l'étape crème ; une peau grasse lui préférera un gel-crème plus léger.",
    ],
    faq: [
      {
        question: "Peut-on utiliser cette crème sans les autres produits de la ligne Peach 77 ?",
        reponse:
          "Oui, elle fonctionne comme une crème hydratante autonome, mais son effet sur l'éclat du teint est renforcé si elle s'inscrit dans la même ligne que le tonique ou l'essence Peach 77.",
      },
      {
        question: "Cette crème convient-elle à une peau grasse ?",
        reponse:
          "Sa texture, plus riche qu'un gel-crème, convient mieux à une peau normale à sèche. Une peau grasse pourra la trouver trop couvrante, surtout en climat chaud.",
      },
    ],
  },
  {
    slug: "arencia-eraser-shot-glycolic-acid-booster-30ml",
    identite: [
      "Ce booster d'Arencia, à l'acide glycolique, se présente en format sérum concentré (shot) destiné à s'ajouter ponctuellement à une routine existante plutôt qu'à la remplacer. L'acide glycolique est un AHA reconnu pour son action exfoliante en surface, qui aide à affiner le grain de peau et à atténuer visuellement les marques laissées par d'anciennes imperfections. Le format booster, distinct d'un sérum autonome, s'utilise en petite quantité mélangé à la crème ou au sérum habituel, ou en application ciblée sur les zones marquées par un teint irrégulier, ce qui en fait un soin d'appoint plutôt qu'un socle de routine.",
    ],
    faits: [
      { libelle: "Format", valeur: "booster exfoliant, 30ml" },
      { libelle: "Actif principal", valeur: "acide glycolique (AHA)" },
      { libelle: "Type d'usage", valeur: "soin d'appoint, à intégrer à une routine existante" },
      { libelle: "Zone ciblée", valeur: "peau marquée par des imperfections, grain irrégulier" },
    ],
    usage: [
      "S'utilise en petite quantité, mélangé à la crème ou au sérum habituel, ou appliqué seul sur les zones concernées en soirée, jamais le matin sans protection solaire derrière. Il s'introduit progressivement dans la routine, une à deux fois par semaine au départ, pour évaluer la tolérance de la peau à l'acide glycolique avant d'augmenter la fréquence.",
    ],
    positionnement: [
      "Face à un sérum exfoliant classique utilisé seul, ce format booster s'intègre à une routine déjà en place plutôt que de la remplacer, ce qui le rend plus flexible mais moins autonome. Il convient à qui a déjà des soins de base installés et cherche à intensifier ponctuellement l'exfoliation ; une peau sensible ou qui découvre les AHA devrait commencer par un exfoliant plus doux avant d'y ajouter ce booster.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce booster tous les jours ?",
        reponse:
          "Il vaut mieux commencer par un usage espacé, une à deux fois par semaine, le temps d'évaluer la tolérance de la peau à l'acide glycolique, avant d'envisager une fréquence plus élevée.",
      },
      {
        question: "Ce booster remplace-t-il un sérum exfoliant classique ?",
        reponse:
          "Non, il est pensé pour s'ajouter à une routine existante en petite quantité, plutôt que pour constituer à lui seul le soin exfoliant principal.",
      },
    ],
  },
];
