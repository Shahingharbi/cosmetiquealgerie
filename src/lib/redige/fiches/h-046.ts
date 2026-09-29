import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "kerastase-elixir-ultime-huile",
    identite: [
      "L'Elixir Ultime original de Kérastase est l'huile signature de la maison, construite autour de l'huile de camélia. Sa texture sèche pénètre vite et laisse un fini soyeux plutôt que gras, ce qui permet de l'utiliser sur cheveux mouillés comme sur cheveux secs, en soin de finition ou avant coiffage.",
    ],
    faits: [
      { libelle: "Texture", valeur: "huile sèche, non grasse" },
      { libelle: "Actif principal", valeur: "huile de camélia" },
      { libelle: "Type de cheveux", valeur: "tous types, cheveux ternes ou secs" },
      { libelle: "Usage", valeur: "cheveux mouillés ou secs, en finition" },
    ],
    usage: [
      "Appliquer une à deux pressions sur les longueurs et les pointes, sur cheveux humides après le shampoing pour faciliter le démêlage, ou sur cheveux secs pour raviver l'éclat avant une sortie. Éviter les racines pour ne pas alourdir le cheveu.",
    ],
    positionnement: [
      "Comparée aux sérums silicone qui lissent surtout en surface, cette huile nourrit la fibre en profondeur tout en gardant un fini soyeux plutôt que brillant-gras. Elle convient moins aux cheveux fins et plats, qui craignent tout excès de matière près des racines.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur cheveux fins ?",
        reponse:
          "Oui, en petite quantité et uniquement sur les pointes. Sur cheveux fins avec racines grasses, elle peut vite alourdir : mieux vaut réserver son usage aux longueurs abîmées.",
      },
      {
        question: "Avant ou après le séchage ?",
        reponse:
          "Les deux fonctionnent : sur cheveux humides elle protège pendant le brushing, sur cheveux secs elle sert de finition pour raviver la brillance sans repasser au sèche-cheveux.",
      },
    ],
  },
  {
    slug: "kerastase-elixir-ultime-lhuile-rose",
    identite: [
      "L'Huile Rose est la version allégée de l'Elixir Ultime, pensée pour les cheveux fins ou normaux qui ne supportent pas une huile trop riche. Sa texture plus fluide s'absorbe rapidement et apporte brillance et douceur sans donner d'effet lourd ni de racines grasses.",
    ],
    faits: [
      { libelle: "Texture", valeur: "huile fluide, légère" },
      { libelle: "Actif principal", valeur: "huile de camélia, formule allégée" },
      { libelle: "Type de cheveux", valeur: "fins à normaux" },
      { libelle: "Usage", valeur: "application quotidienne possible" },
    ],
    usage: [
      "Une pression suffit sur cheveux mi-longs, répartie sur les longueurs à la main, sur cheveux secs ou humides. Sa texture fluide permet de l'intégrer à la routine quotidienne sans surcharger la fibre.",
    ],
    positionnement: [
      "Face à l'Elixir Ultime original, plus riche, cette version convient aux cheveux fins ou aux climats humides où une huile dense collerait vite. Elle reste moins indiquée pour des cheveux épais très secs, qui ont besoin d'un apport plus nourrissant.",
    ],
    faq: [
      {
        question: "Quelle différence avec l'Elixir Ultime original ?",
        reponse:
          "Une texture plus légère, pensée pour les cheveux fins ou normaux qui absorbent moins bien la matière grasse. L'original reste préférable sur cheveux épais ou très secs en manque de nutrition.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa texture fluide le permet sur les longueurs et les pointes, à condition de ne pas en appliquer sur les racines.",
      },
    ],
  },
  {
    slug: "kerastase-genesis-defense-thermique-fluide-fortifiant",
    identite: [
      "Ce fluide thermoprotecteur appartient à la gamme Genesis, destinée aux cheveux affaiblis sujets à la chute liée à la casse. Il protège la fibre de la chaleur du sèche-cheveux ou du lisseur tout en la renforçant, avec une texture légère qui ne laisse ni film ni effet gras.",
    ],
    faits: [
      { libelle: "Texture", valeur: "fluide léger" },
      { libelle: "Gamme", valeur: "Genesis, cheveux affaiblis et chute" },
      { libelle: "Type de cheveux", valeur: "fragilisés, sujets à la casse" },
      { libelle: "Usage", valeur: "avant coiffage à chaud" },
    ],
    usage: [
      "Répartir sur cheveux humides avant brushing ou lissage, sur les longueurs et les pointes. Ce fluide ne remplace pas un soin de fond mais s'intègre juste avant l'étape de chaleur.",
    ],
    positionnement: [
      "Il se distingue d'un protecteur thermique classique par son association au soin anti-chute de la gamme Genesis. Il présente moins d'intérêt pour qui cherche seulement un effet lissant sans souci de fragilité capillaire.",
    ],
    faq: [
      {
        question: "Ce fluide remplace-t-il un soin anti-chute ?",
        reponse:
          "Non, il protège la fibre pendant le coiffage à chaud. L'action anti-chute de la gamme Genesis vient surtout du sérum et du shampoing associés.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse:
          "Oui, il n'a pas d'action décapante et peut s'utiliser sur cheveux colorés fragilisés, en complément d'un soin adapté à la couleur si besoin.",
      },
    ],
  },
  {
    slug: "kerastase-genesis-serum-anti-chute-fortifiant-30ml",
    identite: [
      "Ce sérum du cuir chevelu appartient à la gamme Genesis, pensée pour les cheveux affaiblis sujets à la chute liée à la casse. Il se concentre sur la racine plutôt que sur les longueurs, avec une texture fluide qui pénètre sans laisser de film gras.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Genesis, anti-chute fortifiant" },
      { libelle: "Zone", valeur: "cuir chevelu" },
      { libelle: "Type de cheveux", valeur: "affaiblis, chute liée à la casse" },
    ],
    usage: [
      "Appliquer quelques gouttes sur cuir chevelu sec ou légèrement humide, masser du bout des doigts pour favoriser la pénétration, sans rincer. Une cure de plusieurs semaines est nécessaire pour juger de l'effet.",
    ],
    positionnement: [
      "Ce sérum cible la chute liée à la fragilité de la fibre, pas une chute hormonale ou saisonnière. En cas de chute brutale ou de plaques, un avis médical reste la première étape.",
    ],
    faq: [
      {
        question: "En combien de temps voit-on un effet ?",
        reponse:
          "Comme pour tout soin anti-chute, il faut compter plusieurs semaines d'usage régulier avant de juger, la repousse suivant le cycle naturel du cheveu.",
      },
      {
        question: "Peut-on l'associer à un shampoing anti-chute ?",
        reponse:
          "Oui, c'est la logique de la gamme Genesis : le shampoing prépare le cuir chevelu, le sérum agit ensuite en soin ciblé laissé en place.",
      },
    ],
  },
  {
    slug: "kerastase-k-resistance-ciment-thermique-150ml",
    identite: [
      "Le Ciment Thermique appartient à la gamme Résistance, conçue pour les cheveux abîmés et fragilisés par la chaleur ou la coloration. Cette crème sans rinçage protège la fibre pendant le coiffage à chaud tout en la renforçant dans la durée.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Résistance, cheveux abîmés" },
      { libelle: "Texture", valeur: "crème sans rinçage" },
      { libelle: "Type de cheveux", valeur: "fragilisés, cassants" },
    ],
    usage: [
      "Répartir sur cheveux humides essorés, des longueurs aux pointes, avant séchage ou lissage. Éviter les racines pour ne pas alourdir des cheveux fins.",
    ],
    positionnement: [
      "Plus riche qu'un simple spray thermoprotecteur, cette crème vise une réparation dans la durée et se réserve aux cheveux réellement abîmés. Les cheveux fins et souples n'ont pas besoin d'une texture aussi dense.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sans source de chaleur ensuite ?",
        reponse:
          "Oui, elle agit aussi comme soin sans rinçage au quotidien, mais son intérêt principal est de protéger la fibre pendant le brushing ou le lissage.",
      },
      {
        question: "Convient-elle aux cheveux fins ?",
        reponse:
          "Sa texture crème est plutôt pensée pour des cheveux épais ou très abîmés. Sur cheveux fins, une version plus légère évite d'alourdir les racines.",
      },
    ],
  },
  {
    slug: "kerastase-nutritive-8h-magic-night-serum-30ml",
    identite: [
      "Ce sérum de nuit de la gamme Nutritive se laisse poser pendant le sommeil sur cheveux secs ou déshydratés. Sa formule sans rinçage nourrit la fibre en profondeur pour retrouver un cheveu plus souple et discipliné au réveil.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Nutritive, cheveux secs" },
      { libelle: "Usage", valeur: "application le soir, sans rinçage" },
      { libelle: "Type de cheveux", valeur: "secs, ternes" },
    ],
    usage: [
      "Appliquer quelques gouttes le soir sur cheveux secs ou légèrement humides, sur les longueurs et les pointes, sans rincer. Un léger coiffage au réveil suffit généralement.",
    ],
    positionnement: [
      "Il se distingue d'un soin nourrissant classique par son usage nocturne, qui laisse le temps à la formule d'agir sans contrainte de rinçage. Moins utile sur cheveux fins ou déjà bien hydratés, qu'il risquerait d'alourdir.",
    ],
    faq: [
      {
        question: "Faut-il rincer le matin ?",
        reponse:
          "Non, c'est un soin sans rinçage pensé pour agir toute la nuit. Un coiffage léger au réveil suffit pour répartir le résultat.",
      },
      {
        question: "Peut-on l'utiliser tous les soirs ?",
        reponse:
          "Sur cheveux très secs, un usage quotidien est possible. Sur cheveux normaux, deux à trois applications par semaine évitent un effet trop chargé.",
      },
    ],
  },
  {
    slug: "kerastase-nutritive-bain-satin-riche",
    identite: [
      "Ce shampoing de la gamme Nutritive est formulé pour les cheveux secs, épais ou indisciplinés en manque de nutrition. Sa texture riche nettoie en douceur tout en déposant un premier niveau de nutrition dès le lavage, pour des longueurs plus souples au démêlage.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Nutritive" },
      { libelle: "Texture", valeur: "bain riche, crémeux" },
      { libelle: "Type de cheveux", valeur: "secs, épais, indisciplinés" },
    ],
    usage: [
      "Appliquer sur cheveux mouillés, faire mousser sur le cuir chevelu puis répartir sur les longueurs, laisser poser un instant avant de rincer. Un soin Nutritive appliqué ensuite prolonge l'effet.",
    ],
    positionnement: [
      "Plus riche que le Bain Satin classique de la même gamme, il vise les cheveux réellement secs ou épais. Sur cheveux fins ou déjà souples, cette richesse peut alourdir dès le lavage.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur cheveux colorés ?",
        reponse:
          "Oui, il n'est pas conçu pour décaper la couleur, mais une gamme dédiée aux cheveux colorés reste préférable si la coloration est le souci principal.",
      },
      {
        question: "Faut-il un soin après ce shampoing ?",
        reponse:
          "La gamme Nutritive se pense en rituel : un masque ou un soin sans rinçage après ce bain complète l'action nourrissante sur cheveux très secs.",
      },
    ],
  },
  {
    slug: "kerastase-premiere-shampooing-decalcifiant-reparateur-80ml",
    identite: [
      "Ce shampoing décalcifiant appartient à la gamme Première, pensée pour les cheveux fragilisés par les agressions répétées : chaleur, coloration, eau calcaire. Il élimine les dépôts minéraux qui s'accumulent sur la fibre et alourdissent le résultat des soins suivants, en petit format découverte.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Première" },
      { libelle: "Fonction", valeur: "décalcifiant, réparateur" },
      { libelle: "Type de cheveux", valeur: "fragilisés, exposés à l'eau calcaire" },
    ],
    usage: [
      "Utiliser en shampoing préparateur avant le soin habituel, une à deux fois par semaine selon la dureté de l'eau, en faisant bien mousser sur le cuir chevelu puis les longueurs.",
    ],
    positionnement: [
      "Il ne remplace pas le shampoing quotidien mais le précède, pour que les soins réparateurs suivants pénètrent mieux. Son intérêt est surtout marqué dans les régions à eau calcaire.",
    ],
    faq: [
      {
        question: "Remplace-t-il le shampoing habituel ?",
        reponse:
          "Non, il s'utilise en préparation, une à deux fois par semaine, avant le shampoing et le soin de routine habituels.",
      },
      {
        question: "Pourquoi décalcifier ses cheveux ?",
        reponse:
          "L'eau calcaire dépose des minéraux sur la fibre qui la rendent terne et moins réceptive aux soins. Ce shampoing élimine ces dépôts avant le rituel habituel.",
      },
    ],
  },
  {
    slug: "kerastase-reflection-touche-chromatique",
    identite: [
      "La Touche Chromatique est un correcteur de racines de la gamme Réflection, destiné aux cheveux colorés entre deux rendez-vous chez le coloriste. Il camoufle repousses ou fils blancs visibles à la racine, en teinte proche de la couleur d'origine, sans les contraintes d'une coloration complète.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Réflection, cheveux colorés" },
      { libelle: "Zone", valeur: "racines" },
      { libelle: "Usage", valeur: "retouche ponctuelle entre deux colorations" },
    ],
    usage: [
      "Appliquer sur racines sèches, à l'endroit précis à camoufler, en petite quantité, puis coiffer normalement. Le produit part au shampoing suivant, sans engagement dans la durée.",
    ],
    positionnement: [
      "C'est une alternative rapide à une retouche en salon pour gagner quelques semaines de tenue visuelle. Il ne corrige pas la couleur sur l'ensemble de la chevelure et ne remplace pas une coloration professionnelle.",
    ],
    faq: [
      {
        question: "Est-ce une coloration permanente ?",
        reponse:
          "Non, c'est un correcteur temporaire qui part au lavage suivant. Il sert à patienter entre deux rendez-vous coloration, pas à recolorer durablement.",
      },
      {
        question: "Comment choisir la teinte ?",
        reponse:
          "Le choix se fait par rapprochement avec la couleur actuelle des racines à camoufler. En cas de doute entre deux teintes, la plus proche du reflet naturel reste la plus discrète.",
      },
    ],
  },
  {
    slug: "kerastase-resistance-extentioniste-thermique-150ml",
    identite: [
      "Ce soin thermoprotecteur de la gamme Résistance Extentioniste s'adresse aux cheveux longs ou en cours d'allongement, souvent fragilisés sur les longueurs. Il protège la fibre pendant le coiffage à chaud tout en apportant de la discipline sur des pointes plus exposées à la casse.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Résistance Extentioniste" },
      { libelle: "Type de cheveux", valeur: "longs, fragilisés en pointes" },
      { libelle: "Usage", valeur: "avant coiffage à chaud" },
    ],
    usage: [
      "Appliquer sur les longueurs et les pointes de cheveux humides avant séchage ou lissage, en insistant sur les zones les plus exposées à la casse, sans surcharger les racines.",
    ],
    positionnement: [
      "Pensée pour les cheveux longs, cette formule cible la casse en pointes plutôt que la repousse. Les cheveux courts ou mi-longs tirent moins de bénéfice de ce positionnement.",
    ],
    faq: [
      {
        question: "Pour qui est pensé ce soin ?",
        reponse:
          "Pour les cheveux longs ou en projet d'allongement, dont les pointes sont les plus anciennes et donc les plus fragiles face à la chaleur.",
      },
      {
        question: "Aide-t-il à pousser plus vite ?",
        reponse:
          "Il protège la fibre existante de la casse pendant le coiffage, ce qui limite la perte de longueur. La vitesse de pousse dépend surtout d'autres facteurs, notamment du cuir chevelu.",
      },
    ],
  },
  {
    slug: "kerastase-resistance-shampooing-250ml",
    identite: [
      "Ce shampoing de la gamme Résistance est formulé pour les cheveux affaiblis, cassants ou sensibilisés par la couleur et le coiffage répété. Il nettoie en douceur tout en préparant la fibre à recevoir les soins réparateurs suivants de la même gamme.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Résistance" },
      { libelle: "Type de cheveux", valeur: "affaiblis, cassants" },
      { libelle: "Fonction", valeur: "prépare la fibre aux soins réparateurs" },
    ],
    usage: [
      "Appliquer sur cheveux mouillés, masser le cuir chevelu puis répartir sur les longueurs, laisser agir un instant avant de rincer. Un masque Résistance ensuite complète l'effet sur cheveux très abîmés.",
    ],
    positionnement: [
      "C'est un shampoing de base pensé pour préparer la fibre plutôt que pour réparer en profondeur. Sur cheveux très abîmés, il gagne à être associé à un masque plutôt qu'utilisé seul.",
    ],
    faq: [
      {
        question: "Ce shampoing suffit-il seul sur cheveux très abîmés ?",
        reponse:
          "Il nettoie et prépare la fibre, mais la réparation en profondeur vient surtout du masque ou du soin associé de la même gamme.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa formule douce le permet, en particulier si les cheveux sont exposés régulièrement à la chaleur ou à la coloration.",
      },
    ],
  },
  {
    slug: "kerastase-serum-anti-chute-90ml",
    identite: [
      "Ce sérum quotidien de la gamme Genesis se présente dans un grand format pensé pour un usage régulier sur la durée. Il cible le cuir chevelu et la racine pour accompagner les cheveux affaiblis sujets à la chute liée à la casse, avec une texture qui pénètre sans laisser de film.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Genesis" },
      { libelle: "Zone", valeur: "cuir chevelu" },
      { libelle: "Usage", valeur: "application quotidienne" },
    ],
    usage: [
      "Appliquer chaque jour sur cuir chevelu sec ou humide, masser légèrement pour faire pénétrer, sans rincer. Un usage régulier sur plusieurs semaines est nécessaire pour juger du résultat.",
    ],
    positionnement: [
      "Son grand format en fait l'option pour un usage quotidien prolongé plutôt qu'une cure ponctuelle. Il ne cible pas les chutes d'origine hormonale ou médicale, qui relèvent d'un avis spécialisé.",
    ],
    faq: [
      {
        question: "Quelle différence avec l'autre taille disponible dans la gamme ?",
        reponse:
          "Le format le plus généreux permet une utilisation quotidienne prolongée sans renouvellement fréquent. Le format plus compact convient à qui préfère renouveler plus souvent ou tester le soin.",
      },
      {
        question: "Faut-il rincer après application ?",
        reponse:
          "Non, c'est un soin sans rinçage laissé en place sur le cuir chevelu, à appliquer de préférence sur cheveux propres.",
      },
    ],
  },
  {
    slug: "kerastase-serum-blond-absolu-cicanuit-90ml",
    identite: [
      "Ce sérum de nuit de la gamme Blond Absolu est conçu pour les cheveux blonds, décolorés ou méchés, souvent plus secs et cassants que le reste de la chevelure. Sa texture sans rinçage agit pendant le sommeil pour redonner de la souplesse aux longueurs fragilisées par la décoloration.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Blond Absolu" },
      { libelle: "Type de cheveux", valeur: "blonds, décolorés, fragilisés" },
      { libelle: "Usage", valeur: "application le soir, sans rinçage" },
    ],
    usage: [
      "Appliquer le soir sur les longueurs et les pointes de cheveux secs, sans rincer, en insistant sur les zones les plus décolorées. Un léger coiffage suffit au réveil.",
    ],
    positionnement: [
      "Pensé pour la fragilité propre aux cheveux éclaircis, contrairement à un sérum nourrissant générique. Les cheveux non décolorés n'ont pas besoin de ce niveau de réparation ciblée.",
    ],
    faq: [
      {
        question: "Convient-il aux cheveux non décolorés ?",
        reponse:
          "Il reste utilisable, mais sa formule cible d'abord la fragilité propre aux cheveux éclaircis. Sur cheveux naturels, un soin Nutritive classique suffit généralement.",
      },
      {
        question: "Peut-on l'utiliser avec le shampoing violet de la même gamme ?",
        reponse:
          "Oui, les deux soins de Blond Absolu se complètent : l'un neutralise les reflets jaunes au lavage, l'autre répare la fibre la nuit.",
      },
    ],
  },
  {
    slug: "kerastase-shampoing-violet-anti-faux-reflet",
    identite: [
      "Ce shampoing violet de la gamme Blond Absolu s'adresse aux cheveux blonds, décolorés ou gris qui développent des reflets jaunes ou cuivrés avec le temps. Les pigments violets neutralisent ces reflets indésirables à chaque lavage, en complément du soin nourrissant de la fibre.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Blond Absolu" },
      { libelle: "Fonction", valeur: "neutralisation des reflets jaunes" },
      { libelle: "Type de cheveux", valeur: "blonds, décolorés, gris" },
    ],
    usage: [
      "Faire mousser sur cheveux mouillés, laisser poser quelques minutes selon l'intensité du jaune à corriger, puis rincer. Un usage trop fréquent peut donner un reflet trop froid sur cheveux très clairs.",
    ],
    positionnement: [
      "Plus ciblé qu'un shampoing blond classique grâce à ses pigments correcteurs, il se dose avec prudence sur cheveux blancs ou très clairs, où l'effet peut virer au violet si le temps de pose est trop long.",
    ],
    faq: [
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "Une à deux fois par semaine suffit généralement, en alternance avec un shampoing doux, pour éviter un reflet trop froid ou un cheveu asséché.",
      },
      {
        question: "Que faire si le reflet devient trop violet ?",
        reponse:
          "Réduire le temps de pose ou la fréquence d'utilisation. Un rinçage plus rapide limite le dépôt de pigment sur cheveux très clairs.",
      },
    ],
  },
  {
    slug: "kerastase-shampooing-genesis-bain-hydra-fortifiant-250ml",
    identite: [
      "Ce shampoing de la gamme Genesis est formulé pour les cheveux fins ou normaux affaiblis, sujets à la chute liée à la casse. Il nettoie en douceur tout en hydratant le cuir chevelu, sans alourdir les longueurs, en préparation du sérum anti-chute de la même gamme.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Genesis" },
      { libelle: "Fonction", valeur: "hydratant, fortifiant" },
      { libelle: "Type de cheveux", valeur: "fins à normaux, affaiblis" },
    ],
    usage: [
      "Appliquer sur cheveux mouillés, masser le cuir chevelu en insistant sur les racines, laisser poser un instant puis rincer. Utiliser deux à trois fois par semaine dans un rituel Genesis.",
    ],
    positionnement: [
      "Sa texture pensée pour cheveux fins le distingue du Bain Hydra-Fortifiant plus riche destiné aux cheveux épais de la même gamme. Sur cheveux réellement épais et secs, il peut manquer de richesse.",
    ],
    faq: [
      {
        question: "Quelle différence avec l'autre variante Genesis pour cheveux épais ?",
        reponse:
          "Celle-ci est formulée pour ne pas alourdir les cheveux fins, quand la version pour cheveux épais apporte plus de richesse et de nutrition.",
      },
      {
        question: "Faut-il l'associer au sérum anti-chute Genesis ?",
        reponse:
          "C'est la logique du rituel : le shampoing prépare le cuir chevelu et la fibre pour une meilleure action du sérum laissé en place ensuite.",
      },
    ],
  },
  {
    slug: "kerastase-shampooing-specifique-anti-pelliculaire-250ml",
    identite: [
      "Ce shampoing antipelliculaire de la gamme Spécifique s'adresse aux cuirs chevelus sujets aux pellicules. Il agit sur les squames visibles dès les premiers lavages tout en respectant l'équilibre du cuir chevelu, pour un usage régulier sans effet desséchant.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Spécifique" },
      { libelle: "Fonction", valeur: "antipelliculaire" },
      { libelle: "Usage", valeur: "cuir chevelu à pellicules" },
    ],
    usage: [
      "Faire mousser sur cuir chevelu mouillé, laisser poser deux à trois minutes pour laisser agir la formule, puis rincer. Un usage régulier plutôt que ponctuel donne de meilleurs résultats sur la durée.",
    ],
    positionnement: [
      "Il cible spécifiquement les pellicules, contrairement à un shampoing doux généraliste. En cas de cuir chevelu très irrité ou de pellicules persistantes malgré un usage régulier, un avis dermatologique reste utile.",
    ],
    faq: [
      {
        question: "Combien de temps avant de voir un résultat ?",
        reponse:
          "Les squames visibles diminuent souvent dès les premiers lavages, mais un usage régulier sur plusieurs semaines est nécessaire pour un résultat stable.",
      },
      {
        question: "Peut-on l'alterner avec un autre shampoing ?",
        reponse:
          "Oui, alterner avec un shampoing doux du quotidien n'annule pas l'effet, du moment que ce shampoing spécifique reste utilisé régulièrement.",
      },
    ],
  },
  {
    slug: "kerastase-shampooing-violet-anti-faux-reflets-bain-ultra-violet-250ml",
    identite: [
      "Ce Bain Ultra-Violet de la gamme Blond Absolu est pensé pour un usage régulier sur cheveux blonds, décolorés ou gris qui jaunissent avec le temps. Les pigments violets corrigent les reflets indésirables à chaque lavage tout en respectant une fibre déjà fragilisée par la décoloration.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Blond Absolu, Bain Ultra-Violet" },
      { libelle: "Fonction", valeur: "neutralisation des reflets jaunes" },
      { libelle: "Type de cheveux", valeur: "blonds, décolorés, gris" },
    ],
    usage: [
      "Faire mousser sur cheveux mouillés, adapter le temps de pose à l'intensité du jaune à corriger, puis rincer. Réservé aux cheveux blonds ou décolorés, il n'a pas d'intérêt sur une base plus foncée.",
    ],
    positionnement: [
      "Son grand format en fait l'option pour qui utilise ce type de shampoing en routine régulière plutôt qu'occasionnelle. À doser avec prudence sur cheveux blancs ou platine, plus sensibles à un excès de pigment violet.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur cheveux blancs ?",
        reponse:
          "Oui, mais avec un temps de pose court au départ : les cheveux blancs ou très clairs captent vite le pigment violet et peuvent virer au mauve.",
      },
      {
        question: "Ce grand format dure-t-il aussi longtemps qu'un usage occasionnel ?",
        reponse:
          "Non, il est pensé pour un usage plus fréquent, deux fois par semaine par exemple, ce qui justifie un contenant plus généreux.",
      },
    ],
  },
  {
    slug: "kerastase-specifique-bain-divalent-shampoing",
    identite: [
      "Ce shampoing équilibrant de la gamme Spécifique s'adresse aux cheveux mixtes, qui graissent vite à la racine tout en restant secs sur les longueurs. Il nettoie efficacement le cuir chevelu sans dessécher davantage les pointes, une situation fréquente sur cheveux colorés ou fins.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Spécifique, Bain Divalent" },
      { libelle: "Fonction", valeur: "équilibrant racines grasses, longueurs sèches" },
      { libelle: "Type de cheveux", valeur: "mixte" },
    ],
    usage: [
      "Concentrer l'application et le massage sur le cuir chevelu, laisser le produit glisser naturellement sur les longueurs au rinçage plutôt que d'insister dessus. Utiliser à la fréquence habituelle de lavage.",
    ],
    positionnement: [
      "Il répond à un déséquilibre précis, racines grasses et pointes sèches, que ni un shampoing purifiant ni un shampoing nourrissant seul ne traitent correctement. Hors de ce déséquilibre, un shampoing plus classique suffit.",
    ],
    faq: [
      {
        question: "Comment reconnaît-on un cheveu mixte ?",
        reponse:
          "Des racines qui regraissent vite après le lavage alors que les longueurs restent sèches, cassantes ou ternes malgré cela. C'est le profil que ce shampoing cherche à équilibrer.",
      },
      {
        question: "Faut-il un soin sur les longueurs en plus ?",
        reponse:
          "Oui, ce shampoing gère surtout la racine. Un soin ou un masque appliqué uniquement sur les longueurs complète l'équilibre sur les pointes sèches.",
      },
    ],
  },
  {
    slug: "kerastase-specifique-bain-riche-dermo-calm-shampoing-250ml",
    identite: [
      "Ce shampoing de la gamme Spécifique Dermo-Calm est formulé pour les cuirs chevelus sensibles, sujets aux tiraillements ou aux démangeaisons. Sa texture riche nettoie en douceur sans agresser une peau déjà réactive, avec un rinçage qui ne laisse pas de sensation de tiraillement.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Spécifique Dermo-Calm" },
      { libelle: "Fonction", valeur: "apaisant" },
      { libelle: "Type de cuir chevelu", valeur: "sensible, sujet aux démangeaisons" },
    ],
    usage: [
      "Appliquer sur cuir chevelu mouillé, masser doucement sans frotter, laisser poser un court instant puis rincer à l'eau tiède plutôt que chaude pour ne pas accentuer la sensibilité.",
    ],
    positionnement: [
      "Sa formule plus riche le distingue d'un shampoing apaisant standard, pensé pour les cuirs chevelus qui réagissent facilement. En cas d'irritation persistante ou de rougeurs marquées, un avis dermatologique reste indiqué.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa formule douce est pensée pour un usage fréquent sur cuir chevelu sensible, sans effet desséchant à répétition.",
      },
      {
        question: "Que faire si les démangeaisons persistent ?",
        reponse:
          "Ce shampoing apaise l'inconfort courant, mais des démangeaisons persistantes ou des rougeurs marquées justifient l'avis d'un dermatologue plutôt qu'un simple changement de shampoing.",
      },
    ],
  },
  {
    slug: "kerastase-specifique-shampooing-bain-divalent",
    identite: [
      "Ce shampoing de la gamme Spécifique cible les cheveux qui présentent un excès de sébum à la racine et un manque de nutrition sur les longueurs, une combinaison fréquente sur cheveux fins colorés. Il purifie le cuir chevelu au lavage sans attaquer des pointes déjà fragilisées.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Spécifique, Bain Divalent" },
      { libelle: "Fonction", valeur: "purifiant racines, respect des longueurs" },
      { libelle: "Type de cheveux", valeur: "racines grasses, pointes sèches" },
    ],
    usage: [
      "Masser principalement le cuir chevelu au moment du lavage, sans reprendre de produit sur les longueurs. Rincer abondamment pour ne pas laisser de résidu qui alourdirait les racines.",
    ],
    positionnement: [
      "Utile quand un shampoing purifiant classique dessèche trop les pointes ou qu'un shampoing nourrissant fait regraisser la racine plus vite. Hors de ce déséquilibre précis, son intérêt diminue.",
    ],
    faq: [
      {
        question: "Peut-il remplacer un soin nourrissant sur les longueurs ?",
        reponse:
          "Non, il traite la racine. Un soin ou un masque ciblé sur les longueurs reste nécessaire si les pointes sont sèches ou abîmées.",
      },
      {
        question: "À quelle fréquence laver ses cheveux avec ce profil mixte ?",
        reponse:
          "La fréquence habituelle suffit généralement. Ce qui compte est de concentrer le geste de lavage sur le cuir chevelu plutôt que sur toute la longueur.",
      },
    ],
  },
  {
    slug: "kerastase-volumifique-shampooing-effet-epaississant-250ml",
    identite: [
      "Ce shampoing de la gamme Volumifique est formulé pour les cheveux fins et plats en manque de volume. Il nettoie en douceur tout en apportant un effet épaississant dès la racine, pour un cheveu qui gonfle plus facilement au séchage sans donner de sensation de poids.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Volumifique" },
      { libelle: "Fonction", valeur: "effet épaississant" },
      { libelle: "Type de cheveux", valeur: "fins, manquant de volume" },
    ],
    usage: [
      "Appliquer sur cheveux mouillés, masser le cuir chevelu pour stimuler l'effet épaississant, rincer puis sécher tête renversée ou avec une brosse ronde pour maximiser le volume obtenu.",
    ],
    positionnement: [
      "Pensé pour la racine plate plutôt que pour réparer une fibre abîmée. Sur cheveux épais ou déjà volumineux, l'effet recherché n'a pas lieu d'être et une gamme hydratante sera plus utile.",
    ],
    faq: [
      {
        question: "Cet effet volume dure-t-il après plusieurs lavages ?",
        reponse:
          "L'effet est surtout sensible au moment du séchage qui suit le lavage. Il s'agit d'un soin d'entretien régulier plutôt que d'un traitement définitif du volume.",
      },
      {
        question: "Convient-il aux cheveux colorés fins ?",
        reponse:
          "Oui, rien dans sa formule n'entre en conflit avec une coloration : il traite le volume, pas la couleur ni la réparation de la fibre.",
      },
    ],
  },
  {
    slug: "kiehls-avocado-eye-cream-treatment-28ml",
    identite: [
      "Cette crème contour des yeux de Kiehl's, à base d'huile d'avocat, est pensée pour hydrater une zone du regard souvent plus sèche et plus fine que le reste du visage. Sa texture riche mais non collante convient à une utilisation quotidienne, matin et soir, sous le maquillage comme le soir.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "huile d'avocat" },
      { libelle: "Texture", valeur: "crème riche" },
      { libelle: "Zone", valeur: "contour des yeux" },
    ],
    usage: [
      "Prélever une petite quantité du bout du doigt et tapoter délicatement autour de l'œil, sans frotter, matin et soir. Laisser pénétrer quelques instants avant d'appliquer un maquillage.",
    ],
    positionnement: [
      "Elle vise avant tout l'hydratation et le confort d'une zone sèche, plutôt qu'une action ciblée sur les cernes ou les poches. Pour ces problématiques précises, une formule avec des actifs dédiés sera plus indiquée.",
    ],
    faq: [
      {
        question: "Cette crème estompe-t-elle les cernes ?",
        reponse:
          "Elle hydrate surtout la zone du regard, ce qui en améliore l'aspect général. Elle ne cible pas spécifiquement les cernes pigmentaires ou vasculaires.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, sa texture pénètre assez vite pour servir de base avant le maquillage, à condition de laisser un court temps de pose.",
      },
    ],
  },
  {
    slug: "kiehls-greatest-eye",
    identite: [
      "Ce soin contour des yeux de Kiehl's se positionne sur le segment anti-âge de la maison, pensé pour accompagner les premiers signes de fatigue et de relâchement autour du regard. Comme les autres soins yeux de la marque, il privilégie une texture confortable adaptée à une zone fine et sensible.",
    ],
    faits: [
      { libelle: "Zone", valeur: "contour des yeux" },
      { libelle: "Gamme", valeur: "soin anti-âge Kiehl's" },
      { libelle: "Usage", valeur: "quotidien, matin et/ou soir" },
    ],
    usage: [
      "Appliquer en petite quantité du bout du doigt, en tapotant sans étirer la peau, sur une peau propre avant la crème de jour ou de nuit habituelle.",
    ],
    positionnement: [
      "Il s'adresse à qui cherche un soin ciblé pour le contour de l'œil en complément de sa routine visage. Il ne remplace pas un soin visage complet ni un traitement médical pour des poches ou des cernes marqués.",
    ],
    faq: [
      {
        question: "À partir de quel âge l'utiliser ?",
        reponse:
          "Dès les premiers signes de fatigue ou de relâchement autour du regard, sans seuil d'âge strict : c'est l'apparition du besoin qui doit guider l'usage.",
      },
      {
        question: "Peut-on l'appliquer sur la paupière mobile ?",
        reponse:
          "Il est conçu pour le contour de l'œil au sens large. En cas de doute sur une zone précise, rester sur l'os orbitaire évite tout risque d'irritation oculaire.",
      },
    ],
  },
  {
    slug: "kiehls-greatest-hits-coffret-6pieces",
    identite: [
      "Ce coffret découverte de Kiehl's réunit six formats miniatures parmi les soins les plus reconnus de la maison. Il permet de tester plusieurs textures de la marque sans investir dans les formats pleins, une manière pratique de composer ou de compléter une routine visage.",
    ],
    faits: [
      { libelle: "Contenu", valeur: "sélection de soins miniatures Kiehl's" },
      { libelle: "Usage", valeur: "découverte ou voyage" },
    ],
    usage: [
      "Utiliser chaque miniature comme un soin classique, en l'intégrant à sa routine habituelle plutôt qu'en une fois. Le format réduit convient aussi bien à un test qu'à un déplacement.",
    ],
    positionnement: [
      "Utile pour découvrir plusieurs produits de la maison avant d'acheter un format plein, ou pour voyager léger. Moins pertinent pour qui a déjà identifié son soin habituel en format standard.",
    ],
    faq: [
      {
        question: "Le contenu du coffret est-il toujours le même ?",
        reponse:
          "La composition de ce type de coffret peut varier selon les éditions et les stocks disponibles, tout en restant centrée sur les incontournables de la maison.",
      },
      {
        question: "Ce format convient-il pour un cadeau ?",
        reponse:
          "Oui, c'est l'un des usages courants de ce type de coffret découverte, en particulier pour faire connaître plusieurs textures de la marque à la fois.",
      },
    ],
  },
  {
    slug: "kiehls-serum-retinol",
    identite: [
      "Ce sérum au rétinol de Kiehl's est pensé pour une introduction progressive de cet actif dans la routine, avec un dosage quotidien mesuré plutôt qu'une concentration forte d'emblée. Il vise le renouvellement cutané et l'aspect du grain de peau, dans un flacon compte-gouttes qui facilite un dosage précis.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "rétinol" },
      { libelle: "Applicateur", valeur: "flacon compte-gouttes" },
      { libelle: "Usage", valeur: "application le soir" },
      { libelle: "Type de peau", valeur: "adulte, hors grossesse et allaitement" },
    ],
    usage: [
      "Appliquer le soir sur peau propre et sèche, en commençant par quelques soirs par semaine avant un usage quotidien si la peau le tolère. Toujours suivre d'une protection solaire le lendemain matin.",
    ],
    positionnement: [
      "Pensé pour qui découvre le rétinol grâce à son dosage progressif, plutôt que pour une peau déjà habituée à des concentrations élevées. À éviter pendant la grossesse et l'allaitement, comme tout soin à base de rétinol.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les soirs dès le début ?",
        reponse:
          "Mieux vaut commencer progressivement, deux à trois soirs par semaine, pour laisser la peau s'habituer avant d'augmenter la fréquence.",
      },
      {
        question: "Faut-il une protection solaire le lendemain ?",
        reponse:
          "Oui, le rétinol rend la peau plus sensible au soleil. Une protection solaire le matin est nécessaire tant que ce soin est utilisé.",
      },
    ],
  },
  {
    slug: "kiko-milano-3d-hydra-01-lip-oil-6-5ml",
    identite: [
      "Cette huile à lèvres de la gamme 3D Hydra de Kiko Milano, teinte 01, hydrate tout en apportant une brillance légère et une pointe de couleur. Sa texture non collante convient à une application seule ou par-dessus un rouge à lèvres mat, pour lui redonner du brillant.",
    ],
    faits: [
      { libelle: "Fini", valeur: "brillant" },
      { libelle: "Applicateur", valeur: "embout doe-foot" },
      { libelle: "Teinte", valeur: "01" },
    ],
    usage: [
      "Appliquer directement sur les lèvres à l'aide de l'applicateur, seule ou en topcoat sur un rouge à lèvres déjà posé. Renouveler dans la journée selon la sensation d'hydratation recherchée.",
    ],
    positionnement: [
      "Elle apporte brillance et hydratation avec une couleur discrète, contrairement à un rouge à lèvres franc. Pour une tenue longue et un résultat mat couvrant, un rouge à lèvres classique reste plus adapté.",
    ],
    faq: [
      {
        question: "Peut-on la porter seule sans autre maquillage des lèvres ?",
        reponse:
          "Oui, c'est un usage courant de ce type d'huile, pour un effet lèvres brillantes et légèrement teintées au naturel.",
      },
      {
        question: "Colle-t-elle comme un gloss classique ?",
        reponse:
          "Sa texture huile est pensée pour être plus fluide et moins collante qu'un gloss traditionnel, tout en laissant un fini brillant.",
      },
    ],
  },
  {
    slug: "kiko-milano-3d-hydra-lipgloss",
    identite: [
      "Ce gloss de la gamme 3D Hydra de Kiko Milano apporte brillance et sensation d'hydratation aux lèvres, avec un effet volumateur optique caractéristique de cette ligne. Il s'utilise seul pour un effet lèvres pulpeuses ou par-dessus un rouge à lèvres pour intensifier la brillance.",
    ],
    faits: [
      { libelle: "Fini", valeur: "brillant, effet volume optique" },
      { libelle: "Applicateur", valeur: "embout doe-foot" },
      { libelle: "Usage", valeur: "seul ou en topcoat" },
    ],
    usage: [
      "Appliquer au centre des lèvres puis étirer vers les commissures avec l'applicateur, seul ou par-dessus un rouge à lèvres. Renouveler après un repas ou une boisson pour maintenir la brillance.",
    ],
    positionnement: [
      "Son effet volumateur optique le distingue d'un gloss simplement brillant. Pour une tenue longue sans retouche, un rouge à lèvres liquide longue tenue reste plus indiqué.",
    ],
    faq: [
      {
        question: "Ce gloss donne-t-il un vrai effet de volume ?",
        reponse:
          "L'effet est optique, lié à la brillance et à la lumière renvoyée par la texture, pas à un gonflement réel des lèvres.",
      },
      {
        question: "Peut-on l'appliquer sur un rouge à lèvres mat ?",
        reponse:
          "Oui, il fonctionne bien en topcoat pour redonner de la brillance à un rouge à lèvres mat sans en changer la teinte.",
      },
    ],
  },
  {
    slug: "kiko-milano-504-ever-lasting-colour-lip-liner-0-35g",
    identite: [
      "Ce crayon à lèvres longue tenue de la gamme Ever Lasting Colour de Kiko Milano, teinte 504, a une texture ferme qui permet de définir précisément le contour des lèvres avant d'appliquer un rouge à lèvres. Il aide aussi à prolonger la tenue de la couleur en limitant sa migration.",
    ],
    faits: [
      { libelle: "Teinte", valeur: "504" },
      { libelle: "Tenue", valeur: "longue tenue" },
      { libelle: "Usage", valeur: "contour et base rouge à lèvres" },
    ],
    usage: [
      "Tracer le contour des lèvres sur peau propre et sèche, puis estomper légèrement vers l'intérieur avant d'appliquer le rouge à lèvres. Peut aussi s'utiliser seul pour un effet lèvres nude discret.",
    ],
    positionnement: [
      "Sa texture ferme est pensée pour la précision du tracé plutôt que pour un remplissage rapide des lèvres. Pour un usage tout-en-un sans étape de tracé, un crayon plus tendre sera plus rapide à appliquer.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sans rouge à lèvres par-dessus ?",
        reponse:
          "Oui, seul il donne un fini mat discret proche de la couleur naturelle des lèvres selon la teinte choisie.",
      },
      {
        question: "Aide-t-il vraiment à faire tenir le rouge à lèvres plus longtemps ?",
        reponse:
          "En traçant et en remplissant légèrement le contour, il crée une base qui limite la migration de la couleur, ce qui prolonge la tenue visuelle du rouge à lèvres appliqué par-dessus.",
      },
    ],
  },
  {
    slug: "kiko-milano-505-ever-lasting-colour-lip-liner-0-35g",
    identite: [
      "Ce crayon à lèvres de la gamme Ever Lasting Colour de Kiko Milano, teinte 505, a une mine ferme et précise qui sert à structurer le contour des lèvres et à unifier la base avant l'application d'un rouge à lèvres, avec une bonne résistance à l'estompage au fil de la journée.",
    ],
    faits: [
      { libelle: "Teinte", valeur: "505" },
      { libelle: "Tenue", valeur: "longue tenue" },
      { libelle: "Usage", valeur: "contour et base rouge à lèvres" },
    ],
    usage: [
      "Dessiner le contour sur lèvres propres, en partant du centre vers les commissures, puis remplir légèrement l'intérieur avant le rouge à lèvres pour uniformiser la teinte de fond.",
    ],
    positionnement: [
      "Il convient à qui cherche à structurer un contour net plutôt qu'à colorer rapidement toute la lèvre. Les mines plus crémeuses de la concurrence s'appliquent plus vite mais tiennent souvent moins bien la ligne dans la durée.",
    ],
    faq: [
      {
        question: "Ce crayon aide-t-il à agrandir visuellement des lèvres fines ?",
        reponse:
          "Tracé légèrement à l'extérieur du contour naturel, il peut donner une impression de volume, mais l'écart doit rester discret pour ne pas se voir.",
      },
      {
        question: "Faut-il tailler ce crayon régulièrement ?",
        reponse:
          "Comme tout crayon à mine ferme, un taillage régulier garde une pointe précise, utile pour un tracé net du contour.",
      },
    ],
  },
  {
    slug: "kiko-milano-517-ever-lasting-colour-lip-liner-0-35g",
    identite: [
      "Ce crayon à lèvres longue tenue de la gamme Ever Lasting Colour de Kiko Milano, teinte 517, trace un contour net et durable. Il sert aussi bien à préparer un rouge à lèvres qu'à uniformiser la couleur naturelle des lèvres en usage seul.",
    ],
    faits: [
      { libelle: "Teinte", valeur: "517" },
      { libelle: "Tenue", valeur: "longue tenue" },
      { libelle: "Usage", valeur: "contour et base rouge à lèvres" },
    ],
    usage: [
      "Tracer le contour sur lèvres sèches puis, si besoin, remplir légèrement l'intérieur avant d'appliquer le rouge à lèvres choisi. Conserver une pointe taillée régulièrement pour un tracé précis.",
    ],
    positionnement: [
      "Pensé pour la précision et la tenue du contour plutôt que pour une application rapide sur toute la lèvre. En usage seul, il reste plus mat et moins nourrissant qu'un baume ou un rouge à lèvres crémeux.",
    ],
    faq: [
      {
        question: "Peut-on mélanger ce crayon avec un rouge à lèvres d'une autre teinte ?",
        reponse:
          "Oui, c'est un usage courant pour nuancer une couleur existante ou en modifier légèrement l'intensité une fois appliqué en base.",
      },
      {
        question: "Ce crayon dure-t-il longtemps à l'usage ?",
        reponse:
          "Utilisé uniquement pour tracer le contour, ce format compact est pensé pour durer plusieurs mois d'usage régulier.",
      },
    ],
  },
];
