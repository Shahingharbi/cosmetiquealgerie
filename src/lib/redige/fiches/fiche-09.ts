import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "chaline-acide-hyaluronique-serum-visage-30ml",
    identite: [
      "Ce sérum Chaline réunit un seul actif, l'acide hyaluronique, dans un flacon compte-gouttes de 30 ml pensé pour une hydratation ciblée plutôt qu'un soin complet. La texture est fluide et légère, sans huile ni parfum ajouté, elle pénètre en quelques secondes et laisse la peau prête à recevoir la crème qui suit.",
      "L'acide hyaluronique agit comme une éponge moléculaire : il capte l'eau dans les couches superficielles de l'épiderme et en repulpe visuellement le grain, ce qui atténue l'aspect de tiraillement sans modifier la texture de la peau. Ce format mono-actif s'adresse à qui veut ajouter une couche d'hydratation précise à sa routine, sans repartir sur une crème entièrement nouvelle.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide hyaluronique" },
      { libelle: "Galénique", valeur: "Sérum aqueux en flacon compte-gouttes" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Type de peau", valeur: "Tous types, y compris peau déshydratée" },
    ],
    usage: [
      "S'applique matin et soir sur peau nettoyée et encore légèrement humide, avant la crème hydratante : quelques gouttes suffisent, réparties du front au menton puis lissées vers l'extérieur sans frotter. Il se superpose sans difficulté à un sérum niacinamide ou vitamine C de la même gamme, en respectant l'ordre du plus fluide au plus riche. Laisser sécher une minute avant l'étape suivante évite de diluer les actifs qui suivent.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes classiques, ce sérum apporte une couche d'eau supplémentaire sans alourdir la routine ni laisser de film. Il convient bien aux peaux qui tirent en fin de journée ou après un nettoyage un peu asséchant. Il ne remplace pas une crème : seul, il n'apporte pas de corps gras protecteur, donc les peaux très sèches en climat sec devront le coupler à un soin occlusif pour éviter que l'eau captée ne s'évapore.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce sérum sans crème hydratante ensuite ?",
        reponse:
          "Ce n'est pas l'usage recommandé. L'acide hyaluronique attire l'eau vers la surface de la peau, mais si l'air ambiant est sec et qu'aucune crème ne vient sceller cette hydratation, l'effet peut s'inverser et assécher davantage. Il est conçu pour être suivi d'une crème, pas utilisé seul.",
      },
      {
        question: "Peut-il se combiner avec les sérums niacinamide et vitamine C de la même marque ?",
        reponse:
          "Oui, c'est un usage courant. L'ordre conseillé va du plus fluide au plus riche : acide hyaluronique en premier pour hydrater, puis niacinamide ou vitamine C. Appliquer les trois en même temps sur une peau réactive n'est pas recommandé ; mieux vaut alterner matin et soir selon la tolérance.",
      },
    ],
  },
  {
    slug: "chaline-niacinamide-serum-visage-30ml",
    identite: [
      "Ce sérum Chaline concentre sa formule sur la niacinamide, aussi appelée vitamine B3, dans un flacon de 30 ml au compte-gouttes. La texture est fluide, sans parfum marqué, et s'absorbe rapidement sans laisser de sensation collante.",
      "La niacinamide est reconnue pour aider à réguler l'aspect brillant des peaux à tendance grasse, resserrer visuellement l'apparence des pores et uniformiser le teint sur la durée. Positionné en mono-actif plutôt qu'en crème complète, ce sérum s'adresse à une utilisation ciblée, en complément d'une routine de nettoyage et d'hydratation déjà en place, plutôt qu'en remplacement de celle-ci.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide (vitamine B3)" },
      { libelle: "Galénique", valeur: "Sérum aqueux en flacon compte-gouttes" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Type de peau", valeur: "Peau mixte à grasse, teint irrégulier" },
    ],
    usage: [
      "S'utilise le matin ou le soir sur peau propre, quelques gouttes réparties sur l'ensemble du visage puis lissées sans frotter, avant la crème de jour ou de nuit. Les premiers effets sur l'aspect du grain de peau s'observent généralement après plusieurs semaines d'usage régulier, pas dès la première application. Éviter de le superposer à un exfoliant acide fort le même soir, le temps que la peau s'habitue.",
    ],
    positionnement: [
      "Dans le rayon des sérums ciblés, celui-ci se distingue par sa concentration unique en niacinamide plutôt qu'une formule multi-actifs. Il convient bien aux peaux qui cherchent à atténuer l'aspect luisant en journée et l'apparence des pores dilatés. Les peaux très sèches ou sensibles au point de réagir aux actifs isolés concentrés devraient l'introduire progressivement, une application tous les deux jours au départ.",
    ],
    faq: [
      {
        question: "La niacinamide peut-elle irriter la peau ?",
        reponse:
          "Dans de rares cas, une sensation de picotement passager peut apparaître en début d'usage, surtout sur peau déjà fragilisée. Introduire le produit progressivement, une fois tous les deux jours la première semaine, permet généralement d'éviter cette réaction et de vérifier la tolérance avant un usage quotidien.",
      },
      {
        question: "Faut-il l'appliquer avant ou après le sérum acide hyaluronique de la même gamme ?",
        reponse:
          "L'acide hyaluronique, plus fluide, s'applique généralement en premier pour hydrater la peau, suivi de la niacinamide qui agit ensuite sur l'aspect du grain et du teint. Cet ordre n'est pas absolu, mais il correspond à la logique du plus léger au plus actif recommandée pour ce type de routine.",
      },
    ],
  },
  {
    slug: "chaline-vitamine-c-serum-visage-30ml",
    identite: [
      "Ce sérum Chaline mise sur la vitamine C comme actif unique, en flacon compte-gouttes de 30 ml. Sa texture fluide et légèrement teintée est caractéristique des formules à base de cet actif, sensible à la lumière et à l'air, ce qui explique le flacon opaque et le bouchon à bien refermer après chaque usage.",
      "La vitamine C est recherchée pour son rôle antioxydant et pour aider à uniformiser l'aspect du teint terne ou marqué par des taches pigmentaires. Comme tout sérum à la vitamine C, sa couleur peut évoluer légèrement une fois le flacon entamé, sans que cela signifie systématiquement une perte d'efficacité si la conservation a été correcte.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Vitamine C" },
      { libelle: "Galénique", valeur: "Sérum en flacon compte-gouttes opaque" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Usage", valeur: "Routine du matin, avant protection solaire" },
    ],
    usage: [
      "S'applique de préférence le matin, sur peau nettoyée, avant la crème de jour et impérativement avant une protection solaire puisque la vitamine C rend la peau plus réactive à l'exposition. Quelques gouttes suffisent pour tout le visage. Conserver le flacon à l'abri de la lumière et refermer soigneusement après chaque usage limite l'oxydation de l'actif et prolonge sa stabilité dans le temps.",
    ],
    positionnement: [
      "Face aux sérums hydratants ou apaisants du même rayon, celui-ci se positionne sur l'éclat et l'uniformité du teint plutôt que sur l'hydratation pure. Il convient aux teints ternes ou marqués par des marques pigmentaires anciennes. Les peaux très sensibles ou sujettes aux rougeurs réactives peuvent moins bien tolérer les formules concentrées en vitamine C et devraient tester le produit sur une petite zone avant une application complète du visage.",
    ],
    faq: [
      {
        question: "Pourquoi ce sérum doit-il s'utiliser le matin plutôt que le soir ?",
        reponse:
          "La vitamine C est surtout valorisée pour son action antioxydante en journée, en complément d'une protection solaire, car elle aide à limiter l'impact des agressions extérieures sur la peau. Rien n'empêche une application le soir, mais l'usage matinal reste le plus courant pour ce type d'actif.",
      },
      {
        question: "Le sérum a changé de couleur, est-il encore utilisable ?",
        reponse:
          "Un léger jaunissement au fil des semaines est un phénomène normal d'oxydation pour un sérum à la vitamine C non stabilisée chimiquement. Un changement de couleur marqué accompagné d'une odeur inhabituelle est en revanche un signe qu'il vaut mieux ne plus l'utiliser sur le visage.",
      },
    ],
  },
  {
    slug: "cicabiafine-baume-hydratant-anti-dessechement-400ml",
    identite: [
      "CicaBiafine décline en baume de 400 ml la texture riche et non collante qui a fait la réputation de la marque sur les peaux très sèches. Ce format pompe, pensé pour un usage quotidien sur de grandes surfaces, s'applique aussi bien sur le corps que sur les zones du visage sujettes aux tiraillements.",
      "La formule vise à limiter la déshydratation cutanée et à améliorer l'aspect de souplesse sur les peaux fragilisées, abîmées ou sujettes à l'eczéma et aux rougeurs liées à la sécheresse. Sa texture s'étale facilement sans laisser de film gras persistant, ce qui la rend compatible avec une application fréquente, y compris chez les personnes dont la peau réagit facilement.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Baume hydratant anti-dessèchement" },
      { libelle: "Galénique", valeur: "Baume en flacon pompe" },
      { libelle: "Contenance", valeur: "400 ml" },
      { libelle: "Zone", valeur: "Visage et corps, peau atopique et sujette à l'eczéma" },
    ],
    usage: [
      "S'applique en couche généreuse sur les zones sèches ou sujettes aux tiraillements, autant de fois que nécessaire dans la journée selon le niveau de sécheresse. Sur le visage, il convient d'éviter le contour des yeux. Le format pompe de 400 ml est pensé pour un usage familial ou fréquent plutôt que pour un soin ponctuel, ce qui le rend économique à l'usage sur la durée.",
    ],
    positionnement: [
      "Comparé aux crèmes hydratantes visage classiques du rayon, ce baume vise spécifiquement les peaux très sèches, atopiques ou sujettes à l'eczéma, avec une texture plus riche et un grand format pensé pour le corps autant que le visage. Il convient moins bien à une peau mixte à grasse qui recherche une texture légère au quotidien, pour laquelle une crème plus fluide sera plus confortable.",
    ],
    faq: [
      {
        question: "Ce baume peut-il s'utiliser sur le visage d'un enfant ?",
        reponse:
          "Sa formule est pensée pour les peaux sèches et atopiques, adultes comme enfants, mais en cas de doute sur une peau de nourrisson ou une zone très irritée, l'avis d'un pharmacien ou d'un dermatologue reste la meilleure indication avant un usage régulier sur le visage.",
      },
      {
        question: "Le grand format de 400 ml se justifie-t-il pour un usage uniquement facial ?",
        reponse:
          "Le format pompe convient surtout à un usage combiné visage et corps, ce qui justifie sa contenance. Pour un usage strictement facial et occasionnel, un format plus petit de la même gamme peut être plus adapté et éviter que le produit ne s'altère avant la fin du flacon.",
      },
    ],
  },
  {
    slug: "clarins-double-serum-50ml",
    identite: [
      "Le Double Serum de Clarins repose sur un principe reconnu de la marque depuis les années 1980 : deux phases distinctes, l'une aqueuse et l'autre lipidique, stockées séparément dans le flacon et mélangées au moment de la pompe pour former une émulsion fraîche à chaque utilisation.",
      "Cette formule associe des extraits végétaux à une base d'acide hyaluronique et vise les signes de l'âge en agissant sur plusieurs fonctions cutanées à la fois : hydratation, fermeté et éclat du teint. La texture, légère malgré sa richesse en actifs, s'absorbe rapidement et se glisse avant la crème de jour ou de nuit sans en modifier le confort d'application.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Sérum anti-âge biphasé" },
      { libelle: "Galénique", valeur: "Deux phases séparées, mélangées à la pompe" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Gamme", valeur: "Soin anti-âge visage Clarins" },
    ],
    usage: [
      "S'applique matin et soir sur visage et cou nettoyés, une à deux pressions de la pompe qui mélange automatiquement les deux phases. Le produit se réchauffe brièvement entre les paumes avant d'être appliqué par pressions successives, puis lissé vers l'extérieur. Il précède la crème de jour ou de nuit habituelle et peut se combiner à un soin contour des yeux sans interférence particulière.",
    ],
    positionnement: [
      "Dans le rayon des sérums anti-âge, ce produit se distingue par son mécanisme biphasé et son ancienneté dans la gamme Clarins, ce qui en fait une référence pour qui cherche un soin global plutôt qu'un actif isolé. Il convient à une peau mature qui commence à marquer des signes de relâchement. Une peau jeune sans signe de vieillissement, ou une peau très grasse en climat chaud, pourra le trouver superflu face à un sérum plus ciblé et moins riche.",
    ],
    faq: [
      {
        question: "Faut-il agiter le flacon avant chaque utilisation ?",
        reponse:
          "Non, le mécanisme de la pompe mélange lui-même les deux phases au moment où le produit sort du flacon, ce qui garantit une émulsion fraîche à chaque pression sans manipulation supplémentaire de la part de l'utilisateur. Il suffit de presser normalement, sans secouer le flacon au préalable.",
      },
      {
        question: "À partir de quel âge ce sérum est-il pertinent ?",
        reponse:
          "Il est généralement recommandé dès les premiers signes de relâchement cutané ou de perte d'éclat, souvent à partir de la trentaine selon les peaux, plutôt qu'à un âge précis. Une peau plus jeune sans ces signes peut se tourner vers un soin hydratant plus simple.",
      },
    ],
  },
  {
    slug: "clarins-huile-tres-demaquillante-150ml",
    identite: [
      "Cette huile démaquillante de Clarins se présente en flacon de 150 ml, à la texture huileuse qui se transforme en un lait légèrement laiteux au contact de l'eau. Ce principe hybride permet de dissoudre le maquillage, y compris les formules longue tenue et waterproof, tout en se rinçant sans laisser de film gras sur la peau.",
      "Elle s'utilise sur peau sèche, en massage, avant d'être émulsionnée à l'eau tiède pour un rinçage complet. Sa formule vise à retirer les impuretés du jour tout en respectant le film hydrolipidique naturel de la peau, ce qui la rend adaptée à un usage quotidien en première étape de démaquillage.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Huile démaquillante qui s'émulsionne à l'eau" },
      { libelle: "Galénique", valeur: "Huile devenant laiteuse au rinçage" },
      { libelle: "Contenance", valeur: "150 ml" },
      { libelle: "Usage", valeur: "Visage et yeux, maquillage longue tenue" },
    ],
    usage: [
      "S'applique sur peau sèche, mains sèches, en massant délicatement sur l'ensemble du visage et des yeux pour dissoudre le maquillage. Ajouter ensuite un peu d'eau tiède pour émulsionner le produit, qui devient laiteux, puis rincer abondamment. Elle constitue la première étape du double nettoyage, à faire suivre d'un nettoyant moussant ou d'une eau micellaire pour retirer les derniers résidus.",
    ],
    positionnement: [
      "Comparée à une eau micellaire ou un gel nettoyant classique du même rayon, cette huile cible surtout le maquillage résistant et waterproof, qu'elle dissout plus efficacement qu'un nettoyant aqueux. Elle convient moins à une utilisation seule sur une peau très grasse en climat chaud, qui préférera une texture moins riche en première étape, ou à qui recherche un geste rapide sans étape de massage.",
    ],
    faq: [
      {
        question: "Cette huile convient-elle aux yeux sensibles et aux lentilles de contact ?",
        reponse:
          "Elle est formulée pour retirer aussi le maquillage des yeux, mascara compris, mais il est recommandé de retirer les lentilles de contact avant application et de rincer soigneusement pour éviter tout résidu autour de la zone oculaire. En cas de gêne persistante après rinçage, il vaut mieux attendre avant de remettre les lentilles.",
      },
      {
        question: "Laisse-t-elle un film gras après le rinçage ?",
        reponse:
          "Non, c'est le principe de cette huile démaquillante : au contact de l'eau, elle s'émulsionne et devient laiteuse, ce qui permet un rinçage complet sans sensation grasse résiduelle, contrairement à une huile végétale simple qui ne se rince pas aussi facilement.",
      },
    ],
  },
  {
    slug: "clinique-happy-deodorant-spray-homme-200ml",
    identite: [
      "Ce déodorant spray de Clinique reprend le sillage citronné et boisé du parfum Happy for Men, décliné ici en format déodorant de 200 ml plutôt qu'en eau de toilette. Il combine une protection contre les odeurs corporelles à une note parfumée reconnaissable, pensée pour un usage quotidien sous les bras.",
      "Le format spray permet une application rapide et un séchage à l'air libre, sans passage nécessaire par les mains. Il s'adresse à qui apprécie déjà l'univers olfactif Happy et souhaite le retrouver au fil de la journée dans un geste d'hygiène plutôt que dans une vaporisation de parfum classique.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Déodorant spray parfumé" },
      { libelle: "Contenance", valeur: "200 ml" },
      { libelle: "Parfum", valeur: "Sillage citronné et boisé, univers Happy for Men" },
      { libelle: "Usage", valeur: "Application quotidienne sous les bras" },
    ],
    usage: [
      "S'applique le matin sur peau propre et sèche, en vaporisant à quelques centimètres sous chaque bras. Laisser sécher quelques secondes avant de s'habiller évite de marquer les vêtements. Ce format spray se renouvelle en cours de journée si besoin, sans effet collant, contrairement à certains sticks ou roll-on plus concentrés.",
    ],
    positionnement: [
      "Face aux déodorants sans parfum marqué du même rayon, celui-ci se distingue par sa signature olfactive héritée du parfum Happy for Men, ce qui en fait aussi un choix esthétique et pas seulement fonctionnel. Il convient moins bien à qui porte déjà un autre parfum au quotidien, les deux sillages pouvant se superposer de façon peu harmonieuse, ou à une peau très sensible aux formules parfumées sous les bras.",
    ],
    faq: [
      {
        question: "Ce déodorant remplace-t-il le parfum Happy for Men ?",
        reponse:
          "Non, il en reprend l'univers olfactif mais avec une tenue plus discrète et plus courte, pensée pour un usage d'hygiène quotidienne. Pour un sillage plus marqué et plus durable, l'eau de toilette Happy for Men reste le produit de référence à vaporiser sur le corps et les vêtements.",
      },
      {
        question: "Peut-on le porter avec un autre parfum sans que les odeurs se mélangent mal ?",
        reponse:
          "C'est possible mais pas garanti, les notes citronnées et boisées de Happy for Men pouvant entrer en concurrence avec un parfum différent. Pour un résultat plus harmonieux, il est généralement conseillé de choisir un parfum de la même famille olfactive ou de rester sur le sillage Happy seul.",
      },
    ],
  },
  {
    slug: "cosrx-advanced-snail-radiance-dual-essence-80ml",
    identite: [
      "Cette essence de COSRX s'inscrit dans la gamme Snail de la marque, connue pour son mucus de bave d'escargot filtré comme actif central. La version Radiance Dual Essence se positionne sur l'éclat et l'uniformité du teint, avec une texture plus légère et moins collante que celle du best-seller 96 Mucin Power Essence de la même famille.",
      "Elle s'utilise en étape intermédiaire d'une routine coréenne, après le toner et avant le sérum, pour préparer la peau à mieux recevoir les soins suivants tout en apportant une hydratation immédiate. Le format 80 ml en flacon pompe facilite un dosage précis à chaque application.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Mucus de bave d'escargot filtré" },
      { libelle: "Galénique", valeur: "Essence en flacon pompe" },
      { libelle: "Contenance", valeur: "80 ml" },
      { libelle: "Usage", valeur: "Étape intermédiaire d'une routine coréenne, après le toner" },
    ],
    usage: [
      "S'applique après le toner et avant le sérum, en tapotant quelques gouttes sur l'ensemble du visage jusqu'à absorption complète. Elle peut se superposer en fines couches successives sur les zones plus ternes pour renforcer l'effet éclat. Comme toute essence à texture légère, elle se glisse facilement dans une routine à plusieurs étapes sans alourdir les applications qui suivent.",
    ],
    positionnement: [
      "Face au 96 Mucin Power Essence de la même marque, plus dense et davantage orienté réparation et hydratation intense, ce Dual Essence cible en priorité l'éclat et l'aspect du teint avec une texture plus fluide. Il convient à qui suit déjà une routine en plusieurs étapes et cherche un produit intermédiaire plutôt qu'un soin unique. Une routine simplifiée en une ou deux étapes trouvera moins d'intérêt à l'ajouter.",
    ],
    faq: [
      {
        question: "Quelle différence avec le COSRX Advanced Snail 96 Mucin Power Essence ?",
        reponse:
          "Le 96 Mucin Power Essence est plus concentré et plus épais, pensé en priorité pour l'hydratation et la réparation de la barrière cutanée. Ce Dual Essence, plus fluide, se concentre davantage sur l'éclat et l'uniformité du teint, dans une texture qui glisse plus facilement entre les étapes d'une routine coréenne.",
      },
      {
        question: "Peut-on utiliser les deux essences COSRX ensemble ?",
        reponse:
          "Oui, certaines routines coréennes combinent plusieurs textures à base de mucus d'escargot en couches successives, du plus fluide au plus riche. Il n'y a pas d'incompatibilité entre les deux, mais superposer plusieurs essences reste un choix de routine avancée, pas une nécessité pour un usage simple.",
      },
    ],
  },
  {
    slug: "cosrx-advanced-snail-96-mucin-power-essence-100ml",
    identite: [
      "Ce best-seller de COSRX doit son nom à sa composition : 96 % de mucus de bave d'escargot filtré, l'actif central de la formule, complété par un minimum d'ingrédients annexes. La texture est dense et légèrement collante au moment de l'application, avant de s'absorber en laissant la peau visiblement repulpée.",
      "Cette essence est devenue une référence des routines coréennes pour son rôle dans l'hydratation intense et le soutien de la barrière cutanée, notamment sur les peaux marquées par des rougeurs, des cicatrices d'acné ou un teint irrégulier. Elle s'utilise en flacon pompe de 100 ml, après le nettoyage et le toner, avant les sérums plus ciblés.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Mucus de bave d'escargot filtré (96 %)" },
      { libelle: "Galénique", valeur: "Essence dense en flacon pompe" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Type de peau", valeur: "Tous types, dont peau à imperfections et cicatrices" },
    ],
    usage: [
      "S'applique après le toner, en tapotant deux à trois pressions sur l'ensemble du visage jusqu'à absorption. La texture, légèrement collante au départ, laisse ensuite une sensation de peau repulpée. Elle peut s'utiliser matin et soir, seule ou en base avant un sérum ciblé niacinamide ou acide hyaluronique de la même routine.",
    ],
    positionnement: [
      "Dans le rayon des soins pour peau à imperfections et marques résiduelles, cette essence se distingue par sa concentration élevée en mucus d'escargot filtré et sa popularité dans les routines coréennes en plusieurs étapes. Elle convient bien aux peaux déshydratées ou marquées par des cicatrices d'acné. Sa texture collante en début d'application peut moins convenir à qui recherche un soin qui s'absorbe instantanément sans étape d'attente.",
    ],
    faq: [
      {
        question: "Pourquoi la texture est-elle collante au moment de l'application ?",
        reponse:
          "C'est une caractéristique propre au mucus d'escargot filtré concentré à 96 %, qui donne une texture proche d'un gel dense. Cette sensation collante disparaît après quelques dizaines de secondes une fois le produit absorbé, et ne reflète pas un défaut de la formule mais sa forte concentration en actif.",
      },
      {
        question: "Cette essence convient-elle à une peau à tendance acnéique ?",
        reponse:
          "Elle est largement utilisée sur les peaux à imperfections dans les routines coréennes, notamment pour aider à limiter l'aspect des marques résiduelles. Elle ne traite pas l'acné active en tant que telle, et une peau très grasse pourra préférer l'appliquer en couche plus fine ou uniquement le soir.",
      },
    ],
  },
  {
    slug: "cosrx-niacinamide-15-serum-20ml",
    identite: [
      "Ce sérum de COSRX concentre 15 % de niacinamide dans un flacon compte-gouttes de 20 ml, une dose élevée pensée pour cibler l'aspect des pores dilatés, du teint irrégulier et de la brillance excessive des peaux mixtes à grasses. La texture est fluide et se fond rapidement dans la peau sans laisser de résidu poisseux.",
      "Cette forte concentration en fait un produit à introduire progressivement plutôt qu'en application quotidienne d'emblée, le temps que la peau s'habitue. Il s'inscrit dans la gamme d'actifs ciblés de COSRX, pensée pour des routines coréennes où chaque produit répond à un besoin précis plutôt qu'à un soin généraliste.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide à 15 %" },
      { libelle: "Galénique", valeur: "Sérum fluide en flacon compte-gouttes" },
      { libelle: "Contenance", valeur: "20 ml" },
      { libelle: "Type de peau", valeur: "Peau mixte à grasse, pores dilatés" },
    ],
    usage: [
      "S'introduit progressivement, une application tous les deux ou trois jours la première semaine, avant de passer à un usage quotidien si la peau le tolère bien. S'applique après le toner ou une essence, avant la crème, en évitant si possible de le combiner le même soir à un exfoliant acide fort. Quelques gouttes suffisent pour l'ensemble du visage.",
    ],
    positionnement: [
      "Avec ses 15 % de niacinamide, ce sérum se situe parmi les concentrations les plus élevées du rayon, au-dessus des formules plus douces à 5 ou 10 %. Il convient aux peaux grasses cherchant un résultat visible sur l'aspect des pores et du grain de peau. Les peaux sèches ou réactives risquent de moins bien tolérer une telle concentration d'emblée et devraient commencer par une formule plus légère avant d'envisager celle-ci.",
    ],
    faq: [
      {
        question: "Pourquoi 15 % de niacinamide plutôt qu'une concentration plus faible ?",
        reponse:
          "COSRX a choisi cette concentration pour cibler spécifiquement les peaux grasses avec des besoins marqués sur l'aspect des pores et de la brillance. C'est une dose plus élevée que la moyenne du rayon, ce qui la rend efficace mais aussi plus susceptible de picoter en début d'usage sur une peau non habituée.",
      },
      {
        question: "Peut-on l'utiliser en même temps qu'un rétinol ?",
        reponse:
          "Les deux peuvent généralement cohabiter dans une routine, mais il est plus prudent de les appliquer à des moments différents, par exemple la niacinamide le matin et le rétinol le soir, pour limiter les risques d'irritation cumulée, surtout en phase d'introduction de l'un des deux actifs.",
      },
    ],
  },
  {
    slug: "dermab-creme-contour-des-yeux-15ml",
    identite: [
      "Cette crème contour des yeux de Dermab se présente en petit format de 15 ml, la contenance habituelle pour ce type de soin appliqué en très faible quantité sur une zone restreinte du visage. Elle s'inscrit dans le rayon des soins anti-âge, ce qui situe sa vocation : accompagner le contour de l'œil, une zone à la peau plus fine où les signes de fatigue et de relâchement se marquent en général plus tôt que sur le reste du visage.",
      "Sa texture crème, ni fluide ni très riche, correspond au format le plus courant pour ce type de soin, pensé pour un geste rapide du bout du doigt, matin ou soir, sans laisser de film gras sous le maquillage.",
    ],
    faits: [
      { libelle: "Format", valeur: "Crème contour des yeux" },
      { libelle: "Contenance", valeur: "15 ml" },
      { libelle: "Zone", valeur: "Contour de l'œil" },
      { libelle: "Gamme", valeur: "Soin anti-âge visage" },
    ],
    usage: [
      "S'applique en très petite quantité, de la taille d'un grain de riz pour les deux yeux, du bout de l'annulaire pour un geste léger qui n'étire pas la peau fine de la zone. Tapoter délicatement de l'intérieur vers l'extérieur de l'œil, en évitant le contact direct avec la paupière mobile. Un usage matin et soir, avant le reste de la routine visage, est la façon la plus courante de l'intégrer.",
    ],
    positionnement: [
      "Face aux crèmes visage classiques appliquées sur l'ensemble du visage, ce soin cible spécifiquement la zone du contour de l'œil, plus fine et plus sensible. Il s'adresse à qui souhaite un geste dédié à cette zone en complément de sa crème habituelle. Il ne remplace pas un soin visage complet et n'a pas vocation à être appliqué ailleurs que sur le pourtour de l'œil.",
    ],
    faq: [
      {
        question: "Peut-on appliquer cette crème sur la paupière mobile ?",
        reponse:
          "Ce n'est généralement pas recommandé pour un soin contour des yeux : l'application se limite habituellement à l'os orbitaire, sous l'œil et sur les tempes, en évitant la paupière mobile où la peau est encore plus fine et où le produit risquerait de migrer vers l'œil.",
      },
      {
        question: "À partir de quel âge ce type de soin est-il utile ?",
        reponse:
          "Il n'y a pas de seuil universel : un contour des yeux peut s'utiliser dès que des signes de fatigue, de cernes ou de relâchement apparaissent, ce qui varie selon les personnes. Certaines l'intègrent en prévention dès la vingtaine, d'autres seulement lorsque les signes deviennent visibles au quotidien.",
      },
    ],
  },
  {
    slug: "dermaeos-dexeram-creme-sechresse-f-200ml",
    identite: [
      "Dexeram, de DERMAeos, est une crème de 200 ml positionnée sur le rayon des soins hydratants visage, avec une vocation indiquée clairement par son nom : accompagner les peaux marquées par la sécheresse cutanée. Le grand format de 200 ml, plus proche d'un pot ou d'un tube de soin corps que d'une petite crème visage premium, suggère un usage généreux et régulier plutôt qu'un soin dosé au compte-gouttes.",
      "Cette contenance en fait une crème de fond pensée pour un usage quotidien sur peau sèche, à intégrer dans une routine simple plutôt que dans un protocole à plusieurs étapes.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Crème hydratante pour peau sèche" },
      { libelle: "Contenance", valeur: "200 ml" },
      { libelle: "Format", valeur: "Pot ou tube grand contenant" },
      { libelle: "Usage", valeur: "Application quotidienne, visage" },
    ],
    usage: [
      "S'applique matin et soir sur visage nettoyé, en couche généreuse adaptée au grand format du contenant. Le pot ou tube de 200 ml est pensé pour un usage fréquent sans compter les doses, contrairement à une crème premium vendue en petit format. Elle convient à une application quotidienne sur l'ensemble du visage, en insistant sur les zones les plus marquées par la sécheresse.",
    ],
    positionnement: [
      "Dans le rayon des crèmes hydratantes visage, ce grand format se distingue par sa contenance généreuse plutôt que par une promesse d'actif rare. Il convient à qui cherche une crème de fond à utiliser sans compter, pour un usage quotidien sur une peau sèche. Une peau mixte à grasse, ou qui recherche une texture très légère, préférera une formule plus fluide, ce grand format étant pensé pour une texture nourrissante plutôt que matifiante.",
    ],
    faq: [
      {
        question: "Ce grand format convient-il à une utilisation quotidienne sur le visage uniquement ?",
        reponse:
          "Oui, sa contenance de 200 ml est pensée pour un usage visage régulier sans compter les doses, à la différence des petits formats premium vendus au compte-gouttes. Certains l'utilisent aussi sur les zones du cou ou du décolleté, également sujettes à la sécheresse, sans que ce soit son usage exclusif.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Une crème hydratante pour peau sèche en texture riche peut être appliquée avant le maquillage, en laissant le temps à la peau de l'absorber complètement, quelques minutes suffisent généralement. Sur une peau très sèche, un temps de pause plus long avant le fond de teint donne souvent un meilleur résultat.",
      },
    ],
  },
  {
    slug: "dove-gel-douche-soin-revitalisant-grenade-dhibiscus-500ml",
    identite: [
      "Ce gel douche Dove s'inscrit dans la gamme Soin Revitalisant de la marque, associée à la technologie Nutrium Moisture censée limiter le dessèchement cutané pendant le lavage, contrairement à un savon classique qui tend à décaper le film hydrolipidique. Le parfum grenade et thé d'hibiscus lui donne une note fruitée et légèrement florale, sans être entêtante.",
      "Le flacon de 500 ml, au format familial courant, convient à un usage quotidien sous la douche. La texture crémeuse mousse modérément et se rince facilement, laissant la peau moins tiraillée qu'après un gel douche purement nettoyant, sans agent hydratant ajouté à la formule.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Gel douche hydratant" },
      { libelle: "Parfum", valeur: "Grenade et thé d'hibiscus" },
      { libelle: "Contenance", valeur: "500 ml" },
      { libelle: "Gamme", valeur: "Dove Soin Revitalisant" },
    ],
    usage: [
      "S'utilise comme un gel douche classique, en petite quantité sur une éponge ou directement sur peau mouillée, moussé puis rincé à l'eau tiède plutôt que chaude pour préserver l'hydratation de la peau. Il convient à un usage quotidien sur le corps entier, y compris les peaux sensibles au dessèchement, sans nécessiter de crème hydratante systématique après la douche, bien que celle-ci reste bénéfique sur peau très sèche.",
    ],
    positionnement: [
      "Face à un gel douche purement nettoyant ou fortement parfumé du même rayon, celui-ci se positionne sur le confort de la peau pendant et après le lavage, grâce à sa formule hydratante. Il convient aux peaux qui tirent facilement après la douche. Une peau très grasse ou à tendance acnéique sur le corps pourra préférer un gel douche plus nettoyant, moins axé sur l'apport d'agents hydratants supplémentaires.",
    ],
    faq: [
      {
        question: "Ce gel douche remplace-t-il une lotion corps après la douche ?",
        reponse:
          "Non, sa formule aide à limiter le dessèchement pendant le lavage, mais elle ne remplace pas une lotion ou une crème corps appliquée ensuite, surtout sur une peau très sèche ou en climat sec. Les deux gestes restent complémentaires plutôt qu'interchangeables.",
      },
      {
        question: "Le parfum grenade et thé d'hibiscus est-il tenace sur la peau ?",
        reponse:
          "C'est un parfum de gel douche, donc plus discret et moins tenace qu'une eau de toilette : il s'estompe généralement après le séchage, laissant une note légère plutôt qu'un sillage marqué qui persisterait plusieurs heures sur la peau. Il reste perceptible surtout dans les minutes qui suivent la douche.",
      },
    ],
  },
  {
    slug: "dove-shampoing-anti-chute-250ml",
    identite: [
      "Ce shampoing Dove s'inscrit dans la gamme capillaire de la marque orientée vers les cheveux affaiblis et sujets à la chute. Sa formule vise à nettoyer le cuir chevelu et la fibre capillaire en douceur tout en aidant à limiter l'aspect de fragilisation des cheveux, sans agir sur les causes médicales d'une chute de cheveux, qui relèvent d'un avis spécialisé.",
      "Le flacon de 250 ml, au format courant pour un usage régulier, convient à un lavage fréquent, plusieurs fois par semaine, en particulier sur cheveux fins ou dévitalisés qui cherchent à retrouver un aspect plus dense visuellement au fil des lavages.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Shampoing anti-chute, cheveux affaiblis" },
      { libelle: "Contenance", valeur: "250 ml" },
      { libelle: "Type de cheveux", valeur: "Cheveux fins, fragilisés, sujets à la chute" },
      { libelle: "Usage", valeur: "Lavage régulier, plusieurs fois par semaine" },
    ],
    usage: [
      "S'utilise comme un shampoing classique : appliqué sur cheveux mouillés, massé en douceur sur le cuir chevelu pour favoriser la circulation locale, puis rincé abondamment avant un éventuel second lavage si les cheveux sont très gras. Un usage régulier sur plusieurs semaines est nécessaire pour juger de son effet sur l'aspect général de la chevelure, un seul lavage ne suffisant pas à évaluer le produit.",
    ],
    positionnement: [
      "Face à un shampoing volumateur ou purifiant du même rayon, celui-ci cible spécifiquement l'aspect des cheveux affaiblis et sujets à la chute, sans prétendre traiter une chute d'origine médicale ou hormonale. Il convient à un usage d'accompagnement au quotidien. En cas de chute importante et soudaine, un avis médical reste la démarche à privilégier avant de compter sur un shampoing seul pour résoudre le problème.",
    ],
    faq: [
      {
        question: "Ce shampoing arrête-t-il la chute de cheveux ?",
        reponse:
          "Non, un shampoing aide à nettoyer le cuir chevelu et à accompagner l'aspect général de cheveux fragilisés, mais il ne traite pas les causes d'une chute de cheveux, qu'elles soient hormonales, saisonnières ou liées au stress. Une chute importante ou soudaine justifie un avis médical plutôt qu'un changement de shampoing seul.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Sa formule douce le permet généralement, mais un lavage quotidien n'est pas indispensable pour tous les types de cheveux. Deux à trois lavages par semaine suffisent souvent à observer un effet sur l'aspect de la chevelure, sauf préférence personnelle ou cuir chevelu qui graisse rapidement.",
      },
    ],
  },
  {
    slug: "dr-althea-green-relief-amino-gel-cleanser-100ml",
    identite: [
      "Ce nettoyant de Dr.Althea appartient à la ligne Green Relief de la marque, pensée pour les peaux sensibles et sujettes aux rougeurs, avec des ingrédients apaisants comme le centella asiatica souvent associé à cette gamme. Sa texture gel, à base de tensioactifs doux d'origine aminée, mousse peu et nettoie sans décaper le film hydrolipidique, contrairement à un gel moussant classique.",
      "Le flacon de 100 ml convient à un usage quotidien, matin et soir, pour retirer les impuretés de la journée ou les résidus de crème du soir sans laisser de sensation de tiraillement après le rinçage, un point important pour les peaux réactives.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Dr.Althea Green Relief, peau sensible" },
      { libelle: "Galénique", valeur: "Gel nettoyant aux tensioactifs aminés" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Type de peau", valeur: "Peau sensible, sujette aux rougeurs" },
    ],
    usage: [
      "S'applique sur peau mouillée, quelques pressions réparties sur le visage, massées délicatement en mouvements circulaires puis rincées à l'eau tiède. La faible mousse générée par la formule aux tensioactifs doux est normale pour ce type de gel nettoyant à faible pH, pensé pour ne pas décaper le film protecteur de la peau. Convient à un double nettoyage, en seconde étape après une huile ou une eau micellaire.",
    ],
    positionnement: [
      "Face à un gel moussant classique du même rayon, ce nettoyant privilégie la douceur au pouvoir moussant, ce qui le rend plus adapté aux peaux sensibles ou réactives. Il convient moins bien à une peau très grasse en climat chaud qui recherche une sensation de nettoyage plus franche et plus moussante en fin de journée, pour laquelle un gel purifiant classique restera plus satisfaisant.",
    ],
    faq: [
      {
        question: "Pourquoi ce nettoyant mousse-t-il si peu ?",
        reponse:
          "C'est une caractéristique voulue des formules à base de tensioactifs aminés doux, pensées pour nettoyer sans décaper la peau. Une mousse abondante est souvent associée à des tensioactifs plus agressifs pour la barrière cutanée, ce que cette ligne pour peau sensible cherche justement à éviter.",
      },
      {
        question: "Peut-il s'utiliser seul, sans démaquillant avant ?",
        reponse:
          "Sur une peau sans maquillage, un seul nettoyage suffit généralement. Avec du maquillage ou une protection solaire résistante à l'eau, il est préférable de le faire suivre d'une huile ou d'une eau micellaire en première étape, ce gel doux étant plus adapté à un second nettoyage qu'à un démaquillage complet.",
      },
    ],
  },
  {
    slug: "dr-althea-rapid-firm-sculpting-cream-45ml",
    identite: [
      "Cette crème de Dr.Althea, dont le nom indique une vocation raffermissante, se présente en pot de 45 ml, un format contenu qui correspond à l'usage mesuré généralement réservé aux soins ciblés sur la fermeté du visage. Sa texture crème, plus dense qu'un simple soin hydratant léger, s'applique en quantité limitée sur les zones où l'ovale du visage commence à se relâcher, notamment le long de la mâchoire et des joues.",
      "Elle s'inscrit dans le rayon des crèmes hydratantes visage, ce qui indique un double rôle d'hydratation et de confort cutané en complément de sa promesse de fermeté, plutôt qu'une action isolée sur un seul aspect du vieillissement.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Crème raffermissante" },
      { libelle: "Galénique", valeur: "Texture crème dense" },
      { libelle: "Contenance", valeur: "45 ml" },
      { libelle: "Zone", valeur: "Ovale du visage, mâchoire, joues" },
    ],
    usage: [
      "S'applique en petite quantité sur l'ovale du visage, la mâchoire et les joues, en mouvements ascendants du bas vers le haut du visage pour accompagner le geste de fermeté recherché. Un usage quotidien, matin ou soir selon la routine, est nécessaire sur plusieurs semaines avant de juger d'un effet visible sur l'aspect de la peau. Elle se combine sans difficulté à une crème hydratante plus légère appliquée en complément.",
    ],
    positionnement: [
      "Dans le rayon des crèmes visage, ce soin se distingue par son positionnement ciblé sur la fermeté plutôt que sur l'hydratation générale, ce qui le rapproche des soins anti-âge dédiés. Il convient à une peau qui commence à marquer un relâchement au niveau de l'ovale du visage. Une peau jeune sans ce type de préoccupation, ou qui cherche avant tout une hydratation quotidienne simple, trouvera davantage d'intérêt dans une crème hydratante généraliste du même rayon.",
    ],
    faq: [
      {
        question: "À partir de quand utiliser une crème raffermissante comme celle-ci ?",
        reponse:
          "Il n'existe pas d'âge fixe : ce type de soin s'utilise généralement quand un relâchement de l'ovale du visage commence à se voir, ce qui varie selon les personnes et leur type de peau. Certaines l'intègrent en prévention, d'autres seulement lorsque le signe devient visible au quotidien dans le miroir.",
      },
      {
        question: "Peut-on l'appliquer sur tout le visage ou seulement sur l'ovale ?",
        reponse:
          "Elle est pensée en priorité pour l'ovale du visage, la mâchoire et les joues, zones les plus concernées par le relâchement cutané. Rien n'empêche une application plus large, mais l'effet recherché reste concentré sur ces zones plutôt que sur l'ensemble du visage, front et nez compris.",
      },
    ],
  },
  {
    slug: "ducray-keracnyl-gel-moussant-200ml",
    identite: [
      "Kéracnyl est la gamme de Ducray dédiée aux peaux à tendance acnéique, et ce gel moussant de 200 ml en constitue l'étape de nettoyage quotidien. Sa formule vise à purifier la peau et à limiter l'aspect de brillance des peaux grasses sans agresser le film hydrolipidique, un équilibre recherché sur les peaux à imperfections souvent asséchées par des nettoyants trop décapants.",
      "Le gel mousse modérément, se rince facilement et laisse une sensation de propreté sans tiraillement. Il s'associe généralement aux autres soins de la ligne Kéracnyl, comme la crème ou le sérum anti-imperfections, pour une routine complète pensée pour ce type de peau.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Ducray Kéracnyl, peau à tendance acnéique" },
      { libelle: "Galénique", valeur: "Gel moussant" },
      { libelle: "Contenance", valeur: "200 ml" },
      { libelle: "Type de peau", valeur: "Peau grasse à tendance acnéique" },
    ],
    usage: [
      "S'utilise matin et soir sur peau mouillée, en faisant mousser une noisette de produit puis en massant délicatement le visage sans frotter, avant un rinçage à l'eau tiède. Il constitue la première étape de la routine Kéracnyl, suivie d'un soin ciblé de la même gamme. Un usage biquotidien régulier est recommandé plutôt qu'un lavage ponctuel pour observer un effet sur l'aspect de la peau grasse.",
    ],
    positionnement: [
      "Face à un gel nettoyant généraliste du même rayon, celui-ci cible spécifiquement les peaux à tendance acnéique, avec une formule pensée pour ne pas aggraver l'aspect de sécheresse souvent provoqué par les nettoyants trop agressifs sur ce type de peau. Il convient moins bien à une peau sèche ou sensible sans imperfections, pour laquelle un nettoyant plus doux et moins ciblé sera plus adapté au quotidien.",
    ],
    faq: [
      {
        question: "Ce gel peut-il assécher la peau à force d'utilisation ?",
        reponse:
          "Sa formule est pensée pour nettoyer les peaux à tendance acnéique sans les décaper excessivement, contrairement à certains nettoyants purifiants classiques. Une sensation de tiraillement en cas d'usage trop fréquent ou de rinçage à l'eau trop chaude reste possible et justifie d'ajuster la fréquence d'application si besoin.",
      },
      {
        question: "Faut-il l'associer à d'autres produits Kéracnyl pour de meilleurs résultats ?",
        reponse:
          "La gamme Kéracnyl est pensée comme une routine complète, nettoyant, crème et soins ciblés compris, chaque produit répondant à une étape différente. Utiliser le gel seul reste possible et déjà utile pour le nettoyage quotidien, mais l'associer aux autres soins de la ligne renforce généralement l'effet global sur la peau à imperfections.",
      },
    ],
  },
  {
    slug: "ducray-kertyol-pso-concentre-corps-cuir-chevelu-100ml",
    identite: [
      "Kertyol PSO est la ligne de Ducray dédiée aux peaux et cuirs chevelus sujets aux plaques épaisses et squameuses, un terrain souvent associé au psoriasis. Ce concentré de 100 ml combine une action kératorégulatrice, qui aide à réduire visuellement l'épaisseur des squames, et un rôle apaisant sur les zones inconfortables du cuir chevelu et du corps.",
      "Sa texture concentrée s'utilise en application ciblée plutôt qu'en produit de lavage quotidien classique, sur les plaques localisées avant un rinçage. Ce positionnement le distingue des shampoings antipelliculaires courants, pensés pour les pellicules simples plutôt que pour les squames épaisses et persistantes.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Ducray Kertyol PSO, peau sujette au psoriasis" },
      { libelle: "Fonction", valeur: "Concentré kératorégulateur" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Zone", valeur: "Cuir chevelu et corps, plaques squameuses" },
    ],
    usage: [
      "S'applique en couche localisée directement sur les plaques du cuir chevelu ou du corps, en laissant poser quelques minutes selon les indications du produit avant de rincer ou de faire suivre d'un shampoing doux. Il ne s'utilise pas comme un shampoing quotidien classique mais en soin ciblé, sur les zones concernées uniquement, à la fréquence conseillée selon l'intensité des plaques.",
    ],
    positionnement: [
      "Face à un shampoing antipelliculaire classique du même rayon, ce concentré cible des squames plus épaisses et plus résistantes, typiques d'un cuir chevelu sujet au psoriasis, plutôt que des pellicules simples liées à un déséquilibre du cuir chevelu gras ou sec. Il convient moins bien à un usage préventif léger, pour lequel un shampoing antipelliculaire doux au quotidien suffit généralement sans recourir à un concentré ciblé.",
    ],
    faq: [
      {
        question: "Ce produit traite-t-il le psoriasis ?",
        reponse:
          "Non, un soin cosmétique comme celui-ci aide à limiter l'aspect des squames et à apporter du confort sur les zones concernées, mais il ne traite pas le psoriasis, qui reste une affection relevant d'un suivi dermatologique. Il s'utilise en complément d'une routine adaptée, pas en remplacement d'un avis médical.",
      },
      {
        question: "Peut-on l'utiliser à la fois sur le cuir chevelu et sur le corps ?",
        reponse:
          "Oui, c'est l'un des intérêts de ce concentré, formulé pour s'appliquer aussi bien sur les plaques du cuir chevelu que sur celles du corps, avec le même geste d'application localisée suivi d'un rinçage ou d'un shampoing doux selon la zone traitée.",
      },
    ],
  },
  {
    slug: "durex-strawberry-gel-lubrifiant-100ml",
    identite: [
      "Ce gel lubrifiant Durex se distingue par sa base aqueuse et son parfum fraise, une variante gourmande des lubrifiants classiques sans odeur. Sa formule à l'eau le rend compatible avec les préservatifs en latex, contrairement à certains lubrifiants à base d'huile qui peuvent les fragiliser.",
      "Le flacon de 100 ml, au bec verseur, permet un dosage précis à chaque utilisation. Sa texture reste fluide et se lave facilement à l'eau, sans laisser de film collant persistant, ce qui en fait un produit pensé pour un usage intime confortable plutôt qu'un cosmétique de soin classique.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Gel lubrifiant intime" },
      { libelle: "Base", valeur: "Aqueuse, compatible préservatifs en latex" },
      { libelle: "Parfum", valeur: "Fraise" },
      { libelle: "Contenance", valeur: "100 ml" },
    ],
    usage: [
      "S'applique en petite quantité directement sur la zone concernée ou sur le préservatif, avant un rapport, en renouvelant l'application si nécessaire au cours de l'utilisation. Sa base aqueuse le rend compatible avec les préservatifs en latex sans les fragiliser, contrairement à un lubrifiant à base d'huile. Il se rince facilement à l'eau claire après usage.",
    ],
    positionnement: [
      "Face à un lubrifiant neutre sans parfum du même rayon, ce gel se distingue par sa note fraise, pensée pour une expérience plus gourmande. Il convient à qui recherche un lubrifiant aromatisé plutôt que neutre. Une personne sujette à des sensibilités ou irritations intimes réactives aux parfums ajoutés pourra préférer une version sans parfum, plus neutre, du même rayon.",
    ],
    faq: [
      {
        question: "Ce gel est-il compatible avec tous les préservatifs ?",
        reponse:
          "Sa base aqueuse le rend compatible avec les préservatifs en latex, la matière la plus courante. Il reste prudent de vérifier la composition du préservatif utilisé, certains lubrifiants à base d'huile étant incompatibles avec le latex alors qu'une base aqueuse comme celle-ci ne pose généralement pas ce problème.",
      },
      {
        question: "Le parfum fraise a-t-il un goût sucré en plus de l'odeur ?",
        reponse:
          "Les gels lubrifiants aromatisés comme celui-ci sont généralement pensés pour associer une odeur et un goût cohérents, mais l'intensité perçue varie selon les personnes. Il reste avant tout un lubrifiant intime, pas un produit alimentaire, et s'utilise dans ce cadre précis.",
      },
    ],
  },
  {
    slug: "ecrinal-durcisseur-vitamine-10ml",
    identite: [
      "Ce durcisseur d'Ecrinal se présente en petit flacon de 10 ml, le format classique des soins pour ongles appliqués au pinceau comme un vernis. Sa formule vitaminée vise à renforcer visuellement les ongles fins, mous ou cassants, en formant un film protecteur qui limite leur fragilité au quotidien.",
      "Il s'utilise seul, en soin base, ou sous un vernis coloré classique, auquel cas il joue aussi un rôle de base protectrice qui limite le contact direct entre l'ongle et le vernis pigmenté. Sa texture proche d'un vernis transparent sèche rapidement et laisse un fini légèrement brillant sur l'ongle nu.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "Durcisseur d'ongles vitaminé" },
      { libelle: "Contenance", valeur: "10 ml" },
      { libelle: "Applicateur", valeur: "Pinceau, comme un vernis" },
      { libelle: "Usage", valeur: "Soin ongles fins, mous ou cassants" },
    ],
    usage: [
      "S'applique en fine couche sur l'ongle propre et sec, du même geste qu'un vernis classique, en laissant sécher quelques minutes avant tout contact. Il peut s'utiliser seul, renouvelé tous les deux à trois jours, ou en base sous un vernis coloré pour renforcer l'ongle tout en profitant d'un vernis. Retirer les résidus au dissolvant avant chaque nouvelle application préserve l'efficacité du film protecteur.",
    ],
    positionnement: [
      "Dans le rayon vernis à ongles, ce durcisseur se distingue des vernis colorés classiques par sa vocation de soin plutôt que d'esthétique pure, bien qu'il puisse aussi s'utiliser sous un vernis pigmenté comme base protectrice. Il convient aux ongles fins, mous ou cassants qui cassent facilement. Il ne convient pas à qui cherche uniquement un effet couleur, pour lequel un vernis classique de la même gamme sera plus adapté.",
    ],
    faq: [
      {
        question: "Peut-on appliquer un vernis coloré par-dessus ce durcisseur ?",
        reponse:
          "Oui, c'est un usage courant : appliqué en base sous un vernis coloré, ce durcisseur renforce l'ongle tout en laissant la couleur s'appliquer normalement par-dessus. Il joue alors un double rôle de soin et de base protectrice qui limite le contact direct entre le pigment du vernis et l'ongle.",
      },
      {
        question: "Combien de temps avant de voir un effet sur des ongles cassants ?",
        reponse:
          "Comme pour tout soin des ongles, un effet visible sur la solidité demande plusieurs semaines d'application régulière, le temps que l'ongle repousse renforcé depuis sa base. Une application ponctuelle ou irrégulière ne permet généralement pas de juger correctement l'efficacité du produit sur la durée.",
      },
    ],
  },
];
