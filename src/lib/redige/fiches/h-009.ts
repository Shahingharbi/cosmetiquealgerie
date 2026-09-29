import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "papulex-creme-oil-free-40ml",
    identite: [
      "La crème Oil-Free de Papulex est un soin hydratant pensé pour les peaux grasses et sujettes à l'acné, avec une texture fluide non grasse qui ne laisse pas de film après application. Sa formule s'appuie sur le gluconolactone, un actif keratolytique doux caractéristique de la marque, qui aide à limiter la formation des points noirs et à assainir visuellement le grain de peau sans dessécher.",
      "Non comédogène, elle s'utilise en soin hydratant quotidien, en complément d'un traitement anti-imperfections plus ciblé, sur une peau qui a besoin d'eau sans surcharge de corps gras.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Gluconolactone (PHA)" },
      { libelle: "Texture", valeur: "Fluide non grasse" },
      { libelle: "Type de peau", valeur: "Peau grasse à imperfections" },
      { libelle: "Usage", valeur: "Hydratation quotidienne matin et soir" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, en couche fine sur l'ensemble du visage, y compris sur les zones traitées par un soin anti-imperfections ciblé. Sa texture non grasse permet de la porter sous le maquillage sans effet luisant. Elle se combine bien avec un nettoyant doux de la même gamme, à éviter avec des soins très asséchants appliqués en excès le même jour, au risque d'irriter une peau déjà fragilisée.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes classiques du rayon, elle se distingue par une formule pensée pour ne pas nourrir les imperfections, là où une crème riche généraliste peut alourdir une peau grasse. Elle ne remplace pas un soin ciblé sur un bouton inflammatoire isolé, pour lequel un actif plus concentré reste nécessaire en complément.",
    ],
    faq: [
      {
        question: "Cette crème suffit-elle à traiter l'acné ?",
        reponse: "Non, elle hydrate et limite l'effet gras sans constituer un traitement anti-acné à elle seule. Sur une acné installée, elle s'utilise en complément d'un soin ciblé comme la lotion ou l'Isocorrexion de la même gamme, pas en remplacement.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse: "Oui, sa texture fluide et non grasse pénètre rapidement et laisse une base lisse, compatible avec l'application d'un fond de teint ou d'une BB crème juste après.",
      },
    ],
  },
  {
    slug: "papulex-gel-nettoyant-moussant-150ml",
    identite: [
      "Le gel nettoyant moussant Papulex est un nettoyant quotidien pensé pour les peaux grasses ou à tendance acnéique, avec une formule qui mousse au contact de l'eau sans agresser la barrière cutanée. Il élimine l'excès de sébum, les résidus de maquillage et les impuretés de la journée tout en respectant le confort de la peau, un point important sur une peau déjà fragilisée par des soins asséchants.",
      "Il s'inscrit en première étape d'une routine anti-imperfections Papulex, avant l'application d'une lotion ou d'un soin ciblé de la même gamme.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Type de peau", valeur: "Peau grasse à tendance acnéique" },
      { libelle: "Usage", valeur: "Nettoyage quotidien matin et soir" },
      { libelle: "Gamme", valeur: "Papulex peaux à imperfections" },
    ],
    usage: [
      "S'applique sur peau mouillée, en faisant mousser une noisette de produit entre les mains avant de masser le visage puis de rincer à l'eau tiède. Un usage biquotidien, matin et soir, convient à la plupart des peaux grasses. Il précède l'application d'une lotion ou d'un soin ciblé de la même gamme, sans qu'il soit nécessaire de démaquiller au préalable pour un maquillage léger.",
    ],
    positionnement: [
      "Face aux nettoyants moussants classiques du rayon, il se distingue par une formule pensée pour ne pas décaper une peau déjà traitée par des actifs asséchants. Il reste un nettoyant doux plutôt qu'un soin exfoliant : sur une peau à points noirs marqués, un gommage ponctuel en complément reste utile.",
    ],
    faq: [
      {
        question: "Ce gel dessèche-t-il la peau ?",
        reponse: "Sa formule est pensée pour nettoyer sans décaper, ce qui limite la sensation de tiraillement après rinçage comparé à un savon classique. Sur une peau déjà très sensibilisée par un traitement dermatologique, l'avis du prescripteur reste utile pour ajuster la fréquence d'utilisation.",
      },
      {
        question: "Peut-il remplacer un démaquillant ?",
        reponse: "Il élimine un maquillage léger, mais un démaquillant dédié reste préférable avant un maquillage couvrant ou waterproof, pour un nettoyage complet sans frotter excessivement la peau.",
      },
    ],
  },
  {
    slug: "papulex-isocorrexion-50ml",
    identite: [
      "Isocorrexion est le soin de Papulex dédié aux marques laissées par l'acné une fois les boutons résorbés. Sa texture fluide cible les taches pigmentaires post-inflammatoires, un souci fréquent sur peau mate ou foncée où ces marques mettent particulièrement longtemps à s'estomper. Il s'utilise en complément d'un traitement anti-acné actif, une fois l'inflammation calmée, pour aider à uniformiser visuellement le teint sur la durée.",
      "Il s'inscrit dans la gamme Papulex dédiée aux peaux à imperfections, aux côtés du gel nettoyant et de la lotion de la même ligne.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe éclaircissant ciblé" },
      { libelle: "Texture", valeur: "Fluide" },
      { libelle: "Usage", valeur: "Marques post-acné" },
      { libelle: "Type de peau", valeur: "Peau à imperfections avec marques résiduelles" },
    ],
    usage: [
      "S'applique en fine couche sur les marques résiduelles, une fois la lésion inflammatoire cicatrisée, en évitant les boutons encore actifs. Un usage quotidien sur plusieurs semaines est nécessaire pour juger de l'effet, l'atténuation d'une marque pigmentaire étant un processus lent. Une protection solaire quotidienne renforce son action, l'exposition au soleil ayant tendance à fixer ces marques plus durablement.",
    ],
    positionnement: [
      "Contrairement aux crèmes anti-imperfections classiques du rayon, centrées sur les boutons actifs, Isocorrexion cible spécifiquement la trace laissée après leur disparition. Il ne remplace pas un traitement de fond contre l'acné active, pour laquelle la lotion ou la crème oil-free de la même gamme restent plus indiquées.",
    ],
    faq: [
      {
        question: "Isocorrexion atténue-t-il vraiment les marques d'acné ?",
        reponse: "Il aide à atténuer visuellement les marques pigmentaires résiduelles avec un usage régulier, sans agir en une seule application. Le délai de résultat varie selon l'ancienneté et la profondeur de la marque, certaines nécessitant plusieurs mois d'application continue.",
      },
      {
        question: "Peut-on l'utiliser sur un bouton encore inflammatoire ?",
        reponse: "Il est plutôt pensé pour la marque résiduelle une fois l'inflammation calmée. Sur un bouton actif, un soin anti-imperfections ciblé de la gamme reste plus approprié avant de passer à ce soin correcteur.",
      },
    ],
  },
  {
    slug: "papulex-lotion-125ml",
    identite: [
      "La lotion Papulex est un soin nettoyant et purifiant sans rinçage, destiné aux peaux grasses ou à tendance acnéique. Sa texture liquide s'applique à l'aide d'un coton pour compléter le nettoyage du visage, retirer les derniers résidus d'impuretés et resserrer visuellement l'aspect des pores dilatés. Sans alcool desséchant, elle s'intègre dans la routine quotidienne juste après le gel nettoyant de la même gamme, avant l'application d'un soin hydratant ou ciblé.",
      "Elle vise un teint plus net au fil des semaines, sur une peau à imperfections.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Lotion sans rinçage" },
      { libelle: "Type de peau", valeur: "Peau grasse à imperfections" },
      { libelle: "Usage", valeur: "Étape tonique après le nettoyage" },
      { libelle: "Gamme", valeur: "Papulex peaux à imperfections" },
    ],
    usage: [
      "S'applique matin et soir sur un coton, en passant sur l'ensemble du visage après le nettoyage, sans rinçage. Elle précède l'application d'un soin hydratant ou d'un traitement ciblé de la même gamme. Un usage régulier sur plusieurs semaines permet de mieux juger son effet purifiant sur l'aspect du grain de peau.",
    ],
    positionnement: [
      "Face aux lotions toniques classiques, souvent parfumées ou alcoolisées, elle se positionne comme une étape complémentaire pensée pour ne pas agresser une peau déjà sensibilisée par un traitement anti-acné. Elle ne remplace pas un nettoyant, dont le rôle reste d'éliminer l'essentiel des impuretés avant son passage.",
    ],
    faq: [
      {
        question: "Cette lotion pique-t-elle à l'application ?",
        reponse: "Sa formule sans alcool est pensée pour limiter les sensations de picotement comparé à une lotion tonique classique, ce qui la rend adaptée à une peau déjà fragilisée par un traitement anti-imperfections.",
      },
      {
        question: "Faut-il rincer après application ?",
        reponse: "Non, elle s'utilise sans rinçage, directement après le nettoyage du visage, avant l'application du soin hydratant ou ciblé suivant dans la routine.",
      },
    ],
  },
  {
    slug: "paula-s-choice-25-aha-2-bha-exfoliant-peel",
    identite: [
      "Ce peel exfoliant de Paula's Choice combine une forte concentration d'AHA, principalement de l'acide glycolique, à 2% de BHA (acide salicylique), pour un geste d'exfoliation intense à raison d'une à deux fois par semaine. Sa texture gel s'applique en couche fine et se laisse poser un temps limité avant rinçage, contrairement à un sérum exfoliant du quotidien. Il vise à affiner le grain de peau, atténuer l'aspect terne et lisser visuellement les textures irrégulières.",
      "Réservé aux peaux déjà habituées aux acides exfoliants, il ne s'adresse pas à une peau sensible ou débutante sur ce type de soin.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA (acide glycolique) + 2% BHA" },
      { libelle: "Texture", valeur: "Gel peel à rincer" },
      { libelle: "Usage", valeur: "1 à 2 fois par semaine" },
      { libelle: "Type de peau", valeur: "Peau habituée aux exfoliants, non sensible" },
    ],
    usage: [
      "S'applique en couche fine sur peau nettoyée et sèche, en évitant le contour des yeux, puis se laisse poser quelques minutes selon la tolérance avant rinçage abondant à l'eau tiède. Une à deux applications par semaine suffisent, jamais en usage quotidien. Une protection solaire est indispensable les jours suivants, la peau étant temporairement plus sensible au soleil après ce type de peel.",
    ],
    positionnement: [
      "Face aux sérums exfoliants du quotidien du même rayon, ce peel se distingue par une concentration bien supérieure, réservée à un usage hebdomadaire ponctuel plutôt qu'à une routine journalière. Il ne convient pas à une peau réactive, à une rosacée ou à une peau qui découvre tout juste les acides exfoliants, pour lesquelles une concentration plus faible et progressive est nécessaire.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse: "Non, sa forte concentration en acides le réserve à un usage hebdomadaire, une à deux fois selon la tolérance de la peau. Un usage quotidien exposerait à une irritation et une sensibilisation excessive de la barrière cutanée.",
      },
      {
        question: "Peut-on le combiner avec un rétinol ?",
        reponse: "Il est déconseillé d'associer ce peel et un rétinol le même soir, le cumul augmentant fortement le risque d'irritation. Il est préférable d'alterner les soirs ou d'espacer les deux actifs de plusieurs jours.",
      },
    ],
  },
  {
    slug: "paulas-choice-2-bha-liquid-exfoliant-118ml",
    identite: [
      "Le 2% BHA Liquid Exfoliant de Paula's Choice est un exfoliant liquide à l'acide salicylique, pensé pour un usage régulier plutôt qu'occasionnel. Sa texture liquide, à appliquer sur un coton ou directement dans les mains, pénètre les pores et aide à dissoudre l'excès de sébum et les cellules mortes qui les obstruent, un mécanisme utile sur les peaux à points noirs et à texture irrégulière.",
      "Contrairement à un gommage physique, il agit en profondeur dans le pore sans grain abrasif, ce qui en fait une référence installée du rayon exfoliant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide salicylique 2% (BHA)" },
      { libelle: "Texture", valeur: "Liquide" },
      { libelle: "Usage", valeur: "Application quotidienne ou tous les deux soirs" },
      { libelle: "Applicateur", valeur: "Coton ou doigts" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée et sèche, à l'aide d'un coton ou des doigts, sans rinçage. Une utilisation quotidienne convient à la plupart des peaux une fois la tolérance établie, en commençant par un soir sur deux. Il se combine mal avec un rétinol ou un autre exfoliant fort appliqué le même soir, au risque d'irriter une peau déjà sollicitée.",
    ],
    positionnement: [
      "Face aux exfoliants physiques à grains du rayon, il agit chimiquement et en profondeur dans le pore, ce qui le rend plus pertinent sur une peau à points noirs ou à texture irrégulière. Sur une peau très sèche ou déjà fragilisée par d'autres actifs, une introduction progressive est nécessaire pour éviter tiraillements et irritation.",
    ],
    faq: [
      {
        question: "Faut-il rincer après application ?",
        reponse: "Non, il s'utilise sans rinçage et s'intègre dans la routine avant la crème hydratante du soir, comme un sérum classique.",
      },
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse: "Un usage biquotidien est possible une fois la tolérance bien établie, mais la plupart des utilisateurs commencent par une application le soir uniquement, avant d'augmenter progressivement la fréquence selon la réaction de la peau.",
      },
    ],
  },
  {
    slug: "paulas-choice-2-bha-liquid-exfoliant-30ml",
    identite: [
      "Ce format compact du 2% BHA Liquid Exfoliant de Paula's Choice reprend la même formule à l'acide salicylique que le grand flacon, dans un contenant réduit. Sa texture liquide pénètre les pores pour aider à dissoudre l'excès de sébum et les cellules mortes qui les obstruent, un geste utile sur une peau à points noirs et à texture irrégulière. Le format réduit convient à un usage d'essai avant d'investir dans un plus grand flacon, ou à un usage nomade en voyage.",
      "Il s'inscrit dans une routine anti-imperfections, en complément d'un nettoyant adapté aux peaux à tendance acnéique.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide salicylique 2% (BHA)" },
      { libelle: "Texture", valeur: "Liquide" },
      { libelle: "Usage", valeur: "Application le soir sur peau nettoyée" },
      { libelle: "Applicateur", valeur: "Coton ou doigts" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée et sèche, à l'aide d'un coton ou des doigts, sans rinçage, en commençant par un soir sur deux pour évaluer la tolérance. Le petit format s'épuise rapidement en cas d'usage quotidien sur l'ensemble du visage, ce qui en fait surtout un format de découverte ou d'appoint en voyage.",
    ],
    positionnement: [
      "Face au grand flacon de la même référence, ce format séduit par sa taille de voyage, sans différence de formule. Pour un usage régulier sur plusieurs mois, le grand flacon reste plus économique à l'usage une fois la routine adoptée.",
    ],
    faq: [
      {
        question: "La formule est-elle différente du grand format ?",
        reponse: "Non, la formule à 2% d'acide salicylique est identique, seul le contenant change. Ce format permet de tester le produit avant de passer à un plus grand flacon si la peau le tolère bien.",
      },
      {
        question: "Ce format suffit-il pour plusieurs mois ?",
        reponse: "Sur un usage quotidien de l'ensemble du visage, ce petit flacon s'épuise en quelques semaines. Il convient mieux à un usage d'appoint, ciblé sur les zones à imperfections, ou à un format de voyage en complément du grand flacon.",
      },
    ],
  },
  {
    slug: "petit-marseillais-gel-douche-fleur-tiare-250ml",
    identite: [
      "Ce gel douche Le Petit Marseillais à la fleur de tiaré associe un nettoyage doux du corps à une note florale et sucrée caractéristique de cette fleur polynésienne. Sa texture gel moussante convient à un usage quotidien sous la douche, pour toute la famille. La marque construit sa gamme sur des extraits végétaux et des senteurs identifiées, plutôt que sur des actifs ciblés, ce qui en fait un produit d'hygiène courante autant qu'un plaisir olfactif au quotidien.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Parfum", valeur: "Fleur de tiaré" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Usage", valeur: "Douche quotidienne" },
    ],
    usage: [
      "S'applique sur peau mouillée, une noisette dans le creux de la main ou sur un gant de toilette, à faire mousser avant de rincer abondamment. Il convient à un usage quotidien pour toute la famille. Sur une peau qui tire après la douche, notamment en cas d'eau calcaire, un lait corps appliqué ensuite complète bien le geste.",
    ],
    positionnement: [
      "Face aux gels douche neutres ou pharmaceutiques du rayon, celui-ci mise sur une note florale reconnaissable plutôt que sur une liste d'actifs apaisants ciblés. Il convient moins à une peau très sèche ou réactive aux parfums, pour laquelle une formule surgras ou sans parfum reste plus prudente au quotidien.",
    ],
    faq: [
      {
        question: "Ce gel douche convient-il aux peaux sensibles ?",
        reponse: "Il est formulé pour un usage quotidien standard, mais reste parfumé : sur une peau qui réagit facilement aux fragrances, un gel douche sans parfum ou dermatologique sera généralement mieux toléré.",
      },
      {
        question: "Peut-on l'utiliser pour les cheveux ?",
        reponse: "Il est conçu pour le corps ; un shampooing dédié reste préférable pour les cheveux, un gel douche pouvant assécher les longueurs s'il est utilisé régulièrement en substitut.",
      },
    ],
  },
  {
    slug: "petit-marseillais-gel-douche-mandarine-citron-vert-bio-250ml",
    identite: [
      "Ce gel douche Le Petit Marseillais associe la mandarine et le citron vert dans une formule certifiée bio, pour une note fraîche et acidulée sous la douche. Sa texture gel moussante nettoie le corps au quotidien sans laisser de film gras, avec une formulation qui répond au cahier des charges de la certification biologique revendiquée sur l'emballage. Il s'adresse à qui recherche un nettoyage courant associé à des ingrédients d'origine contrôlée.",
      "Son profil d'agrumes en fait un choix adapté à une utilisation matinale, pour un réveil olfactif énergisant.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Parfum", valeur: "Mandarine et citron vert" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Sans parfum", valeur: "Non, formule certifiée bio parfumée" },
    ],
    usage: [
      "S'applique sur peau mouillée, en faisant mousser une noisette de produit avant de rincer abondamment à l'eau claire. Sa note d'agrumes en fait un choix apprécié le matin, pour un réveil sensoriel avant de démarrer la journée. Il convient à un usage quotidien pour toute la famille.",
    ],
    positionnement: [
      "Face aux gels douche aux agrumes classiques du rayon, il se distingue par sa certification bio, un critère qui pèse pour qui privilégie une origine contrôlée des ingrédients. Il reste un gel douche parfumé standard, moins adapté à une peau très réactive aux fragrances qu'une formule dermatologique sans parfum.",
    ],
    faq: [
      {
        question: "La certification bio concerne-t-elle toute la formule ?",
        reponse: "Elle s'applique selon le cahier des charges revendiqué sur l'emballage, généralement une part définie d'ingrédients issus de l'agriculture biologique, et non la totalité de la composition, comme c'est l'usage pour ce type de certification cosmétique.",
      },
      {
        question: "Ce gel douche est-il adapté aux peaux sèches ?",
        reponse: "Sa formule courante convient à un usage quotidien standard, mais sur une peau très sèche, un lait corps appliqué après la douche reste recommandé pour compenser l'effet asséchant naturel de tout gel moussant.",
      },
    ],
  },
  {
    slug: "petit-marseillais-gel-douche-miel-provence-bio-250ml",
    identite: [
      "Ce gel douche Le Petit Marseillais au miel de Provence propose une note gourmande et sucrée, dans une formule certifiée bio. Sa texture gel moussante nettoie le corps en douceur au quotidien, avec un parfum inspiré du miel provençal qui inscrit ce produit dans un registre plus doux et enveloppant que les variantes aux agrumes de la même marque.",
      "Il s'adresse à qui apprécie les senteurs gourmandes sous la douche plutôt qu'un profil frais et vif.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Parfum", valeur: "Miel de Provence" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Sans parfum", valeur: "Non, formule certifiée bio parfumée" },
    ],
    usage: [
      "S'applique sur peau mouillée, en faisant mousser une noisette de produit dans les mains ou sur un gant avant de rincer abondamment. Sa note gourmande en fait un choix apprécié en soirée comme en journée, sans usage particulier recommandé. Il convient à toute la famille pour un nettoyage quotidien.",
    ],
    positionnement: [
      "Face aux variantes plus fraîches de la même gamme, ce gel douche au miel se distingue par une note plus douce et sucrée, pour qui préfère un registre gourmand à un profil vif d'agrumes. Il reste un gel douche parfumé standard, moins indiqué pour une peau très réactive aux fragrances.",
    ],
    faq: [
      {
        question: "Cette variante convient-elle à un usage du soir ?",
        reponse: "Sa note gourmande et enveloppante se prête bien à un usage du soir, mais rien n'empêche de l'utiliser également le matin selon la préférence olfactive de chacun.",
      },
      {
        question: "Le parfum de miel est-il collant sur la peau ?",
        reponse: "Non, comme tout gel douche moussant, il se rince entièrement et ne laisse pas de résidu collant : seule une note parfumée légère persiste sur la peau après le rinçage.",
      },
    ],
  },
  {
    slug: "photoblock-creme",
    identite: [
      "Photoblock Plus Crème est une crème hydratante pour le visage de la gamme Photoblock, une ligne construite autour de la photoprotection cutanée. Sa texture crème s'applique en soin de jour, pour hydrater la peau et l'accompagner face aux agressions extérieures, dont l'exposition à la lumière. Contrairement aux références solaires SPF50+ de la même gamme, elle n'est pas annoncée avec un indice de protection chiffré et s'utilise davantage comme un soin hydratant du quotidien qu'une protection solaire dédiée.",
      "Elle s'adresse à une peau en recherche de confort et d'hydratation au fil de la journée.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Crème" },
      { libelle: "Usage", valeur: "Soin hydratant de jour" },
      { libelle: "Gamme", valeur: "Photoblock" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique le matin sur peau nettoyée, en couche légère sur l'ensemble du visage. Pour une exposition solaire prolongée, elle se complète d'un soin solaire dédié de la même gamme, cette crème n'affichant pas d'indice de protection chiffré contrairement aux références Photoblock spécifiquement solaires.",
    ],
    positionnement: [
      "Face aux crèmes solaires SPF50+ de la même marque, elle se positionne comme un soin hydratant du quotidien plutôt qu'une protection dédiée à l'exposition. Elle convient moins à une journée de forte exposition, pour laquelle les versions Photoblock à indice de protection élevé restent plus adaptées.",
    ],
    faq: [
      {
        question: "Cette crème protège-t-elle du soleil ?",
        reponse: "Elle n'affiche pas d'indice de protection chiffré et n'est pas positionnée comme une protection solaire à part entière. Pour une exposition, une référence Photoblock SPF50+ dédiée reste nécessaire.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse: "Oui, sa texture crème est pensée pour un usage quotidien en soin hydratant de jour, en dehors de tout contexte d'exposition solaire prolongée.",
      },
    ],
  },
  {
    slug: "photoblock-creme-solaire-spf50",
    identite: [
      "Photoblock Plus Crème Solaire SPF50+ est une protection solaire haute de la gamme Photoblock, pensée pour limiter les effets d'une exposition au soleil sur la peau. Sa texture crème s'applique sur le visage ou le corps selon les habitudes, avec un indice de protection élevé adapté aux peaux claires ou aux expositions prolongées.",
      "Elle s'inscrit dans une ligne de soins solaires pensée pour un usage régulier pendant les périodes de forte luminosité, et convient à qui recherche une protection haute sans texture particulièrement fluide.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+ (protection très haute)" },
      { libelle: "Texture", valeur: "Crème" },
      { libelle: "Gamme", valeur: "Photoblock" },
      { libelle: "Usage", valeur: "Avant exposition solaire" },
    ],
    usage: [
      "S'applique généreusement avant l'exposition, en renouvelant l'application toutes les deux heures et après chaque baignade ou transpiration importante. Une quantité suffisante est nécessaire pour atteindre l'indice annoncé, la plupart des utilisateurs en appliquant moins que la dose recommandée.",
    ],
    positionnement: [
      "Dans le rayon des protections solaires à indice très haut, elle s'adresse à une peau claire ou à une exposition prolongée nécessitant le niveau de protection le plus élevé. Sur une peau déjà bronzée en entretien de teint, un indice plus modéré peut suffire pour un usage quotidien moins contraignant.",
    ],
    faq: [
      {
        question: "Cet indice SPF50+ convient-il aux enfants ?",
        reponse: "Un indice élevé comme celui-ci convient en général aux peaux sensibles, mais une protection dédiée aux enfants, avec une texture pensée pour leur peau plus fine, reste préférable quand elle est disponible dans la gamme.",
      },
      {
        question: "Faut-il renouveler l'application en cours de journée ?",
        reponse: "Oui, quel que soit l'indice affiché, un renouvellement toutes les deux heures et après chaque baignade reste nécessaire pour maintenir le niveau de protection tout au long de l'exposition.",
      },
    ],
  },
  {
    slug: "photoblock-spf-50",
    identite: [
      "Photoblock Plus SPF50 est la version visage de la gamme solaire Photoblock, avec un indice de protection très haute pensé pour une application quotidienne sur le visage. Sa texture est destinée à une zone plus exposée et plus sensible que le corps, notamment en cas d'exposition répétée au fil de l'année et pas seulement pendant les vacances.",
      "Elle s'inscrit dans la ligne Photoblock aux côtés des formats corps de la même marque, pour qui recherche une protection élevée du visage au quotidien.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50 (protection très haute)" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Gamme", valeur: "Photoblock" },
      { libelle: "Usage", valeur: "Application quotidienne" },
    ],
    usage: [
      "S'applique le matin sur le visage nettoyé, en dernière étape de la routine avant le maquillage éventuel. En cas d'exposition prolongée en extérieur, un renouvellement en cours de journée reste nécessaire pour maintenir le niveau de protection, l'application du matin ne suffisant pas sur toute une journée ensoleillée.",
    ],
    positionnement: [
      "Face aux protections solaires corps de la même gamme, cette version visage s'adresse à un usage quotidien plus fréquent, y compris en dehors des périodes de vacances. Elle reste moins adaptée à une application sur de grandes surfaces corporelles, pour lesquelles les formats corps de la marque sont plus économiques à l'usage.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse: "Une protection solaire visage s'applique généralement en dernière étape du soin, avant le maquillage, en laissant pénétrer quelques minutes pour une base plus lisse.",
      },
      {
        question: "Faut-il l'utiliser aussi en hiver ?",
        reponse: "Une protection solaire visage au quotidien reste pertinente toute l'année, l'exposition cumulée aux UV se poursuivant même par temps couvert ou en hiver, notamment lors des trajets extérieurs réguliers.",
      },
    ],
  },
  {
    slug: "pistil-deodorant-concombre-50ml",
    identite: [
      "Ce déodorant Pistil au concombre propose une fragrance fraîche et légère, dans un format compact. Il s'utilise au quotidien sous les bras pour limiter les odeurs liées à la transpiration, avec une note végétale plutôt qu'un parfum lourd ou sucré. Son petit format se prête à un usage nomade, en sac ou en trousse de voyage, en complément d'un plus grand format à la maison.",
      "Il s'adresse à qui recherche une touche parfumée discrète au quotidien.",
    ],
    faits: [
      { libelle: "Parfum", valeur: "Concombre" },
      { libelle: "Zone", valeur: "Sous les bras" },
      { libelle: "Usage", valeur: "Application quotidienne" },
      { libelle: "Gamme", valeur: "Pistil déodorants" },
    ],
    usage: [
      "S'applique le matin sur peau propre et sèche, après la douche, en une à deux applications sous chaque bras. Le petit format convient bien à un usage d'appoint en voyage, en complément d'un flacon plus grand conservé à la maison.",
    ],
    positionnement: [
      "Face aux déodorants aux parfums plus marqués du rayon, celui-ci mise sur une note fraîche et discrète plutôt que sur un sillage affirmé. Il convient moins à qui recherche une protection longue durée revendiquée contre la transpiration abondante, pour laquelle un soin anti-transpirant dédié sera plus adapté.",
    ],
    faq: [
      {
        question: "Ce déodorant protège-t-il toute la journée ?",
        reponse: "Sa formule est pensée pour un usage quotidien standard plutôt que pour une protection longue durée revendiquée contre une transpiration abondante, pour laquelle un soin anti-transpirant spécifique conviendra mieux.",
      },
      {
        question: "Le petit format dure-t-il longtemps ?",
        reponse: "C'est un format compact, adapté à un usage d'appoint ou de voyage plutôt qu'à une utilisation quotidienne exclusive sur plusieurs mois, pour laquelle un plus grand contenant sera plus économique à l'usage.",
      },
    ],
  },
  {
    slug: "pistil-deodorant-menthe-naturel-50ml",
    identite: [
      "Ce déodorant Pistil à la menthe naturelle propose une fragrance fraîche et tonique, dans un format compact. Il s'utilise au quotidien sous les bras, avec une note mentholée qui procure une sensation de fraîcheur immédiate à l'application. Son petit format convient à un usage nomade, en complément d'un plus grand flacon conservé à la maison.",
      "Il s'adresse à qui recherche une sensation fraîche plutôt qu'un parfum sucré ou floral.",
    ],
    faits: [
      { libelle: "Parfum", valeur: "Menthe naturelle" },
      { libelle: "Zone", valeur: "Sous les bras" },
      { libelle: "Usage", valeur: "Application quotidienne" },
      { libelle: "Gamme", valeur: "Pistil déodorants" },
    ],
    usage: [
      "S'applique le matin sur peau propre et sèche, en une à deux applications sous chaque bras. La note mentholée procure une sensation de fraîcheur particulièrement appréciée en climat chaud ou après une activité physique légère.",
    ],
    positionnement: [
      "Face aux déodorants floraux ou sucrés du rayon, celui-ci se distingue par sa note mentholée fraîche, plus proche d'une sensation tonique que d'un parfum enveloppant. Il convient moins à qui recherche une fragrance florale marquée, pour laquelle d'autres variantes de la gamme seront plus adaptées.",
    ],
    faq: [
      {
        question: "La sensation de fraîcheur dure-t-elle toute la journée ?",
        reponse: "L'effet mentholé est surtout perceptible à l'application ; il ne remplace pas une protection longue durée contre les odeurs, qui dépend davantage de la formule déodorante que de la sensation de fraîcheur ressentie.",
      },
      {
        question: "Convient-il à une peau sensible sous les bras ?",
        reponse: "Comme tout déodorant parfumé, un test préalable sur une petite zone est conseillé en cas de peau réactive, la note mentholée pouvant occasionnellement piquer sur une peau irritée ou fraîchement épilée.",
      },
    ],
  },
  {
    slug: "pistil-deodorant-peche-naturel-50ml",
    identite: [
      "Ce déodorant Pistil à la pêche naturelle propose une fragrance fruitée et douce, dans un format compact. Il s'utilise au quotidien sous les bras, avec une note gourmande plus enveloppante que les variantes fraîches de la même gamme. Son petit format se prête à un usage nomade ou d'appoint, à côté d'un plus grand flacon utilisé au quotidien à la maison.",
      "Il s'adresse à qui préfère une touche parfumée fruitée et douce.",
    ],
    faits: [
      { libelle: "Parfum", valeur: "Pêche naturelle" },
      { libelle: "Zone", valeur: "Sous les bras" },
      { libelle: "Usage", valeur: "Application quotidienne" },
      { libelle: "Gamme", valeur: "Pistil déodorants" },
    ],
    usage: [
      "S'applique le matin sur peau propre et sèche, en une à deux applications sous chaque bras. Sa note fruitée se marie bien avec des parfums légers, sans risque de sillage trop marqué au contact d'une fragrance portée par ailleurs.",
    ],
    positionnement: [
      "Face aux variantes fraîches à la menthe ou au concombre de la même gamme, ce déodorant à la pêche mise sur une note plus douce et gourmande. Il convient moins à qui recherche une sensation de fraîcheur immédiate, pour laquelle les autres variantes de la ligne seront plus adaptées.",
    ],
    faq: [
      {
        question: "Ce parfum de pêche est-il très sucré ?",
        reponse: "La note reste discrète, pensée pour un déodorant du quotidien plutôt que pour un parfum affirmé. Elle se perçoit surtout de près, sans sillage marqué comparable à un parfum classique.",
      },
      {
        question: "Peut-on le porter avec un parfum différent ?",
        reponse: "Oui, sa note fruitée discrète se superpose généralement bien à un parfum porté par ailleurs, sans créer de dissonance marquée, contrairement à un déodorant à la fragrance plus affirmée.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-bergamote-majestueuse-250ml",
    identite: [
      "Prince de Galles décline sa gamme de cologne autour de la bergamote sur cette référence Bergamote Majestueuse. La bergamote est l'une des notes les plus classiques de la parfumerie fraîche, ici mise en avant comme accord principal plutôt que dans une pyramide détaillée, la marque ne communiquant pas de composition précise pour cette ligne. Le format cologne, moins concentré qu'une eau de parfum, se prête à un usage généreux et fréquent, en splash sur le corps ou les vêtements.",
      "Il s'adresse à un usage familial et quotidien plutôt qu'à une occasion précise.",
    ],
    faits: [
      { libelle: "Accord", valeur: "Bergamote, frais et citronné" },
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash généreux sur le corps ou les vêtements, comme le veut l'usage traditionnel de la cologne, pouvant se réappliquer plusieurs fois dans la journée sans excès. Sa tenue plus courte qu'une eau de parfum invite à un geste renouvelé plutôt qu'à une application unique le matin.",
    ],
    positionnement: [
      "Face aux eaux de parfum plus concentrées du rayon, cette cologne mise sur la fraîcheur immédiate et un usage généreux et répété. Elle convient moins à qui recherche un sillage marqué et durable en soirée, pour lequel une eau de parfum reste plus adaptée.",
    ],
    faq: [
      {
        question: "Cette cologne tient-elle aussi longtemps qu'un parfum ?",
        reponse: "Non, une cologne a par nature une concentration plus faible qu'une eau de parfum et une tenue plus courte. Elle s'utilise généreusement et se réapplique plusieurs fois dans la journée plutôt qu'une seule fois le matin.",
      },
      {
        question: "Peut-on l'utiliser aussi sur les vêtements ?",
        reponse: "Oui, c'est un usage traditionnel de la cologne, en splash sur le corps comme sur les vêtements, pour diffuser la fraîcheur de l'accord bergamote tout au long de la journée.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-cypres-royal-250ml",
    identite: [
      "Cypres Royal décline la gamme de cologne Prince de Galles autour d'un accord boisé et frais, porté par le cyprès. Cette note évoque un registre plus végétal que les colognes agrumées classiques, sans que la marque ne détaille de pyramide précise pour cette référence. Le format cologne, moins concentré qu'une eau de parfum, se prête à un usage généreux en splash, sur le corps comme sur les vêtements.",
      "Il s'adresse à un usage quotidien et familial plutôt qu'à une occasion particulière.",
    ],
    faits: [
      { libelle: "Accord", valeur: "Cyprès, boisé et frais" },
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash généreux sur le corps ou les vêtements, avec une réapplication possible plusieurs fois dans la journée du fait de sa tenue plus courte qu'une eau de parfum. Son accord boisé convient bien à un usage quotidien, en toute saison.",
    ],
    positionnement: [
      "Face aux colognes agrumées plus classiques du rayon, cette référence se distingue par son registre boisé, plus végétal et moins acidulé. Elle convient moins à qui recherche une fraîcheur immédiatement citronnée, pour laquelle les variantes bergamote ou mandarine de la même gamme seront plus adaptées.",
    ],
    faq: [
      {
        question: "Cet accord boisé convient-il à un usage quotidien ?",
        reponse: "Oui, son registre reste frais malgré la note boisée, ce qui le rend adapté à un usage quotidien plutôt qu'à une occasion précise, contrairement à des fragrances boisées plus lourdes et concentrées.",
      },
      {
        question: "Peut-on partager ce flacon en famille ?",
        reponse: "Oui, la cologne est historiquement un format d'usage large, pensé pour un flacon partagé plutôt que pour un parfum individuel réservé à une seule personne.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-lavande-exquise-250ml",
    identite: [
      "Lavande Exquise met en avant un accord aromatique et frais, porté par la lavande, dans la gamme de cologne Prince de Galles. Cette note évoque un registre propre et apaisant, plus doux que les colognes boisées ou agrumées de la même ligne, sans pyramide détaillée communiquée par la marque. Le format cologne, moins concentré qu'une eau de parfum, se prête à un usage généreux en splash.",
      "Il s'adresse à un usage quotidien et familial.",
    ],
    faits: [
      { libelle: "Accord", valeur: "Lavande, aromatique et frais" },
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash sur le corps ou les vêtements, avec une réapplication possible au fil de la journée. Sa note aromatique en fait un choix apprécié après la douche, pour une sensation de propreté immédiate.",
    ],
    positionnement: [
      "Face aux colognes plus sucrées ou plus boisées du rayon, cette référence à la lavande se distingue par un registre propre et apaisant. Elle convient moins à qui recherche un sillage plus affirmé et chaud, pour lequel une eau de parfum boisée ou ambrée sera plus adaptée.",
    ],
    faq: [
      {
        question: "L'accord lavande sent-il le savon ?",
        reponse: "Il évoque en effet un registre propre et frais, proche de certaines notes de toilette classiques, plutôt qu'un parfum sucré ou capiteux, ce qui en fait un choix discret pour un usage quotidien.",
      },
      {
        question: "Peut-on l'utiliser après le rasage ?",
        reponse: "Une cologne à la lavande peut s'utiliser après le rasage, mais sur une peau irritée par la lame, un soin après-rasage dédié reste préférable à une application directe d'alcool parfumé.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-mandarine-absolue-250ml",
    identite: [
      "Mandarine Absolue met à l'honneur un accord d'agrume rond et sucré, porté par la mandarine, dans la gamme de cologne Prince de Galles. Ce registre se distingue des accords plus acidulés comme le citron ou le pamplemousse par une douceur plus marquée, sans que la marque ne détaille de pyramide précise pour cette référence. Le format cologne, moins concentré qu'une eau de parfum, se prête à un usage généreux en splash sur le corps et les vêtements.",
      "Il s'adresse à un usage quotidien et familial.",
    ],
    faits: [
      { libelle: "Accord", valeur: "Mandarine, agrume rond et sucré" },
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash généreux sur le corps ou les vêtements, avec une réapplication possible plusieurs fois dans la journée. Sa note d'agrume rond convient bien à une utilisation matinale, pour un réveil olfactif doux.",
    ],
    positionnement: [
      "Face aux colognes plus acidulées comme le citron ou le pamplemousse du même segment, cette mandarine se distingue par une douceur plus marquée. Elle convient moins à qui recherche une fraîcheur vive et tranchante, pour laquelle une note d'agrume plus acide sera préférable.",
    ],
    faq: [
      {
        question: "Cette note de mandarine est-elle très sucrée ?",
        reponse: "Elle reste dans un registre d'agrume, plus rond et doux que le citron mais sans devenir gourmand, ce qui la rend adaptée à un usage quotidien discret.",
      },
      {
        question: "Cette cologne convient-elle en été ?",
        reponse: "Sa note d'agrume et sa formulation légère en font un choix particulièrement apprécié en saison chaude, où une fragrance fraîche et peu capiteuse est généralement préférée.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-neroli-divin-250ml",
    identite: [
      "Neroli Divin met en avant l'accord néroli, une note florale et fraîche issue de la fleur d'oranger, dans la gamme de cologne Prince de Galles. Ce registre se situe entre le floral et l'agrume, plus délicat que les colognes purement citronnées de la même ligne, sans pyramide détaillée communiquée par la marque. Le format cologne, moins concentré qu'une eau de parfum, se prête à un usage généreux en splash sur le corps et les vêtements.",
      "Il s'adresse à un usage quotidien et familial.",
    ],
    faits: [
      { libelle: "Accord", valeur: "Néroli, floral et frais" },
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash sur le corps ou les vêtements, avec une réapplication possible au fil de la journée du fait de sa tenue plus courte qu'une eau de parfum. Sa note florale et fraîche convient à un usage quotidien, en toute saison.",
    ],
    positionnement: [
      "Face aux colognes plus classiquement agrumées du rayon, ce néroli apporte une dimension florale plus délicate. Il convient moins à qui recherche une fraîcheur exclusivement citronnée et vive, pour laquelle la bergamote ou la mandarine de la même gamme seront plus directes.",
    ],
    faq: [
      {
        question: "Le néroli est-il un accord courant en cologne ?",
        reponse: "Le néroli est une note florale et fraîche utilisée dans des registres olfactifs variés ; ici, elle est présentée dans un registre frais et discret, adapté à un usage quotidien large.",
      },
      {
        question: "Cette cologne convient-elle après une journée chaude ?",
        reponse: "Sa note florale fraîche en fait un choix agréable après la douche en fin de journée, pour une sensation de fraîcheur immédiate sans être entêtante.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-rose-elegance-250ml",
    identite: [
      "Rose Elegance décline la gamme de cologne Prince de Galles autour d'un accord floral porté par la rose, un registre plus rare dans une ligne traditionnellement construite sur les agrumes ou les notes boisées. Ce parti pris floral offre une alternative pour qui recherche une fraîcheur plus délicate, sans pyramide détaillée communiquée par la marque pour cette référence. Le format cologne, moins concentré qu'une eau de parfum, se prête à un usage généreux en splash sur le corps et les vêtements.",
      "Il s'adresse à un usage quotidien et familial.",
    ],
    faits: [
      { libelle: "Accord", valeur: "Rose, floral" },
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash sur le corps ou les vêtements, avec une réapplication possible au fil de la journée. Sa note florale convient à un usage quotidien, aussi bien en usage individuel qu'au sein d'un flacon partagé en famille.",
    ],
    positionnement: [
      "Face aux colognes agrumées ou boisées du reste de la gamme, cette variante florale à la rose se distingue nettement, pour qui préfère une fraîcheur plus délicate qu'acidulée. Elle convient moins à qui recherche un registre exclusivement boisé, pour lequel Cypres Royal de la même ligne sera plus adapté.",
    ],
    faq: [
      {
        question: "Cette cologne à la rose convient-elle à un usage partagé ?",
        reponse: "La rose est une note florale que l'on retrouve dans des registres variés ; dans cette cologne au format familial, elle reste accessible à toute la famille selon la préférence olfactive de chacun.",
      },
      {
        question: "La note de rose est-elle entêtante ?",
        reponse: "Non, le format cologne, moins concentré qu'une eau de parfum, donne une note florale légère plutôt qu'un sillage capiteux, ce qui la rend adaptée à un usage quotidien répété.",
      },
    ],
  },
  {
    slug: "prince-galles-cologne-imperial-250ml",
    identite: [
      "The Imperial est présentée comme une référence plus classique de la gamme de cologne Prince de Galles, sans note dominante annoncée dans son nom contrairement aux autres déclinaisons de la ligne construites autour d'un agrume, d'une note boisée ou florale. Elle s'inscrit dans le même format cologne, moins concentré qu'une eau de parfum, pensé pour un usage généreux et répété en splash sur le corps ou les vêtements. La marque ne communique pas de composition détaillée pour cette référence.",
      "Elle s'adresse à un usage quotidien et familial, comme le reste de la gamme.",
    ],
    faits: [
      { libelle: "Tenue", valeur: "Cologne, tenue courte à réappliquer" },
      { libelle: "Usage", valeur: "Application généreuse quotidienne" },
      { libelle: "Gamme", valeur: "Prince de Galles" },
    ],
    usage: [
      "S'utilise en splash généreux sur le corps ou les vêtements, avec une réapplication possible plusieurs fois dans la journée du fait d'une tenue plus courte qu'une eau de parfum. Elle s'intègre dans une routine quotidienne plutôt qu'un usage réservé à une occasion précise.",
    ],
    positionnement: [
      "Face aux déclinaisons de la gamme construites autour d'une note identifiée comme la bergamote ou le cyprès, The Imperial se positionne comme une référence plus neutre de la ligne. Pour qui recherche un accord précis et identifiable, les autres variantes de la gamme donnent une indication plus claire dès le nom.",
    ],
    faq: [
      {
        question: "Quelle est la note dominante de cette cologne ?",
        reponse: "Son nom ne précise pas de note dominante contrairement au reste de la gamme, ce qui en fait une référence plus classique de la ligne Prince de Galles plutôt qu'un accord identifiable dès l'étiquette.",
      },
      {
        question: "Cette cologne convient-elle en toute saison ?",
        reponse: "Comme le reste de la gamme, son format cologne léger et sa tenue courte la rendent adaptée à un usage quotidien toute l'année, avec une réapplication plus fréquente en climat chaud.",
      },
    ],
  },
  {
    slug: "purenaissance-geranium",
    identite: [
      "Cette huile essentielle de géranium de Purenaissance est un extrait aromatique pur, traditionnellement utilisé en aromathérapie pour son parfum vert et légèrement rosé. Comme toute huile essentielle, elle est très concentrée et ne s'applique jamais pure sur la peau : elle se dilue systématiquement dans une huile végétale avant tout usage cutané, ou s'utilise en diffusion atmosphérique. Le géranium est une note courante en cosmétique naturelle, appréciée pour son profil olfactif équilibrant.",
      "Elle s'adresse à qui compose ses propres soins ou souhaite l'utiliser en diffusion, plutôt qu'à un usage cosmétique prêt à l'emploi.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile essentielle de géranium pure" },
      { libelle: "Usage", valeur: "Diffusion ou dilution avant application cutanée" },
      { libelle: "Gamme", valeur: "Purenaissance" },
    ],
    usage: [
      "Se dilue toujours dans une huile végétale avant toute application sur la peau, à raison de quelques gouttes pour une cuillère d'huile de support, ou s'utilise en diffusion atmosphérique dans les pièces de vie. Un test de tolérance au creux du coude est recommandé avant une première utilisation cutanée diluée. Elle est déconseillée pure, chez la femme enceinte ou allaitante, et chez le jeune enfant, sans avis d'un professionnel.",
    ],
    positionnement: [
      "Face aux soins cosmétiques prêts à l'emploi du rayon, cette huile essentielle s'adresse à un usage plus technique, en dilution ou en diffusion, plutôt qu'à une application directe simple. Elle ne convient pas à qui cherche un soin visage ou corps immédiatement applicable sans préparation.",
    ],
    faq: [
      {
        question: "Peut-on appliquer cette huile essentielle directement sur la peau ?",
        reponse: "Non, une huile essentielle pure ne s'applique jamais directement sur la peau sans dilution préalable dans une huile végétale, au risque d'irriter ou de sensibiliser la peau, quelle que soit l'huile essentielle concernée.",
      },
      {
        question: "Peut-on l'utiliser pendant la grossesse ?",
        reponse: "L'usage des huiles essentielles pendant la grossesse ou l'allaitement nécessite l'avis d'un professionnel de santé, certaines étant déconseillées sur ces périodes, quelle que soit la voie d'utilisation envisagée.",
      },
    ],
  },
  {
    slug: "purenaissance-gingembre",
    identite: [
      "Cette huile essentielle de gingembre de Purenaissance est un extrait aromatique pur, réputé pour sa note chaude et légèrement épicée. Traditionnellement utilisée en aromathérapie pour un effet tonique et réchauffant, elle s'intègre dans des mélanges de massage dilués plutôt qu'en application directe sur la peau. Comme toute huile essentielle concentrée, elle nécessite une dilution systématique dans une huile végétale avant tout usage cutané.",
      "Elle s'adresse à qui compose ses propres soins ou souhaite l'utiliser en diffusion, plutôt qu'à un usage cosmétique prêt à l'emploi.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile essentielle de gingembre pure" },
      { libelle: "Usage", valeur: "Diffusion ou dilution avant application cutanée" },
      { libelle: "Gamme", valeur: "Purenaissance" },
    ],
    usage: [
      "Se dilue dans une huile végétale avant tout usage en massage, notamment sur les zones que l'on souhaite réchauffer, ou s'utilise en diffusion atmosphérique en petite quantité du fait de sa note puissante. Sa nature chauffante impose une dilution plus généreuse qu'une huile essentielle douce, avec un test de tolérance préalable sur une petite zone de peau.",
    ],
    positionnement: [
      "Face aux huiles essentielles plus douces de la même gamme comme le géranium, le gingembre se distingue par sa note chaude et tonique, plus stimulante. Elle convient moins à un usage en diffusion du soir, pour lequel une note plus apaisante comme la lavande ou la sauge sera préférable.",
    ],
    faq: [
      {
        question: "Cette huile essentielle peut-elle irriter la peau ?",
        reponse: "Non diluée, elle peut être irritante comme la plupart des huiles essentielles à note chaude. Une dilution suffisante dans une huile végétale est indispensable avant toute application cutanée.",
      },
      {
        question: "Peut-on la diffuser dans une chambre le soir ?",
        reponse: "Sa note tonique et stimulante la rend plus adaptée à une diffusion en journée qu'au moment du coucher, où une huile essentielle plus apaisante conviendra davantage.",
      },
    ],
  },
  {
    slug: "purenaissance-huile-essentielle-lentisque-pistachier-5ml",
    identite: [
      "Cette huile essentielle de lentisque pistachier de Purenaissance est un extrait aromatique traditionnellement utilisé dans le bassin méditerranéen. Elle est réputée en aromathérapie pour accompagner le confort de la circulation et se prête à des mélanges de massage dilués sur les jambes. Comme toute huile essentielle pure, elle est très concentrée et ne s'applique jamais directement sur la peau sans dilution préalable dans une huile végétale.",
      "Le petit format, courant pour ce type d'huile essentielle plus rare, convient à un usage ponctuel en mélange.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile essentielle de lentisque pistachier pure" },
      { libelle: "Origine", valeur: "Pistacia lentiscus, tradition méditerranéenne" },
      { libelle: "Usage", valeur: "Dilution avant application cutanée" },
      { libelle: "Gamme", valeur: "Purenaissance" },
    ],
    usage: [
      "Se dilue dans une huile végétale avant tout massage, en petite quantité, notamment sur les jambes dans le cadre d'un mélange pensé pour le confort de la circulation. Un test de tolérance préalable sur une petite zone de peau est recommandé, cette huile étant moins courante et donc moins documentée que les grands classiques de l'aromathérapie.",
    ],
    positionnement: [
      "Face aux huiles essentielles plus répandues comme la lavande ou l'orange, le lentisque pistachier reste une référence de niche, appréciée pour un usage traditionnel ciblé sur la circulation. Elle convient moins à un usage en diffusion atmosphérique courant, pour lequel les huiles essentielles d'agrumes sont davantage utilisées.",
    ],
    faq: [
      {
        question: "À quoi sert traditionnellement cette huile essentielle ?",
        reponse: "Elle est traditionnellement utilisée en aromathérapie pour accompagner le confort de la circulation, en mélange dilué appliqué en massage sur les jambes, sans constituer un traitement médical à elle seule.",
      },
      {
        question: "Pourquoi ce format est-il aussi petit ?",
        reponse: "Les huiles essentielles moins courantes comme celle-ci sont souvent proposées en petit format, le rendement d'extraction plus faible de cette matière première rendant les grands flacons moins courants pour ce type de référence.",
      },
    ],
  },
  {
    slug: "purenaissance-huile-essentielle-zest-dorange-5ml",
    identite: [
      "Cette huile essentielle de zeste d'orange de Purenaissance est extraite de l'écorce du fruit et reconnue pour sa note citronnée et gourmande. Traditionnellement utilisée en diffusion pour son parfum solaire, elle peut aussi s'intégrer diluée dans une huile végétale pour un usage cutané ponctuel. Comme les huiles essentielles d'agrumes en général, elle est photosensibilisante lorsqu'elle est appliquée sur la peau, ce qui impose une vigilance en cas d'exposition au soleil.",
      "Le petit format convient à un usage régulier en diffusion, cette note s'épuisant vite tant elle est appréciée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile essentielle de zeste d'orange pure" },
      { libelle: "Usage", valeur: "Diffusion ou dilution avant application cutanée" },
      { libelle: "Précaution", valeur: "Photosensibilisante sur peau exposée au soleil" },
      { libelle: "Gamme", valeur: "Purenaissance" },
    ],
    usage: [
      "S'utilise principalement en diffusion atmosphérique, quelques gouttes suffisant à parfumer une pièce. En application cutanée, elle se dilue systématiquement dans une huile végétale et impose d'éviter toute exposition au soleil sur la zone appliquée pendant plusieurs heures, les huiles essentielles d'agrumes étant photosensibilisantes.",
    ],
    positionnement: [
      "Face aux huiles essentielles plus techniques de la gamme comme le lentisque pistachier, le zeste d'orange séduit par sa note immédiatement reconnaissable et son usage facile en diffusion. Elle convient moins à une application cutanée juste avant une exposition au soleil, contrairement à des huiles non photosensibilisantes.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sur la peau avant de sortir au soleil ?",
        reponse: "Non, comme la plupart des huiles essentielles d'agrumes, le zeste d'orange est photosensibilisant : appliquée diluée sur la peau, elle impose d'éviter l'exposition au soleil sur la zone concernée pendant plusieurs heures.",
      },
      {
        question: "Peut-on la diffuser en présence d'enfants ?",
        reponse: "La diffusion d'huiles essentielles en présence de jeunes enfants nécessite des précautions, notamment une durée limitée et une pièce aérée : l'avis d'un professionnel de santé reste utile en cas de doute selon l'âge de l'enfant.",
      },
    ],
  },
  {
    slug: "purenaissance-sauge-scarlee",
    identite: [
      "Cette huile essentielle de sauge sclarée de Purenaissance est un extrait aromatique traditionnellement utilisé en aromathérapie pour son effet réputé relaxant et sa note herbacée. Elle s'intègre en diffusion atmosphérique ou, diluée dans une huile végétale, dans des mélanges de massage. Comme toute huile essentielle pure, elle est très concentrée et ne s'applique jamais directement sur la peau. Son usage est classiquement déconseillé pendant la grossesse ainsi que chez les personnes suivant un traitement hormonal, sans avis médical préalable.",
      "Elle s'adresse à qui compose ses propres soins ou pratique déjà l'aromathérapie.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile essentielle de sauge sclarée pure" },
      { libelle: "Usage", valeur: "Diffusion ou dilution avant application cutanée" },
      { libelle: "Précaution", valeur: "Déconseillée en cas de grossesse ou traitement hormonal" },
      { libelle: "Gamme", valeur: "Purenaissance" },
    ],
    usage: [
      "Se dilue dans une huile végétale avant tout massage ou s'utilise en diffusion atmosphérique en soirée, sa note étant associée à un usage relaxant. Un avis médical préalable est nécessaire en cas de grossesse, d'allaitement ou de traitement hormonal en cours, cette huile étant classiquement déconseillée dans ces situations.",
    ],
    positionnement: [
      "Face aux huiles essentielles toniques comme le gingembre de la même gamme, la sauge sclarée se positionne sur un registre apaisant, plus adapté à une diffusion du soir. Elle ne convient pas à toutes les situations personnelles, ses précautions d'emploi étant plus strictes que celles d'une huile essentielle d'agrume classique.",
    ],
    faq: [
      {
        question: "Pourquoi cette huile essentielle est-elle déconseillée pendant la grossesse ?",
        reponse: "La sauge sclarée est classiquement déconseillée pendant la grossesse et chez les personnes suivant un traitement hormonal, un avis médical étant nécessaire avant toute utilisation dans ces situations, quelle que soit la voie d'application envisagée.",
      },
      {
        question: "Peut-on l'utiliser tous les soirs en diffusion ?",
        reponse: "Une diffusion ponctuelle plutôt que quotidienne est généralement recommandée pour les huiles essentielles, la sauge sclarée ne faisant pas exception, avec une pièce aérée régulièrement entre deux séances.",
      },
    ],
  },
  {
    slug: "red-one-black-aqua-hair-gel-wax-full-force-150ml",
    identite: [
      "Ce gel-cire Red One de la ligne Aqua, référence Black Full Force, associe la tenue d'une cire coiffante à la texture plus légère d'un gel à base aqueuse. Formulé pour un maintien fort, il est pensé pour les coiffures structurées qui nécessitent une fixation longue durée sans figer complètement la mèche. Sa base aqueuse facilite le rinçage au shampooing par rapport à une cire traditionnelle à base de cire d'abeille ou de paraffine.",
      "Il s'adresse à un usage masculin de coiffage quotidien ou pour une occasion demandant une tenue marquée.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel-cire base aqueuse" },
      { libelle: "Tenue", valeur: "Fixation forte (Full Force)" },
      { libelle: "Fini", valeur: "Brillant" },
      { libelle: "Gamme", valeur: "Red One Aqua" },
    ],
    usage: [
      "S'applique sur cheveux légèrement humides ou secs, en petite quantité travaillée entre les paumes avant d'être répartie mèche par mèche pour structurer la coiffure. Une quantité modérée suffit généralement, un excès de produit alourdissant la chevelure plutôt que d'améliorer la tenue.",
    ],
    positionnement: [
      "Face aux cires traditionnelles du rayon, sa base aqueuse facilite le rinçage tout en offrant une tenue comparable, un atout pour un usage fréquent. Il convient moins à qui recherche un fini totalement mat, sa formule Aqua laissant généralement un aspect plus brillant que structurant mat.",
    ],
    faq: [
      {
        question: "Ce produit se rince-t-il facilement ?",
        reponse: "Sa base aqueuse le rend plus facile à rincer au shampooing qu'une cire traditionnelle à base de cire d'abeille, sans résidu gras persistant après le lavage.",
      },
      {
        question: "Quelle est la différence avec la version Blue de la même gamme ?",
        reponse: "Les différentes couleurs de la ligne Aqua Full Force de Red One correspondent généralement à des niveaux de tenue ou des finis distincts ; il convient de comparer les indications de fixation sur chaque référence pour choisir celle qui correspond à la coiffure recherchée.",
      },
    ],
  },
  {
    slug: "red-one-blue-aqua-hair-wax-full-force-150ml",
    identite: [
      "Cette cire Red One de la ligne Aqua, référence Blue Full Force, propose une base aqueuse pensée pour un maintien fort tout en restant plus facile à rincer qu'une cire traditionnelle. Elle s'adresse au coiffage masculin de coiffures structurées, avec une tenue longue durée revendiquée par la mention Full Force de la gamme. Sa texture cire, légèrement plus dense qu'un gel classique, permet de sculpter la mèche plutôt que de simplement la fixer.",
      "Elle s'utilise en petite quantité, à répartir uniformément sur cheveux secs ou légèrement humides.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Cire base aqueuse" },
      { libelle: "Tenue", valeur: "Fixation forte (Full Force)" },
      { libelle: "Fini", valeur: "Structurant" },
      { libelle: "Gamme", valeur: "Red One Aqua" },
    ],
    usage: [
      "S'applique sur cheveux secs ou légèrement humides, en prélevant une petite quantité réchauffée entre les paumes avant de structurer la coiffure mèche par mèche. Elle convient à un usage quotidien, en ajustant la quantité selon la longueur et l'épaisseur des cheveux.",
    ],
    positionnement: [
      "Face aux gels coiffants classiques du rayon, cette cire offre une tenue plus structurante et durable, pensée pour des coiffures qui doivent tenir toute la journée. Elle convient moins à qui recherche un fini très naturel et léger, pour lequel un gel fluide sera plus discret.",
    ],
    faq: [
      {
        question: "Cette cire laisse-t-elle les cheveux collants ?",
        reponse: "Sa base aqueuse limite la sensation collante comparée à une cire traditionnelle, tout en maintenant une tenue forte, mais le ressenti final dépend de la quantité appliquée et du type de cheveu.",
      },
      {
        question: "Convient-elle aux cheveux fins ?",
        reponse: "Sur cheveux fins, une quantité réduite est préférable pour éviter d'alourdir la chevelure ; sa tenue forte peut sinon donner un effet plus plaqué que souhaité sur ce type de cheveu.",
      },
    ],
  },
];
