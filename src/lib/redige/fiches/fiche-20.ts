import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "ushuaia-creme-douche-hammam-250ml",
    identite: [
      "Cette crème de douche Ushuaïa reprend le rituel du hammam sous une texture onctueuse, plus riche qu'un gel douche classique, pensée pour nettoyer sans dessécher la peau. Le format 250ml en fait un flacon de salle de bain courant, à utiliser au quotidien sur le corps humide.",
      "Le parfum oriental évoque les vapeurs et les essences du hammam traditionnel, une note chaude et enveloppante, loin des agrumes ou des fleurs blanches qui dominent le reste de la gamme Ushuaïa. La formule mousse peu par rapport à un gel douche standard, signe d'une base moins détergente.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Crème de douche onctueuse" },
      { libelle: "Contenance", valeur: "250 ml" },
      { libelle: "Parfum", valeur: "Accord hammam, chaud et oriental" },
      { libelle: "Zone", valeur: "Corps" },
    ],
    usage: [
      "S'applique sur peau mouillée, en massant délicatement pour faire mousser, puis se rince à l'eau claire. Une noisette suffit pour tout le corps. Sa texture crème convient bien en usage quotidien, y compris sur peau sensible au dessèchement, et peut remplacer un lait corps les jours où la douche est rapide.",
    ],
    positionnement: [
      "Face aux gels douche classiques du rayon, cette version crème mise sur le confort plutôt que sur la mousse abondante ou le parfum fruité. Elle convient à qui cherche une douche moins asséchante au quotidien. Les amateurs d'un parfum très frais ou d'une mousse généreuse lui préféreront un gel douche plus classique de la même marque.",
    ],
    faq: [
      {
        question: "Cette crème de douche mousse-t-elle autant qu'un gel douche classique ?",
        reponse:
          "Non, et c'est volontaire : la texture crème est formulée pour laver en douceur plutôt que pour produire une mousse abondante. Une faible mousse ne signifie pas une moindre efficacité de nettoyage, c'est la conséquence d'une base moins détergente pensée pour ne pas assécher la peau.",
      },
      {
        question: "Le parfum hammam est-il proche d'un savon noir traditionnel ?",
        reponse:
          "Non, il s'agit d'un accord parfumé qui évoque l'ambiance du hammam (chaleur, épices, vapeur) plutôt qu'une reproduction du savon noir ou du gant kessa. Le produit reste une crème de douche classique dans sa fonction, pas un soin gommant.",
      },
    ],
  },
  {
    slug: "venus-creme-depilatoire-100ml",
    identite: [
      "Cette crème dépilatoire Venus dissout la kératine du poil à la racine sans rasoir ni cire, pour une peau lisse sur le corps (jambes, bras, aisselles selon la notice). Le format 100ml correspond à un usage ponctuel plutôt qu'à un flacon de grande contenance.",
      "Le principe d'une crème dépilatoire reste le même d'une marque à l'autre : un temps de pose court, à respecter précisément, avant de retirer le produit et le poil à la spatule ou sous la douche. La marque Venus se positionne sur ce segment d'hygiène corporelle de base, disponible en parapharmacie.",
    ],
    faits: [
      { libelle: "Type", valeur: "Crème dépilatoire chimique" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Temps de pose", valeur: "Court, selon zone" },
      { libelle: "Zone", valeur: "Corps (jambes, bras, aisselles)" },
    ],
    usage: [
      "Appliquer une couche épaisse et uniforme sur peau sèche et propre, sans masser, puis respecter le temps de pose indiqué sur l'emballage. Retirer à la spatule fournie ou sous la douche tiède, puis rincer abondamment. Toujours tester sur une petite zone avant la première utilisation pour vérifier l'absence de réaction.",
    ],
    positionnement: [
      "Face au rasoir, cette crème évite les micro-coupures et repousse un peu plus tardif ; face à la cire, elle ne demande aucun geste technique. Elle convient pour un usage occasionnel sur peau non sensibilisée. Les peaux réactives lui préféreront souvent un rasoir dermatologique ou un épilateur mécanique, les crèmes dépilatoires pouvant piquer en cas de pose trop longue.",
    ],
    faq: [
      {
        question: "Combien de temps laisser poser cette crème dépilatoire ?",
        reponse:
          "Le temps de pose indiqué sur l'emballage doit être respecté strictement, sans le prolonger pour gagner en efficacité : au-delà, le risque d'irritation augmente sans que le résultat sur le poil soit meilleur. En cas de doute, retirer une petite zone test avant la fin du temps annoncé.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Ce produit est formulé pour le corps ; sans mention explicite d'un usage visage sur l'emballage, il ne faut pas l'appliquer sur cette zone, la peau du visage étant plus fine et plus réactive. Se référer à la notice du fabricant pour la liste précise des zones autorisées.",
      },
    ],
  },
  {
    slug: "venus-eau-micellaire-250ml",
    identite: [
      "Cette eau micellaire Venus nettoie le visage et retire le maquillage léger en un seul geste, sans rinçage. Les micelles en suspension captent les impuretés et les traces de maquillage sans frotter la peau, principe commun à toutes les eaux micellaires. Le format 250ml se prête à un usage quotidien, matin et soir.",
      "Positionnée en parapharmacie comme un nettoyant de base, elle convient aux routines simples qui ne demandent pas de double nettoyage systématique, à condition que le maquillage porté reste léger (fond de teint fluide, poudre, mascara non waterproof).",
    ],
    faits: [
      { libelle: "Type", valeur: "Eau micellaire monophasique" },
      { libelle: "Contenance", valeur: "250 ml" },
      { libelle: "Rinçage", valeur: "Sans rinçage" },
      { libelle: "Usage", valeur: "Visage, matin et soir" },
    ],
    usage: [
      "Imbiber un coton et passer sur le visage et les yeux en un mouvement doux, sans frotter, en renouvelant le coton jusqu'à ce qu'il ressorte propre. Aucun rinçage n'est nécessaire. Sur un maquillage waterproof ou une couche épaisse, un second passage ou un démaquillant biphasique dédié aux yeux reste souvent nécessaire.",
    ],
    positionnement: [
      "Face à un gel nettoyant, elle a l'avantage de ne pas nécessiter de point d'eau, pratique en voyage ou le matin pressé. Face à une eau micellaire biphasique, elle reste moins efficace sur un maquillage waterproof ou très couvrant. Elle convient à une routine simple sur peau normale à sèche plutôt qu'à un démaquillage complet du soir sur peau très maquillée.",
    ],
    faq: [
      {
        question: "Cette eau micellaire retire-t-elle un mascara waterproof ?",
        reponse:
          "Pas de façon fiable : une eau micellaire monophasique comme celle-ci est conçue pour un maquillage léger et non waterproof. Pour un mascara résistant à l'eau, une formule biphasique, dont les phases se mélangent en agitant le flacon, retire plus efficacement les pigments gras.",
      },
      {
        question: "Faut-il rincer le visage après application ?",
        reponse:
          "Non, c'est l'intérêt principal d'une eau micellaire : elle se retire avec le coton et ne nécessite pas de rinçage à l'eau. Sur peau sensible, un passage d'eau claire reste toutefois possible si une sensation de film est perçue après séchage.",
      },
    ],
  },
  {
    slug: "venus-eau-micellaire-biphasique-waterproof-250ml",
    identite: [
      "Cette eau micellaire biphasique Venus associe une phase aqueuse et une phase à base d'huile, visibles séparément dans le flacon tant qu'il n'est pas agité. C'est la phase huileuse qui fait la différence avec une eau micellaire classique : elle dissout les pigments gras du maquillage waterproof (mascara, eye-liner résistant à l'eau) que la phase aqueuse seule ne retire pas.",
      "Le format 250ml et l'usage biquotidien en font un produit de démaquillage plutôt qu'un simple nettoyant, à réserver de préférence à la zone des yeux et au maquillage tenace du reste du visage.",
    ],
    faits: [
      { libelle: "Type", valeur: "Eau micellaire biphasique" },
      { libelle: "Contenance", valeur: "250 ml" },
      { libelle: "Cible", valeur: "Maquillage waterproof" },
      { libelle: "Zone", valeur: "Visage et yeux" },
    ],
    usage: [
      "Agiter le flacon avant chaque utilisation pour mélanger les deux phases, imbiber un coton, puis le poser quelques secondes sur les yeux fermés avant de retirer le maquillage sans frotter. Renouveler le geste jusqu'à ce que le coton ressorte propre. Ne pas utiliser sur des lentilles de contact posées ; les retirer avant le démaquillage.",
    ],
    positionnement: [
      "Face à une eau micellaire simple, elle prend en charge le maquillage waterproof que l'autre laisse en place, au prix d'un léger film gras qu'il faut parfois rincer sur peau grasse. Elle convient particulièrement au démaquillage des yeux en fin de journée. Sur une peau sujette aux imperfections, mieux vaut réserver cette version à la zone du regard et garder une eau micellaire classique pour le reste du visage.",
    ],
    faq: [
      {
        question: "Pourquoi le flacon a-t-il deux couches visibles ?",
        reponse:
          "C'est le principe d'une formule biphasique : une phase aqueuse et une phase huileuse ne se mélangent pas au repos et se séparent naturellement dans le flacon. Il faut l'agiter avant chaque utilisation pour obtenir le mélange qui permet de dissoudre le maquillage waterproof.",
      },
      {
        question: "Laisse-t-elle un film gras sur la peau ?",
        reponse:
          "La phase huileuse peut laisser une sensation de film léger, surtout sur peau grasse ou mixte, ce qui est normal pour une formule biphasique efficace sur le waterproof. Un passage d'eau claire ou un second nettoyage avec une eau micellaire classique permet de l'éliminer si nécessaire.",
      },
    ],
  },
  {
    slug: "vichy-capital-soleil-creme-onctueuse-spf50-50ml",
    identite: [
      "La Crème Onctueuse Capital Soleil SPF50+ de Vichy est une protection solaire visage à texture riche, pensée pour les peaux normales à sèches qui recherchent un confort proche d'une crème de jour plutôt qu'une texture fluide. Elle associe des filtres UVA/UVB à large spectre à l'eau thermale de Vichy, signature de la marque sur l'ensemble de sa gamme dermo-cosmétique.",
      "Le format 50ml, standard pour une crème solaire visage, couvre un usage quotidien sur plusieurs semaines d'exposition modérée à forte, en réapplication régulière comme toute protection solaire.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "Crème onctueuse, riche" },
      { libelle: "Type de peau", valeur: "Normale à sèche" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique le matin, en dernière étape de la routine visage, sur peau propre et sèche, en couche généreuse pour atteindre la protection annoncée, une application trop fine réduisant sensiblement l'indice réel. À renouveler toutes les deux heures en cas d'exposition prolongée, et systématiquement après une baignade ou une transpiration importante.",
    ],
    positionnement: [
      "Face aux versions toucher sec ou matifiante de la même gamme Capital Soleil, cette crème onctueuse privilégie le confort et la nutrition au détriment d'un fini mat. Elle convient bien aux peaux sèches ou tiraillées par le soleil, moins aux peaux grasses ou à tendance acnéique, pour qui l'émulsion toucher sec ou la version matifiante 3 en 1 de la même gamme sera plus adaptée.",
    ],
    faq: [
      {
        question: "Cette crème solaire visage laisse-t-elle un film blanc ?",
        reponse:
          "Comme la plupart des crèmes onctueuses à indice élevé, une fine trace peut apparaître juste après application, le temps que la formule s'estompe sur la peau, en particulier sur peau mate. Un léger temps de pose avant l'exposition ou le maquillage atténue cet effet.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, c'est un usage courant pour une protection solaire visage : elle s'applique en dernière étape du soin, avant le maquillage, en laissant quelques minutes de pose pour qu'elle pénètre avant d'appliquer un fond de teint ou une base.",
      },
    ],
  },
  {
    slug: "vichy-capital-soleil-emulsion-toucher-sec-spf50-50ml",
    identite: [
      "L'Émulsion Toucher Sec Capital Soleil SPF50+ de Vichy est une protection solaire à texture fluide, absorbée rapidement, qui ne laisse pas de sensation grasse ni de film brillant, d'où le nom toucher sec. Elle convient aux peaux normales à mixtes qui trouvent les crèmes solaires classiques trop riches, et s'utilise aussi bien sur le visage que sur le corps selon la surface à couvrir.",
      "Comme le reste de la gamme Capital Soleil, elle combine des filtres UVA/UVB à large spectre et l'eau thermale de Vichy, dans un format 50ml adapté à un usage visage régulier.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "Émulsion fluide, toucher sec" },
      { libelle: "Zone", valeur: "Visage et corps" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau propre, le matin ou avant toute exposition, en insistant sur les zones les plus exposées (nez, pommettes, épaules). La texture fluide s'étale facilement mais ne dispense pas d'une réapplication toutes les deux heures, l'indice de protection diminuant avec le temps, la transpiration et le contact avec l'eau ou une serviette.",
    ],
    positionnement: [
      "Face à la crème onctueuse de la même gamme, elle privilégie la légèreté et un fini sec immédiat, au prix d'un effet nourrissant moindre. Elle convient aux peaux normales à mixtes et aux usages sportifs où une texture collante gênerait. Les peaux sèches ou sensibilisées par le soleil trouveront plus de confort avec la version crème onctueuse, plus riche.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le corps en plus du visage ?",
        reponse:
          "Oui, sa texture fluide s'y prête, même si le flacon de 50ml reste calibré pour un usage principalement visage compte tenu de la quantité nécessaire pour couvrir tout le corps à un indice SPF50+.",
      },
      {
        question: "Le toucher sec signifie-t-il une protection plus faible ?",
        reponse:
          "Non, l'indice SPF50+ est identique à celui des autres textures de la gamme Capital Soleil : le toucher sec décrit uniquement la sensation sur la peau après application, pas le niveau de filtration UV, qui dépend de la quantité de filtres et non de la texture.",
      },
    ],
  },
  {
    slug: "vichy-capital-soleil-spf50-matifiant-3-1-50ml",
    identite: [
      "Cette version matifiante 3 en 1 de Capital Soleil SPF50 cible spécifiquement les peaux grasses et mixtes exposées au soleil : elle protège des UV, absorbe l'excès de sébum au fil de la journée et unifie légèrement le teint, d'où l'appellation 3 en 1. Elle s'inscrit dans la même gamme Vichy que les autres Capital Soleil, avec les mêmes filtres large spectre et l'eau thermale de la marque.",
      "Le format 50ml et la finition mate en font un soin solaire visage pensé pour être porté seul ou sous un maquillage léger, sans repasser par une poudre matifiante en cours de journée.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Texture", valeur: "Matifiante, fini poudré" },
      { libelle: "Type de peau", valeur: "Grasse, mixte" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique le matin sur peau propre, en couche uniforme sur l'ensemble du visage, en dernière étape avant un maquillage éventuel. L'effet matifiant agit sur les heures qui suivent l'application mais ne remplace pas la réapplication de protection solaire toutes les deux heures en cas d'exposition prolongée, la matité et la filtration UV étant deux fonctions distinctes de la formule.",
    ],
    positionnement: [
      "Face à la crème onctueuse ou à l'émulsion toucher sec de la gamme, cette version ajoute une action anti-brillance que les peaux sèches n'ont pas besoin de rechercher. Elle convient particulièrement aux peaux grasses ou à tendance acnéique exposées au soleil, un terrain où de nombreuses crèmes solaires favorisent les points noirs. Les peaux sèches lui préféreront une texture plus nourrissante de la même gamme.",
    ],
    faq: [
      {
        question: "Peut-elle remplacer une poudre matifiante en journée ?",
        reponse:
          "Elle réduit la brillance liée au sébum au fil des heures, mais son rôle premier reste la protection solaire. Sur une peau très grasse ou en cas de forte chaleur, une poudre libre peut rester utile en complément pour un fini mat qui tient toute la journée.",
      },
      {
        question: "Convient-elle à une peau à tendance acnéique ?",
        reponse:
          "Sa texture matifiante et sa formulation pensée pour peau grasse en font une option plus adaptée qu'une crème solaire classique, souvent trop riche pour ce type de peau. Elle n'a toutefois pas vocation à traiter l'acné : elle protège du soleil sans aggraver la brillance ni obstruer visiblement les pores autant qu'une texture crème.",
      },
    ],
  },
  {
    slug: "vichy-deodorant-24h-toucher-sec-50ml",
    identite: [
      "Ce déodorant Vichy 24h Toucher Sec est un anti-transpirant en format spray, conçu pour une protection longue durée sans sensation d'humidité ni de résidu blanc sur les vêtements sombres, la promesse toucher sec que l'on retrouve dans plusieurs lignes Vichy, dont la gamme solaire. Comme les autres déodorants de la marque, il est formulé pour limiter les irritations, dans l'esprit dermo-cosmétique qui caractérise Vichy.",
      "Le format 50ml correspond à un flacon de déodorant standard, à usage quotidien sous les aisselles, après la toilette.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray" },
      { libelle: "Durée annoncée", valeur: "24h" },
      { libelle: "Fini", valeur: "Toucher sec, sans traces blanches" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique le matin sur peau propre et sèche, en pulvérisant à quelques centimètres sous chaque aisselle, sans frotter. Comme tout anti-transpirant, il agit mieux sur peau nettoyée la veille au soir plutôt que juste après la douche, le temps que la peau ait totalement séché. Éviter d'appliquer immédiatement après un rasage ou une épilation pour limiter les picotements.",
    ],
    positionnement: [
      "Face à un déodorant bille ou stick, le format spray permet une application rapide sans contact direct avec la peau, utile pour qui trouve le stick collant. Il convient à un usage quotidien standard ; pour une peau sensibilisée par un rasage ou une épilation récente, la version anti-transpirant 48h pour peau sensible de la même marque, formulée pour cet usage précis, sera mieux tolérée.",
    ],
    faq: [
      {
        question: "Ce déodorant tache-t-il les vêtements sombres ?",
        reponse:
          "Le fini toucher sec est justement pensé pour limiter les traces blanches une fois sec, contrairement à certaines formules en bille qui laissent un résidu visible. Un temps de séchage de quelques secondes après application avant de s'habiller reste recommandé pour un résultat optimal.",
      },
      {
        question: "Peut-on l'utiliser juste après une douche ?",
        reponse:
          "Oui, à condition que la peau soit totalement sèche, faute de quoi le spray adhère moins bien et la protection en pâtit. Sur peau encore humide, mieux vaut patienter quelques minutes ou sécher soigneusement la zone avant application.",
      },
    ],
  },
  {
    slug: "vichy-deodorant-anti-transpirant-48h-peau-sensible-epilee-50ml",
    identite: [
      "Ce déodorant anti-transpirant Vichy 48h est spécifiquement formulé pour les peaux sensibles ou fraîchement épilées, une zone où la plupart des déodorants classiques piquent ou irritent. La promesse de 48h de protection le distingue du 24h toucher sec de la même marque, avec une formule pensée pour limiter les sensations d'inconfort après un rasoir, une épilation à la cire ou une épilation électrique.",
      "Format spray de 50ml, il s'inscrit dans la même logique dermo-cosmétique que le reste de la gamme déodorants Vichy, appuyée sur l'eau thermale de la marque.",
    ],
    faits: [
      { libelle: "Format", valeur: "Spray" },
      { libelle: "Durée annoncée", valeur: "48h" },
      { libelle: "Cible", valeur: "Peau sensible, fraîchement épilée" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique sur peau propre et sèche, y compris juste après une épilation si la peau ne présente pas de coupure, en pulvérisant à distance sans frotter. Sa formule douce en fait une option pour une application quotidienne même sur peau réactive. En cas de rougeur ou d'irritation visible après épilation, mieux vaut attendre que la peau soit apaisée avant d'appliquer tout déodorant, y compris celui-ci.",
    ],
    positionnement: [
      "Face au 24h toucher sec de la même marque, ce déodorant privilégie la tolérance sur peau sensibilisée plutôt que le fini sec immédiat, avec une durée de protection annoncée plus longue. Il convient particulièrement après une épilation ou un rasage régulier des aisselles. Sur peau non sensible et pour un usage purement quotidien, un déodorant standard de la gamme suffit.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer immédiatement après une épilation à la cire ?",
        reponse:
          "Il est formulé pour cet usage, mais mieux vaut attendre que la peau ne présente plus de rougeur ni de sensation de chaleur, signes que les pores sont encore ouverts. Sur peau simplement lisse et calme après épilation, l'application immédiate est généralement bien tolérée.",
      },
      {
        question: "La durée de 48h signifie-t-elle qu'il faut l'appliquer un jour sur deux ?",
        reponse:
          "Non, l'usage reste quotidien : la durée annoncée correspond à la persistance de l'efficacité anti-transpirante en conditions de laboratoire, pas à une fréquence d'application recommandée. Une application chaque matin reste la pratique usuelle, comme pour tout déodorant anti-transpirant.",
      },
    ],
  },
  {
    slug: "vichy-dercos-shampooing-energisant-anti-chute-200ml",
    identite: [
      "Le Shampooing Énergisant Dercos de Vichy accompagne les traitements anti-chute de la gamme Dercos (notamment les ampoules Aminexil) sans les remplacer : c'est un shampooing complémentaire, pensé pour nettoyer le cuir chevelu en douceur sans agresser un cheveu déjà fragilisé par la chute. Il s'utilise en base de routine, avant ou en alternance avec un soin ciblé anti-chute.",
      "Le format 200ml, classique pour un shampooing, correspond à un usage régulier sur plusieurs semaines, la chute de cheveux se traitant sur la durée et non en une seule application.",
    ],
    faits: [
      { libelle: "Type", valeur: "Shampooing anti-chute, complément de traitement" },
      { libelle: "Contenance", valeur: "200 ml" },
      { libelle: "Gamme", valeur: "Dercos" },
      { libelle: "Usage", valeur: "Cuir chevelu, cheveux" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en massant le cuir chevelu du bout des doigts pour stimuler la zone sans frotter agressivement, puis se rince abondamment. Il peut s'utiliser seul en entretien courant ou en préparation d'un soin anti-chute plus concentré de la gamme Dercos, appliqué ensuite sur cuir chevelu propre. Ne remplace pas un traitement anti-chute ciblé en cas de chute importante ou prolongée.",
    ],
    positionnement: [
      "Face à un shampooing classique, il évite les tensioactifs les plus agressifs pour ne pas fragiliser davantage un cuir chevelu déjà sensibilisé par la chute. Il ne traite pas la chute à lui seul : c'est un shampooing d'accompagnement, à associer à un soin ciblé pour un effet plus marqué. En cas de chute soudaine ou importante, un avis médical reste la première étape avant tout choix de produit capillaire.",
    ],
    faq: [
      {
        question: "Ce shampooing suffit-il à arrêter la chute de cheveux ?",
        reponse:
          "Non, il nettoie le cuir chevelu sans l'agresser mais n'a pas vocation à traiter la chute à lui seul. Un shampooing agit en surface le temps du lavage puis se rince ; un résultat sur la chute de cheveux demande un soin laissé en place, comme les ampoules Aminexil de la même gamme Dercos.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Sa formule douce le permet en usage régulier, au rythme habituel de lavage de chacun. En cas de cuir chevelu très sensible, espacer légèrement les lavages ou alterner avec un soin apaisant reste une option à évaluer selon la tolérance individuelle.",
      },
    ],
  },
  {
    slug: "vichy-dercos-shampooing-ultra-apaisant-cheveux-secs-200ml",
    identite: [
      "Ce Shampooing Ultra-Apaisant Dercos de Vichy cible les cuirs chevelus sensibles associés à des cheveux secs, une combinaison fréquente qui demande un nettoyant doux et une base lavante peu détergente pour ne pas accentuer la sécheresse. Il fait partie de la ligne Dercos dédiée au confort du cuir chevelu plutôt qu'au traitement d'un problème capillaire spécifique comme les pellicules ou la chute.",
      "Le format 200ml correspond à un usage courant, en remplacement du shampooing habituel pour les personnes qui ressentent des tiraillements ou des démangeaisons du cuir chevelu associés à une chevelure sèche.",
    ],
    faits: [
      { libelle: "Type", valeur: "Shampooing apaisant" },
      { libelle: "Type de cheveux", valeur: "Secs" },
      { libelle: "Cible", valeur: "Cuir chevelu sensible" },
      { libelle: "Contenance", valeur: "200 ml" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en massant délicatement le cuir chevelu, puis se rince abondamment. Sur cheveux secs, un après-shampooing ou un masque nourrissant complète utilement le geste, ce shampooing étant centré sur le confort du cuir chevelu plutôt que sur la nutrition des longueurs et des pointes, qui restent la zone la plus sèche du cheveu.",
    ],
    positionnement: [
      "Face à un shampooing anti-pelliculaire ou anti-chute, celui-ci ne traite pas un problème capillaire précis : il apaise un cuir chevelu sensible tout en respectant des cheveux déjà secs. Il convient à un usage d'entretien régulier plutôt qu'à un traitement ciblé. En cas de pellicules visibles ou de chute marquée, un shampooing dédié à ce symptôme précis sera plus pertinent que ce soin apaisant généraliste.",
    ],
    faq: [
      {
        question: "Ce shampooing hydrate-t-il les longueurs sèches ?",
        reponse:
          "Il apaise surtout le cuir chevelu et nettoie en douceur sans assécher davantage, mais un shampooing se rince avant d'avoir pu nourrir en profondeur les longueurs. Pour les pointes sèches, un après-shampooing ou un masque laissé en place plus longtemps reste nécessaire en complément.",
      },
      {
        question: "Convient-il à un cuir chevelu à pellicules ?",
        reponse:
          "Il n'est pas formulé pour cibler les pellicules : sa vocation est d'apaiser un cuir chevelu sensible sur cheveux secs. En présence de pellicules visibles, un shampooing anti-pelliculaire dédié, souvent à base de zinc ou d'un actif antifongique, sera plus adapté à ce symptôme précis.",
      },
    ],
  },
  {
    slug: "vichy-normaderm-soin-correcteur-anti-imperfections-matifiant-50ml",
    identite: [
      "Le Soin Correcteur Anti-Imperfections Matifiant Normaderm est l'un des produits les plus connus de Vichy sur le segment peau grasse à tendance acnéique : une texture fluide et matifiante, à base d'acide salicylique, pensée pour un usage quotidien sur les zones à imperfections (boutons, points noirs, brillance). Il s'inscrit dans la gamme Normaderm, dédiée depuis longtemps aux peaux à problèmes.",
      "Le format 50ml en fait un soin de fond de routine, à appliquer matin et/ou soir sur l'ensemble du visage plutôt qu'en traitement localisé sur un seul bouton.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide salicylique" },
      { libelle: "Fini", valeur: "Matifiant" },
      { libelle: "Type de peau", valeur: "Grasse, à tendance acnéique" },
      { libelle: "Contenance", valeur: "50 ml" },
    ],
    usage: [
      "S'applique matin et soir sur peau propre, en fine couche sur l'ensemble du visage, en évitant le contour des yeux. Il peut se combiner avec un nettoyant de la même gamme Normaderm ; en revanche, l'associer à un autre exfoliant acide (rétinol, AHA/BHA à forte concentration) le même soir augmente le risque d'irritation, mieux vaut alterner les soins plutôt que les cumuler.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, ce soin cible spécifiquement les imperfections et la brillance liées à une peau grasse, au prix d'un possible effet asséchant en début d'usage. Il convient aux peaux grasses à tendance acnéique cherchant un soin quotidien plutôt qu'un traitement ponctuel intensif. Les peaux sèches ou très réactives à l'acide salicylique lui préféreront un soin apaisant, sans agent kératolytique, pour ne pas accentuer les tiraillements.",
    ],
    faq: [
      {
        question: "Ce soin fait-il disparaître les boutons du jour au lendemain ?",
        reponse:
          "Non, un soin cosmétique agit progressivement sur l'aspect de la peau avec un usage quotidien continu, pas en une application. L'acide salicylique aide à limiter l'apparition de nouvelles imperfections et à améliorer l'aspect du grain de peau sur plusieurs semaines d'utilisation régulière.",
      },
      {
        question: "Peut-on l'utiliser avec un sérum au rétinol ?",
        reponse:
          "Les deux associent des actifs exfoliants ou renouvelants, ce qui augmente le risque d'irritation en cas de cumul le même soir. Mieux vaut les alterner (l'un le matin, l'autre le soir, ou en alternance de jours) et surveiller la tolérance de la peau, surtout en début d'utilisation.",
      },
    ],
  },
  {
    slug: "yves-rocher-brume-parfumee-corps-cheveux-noix-coco-100ml",
    identite: [
      "Cette Brume Parfumée Corps et Cheveux Yves Rocher porte un accord noix de coco gourmand et chaud, formulée pour être vaporisée aussi bien sur la peau que sur les longueurs de cheveux, une double utilisation typique de ce format de brume. Il ne s'agit pas d'un parfum au sens de l'eau de toilette ou de l'eau de parfum : la concentration en parfum y est plus légère, pour un sillage discret plutôt qu'une tenue longue.",
      "Le format 100ml, courant pour ce type de produit, invite à une application libre en journée, en complément d'un parfum ou seule pour un effet fraîcheur parfumée.",
    ],
    faits: [
      { libelle: "Type", valeur: "Brume parfumée corps et cheveux" },
      { libelle: "Accord", valeur: "Noix de coco" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Zone", valeur: "Corps et cheveux" },
    ],
    usage: [
      "Se vaporise à quelques centimètres de la peau ou des longueurs de cheveux, jamais sur les racines ni le cuir chevelu pour éviter tout dessèchement. Le sillage étant léger, une application peut se renouveler en cours de journée sans risque de surcharge olfactive, contrairement à un parfum plus concentré.",
    ],
    positionnement: [
      "Face à une eau de toilette, cette brume tient moins longtemps mais s'utilise sans retenue, y compris sur les cheveux, ce qu'un parfum classique déconseille souvent à cause de l'alcool qu'il contient. Elle convient à un usage quotidien léger plutôt qu'à une occasion demandant une tenue longue. Qui cherche un sillage marqué et persistant sur la peau se tournera vers un véritable parfum plutôt que vers une brume.",
    ],
    faq: [
      {
        question: "Peut-on vraiment l'appliquer sur les cheveux ?",
        reponse:
          "Oui, c'est l'un des usages prévus par ce format de brume, dont la formule est pensée pour ne pas agresser la fibre capillaire contrairement à un parfum alcoolique classique. Il vaut mieux viser les longueurs plutôt que les racines et le cuir chevelu pour ne pas les dessécher.",
      },
      {
        question: "Cette brume peut-elle remplacer un parfum ?",
        reponse:
          "Elle en tient lieu pour un usage quotidien léger, mais sa tenue est plus courte et son sillage plus discret qu'une eau de toilette ou une eau de parfum. Pour une occasion demandant une tenue longue sur plusieurs heures, un vrai parfum reste plus adapté.",
      },
    ],
  },
  {
    slug: "zorah-retinol-boost-serum-30ml",
    identite: [
      "Ce sérum de la marque marocaine Zorah associe le rétinol, actif de référence en cosmétique anti-âge pour stimuler le renouvellement cellulaire visible de la peau, à une base souvent formulée autour de l'huile d'argan, ingrédient signature de la maison. Le format sérum, plus concentré qu'une crème, s'utilise en petite quantité avant le soin hydratant du soir.",
      "Le rétinol pouvant sensibiliser la peau en début d'usage, ce type de sérum s'adresse en priorité aux peaux déjà habituées à un actif exfoliant ou renouvelant, plutôt qu'à une première routine anti-âge.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Rétinol" },
      { libelle: "Format", valeur: "Sérum" },
      { libelle: "Moment d'application", valeur: "Soir" },
      { libelle: "Contenance", valeur: "30 ml" },
    ],
    usage: [
      "S'applique le soir uniquement, sur peau propre et sèche, en petite quantité (quelques gouttes suffisent pour tout le visage), suivi d'une crème hydratante. Le rétinol rend la peau plus sensible au soleil : une protection solaire quotidienne est indispensable les jours suivant son usage. Éviter de le combiner le même soir avec un exfoliant acide (AHA/BHA) pour ne pas cumuler les irritations.",
    ],
    positionnement: [
      "Face à une crème anti-âge classique à base de peptides ou d'acide hyaluronique, ce sérum au rétinol vise un renouvellement cutané plus actif, avec une tolérance qui demande une introduction progressive. Il convient aux peaux déjà rodées aux actifs exfoliants, cherchant un soin ciblé sur les signes de l'âge. Les peaux sensibles ou qui découvrent tout juste le rétinol devraient commencer par une fréquence réduite avant de passer à un usage quotidien.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce sérum tous les soirs dès le début ?",
        reponse:
          "Il vaut mieux introduire le rétinol progressivement, à raison d'une à deux applications par semaine les premières semaines, puis augmenter la fréquence selon la tolérance de la peau. Une introduction trop rapide expose à des rougeurs, tiraillements ou une desquamation visible.",
      },
      {
        question: "Ce sérum peut-il s'utiliser en été ?",
        reponse:
          "Il s'applique le soir, ce qui limite l'exposition directe du rétinol au soleil, mais la peau reste plus sensible aux UV les jours suivants : une protection solaire quotidienne le matin est indispensable en période d'utilisation, été comme hiver.",
      },
    ],
  },
  {
    slug: "bioderma-atoderm-sos-spray-200ml",
    identite: [
      "Bioderma Atoderm SOS Spray est un soin apaisant d'urgence pour les peaux très sèches, atopiques ou sujettes aux tiraillements et démangeaisons, à vaporiser directement sur les zones inconfortables. Il fait partie de la ligne Atoderm de Bioderma, référence en dermo-cosmétique sur le segment de la peau sèche et atopique, utilisée aussi bien chez l'adulte que chez l'enfant selon la notice.",
      "Le format spray 200ml permet une application sans contact des mains, utile sur une peau irritée qu'on préfère ne pas frotter, et se prête à un usage sur de grandes surfaces du corps comme sur des zones plus localisées.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Apaisant d'urgence, peau très sèche et atopique" },
      { libelle: "Format", valeur: "Spray, sans rinçage" },
      { libelle: "Zone", valeur: "Corps, zones inconfortables" },
      { libelle: "Contenance", valeur: "200 ml" },
    ],
    usage: [
      "Se vaporise directement sur les zones sèches, tiraillées ou qui démangent, sans nécessité de masser ni de rincer. Peut s'utiliser plusieurs fois par jour en cas d'inconfort marqué, en complément d'une crème hydratante de fond appliquée matin et soir. Ne remplace pas un avis médical en cas de poussée d'eczéma importante ou de peau lésée.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, ce spray se distingue par son usage rapide et ciblé, pensé pour un soulagement immédiat plutôt que pour une hydratation de fond au long cours. Il convient bien en complément d'une routine Atoderm, notamment en cas de poussée de sécheresse ou d'irritation ponctuelle. Pour une hydratation quotidienne de base sans inconfort particulier, une crème ou un lait corps de la même gamme reste plus adapté qu'un usage systématique du spray.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Sa formule apaisante et sans rinçage le permet sur les zones sèches du visage comme du corps, sauf mention contraire sur l'emballage. Éviter le contact direct avec les yeux lors de la vaporisation et privilégier une application à distance du visage.",
      },
      {
        question: "Combien de fois par jour peut-on l'appliquer ?",
        reponse:
          "Il peut être utilisé plusieurs fois par jour selon l'inconfort ressenti, sans limite stricte contrairement à un soin traitant, puisqu'il s'agit d'un geste apaisant sans rinçage. En cas de démangeaisons persistantes malgré des applications répétées, un avis médical reste recommandé.",
      },
    ],
  },
  {
    slug: "bioderma-crealine-h2o-500ml",
    identite: [
      "Connue aujourd'hui sous le nom de Sensibio H2O, cette eau micellaire Bioderma (historiquement Créaline H2O) est l'une des références du marché sur le segment peau sensible : une formule sans rinçage, développée avec une technologie biomimétique proche du film hydrolipidique de la peau, pour nettoyer et démaquiller sans altérer sa barrière naturelle. Elle est conçue pour convenir même aux peaux les plus réactives, y compris autour des yeux.",
      "Le format 500ml, le plus grand de la gamme, correspond à un usage biquotidien régulier sur plusieurs mois, cohérent avec sa réputation de produit d'entretien courant plutôt que de soin ponctuel.",
    ],
    faits: [
      { libelle: "Type", valeur: "Eau micellaire monophasique" },
      { libelle: "Cible", valeur: "Peau sensible, yeux compris" },
      { libelle: "Rinçage", valeur: "Sans rinçage" },
      { libelle: "Contenance", valeur: "500 ml" },
    ],
    usage: [
      "S'applique matin et soir sur un coton, en passant délicatement sur le visage et les yeux sans frotter, en renouvelant le coton jusqu'à ce qu'il ressorte propre. Aucun rinçage n'est nécessaire. Sur un maquillage waterproof, un second passage ou un démaquillant biphasique dédié aux yeux reste souvent nécessaire pour un retrait complet.",
    ],
    positionnement: [
      "Face aux eaux micellaires plus récentes qui misent sur des actifs supplémentaires (acide hyaluronique, niacinamide), celle-ci reste volontairement minimaliste : sa formule courte est justement ce qui la rend adaptée aux peaux les plus intolérantes. Elle convient à un usage quotidien de base sur peau sensible, allergique ou réactive. Pour une peau qui tolère bien les actifs et cherche un soin en plus du nettoyage, une eau micellaire enrichie d'une autre gamme peut apporter davantage.",
    ],
    faq: [
      {
        question: "Cette eau micellaire retire-t-elle un maquillage waterproof ?",
        reponse:
          "Elle nettoie efficacement un maquillage léger et non waterproof, mais comme toute eau micellaire monophasique, elle reste limitée sur un mascara ou un eye-liner résistant à l'eau. Un démaquillant biphasique dédié aux yeux est alors plus adapté pour un retrait complet sans frotter.",
      },
      {
        question: "Pourquoi ce produit est-il recommandé pour les peaux allergiques ?",
        reponse:
          "Sa formule, volontairement réduite au minimum d'ingrédients nécessaires et développée pour respecter le film protecteur naturel de la peau, limite le risque de réaction par rapport à des formules plus chargées en actifs ou en parfum. C'est ce qui explique sa réputation sur les peaux sensibles et réactives depuis de nombreuses années.",
      },
    ],
  },
  {
    slug: "caudalie-vinoperfect-mousse-micro-peeling-eclat-100ml",
    identite: [
      "La Mousse Micro-Peeling Éclat Vinoperfect de Caudalie est un nettoyant exfoliant doux, à base d'acides de fruits, conçu pour affiner le grain de peau et préparer le teint à recevoir les soins anti-taches de la gamme Vinoperfect, construite autour de la viniférine, un actif dérivé de la vigne développé par Caudalie. Elle se distingue d'un gommage mécanique classique par une action chimique plus douce, sans grains abrasifs.",
      "Le format 100ml et sa texture mousse en font un geste de nettoyage à intégrer dans la routine, en alternative ponctuelle au nettoyant quotidien plutôt qu'en remplacement complet.",
    ],
    faits: [
      { libelle: "Type", valeur: "Nettoyant exfoliant, micro-peeling" },
      { libelle: "Gamme", valeur: "Vinoperfect (éclat, taches)" },
      { libelle: "Texture", valeur: "Mousse" },
      { libelle: "Contenance", valeur: "100 ml" },
    ],
    usage: [
      "S'applique sur peau humide, en massant délicatement le visage pour faire mousser, puis se rince à l'eau claire. Un usage de deux à trois fois par semaine suffit, un usage quotidien pouvant sensibiliser la peau du fait de son action exfoliante. À éviter le même jour qu'un autre exfoliant (gommage mécanique, sérum acide) pour ne pas cumuler les irritations.",
    ],
    positionnement: [
      "Face à un nettoyant doux classique, cette mousse ajoute une action exfoliante que les peaux ternes ou irrégulières peuvent rechercher pour préparer le teint aux soins ciblés de la gamme Vinoperfect. Elle convient à un usage complémentaire, pas quotidien. Les peaux sensibles ou déjà exposées à d'autres actifs exfoliants devraient l'introduire progressivement pour évaluer leur tolérance avant d'en faire un geste régulier.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Non, un usage de deux à trois fois par semaine est plus adapté : l'action exfoliante, même douce, peut sensibiliser la peau en cas d'utilisation quotidienne. Les autres jours, un nettoyant classique non exfoliant suffit pour l'entretien courant du visage.",
      },
      {
        question: "Faut-il l'associer au sérum Vinoperfect pour un résultat visible ?",
        reponse:
          "Elle prépare le teint et affine le grain de peau, mais l'action ciblée sur les taches revient principalement au sérum de la gamme, plus concentré en viniférine. Utilisée seule, la mousse reste un geste de nettoyage exfoliant, pas un soin anti-taches à part entière.",
      },
    ],
  },
  {
    slug: "abib-collagen-eye-patch-jericho-rose-jelly-60-patches",
    identite: [
      "Ces patchs contour des yeux Abib, de texture jelly (gel semi-solide plus épais qu'un hydrogel classique), s'appliquent directement sous les yeux pour un soin ciblé et ponctuel de cette zone fine et sujette aux marques de fatigue. La formule associe du collagène, actif courant en soin contour des yeux pour son effet repulpant et lissant visible à court terme, à un parfum de rose (Jericho Rose) caractéristique de cette référence de la marque coréenne Abib.",
      "Le lot de 60 patchs correspond à 30 applications (une paire par usage), un format généreux pour un usage régulier plutôt qu'occasionnel.",
    ],
    faits: [
      { libelle: "Type", valeur: "Patchs contour des yeux, texture jelly" },
      { libelle: "Actif", valeur: "Collagène" },
      { libelle: "Parfum", valeur: "Rose" },
      { libelle: "Conditionnement", valeur: "60 patchs (30 applications)" },
    ],
    usage: [
      "S'appliquent sur une peau propre, sous chaque œil, en lissant délicatement du coin interne vers le coin externe. Laisser poser 15 à 20 minutes puis retirer et masser le reste de sérum non absorbé sur la zone. Se conservent de préférence au réfrigérateur, la fraîcheur renforçant l'effet décongestionnant recherché sur cette zone, notamment le matin.",
    ],
    positionnement: [
      "Face à une simple crème contour des yeux, ces patchs offrent un contact prolongé et concentré, utile avant un événement ou en cas de fatigue visible le matin, mais restent un soin ponctuel plutôt qu'un geste quotidien de fond. Ils conviennent à qui cherche un effet rapide et visible sur les cernes ou les poches légères. Pour une routine anti-âge de fond au quotidien, une crème contour des yeux appliquée matin et soir reste plus adaptée que des patchs réservés à un usage occasionnel.",
    ],
    faq: [
      {
        question: "Peut-on les utiliser tous les jours ?",
        reponse:
          "Rien ne l'interdit formellement, mais leur format concentré et leur coût à l'usage en font plutôt un soin ponctuel, réservé aux matins de fatigue marquée ou avant un événement, plutôt qu'un geste quotidien remplaçant une crème contour des yeux classique.",
      },
      {
        question: "Faut-il les conserver au réfrigérateur ?",
        reponse:
          "Ce n'est pas obligatoire mais c'est recommandé : le froid renforce l'effet décongestionnant sur les poches et accentue la sensation de fraîcheur à l'application, particulièrement appréciable le matin sur un contour de l'œil marqué par la fatigue.",
      },
    ],
  },
  {
    slug: "anua-niacinamide-10-txa-4-serum-niacinamide-10-txa-4",
    identite: [
      "Ce sérum Anua associe deux actifs éclaircissants complémentaires à des dosages précis affichés dans le nom même du produit : la niacinamide à 10 %, qui aide à atténuer visuellement les taches et à uniformiser le teint, et l'acide tranexamique (TXA) à 4 %, un actif plus récent en cosmétique, réputé pour cibler les rougeurs et l'hyperpigmentation liée à l'inflammation. La marque coréenne Anua s'est fait connaître sur ce type de formule concentrée et transparente sur ses dosages.",
      "C'est un sérum de routine ciblée, à intégrer après le nettoyage et avant la crème hydratante, plutôt qu'un soin de fond neutre.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide 10%" },
      { libelle: "Actif secondaire", valeur: "Acide tranexamique (TXA) 4%" },
      { libelle: "Format", valeur: "Sérum" },
      { libelle: "Cible", valeur: "Taches, teint irrégulier" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau propre et sèche, après un tonique éventuel et avant la crème hydratante, en quelques gouttes réparties sur tout le visage. La niacinamide à forte concentration peut provoquer des picotements passagers chez certaines peaux en début d'usage ; en cas d'inconfort marqué, réduire la fréquence à une application par jour avant d'augmenter progressivement.",
    ],
    positionnement: [
      "Face à un sérum à la vitamine C, plus connu sur l'éclat et les taches, ce sérum niacinamide et TXA cible davantage les rougeurs et les marques post-inflammatoires (après un bouton, par exemple), un mécanisme d'action différent. Il convient aux peaux cherchant à uniformiser un teint marqué par des taches ou des rougeurs résiduelles. Les peaux très sensibles à la niacinamide concentrée, qui ressentent des picotements persistants, devraient réduire la fréquence ou se tourner vers une concentration plus basse.",
    ],
    faq: [
      {
        question: "Peut-on l'associer à une crème au rétinol ?",
        reponse:
          "La niacinamide se combine en général bien avec le rétinol, les deux agissant sur des mécanismes différents. Il est toutefois conseillé de les appliquer à des moments distincts (l'un le matin, l'autre le soir) ou d'introduire progressivement l'association pour évaluer la tolérance de la peau, en particulier en cas de peau réactive.",
      },
      {
        question: "Combien de temps avant de voir un effet sur les taches ?",
        reponse:
          "Comme pour tout actif éclaircissant, l'amélioration de l'aspect du teint et des taches s'observe progressivement sur plusieurs semaines d'usage régulier, pas en quelques jours. La régularité d'application, associée à une protection solaire quotidienne, conditionne largement le résultat visible.",
      },
    ],
  },
  {
    slug: "anua-airy-sun-cream-spf-50",
    identite: [
      "L'Airy Sun Cream SPF50+ d'Anua est une protection solaire visage à texture très légère, caractéristique des formules coréennes pensées pour ne pas alourdir la peau ni laisser de film blanc, même sous maquillage. Le nom airy (aérien) décrit cette texture fluide, rapidement absorbée, qui tranche avec les crèmes solaires occidentales souvent plus épaisses.",
      "Comme la plupart des écrans solaires coréens, elle s'utilise en dernière étape d'une routine de soin, avant le maquillage, et convient à un usage quotidien sur peau normale à mixte cherchant une protection confortable au porter.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "Fluide, légère (airy)" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Origine de formule", valeur: "Cosmétique coréenne" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, sur peau propre, en couche suffisante pour atteindre la protection annoncée, une quantité trop fine réduisant l'indice réel de protection. Elle peut se porter seule ou sous un maquillage léger. Comme toute protection solaire, une réapplication toutes les deux heures reste nécessaire en cas d'exposition prolongée, ce que sa texture légère ne dispense pas de faire.",
    ],
    positionnement: [
      "Face aux crèmes solaires plus riches du marché, cette texture légère convient particulièrement aux peaux mixtes à grasses ou à qui n'aime pas la sensation d'une protection solaire épaisse sous le maquillage. Elle s'impose comme une option quotidienne plutôt qu'une protection intensive pour une exposition prolongée en plein soleil, où une texture plus résistante à l'eau et à la transpiration peut être préférable.",
    ],
    faq: [
      {
        question: "Cette texture légère protège-t-elle aussi bien qu'une crème solaire épaisse ?",
        reponse:
          "L'indice de protection dépend de la quantité de filtres UV et de la façon dont le produit est appliqué, pas de l'épaisseur de la texture. Une application en couche suffisante avec cette crème légère offre la même protection SPF50+ annoncée qu'une texture plus riche appliquée dans les mêmes conditions.",
      },
      {
        question: "Peut-on l'appliquer sous le maquillage sans effet de peluche ?",
        reponse:
          "Sa texture fluide et rapidement absorbée est justement pensée pour cet usage, un point sur lequel les écrans solaires coréens sont réputés. Il reste utile de laisser une à deux minutes de pose avant d'appliquer une base ou un fond de teint pour éviter tout effet de boulochage.",
      },
    ],
  },
];
