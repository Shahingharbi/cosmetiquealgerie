import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "keragold-sans-sulfate-serum-keratine-acide-hyaur",
    identite: [
      "Ce shampooing sans sulfate de la ligne sérum de KeraGold associe kératine et acide hyaluronique dans une base lavante dépourvue de sulfates, pensée pour ne pas agresser une fibre déjà fragilisée par un lissage ou une coloration. L'acide hyaluronique y joue un rôle hydratant, en apportant de la souplesse à des longueurs qui manquent d'eau plutôt que de matière grasse.",
      "Il s'adresse aux cheveux traités chimiquement, lissés ou colorés, pour lesquels un shampooing classique à base de sulfates tend à accélérer la perte de la kératine appliquée en institut. La formule reste un shampooing d'entretien, à utiliser à chaque lavage plutôt qu'en soin ponctuel.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et acide hyaluronique" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Type de cheveux", valeur: "Cheveux lissés, colorés ou traités chimiquement" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en massant le cuir chevelu puis en faisant glisser la mousse sur les longueurs, avant de rincer. L'absence de sulfate permet un lavage aussi fréquent que nécessaire sans craindre d'accélérer la disparition d'un lissage kératine, contrairement à un shampooing classique.",
    ],
    positionnement: [
      "Dans la ligne sans sulfate de KeraGold, il se distingue des variantes à l'ail, à l'amla ou à la noix de coco par son apport hydratant via l'acide hyaluronique plutôt que par un actif traditionnel capillaire. Il convient moins bien à des cheveux gras en racine, pour lesquels une formule hydratante peut alourdir le cuir chevelu.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser après un lissage kératine en institut ?",
        reponse:
          "Oui, c'est justement l'usage pour lequel une base sans sulfate est recherchée : elle nettoie sans accélérer le relâchement du lissage, contrairement à un shampooing contenant des sulfates.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse:
          "Oui, l'absence de sulfate limite le délavage de la couleur au fil des lavages, un bénéfice qui s'ajoute à l'apport hydratant de l'acide hyaluronique.",
      },
    ],
  },
  {
    slug: "keragold-sans-sulfate-serum-keratine-ail",
    identite: [
      "Cette variante de la ligne sans sulfate de KeraGold associe kératine et extrait d'ail, un ingrédient traditionnellement utilisé dans les soins capillaires maghrébins pour son effet fortifiant supposé sur la fibre. La base sans sulfate évite d'agresser des cheveux déjà fragilisés, tandis que l'ail apporte une odeur caractéristique qui persiste légèrement après le rinçage.",
      "Elle s'adresse à des cheveux affaiblis ou sujets à la casse, dans une logique de soin traditionnel plutôt que de cosmétique standardisée. Comme les autres shampooings de la ligne, elle reste un produit d'entretien courant, à utiliser à chaque lavage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et extrait d'ail" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Usage", valeur: "Cheveux affaiblis, sujets à la casse" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en massant le cuir chevelu avant de rincer soigneusement pour limiter l'odeur d'ail résiduelle. Un usage régulier est nécessaire pour juger de l'effet fortifiant traditionnellement associé à cet actif.",
    ],
    positionnement: [
      "Face aux variantes à l'amla ou à la noix de coco de la même ligne, celle-ci mise sur un actif traditionnel plutôt que sur un ingrédient cosmétique courant. Elle convient moins bien à qui est sensible à l'odeur de l'ail, même atténuée après rinçage.",
    ],
    faq: [
      {
        question: "L'odeur d'ail reste-t-elle après le lavage ?",
        reponse:
          "Un léger parfum peut persister juste après le rinçage, mais il s'estompe généralement en séchant. Un rinçage soigneux limite ce résidu.",
      },
      {
        question: "Cet actif fait-il vraiment repousser les cheveux ?",
        reponse:
          "L'ail est traditionnellement associé à un effet fortifiant sur la fibre, mais aucun shampooing ne peut garantir la repousse ; il s'agit d'un soin d'entretien, pas d'un traitement contre la chute.",
      },
    ],
  },
  {
    slug: "keragold-sans-sulfate-serum-keratine-amla",
    identite: [
      "Cette variante sans sulfate de KeraGold associe kératine et amla, une baie originaire d'Inde utilisée de longue date en soin capillaire traditionnel pour son effet supposé sur la brillance et la résistance de la fibre. La base sans sulfate nettoie sans dépouiller un cheveu déjà fragilisé par un lissage ou une coloration.",
      "Elle s'adresse à des cheveux ternes ou affaiblis, dans une démarche de soin traditionnel plutôt que de dernière innovation cosmétique. Comme le reste de la ligne, c'est un shampooing d'usage courant, pas un soin ponctuel.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et amla" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Usage", valeur: "Cheveux ternes, en quête de brillance" },
    ],
    usage: [
      "S'applique comme un shampooing classique sur cheveux mouillés, en insistant sur le cuir chevelu avant de répartir la mousse sur les longueurs. Un usage suivi sur plusieurs semaines est nécessaire pour juger de l'effet sur la brillance.",
    ],
    positionnement: [
      "Elle se distingue des versions à l'ail ou au coco de la même ligne par sa vocation avant tout esthétique, tournée vers la brillance plutôt que la fortification pure. Elle convient moins bien à des cheveux déjà gras, pour lesquels l'effet lustrant peut accentuer la sensation de lourdeur.",
    ],
    faq: [
      {
        question: "L'amla rend-il vraiment les cheveux plus brillants ?",
        reponse:
          "C'est l'effet traditionnellement recherché avec cet actif, perceptible surtout sur cheveux ternes et avec un usage régulier plutôt qu'après un seul lavage.",
      },
      {
        question: "Convient-elle aux cheveux colorés ?",
        reponse:
          "Oui, l'absence de sulfate limite le délavage de la couleur, ce qui en fait une base compatible avec des longueurs colorées.",
      },
    ],
  },
  {
    slug: "keragold-sans-sulfate-serum-keratine-coco",
    identite: [
      "Cette variante sans sulfate de KeraGold associe kératine et noix de coco, un ingrédient largement reconnu en cosmétique pour son pouvoir hydratant sur les cheveux secs. La base sans sulfate en fait un shampooing doux, cohérent avec l'objectif hydratant de l'actif.",
      "Elle convient à des longueurs sèches ou déshydratées par des traitements chimiques répétés, plutôt qu'à des cheveux naturellement gras à la racine. C'est un shampooing d'usage courant, à intégrer dans une routine de lavage régulière.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et noix de coco" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate, effet hydratant" },
      { libelle: "Type de cheveux", valeur: "Cheveux secs ou déshydratés" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en laissant la mousse agir quelques instants sur les longueurs avant de rincer pour profiter de l'effet hydratant de la noix de coco. Peut se compléter d'un après-shampooing sur cheveux très secs.",
    ],
    positionnement: [
      "Comparée aux variantes à l'ail ou à l'amla de la même ligne, celle-ci cible en priorité l'hydratation plutôt que la fortification. Elle convient moins bien à des racines grasses, la noix de coco pouvant alourdir légèrement cette zone.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur cheveux gras à la racine ?",
        reponse:
          "C'est possible, mais l'effet hydratant de la noix de coco est plus utile sur les longueurs sèches ; des racines grasses seront mieux servies par une formule plus légère.",
      },
      {
        question: "Remplace-t-elle un masque capillaire ?",
        reponse:
          "Non, elle nettoie en hydratant légèrement au passage, mais un masque reste plus indiqué pour des cheveux très secs nécessitant un soin plus intensif.",
      },
    ],
  },
  {
    slug: "keragold-sans-sulfate-serum-keratine-proteine",
    identite: [
      "Cette variante sans sulfate de KeraGold associe kératine et protéines, une combinaison pensée pour les cheveux affaiblis par des traitements chimiques répétés comme la coloration ou le lissage. Les protéines viennent renforcer temporairement la structure de la fibre, un effet qui se dissipe au fil des lavages.",
      "Elle s'adresse à des cheveux cassants ou qui manquent de tenue, plutôt qu'à des cheveux naturellement forts. Comme le reste de la ligne, elle s'utilise en shampooing d'entretien courant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et protéines" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Usage", valeur: "Cheveux cassants, fibre affaiblie" },
    ],
    usage: [
      "S'applique comme un shampooing classique, en laissant poser quelques instants sur les longueurs avant de rincer pour que les protéines aient le temps d'agir en surface de la fibre. Un usage trop fréquent d'un soin protéiné peut cependant rendre le cheveu rêche chez certaines personnes.",
    ],
    positionnement: [
      "Elle se distingue des variantes hydratantes comme celle au coco par un objectif de renforcement plutôt que de souplesse. Elle convient moins bien à des cheveux fins qui réagissent mal à un excès de protéines, avec une sensation de rigidité en cas d'usage trop rapproché.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser à chaque lavage ?",
        reponse:
          "Un usage régulier est possible, mais si les cheveux deviennent rêches, il est préférable d'espacer les lavages avec ce shampooing protéiné et d'alterner avec une formule plus hydratante.",
      },
      {
        question: "Convient-elle aux cheveux fins ?",
        reponse:
          "Avec prudence : un excès de protéines peut rigidifier des cheveux fins ; un usage moins fréquent que sur cheveux épais est alors préférable.",
      },
    ],
  },
  {
    slug: "keragold-sans-sulfate-serum-keratine-couleur",
    identite: [
      "Cette variante Couleur de la ligne sans sulfate KeraGold associe kératine et une base lavante douce, pensée spécifiquement pour les cheveux colorés. L'absence de sulfate limite le délavage du pigment à chaque lavage, un point sensible pour qui vient de faire une coloration ou un balayage.",
      "Elle s'adresse aux cheveux colorés, quelle que soit la teinte, plutôt qu'à un besoin capillaire particulier comme l'hydratation ou la fortification. Elle s'utilise en shampooing d'entretien courant, à chaque lavage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Usage", valeur: "Cheveux colorés" },
    ],
    usage: [
      "S'utilise comme un shampooing classique dès le lendemain de la coloration, en évitant l'eau trop chaude qui accélère le délavage du pigment indépendamment du shampooing utilisé. Peut se compléter d'un soin spécifique couleur en après-shampooing.",
    ],
    positionnement: [
      "Face aux autres variantes de la ligne centrées sur un actif précis (ail, amla, coco), celle-ci se définit avant tout par sa vocation couleur. Elle convient moins bien à des cheveux non colorés cherchant un bénéfice ciblé, mieux couvert par les autres références de la gamme.",
    ],
    faq: [
      {
        question: "Suffit-elle à préserver une couleur fraîchement faite ?",
        reponse:
          "Elle y contribue en limitant le délavage lié au lavage lui-même, mais la tenue de la couleur dépend aussi du type de coloration et de la fréquence des lavages.",
      },
      {
        question: "Peut-on l'utiliser sur cheveux méchés ?",
        reponse:
          "Oui, elle convient à toute coloration, y compris un balayage ou des mèches, du moment que l'objectif est de préserver le pigment déposé.",
      },
    ],
  },
  {
    slug: "keragold-shampooing-ab-keratine-extrait-dail-cheveux-traites-500ml",
    identite: [
      "Ce shampooing KeraGold au format 500 ml, identifié AB dans la gamme de la marque, associe kératine et extrait d'ail pour les cheveux traités, lissés ou abîmés. Le grand format correspond à un usage régulier plutôt qu'à un essai ponctuel, cohérent avec une utilisation à chaque lavage.",
      "Il vise à nettoyer sans accentuer l'effet desséchant que peuvent avoir des lavages répétés sur des cheveux déjà fragilisés par un lissage ou une décoloration, tout en apportant l'effet fortifiant traditionnellement associé à l'ail.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et extrait d'ail" },
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Type de cheveux", valeur: "Cheveux traités, lissés, abîmés" },
    ],
    usage: [
      "S'applique comme un shampooing classique sur cheveux mouillés, en massant le cuir chevelu puis en répartissant sur les longueurs, avant un rinçage soigneux. Le grand format permet un usage fréquent sans avoir à renouveler l'achat trop vite.",
    ],
    positionnement: [
      "Il cible spécifiquement les cheveux traités et abîmés, à la différence d'un shampooing générique du rayon. Il convient moins bien à des cheveux naturels et en bonne santé, pour lesquels une formule plus neutre suffit.",
    ],
    faq: [
      {
        question: "Ce shampooing convient-il après un lissage brésilien ?",
        reponse:
          "Il est pensé pour les cheveux traités et lissés, ce qui inclut ce type de prestation, à condition de vérifier la compatibilité avec le produit de lissage utilisé en institut.",
      },
      {
        question: "Le grand format se justifie-t-il pour un usage occasionnel ?",
        reponse:
          "Il est surtout intéressant pour un lavage fréquent ; pour un usage ponctuel, un format plus petit de la même ligne suffit.",
      },
    ],
  },
  {
    slug: "keragold-shampooing-cc-keratine-huile-de-ricin-cheveux-traites-500ml",
    identite: [
      "Ce shampooing KeraGold au grand format, référencé CC, associe kératine et huile de ricin pour les cheveux traités et abîmés. L'huile de ricin est un actif traditionnel réputé pour son effet nourrissant et sa contribution à la densité perçue de la chevelure, ici intégrée à une base lavante plutôt qu'appliquée pure.",
      "Il s'adresse aux mêmes profils de cheveux fragilisés que la version AB à l'ail, avec un actif secondaire différent. Le grand format correspond à un usage de lavage régulier.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et huile de ricin" },
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Type de cheveux", valeur: "Cheveux traités, abîmés" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en laissant la mousse reposer un instant sur les longueurs avant de rincer pour que l'huile de ricin puisse déposer un effet nourrissant, sans alourdir excessivement les racines si le rinçage est soigné.",
    ],
    positionnement: [
      "Comparé à la version AB à l'ail, celle-ci mise sur l'huile de ricin, plus orientée nutrition que fortification pure. Elle convient moins bien à des cheveux fins qui craignent l'effet alourdissant d'une huile en base lavante.",
    ],
    faq: [
      {
        question: "L'huile de ricin alourdit-elle les cheveux fins ?",
        reponse:
          "En base lavante rincée, l'effet reste léger, mais des cheveux très fins peuvent préférer une formule sans huile pour éviter toute sensation de lourdeur.",
      },
      {
        question: "Quelle différence avec la version AB à l'ail ?",
        reponse:
          "La base kératine et l'usage sur cheveux traités sont identiques ; seul l'actif secondaire change, l'huile de ricin visant la nutrition là où l'ail vise la fortification.",
      },
    ],
  },
  {
    slug: "keragold-shampooing-dd-keratine-acide-hyaluronique-vheveux-500ml",
    identite: [
      "Ce shampooing KeraGold au grand format, référencé DD, associe kératine et acide hyaluronique pour les cheveux traités, lissés, colorés ou ayant subi une permanente. L'acide hyaluronique y joue un rôle hydratant, utile pour des longueurs qui manquent d'eau après des traitements chimiques répétés.",
      "Il s'adresse à un profil de cheveux large, tous types de traitements confondus, plutôt qu'à un besoin unique comme la coloration seule. Le grand format correspond à un usage de lavage courant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et acide hyaluronique" },
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Type de cheveux", valeur: "Cheveux traités, lissés, colorés, permanentés" },
    ],
    usage: [
      "S'applique comme un shampooing classique sur cheveux mouillés, en insistant sur les longueurs les plus sèches, avant rinçage. Un usage régulier est cohérent avec le grand format proposé.",
    ],
    positionnement: [
      "Il se distingue des versions AB et CC de la même gamme par son acide hyaluronique, orienté hydratation, plutôt que par un actif traditionnel comme l'ail ou le ricin. Il convient moins bien à des cheveux gras en racine, pour lesquels une formule hydratante peut sembler superflue.",
    ],
    faq: [
      {
        question: "Convient-il à tous les types de traitements chimiques ?",
        reponse:
          "Le nom du produit mentionne les cheveux lissés, colorés et permanentés, ce qui en fait une base large ; en cas de doute sur un traitement spécifique, un avis du coiffeur reste utile.",
      },
      {
        question: "Peut-on l'alterner avec un autre shampooing de la gamme ?",
        reponse:
          "Oui, rien n'empêche d'alterner avec une version à l'ail ou au ricin selon le besoin du moment, hydratation ou fortification.",
      },
    ],
  },
  {
    slug: "keragold-shampooing-sans-sulfate-ab-tube-250ml",
    identite: [
      "Ce shampooing sans sulfate KeraGold, référencé AB, se présente en tube plutôt qu'en flacon classique, un format pratique pour le sac de sport ou le voyage. Il reprend la base kératine et extrait d'ail des shampooings AB de la gamme, dans une formule sans sulfate qui préserve les traitements capillaires.",
      "Il s'adresse aux cheveux traités ou fragilisés qui bénéficient d'un lavage sans sulfate, tout en profitant de l'effet fortifiant traditionnellement associé à l'ail. Le tube facilite un dosage précis, utile en petit format.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et extrait d'ail" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Conditionnement", valeur: "Tube nomade" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en pressant le tube pour doser la quantité nécessaire, puis en massant le cuir chevelu avant de rincer soigneusement pour limiter le résidu d'odeur d'ail.",
    ],
    positionnement: [
      "Face au flacon de la version traitée AB, ce tube en format sans sulfate convient mieux à un usage nomade ou à un premier essai. Il convient moins bien à un usage domestique intensif, pour lequel un plus grand flacon est plus économique à l'usage.",
    ],
    faq: [
      {
        question: "Quelle différence avec le shampooing AB en grand format ?",
        reponse:
          "Le tube est plus pratique en déplacement, et sa base est sans sulfate, contrairement au shampooing crème en grand flacon de la même référence AB.",
      },
      {
        question: "Ce format convient-il au voyage ?",
        reponse:
          "Oui, le tube est plus compact et se referme facilement, ce qui en fait un format adapté aux petits bagages.",
      },
    ],
  },
  {
    slug: "keragold-shampooing-sans-sulfate-bc-tube-250ml",
    identite: [
      "Ce shampooing sans sulfate KeraGold, référencé BC, se présente également en tube et associe kératine et huile de coco. Le format tube facilite le transport, tandis que la base sans sulfate ménage les cheveux traités ou colorés à chaque lavage.",
      "Il vise en priorité l'hydratation des longueurs sèches, l'huile de coco étant reconnue pour cet usage en cosmétique capillaire. Il s'adresse aux mêmes profils que les autres shampooings sans sulfate de la gamme, avec un actif secondaire nourrissant plutôt que fortifiant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et huile de coco" },
      { libelle: "Texture", valeur: "Base lavante sans sulfate" },
      { libelle: "Conditionnement", valeur: "Tube nomade" },
    ],
    usage: [
      "S'applique comme un shampooing classique, en dosant depuis le tube, puis en laissant la mousse agir un instant sur les longueurs sèches avant de rincer pour profiter de l'effet hydratant de la noix de coco.",
    ],
    positionnement: [
      "Comparé au tube AB à l'ail, celui-ci cible l'hydratation plutôt que la fortification. Il convient moins bien à des racines grasses, la noix de coco pouvant y accentuer une sensation de lourdeur.",
    ],
    faq: [
      {
        question: "Ce format convient-il aux cheveux très secs ?",
        reponse:
          "Oui, l'huile de coco associée à une base sans sulfate en fait un choix cohérent pour des longueurs sèches, davantage que pour des racines déjà grasses.",
      },
      {
        question: "Le tube est-il pratique en déplacement ?",
        reponse:
          "Oui, son format compact et son système de dosage par pression en font une option adaptée à un sac de voyage ou de sport.",
      },
    ],
  },
  {
    slug: "keragold-shp-ac-keratine-acide-hyaluronique-huile-damla-250ml",
    identite: [
      "Ce shampooing KeraGold, référencé AC, combine kératine, acide hyaluronique et huile d'amla, soit une double approche hydratante et traditionnelle en un seul produit. C'est l'une des formules les plus complètes de la gamme sur le plan des actifs annoncés, entre soin cosmétique moderne et ingrédient capillaire traditionnel indien.",
      "Il s'adresse à des cheveux qui manquent à la fois d'hydratation et de brillance, plutôt qu'à un besoin unique. Il s'utilise en shampooing d'entretien courant, à chaque lavage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine, acide hyaluronique et huile d'amla" },
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Usage", valeur: "Cheveux déshydratés et ternes" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en laissant la mousse agir quelques instants sur les longueurs avant de rincer, pour que l'acide hyaluronique et l'huile d'amla aient le temps de déposer leur effet respectif.",
    ],
    positionnement: [
      "Il se distingue des shampooings à actif unique de la gamme, comme la version au coco ou à l'ail, par sa formule combinée. Il convient moins bien à qui cherche un effet ciblé et simple, pour lequel une référence à actif unique reste plus lisible.",
    ],
    faq: [
      {
        question: "Quelle différence avec le shampooing DD à l'acide hyaluronique seul ?",
        reponse:
          "Celui-ci ajoute l'huile d'amla à l'acide hyaluronique, pour un effet brillance en plus de l'hydratation, contrairement à la version DD centrée uniquement sur l'hydratation.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse:
          "Rien dans sa formule ne l'en empêche, mais il n'est pas spécifiquement conçu pour la protection de la couleur comme la variante Couleur de la ligne sans sulfate.",
      },
    ],
  },
  {
    slug: "keragold-shp-bc-keratine-huile-coco-250ml",
    identite: [
      "Ce shampooing KeraGold, référencé BC, associe kératine et huile de coco dans une formule d'entretien courant. Il reprend la même association que la version tube sans sulfate de la gamme, ici en flacon classique plutôt qu'en tube.",
      "Il vise l'hydratation des cheveux secs, l'huile de coco étant l'un des actifs les plus reconnus en cosmétique capillaire pour cet usage. Il correspond à un usage régulier plutôt qu'à un essai ponctuel.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et huile de coco" },
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Type de cheveux", valeur: "Cheveux secs" },
    ],
    usage: [
      "S'applique comme un shampooing classique, en laissant la mousse reposer un instant sur les longueurs sèches avant de rincer, pour profiter de l'effet hydratant de l'huile de coco.",
    ],
    positionnement: [
      "Face à la version tube sans sulfate BC, ce flacon reprend la même formule dans un format plus classique. Il convient moins bien à des cheveux gras en racine, pour lesquels une formule hydratante peut sembler superflue.",
    ],
    faq: [
      {
        question: "Ce shampooing est-il identique au tube sans sulfate BC ?",
        reponse:
          "L'actif principal, kératine et huile de coco, est le même ; le flacon et le tube diffèrent surtout par leur conditionnement et, selon la base, par la présence ou non de sulfate.",
      },
      {
        question: "Convient-il à un lavage quotidien ?",
        reponse:
          "Oui, c'est un shampooing d'entretien courant, à utiliser à chaque lavage selon les besoins d'hydratation des longueurs.",
      },
    ],
  },
  {
    slug: "keragold-shp-xl-keratine-proteines-soie-250ml",
    identite: [
      "Ce shampooing KeraGold, référencé XL, associe kératine et protéines de soie, un actif reconnu pour apporter douceur et un effet lissant à la fibre capillaire. Il se distingue des autres références de la gamme centrées sur des actifs traditionnels comme l'ail ou l'huile de ricin.",
      "Il s'adresse à des cheveux qui manquent de douceur ou de glisse au démêlage, plutôt qu'à un besoin de fortification pure. Il correspond à un usage régulier.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine et protéines de soie" },
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Usage", valeur: "Cheveux recherchant douceur et glisse" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en laissant la mousse enrober les longueurs avant de rincer, pour que les protéines de soie déposent leur effet lissant sur la fibre.",
    ],
    positionnement: [
      "Comparé aux versions à l'ail ou au ricin de la gamme, celle-ci mise sur un effet cosmétique de douceur plutôt que sur un actif traditionnel. Elle convient moins bien à qui cherche un effet fortifiant marqué, mieux couvert par d'autres références de la ligne.",
    ],
    faq: [
      {
        question: "Les protéines de soie remplacent-elles un après-shampooing ?",
        reponse:
          "Elles en réduisent le besoin sur cheveux normaux, mais un après-shampooing reste utile sur cheveux longs ou très secs pour compléter l'effet démêlant.",
      },
      {
        question: "Convient-il aux cheveux fins ?",
        reponse:
          "Oui, les protéines de soie apportent de la légèreté plutôt que de la lourdeur, ce qui en fait une option adaptée aux cheveux fins en quête de douceur.",
      },
    ],
  },
  {
    slug: "kerastase-blond-absolu-huile-cicaextreme-reparation-intense-100ml",
    identite: [
      "Cicaextreme Huile appartient à la gamme Blond Absolu de Kérastase, conçue pour les cheveux décolorés, méchés ou très éclaircis. Elle s'appuie sur le même complexe cica-kératine que le reste de la gamme, associé à l'edelweiss native et à l'acide hyaluronique, pour apporter à la fibre des lipides que la décoloration a éliminés.",
      "Sa texture huileuse en fait un soin de finition ou un soin préalable avant shampooing, réservé aux cheveux nettement fragilisés par des éclaircissements répétés plutôt qu'à un usage sur cheveux naturels non traités.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe cica-kératine, edelweiss native, acide hyaluronique" },
      { libelle: "Texture", valeur: "Huile" },
      { libelle: "Type de cheveux", valeur: "Cheveux décolorés, très éclaircis, fragilisés" },
    ],
    usage: [
      "S'applique en petite quantité sur longueurs et pointes, sur cheveux secs en soin de finition ou sur cheveux secs avant shampooing en soin préalable. Une utilisation excessive sur cheveux fins peut alourdir la chevelure, un dosage progressif est donc préférable.",
    ],
    positionnement: [
      "Dans la gamme Blond Absolu, cette huile s'adresse aux cheveux les plus abîmés par l'éclaircissement, au-delà de ce que couvrent le bain ou le masque de la même ligne. Elle convient moins bien à des cheveux blonds naturels non décolorés, pour lesquels elle n'apporte pas de bénéfice spécifique.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur cheveux non décolorés ?",
        reponse:
          "Rien ne l'interdit, mais elle a été formulée pour les besoins spécifiques des cheveux décolorés ; des cheveux naturels bénéficieront davantage d'une huile généraliste de la marque.",
      },
      {
        question: "Faut-il la laisser poser avant de rincer ?",
        reponse:
          "En soin préalable, elle se laisse poser plusieurs minutes sur cheveux secs avant le shampooing ; en finition, elle s'applique sans rinçage sur cheveux déjà lavés.",
      },
    ],
  },
  {
    slug: "kerastase-chronologiste-huile-parfum-huile-longueurs-pointes-120ml",
    identite: [
      "L'Huile de Parfum Chronologiste fait partie de la gamme haut de gamme de Kérastase pensée comme un rituel global pour cheveux et cuir chevelu. Elle se distingue des huiles capillaires classiques par une fragrance travaillée avec un parfumeur, conçue pour se porter comme un parfum capillaire autant que comme un soin de brillance.",
      "Sa texture fine, non grasse, s'applique sur longueurs et pointes sans alourdir la chevelure, en finition après le coiffage plutôt qu'en soin préalable avant shampooing.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Huile fine, non grasse" },
      { libelle: "Zone", valeur: "Longueurs et pointes" },
      { libelle: "Usage", valeur: "Finition après coiffage, effet parfum capillaire" },
    ],
    usage: [
      "S'applique en petite quantité sur cheveux secs, après le coiffage, en répartissant sur les longueurs et les pointes. Peut se renouveler en cours de journée pour raviver la fragrance sans alourdir la fibre.",
    ],
    positionnement: [
      "Face aux huiles capillaires plus techniques du rayon, orientées réparation ou brillance ciblée, celle-ci se distingue par sa dimension olfactive assumée. Elle convient moins bien à qui recherche avant tout un soin réparateur pour cheveux abîmés, mieux servi par une huile des gammes Blond Absolu ou Discipline.",
    ],
    faq: [
      {
        question: "Est-ce avant tout un soin ou un parfum ?",
        reponse:
          "C'est un produit qui associe les deux fonctions : elle nourrit légèrement la fibre tout en laissant une fragrance distinctive, sans viser la réparation intensive d'un cheveu très abîmé.",
      },
      {
        question: "Peut-elle remplacer un parfum classique ?",
        reponse:
          "Elle laisse une fragrance sur les cheveux, mais reste un soin capillaire avant tout ; elle ne couvre pas la tenue olfactive d'un parfum appliqué sur la peau.",
      },
    ],
  },
  {
    slug: "kerastase-elixir-ultime-lhuile-rose-huile-sublimatrice-brillance-100ml",
    identite: [
      "L'Huile Rose fait partie d'Elixir Ultime, la gamme d'huiles capillaires emblématique de Kérastase construite autour d'un mélange d'huiles précieuses. Cette version ajoute un extrait de rose à la formule d'origine, pour un effet sublimateur de brillance sur des cheveux ternes, avec une fragrance florale qui la distingue de l'huile Elixir Ultime classique.",
      "Sa texture sèche s'applique sur cheveux secs ou humides, sans effet gras, ce qui la rend compatible avec tous les types de cheveux, y compris les plus fins, en usage de finition.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Mélange d'huiles précieuses et extrait de rose" },
      { libelle: "Texture", valeur: "Huile sèche" },
      { libelle: "Usage", valeur: "Finition, effet brillance" },
    ],
    usage: [
      "S'applique en petite quantité sur cheveux secs, en lissant sur les longueurs et les pointes, ou sur cheveux humides avant séchage pour faciliter le coiffage. Un dosage progressif évite tout effet gras, même sur cheveux fins.",
    ],
    positionnement: [
      "Face à l'Elixir Ultime original, cette version Huile Rose ajoute une dimension florale et un léger supplément de brillance. Elle convient moins bien à qui préfère une fragrance neutre, pour laquelle la version originale de la gamme reste plus indiquée.",
    ],
    faq: [
      {
        question: "Quelle différence avec l'Elixir Ultime original ?",
        reponse:
          "La base d'huiles précieuses est proche ; cette version ajoute un extrait de rose pour la fragrance et un effet de brillance légèrement accentué.",
      },
      {
        question: "Convient-elle aux cheveux fins ?",
        reponse:
          "Oui, sa texture sèche et non grasse permet un usage sur cheveux fins sans effet de lourdeur, à condition de doser en petite quantité.",
      },
    ],
  },
  {
    slug: "kerastase-bainstimuliste-gl-shampoing-energisant",
    identite: [
      "Ce bain Kérastase, désigné Stimuliste GL, se présente comme un shampooing énergisant, pensé pour redonner une sensation de vitalité au cuir chevelu et à la fibre au moment du lavage. Il s'inscrit dans les shampooings dits stimulants de la marque, plutôt que dans un usage purement nettoyant neutre.",
      "Il s'adresse à des cheveux ou un cuir chevelu qui manquent de tonus au quotidien, sans indication de traitement d'un problème capillaire précis comme la chute ou les pellicules. Il s'utilise comme un shampooing d'entretien courant.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Usage", valeur: "Effet énergisant au lavage" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en massant le cuir chevelu pour favoriser la sensation stimulante annoncée par la formule, avant de rincer. S'utilise comme un shampooing d'entretien, à chaque lavage.",
    ],
    positionnement: [
      "Face à un shampooing neutre du même rayon, il se distingue par sa vocation énergisante plutôt que par un bénéfice ciblé comme la réparation ou la couleur. Il convient moins bien à qui cherche un traitement spécifique de la chute ou des pellicules, pour lequel une gamme dédiée de la marque sera plus adaptée.",
    ],
    faq: [
      {
        question: "Ce shampooing traite-t-il la chute de cheveux ?",
        reponse:
          "Il est présenté comme énergisant pour le cuir chevelu, mais ce n'est pas un traitement anti-chute ; un besoin de ce type relève d'une gamme spécifiquement dédiée.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, comme la plupart des bains Kérastase, il est conçu pour un usage de lavage régulier, sans contre-indication à un usage fréquent.",
      },
    ],
  },
  {
    slug: "kerastase-blond-absolu-serum-cicaplasme-45ml",
    identite: [
      "Cicaplasme, en petit format, est le sérum quotidien de la gamme Blond Absolu de Kérastase, destinée aux cheveux décolorés, méchés ou éclaircis. Sa texture légère, sans rinçage, s'appuie sur le même complexe cica-kératine que le reste de la ligne pour aider à limiter la sensation de fragilité que laisse un éclaircissement.",
      "Le format compact et sa texture fluide en font un soin du quotidien, à appliquer après chaque lavage sur cheveux fragilisés, plutôt qu'un soin de fond hebdomadaire comme le masque de la même gamme.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe cica-kératine" },
      { libelle: "Texture", valeur: "Sérum sans rinçage" },
      { libelle: "Type de cheveux", valeur: "Cheveux décolorés, méchés, éclaircis" },
    ],
    usage: [
      "S'applique sur longueurs et pointes essorées après le shampooing, sans rinçage, à chaque lavage. Peut se réappliquer sur cheveux secs en cours de journée si les pointes en ont besoin.",
    ],
    positionnement: [
      "Dans la gamme Blond Absolu, il complète le bain et le masque comme soin quotidien sans rinçage, à la différence de l'huile Cicaextreme réservée aux cheveux les plus abîmés. Il convient moins bien comme seul soin sur des cheveux très décolorés, pour lesquels le masque hebdomadaire reste nécessaire en complément.",
    ],
    faq: [
      {
        question: "Faut-il le rincer ?",
        reponse: "Non, c'est un sérum sans rinçage, à laisser sur les longueurs et les pointes après le lavage.",
      },
      {
        question: "Remplace-t-il le masque Blond Absolu ?",
        reponse:
          "Non, il s'agit d'un soin quotidien plus léger ; le masque hebdomadaire reste nécessaire pour un soin de fond sur cheveux nettement décolorés.",
      },
    ],
  },
  {
    slug: "kerastase-blond-absolu-cicaflash-250ml",
    identite: [
      "Cicaflash est l'après-shampooing express de la gamme Blond Absolu, pensé pour un temps de pose court d'environ deux minutes plutôt que pour une pause prolongée comme un masque. Il reprend le complexe cica-kératine de la ligne pour aider à démêler et adoucir des longueurs fragilisées par une décoloration ou un balayage.",
      "Il correspond à un usage après chaque shampooing de la gamme Blond Absolu, dans une routine pensée pour les cheveux éclaircis qui n'ont pas le temps pour un soin plus long au quotidien.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe cica-kératine" },
      { libelle: "Texture", valeur: "Fondant, temps de pose court" },
      { libelle: "Type de cheveux", valeur: "Cheveux décolorés, méchés" },
    ],
    usage: [
      "S'applique sur longueurs et pointes après le shampooing, en laissant poser environ deux minutes avant de rincer. Ce temps de pose court le distingue d'un masque, pensé pour un usage plus occasionnel et plus long.",
    ],
    positionnement: [
      "Face au masque Cica Extreme de la même gamme, Cicaflash s'utilise à chaque lavage grâce à son temps de pose court. Il convient moins bien en cas de cheveux très abîmés nécessitant un soin de fond plus intensif, pour lequel le masque hebdomadaire reste préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser à chaque lavage ?",
        reponse:
          "Oui, c'est justement sa vocation : un temps de pose court qui permet un usage systématique après le shampooing, contrairement à un masque réservé à un usage hebdomadaire.",
      },
      {
        question: "Remplace-t-il un masque capillaire ?",
        reponse:
          "Non, il complète le masque plutôt qu'il ne le remplace : le masque reste indiqué pour un soin de fond plus intensif sur cheveux très décolorés.",
      },
    ],
  },
  {
    slug: "kerastase-blond-absolu-cicaplasme-serum-universel",
    identite: [
      "Cicaplasme, présenté ici comme sérum universel, appartient à la gamme Blond Absolu de Kérastase pour cheveux décolorés ou éclaircis. Sa formule sans rinçage peut s'appliquer aussi bien sur cheveux secs en soin de la journée que sur longueurs essorées après le shampooing, ce qui justifie l'appellation universelle du produit au sein de la gamme.",
      "Il s'appuie sur le même complexe cica-kératine que le reste de la ligne, pensé pour compenser la sensation de fragilité laissée par un éclaircissement répété, sans viser un moment d'application unique dans la routine.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe cica-kératine" },
      { libelle: "Texture", valeur: "Sérum sans rinçage" },
      { libelle: "Usage", valeur: "Application flexible, cheveux humides ou secs" },
    ],
    usage: [
      "S'applique sur longueurs et pointes, sur cheveux humides après le shampooing ou sur cheveux secs en cours de journée pour raviver les pointes. Cette flexibilité d'usage le distingue d'un soin à un seul moment d'application dans la routine.",
    ],
    positionnement: [
      "Sa polyvalence d'application le distingue des autres soins sans rinçage de la gamme, pensés pour un moment précis de la routine. Il convient moins bien à qui cherche un protocole strict et déjà défini, pour lequel un soin dédié à un seul usage sera plus simple à suivre.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sur cheveux secs, en journée ?",
        reponse:
          "Oui, c'est l'un des usages permis par sa formule universelle, en complément de son application classique après le shampooing sur cheveux humides.",
      },
      {
        question: "Quelle quantité utiliser ?",
        reponse:
          "Une petite quantité suffit sur les longueurs et les pointes ; un excès sur cheveux fins peut donner une sensation de lourdeur.",
      },
    ],
  },
  {
    slug: "kerastase-blond-absolu-masque-cica-extreme-200ml",
    identite: [
      "Le masque Cica Extreme est le soin de fond hebdomadaire de la gamme Blond Absolu, destiné aux cheveux nettement décolorés, méchés ou fragilisés par des éclaircissements répétés. Sa texture plus riche que le bain ou le sérum de la même ligne apporte un temps de pose plus long, cohérent avec un usage occasionnel plutôt que quotidien.",
      "Il correspond à cet usage hebdomadaire, en complément du bain et du sérum de la gamme plutôt qu'en remplacement d'un soin quotidien.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe cica-kératine" },
      { libelle: "Texture", valeur: "Masque riche" },
      { libelle: "Usage", valeur: "Soin hebdomadaire, cheveux très décolorés" },
    ],
    usage: [
      "S'applique sur longueurs et pointes après le shampooing, en laissant poser plusieurs minutes avant de rincer soigneusement. Un usage hebdomadaire est suffisant, un usage plus fréquent n'étant pas nécessaire pour ce type de soin de fond.",
    ],
    positionnement: [
      "Face à Cicaflash, pensé pour un usage à chaque lavage, ce masque cible un soin plus ponctuel et plus intensif. Il convient moins bien comme unique soin de la routine, l'après-shampooing express restant nécessaire les jours où le masque n'est pas utilisé.",
    ],
    faq: [
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "Un usage hebdomadaire est la fréquence habituelle pour ce type de masque de fond, à ajuster selon le degré de fragilité des cheveux décolorés.",
      },
      {
        question: "Peut-on l'utiliser à la place de l'après-shampooing courant ?",
        reponse:
          "Il complète plutôt qu'il ne remplace l'après-shampooing du quotidien, ce dernier restant utile les jours sans masque.",
      },
    ],
  },
  {
    slug: "kerastase-blond-absolu-serum-cicanuit",
    identite: [
      "Cicanuit est le sérum de nuit de la gamme Blond Absolu, pensé pour agir pendant le sommeil sur des cheveux décolorés ou éclaircis. Contrairement à Cicaplasme, appliqué en soin du quotidien, il s'utilise le soir, sans rinçage, pour laisser le complexe cica-kératine de la gamme agir sur plusieurs heures plutôt que sur la seule durée du coiffage.",
      "Il s'adresse à des cheveux nettement fragilisés par une décoloration, en complément du bain et du masque de la même ligne plutôt qu'en remplacement de ces derniers.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe cica-kératine" },
      { libelle: "Texture", valeur: "Sérum sans rinçage" },
      { libelle: "Usage", valeur: "Application le soir, avant le coucher" },
    ],
    usage: [
      "S'applique le soir sur longueurs et pointes sèches, avant le coucher, sans rinçage. Les cheveux peuvent être attachés ou protégés pour la nuit afin d'éviter tout transfert sur la taie d'oreiller.",
    ],
    positionnement: [
      "Face à Cicaplasme, utilisé en soin du jour, Cicanuit occupe le créneau du soin de nuit dans la routine Blond Absolu. Il convient moins bien à qui préfère une routine simplifiée avec un seul sérum, pour lequel Cicaplasme, à usage plus flexible, suffit généralement.",
    ],
    faq: [
      {
        question: "Faut-il le rincer le matin ?",
        reponse: "Non, c'est un soin sans rinçage à appliquer le soir ; il n'est pas nécessaire de le rincer au réveil.",
      },
      {
        question: "Peut-on l'utiliser en complément de Cicaplasme ?",
        reponse:
          "Oui, les deux soins peuvent se combiner : Cicaplasme en usage du jour et Cicanuit en soin du soir, sans que l'un remplace l'autre.",
      },
    ],
  },
  {
    slug: "kerastase-chroma-absolu-shampoing-250ml",
    identite: [
      "Ce shampooing appartient à Chroma Absolu, la gamme de Kérastase dédiée aux cheveux colorés. Il nettoie en douceur pour limiter le délavage du pigment à chaque lavage, un enjeu central pour des cheveux qui viennent de recevoir une coloration ou un balayage.",
      "Il correspond à un usage d'entretien régulier, pensé pour accompagner la coloration dans la durée plutôt que pour un usage ponctuel après la seule sortie de salon.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Shampooing crème" },
      { libelle: "Type de cheveux", valeur: "Cheveux colorés" },
      { libelle: "Usage", valeur: "Entretien de la couleur" },
    ],
    usage: [
      "S'applique comme un shampooing classique sur cheveux mouillés, en massant le cuir chevelu puis en répartissant sur les longueurs, avant de rincer à l'eau tiède plutôt que chaude pour limiter le délavage du pigment.",
    ],
    positionnement: [
      "Dans le rayon des shampooings couleur, il se positionne comme le soin d'entretien de base de la gamme Chroma Absolu, à compléter par un masque ou un soin ciblé pour un résultat plus complet. Il convient moins bien à des cheveux non colorés, pour lesquels un shampooing plus neutre suffit.",
    ],
    faq: [
      {
        question: "Ce shampooing suffit-il seul pour préserver la couleur ?",
        reponse:
          "Il contribue à limiter le délavage à chaque lavage, mais la tenue de la couleur dépend aussi du type de coloration, de la fréquence des lavages et de l'exposition au soleil.",
      },
      {
        question: "Convient-il à toutes les colorations ?",
        reponse:
          "Il est pensé pour les cheveux colorés en général, qu'il s'agisse d'une coloration complète ou d'un balayage, sans distinction de teinte particulière.",
      },
    ],
  },
  {
    slug: "kerastase-curl-manifesto-bain-hydratation-douceur",
    identite: [
      "Ce bain fait partie de Curl Manifesto, la gamme Kérastase dédiée aux cheveux bouclés, ondulés ou crépus, construite autour de l'huile de manketti. Sa formule vise une hydratation en douceur sans perturber la définition naturelle de la boucle, à la différence d'un shampooing classique qui peut assécher ce type de cheveu.",
      "Il s'adresse à des cheveux bouclés qui manquent d'hydratation, en première étape d'une routine complétée par la crème de jour ou un masque de la même gamme.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile de manketti" },
      { libelle: "Texture", valeur: "Bain lavant hydratant" },
      { libelle: "Type de cheveux", valeur: "Cheveux bouclés, ondulés, crépus" },
    ],
    usage: [
      "S'applique sur cheveux mouillés, en massant le cuir chevelu sans frotter excessivement les longueurs pour préserver la définition de la boucle, avant de rincer. Un démêlage aux doigts sous l'eau facilite l'étape suivante de la routine.",
    ],
    positionnement: [
      "Face à un shampooing classique du rayon, il respecte davantage la structure de la boucle en évitant un lavage trop décapant. Il convient moins bien comme unique étape de la routine, une crème ou un masque hydratant restant nécessaire en complément sur cheveux bouclés secs.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sans après-shampooing ?",
        reponse:
          "Il hydrate dès le lavage, mais un soin démêlant complémentaire reste généralement utile sur cheveux bouclés, plus sujets aux nœuds qu'un cheveu lisse.",
      },
      {
        question: "Convient-il aux boucles très serrées ?",
        reponse:
          "Oui, la gamme Curl Manifesto s'adresse à l'ensemble des textures bouclées, ondulées à crépues, avec ce bain comme première étape commune de la routine.",
      },
    ],
  },
  {
    slug: "kerastase-curl-manifesto-creme-de-jour-fondamentale",
    identite: [
      "Cette crème de jour appartient à la même gamme Curl Manifesto, pensée comme un soin sans rinçage à appliquer après le lavage pour définir et hydrater la boucle au quotidien. Sa texture est conçue pour ne pas alourdir la fibre, un point sensible sur cheveux bouclés qui perdent facilement leur définition sous le poids d'un soin trop riche.",
      "Elle s'utilise chaque jour, sur cheveux humides ou pour raviver une boucle en fin de journée sur cheveux secs, en complément du bain de la même ligne.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huile de manketti" },
      { libelle: "Texture", valeur: "Crème sans rinçage" },
      { libelle: "Usage", valeur: "Définition et hydratation quotidienne de la boucle" },
    ],
    usage: [
      "S'applique sur cheveux humides après le lavage, répartie mèche par mèche pour favoriser la définition de la boucle, puis séchée à l'air libre ou au diffuseur. Peut se réappliquer en petite quantité sur cheveux secs pour raviver la boucle en journée.",
    ],
    positionnement: [
      "Face à un masque de la même gamme, plus riche et réservé à un usage hebdomadaire, cette crème de jour s'utilise à chaque lavage sans alourdir la fibre. Elle convient moins bien aux boucles très sèches en manque de soin de fond, pour lesquelles un masque reste nécessaire en complément.",
    ],
    faq: [
      {
        question: "Faut-il la rincer ?",
        reponse: "Non, c'est un soin sans rinçage à laisser sur les longueurs après application.",
      },
      {
        question: "Peut-elle remplacer un masque hydratant ?",
        reponse:
          "Non, elle assure l'hydratation et la définition du quotidien, mais un masque hebdomadaire reste utile pour un soin de fond plus intensif sur boucles sèches.",
      },
    ],
  },
  {
    slug: "kerastase-densifique-bain-densite-shampoing-repulpant",
    identite: [
      "Ce bain appartient à Densifique, la gamme Kérastase dédiée aux cheveux qui perdent en densité et en volume au fil du temps. Sa formule repulpante vise à redonner une sensation d'épaisseur à la fibre dès le lavage, sans traiter directement la chute de cheveux elle-même.",
      "Il s'adresse à des cheveux qui paraissent plus fins ou moins fournis qu'auparavant, en première étape d'une routine généralement complétée par un soin ciblé sans rinçage de la même gamme.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Bain lavant repulpant" },
      { libelle: "Usage", valeur: "Cheveux en perte de densité apparente" },
    ],
    usage: [
      "S'applique comme un shampooing classique, en massant le cuir chevelu, avant de rincer. Un usage régulier et poursuivi dans le temps est nécessaire pour juger de l'effet repulpant sur la densité perçue.",
    ],
    positionnement: [
      "Dans le rayon des shampooings volumateurs, il se distingue par sa vocation spécifique à la densité plutôt qu'au simple gonflant temporaire. Il convient moins bien à qui recherche un traitement direct de la chute de cheveux, un besoin différent de la sensation de densité visée ici.",
    ],
    faq: [
      {
        question: "Ce shampooing arrête-t-il la chute de cheveux ?",
        reponse:
          "Non, il vise une sensation de densité et de volume sur la fibre existante, mais ne constitue pas un traitement de la chute, qui relève d'une prise en charge dédiée.",
      },
      {
        question: "Faut-il le compléter par un autre soin de la gamme ?",
        reponse:
          "C'est l'usage habituel : ce bain sert de première étape, complétée par un soin sans rinçage de la même gamme pour un effet plus complet sur la densité perçue.",
      },
    ],
  },
  {
    slug: "kerastase-discipline-bain-oleo-relax-shampoing-controle-250ml",
    identite: [
      "Ce bain fait partie de Discipline, la gamme Kérastase dédiée aux cheveux épais, indisciplinés ou sujets aux frisottis. Sa formule Oléo-Relax associe un nettoyage doux à un effet lissant dès le lavage, pour un contrôle du mouvement du cheveu qui se prolonge après le séchage.",
      "Il correspond à un usage d'entretien régulier, en première étape d'une routine anti-frisottis complétée par un après-shampooing ou un masque de la même gamme.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Bain lavant lissant" },
      { libelle: "Type de cheveux", valeur: "Cheveux épais, indisciplinés, frisottis" },
    ],
    usage: [
      "S'applique comme un shampooing classique sur cheveux mouillés, en répartissant bien sur les longueurs pour profiter de l'effet lissant, avant de rincer. Un séchage soigné, au besoin au lisseur ou à la brosse, prolonge l'effet de contrôle du mouvement.",
    ],
    positionnement: [
      "Face à un shampooing volumateur du même rayon, il vise l'effet inverse : discipliner la fibre plutôt que lui donner du gonflant. Il convient moins bien aux cheveux fins qui manquent de volume, pour lesquels l'effet lissant peut accentuer une sensation de platitude.",
    ],
    faq: [
      {
        question: "Peut-il remplacer un soin anti-frisottis sans rinçage ?",
        reponse:
          "Il pose une première base lissante dès le lavage, mais un soin sans rinçage complémentaire reste utile sur cheveux très épais ou très frisottés.",
      },
      {
        question: "Convient-il aux cheveux fins ?",
        reponse:
          "Moins bien : son effet lissant peut donner une sensation de cheveux plats sur une chevelure fine, pour laquelle une formule volumatrice sera plus adaptée.",
      },
    ],
  },
  {
    slug: "kerastase-discipline-bain-oleo-relax",
    identite: [
      "Ce bain Oléo-Relax de la gamme Discipline nettoie les cheveux épais ou indisciplinés tout en amorçant un effet lissant qui prépare la suite de la routine. Il s'accompagne généralement du masque Maskeratine de la même gamme, pensé pour prolonger le contrôle du mouvement obtenu dès le lavage.",
      "Il s'adresse aux cheveux qui frisottent facilement à l'air libre ou à l'humidité, plutôt qu'à des cheveux naturellement lisses cherchant simplement du volume.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Bain lavant lissant" },
      { libelle: "Usage", valeur: "Première étape de la routine Discipline" },
    ],
    usage: [
      "S'utilise comme un shampooing classique, en veillant à bien répartir sur les longueurs pour que l'effet lissant se dépose sur l'ensemble de la fibre, avant rinçage et poursuite de la routine avec un soin sans rinçage.",
    ],
    positionnement: [
      "Il se situe en amont du masque Maskeratine dans la routine Discipline, avec un effet lissant plus léger que ce dernier. Il convient moins bien comme unique soin sur cheveux très frisottés, pour lesquels l'association avec le masque de la gamme donne un résultat plus complet.",
    ],
    faq: [
      {
        question: "Doit-on l'utiliser avec le masque Maskeratine ?",
        reponse:
          "Ce n'est pas obligatoire, mais c'est l'usage prévu par la gamme pour un résultat plus complet sur cheveux très indisciplinés.",
      },
      {
        question: "Peut-on l'utiliser seul, sans autre soin de la gamme ?",
        reponse:
          "Oui, il apporte déjà un effet lissant dès le lavage, suffisant pour des frisottis modérés ; un cheveu plus rebelle bénéficiera davantage de l'association avec le masque.",
      },
    ],
  },
  {
    slug: "kerastase-discipline-maskeratine",
    identite: [
      "Maskeratine est le masque emblématique de la gamme Discipline, connu pour son complexe de kératine thermo-réactive, activé par la chaleur du sèche-cheveux ou du lisseur au moment du coiffage. Il s'adresse aux cheveux épais, indisciplinés ou très sujets aux frisottis, pour lesquels un simple bain lissant ne suffit pas.",
      "Contrairement à un lissage chimique, c'est un soin cosmétique rincé, à renouveler à chaque routine capillaire plutôt qu'un traitement définitif de la fibre.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe kératine thermo-réactive" },
      { libelle: "Texture", valeur: "Masque riche" },
      { libelle: "Type de cheveux", valeur: "Cheveux épais, indisciplinés, frisottis marqués" },
    ],
    usage: [
      "S'applique sur longueurs et pointes après le shampooing, en laissant poser quelques minutes puis en activant l'effet lissant à la chaleur du sèche-cheveux avant rinçage, selon les indications habituelles de ce type de masque thermo-actif. Un usage régulier prolonge l'effet de contrôle du mouvement.",
    ],
    positionnement: [
      "Il se distingue du bain Oléo-Relax par un effet lissant plus marqué, grâce à l'activation thermique de son complexe kératine. Il convient moins bien à un usage quotidien léger, pour lequel le bain seul suffit généralement ; ce masque vise plutôt un soin plus soutenu, à raison d'une à deux fois par semaine.",
    ],
    faq: [
      {
        question: "Faut-il vraiment utiliser un sèche-cheveux pour activer le masque ?",
        reponse:
          "C'est le principe de sa formule thermo-réactive : la chaleur du séchage active le complexe kératine pour un effet lissant plus marqué qu'un simple rinçage à l'eau tiède.",
      },
      {
        question: "Remplace-t-il un lissage chimique en institut ?",
        reponse:
          "Non, c'est un soin cosmétique rincé qui améliore l'aspect du cheveu à chaque application, sans modifier durablement sa structure comme le ferait un lissage chimique.",
      },
    ],
  },
];
