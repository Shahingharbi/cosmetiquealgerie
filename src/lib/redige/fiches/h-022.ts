import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "flux-care-lait-corps-huile-monoi-380ml",
    identite: [
      "Ce lait corps de Flux Care s'appuie sur l'huile de monoï, un macérat de fleurs de tiaré dans de l'huile de coco traditionnellement utilisé en Polynésie pour nourrir et parfumer la peau. La texture est fluide, s'étale facilement et pénètre sans laisser de film gras persistant. Il assouplit la peau du corps, redonne du confort après la douche et laisse un parfum monoï caractéristique, entre fleur blanche et note ambrée légère. Il s'inscrit dans la gamme du quotidien plutôt que dans les formules ciblées sur un problème de peau particulier, et convient aux peaux normales à sèches en quête d'un soin corps simple.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile de monoï" },
      { libelle: "Texture", valeur: "Lait fluide" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Type de peau", valeur: "Normale à sèche" },
    ],
    usage: [
      "S'applique sur peau propre et sèche ou légèrement humide, en sortie de douche, par mouvements circulaires jusqu'à absorption complète. Une noisette suffit pour un avant-bras, davantage pour les jambes. Il peut se réutiliser dans la journée sur les zones qui tirent. Comme tout soin parfumé, mieux vaut l'appliquer plusieurs minutes avant une exposition directe au soleil.",
    ],
    positionnement: [
      "Face aux laits corps neutres du rayon, celui-ci se distingue par son parfum affirmé de monoï, ce qui plaide pour les personnes qui aiment sentir leur soin corps toute la journée. Il conviendra moins à qui recherche une formule sans parfum, par exemple en cas de peau réactive ou d'allergie aux fragrances.",
    ],
    faq: [
      {
        question: "Ce lait corps laisse-t-il un film gras ?",
        reponse:
          "Non, sa texture lait est pensée pour pénétrer rapidement. Une fine sensation de toucher gras peut persister quelques minutes le temps de l'absorption, surtout en cas d'application généreuse, mais elle disparaît ensuite sans laisser de résidu sur les vêtements.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Il est formulé pour le corps, dont la peau est plus épaisse que celle du visage. Rien n'empêche un usage ponctuel sur les mains ou les coudes, mais pour le visage, mieux vaut réserver un soin dédié, moins riche et sans parfum ajouté.",
      },
    ],
  },
  {
    slug: "flux-care-lait-corps-huile-rose-380ml",
    identite: [
      "Ce lait corps Flux Care remplace le monoï par l'huile de rose, réputée pour son parfum floral et ses propriétés adoucissantes sur les peaux sèches. La texture lait, fluide et non collante, s'étale aisément sur l'ensemble du corps et laisse un fini satiné sans effet gras. Le parfum rosé, plus délicat que floral-ambré, convient à qui préfère une fragrance discrète au quotidien. Comme les autres laits de la même gamme, il vise l'hydratation générale plutôt qu'un problème de peau ciblé, et se positionne comme un soin de tous les jours plutôt qu'un traitement.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile de rose" },
      { libelle: "Texture", valeur: "Lait fluide" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Type de peau", valeur: "Normale à sèche" },
    ],
    usage: [
      "Application quotidienne après la douche ou le bain, sur peau tamponnée mais encore légèrement humide pour favoriser la pénétration. Masser jusqu'à absorption. Peut s'utiliser matin et soir en période de grand froid ou quand la peau tiraille davantage.",
    ],
    positionnement: [
      "Dans le rayon des laits corps, celui-ci se distingue par un parfum rosé plus feutré que les versions monoï ou agrumes de la même gamme. Il convient à qui cherche un parfum discret plutôt qu'affirmé. Les peaux très sèches ou sujettes à l'eczéma préfèreront un soin plus riche, sans parfum, spécifiquement formulé pour la sécheresse marquée.",
    ],
    faq: [
      {
        question: "Ce lait convient-il en hiver sur peau très sèche ?",
        reponse:
          "Il apporte un premier niveau d'hydratation confortable au quotidien, mais sur une peau très sèche qui tire fortement en hiver, il est préférable de le compléter par une crème corps plus riche, en particulier sur les jambes et les coudes.",
      },
      {
        question: "Le parfum rose persiste-t-il longtemps ?",
        reponse:
          "Comme la plupart des laits parfumés, la note s'estompe progressivement au cours de la journée à mesure que le produit pénètre. Elle reste perceptible de près pendant quelques heures après application, sans être aussi tenace qu'un parfum dédié.",
      },
    ],
  },
  {
    slug: "flux-care-lait-corps-verveine-citron-jaune-380ml",
    identite: [
      "Cette version du lait corps Flux Care associe la verveine et le citron jaune, un duo d'agrumes et de plantes fraîches qui tranche avec les parfums floraux du reste de la gamme. La texture reste un lait fluide classique, facile à étaler, pensé pour une hydratation quotidienne du corps sans effet gras. Le parfum, plus vert et tonique que les versions monoï ou rose, s'adresse à qui préfère une fragrance fraîche à un sillage floral. Il s'utilise comme un soin corps de routine, sans visée particulière sur un problème de peau.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Verveine et citron" },
      { libelle: "Texture", valeur: "Lait fluide" },
      { libelle: "Zone", valeur: "Corps" },
    ],
    usage: [
      "S'applique de préférence le matin après la douche, la note fraîche d'agrumes se prêtant bien à un usage diurne. Masser sur peau légèrement humide jusqu'à absorption complète. Convient à une utilisation quotidienne sur l'ensemble du corps.",
    ],
    positionnement: [
      "Sa note verveine-citron le distingue des laits floraux (rose, monoï) de la même gamme et plaira à qui trouve les parfums floraux trop sucrés. Comme tout agrume, la fragrance est plus fugace et demande une réapplication plus fréquente pour rester perceptible dans la journée.",
    ],
    faq: [
      {
        question: "Ce lait corps peut-il être utilisé avant une exposition au soleil ?",
        reponse:
          "Certains extraits d'agrumes sont photosensibilisants en usage concentré, mais dans un lait corps dosé pour l'hydratation, le risque reste limité. Par prudence, mieux vaut l'appliquer le soir ou plusieurs heures avant une exposition prolongée plutôt que juste avant de sortir en plein soleil.",
      },
      {
        question: "Ce parfum verveine-citron peut-il se superposer à un parfum ?",
        reponse:
          "Étant plus léger qu'une eau de parfum, il se superpose en général sans dénaturer un parfum appliqué par-dessus, mais les notes fraîches d'agrumes peuvent légèrement modifier les premières minutes de diffusion d'un parfum boisé ou oriental.",
      },
    ],
  },
  {
    slug: "flux-care-lets-go-to-bali-creme-parfumee-corp-main-150ml",
    identite: [
      "Cette crème parfumée pour le corps et les mains fait partie d'une collection voyage de Flux Care, où chaque référence évoque une destination par un accord parfumé plutôt que par une composition olfactive précise et documentée. La version « Bali » mise sur un accord évoquant la fleur exotique et le bois clair, davantage inspiré de l'ambiance balnéaire que d'une pyramide olfactive travaillée. La texture crème, plus riche qu'un lait, convient aussi bien au corps qu'aux mains, deux zones souvent exposées au dessèchement. Le format compact en fait un soin d'appoint facile à transporter.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Crème" },
      { libelle: "Zone", valeur: "Corps et mains" },
    ],
    usage: [
      "S'utilise en petite quantité sur les mains après lavage répété, ou en couche plus généreuse sur le corps après la douche. Le format compact se prête à un usage nomade, dans un sac ou sur un bureau, pour hydrater les mains plusieurs fois par jour sans attendre le soin corps du soir.",
    ],
    positionnement: [
      "Face aux laits corps classiques du rayon, cette crème se distingue par son usage mixte corps-mains et son format transportable, pensé pour un geste ponctuel plutôt qu'une application généreuse sur tout le corps. Qui cherche un grand format pour un usage quotidien intensif se tournera plutôt vers un lait corps.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle pour des mains très sèches et gercées ?",
        reponse:
          "Sa texture crème apporte un confort immédiat et aide à limiter la sensation de tiraillement, mais en cas de gerçures marquées ou de peau qui se fissure, un soin mains plus riche et répété plusieurs fois par jour reste préférable.",
      },
      {
        question: "Le parfum « Bali » correspond-il à une fragrance précise et documentée ?",
        reponse:
          "Non, il s'agit d'un accord d'ambiance propre à la collection, pensé pour évoquer une destination plutôt que pour reproduire une pyramide olfactive de parfumerie fine. Il n'existe pas de notes de tête, cœur et fond documentées pour cette référence.",
      },
    ],
  },
  {
    slug: "flux-care-lets-go-to-hawaii-creme-parfumee-corp-main-150ml",
    identite: [
      "Comme sa version « Bali », cette crème parfumée corps et mains de la collection voyage Flux Care mise sur un accord d'ambiance tropicale évoquant Hawaii — fruits exotiques et note solaire plutôt qu'une composition parfumée précise. La texture crème, plus riche qu'un lait corps classique, s'adresse aussi bien au corps qu'aux mains. Le format compact en fait un soin d'appoint, à garder dans un sac plutôt qu'un soin corps principal du quotidien.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Crème" },
      { libelle: "Zone", valeur: "Corps et mains" },
    ],
    usage: [
      "À utiliser en petite noisette sur les mains ou en couche plus généreuse sur le corps après la douche. Sa taille compacte permet de l'emporter en déplacement pour réhydrater les mains dans la journée sans avoir besoin du soin corps complet.",
    ],
    positionnement: [
      "Cette référence s'adresse à qui aime changer de parfum selon ses envies, la collection voyage proposant plusieurs accords sur le même format crème corps-mains. Pour un usage corps quotidien et généreux, un lait corps en grand format reste plus adapté au flacon.",
    ],
    faq: [
      {
        question: "Cette crème peut-elle remplacer un lait corps pour tout le corps ?",
        reponse:
          "Le format compact et la texture plus riche la destinent davantage à un usage ciblé, mains et zones sèches, qu'à une application quotidienne sur l'ensemble du corps, pour laquelle un lait corps en plus grand format reste plus adapté.",
      },
      {
        question: "Les parfums Bali et Hawaii de la collection sont-ils proches ?",
        reponse:
          "Les deux misent sur une ambiance tropicale, mais Bali penche vers une note plus florale et boisée tandis qu'Hawaii évoque davantage les fruits exotiques et une note solaire. La différence reste subtile et tient surtout à la préférence personnelle.",
      },
    ],
  },
  {
    slug: "flux-care-masque-pre-shampooing-ceramide-370ml",
    identite: [
      "Ce masque et pré-shampoing de Flux Care s'appuie sur les céramides, des lipides qui entrent naturellement dans la composition de la fibre capillaire et aident à en restaurer la cohésion. Utilisé avant le shampoing, il prépare les cheveux secs ou fragilisés en leur apportant un premier niveau de nutrition avant le lavage, qui peut lui-même être asséchant selon les shampoings. La texture est un masque riche, à laisser poser avant de procéder au shampoing habituel. Il s'adresse aux cheveux secs, ternes ou abîmés par la chaleur et les colorations répétées.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Céramides" },
      { libelle: "Type de cheveux", valeur: "Secs et fragilisés" },
      { libelle: "Usage", valeur: "Pré-shampoing, avant lavage" },
    ],
    usage: [
      "S'applique sur cheveux secs, mèche par mèche, avant le shampoing, en insistant sur les longueurs et pointes. Laisser poser quelques minutes avant de procéder au shampoing habituel. Une à deux fois par semaine suffit pour des cheveux moyennement abîmés, sans remplacer le soin après-shampoing des autres jours.",
    ],
    positionnement: [
      "Face aux masques après-shampoing classiques du rayon, celui-ci se distingue par son usage en amont du lavage plutôt qu'après, ce qui le rend complémentaire d'un après-shampoing plutôt que substituable. Il s'adresse aux cheveux nettement fragilisés ; pour un cheveu simplement terne sans dommage particulier, un après-shampoing suffit généralement.",
    ],
    faq: [
      {
        question: "Faut-il rincer ce masque avant le shampoing ?",
        reponse:
          "Oui, il s'utilise en prélavage : on l'applique sur cheveux secs, on laisse poser, puis on procède au shampoing habituel qui l'élimine avec les impuretés. Il ne se laisse pas en place au-delà du temps de pose indiqué sur l'emballage.",
      },
      {
        question: "Peut-on l'utiliser sur cheveux colorés ?",
        reponse:
          "Les céramides n'interagissent pas avec la coloration, ce produit peut donc s'utiliser sur cheveux colorés. En revanche, en cas de coloration récente et fragile, mieux vaut espacer son usage des jours qui suivent immédiatement le passage chez le coiffeur.",
      },
    ],
  },
  {
    slug: "flux-care-masque-perfect-long-370ml",
    identite: [
      "Ce masque après-shampoing Flux Care, nommé « Perfect Long », cible spécifiquement les cheveux longs, une longueur qui accumule plus d'exposition à la chaleur, aux frottements et aux colorations que les racines. La texture masque, plus riche qu'un après-shampoing classique, se concentre sur les longueurs et les pointes, zones les plus anciennes et les plus sèches de la fibre. Il vise à améliorer la douceur au toucher et à faciliter le démêlage, sans alourdir les racines.",
    ],
    faits: [
      { libelle: "Type de cheveux", valeur: "Longs" },
      { libelle: "Usage", valeur: "Après-shampoing, sur longueurs et pointes" },
    ],
    usage: [
      "Appliquer après le shampoing sur cheveux essorés, en se concentrant sur les longueurs et les pointes en évitant les racines. Laisser poser quelques minutes puis rincer abondamment. Un usage hebdomadaire complète un après-shampoing plus léger utilisé au quotidien.",
    ],
    positionnement: [
      "Pensé pour les cheveux longs plutôt que pour toutes les longueurs, ce masque cible un besoin précis : des pointes plus anciennes et plus sèches que les racines. Sur cheveux courts ou mi-longs, un masque nourrissant généraliste conviendra tout aussi bien, sans ce positionnement dédié à la longueur.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sur les racines ?",
        reponse:
          "Il est conçu pour les longueurs et les pointes, zones les plus sèches et les plus anciennes du cheveu. Appliqué sur les racines, il risque d'alourdir la chevelure et de donner un effet gras plus rapidement, surtout sur cheveux fins.",
      },
      {
        question: "À quelle fréquence l'utiliser sur cheveux longs ?",
        reponse:
          "Une à deux fois par semaine en complément d'un après-shampoing plus léger les autres jours de lavage constitue un rythme raisonnable. Les cheveux très longs et très secs peuvent tolérer une fréquence plus élevée sans risque de surcharge.",
      },
    ],
  },
  {
    slug: "flux-care-masque-aminexil-resist-cheveux-fragile-tendance-tomber",
    identite: [
      "Ce masque Flux Care s'appuie sur l'aminexil, une molécule connue en cosmétique capillaire pour son action sur la rigidité du collagène qui entoure le follicule pileux, un mécanisme associé au vieillissement du cheveu et à sa tendance à tomber plus facilement. Utilisé en masque après-shampoing, il vise à renforcer la fibre existante et à limiter la casse liée à la fragilité, sans se substituer à un traitement médical en cas de perte de cheveux importante ou brutale.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Aminexil" },
      { libelle: "Usage", valeur: "Après-shampoing" },
      { libelle: "Type de cheveux", valeur: "Fragiles, sujets à la chute" },
    ],
    usage: [
      "S'applique après le shampoing sur cheveux essorés, en massant délicatement. Laisser poser quelques minutes puis rincer. Un usage régulier, sur plusieurs semaines, est nécessaire pour juger de son effet sur la fragilité du cheveu, une casse ponctuelle ne se corrigeant pas en une seule application.",
    ],
    positionnement: [
      "Ce masque cible un besoin précis, la fragilité et la chute, et se distingue des masques nourrissants ou hydratants du même rayon centrés sur la texture et la brillance. En cas de chute importante, soudaine ou en plaques, une consultation reste indispensable : ce soin agit sur le confort du cheveu existant, pas sur une cause médicale sous-jacente.",
    ],
    faq: [
      {
        question: "Ce masque arrête-t-il la chute de cheveux ?",
        reponse:
          "Il aide à limiter la fragilité de la fibre existante et le risque de casse, mais il ne s'agit pas d'un traitement médical de la chute. En cas de chute abondante, soudaine ou localisée, une consultation dermatologique reste la démarche appropriée avant tout soin cosmétique.",
      },
      {
        question: "Peut-on l'utiliser en prévention, sans chute constatée ?",
        reponse:
          "Rien n'empêche un usage préventif chez une personne aux cheveux fins ou naturellement fragiles, mais il n'apporte pas de bénéfice particulier sur un cheveu déjà solide et épais, pour lequel un masque nourrissant classique suffit.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-camomille-miel-fleuirs-200ml",
    identite: [
      "Ce masque capillaire associe la camomille, reconnue pour ses vertus apaisantes et légèrement éclaircissantes sur cheveux clairs, et le miel de fleurs, un actif traditionnellement utilisé pour son pouvoir filmogène et adoucissant. La texture masque s'applique après le shampoing pour nourrir la fibre et faciliter le démêlage. Il convient particulièrement aux cheveux blonds ou clairs, la camomille pouvant légèrement raviver les reflets dorés au fil des utilisations, mais reste utilisable sur toutes les couleurs pour son effet nourrissant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Camomille et miel de fleurs" },
      { libelle: "Usage", valeur: "Après-shampoing" },
      { libelle: "Type de cheveux", valeur: "Tous, particulièrement cheveux clairs" },
    ],
    usage: [
      "Appliquer sur cheveux lavés et essorés, répartir sur longueurs et pointes, laisser poser quelques minutes puis rincer soigneusement. Un usage hebdomadaire entretient la douceur ; sur cheveux très secs, il peut compléter un soin sans rinçage les autres jours.",
    ],
    positionnement: [
      "Sa camomille en fait un choix logique pour les cheveux blonds ou méchés en quête de reflets légèrement ravivés, un bénéfice que les autres masques fruités ou huileux de la gamme n'offrent pas. Sur cheveux foncés, cet effet passe inaperçu et seul l'apport nourrissant du miel entre en jeu.",
    ],
    faq: [
      {
        question: "Ce masque éclaircit-il vraiment les cheveux ?",
        reponse:
          "La camomille peut raviver légèrement les reflets dorés sur cheveux naturellement clairs ou méchés, avec un usage régulier, mais il ne s'agit pas d'une décoloration : l'effet reste subtil et n'a aucune action sur des cheveux foncés.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse:
          "Oui, sa formulation nourrissante ne contre-indique pas les cheveux colorés. Sur une coloration blonde ou méchée, l'effet ravivant de la camomille peut même être recherché en complément du soin colorimétrique habituel.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-eau-coco-aloe-vera-2-usages-200ml",
    identite: [
      "Ce masque capillaire combine l'eau de coco, réputée légère et hydratante, et l'aloe vera, connu pour son pouvoir apaisant et sa capacité à retenir l'eau dans la fibre. La mention « 2 usages » indique un flacon pensé pour deux applications complètes plutôt qu'un format à doser au jugé. Cette association vise les cheveux déshydratés qui manquent de souplesse sans être nécessairement abîmés en profondeur, avec une texture plus légère que les masques à base d'huiles denses de la même gamme.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau de coco et aloe vera" },
      { libelle: "Usage", valeur: "2 usages par flacon" },
      { libelle: "Type de cheveux", valeur: "Déshydratés" },
    ],
    usage: [
      "Répartir une moitié du flacon sur cheveux essorés, laisser poser selon le temps indiqué puis rincer ; conserver l'autre moitié pour une seconde application. Convient à une fréquence hebdomadaire, notamment en saison chaude où le cheveu perd facilement en hydratation.",
    ],
    positionnement: [
      "Plus léger que les masques à l'huile de la même collection, argan, monoï ou olive, il convient mieux aux cheveux fins ou normaux qui recherchent de la souplesse sans risque d'alourdissement. Les cheveux épais ou très secs se satisferont davantage d'une formule plus riche en huiles végétales.",
    ],
    faq: [
      {
        question: "Que signifie la mention « 2 usages » ?",
        reponse:
          "Elle indique que le flacon est calibré pour deux applications complètes plutôt qu'une seule, une manière de doser correctement sans avoir à évaluer soi-même la quantité nécessaire pour une chevelure moyenne.",
      },
      {
        question: "Ce masque convient-il aux cheveux fins ?",
        reponse:
          "Sa texture, plus légère que les masques aux huiles denses de la gamme, en fait un bon choix pour les cheveux fins qui craignent l'effet alourdi. Il apporte de la souplesse sans plaquer la chevelure contre le crâne.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-figue-fraiche-sucre-dore-2-usages-200ml",
    identite: [
      "Ce masque capillaire associe la figue fraîche et le sucre doré, deux ingrédients utilisés ici pour leur pouvoir nourrissant et leur parfum sucré caractéristique. Comme les autres masques « 2 usages » de la gamme, ce format se destine à deux applications complètes. Sa texture s'adresse aux cheveux ternes en quête de douceur et de brillance plutôt qu'à une réparation profonde de cheveux très abîmés, pour lesquels une formule plus technique de la gamme sera plus indiquée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Figue fraîche et sucre doré" },
      { libelle: "Usage", valeur: "2 usages par flacon" },
      { libelle: "Type de cheveux", valeur: "Ternes, en manque de douceur" },
    ],
    usage: [
      "Appliquer sur cheveux lavés et essorés, répartir sur longueurs et pointes, laisser poser selon le temps indiqué puis rincer abondamment. Une utilisation hebdomadaire entretient la douceur et la brillance sur cheveux normaux à légèrement secs.",
    ],
    positionnement: [
      "Ce masque mise avant tout sur le confort et le parfum plutôt que sur une réparation technique de la fibre, à la différence des références plus expertes de la même marque. Il convient aux cheveux simplement ternes ; les cheveux très abîmés par la couleur ou la chaleur bénéficieront davantage d'un soin plus ciblé.",
    ],
    faq: [
      {
        question: "Ce masque répare-t-il les cheveux très abîmés ?",
        reponse:
          "Il apporte surtout de la douceur et un parfum agréable, un bénéfice cosmétique immédiat plutôt qu'une réparation en profondeur. Pour des cheveux très abîmés par la couleur ou les outils chauffants, une formule plus technique de la gamme sera plus adaptée.",
      },
      {
        question: "Le parfum figue-sucre persiste-t-il après rinçage ?",
        reponse:
          "Une légère note reste perceptible une fois les cheveux secs, sans être aussi marquée qu'un soin sans rinçage. L'intensité dépend aussi de la nature du cheveu, les cheveux poreux retenant généralement mieux les parfums.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-huile-monoi-neroli-2-usages-200ml",
    identite: [
      "Cette variante du masque capillaire « 2 usages » associe l'huile de monoï et le néroli, extrait de la fleur d'oranger amer connu pour son parfum floral et ses propriétés apaisantes. Le format se destine à deux applications complètes. La texture masque, riche en huiles, cible les cheveux secs à très secs en quête de nutrition et de brillance, avec un parfum floral affirmé qui reprend l'univers monoï déjà présent dans le lait corps de la même marque.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile de monoï et néroli" },
      { libelle: "Usage", valeur: "2 usages par flacon" },
      { libelle: "Type de cheveux", valeur: "Secs à très secs" },
    ],
    usage: [
      "Répartir sur cheveux essorés, longueurs et pointes en priorité, laisser poser puis rincer soigneusement pour éviter tout effet gras résiduel. Une fois par semaine convient à un usage d'entretien ; les cheveux très secs peuvent le rapprocher toutes les cinq à six jours.",
    ],
    positionnement: [
      "Sa richesse en huiles le rapproche des masques argan ou olive de la gamme plutôt que des versions plus légères à l'eau de coco ou à l'aloe vera. Il s'adresse aux cheveux secs à très secs ; sur cheveux fins ou à tendance grasse, une formule plus légère de la même collection évitera l'effet alourdi.",
    ],
    faq: [
      {
        question: "Ce masque convient-il aux cheveux fins ?",
        reponse:
          "Sa richesse en huiles le destine plutôt aux cheveux secs à épais. Sur cheveux fins, il risque d'alourdir la chevelure et de la rendre grasse plus rapidement ; une version plus légère de la gamme, à l'aloe vera par exemple, conviendra mieux.",
      },
      {
        question: "Faut-il bien rincer ce masque ?",
        reponse:
          "Oui, un rinçage soigné est nécessaire pour éviter tout résidu gras au toucher, en particulier sur cheveux fins. Un rinçage insuffisant peut aussi alourdir visuellement la chevelure et lui donner un aspect terne plutôt que brillant.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-huile-rose-2-usages-200ml",
    identite: [
      "Cette version du masque capillaire « 2 usages » de Flux Care mise sur l'huile de rose, pour son parfum floral délicat et son pouvoir nourrissant sur cheveux secs. Comme les autres références huileuses de la gamme, le format se destine à deux applications complètes. La texture masque riche cible les cheveux secs en quête de douceur et de brillance, avec une fragrance plus discrète que la version monoï-néroli de la même collection.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile de rose" },
      { libelle: "Usage", valeur: "2 usages par flacon" },
      { libelle: "Type de cheveux", valeur: "Secs" },
    ],
    usage: [
      "Appliquer sur cheveux essorés, en insistant sur les longueurs et les pointes, laisser poser le temps indiqué puis rincer abondamment. Un usage hebdomadaire entretient la douceur sur cheveux secs à normaux.",
    ],
    positionnement: [
      "Sa note rosée, plus discrète que le monoï-néroli de la même gamme, conviendra à qui préfère un parfum capillaire léger. Sur le plan de la texture, les deux masques se ressemblent : le choix tient surtout à la préférence olfactive.",
    ],
    faq: [
      {
        question: "Quelle différence avec la version monoï-néroli de la même gamme ?",
        reponse:
          "La texture et l'effet nourrissant sont comparables, la différence tient essentiellement au parfum : plus floral et discret ici, plus affirmé et exotique dans la version monoï-néroli. Le choix dépend surtout de la préférence olfactive.",
      },
      {
        question: "Ce masque convient-il en usage hebdomadaire régulier ?",
        reponse:
          "Oui, sur cheveux secs à normaux, une application par semaine constitue un rythme d'entretien adapté. Les cheveux très secs peuvent le rapprocher légèrement sans risque particulier, cette huile restant bien tolérée par la fibre.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-huille-dargan-cranberry-2-usages-200ml",
    identite: [
      "Ce masque capillaire associe l'huile d'argan, très utilisée en soin capillaire pour nourrir et discipliner la fibre, et la cranberry, pour son parfum fruité. Le format « 2 usages » se destine à deux applications complètes. Sa texture riche cible les cheveux secs et indisciplinés en quête de nutrition et de tenue, dans la même veine que les autres masques à l'huile de la gamme, avec une note fruitée plus vive que les versions florales.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile d'argan et cranberry" },
      { libelle: "Usage", valeur: "2 usages par flacon" },
      { libelle: "Type de cheveux", valeur: "Secs, indisciplinés" },
    ],
    usage: [
      "Appliquer sur cheveux essorés, longueurs et pointes, laisser poser puis rincer soigneusement. Un usage hebdomadaire aide à discipliner les cheveux crépus ou frisés sujets aux frisottis, en complément d'un soin sans rinçage en cas de fort volume à contrôler.",
    ],
    positionnement: [
      "L'argan en fait un choix pertinent pour les cheveux épais, frisés ou indisciplinés, davantage que les versions plus légères à l'eau de coco de la même gamme. Sur cheveux fins, l'effet nourrissant peut vite tourner à l'alourdissement.",
    ],
    faq: [
      {
        question: "Ce masque aide-t-il à discipliner les frisottis ?",
        reponse:
          "L'huile d'argan est reconnue pour son effet gainant sur la fibre, ce qui aide à limiter visuellement les frisottis après le séchage. L'effet dépend toutefois aussi de la technique de séchage et de la nature du cheveu, bouclé ou crépu notamment.",
      },
      {
        question: "Peut-on l'utiliser sur cheveux fins ?",
        reponse:
          "Il est possible de l'utiliser en réduisant la quantité et en l'appliquant uniquement sur les pointes, mais sur cheveux fins, une formule plus légère de la gamme, comme la version à l'eau de coco, limitera mieux le risque d'alourdissement.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-hyaluron-hydro-balance-370ml",
    identite: [
      "Ce masque capillaire s'appuie sur l'acide hyaluronique, une molécule connue pour sa capacité à retenir l'eau, transposée ici du soin visage au soin capillaire sous l'appellation « Hydro Balance ». Plutôt qu'un apport en huiles nourrissantes comme les autres masques de la gamme, il vise un rééquilibrage hydrique de la fibre, pour des cheveux qui manquent d'eau plutôt que de corps gras. La texture reste un masque à laisser poser après le shampoing, dans un format plus généreux que les versions « 2 usages » de la gamme.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide hyaluronique" },
      { libelle: "Usage", valeur: "Après-shampoing" },
      { libelle: "Type de cheveux", valeur: "Déshydratés" },
    ],
    usage: [
      "Appliquer après le shampoing sur cheveux essorés, répartir sur longueurs et pointes, laisser poser quelques minutes puis rincer. Convient à un usage plus fréquent que les masques huileux, l'hydratation par l'acide hyaluronique n'alourdissant pas la fibre comme le ferait une huile.",
    ],
    positionnement: [
      "Sa logique hydratante plutôt que nourrissante le distingue des masques à l'huile, argan, monoï ou olive, de la même gamme, pensés pour les cheveux secs en manque de corps gras. Il convient mieux aux cheveux qui manquent d'eau sans être secs au toucher, un profil différent de celui traité par les huiles.",
    ],
    faq: [
      {
        question: "Quelle différence entre hydrater et nourrir un cheveu ?",
        reponse:
          "Hydrater consiste à apporter et retenir de l'eau dans la fibre, le rôle de l'acide hyaluronique ici, tandis que nourrir consiste à apporter des corps gras comme les huiles végétales. Un cheveu peut manquer des deux à la fois, mais les signes diffèrent : manque de rebond pour la déshydratation, aspect rêche au toucher pour le manque de nutrition.",
      },
      {
        question: "Peut-on alterner ce masque avec un masque à l'huile de la même gamme ?",
        reponse:
          "Oui, alterner un masque hydratant comme celui-ci avec un masque nourrissant à l'huile permet de couvrir les deux besoins selon l'état du cheveu au moment du lavage, sans risque d'incompatibilité entre les deux formules.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-nourrissant-boucle-definies-370ml",
    identite: [
      "Ce masque capillaire nourrissant de Flux Care cible spécifiquement les cheveux bouclés, avec pour objectif de définir la boucle plutôt que de simplement hydrater ou nourrir de façon générale. La texture masque, riche, s'adresse aux cheveux bouclés à frisés qui ont tendance à manquer de définition et à frisotter sans soin adapté. Le format, plus généreux que les références « 2 usages » de la gamme, convient à un usage régulier sur une chevelure bouclée qui demande souvent plus de matière qu'un cheveu lisse.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Après-shampoing, définition des boucles" },
      { libelle: "Type de cheveux", valeur: "Bouclés" },
    ],
    usage: [
      "Appliquer généreusement sur cheveux essorés, répartir mèche par mèche pour bien enrober chaque boucle, laisser poser puis rincer à l'eau tiède plutôt que chaude pour ne pas ouvrir excessivement l'écaille. Peut s'utiliser à chaque lavage sur cheveux bouclés, contrairement aux masques plus riches réservés à un usage hebdomadaire.",
    ],
    positionnement: [
      "Ce masque se distingue des formules génériques de la gamme par sa promesse de définition, pensée pour les cheveux bouclés à frisés. Sur cheveux raides ou ondulés, cette valeur ajoutée perd de son sens ; un masque nourrissant classique de la gamme suffira.",
    ],
    faq: [
      {
        question: "Ce masque remplace-t-il un gel ou une crème coiffante pour les boucles ?",
        reponse:
          "Non, il agit en soin après-shampoing pour nourrir et faciliter la définition, mais ne coiffe pas la boucle une fois les cheveux secs. Un produit coiffant appliqué sur cheveux humides après le masque reste nécessaire pour fixer la définition dans la durée.",
      },
      {
        question: "Peut-on l'utiliser à chaque shampoing ?",
        reponse:
          "Oui, sur cheveux bouclés, qui ont généralement besoin de plus de matière grasse que les cheveux raides, un usage à chaque lavage est envisageable sans risque d'alourdissement excessif, contrairement à d'autres masques de la gamme réservés à un usage hebdomadaire.",
      },
    ],
  },
  {
    slug: "flux-care-masque-capillaire-olive-divine-2-usages-200ml",
    identite: [
      "Ce masque capillaire « Olive Divine » mise sur l'huile d'olive, un actif traditionnel du soin capillaire méditerranéen connu pour nourrir en profondeur les cheveux secs. Le format « 2 usages » se destine à deux applications complètes. Sa texture riche s'inscrit dans la famille des masques à l'huile de la gamme, aux côtés de l'argan et du monoï, avec un parfum plus doux et moins exotique que ces derniers.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile d'olive" },
      { libelle: "Usage", valeur: "2 usages par flacon" },
      { libelle: "Type de cheveux", valeur: "Secs" },
    ],
    usage: [
      "Appliquer sur cheveux essorés, longueurs et pointes, laisser poser le temps indiqué puis rincer soigneusement pour éviter tout effet gras. Un usage hebdomadaire convient aux cheveux secs à très secs.",
    ],
    positionnement: [
      "Comparable dans sa richesse aux masques argan et monoï de la même gamme, il se distingue surtout par un parfum plus neutre, pour qui préfère une huile sans fragrance exotique marquée. Sur cheveux fins ou normaux, une formule plus légère de la gamme évitera un effet alourdi.",
    ],
    faq: [
      {
        question: "L'huile d'olive convient-elle à tous les types de cheveux secs ?",
        reponse:
          "Elle convient particulièrement aux cheveux secs à très secs et épais. Sur cheveux fins, même secs, elle peut alourdir la chevelure ; dans ce cas, une version plus légère de la gamme, comme celle à l'eau de coco, sera plus adaptée.",
      },
      {
        question: "Ce masque laisse-t-il un parfum d'huile d'olive perceptible ?",
        reponse:
          "Non, le parfum est travaillé pour rester agréable et discret, sans note alimentaire d'huile d'olive. Une fois les cheveux secs, la fragrance ajoutée prend le dessus sur celle de l'actif lui-même.",
      },
    ],
  },
  {
    slug: "flux-care-masque-chvx-glycolic-glow",
    identite: [
      "Ce masque capillaire « Glycolic Glow » de Flux Care s'appuie sur l'acide glycolique, un acide de fruits surtout connu en soin visage pour son effet exfoliant, ici transposé au cuir chevelu et à la fibre pour désincruster les résidus de silicones et de produits coiffants qui ternissent la brillance. Il s'apparente à un masque clarifiant plutôt qu'à un masque nourrissant classique, pensé pour redonner de l'éclat à des cheveux ternes et alourdis par l'accumulation de soins, plutôt que pour hydrater ou nourrir en profondeur.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide glycolique" },
      { libelle: "Usage", valeur: "Après-shampoing, effet clarifiant" },
      { libelle: "Type de cheveux", valeur: "Ternes, sujets à l'accumulation de résidus" },
    ],
    usage: [
      "S'utilise après le shampoing, à une fréquence plus espacée qu'un masque nourrissant classique — toutes les deux à trois semaines suffit généralement pour un effet clarifiant sans fragiliser la fibre. Laisser poser le temps indiqué puis rincer abondamment.",
    ],
    positionnement: [
      "Sa fonction clarifiante le distingue nettement des masques nourrissants ou hydratants du reste de la gamme : il ne remplace pas un masque au monoï ou à l'argan mais s'utilise en complément, à intervalle plus espacé. Les cuirs chevelus sensibles ou irrités éviteront un usage trop fréquent, l'acide glycolique restant un actif exfoliant.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce masque à chaque lavage ?",
        reponse:
          "Non, son effet exfoliant via l'acide glycolique le réserve à un usage espacé, de l'ordre de toutes les deux à trois semaines. Un usage trop fréquent risquerait d'irriter le cuir chevelu plutôt que d'apporter un bénéfice supplémentaire.",
      },
      {
        question: "Ce masque remplace-t-il un masque nourrissant ?",
        reponse:
          "Non, il a une fonction clarifiante et non nourrissante : il élimine les résidus qui ternissent la fibre plutôt que d'apporter des corps gras. Il se combine avec un masque nourrissant de la gamme, utilisé à un autre moment du mois.",
      },
    ],
  },
  {
    slug: "flux-care-masque-pre-shampooing-capilaire-5-plantes-precieuses-200ml",
    identite: [
      "Ce pré-shampoing capillaire Flux Care associe cinq plantes précieuses, sans que la formule ne détaille davantage leur nature exacte sur l'emballage. Utilisé avant le lavage, il prépare la fibre et le cuir chevelu avant l'action parfois asséchante du shampoing, dans la même logique que le pré-shampoing céramide de la gamme. Sa texture masque se destine aux cheveux qui ont besoin d'un geste supplémentaire avant le lavage plutôt qu'après.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Pré-shampoing, avant lavage" },
      { libelle: "Type de cheveux", valeur: "Secs à fragilisés" },
    ],
    usage: [
      "Appliquer sur cheveux secs avant le shampoing, mèche par mèche, en insistant sur les longueurs. Laisser poser quelques minutes puis procéder au shampoing habituel. Un usage hebdomadaire, en complément d'un après-shampoing les autres jours, constitue un rythme d'entretien raisonnable.",
    ],
    positionnement: [
      "Comme le pré-shampoing céramide de la même marque, ce soin se positionne en amont du lavage et non en remplacement d'un après-shampoing. Il conviendra à qui a le temps d'ajouter une étape dans sa routine capillaire ; pour une routine plus rapide, un masque après-shampoing classique reste suffisant.",
    ],
    faq: [
      {
        question: "Quelle différence avec le pré-shampoing céramide de la même marque ?",
        reponse:
          "Les deux s'utilisent avant le lavage et visent à préparer la fibre, mais celui-ci mise sur un mélange de plantes tandis que l'autre s'appuie spécifiquement sur les céramides. Le choix dépend surtout du type de dommage capillaire à traiter.",
      },
      {
        question: "Ce pré-shampoing est-il indispensable dans une routine capillaire ?",
        reponse:
          "Non, il s'agit d'une étape complémentaire plutôt qu'indispensable. Une routine avec shampoing et après-shampoing ou masque suffit dans la majorité des cas ; le pré-shampoing s'adresse surtout aux cheveux nettement fragilisés qui bénéficient d'un geste supplémentaire.",
      },
    ],
  },
  {
    slug: "flux-care-masque-pre-shampooing-capilaire-fleur-coton-huile-rose-200ml",
    identite: [
      "Ce pré-shampoing capillaire associe la fleur de coton et l'huile de rose, pour un parfum floral doux et un effet préparateur avant le lavage. Comme les autres pré-shampoings de la gamme Flux Care, il s'applique avant le shampoing plutôt qu'après, dans l'idée de limiter l'effet asséchant du lavage sur des cheveux déjà fragilisés. Sa texture masque cible les cheveux secs en quête de douceur, avec une fragrance plus délicate que la version aux cinq plantes de la même collection.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Fleur de coton et huile de rose" },
      { libelle: "Usage", valeur: "Pré-shampoing, avant lavage" },
      { libelle: "Type de cheveux", valeur: "Secs" },
    ],
    usage: [
      "Appliquer sur cheveux secs avant le shampoing, laisser poser quelques minutes, puis procéder au lavage habituel. Un usage hebdomadaire convient à un entretien régulier des cheveux secs.",
    ],
    positionnement: [
      "Sa note fleur de coton et rose le distingue des autres pré-shampoings de la gamme par un parfum plus délicat. Sur le plan fonctionnel, il reste comparable aux autres références pré-shampoing capillaire de Flux Care ; le choix entre elles tient surtout à la préférence olfactive et aux actifs recherchés.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce pré-shampoing tous les jours ?",
        reponse:
          "Non, un usage hebdomadaire suffit généralement. Une utilisation quotidienne n'apporterait pas de bénéfice supplémentaire et alourdirait inutilement une routine qui inclut déjà un shampoing et, la plupart du temps, un après-shampoing.",
      },
      {
        question: "Ce pré-shampoing peut-il remplacer l'après-shampoing ?",
        reponse:
          "Non, les deux ont des rôles différents : le pré-shampoing prépare la fibre avant le lavage, tandis que l'après-shampoing démêle et referme l'écaille après. Les deux sont complémentaires plutôt qu'interchangeables.",
      },
    ],
  },
  {
    slug: "flux-care-masque-pre-shampooing-capilaire-huile-dargan-200ml",
    identite: [
      "Cette version du pré-shampoing capillaire Flux Care mise sur l'huile d'argan, actif nourrissant classique du soin capillaire, appliquée en amont du lavage plutôt qu'en après-shampoing. L'idée est de nourrir la fibre avant l'action du shampoing, qui peut assécher davantage des cheveux déjà secs ou indisciplinés. Sa texture masque cible les cheveux secs à épais, dans la même logique que les autres masques à l'argan de la gamme, mais avec un usage en amont du lavage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile d'argan" },
      { libelle: "Usage", valeur: "Pré-shampoing, avant lavage" },
      { libelle: "Type de cheveux", valeur: "Secs, indisciplinés" },
    ],
    usage: [
      "Appliquer sur cheveux secs avant le shampoing, en insistant sur les longueurs, laisser poser quelques minutes puis procéder au lavage habituel qui élimine l'excès d'huile. Un usage hebdomadaire convient aux cheveux secs à épais.",
    ],
    positionnement: [
      "Face au masque capillaire argan-cranberry de la même gamme, qui s'utilise après le shampoing, ce pré-shampoing intervient en amont et se rince ensuite avec le lavage. Les deux peuvent se combiner dans une routine complète ; utilisés seuls, chacun répond à un moment différent du lavage.",
    ],
    faq: [
      {
        question: "Peut-on combiner ce pré-shampoing avec le masque argan-cranberry après-shampoing de la même marque ?",
        reponse:
          "Oui, les deux se combinent sans problème puisqu'ils interviennent à des moments différents du lavage, l'un avant pour préparer la fibre, l'autre après pour la nourrir en profondeur. Cette combinaison convient particulièrement aux cheveux très secs ou abîmés.",
      },
      {
        question: "Ce pré-shampoing laisse-t-il les cheveux gras après le lavage ?",
        reponse:
          "Non, le shampoing qui suit élimine l'essentiel de l'huile appliquée. Un rinçage soigneux du shampoing reste toutefois nécessaire pour éviter toute sensation de résidu, en particulier sur cheveux fins.",
      },
    ],
  },
  {
    slug: "flux-care-masque-pre-shampooing-capilaire-olive-divine-200ml",
    identite: [
      "Cette version « Olive Divine » du pré-shampoing capillaire Flux Care reprend l'huile d'olive du masque après-shampoing du même nom, mais dans une logique de préparation avant le lavage plutôt que de soin après. L'huile d'olive nourrit la fibre en profondeur avant que le shampoing ne vienne la nettoyer, ce qui limite la sensation de sécheresse post-lavage sur les cheveux secs. La texture masque, riche, s'adresse aux mêmes cheveux secs à très secs que la version après-shampoing.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile d'olive" },
      { libelle: "Usage", valeur: "Pré-shampoing, avant lavage" },
      { libelle: "Type de cheveux", valeur: "Secs à très secs" },
    ],
    usage: [
      "Appliquer sur cheveux secs avant le shampoing, laisser poser quelques minutes, puis laver normalement. Un usage hebdomadaire, en alternance avec le masque olive divine après-shampoing de la gamme, couvre les deux moments du lavage pour les cheveux très secs.",
    ],
    positionnement: [
      "Il se distingue du masque olive divine après-shampoing de la même gamme par son moment d'application, avant plutôt qu'après le lavage. Les deux partagent le même actif et peuvent s'utiliser en alternance plutôt qu'ensemble le même jour, sauf besoin ponctuel de nutrition intensive.",
    ],
    faq: [
      {
        question: "Faut-il utiliser ce pré-shampoing et le masque après-shampoing olive divine le même jour ?",
        reponse:
          "Ce n'est pas nécessaire dans la plupart des cas : les deux apportent une nutrition à base d'huile d'olive, à des moments différents du lavage. Les alterner d'une semaine sur l'autre suffit généralement, sauf besoin ponctuel de nutrition intensive sur cheveux très secs.",
      },
      {
        question: "Ce pré-shampoing convient-il aux cheveux fins ?",
        reponse:
          "Il est plutôt pensé pour les cheveux secs à épais qui supportent bien un apport riche en huile. Sur cheveux fins, un pré-shampoing plus léger de la gamme, aux cinq plantes par exemple, limitera mieux le risque d'alourdissement après le lavage.",
      },
    ],
  },
  {
    slug: "flux-care-masque-pre-shampooing-capilaire-expert-bond-restore",
    identite: [
      "Ce pré-shampoing « Expert Bond Restore » de Flux Care se positionne comme la référence la plus technique de la gamme des pré-shampoings, avec une promesse centrée sur la restauration des liaisons internes de la fibre capillaire plutôt que sur un simple apport nourrissant ou parfumé. Il s'adresse aux cheveux nettement abîmés par des traitements chimiques répétés — colorations, décolorations, lissages — pour lesquels une nutrition classique à l'huile ne suffit pas toujours à redonner de la tenue à la fibre.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Pré-shampoing, soin réparateur" },
      { libelle: "Type de cheveux", valeur: "Très abîmés par traitements chimiques" },
    ],
    usage: [
      "Appliquer sur cheveux secs avant le shampoing, en insistant sur les zones les plus abîmées, laisser poser selon le temps indiqué puis procéder au lavage habituel. Un usage hebdomadaire ou plus rapproché convient aux cheveux très abîmés, en complément d'un masque après-shampoing réparateur les autres jours.",
    ],
    positionnement: [
      "Plus technique que les pré-shampoings aux huiles ou aux plantes de la même gamme, il cible spécifiquement les cheveux décolorés ou lissés chimiquement. Sur des cheveux simplement secs sans traitement chimique lourd, un pré-shampoing plus simple de la gamme suffit largement.",
    ],
    faq: [
      {
        question: "Ce soin convient-il après une décoloration récente ?",
        reponse:
          "Oui, c'est précisément le profil de cheveux visé par cette référence, pensée pour les fibres fragilisées par des traitements chimiques comme la décoloration. Il complète utilement une routine de soin post-décoloration, sans remplacer un après-shampoing réparateur.",
      },
      {
        question: "Est-il utile sur des cheveux naturels non traités chimiquement ?",
        reponse:
          "Son bénéfice est surtout marqué sur des cheveux abîmés par la couleur ou le lissage. Sur cheveux naturels et simplement secs, une référence plus simple de la gamme des pré-shampoings apporte un résultat comparable pour un usage plus généraliste.",
      },
    ],
  },
  {
    slug: "flux-care-masque-sans-sulfate-avocat",
    identite: [
      "Ce masque sans sulfate de Flux Care mise sur l'avocat, un actif riche en corps gras naturellement nourrissant, dans une formule dépourvue de sulfates. L'absence de sulfates, des agents lavants parfois jugés irritants pour le cuir chevelu ou décapants pour une coloration, s'adresse en particulier aux cheveux colorés ou au cuir chevelu sensible, pour lesquels une formule plus douce est recherchée. Sa texture masque riche cible les cheveux secs en quête de nutrition, dans un format pensé pour les routines douces plutôt que pour un lavage classique.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Avocat" },
      { libelle: "Usage", valeur: "Après-shampoing, formule sans sulfate" },
      { libelle: "Type de cheveux", valeur: "Secs, sensibles ou colorés" },
    ],
    usage: [
      "Appliquer sur cheveux essorés après le shampoing, répartir sur longueurs et pointes, laisser poser puis rincer. Sa formule sans sulfate le rend adapté à un usage plus fréquent que des masques aux tensioactifs plus agressifs, sans risque de dessécher davantage un cuir chevelu déjà sensible.",
    ],
    positionnement: [
      "Sa mention « sans sulfate » le distingue des autres masques de la gamme et s'adresse spécifiquement aux cheveux colorés ou aux cuirs chevelus réactifs qui cherchent à éviter les tensioactifs jugés agressifs. Sur cheveux naturels sans sensibilité particulière, les masques aux huiles classiques de la gamme offrent un résultat nourrissant comparable.",
    ],
    faq: [
      {
        question: "Pourquoi rechercher un masque sans sulfate ?",
        reponse:
          "Les sulfates sont des agents lavants efficaces mais parfois jugés irritants pour le cuir chevelu ou décapants pour une coloration. Une formule sans sulfate convient donc particulièrement aux cheveux colorés ou aux cuirs chevelus sensibles qui réagissent aux lavages classiques.",
      },
      {
        question: "Ce masque convient-il aux cheveux colorés ?",
        reponse:
          "Oui, l'absence de sulfates en fait un choix pertinent pour les cheveux colorés, dont la couleur peut être ternie par des tensioactifs agressifs. L'avocat apporte en complément une nutrition utile aux cheveux souvent asséchés par le processus de coloration.",
      },
    ],
  },
  {
    slug: "flux-care-masque-sans-sulfate-color-fix",
    identite: [
      "Cette référence « Color Fix » de la ligne sans sulfate Flux Care s'adresse spécifiquement aux cheveux colorés, avec pour objectif de préserver la couleur plus longtemps en évitant les tensioactifs agressifs qui accélèrent son délavage. Contrairement à la version avocat de la même ligne, centrée sur la nutrition, celle-ci met l'accent sur la protection de la couleur, un besoin propre aux cheveux qui viennent de subir une coloration ou une mèche.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Après-shampoing, formule sans sulfate" },
      { libelle: "Type de cheveux", valeur: "Colorés" },
    ],
    usage: [
      "Appliquer après le shampoing sur cheveux essorés, laisser poser puis rincer à l'eau tiède plutôt que chaude, la chaleur ouvrant l'écaille et accélérant le délavage de la couleur. Un usage à chaque lavage convient aux cheveux fraîchement colorés.",
    ],
    positionnement: [
      "Sa promesse « Color Fix » le distingue de la version avocat de la même ligne sans sulfate, plus généraliste. Il s'adresse spécifiquement aux cheveux colorés qui veulent préserver l'éclat de leur teinte ; sur cheveux naturels non colorés, cette promesse perd son intérêt et un masque nourrissant classique suffit.",
    ],
    faq: [
      {
        question: "Ce masque empêche-t-il totalement la couleur de se délaver ?",
        reponse:
          "Non, aucun soin cosmétique n'empêche totalement le délavage naturel d'une coloration, qui reste un phénomène progressif inévitable. Ce masque aide à ralentir ce processus en évitant les tensioactifs les plus agressifs, en complément d'un rinçage à l'eau tiède.",
      },
      {
        question: "Quelle différence avec la version avocat de la même ligne sans sulfate ?",
        reponse:
          "Les deux partagent l'absence de sulfates, mais celle-ci cible la préservation de la couleur tandis que la version avocat vise avant tout la nutrition. Sur cheveux colorés et secs à la fois, les deux peuvent s'alterner selon le besoin du moment.",
      },
    ],
  },
  {
    slug: "flux-care-masque-visage-argile-verte-aloe-vera-150ml",
    identite: [
      "Ce masque visage associe l'argile verte, connue pour son pouvoir absorbant sur les peaux à tendance grasse, et l'aloe vera, qui apaise et limite la sensation de tiraillement souvent associée aux argiles séchantes. La texture, en pâte à appliquer en couche fine, vise à resserrer visuellement les pores et à matifier la peau après séchage, tout en restant plus confortable qu'une argile verte seule grâce à l'aloe vera. Il s'adresse aux peaux mixtes à grasses sujettes aux brillances et aux imperfections.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Argile verte et aloe vera" },
      { libelle: "Texture", valeur: "Pâte à masque" },
      { libelle: "Type de peau", valeur: "Mixte à grasse" },
    ],
    usage: [
      "Appliquer en couche fine sur peau nettoyée, en évitant le contour des yeux, laisser poser jusqu'à léger séchage puis rincer à l'eau tiède avant que l'argile ne soit complètement sèche et craquelée. Un usage d'une à deux fois par semaine suffit ; plus fréquent, il risque d'assécher excessivement la peau.",
    ],
    positionnement: [
      "Face à un masque à l'argile verte seule, la présence d'aloe vera rend celui-ci plus confortable pour une peau mixte plutôt que franchement grasse. Sur une peau très grasse et épaisse, une argile plus pure et plus absorbante restera plus efficace ; sur peau sèche, ce masque n'est pas indiqué.",
    ],
    faq: [
      {
        question: "Peut-on laisser sécher complètement l'argile avant de rincer ?",
        reponse:
          "Il vaut mieux rincer avant un séchage complet et craquelé, qui tire excessivement sur la peau et peut irriter, en particulier sur une peau mixte plutôt que franchement grasse. L'aloe vera de la formule limite ce risque mais ne l'annule pas totalement.",
      },
      {
        question: "Ce masque convient-il en usage fréquent, plusieurs fois par semaine ?",
        reponse:
          "Une à deux fois par semaine reste le rythme conseillé pour une argile, même adoucie par l'aloe vera. Un usage plus fréquent risquerait de déséquilibrer le film hydrolipidique de la peau plutôt que d'améliorer son aspect.",
      },
    ],
  },
  {
    slug: "flux-care-masque-visage-argile-verte-peaux-grasses",
    identite: [
      "Cette version du masque à l'argile verte Flux Care s'adresse spécifiquement aux peaux grasses, sans l'apport apaisant de l'aloe vera présent dans l'autre référence de la gamme. L'argile verte, riche en minéraux absorbants, agit ici en profondeur pour capter l'excès de sébum et resserrer visuellement l'aspect des pores dilatés, typique des peaux grasses sujettes aux points noirs et aux brillances en cours de journée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Argile verte" },
      { libelle: "Texture", valeur: "Pâte à masque" },
      { libelle: "Type de peau", valeur: "Grasse" },
    ],
    usage: [
      "Appliquer en couche fine sur peau nettoyée, en évitant le contour des yeux et des lèvres, laisser poser une dizaine de minutes puis rincer à l'eau tiède avant séchage complet. Une à deux applications par semaine suffisent pour une peau grasse ; au-delà, la peau risque de réagir en sécrétant davantage de sébum en compensation.",
    ],
    positionnement: [
      "Plus concentré que la version avec aloe vera de la même gamme, ce masque cible les peaux franchement grasses qui tolèrent bien l'effet asséchant de l'argile. Sur peau mixte ou sensible, la version avec aloe vera restera plus confortable et moins susceptible de provoquer des tiraillements.",
    ],
    faq: [
      {
        question: "Ce masque aide-t-il à réduire les points noirs ?",
        reponse:
          "L'argile verte aide à absorber l'excès de sébum et à limiter visuellement la dilatation des pores, ce qui améliore l'aspect de la peau sujette aux points noirs. Elle n'élimine pas les points noirs déjà formés, pour lesquels un geste d'extraction ou un soin exfoliant complémentaire reste nécessaire.",
      },
      {
        question: "Peut-on l'utiliser sur peau mixte, grasse seulement en zone T ?",
        reponse:
          "Il est possible de le réserver à la zone T, front, nez et menton, plutôt que d'appliquer sur l'ensemble du visage, pour éviter d'assécher les zones plus sèches des joues sur une peau mixte.",
      },
    ],
  },
  {
    slug: "flux-care-masque-visage-curcuma-carotte-150ml",
    identite: [
      "Ce masque visage associe le curcuma, épice traditionnellement utilisée pour son effet éclat, et la carotte, riche en bêta-carotène et réputée pour aider à unifier le teint. La texture, à appliquer en couche sur peau nettoyée, vise à redonner de l'éclat aux teints ternes ou marqués par des taches pigmentaires, en complément d'une protection solaire quotidienne indispensable pour ce type de préoccupation. Le curcuma peut colorer temporairement la peau d'une teinte jaunâtre juste après application, un effet normal qui s'estompe au rinçage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Curcuma et carotte" },
      { libelle: "Texture", valeur: "Pâte à masque" },
      { libelle: "Type de peau", valeur: "Terne, marquée par des taches" },
    ],
    usage: [
      "Appliquer en couche sur peau nettoyée, laisser poser le temps indiqué puis rincer soigneusement à l'eau tiède, en insistant si une légère teinte jaune persiste sur la peau. Un usage hebdomadaire convient pour entretenir l'éclat du teint ; l'application d'une protection solaire au quotidien reste indispensable en cas de recherche d'unification du teint.",
    ],
    positionnement: [
      "Ce masque s'adresse à un teint terne ou irrégulier plutôt qu'à un problème de peau grasse ou déshydratée, un objectif différent des masques à l'argile ou à l'aloe vera du même rayon. Sur une peau à tendance grasse et sujette aux imperfections, un masque à l'argile restera plus indiqué.",
    ],
    faq: [
      {
        question: "Le curcuma laisse-t-il la peau jaune après le masque ?",
        reponse:
          "Une légère teinte jaunâtre peut apparaître juste après application, un effet normal et temporaire du pigment du curcuma. Elle s'estompe généralement après un rinçage soigneux à l'eau tiède ; en cas de persistance, un nettoyage doux supplémentaire suffit.",
      },
      {
        question: "Ce masque suffit-il à atténuer des taches pigmentaires installées ?",
        reponse:
          "Il aide à améliorer visuellement l'éclat du teint, mais des taches pigmentaires installées de longue date demandent généralement une routine plus complète, avec des actifs ciblés utilisés au quotidien et une protection solaire rigoureuse, plutôt qu'un masque hebdomadaire seul.",
      },
    ],
  },
  {
    slug: "flux-care-masque-visage-eau-rose-argile-blanche-150ml",
    identite: [
      "Ce masque visage associe l'eau de rose, connue pour son effet apaisant et rafraîchissant, et l'argile blanche, la plus douce des argiles cosmétiques et la mieux tolérée par les peaux sensibles. Contrairement à l'argile verte plus absorbante utilisée ailleurs dans la gamme, cette combinaison vise les peaux normales à sèches ou sensibles qui ont besoin d'un nettoyage en douceur sans effet asséchant marqué.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau de rose et argile blanche" },
      { libelle: "Texture", valeur: "Pâte à masque douce" },
      { libelle: "Type de peau", valeur: "Normale à sèche, sensible" },
    ],
    usage: [
      "Appliquer en couche fine sur peau nettoyée, laisser poser le temps indiqué sans attendre un séchage complet, puis rincer à l'eau tiède. Un usage hebdomadaire convient aux peaux sensibles ou sèches, qui tolèrent moins bien une fréquence plus élevée que les peaux grasses.",
    ],
    positionnement: [
      "Sa douceur, portée par l'argile blanche et l'eau de rose, le distingue nettement des masques à l'argile verte du même rayon, pensés pour les peaux grasses. Sur une peau grasse ou à imperfections marquées, ce masque apportera moins de résultat visible qu'une argile plus absorbante.",
    ],
    faq: [
      {
        question: "Ce masque convient-il aux peaux sensibles et réactives ?",
        reponse:
          "Oui, l'argile blanche est la mieux tolérée des argiles cosmétiques et l'eau de rose apporte un effet apaisant, ce qui en fait une option adaptée aux peaux sensibles qui ne supportent pas les argiles plus absorbantes comme l'argile verte.",
      },
      {
        question: "Peut-on l'utiliser sur une peau grasse à imperfections ?",
        reponse:
          "Il reste utilisable, mais son effet absorbant est plus limité que celui d'une argile verte. Une peau franchement grasse et sujette aux imperfections trouvera davantage de bénéfice dans un masque à l'argile verte du même rayon.",
      },
    ],
  },
  {
    slug: "flux-care-masque-visage-huile-dargan-cranberry-150ml",
    identite: [
      "Ce masque visage associe l'huile d'argan, riche en acides gras et en vitamine E, et la cranberry, apportant une note fruitée et un léger effet antioxydant. Positionné dans le soin anti-âge du visage, il vise à nourrir en profondeur les peaux matures ou déshydratées, qui perdent en confort et en souplesse avec le temps, en apportant un supplément de corps gras que la peau ne produit plus en quantité suffisante.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile d'argan et cranberry" },
      { libelle: "Texture", valeur: "Pâte à masque riche" },
      { libelle: "Type de peau", valeur: "Mature, déshydratée" },
    ],
    usage: [
      "Appliquer en couche généreuse sur peau nettoyée, laisser poser le temps indiqué puis rincer à l'eau tiède ou retirer l'excédent avec un coton avant de rincer. Un usage hebdomadaire, en complément d'une crème anti-âge quotidienne, convient aux peaux matures en quête de confort supplémentaire.",
    ],
    positionnement: [
      "Sa richesse en huile d'argan le rapproche d'un soin nourrissant plutôt que d'un masque purifiant comme les versions à l'argile du même rayon. Il s'adresse aux peaux matures ou très sèches ; sur une peau jeune ou à tendance grasse, il risque d'être trop riche et de favoriser les imperfections.",
    ],
    faq: [
      {
        question: "Ce masque remplace-t-il une crème anti-âge quotidienne ?",
        reponse:
          "Non, il s'agit d'un soin hebdomadaire complémentaire qui apporte un supplément ponctuel de nutrition, et non d'un soin quotidien. Une crème anti-âge appliquée matin et soir reste la base de la routine, ce masque venant en renfort une fois par semaine.",
      },
      {
        question: "Ce masque convient-il aux peaux à tendance grasse ?",
        reponse:
          "Sa richesse en huile d'argan le rend moins adapté aux peaux grasses ou à tendance acnéique, chez qui il risque de favoriser les imperfections. Ces peaux trouveront davantage de bénéfice dans un masque à l'argile plus purifiant.",
      },
    ],
  },
];
