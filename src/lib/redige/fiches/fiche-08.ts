import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "bioderma-sebium-sensitive-30ml",
    identite: [
      "Sébium Sensitive appartient à la gamme Sébium de Bioderma, dédiée aux peaux à imperfections, mais vise un profil précis : celui des peaux sensibles qui réagissent aux traitements anti-imperfections classiques par des tiraillements, des rougeurs ou une sécheresse inconfortable.",
      "Sa texture fluide, sans parfum, apporte un apaisement tout en respectant la barrière cutanée, sans relancer la production de sébum. Le format 30 ml correspond à un soin ciblé, pensé pour accompagner ou faire suite à un traitement plus agressif, le temps que la peau retrouve son confort.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Sébium (anti-imperfections)" },
      { libelle: "Profil de peau", valeur: "Peau sensible sujette aux imperfections" },
      { libelle: "Parfum", valeur: "Sans parfum" },
      { libelle: "Format", valeur: "Soin ciblé 30 ml" },
    ],
    usage: [
      "S'applique en petite quantité sur les zones inconfortables ou sur l'ensemble du visage nettoyé, matin et/ou soir, en complément ou en alternance avec un traitement anti-imperfections plus actif. Convient particulièrement les jours où la peau tiraille après l'usage d'un rétinoïde ou d'un exfoliant, pour laisser la barrière cutanée se réapaiser avant de reprendre le traitement habituel.",
    ],
    positionnement: [
      "Face aux autres soins du rayon anti-acné, souvent formulés pour assécher, Sébium Sensitive se distingue par une approche apaisante plutôt qu'asséchante. Il convient moins à une peau grasse cherchant un effet matifiant fort ou à une acné inflammatoire importante, qui relève plutôt d'un soin correcteur dédié comme Sébium Sérum.",
    ],
    faq: [
      {
        question: "Sébium Sensitive remplace-t-il un traitement anti-acné ?",
        reponse:
          "Non, il n'a pas vocation à traiter l'acné en profondeur. Il aide à limiter l'inconfort et les rougeurs provoqués par un traitement anti-imperfections plus actif, en particulier chez les peaux réactives. Il s'utilise en complément, pas à la place, d'un soin ciblé sur les imperfections.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa formule sans parfum et sa texture légère le permettent en usage quotidien, matin et soir. Beaucoup l'utilisent aussi en alternance avec un actif plus fort, un jour sur deux, pour donner à la peau le temps de récupérer entre deux applications.",
      },
    ],
  },
  {
    slug: "bioderma-sebium-serum-30ml",
    identite: [
      "Sébium Sérum est le soin correcteur de la gamme Sébium, pensé pour les imperfections installées et les marques qu'elles laissent, plutôt que pour la prévention au quotidien. Sa texture de sérum, non grasse et non comédogène, pénètre rapidement sans laisser de film sur une peau déjà sujette à la brillance.",
      "Il cible la régulation du sébum et l'aspect des pores dilatés, avec une formule conçue pour ne pas déséquilibrer davantage une peau à imperfections. Il s'inscrit dans une routine complète Sébium plutôt qu'en soin isolé, en complément d'un nettoyant et d'une crème hydratante de la même gamme.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Sébium (anti-imperfections)" },
      { libelle: "Texture", valeur: "Sérum non comédogène" },
      { libelle: "Action visée", valeur: "Régulation du sébum, aspect des pores" },
      { libelle: "Format", valeur: "Soin ciblé 30 ml" },
    ],
    usage: [
      "S'applique le matin et/ou le soir sur une peau propre et sèche, avant la crème hydratante, en évitant le contour des yeux. Peut se combiner avec un nettoyant Sébium et se relayer avec Sébium Sensitive les jours où la peau devient inconfortable. Éviter de le superposer à un exfoliant acide fort le même soir.",
    ],
    positionnement: [
      "Dans le rayon des sérums anti-imperfections, Sébium Sérum se positionne comme un soin de fond plutôt qu'un traitement ponctuel de bouton isolé. Il convient moins à une peau très sèche ou à une acné sévère nécessitant un avis dermatologique, pour laquelle un traitement prescrit reste plus indiqué qu'un soin cosmétique seul.",
    ],
    faq: [
      {
        question: "Sébium Sérum et Sébium Sensitive, lequel choisir en premier ?",
        reponse:
          "Sébium Sérum s'adresse aux imperfections actives et à leur aspect, en soin de fond. Sébium Sensitive intervient plutôt en soutien, quand la peau devient inconfortable, notamment sous traitement. Les deux ne sont pas concurrents : beaucoup les alternent selon l'état de la peau au fil de la semaine.",
      },
      {
        question: "Ce sérum convient-il aux peaux mixtes ?",
        reponse:
          "Oui, sa texture légère et non grasse est pensée pour les zones sujettes aux imperfections sans alourdir le reste du visage, ce qui en fait un choix cohérent pour une peau mixte à tendance grasse localisée sur la zone T.",
      },
    ],
  },
  {
    slug: "bioderma-sensibio-ar-sos-spray-70ml",
    identite: [
      "Sensibio AR+ appartient à la ligne de Bioderma dédiée aux peaux sujettes aux rougeurs diffuses et aux bouffées de chaleur cutanées. Le format SOS spray répond à un besoin précis : une action rapide au moment où la rougeur apparaît, plutôt qu'un soin de fond appliqué matin et soir.",
      "Sa brumisation fine en fait un geste facile à répéter dans la journée, y compris par-dessus le maquillage, sans avoir à retoucher la peau avec les mains. Le format 70 ml, compact, est pensé pour accompagner au quotidien plutôt que pour rester dans la salle de bain.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Sensibio AR+ (peau sujette aux rougeurs)" },
      { libelle: "Format", valeur: "Spray SOS 70 ml" },
      { libelle: "Usage", valeur: "Application ponctuelle, sur besoin" },
      { libelle: "Compatible maquillage", valeur: "Oui" },
    ],
    usage: [
      "Se vaporise à quelques centimètres du visage, dès l'apparition d'une rougeur ou d'une sensation de chaleur, sans frotter pour laisser sécher à l'air libre. Peut s'utiliser plusieurs fois par jour, y compris par-dessus le maquillage. Il complète la routine Sensibio du matin et du soir, il ne la remplace pas.",
    ],
    positionnement: [
      "Contrairement aux crèmes apaisantes du même rayon, pensées pour un usage régulier, ce spray répond à l'urgence d'une poussée de rougeurs. Il convient moins à une peau qui cherche une hydratation de fond, pour laquelle une crème Sensibio reste plus adaptée sur la durée.",
    ],
    faq: [
      {
        question: "Ce spray peut-il s'utiliser par-dessus le maquillage ?",
        reponse:
          "Oui, c'est l'un de ses usages principaux. La brumisation fine ne fait pas couler le maquillage si elle est appliquée à distance raisonnable et laissée sécher à l'air libre, sans frotter la peau. Il peut donc rester dans un sac à main pour un geste de retouche rapide en journée.",
      },
      {
        question: "Faut-il aussi utiliser une crème Sensibio en complément ?",
        reponse:
          "Oui, le spray SOS traite l'instant de la rougeur mais ne remplace pas un soin hydratant quotidien. Une crème de la gamme Sensibio, appliquée matin et soir, reste la base pour limiter la fréquence des poussées sur la durée.",
      },
    ],
  },
  {
    slug: "bioderma-sensibio-ds-gel-moussant-200ml",
    identite: [
      "Sensibio DS+ est la ligne de Bioderma conçue pour les peaux sujettes à la dermite séborrhéique : rougeurs, squames et inconfort localisés autour des ailes du nez, des sourcils ou du cuir chevelu. Ce gel moussant en est le nettoyant, formulé sans savon pour ne pas agresser une peau déjà fragilisée.",
      "Sa mousse légère élimine l'excès de sébum et les impuretés sans dessécher, condition nécessaire pour que la peau retrouve un aspect plus net entre deux poussées. Le format 200 ml en fait un nettoyant du quotidien, utilisable sur le visage.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Sensibio DS+ (dermite séborrhéique)" },
      { libelle: "Texture", valeur: "Gel moussant sans savon" },
      { libelle: "Zone", valeur: "Visage (ailes du nez, sourcils)" },
      { libelle: "Format", valeur: "200 ml" },
    ],
    usage: [
      "S'utilise comme un nettoyant classique, matin et/ou soir, sur peau humide, en massant délicatement puis en rinçant à l'eau tiède. Il précède l'application d'une crème apaisante de la même gamme. Éviter l'eau trop chaude, qui accentue les rougeurs, et les gants ou éponges abrasifs sur ces zones déjà sensibilisées.",
    ],
    positionnement: [
      "À la différence d'un gel nettoyant classique pour peau à imperfections, celui-ci vise spécifiquement l'inconfort lié à la dermite séborrhéique et non l'acné. Il convient moins à une peau simplement grasse sans rougeurs ni squames, pour laquelle un nettoyant Sébium sera plus adapté.",
    ],
    faq: [
      {
        question: "Ce gel convient-il aussi au cuir chevelu ?",
        reponse:
          "Ce format visage n'est pas conçu pour le cuir chevelu, qui relève d'un shampooing dédié à la dermite séborrhéique. Il cible les zones du visage sujettes aux rougeurs et aux squames, ailes du nez et sourcils notamment.",
      },
      {
        question: "Peut-on l'utiliser tous les jours sans dessécher la peau ?",
        reponse:
          "Oui, sa formule sans savon est conçue pour un usage quotidien sans accentuer la sécheresse, contrairement à un nettoyant moussant classique. Elle respecte le film hydrolipidique tout en éliminant l'excès de sébum propre aux zones concernées.",
      },
    ],
  },
  {
    slug: "biolila-creme-de-nuit-50ml",
    identite: [
      "Biolila Crème de Nuit se présente comme un soin hydratant pour le visage, à appliquer le soir, dans un format pot de 50 ml. La marque reste peu documentée et sa fiche technique ne détaille pas de complexe actif particulier : impossible d'affirmer ici une composition précise ou une action ciblée au-delà de l'hydratation nocturne annoncée par son nom.",
      "Elle s'adresse à qui cherche un soin de nuit simple, sans prétention active affichée, plutôt qu'à une routine ciblée contre un problème de peau précis.",
    ],
    faits: [
      { libelle: "Moment d'application", valeur: "Soir" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Format", valeur: "Pot 50 ml" },
      { libelle: "Gamme", valeur: "Soin de nuit hydratant" },
    ],
    usage: [
      "S'applique le soir sur une peau nettoyée, en petite quantité, en massant jusqu'à absorption complète. Comme pour toute crème de nuit sans indication d'actif spécifique, il est préférable de faire un test sur une petite zone avant une première application complète, en particulier sur une peau sensible ou réactive.",
    ],
    positionnement: [
      "Dans un rayon où la plupart des crèmes hydratantes affichent un actif ou une gamme de marque reconnue, Biolila se positionne comme un soin de base sans revendication particulière. Elle convient moins à qui cherche un résultat ciblé, anti-âge ou anti-taches par exemple, pour lequel une gamme aux actifs identifiés sera plus indiquée.",
    ],
    faq: [
      {
        question: "Que contient cette crème de nuit ?",
        reponse:
          "La fiche produit ne détaille pas de composition précise ni d'actif spécifique. Il s'agit d'un soin hydratant de nuit générique, sans revendication ciblée affichée par la marque au-delà de l'hydratation du visage pendant le sommeil.",
      },
      {
        question: "Convient-elle à tous les types de peau ?",
        reponse:
          "En l'absence d'indication contraire de la marque, elle se présente comme un soin de nuit généraliste. Une peau sensible ou très réactive gagnera à tester le produit sur une petite zone avant une application complète du visage.",
      },
    ],
  },
  {
    slug: "calliderm-creme-de-nuit-argan-60ml",
    identite: [
      "Calliderm Crème de Nuit Argan est un soin hydratant au nom qui annonce sa promesse : une base à l'huile d'argan, ingrédient traditionnellement utilisé au Maghreb pour nourrir et assouplir la peau. Le format pot de 60 ml correspond à un usage régulier plutôt qu'à un format découverte.",
      "La marque reste peu documentée au-delà de cette indication, sans détail public sur la concentration en argan ni sur d'éventuels actifs associés : la promesse se limite donc à un soin de nuit nourrissant, sans revendication ciblée anti-âge ou anti-taches affichée.",
    ],
    faits: [
      { libelle: "Ingrédient annoncé", valeur: "Huile d'argan" },
      { libelle: "Moment d'application", valeur: "Soir" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Format", valeur: "Pot 60 ml" },
    ],
    usage: [
      "S'applique le soir sur une peau nettoyée, en couche fine, en massant jusqu'à pénétration. Les crèmes à base d'huile d'argan ayant une texture souvent plus riche, elle convient particulièrement aux peaux sèches en recherche de confort nocturne, et moins aux peaux grasses qui pourraient la trouver trop nourrissante en usage quotidien.",
    ],
    positionnement: [
      "Face aux crèmes de nuit de marques internationales du même rayon, Calliderm mise sur un ingrédient identifiable, l'argan, plutôt que sur une liste d'actifs brevetés. Elle convient moins à qui cherche une action documentée et mesurable contre un signe de l'âge précis, pour laquelle une gamme aux actifs publiés reste plus indiquée.",
    ],
    faq: [
      {
        question: "Cette crème contient-elle uniquement de l'huile d'argan ?",
        reponse:
          "Le nom du produit met en avant l'argan mais la marque ne publie pas de liste INCI détaillée ni de pourcentage. Il s'agit vraisemblablement d'une formule associant l'argan à d'autres ingrédients hydratants classiques d'une crème de nuit.",
      },
      {
        question: "Est-elle adaptée aux peaux grasses ?",
        reponse:
          "Les formules à l'argan tendent vers des textures riches, plutôt pensées pour les peaux sèches ou normales en quête de confort la nuit. Une peau grasse pourrait la trouver trop nourrissante en usage quotidien sur l'ensemble du visage.",
      },
    ],
  },
  {
    slug: "caudalie-creme-gommante-douce-75ml",
    identite: [
      "Cette crème gommante douce de Caudalie s'inscrit dans l'héritage Vinothérapie de la marque, qui construit une grande partie de ses formules autour de la vigne et du raisin. Positionnée dans le rayon des soins mains, elle combine une action gommage, via de fines particules exfoliantes, et une action crème, hydratante, dans un seul geste.",
      "Sa texture crème plutôt qu'huile ou gel en fait un soin doux, pensé pour un usage régulier plutôt qu'un gommage occasionnel plus agressif, avec l'objectif d'affiner le grain de peau des mains sans les dessécher.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Vinothérapie Caudalie" },
      { libelle: "Type", valeur: "Crème gommante exfoliante et hydratante" },
      { libelle: "Zone", valeur: "Mains" },
      { libelle: "Format", valeur: "75 ml" },
    ],
    usage: [
      "S'applique sur mains sèches, en massant en mouvements circulaires pour activer les particules exfoliantes, puis se rince ou s'essuie selon la texture. Un usage une à deux fois par semaine suffit : en gommage quotidien, même doux, elle risque de fragiliser une peau des mains déjà exposée aux lavages fréquents.",
    ],
    positionnement: [
      "Face à un gommage corps classique, celui-ci reste concentré sur les mains, une zone souvent négligée dans la routine beauté alors qu'elle marque particulièrement les signes du temps et du lavage répété. Il convient moins à qui cherche un gommage corps complet, pour lequel un format plus grand et une texture différente seront plus adaptés.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Ce n'est pas recommandé. Même douce, une action exfoliante répétée quotidiennement peut fragiliser la peau des mains, déjà sollicitée par les lavages fréquents. Une à deux applications par semaine, suivies d'une crème hydratante les autres jours, donnent un meilleur résultat sur la durée.",
      },
      {
        question: "Remplace-t-elle une crème mains hydratante au quotidien ?",
        reponse:
          "Non, elle a une fonction d'exfoliation ponctuelle et non d'hydratation quotidienne. Une crème mains classique reste nécessaire les jours où ce soin gommant n'est pas utilisé, pour maintenir le confort de la peau entre deux gommages.",
      },
    ],
  },
  {
    slug: "caudalie-masque-instant-detox-75ml",
    identite: [
      "Le Masque Instant Détox de Caudalie est un masque à l'argile, pensé pour redonner de l'éclat à un teint terni par la fatigue ou l'exposition quotidienne à la pollution urbaine. Il associe des argiles purifiantes à des polyphénols de raisin, la signature antioxydante de la marque, dans une texture qui se raffermit légèrement en séchant sur la peau.",
      "Il s'utilise en soin ponctuel plutôt qu'au quotidien, dans une logique de coup d'éclat avant un événement ou en relais d'une routine chargée, sur une peau qui a besoin d'un geste purifiant supplémentaire.",
    ],
    faits: [
      { libelle: "Type", valeur: "Masque à l'argile purifiant" },
      { libelle: "Actif signature", valeur: "Polyphénols de raisin (antioxydant)" },
      { libelle: "Fréquence conseillée", valeur: "1 à 2 fois par semaine" },
      { libelle: "Format", valeur: "Tube 75 ml" },
    ],
    usage: [
      "S'applique en couche fine sur le visage nettoyé, en évitant le contour des yeux, et se laisse poser cinq à dix minutes avant de rincer à l'eau tiède. Une à deux applications par semaine suffisent, davantage exposerait la peau à un risque de tiraillement, surtout sur les zones déjà sèches.",
    ],
    positionnement: [
      "Dans le rayon des masques anti-imperfections, celui-ci se distingue par sa promesse d'éclat immédiat plutôt que de traitement de fond contre les boutons. Il convient moins à une acné active et inflammatoire, pour laquelle un soin correcteur ciblé, appliqué au quotidien, reste plus indiqué qu'un masque hebdomadaire.",
    ],
    faq: [
      {
        question: "Ce masque traite-t-il l'acné ?",
        reponse:
          "Non, sa vocation est de purifier et de redonner de l'éclat ponctuellement, pas de traiter une acné installée. Pour les imperfections actives, un soin quotidien ciblé du rayon anti-imperfections reste plus adapté que ce masque hebdomadaire.",
      },
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "Une à deux fois par semaine suffit pour bénéficier de son action purifiante sans risquer d'assécher la peau. Il se glisse facilement avant un événement, en geste de préparation, ou simplement en relais d'une semaine chargée.",
      },
    ],
  },
  {
    slug: "caudalie-resveratrol-lift-serum-liftant-fermete-recharge-30ml",
    identite: [
      "Ce sérum liftant fait partie de la gamme Resvératrol Lift de Caudalie, dédiée à la fermeté des peaux matures. Il s'agit ici d'une recharge, conçue pour être reversée dans le contenant rechargeable de la gamme plutôt que vendue avec son propre flacon, dans une démarche visant moins d'emballages jetés.",
      "Sa formule s'appuie sur le resvératrol, antioxydant extrait du raisin, associé à de l'acide hyaluronique, pour répondre au relâchement cutané et à la perte de fermeté qui accompagnent le vieillissement, en particulier autour de la période de la ménopause, cible marketing assumée par Caudalie pour cette gamme.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Resvératrol Lift (fermeté, peau mature)" },
      { libelle: "Actif clé", valeur: "Resvératrol et acide hyaluronique" },
      { libelle: "Format", valeur: "Recharge 30 ml" },
      { libelle: "Cible", valeur: "Perte de fermeté, relâchement cutané" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, avant la crème de la même gamme, en quelques gouttes réparties du bas du visage vers le haut. Pensé pour un usage prolongé : les effets sur la fermeté se construisent avec la régularité d'application plutôt qu'en quelques jours.",
    ],
    positionnement: [
      "Dans le rayon des sérums anti-âge, celui-ci cible spécifiquement la fermeté et le relâchement plutôt que les rides fines ou les taches, qui relèvent d'autres gammes Caudalie comme Vinoperfect. Il convient moins à une peau jeune sans perte de fermeté visible, pour laquelle un sérum hydratant simple suffit amplement.",
    ],
    faq: [
      {
        question: "Ce format recharge fonctionne-t-il avec n'importe quel flacon Caudalie ?",
        reponse:
          "Non, il est conçu pour être reversé dans le flacon rechargeable spécifique de la gamme Resvératrol Lift, vendu séparément la première fois. Ce n'est pas un format autonome destiné à un usage sans ce contenant.",
      },
      {
        question: "À partir de quel âge ce sérum est-il pertinent ?",
        reponse:
          "Caudalie positionne cette gamme sur les peaux matures confrontées à une perte de fermeté visible, une problématique qui s'accentue souvent autour de la ménopause. Il n'a pas d'intérêt particulier sur une peau jeune sans relâchement cutané.",
      },
    ],
  },
  {
    slug: "caudalie-resveratrol-lift-creme-tisane-nuit-50ml",
    identite: [
      "Cette crème de nuit complète la gamme Resvératrol Lift de Caudalie, avec une texture pensée pour accompagner le temps de régénération cutanée pendant le sommeil. Le nom Tisane de Nuit évoque une texture et une sensation d'application enveloppante plutôt qu'une composition à base de plantes infusées.",
      "Comme le reste de la gamme, elle s'appuie sur le resvératrol antioxydant issu du raisin pour cibler la fermeté et le relâchement cutané des peaux matures. Le format pot de 50 ml en fait un soin de nuit à part entière, à utiliser seul ou en complément du sérum liftant de la même ligne.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Resvératrol Lift (fermeté, peau mature)" },
      { libelle: "Moment d'application", valeur: "Soir" },
      { libelle: "Actif clé", valeur: "Resvératrol" },
      { libelle: "Format", valeur: "Pot 50 ml" },
    ],
    usage: [
      "S'applique le soir sur visage et cou nettoyés, en dernière étape de la routine, éventuellement après le sérum liftant de la même gamme pour une action renforcée. Sa texture plus riche que celle d'une crème de jour la réserve à un usage nocturne, moins adaptée sous le maquillage en journée.",
    ],
    positionnement: [
      "Face à une crème de jour classique, celle-ci mise sur une texture plus enveloppante, cohérente avec un usage nocturne exclusif. Elle convient moins à qui cherche un soin unique jour et nuit, pour lequel une crème polyvalente de la gamme sera plus pratique au quotidien.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser aussi le matin ?",
        reponse:
          "Sa texture riche est pensée pour la nuit et peut laisser un fini moins compatible avec le maquillage en journée. Pour le matin, Caudalie propose des textures plus légères de la même gamme, davantage adaptées à un usage sous soin solaire ou maquillage.",
      },
      {
        question: "Faut-il l'associer au sérum liftant de la gamme ?",
        reponse:
          "Ce n'est pas obligatoire mais les deux produits sont conçus pour se compléter : le sérum en couche fine avant, la crème en dernière étape pour envelopper la peau la nuit. Utilisée seule, la crème reste un soin de nuit complet.",
      },
    ],
  },
  {
    slug: "caudalie-resveratrol-lift-fluide-cachemire-redensifiant-40ml",
    identite: [
      "Le Fluide Cachemire Redensifiant complète la gamme Resvératrol Lift avec une texture différente du sérum et de la crème de nuit : plus légère, à mi-chemin entre le fluide et la crème, évoquant par son nom le confort d'une matière cachemire. Il cible la redensification de la peau, c'est-à-dire la perte de volume et de tenue qui accompagne le vieillissement cutané chez les peaux matures.",
      "Sa texture plus fluide que la crème de nuit de la gamme le rend adapté à un usage en journée, y compris sous le maquillage, pour qui préfère éviter les textures riches classiques des soins anti-âge.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Resvératrol Lift (fermeté, redensification)" },
      { libelle: "Texture", valeur: "Fluide, plus légère que la crème" },
      { libelle: "Moment d'application", valeur: "Jour, compatible maquillage" },
      { libelle: "Format", valeur: "40 ml" },
    ],
    usage: [
      "S'applique le matin sur visage et cou nettoyés, seul ou avant le soin solaire et le maquillage, sa texture fluide pénétrant plus vite qu'une crème riche. Il peut se combiner avec le sérum liftant de la même gamme le matin, en le laissant pénétrer quelques instants avant d'appliquer le fluide.",
    ],
    positionnement: [
      "Dans la gamme Resvératrol Lift, ce fluide occupe la place du soin de jour, plus léger que la crème tisane de nuit. Il convient moins à une peau très sèche en hiver, qui pourra lui préférer la texture plus riche de la crème de nuit y compris en journée selon les besoins.",
    ],
    faq: [
      {
        question: "Quelle différence avec la crème tisane de nuit de la même gamme ?",
        reponse:
          "La texture est la principale différence : ce fluide est plus léger, pensé pour le jour et compatible avec le maquillage, quand la crème tisane de nuit offre une texture plus riche réservée au soir.",
      },
      {
        question: "Peut-on l'appliquer sous un soin solaire ?",
        reponse:
          "Oui, sa texture fluide et sa vocation de soin de jour en font une bonne base avant l'application d'un soin solaire, qui reste nécessaire en complément puisque ce fluide n'apporte pas de protection UV en lui-même.",
      },
    ],
  },
  {
    slug: "caudalie-vinohydra-creme-hydratation-intense-60ml",
    identite: [
      "VinoHydra est la gamme hydratante de Caudalie, construite autour de l'acide hyaluronique et du squalane, pensée pour les peaux déshydratées qui tiraillent ou manquent de confort au fil de la journée. Cette crème hydratation intense en est la version la plus concentrée, pour les besoins d'hydratation les plus marqués.",
      "Sa texture riche mais non grasse s'absorbe sans laisser de film collant, une qualité recherchée pour une utilisation fréquente, mains comprises, sur une peau qui a besoin d'un geste de confort immédiat au-delà de la seule hydratation de surface.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "VinoHydra (hydratation intense)" },
      { libelle: "Actifs clés", valeur: "Acide hyaluronique, squalane" },
      { libelle: "Cible", valeur: "Peau déshydratée" },
      { libelle: "Format", valeur: "60 ml" },
    ],
    usage: [
      "S'applique en couche généreuse sur les zones déshydratées, visage ou mains selon le besoin, en renouvelant l'application dans la journée si la sensation de tiraillement persiste. Sa texture riche mais non grasse permet une utilisation fréquente sans laisser de film collant, y compris sur des mains sollicitées par des lavages répétés.",
    ],
    positionnement: [
      "Face à une crème mains classique, plus simple, celle-ci apporte une hydratation plus intense grâce à sa concentration en acide hyaluronique et squalane. Elle convient moins à qui cherche une texture légère à absorption instantanée pour un usage sous des gants ou en continu au travail.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser aussi bien sur le visage que sur les mains ?",
        reponse:
          "Oui, sa texture hydratante intense est pensée pour toute zone déshydratée, visage compris. Beaucoup l'utilisent en soin des mains au quotidien tout en gardant un tube dans un sac pour une application en journée.",
      },
      {
        question: "Laisse-t-elle un film gras ou collant ?",
        reponse:
          "Non, malgré sa concentration en actifs hydratants, sa texture est pensée pour pénétrer sans laisser de film gras, ce qui permet de reprendre une activité manuelle rapidement après application, contrairement à certains baumes très riches du même rayon.",
      },
    ],
  },
  {
    slug: "caudalie-vinoperfect-creme-de-jour-anti-taches-niacinamide-50ml",
    identite: [
      "Vinoperfect est la gamme anti-taches de Caudalie, construite autour de la viniférine, un antioxydant extrait de la vigne réputé pour son action sur l'uniformité du teint. Cette crème de jour y associe la niacinamide, un actif éclaircissant largement documenté, dans une texture de crème quotidienne plutôt qu'un sérum concentré.",
      "Elle vise les taches pigmentaires et le teint irrégulier plutôt que les rides ou le relâchement cutané, avec l'objectif d'atténuer visuellement les marques existantes et de limiter l'apparition de nouvelles taches liées à l'exposition solaire répétée.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Vinoperfect (anti-taches, éclat)" },
      { libelle: "Actifs clés", valeur: "Viniférine, niacinamide" },
      { libelle: "Moment d'application", valeur: "Jour" },
      { libelle: "Format", valeur: "50 ml" },
    ],
    usage: [
      "S'applique le matin sur visage nettoyé, seule ou après le sérum Vinoperfect pour une action renforcée. Comme tout soin anti-taches, elle s'accompagne idéalement d'une protection solaire quotidienne appliquée par-dessus, sans laquelle l'exposition aux UV peut entretenir les taches qu'elle cherche à atténuer.",
    ],
    positionnement: [
      "Face au sérum Vinoperfect, plus concentré, cette crème de jour s'adresse à une routine anti-taches plus simple, en un seul geste. Elle convient moins à des taches marquées et anciennes, pour lesquelles l'association avec le sérum concentré de la même gamme donne des résultats plus visibles sur la durée.",
    ],
    faq: [
      {
        question: "Cette crème contient-elle une protection solaire ?",
        reponse:
          "Non, elle ne remplace pas un soin solaire. Un actif anti-taches comme la viniférine ou la niacinamide reste plus efficace lorsqu'il est associé à une protection UV quotidienne appliquée séparément, sans quoi l'exposition solaire peut entretenir les taches ciblées.",
      },
      {
        question: "Faut-il l'associer au sérum Vinoperfect ?",
        reponse:
          "Ce n'est pas obligatoire mais les deux se complètent : le sérum apporte une concentration plus forte en viniférine, la crème hydrate et referme la routine du matin. Utilisée seule, la crème reste un soin anti-taches cohérent au quotidien.",
      },
    ],
  },
  {
    slug: "caudalie-vinopure-serum-salicylique-30ml",
    identite: [
      "Vinopure est la gamme de Caudalie dédiée aux peaux à imperfections et aux pores dilatés. Ce sérum en est le soin phare, formulé autour de l'acide salicylique, un BHA reconnu pour son action à l'intérieur du pore, associé aux polyphénols de raisin qui signent les formules de la marque.",
      "Sa texture de sérum léger, non grasse, convient aux peaux mixtes à grasses en quête d'un teint plus net, sans cibler les rides ni le relâchement cutané, problématiques traitées par d'autres gammes de la marque.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Vinopure (imperfections, pores)" },
      { libelle: "Actif clé", valeur: "Acide salicylique (BHA)" },
      { libelle: "Texture", valeur: "Sérum léger non gras" },
      { libelle: "Format", valeur: "30 ml" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée, avant la crème hydratante, en évitant le contour des yeux. L'acide salicylique pouvant sensibiliser la peau au soleil, une protection solaire quotidienne est recommandée en journée pendant son utilisation. Éviter de le superposer le même soir à un autre exfoliant acide.",
    ],
    positionnement: [
      "Dans le rayon des sérums anti-imperfections, celui-ci se distingue par son BHA, plus efficace sur les pores obstrués que les actifs hydratants seuls. Il convient moins à une peau sèche ou sensible non sujette aux imperfections, pour laquelle l'acide salicylique peut se révéler asséchant sans bénéfice particulier.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les soirs ?",
        reponse:
          "Beaucoup de peaux le tolèrent en usage quotidien, mais il est prudent de commencer par une application un soir sur deux, le temps d'évaluer la tolérance de sa peau à l'acide salicylique, puis d'augmenter la fréquence si aucune sensibilité n'apparaît.",
      },
      {
        question: "Peut-il se combiner avec un rétinol ?",
        reponse:
          "L'association est possible mais demande de la prudence : les deux actifs peuvent être irritants combinés le même soir. Il est plus prudent de les alterner, un soir chacun, plutôt que de les superposer, surtout en début d'utilisation.",
      },
    ],
  },
  {
    slug: "celimax-derma-nature-fresh-blackhead-jojoba-cleansing-oil-150ml",
    identite: [
      "Celimax est une marque coréenne, et cette huile de nettoyage au jojoba s'inscrit dans la logique du double nettoyage propre à la routine de soin coréenne : une première étape à base d'huile pour dissoudre le sébum, les résidus de maquillage et les filtres solaires, avant un nettoyant moussant classique en seconde étape.",
      "L'huile de jojoba, proche par sa structure du sébum humain, est réputée pour nettoyer en profondeur sans agresser le film hydrolipidique, avec un intérêt particulier annoncé sur les points noirs, comme l'indique le nom du produit. Le grand format 150 ml correspond à un usage quotidien sur la durée.",
    ],
    faits: [
      { libelle: "Origine", valeur: "Marque coréenne (K-beauty)" },
      { libelle: "Étape de routine", valeur: "Premier nettoyage (double nettoyage)" },
      { libelle: "Ingrédient clé", valeur: "Huile de jojoba" },
      { libelle: "Format", valeur: "150 ml" },
    ],
    usage: [
      "S'applique sur peau sèche, en massant sur l'ensemble du visage pour dissoudre maquillage et sébum, puis s'émulsionne avec un peu d'eau avant de rincer. Il précède systématiquement un second nettoyant moussant, l'huile seule ne suffisant pas à retirer tous les résidus dans la logique du double nettoyage coréen.",
    ],
    positionnement: [
      "Face à un démaquillant classique, cette huile de nettoyage s'inscrit dans une routine en plusieurs étapes plutôt qu'un geste unique. Elle convient moins à qui cherche un nettoyage rapide en un seul produit, pour lequel un gel nettoyant moussant seul reste plus simple au quotidien.",
    ],
    faq: [
      {
        question: "Faut-il un second nettoyant après cette huile ?",
        reponse:
          "Oui, dans la logique du double nettoyage coréen, cette huile constitue la première étape, qui dissout le maquillage et le sébum. Un nettoyant moussant en seconde étape retire les résidus restants et laisse la peau prête pour le reste de la routine.",
      },
      {
        question: "Cette huile convient-elle aux peaux grasses ?",
        reponse:
          "Oui, contrairement à une idée reçue, une huile de nettoyage ne graisse pas la peau : elle dissout le sébum en excès avant rinçage. L'huile de jojoba, proche du sébum naturel, est en général bien tolérée par les peaux grasses à imperfections.",
      },
    ],
  },
  {
    slug: "celimax-pore-dark-spot-brightening-cream-35ml",
    identite: [
      "Cette crème Celimax cible deux préoccupations à la fois, comme l'indique son nom : l'aspect des pores dilatés et les taches pigmentaires, avec une visée éclaircissante. Elle s'inscrit dans une approche typique de la cosmétique coréenne, qui combine volontiers plusieurs bénéfices dans une même texture plutôt que de dédier un soin par problématique.",
      "Sa texture de crème légère, au format 35 ml proche d'un soin ciblé, la positionne comme un soin du quotidien plutôt qu'un traitement ponctuel, à intégrer dans une routine déjà construite autour d'un nettoyage et d'une protection solaire.",
    ],
    faits: [
      { libelle: "Origine", valeur: "Marque coréenne (K-beauty)" },
      { libelle: "Cible", valeur: "Pores dilatés, taches pigmentaires" },
      { libelle: "Texture", valeur: "Crème légère" },
      { libelle: "Format", valeur: "35 ml" },
    ],
    usage: [
      "S'applique le matin et/ou le soir sur peau nettoyée, en fine couche sur l'ensemble du visage ou en ciblant les zones marquées par des taches. Comme pour tout soin à visée éclaircissante, une protection solaire quotidienne en journée reste nécessaire pour ne pas entretenir les taches qu'elle cherche à atténuer.",
    ],
    positionnement: [
      "Face à un sérum anti-taches concentré, cette crème reste un soin plus généraliste, à double action pores et taches plutôt qu'une concentration forte sur un seul actif. Elle convient moins à des taches anciennes et marquées, pour lesquelles un sérum plus concentré donnera des résultats plus visibles.",
    ],
    faq: [
      {
        question: "Peut-elle remplacer une protection solaire ?",
        reponse:
          "Non, elle n'a pas de fonction de protection UV. Un soin visant l'aspect des taches pigmentaires nécessite au contraire une protection solaire quotidienne appliquée en complément, sans quoi l'exposition au soleil peut entretenir les marques qu'elle cherche à atténuer.",
      },
      {
        question: "Resserre-t-elle réellement les pores ?",
        reponse:
          "Aucun soin cosmétique ne réduit la taille physique des pores, déterminée par la structure de la peau. Cette crème peut en revanche améliorer visuellement leur aspect en affinant le grain de peau, sans modifier leur taille réelle.",
      },
    ],
  },
  {
    slug: "celimax-retinol-shot-tightening-serum-30ml",
    identite: [
      "Ce sérum Celimax s'appuie sur le rétinol, un dérivé de la vitamine A parmi les actifs anti-âge les plus documentés, ici dans une formulation présentée comme concentrée, comme l'indique le mot shot dans son nom. Il vise le raffermissement de la peau et l'aspect du grain de peau, plutôt que l'hydratation pure.",
      "Le rétinol pouvant irriter une peau non habituée, ce type de sérum s'introduit progressivement dans une routine, et non comme un premier soin actif pour qui découvre cette famille d'ingrédients.",
    ],
    faits: [
      { libelle: "Actif clé", valeur: "Rétinol" },
      { libelle: "Action visée", valeur: "Fermeté, aspect du grain de peau" },
      { libelle: "Origine", valeur: "Marque coréenne (K-beauty)" },
      { libelle: "Format", valeur: "30 ml" },
    ],
    usage: [
      "S'applique le soir uniquement, sur peau nettoyée et sèche, en commençant par une à deux fois par semaine avant d'augmenter progressivement la fréquence selon la tolérance de la peau. Une protection solaire quotidienne est indispensable en journée pendant son utilisation, le rétinol rendant la peau plus sensible au soleil.",
    ],
    positionnement: [
      "Face à une crème anti-âge classique, ce sérum au rétinol vise une action plus marquée sur la fermeté, au prix d'une tolérance à construire progressivement. Il convient moins à une peau sensible ou à un premier soin anti-âge, pour lesquels un actif plus doux, comme le bakuchiol, sera plus confortable en initiation.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser dès la première application sur tout le visage ?",
        reponse:
          "Il est préférable de commencer par une à deux applications par semaine et d'observer la réaction de la peau avant d'augmenter la fréquence. Le rétinol peut provoquer des rougeurs ou une desquamation en début d'utilisation chez une peau non habituée.",
      },
      {
        question: "Peut-il se combiner avec un acide exfoliant ?",
        reponse:
          "Ce n'est pas conseillé le même soir : l'association de deux actifs puissants augmente le risque d'irritation. Mieux vaut les alterner sur des soirs différents, surtout tant que la peau n'est pas habituée au rétinol.",
      },
    ],
  },
  {
    slug: "cetaphil-bright-healthy-radiance-brightening-lotion-245ml",
    identite: [
      "Cette lotion appartient à la ligne Bright Healthy Radiance de Cetaphil, une extension plus récente de la marque au-delà de son soin nettoyant historique, orientée vers l'uniformité du teint et l'éclat. Sa texture de lotion, plus fluide qu'une crème, et son grand format de 245 ml suggèrent un usage sur une large surface, visage et éventuellement décolleté.",
      "Comme le reste des soins Cetaphil, elle reste formulée dans un esprit dermo-cosmétique, pensé pour limiter le risque d'irritation, un point important pour un soin à visée éclaircissante souvent plus sensibilisant que des soins hydratants classiques.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Bright Healthy Radiance (éclat, uniformité du teint)" },
      { libelle: "Texture", valeur: "Lotion fluide" },
      { libelle: "Format", valeur: "Grand format 245 ml" },
      { libelle: "Approche", valeur: "Formule dermo-cosmétique" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, sur le visage et éventuellement le cou et le décolleté selon le grand format proposé. Une protection solaire quotidienne en journée reste recommandée en complément de tout soin visant l'uniformité du teint, pour ne pas entretenir les marques qu'il cherche à atténuer.",
    ],
    positionnement: [
      "Face à un sérum anti-taches concentré, cette lotion reste un soin plus généraliste et une texture plus légère, pensée pour un usage étendu au-delà du seul visage. Elle convient moins à des taches marquées et anciennes, pour lesquelles un actif plus ciblé et concentré donnera des résultats plus visibles.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser aussi sur le corps ?",
        reponse:
          "Son grand format et sa texture fluide s'y prêtent, notamment sur le décolleté et les mains, des zones souvent exposées au soleil et sujettes aux taches. Elle reste toutefois pensée avant tout comme un soin visage dans la gamme Cetaphil.",
      },
      {
        question: "Faut-il une protection solaire en complément ?",
        reponse:
          "Oui, comme pour tout soin visant l'éclat et l'uniformité du teint, une protection solaire quotidienne reste nécessaire en journée. Sans elle, l'exposition aux UV peut entretenir les marques que cette lotion cherche à atténuer visuellement.",
      },
    ],
  },
  {
    slug: "cetaphil-creme-hydratante-100g",
    identite: [
      "La Crème Hydratante Cetaphil est l'un des soins les plus recommandés en dermatologie pour les peaux sèches à très sèches, y compris les peaux sensibles ou sujettes à l'eczéma. Sa réputation tient à une formule volontairement simple, sans parfum, conçue pour limiter le risque d'irritation plutôt que pour multiplier les actifs.",
      "Sa texture riche mais non grasse convient au visage comme au corps, chez l'adulte comme chez l'enfant selon les recommandations qui accompagnent souvent ce type de soin. Le format 100 g correspond à un usage ciblé ou à un format de découverte, plus petit que le pot familial de la même référence.",
    ],
    faits: [
      { libelle: "Réputation", valeur: "Recommandée en dermatologie" },
      { libelle: "Formule", valeur: "Sans parfum" },
      { libelle: "Zone", valeur: "Visage et corps" },
      { libelle: "Format", valeur: "Pot 100 g" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau propre, visage ou corps, aussi souvent que nécessaire selon le niveau de sécheresse. Sa texture riche mais non grasse permet une application fréquente sans effet collant, y compris sur les zones très sèches comme les coudes ou les mains sollicitées par les lavages répétés.",
    ],
    positionnement: [
      "Face à une crème hydratante parfumée classique, celle-ci mise sur la simplicité de sa formule pour les peaux les plus réactives. Elle convient moins à qui cherche une texture légère à absorption rapide pour un usage sous maquillage, pour laquelle une texture plus fluide sera plus confortable en journée.",
    ],
    faq: [
      {
        question: "Convient-elle aux peaux à eczéma ?",
        reponse:
          "Sa formule sans parfum et volontairement simple en fait un soin souvent cité en dermatologie pour accompagner les peaux sèches et réactives, eczéma compris. Elle ne remplace toutefois pas un traitement prescrit en cas de poussée active, pour laquelle un avis médical reste nécessaire.",
      },
      {
        question: "Peut-on l'utiliser sur le visage et le corps ?",
        reponse:
          "Oui, sa texture riche mais non grasse est conçue pour les deux usages, ce qui en fait un format pratique de salle de bain plutôt qu'un soin réservé à une seule zone, du visage aux mains en passant par les coudes.",
      },
    ],
  },
  {
    slug: "cetaphil-creme-hydratante-450g",
    identite: [
      "Cette Crème Hydratante Cetaphil est la même formule que la référence plus petite de la marque, ici dans un grand format de 450 g, pensé pour un usage régulier sur l'ensemble du corps sans craindre de manquer de produit. Sa formule reste inchangée : simple, sans parfum, conçue pour les peaux sèches à très sèches, y compris sensibles ou sujettes à l'eczéma.",
      "Ce format pot correspond à une utilisation installée dans la durée plutôt qu'à un essai ponctuel, pour qui a déjà adopté cette crème dans sa routine et l'utilise sur de grandes surfaces du corps.",
    ],
    faits: [
      { libelle: "Réputation", valeur: "Recommandée en dermatologie" },
      { libelle: "Formule", valeur: "Sans parfum, identique à la référence 100 g" },
      { libelle: "Zone", valeur: "Visage et corps" },
      { libelle: "Format", valeur: "Grand pot 450 g" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau propre, visage et corps, aussi souvent que nécessaire. Le grand format facilite une application libérale sans compter, utile pour couvrir de grandes surfaces du corps chez l'adulte comme chez l'enfant, notamment en période de sécheresse cutanée marquée, l'hiver par exemple.",
    ],
    positionnement: [
      "Face au format plus petit de la même crème, celui-ci s'adresse à un usage installé dans la durée plutôt qu'à une première découverte du produit. Il convient moins à qui souhaite simplement tester la formule avant de s'engager sur un grand format, pour lequel la référence plus petite reste plus adaptée en premier achat.",
    ],
    faq: [
      {
        question: "Quelle différence avec le format 100 g de la même crème ?",
        reponse:
          "Aucune différence de formule : seule la quantité change. Le grand format 450 g convient à un usage régulier sur de grandes surfaces du corps, quand le format 100 g reste plus adapté à un usage ciblé ou à une première découverte.",
      },
      {
        question: "Ce grand format se conserve-t-il aussi bien qu'un petit tube ?",
        reponse:
          "Sa formule sans parfum et sa texture en pot restent stables dans le temps comme pour le format plus petit. Comme pour toute crème en pot, il est conseillé de refermer soigneusement après chaque usage pour limiter le contact avec l'air.",
      },
    ],
  },
];
