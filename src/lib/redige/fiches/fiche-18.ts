import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "polycos-dissolvant-150ml",
    identite: [
      "Ce dissolvant Polycos se présente en flacon de 150 ml, un format pensé pour un usage courant plutôt que pour un kit de manucure complet. Il s'agit d'un dissolvant liquide classique, à appliquer sur un coton pour retirer un vernis avant une nouvelle pose.",
      "La marque, distribuée en parapharmacie, ne détaille pas sa formule exacte : on ne peut donc pas affirmer qu'il s'agit d'une version sans acétone ou enrichie en agents hydratants, contrairement à certains dissolvants qui l'annoncent clairement sur l'étiquette. Il correspond à un usage simple et régulier, pas à un soin des ongles à part entière.",
    ],
    faits: [
      { libelle: "Format", valeur: "150 ml" },
      { libelle: "Usage", valeur: "Dissolvant pour vernis à ongles classique" },
      { libelle: "Application", valeur: "Sur coton, avant une nouvelle pose de vernis" },
    ],
    usage: [
      "Imbiber un coton et le presser sur l'ongle quelques secondes avant de retirer le vernis par des passages du haut vers la base, sans frotter longuement dans un seul sens, ce qui assècherait la peau autour de l'ongle. Un usage répété dessèche naturellement l'ongle et les cuticules : il est alors utile d'appliquer ensuite une huile ou une crème sur les mains. Ne pas utiliser sur un vernis semi-permanent ou des faux ongles en gel, qui demandent un dissolvant spécifique.",
    ],
    positionnement: [
      "Face aux dissolvants qui affichent une formule sans acétone ou enrichie en glycérine, ce produit reste un dissolvant d'appoint, efficace sur un vernis classique mais sans argument de soin particulier pour l'ongle. Il convient à qui change de vernis fréquemment et cherche un produit simple et direct. Les ongles déjà fragilisés ou dédoublés gagneront à se tourner vers une version explicitement formulée sans acétone, plus douce à l'usage répété.",
    ],
    faq: [
      {
        question: "Ce dissolvant contient-il de l'acétone ?",
        reponse:
          "La fiche du fabricant ne précise pas la composition exacte de ce dissolvant, ni s'il contient de l'acétone. Par prudence, si les ongles sont fins, cassants ou déjà abîmés par des poses répétées, mieux vaut choisir un dissolvant explicitement annoncé sans acétone plutôt que de supposer que celui-ci l'est.",
      },
      {
        question: "Peut-il retirer un vernis semi-permanent ?",
        reponse:
          "Non. Un dissolvant liquide classique comme celui-ci ne dissout pas un vernis semi-permanent ou un gel UV posé en institut, qui nécessitent un produit spécifique et souvent un temps de pose sous papier aluminium ou coton imbibé pour se détacher correctement.",
      },
    ],
  },
  {
    slug: "proderma-creme-emolliente-200ml",
    identite: [
      "La Crème Émolliente Proderma se présente en pot ou tube de 200 ml, un format généreux qui correspond davantage à un soin du quotidien qu'à une crème de visage premium en petite contenance. Le terme « émolliente » indique une texture riche, pensée pour assouplir et nourrir une peau sèche ou tiraillée, sans revendication anti-âge ou ciblée sur un problème précis.",
      "Proderma reste une marque de pharmacie peu documentée publiquement sur la composition exacte de ses produits : on retient donc sa fonction annoncée, hydrater et assouplir, plutôt qu'un actif précis à mettre en avant sur cette fiche.",
    ],
    faits: [
      { libelle: "Format", valeur: "200 ml" },
      { libelle: "Texture", valeur: "Crème émolliente riche" },
      { libelle: "Fonction annoncée", valeur: "Assouplir et nourrir les peaux sèches" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau propre, en massant jusqu'à absorption complète. Le format de 200 ml se prête à un usage quotidien, matin et/ou soir, sur le visage comme sur les zones du corps les plus sujettes à la sécheresse : coudes, genoux, mains. Mieux vaut éviter le contour des yeux si la texture est épaisse, et réserver l'application au soir si elle laisse un fini gras en journée.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes de gamme vendues en petit format, cette crème émolliente mise sur le volume et la texture riche plutôt que sur une formule ciblée et documentée. Elle convient aux peaux sèches à très sèches qui cherchent un soin nourrissant au quotidien, sans chercher un actif précis. Les peaux mixtes à grasses, ou celles qui cherchent un actif nommé comme l'acide hyaluronique ou la niacinamide, trouveront ailleurs une formule plus adaptée.",
    ],
    faq: [
      {
        question: "Cette crème peut-elle s'utiliser sur le corps en plus du visage ?",
        reponse:
          "Le format de 200 ml et la texture émolliente riche s'y prêtent bien. Beaucoup de crèmes de ce type sont utilisées à la fois sur le visage et sur les zones sèches du corps comme les coudes ou les mains, faute d'indication contraire précise sur l'emballage du produit.",
      },
      {
        question: "Convient-elle aux peaux grasses ?",
        reponse:
          "Pas particulièrement : une texture émolliente riche est pensée pour nourrir une peau sèche, elle risque donc d'alourdir une peau grasse ou mixte en journée. Une texture plus légère, de type gel-crème, conviendrait généralement mieux à ce type de peau au quotidien.",
      },
    ],
  },
  {
    slug: "purito-hydro-wave-deep-sea-cream-50ml",
    identite: [
      "La Hydro Wave Deep Sea Cream de Purito est une crème-gel hydratante qui s'appuie sur une eau marine profonde et de l'acide hyaluronique pour retenir l'eau dans la peau. Purito s'est construit une réputation sur des formules minimalistes, sans parfum ni alcool ajouté, pensées pour les peaux sensibles ou sujettes aux rougeurs, une approche qu'on retrouve dans cette crème au fini frais et non collant.",
      "Elle s'inscrit dans la gamme hydratation de la marque, aux côtés du sérum Centella Unscented plus connu, et cible une hydratation en profondeur plutôt qu'un soin ciblé anti-imperfections ou anti-âge.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Purito (Corée du Sud)" },
      { libelle: "Texture", valeur: "Crème-gel légère" },
      { libelle: "Actif clé", valeur: "Eau marine profonde, acide hyaluronique" },
      { libelle: "Sans parfum ajouté", valeur: "Oui, formule caractéristique de la marque" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du soir ou du matin, sur peau nettoyée et éventuellement après un sérum hydratant. Une noisette suffit pour l'ensemble du visage : la texture gel s'étale facilement et ne nécessite pas de quantité importante. Convient à une routine simplifiée, sans superposer trop d'actifs le même soir pour ne pas neutraliser son effet apaisant.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes plus riches et occlusives du même rayon, cette crème-gel mise sur la légèreté et l'absence de parfum, ce qui la rend adaptée aux peaux sensibles ou réactives en climat chaud. Les peaux très sèches en hiver pourraient la trouver insuffisante utilisée seule et préférer la coupler à une crème plus nourrissante le soir.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle aux peaux à tendance acnéique ?",
        reponse:
          "Sa texture légère et sans parfum ajouté en fait une option raisonnable pour une peau à imperfections, dans la mesure où elle n'occlut pas la peau. Elle ne cible toutefois pas l'acné en tant que telle : elle hydrate sans alourdir la peau, sans agir sur la cause des boutons.",
      },
      {
        question: "Peut-on l'utiliser avec le sérum Centella Unscented de la même marque ?",
        reponse:
          "Oui, les deux produits sont pensés pour se compléter dans une routine Purito : le sérum apaise la peau en amont et le film de cette crème referme la routine en retenant l'hydratation apportée juste avant, sans ajouter de parfum ni d'alcool.",
      },
    ],
  },
  {
    slug: "purito-seoul-wonder-releaf-centella-serum-60ml",
    identite: [
      "Le Wonder Releaf Centella Serum de Purito Seoul est un sérum apaisant centré sur l'extrait de centella asiatica, reconnu pour son usage traditionnel sur les peaux irritées ou sujettes aux rougeurs. Il reprend l'esprit du Centella Unscented Serum qui a fait la réputation de la marque : une formule courte, sans parfum ni alcool, pensée pour calmer sans piquer ni sensibiliser davantage une peau déjà réactive.",
      "Il s'inscrit dans la ligne Wonder Releaf, orientée vers l'apaisement et le renforcement de la barrière cutanée, plutôt que vers un soin anti-âge ou éclaircissant.",
    ],
    faits: [
      { libelle: "Marque", valeur: "Purito Seoul (Corée du Sud)" },
      { libelle: "Actif clé", valeur: "Extrait de centella asiatica" },
      { libelle: "Sans parfum ni alcool", valeur: "Oui" },
      { libelle: "Format", valeur: "Sérum, 60 ml" },
      { libelle: "Type de peau visé", valeur: "Sensible, sujette aux rougeurs" },
    ],
    usage: [
      "S'applique après le nettoyage et le tonique, en tapotant quelques gouttes sur l'ensemble du visage avant la crème hydratante. Peut s'utiliser matin et soir. Il est conseillé d'éviter de le superposer le même soir à un exfoliant acide fort ou au rétinol pur en tout début d'usage, le temps de vérifier la tolérance de la peau, même si le produit lui-même est réputé bien toléré.",
    ],
    positionnement: [
      "Face aux sérums anti-âge ou éclaircissants du même rayon, ce sérum se positionne clairement sur l'apaisement : il ne cible ni les rides ni les taches. Il convient particulièrement aux peaux réactives, aux rougeurs diffuses ou fragilisées par un traitement dermatologique. Une peau cherchant un effet éclat immédiat ou anti-âge marqué trouvera davantage son compte dans un autre sérum du rayon.",
    ],
    faq: [
      {
        question: "Ce sérum peut-il s'utiliser avec du rétinol ?",
        reponse:
          "Oui, il est même souvent recommandé en accompagnement d'un rétinol pour apaiser l'irritation qu'il peut provoquer. On l'applique alors les soirs où le rétinol n'est pas utilisé, ou en couche avant lui pour amortir l'effet sur une peau encore peu habituée.",
      },
      {
        question: "Convient-il à une peau à tendance acnéique ?",
        reponse:
          "Sa formule sans parfum ni alcool et son actif apaisant en font une option adaptée, notamment pour calmer les rougeurs post-inflammatoires laissées par les boutons. Il ne traite pas les boutons eux-mêmes, mais n'aggrave pas une peau déjà fragilisée par un traitement asséchant du rayon.",
      },
    ],
  },
  {
    slug: "roge-cavailles-gel-bain-douche-fleur-coton-1000ml",
    identite: [
      "Ce gel bain douche Rogé Cavaillès Fleur de Coton se décline dans le grand format d'un litre, pensé pour un usage familial ou quotidien plutôt que pour un format voyage. Rogé Cavaillès est une marque de pharmacie française spécialisée dans les nettoyants doux, sans savon, à pH neutre, conçus pour ne pas agresser le film hydrolipidique de la peau.",
      "La variante Fleur de Coton se distingue par son parfum doux et poudré, moins marqué que les versions à l'amande ou l'original non parfumé de la même gamme, pour qui cherche une note discrète au quotidien sous la douche ou le bain.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "1 L" },
      { libelle: "Formule", valeur: "Sans savon, pH neutre" },
      { libelle: "Parfum", valeur: "Fleur de coton, note douce et poudrée" },
      { libelle: "Usage", valeur: "Corps, douche et bain" },
    ],
    usage: [
      "S'utilise comme un gel douche classique, sur peau mouillée, en faisant mousser avant de rincer à l'eau tiède. Le grand format d'un litre se prête à un usage quotidien pour toute la famille plutôt qu'à un usage ponctuel. Convient aussi en bain, en versant une dose sous l'eau qui coule. Ne remplace pas un soin lavant intime dédié pour la toilette de cette zone plus sensible.",
    ],
    positionnement: [
      "Face aux gels douche classiques souvent parfumés et à base de savon, ce produit se positionne sur la douceur : formule sans savon et pH neutre, pensée pour les peaux sensibles ou réactives. Le grand format le rend économique à l'usage pour un foyer, mais moins pratique à emporter en voyage qu'un format 200 ml de la même gamme.",
    ],
    faq: [
      {
        question: "Ce gel douche convient-il aux peaux sensibles ?",
        reponse:
          "Oui, c'est l'argument central de la gamme Rogé Cavaillès : une formule sans savon et à pH neutre, réputée mieux tolérée par les peaux sensibles ou sujettes aux tiraillements qu'un gel douche moussant classique à base de savon traditionnel, surtout en cas de douches fréquentes.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Sa formule douce le permet occasionnellement, mais il reste conçu en priorité pour le corps. Pour le visage, un nettoyant dédié au grain plus fin et à la formule pensée pour cette zone plus fine de la peau reste préférable au quotidien.",
      },
    ],
  },
  {
    slug: "roge-cavailles-gel-bain-douche-loriginal-1000ml",
    identite: [
      "Le gel bain douche Rogé Cavaillès L'Original, en format d'un litre, est la version peu ou pas parfumée qui a fondé la réputation de la marque en pharmacie : un nettoyant sans savon, à pH physiologique, conçu pour respecter le film hydrolipidique de la peau plutôt que de la décaper.",
      "Il s'adresse en priorité aux peaux sensibles, sèches ou réactives qui tirent après une douche avec un gel douche classique, sans chercher un parfum marqué comme les variantes Fleur de Coton ou Douceur d'Amande de la même gamme.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "1 L" },
      { libelle: "Formule", valeur: "Sans savon, pH physiologique" },
      { libelle: "Positionnement", valeur: "Version historique de la gamme" },
      { libelle: "Usage", valeur: "Corps, douche et bain" },
    ],
    usage: [
      "S'applique sur peau mouillée, en faisant mousser légèrement avant de rincer à l'eau tiède plutôt que chaude, qui assèche davantage la peau. Le grand format se prête à un usage quotidien pour toute la famille. Il peut aussi servir de base neutre pour les peaux qui réagissent mal aux parfums, y compris ceux des autres variantes de la même gamme.",
    ],
    positionnement: [
      "Face aux versions parfumées de la même gamme, L'Original mise sur la neutralité : pas de note ajoutée qui pourrait sensibiliser une peau très réactive. Il convient particulièrement aux peaux qui ont déjà réagi à un gel douche parfumé. Qui cherche un moment sensoriel avec un parfum agréable se tournera plutôt vers la variante Fleur de Coton ou Douceur d'Amande de la gamme.",
    ],
    faq: [
      {
        question: "Quelle différence avec la version Fleur de Coton ?",
        reponse:
          "La formule de base sans savon et à pH neutre est la même. La différence tient au parfum : L'Original reste neutre ou très discret, tandis que Fleur de Coton apporte une note poudrée plus présente. Le choix dépend surtout de la sensibilité de la peau et de la préférence olfactive de chacun.",
      },
      {
        question: "Convient-il aux enfants ?",
        reponse:
          "Sa formule douce et sans savon le rend généralement bien toléré, mais il reste utile de vérifier l'âge minimum indiqué sur l'emballage et de demander l'avis d'un pharmacien pour un usage régulier sur un très jeune enfant ou un nourrisson.",
      },
    ],
  },
  {
    slug: "roge-cavailles-gel-douche-douceur-damande-200ml",
    identite: [
      "Ce gel douche Rogé Cavaillès Douceur d'Amande, en format 200 ml, associe la formule sans savon caractéristique de la marque à une note d'amande douce, plus enveloppante que le parfum discret de Fleur de Coton. Le format plus compact que la version d'un litre en fait une option pratique pour un sac de voyage ou une salle de bain d'appoint.",
      "Comme le reste de la gamme, il reste à pH physiologique et sans savon, ce qui le distingue d'un gel douche moussant classique plus décapant pour la peau au quotidien.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "200 ml" },
      { libelle: "Formule", valeur: "Sans savon, pH physiologique" },
      { libelle: "Parfum", valeur: "Amande douce" },
      { libelle: "Format", valeur: "Voyage ou appoint" },
    ],
    usage: [
      "S'utilise sous la douche sur peau mouillée, en petite quantité pour faire mousser puis rincer à l'eau tiède. Son format de 200 ml le rend adapté à un usage ponctuel, en voyage ou en complément du grand format d'un litre gardé à la maison. Convient aussi en bain moussant léger pour un moment plus doux.",
    ],
    positionnement: [
      "Par rapport au grand format d'un litre de la gamme, cette version 200 ml apporte la même douceur de formule dans un format transportable, au prix d'un renouvellement plus fréquent pour un usage quotidien à la maison. La note d'amande la distingue des variantes plus neutres pour qui apprécie un parfum plus présent sous la douche.",
    ],
    faq: [
      {
        question: "Ce format 200 ml suffit-il pour un usage quotidien ?",
        reponse:
          "Pour un usage quotidien par une seule personne, il s'épuise assez vite compte tenu du format compact. Il convient mieux comme format de voyage ou de complément au litre de la même gamme gardé à la maison pour l'usage courant du foyer.",
      },
      {
        question: "Le parfum amande est-il fort ?",
        reponse:
          "C'est une note plus marquée que la version Fleur de Coton ou L'Original de la même gamme, sans être un parfum capiteux : elle reste dans l'esprit doux et discret propre à l'ensemble de la marque Rogé Cavaillès, y compris après le rinçage.",
      },
    ],
  },
  {
    slug: "roge-cavailles-lingettes-intimes-extra-douces-15pieces",
    identite: [
      "Ces lingettes intimes Rogé Cavaillès se présentent en boîte de 15 unités individuelles, pensées pour une toilette intime en dehors du domicile, après le sport, en voyage, ou en journée, quand l'accès à un point d'eau n'est pas possible. Elles reprennent la formule douce à pH physiologique de la marque, sans savon, adaptée à une zone particulièrement sensible du corps.",
      "Elles complètent plutôt qu'elles ne remplacent le soin lavant intime liquide de la gamme, réservé à la toilette quotidienne à la maison avec de l'eau.",
    ],
    faits: [
      { libelle: "Conditionnement", valeur: "15 lingettes individuelles" },
      { libelle: "Formule", valeur: "Sans savon, pH physiologique" },
      { libelle: "Usage", valeur: "Toilette intime hors domicile" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "Une lingette par utilisation, à usage unique, pour une toilette intime rapide en dehors de la maison. Elle ne remplace pas le lavage quotidien à l'eau et au soin lavant intime liquide, mais dépanne après une activité sportive, un trajet ou en voyage quand un point d'eau n'est pas accessible dans l'immédiat.",
    ],
    positionnement: [
      "Face au soin lavant intime liquide de la même gamme, ces lingettes répondent à un besoin de mobilité plutôt qu'à la toilette quotidienne de référence à la maison. Elles conviennent à qui a besoin d'une solution de dépannage propre et individuellement emballée, pas à un usage systématique qui reste mieux couvert par le lavage à l'eau.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ces lingettes tous les jours à la place de l'eau ?",
        reponse:
          "Ce n'est pas leur vocation première : elles sont pensées comme une solution d'appoint hors domicile, pour les déplacements ou l'après-sport. Pour la toilette intime quotidienne à la maison, l'eau associée à un soin lavant intime liquide reste la référence recommandée par la marque.",
      },
      {
        question: "Ces lingettes sont-elles parfumées ?",
        reponse:
          "La gamme Rogé Cavaillès privilégie des formules douces à parfum discret sur ses produits d'hygiène intime, pensées pour ne pas irriter une zone sensible. Il est recommandé de vérifier la mention exacte sur l'emballage si une sensibilité aux parfums est déjà connue.",
      },
    ],
  },
  {
    slug: "roge-cavailles-soin-toilette-intime-anti-bacterien-500ml",
    identite: [
      "Ce soin de toilette intime Rogé Cavaillès, en flacon de 500 ml, associe la formule douce à pH physiologique de la marque à un agent anti-bactérien, ce qui le distingue du soin lavant intime standard de la gamme plutôt destiné à un usage quotidien neutre.",
      "Il s'adresse à une utilisation ponctuelle ou sur recommandation, dans des situations où une hygiène renforcée de la zone intime est recherchée, plutôt qu'à un usage systématique et prolongé qui pourrait déséquilibrer la flore locale de cette zone sensible.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "500 ml" },
      { libelle: "Formule", valeur: "pH physiologique, agent anti-bactérien" },
      { libelle: "Usage", valeur: "Toilette intime ciblée" },
      { libelle: "Zone", valeur: "Intime" },
    ],
    usage: [
      "S'utilise comme un soin lavant intime classique, en petite quantité sur la zone externe, puis se rince à l'eau claire. Un usage ponctuel ou sur une période limitée est préférable à un usage quotidien prolongé, l'action anti-bactérienne n'étant pas destinée à remplacer l'équilibre naturel de la flore intime sur le long terme.",
    ],
    positionnement: [
      "Face au soin lavant intime neutre de la même gamme destiné à l'usage quotidien, cette version anti-bactérienne se positionne sur un besoin plus spécifique et ponctuel. Elle ne convient pas comme produit d'hygiène intime de tous les jours sur une longue durée, un usage prolongé pouvant perturber l'équilibre naturel de la zone concernée.",
    ],
    faq: [
      {
        question: "Peut-on utiliser ce soin tous les jours ?",
        reponse:
          "Un usage quotidien prolongé n'est généralement pas recommandé pour un soin à visée anti-bactérienne. Mieux vaut réserver ce produit à une période ciblée, sur avis du pharmacien si besoin, et revenir ensuite à un soin lavant intime neutre pour l'usage courant.",
      },
      {
        question: "Quelle différence avec les lingettes intimes de la même marque ?",
        reponse:
          "Les lingettes sont un format nomade à usage unique pour dépanner hors domicile, sans visée anti-bactérienne particulière. Ce soin liquide de 500 ml est un produit de toilette à utiliser à la maison, avec un agent anti-bactérien pour un besoin plus ciblé et ponctuel.",
      },
    ],
  },
  {
    slug: "saforelle-soin-lavant-doux-apaisant-250ml",
    identite: [
      "Le Soin Lavant Doux Apaisant Saforelle, en flacon de 250 ml, est un nettoyant intime sans savon à base d'extrait de bourrache, l'ingrédient qui a fait la réputation de la marque depuis des décennies en pharmacie française. Sa formule à pH physiologique respecte l'équilibre naturel de la zone intime, plus fragile que le reste du corps.",
      "Saforelle s'adresse traditionnellement aux peaux sensibles, y compris pendant la grossesse ou pour les jeunes filles, en misant sur une tolérance élevée plutôt que sur un parfum marqué ou une action ciblée sur un déséquilibre précis.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "250 ml" },
      { libelle: "Actif clé", valeur: "Extrait de bourrache" },
      { libelle: "Formule", valeur: "Sans savon, pH physiologique" },
      { libelle: "Usage", valeur: "Toilette intime quotidienne" },
    ],
    usage: [
      "S'applique en petite quantité sur la zone intime externe, à l'eau tiède, matin et/ou soir selon les habitudes de chacune. Rincer soigneusement après application. Sa formule douce le rend adapté à un usage quotidien sur le long terme, contrairement à un soin anti-bactérien ponctuel qui ne doit pas être utilisé en continu.",
    ],
    positionnement: [
      "Face à un soin lavant intime anti-bactérien pensé pour un usage ponctuel, ce soin Saforelle se positionne comme le produit du quotidien, doux et bien toléré, y compris par les peaux les plus sensibles. Il ne cible pas un déséquilibre ou une irritation active, pour lesquels un avis médical reste préférable avant usage.",
    ],
    faq: [
      {
        question: "Ce soin convient-il pendant la grossesse ?",
        reponse:
          "Sa formule douce à base de bourrache, sans savon, est traditionnellement bien tolérée durant la grossesse, période où la zone intime est souvent plus sensible. Un avis de la sage-femme ou du médecin reste toutefois la référence en cas de doute particulier.",
      },
      {
        question: "Peut-on l'utiliser tous les jours sur le long terme ?",
        reponse:
          "Oui, c'est sa vocation première : contrairement à un soin anti-bactérien ponctuel, ce soin doux à base de bourrache est conçu pour un usage quotidien prolongé sans déséquilibrer la flore intime naturelle de cette zone, y compris sur plusieurs mois.",
      },
    ],
  },
  {
    slug: "scholl-creme-anti-crevasses-60ml",
    identite: [
      "La Crème Anti-crevasses Scholl, en tube de 60 ml, cible spécifiquement les talons secs et fissurés, une problématique fréquente liée à l'épaississement de la peau sur cette zone très sollicitée du pied. Les crèmes de ce type reposent généralement sur une forte concentration d'urée, un actif reconnu pour assouplir et réduire l'épaisseur de la peau très sèche.",
      "Scholl s'est construit une réputation sur le soin du pied en pharmacie et parapharmacie, avec des formules concentrées pensées pour un usage ciblé plutôt que pour une hydratation générale du corps.",
    ],
    faits: [
      { libelle: "Format", valeur: "60 ml" },
      { libelle: "Zone", valeur: "Talons et zones très sèches du pied" },
      { libelle: "Fonction annoncée", valeur: "Assouplir la peau très sèche et fissurée" },
      { libelle: "Fréquence typique", valeur: "Quotidienne au début, puis en entretien" },
    ],
    usage: [
      "S'applique en couche épaisse sur les talons secs, de préférence le soir, sur peau propre et sèche, en insistant sur les zones les plus épaissies ou fissurées. Un usage quotidien est généralement nécessaire les premières semaines, avant de passer à un rythme d'entretien de deux à trois fois par semaine une fois la peau assouplie.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes pour pieds classiques, cette crème anti-crevasses se positionne sur les cas de sécheresse sévère et de fissures, avec une action plus ciblée et concentrée. Une peau des pieds simplement sèche, sans fissure profonde, n'a pas nécessairement besoin d'une formule aussi concentrée et peut se tourner vers une crème pieds plus légère au quotidien.",
    ],
    faq: [
      {
        question: "Combien de temps avant de voir une amélioration des crevasses ?",
        reponse:
          "Avec une application quotidienne, une amélioration visible de la souplesse de la peau s'observe généralement en une à deux semaines. Les fissures profondes et anciennes peuvent demander un usage plus long et régulier avant de se refermer complètement, sans interruption du soin.",
      },
      {
        question: "Peut-on l'utiliser sur d'autres zones que les talons ?",
        reponse:
          "Sa concentration est pensée pour l'épaisseur de peau des talons. Sur une peau plus fine, comme le visage, elle serait trop concentrée : mieux vaut la réserver aux zones épaisses et très sèches du pied, genoux ou coudes compris si besoin.",
      },
    ],
  },
  {
    slug: "signal-systeme-blancheur-dentifrice-75ml",
    identite: [
      "Ce dentifrice Signal Système Blancheur, en tube de 75 ml, appartient à la ligne blancheur de la marque, pensée pour polir la surface de la dent et limiter le dépôt de taches superficielles liées au café, au thé ou au tabac. Comme la plupart des dentifrices blancheur du marché, il agit par une action mécanique douce de polissage plutôt que par un blanchiment chimique profond.",
      "Il conserve la base fluorée classique d'un dentifrice Signal, pour la protection contre les caries, à laquelle s'ajoute cette fonction blancheur en usage quotidien.",
    ],
    faits: [
      { libelle: "Format", valeur: "75 ml" },
      { libelle: "Fonction", valeur: "Action blancheur par polissage, protection anticarie au fluor" },
      { libelle: "Usage", valeur: "Brossage quotidien" },
      { libelle: "Gamme", valeur: "Système Blancheur" },
    ],
    usage: [
      "S'utilise comme un dentifrice classique, deux fois par jour, en quantité de la taille d'un pois sur la brosse à dents. L'effet blancheur par polissage agit sur la durée avec un brossage régulier ; il ne remplace pas un détartrage professionnel en cas de taches déjà incrustées sur l'émail.",
    ],
    positionnement: [
      "Face à un dentifrice classique sans mention blancheur, celui-ci ajoute une action de polissage utile pour les taches de surface du quotidien liées au café ou au thé. Il ne rivalise pas avec un blanchiment dentaire professionnel pour des dents fortement colorées ou jaunies en profondeur, qui relève d'un soin chez le dentiste.",
    ],
    faq: [
      {
        question: "Ce dentifrice blanchit-il vraiment les dents ?",
        reponse:
          "Il agit surtout sur les taches de surface par un polissage doux, ce qui donne un effet d'éclaircissement visible sur un usage régulier et quotidien. Il ne modifie pas la teinte naturelle profonde de la dent comme le ferait un blanchiment professionnel réalisé chez un dentiste.",
      },
      {
        question: "Peut-on l'utiliser tous les jours sans abîmer l'émail ?",
        reponse:
          "Formulé pour un usage quotidien, il reste dans les standards d'abrasivité d'un dentifrice grand public. Un brossage trop appuyé, quel que soit le dentifrice choisi, reste le principal facteur de risque pour l'émail sur le long terme, plus que le dentifrice lui-même.",
      },
    ],
  },
  {
    slug: "skin1004-madagascar-centella-poremizing-deep-cleansing-foam-125ml-2",
    identite: [
      "Cette mousse nettoyante SKIN1004 Poremizing Deep Cleansing Foam, en flacon de 125 ml, appartient à la ligne Poremizing de la marque, orientée vers le resserrement visuel des pores et l'excès de sébum, à la différence de l'Ampoule Centella classique de SKIN1004 centrée sur l'hydratation et l'apaisement de la peau.",
      "Comme le reste de la gamme, elle s'appuie sur l'extrait de centella asiatica de Madagascar, mais dans une formulation nettoyante moussante pensée pour les peaux mixtes à grasses, avec pores visibles ou tendance à briller en cours de journée.",
    ],
    faits: [
      { libelle: "Marque", valeur: "SKIN1004 (Corée du Sud)" },
      { libelle: "Actif clé", valeur: "Extrait de centella asiatica" },
      { libelle: "Ligne", valeur: "Poremizing, soin des pores" },
      { libelle: "Format", valeur: "Mousse nettoyante, 125 ml" },
      { libelle: "Type de peau visé", valeur: "Mixte à grasse" },
    ],
    usage: [
      "S'utilise matin et/ou soir sur visage humide, en faisant mousser dans les mains avant d'appliquer sur le visage en mouvements circulaires, puis en rinçant à l'eau tiède. Le soir, elle intervient idéalement en second nettoyage après une huile ou un lait démaquillant, plutôt que comme unique étape sur peau maquillée.",
    ],
    positionnement: [
      "Face à l'Ampoule Centella Unscented de la même marque, plus orientée hydratation et apaisement, cette mousse cible spécifiquement les pores et l'excès de sébum en phase de nettoyage. Elle convient aux peaux mixtes à grasses ; une peau sèche ou sensible pourrait la trouver asséchante en usage biquotidien et préférer l'alterner avec un nettoyant plus doux.",
    ],
    faq: [
      {
        question: "Cette mousse resserre-t-elle vraiment les pores ?",
        reponse:
          "Elle aide à limiter l'aspect dilaté des pores en éliminant l'excès de sébum et les impuretés en surface, ce qui améliore visuellement leur apparence. Elle ne modifie pas la taille physiologique du pore, qui est en grande partie déterminée génétiquement chez chaque personne.",
      },
      {
        question: "Peut-on l'utiliser matin et soir sur une peau sensible ?",
        reponse:
          "Une peau sensible réagit parfois à un usage biquotidien d'un nettoyant ciblé pores, qui peut assécher à la longue. Il est raisonnable de commencer par un usage le soir uniquement et d'observer la tolérance avant de l'intégrer aussi le matin.",
      },
    ],
  },
  {
    slug: "skin1004-madagascar-centella-poremizing-light-gel-cream-75ml",
    identite: [
      "Cette Poremizing Light Gel Cream de SKIN1004, en pot ou tube de 75 ml, est la crème hydratante de la ligne Poremizing, pensée pour les peaux mixtes à grasses qui cherchent une hydratation légère sans effet gras ni film occlusif. Comme la mousse nettoyante de la même ligne, elle s'appuie sur l'extrait de centella asiatica de Madagascar.",
      "Sa texture gel-crème, plus fluide qu'une crème classique, vise à hydrater tout en limitant la sensation de lourdeur souvent reprochée aux crèmes riches sur une peau qui brille en cours de journée.",
    ],
    faits: [
      { libelle: "Marque", valeur: "SKIN1004 (Corée du Sud)" },
      { libelle: "Texture", valeur: "Gel-crème léger" },
      { libelle: "Actif clé", valeur: "Extrait de centella asiatica" },
      { libelle: "Ligne", valeur: "Poremizing, peaux mixtes à grasses" },
      { libelle: "Format", valeur: "75 ml" },
    ],
    usage: [
      "S'applique en dernière étape de la routine, matin et/ou soir, sur peau nettoyée et éventuellement après un sérum. Une petite quantité suffit compte tenu de la texture légère et facilement absorbée par la peau. Convient bien sous maquillage le matin grâce à son fini non gras et rapide à pénétrer.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes riches et occlusives du rayon, cette gel-crème se positionne sur la légèreté, pour une peau mixte à grasse qui redoute l'effet lourd ou luisant en journée. Une peau sèche en climat froid pourrait la trouver insuffisante seule et préférer une crème plus nourrissante, notamment le soir.",
    ],
    faq: [
      {
        question: "Cette crème suffit-elle en hiver pour une peau mixte ?",
        reponse:
          "Pour une peau mixte à tendance grasse, elle reste généralement suffisante toute l'année, y compris en hiver. Une zone plus sèche du visage en saison froide peut nécessiter une touche de crème plus riche en complément, appliquée localement sur la zone concernée.",
      },
      {
        question: "Peut-elle s'utiliser le matin sous le maquillage ?",
        reponse:
          "Oui, sa texture légère et son fini non gras en font une bonne base avant maquillage, sans effet glissant ni surcharge qui ferait bouger le fond de teint en cours de journée sur une peau mixte à grasse, même sous forte chaleur.",
      },
    ],
  },
  {
    slug: "skin1004-madagascar-centella-probio-cica-bakuchiol-eye-cream-20ml",
    identite: [
      "Cette crème contour des yeux SKIN1004 associe le bakuchiol, un actif d'origine végétale présenté comme une alternative plus douce au rétinol, à un complexe probiotique et à l'extrait de centella asiatica de la marque. Le format de 20 ml, classique pour un soin du contour de l'œil, reflète une utilisation en petite quantité sur une zone restreinte du visage.",
      "Elle s'adresse aux premiers signes de fatigue ou de relâchement autour de l'œil, avec une approche jugée mieux tolérée que le rétinol pur sur cette zone particulièrement fine et sensible de la peau.",
    ],
    faits: [
      { libelle: "Marque", valeur: "SKIN1004 (Corée du Sud)" },
      { libelle: "Actifs clés", valeur: "Bakuchiol, complexe probiotique, centella asiatica" },
      { libelle: "Zone", valeur: "Contour des yeux" },
      { libelle: "Format", valeur: "20 ml" },
    ],
    usage: [
      "S'applique en très petite quantité, du bout du doigt annulaire pour doser la pression, en tapotant sans frotter sur l'os orbitaire, sans approcher la muqueuse de l'œil. Un usage le soir est courant pour ce type de soin ; certaines l'utilisent aussi le matin sous le maquillage grâce à une bonne tolérance générale du bakuchiol sur cette zone.",
    ],
    positionnement: [
      "Face à un contour des yeux au rétinol pur, souvent réservé au soir et introduit progressivement à cause du risque d'irritation, cette version au bakuchiol se positionne comme une option d'entrée plus douce. Une personne déjà habituée au rétinol et cherchant un effet plus marqué pourrait la trouver insuffisante à elle seule.",
    ],
    faq: [
      {
        question: "Le bakuchiol est-il aussi efficace que le rétinol ?",
        reponse:
          "Le bakuchiol est présenté dans la littérature cosmétique comme apportant un effet comparable au rétinol sur l'aspect de la peau, avec une meilleure tolérance, notamment sur une zone fine comme le contour de l'œil. Il reste toutefois un actif différent, pas un simple substitut du rétinol.",
      },
      {
        question: "Peut-on l'utiliser en même temps qu'un sérum au rétinol sur le reste du visage ?",
        reponse:
          "Oui, c'est un usage courant : le rétinol sur le reste du visage et cette crème plus douce au bakuchiol sur le contour de l'œil, une zone où le rétinol pur est souvent moins bien toléré et plus irritant, même à faible dose.",
      },
    ],
  },
  {
    slug: "snow-white-spot-gel-65g",
    identite: [
      "Snow White Spot Gel se présente en pot de 65 g et cible, comme son nom l'indique, les taches localisées sur le visage, le terme « spot » désignant une tache ou une imperfection isolée plutôt que l'ensemble du teint. C'est un format de soin ciblé, à appliquer localement plutôt qu'en couche sur tout le visage.",
      "La marque ne communique pas de liste d'ingrédients détaillée accessible publiquement : on ne peut donc pas affirmer quel actif éclaircissant précis elle utilise, ni sa concentration. Il convient de vérifier la composition sur l'emballage avant achat, en particulier pour écarter tout ingrédient controversé parfois présent dans ce type de produit local peu documenté.",
    ],
    faits: [
      { libelle: "Format", valeur: "Pot, 65 g" },
      { libelle: "Usage annoncé", valeur: "Application ciblée sur taches localisées" },
      { libelle: "Zone", valeur: "Visage, application locale" },
    ],
    usage: [
      "S'applique en très petite quantité, directement sur la tache concernée, plutôt qu'en couche sur l'ensemble du visage. Comme pour tout soin ciblé sur les taches, une protection solaire quotidienne reste indispensable en journée : sans elle, l'exposition au soleil entretient la pigmentation que le soin cherche à atténuer visuellement.",
    ],
    positionnement: [
      "Face à des soins anti-taches de marques pharmaceutiques qui publient leur composition complète et leurs études, ce produit reste peu documenté sur sa formule exacte. Il peut convenir à qui cherche un produit d'appoint local, mais une personne qui veut connaître précisément l'actif utilisé et sa concentration se tournera plutôt vers une marque qui communique sa liste d'ingrédients en détail.",
    ],
    faq: [
      {
        question: "Que contient exactement ce gel ?",
        reponse:
          "La composition détaillée n'est pas communiquée publiquement par la marque. Il est recommandé de lire attentivement la liste d'ingrédients sur l'emballage avant usage, en particulier pour vérifier l'absence de substances controversées, parfois présentes dans des produits éclaircissants peu documentés du même type.",
      },
      {
        question: "Faut-il une protection solaire en utilisant ce type de produit ?",
        reponse:
          "Oui, systématiquement. Tout soin ciblé sur les taches perd une grande partie de son intérêt sans une protection solaire quotidienne, l'exposition au soleil étant le principal facteur qui entretient et fonce les taches pigmentaires sur le visage, même par temps couvert.",
      },
    ],
  },
  {
    slug: "soskin-lotion-preparatrice-clarifiante-250ml",
    identite: [
      "La Lotion préparatrice clarifiante SoSkin, en flacon de 250 ml, est un tonique de deuxième nettoyage à appliquer après le démaquillage, pour retirer les dernières traces d'impuretés et de calcaire de l'eau tout en préparant la peau à mieux recevoir les soins suivants. Le terme « clarifiante » indique une visée sur l'éclat du teint plutôt qu'un simple geste d'hygiène.",
      "SoSkin est une marque de pharmacie belge orientée vers des formules dermatologiques ; cette lotion s'inscrit dans une routine en plusieurs étapes, en amont du sérum et de la crème, plutôt qu'en soin autonome.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "250 ml" },
      { libelle: "Fonction", valeur: "Lotion de deuxième nettoyage, effet clarifiant" },
      { libelle: "Étape de routine", valeur: "Après démaquillage, avant sérum" },
      { libelle: "Marque", valeur: "SoSkin (Belgique)" },
    ],
    usage: [
      "S'applique sur un coton, en passant sur l'ensemble du visage après le démaquillage habituel, sans rincer ensuite. Ce geste de deuxième nettoyage retire les dernières impuretés avant l'application du sérum ou de la crème, qui pénètrent alors plus facilement sur une peau bien préparée. Un usage matin et soir est courant pour ce type de lotion.",
    ],
    positionnement: [
      "Face à une eau micellaire qui nettoie et démaquille en une étape, cette lotion préparatrice intervient en complément, pour affiner le nettoyage plutôt que le remplacer. Elle convient à qui suit une routine en plusieurs étapes et cherche un teint plus net ; elle reste superflue pour qui se contente d'un nettoyage simple sans routine élaborée.",
    ],
    faq: [
      {
        question: "Cette lotion remplace-t-elle le démaquillant ?",
        reponse:
          "Non, elle intervient après le démaquillage habituel, comme une deuxième étape de nettoyage complémentaire. Elle ne retire pas le maquillage à elle seule et ne dispense pas d'un premier nettoyage adapté au type de maquillage porté dans la journée, même léger.",
      },
      {
        question: "Faut-il rincer cette lotion après application ?",
        reponse:
          "Non, elle s'utilise sans rinçage, comme la plupart des lotions ou toniques de préparation du visage. On l'applique au coton et on enchaîne directement avec le sérum ou la crème une fois la peau sèche, sans attendre plus longtemps ni passer d'eau claire ensuite.",
      },
    ],
  },
  {
    slug: "svr-collagen-biotic-creme-rebondissante-raffermissante-50ml",
    identite: [
      "La crème Collagen Biotic de SVR, en pot de 50 ml, cible le relâchement cutané et la perte de fermeté en associant un actif biotique, un ferment ou postbiotique cosmétique, à une action annoncée sur la synthèse de collagène. Le nom « rebondissante raffermissante » résume la double promesse de la ligne : redonner du rebond à la peau tout en travaillant sur sa fermeté dans la durée.",
      "Elle s'inscrit dans la gamme anti-âge de SVR, marque de pharmacie française reconnue sur les soins ciblés, aux côtés de la version Hyalu Biotic plus orientée sur le repulpage par l'acide hyaluronique.",
    ],
    faits: [
      { libelle: "Marque", valeur: "SVR (France)" },
      { libelle: "Ligne", valeur: "Collagen Biotic" },
      { libelle: "Fonction annoncée", valeur: "Fermeté et rebond de la peau" },
      { libelle: "Format", valeur: "Pot, 50 ml" },
      { libelle: "Zone", valeur: "Visage, peau mature ou en perte de fermeté" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, en quantité suffisante pour couvrir l'ensemble du visage sans excès. Un usage régulier et prolongé est nécessaire pour juger de l'effet sur la fermeté, les soins de ce type agissant progressivement plutôt qu'en une seule application ponctuelle.",
    ],
    positionnement: [
      "Face à la version Hyalu Biotic de la même gamme, plus orientée repulpage immédiat et hydratation, cette crème Collagen Biotic se positionne sur la fermeté dans la durée. Elle convient à une peau mature qui commence à perdre en tonicité ; une peau jeune sans signe de relâchement n'a généralement pas besoin d'un soin aussi ciblé.",
    ],
    faq: [
      {
        question: "Au bout de combien de temps voit-on un effet sur la fermeté ?",
        reponse:
          "Comme pour la plupart des soins ciblés sur la fermeté, un usage régulier de plusieurs semaines est généralement nécessaire avant d'observer un changement perceptible. Il ne s'agit pas d'un effet tenseur immédiat mais d'une action progressive avec l'usage quotidien, matin et soir.",
      },
      {
        question: "Peut-on l'associer à la version Hyalu Biotic de la gamme ?",
        reponse:
          "Oui, les deux soins de la ligne Biotic de SVR sont conçus pour se compléter, la version Hyalu Biotic apportant le repulpage par l'acide hyaluronique et celle-ci travaillant plutôt sur la fermeté de la peau dans la durée, matin comme soir.",
      },
    ],
  },
  {
    slug: "svr-hyalu-biotic-gelee-repulpante-lissante-50ml",
    identite: [
      "La Gelée Hyalu Biotic de SVR, en pot de 50 ml, associe l'acide hyaluronique à un actif biotique pour une action de repulpage et de lissage de la texture de peau. Sa formule en gelée, plus légère qu'une crème, laisse un fini frais et rebondi plutôt qu'un film riche et occlusif sur le visage.",
      "Elle appartient à la même ligne que la Crème Collagen Biotic de SVR, mais se distingue par son orientation hydratation et repulpage immédiat plutôt que fermeté sur la durée, avec une texture gel adaptée aux peaux qui n'aiment pas les textures lourdes.",
    ],
    faits: [
      { libelle: "Marque", valeur: "SVR (France)" },
      { libelle: "Ligne", valeur: "Hyalu Biotic" },
      { libelle: "Actif clé", valeur: "Acide hyaluronique, complexe biotique" },
      { libelle: "Texture", valeur: "Gelée légère" },
      { libelle: "Format", valeur: "Pot, 50 ml" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, seule ou sous une crème plus riche en hiver. Sa texture gel pénètre rapidement sans laisser de film gras, ce qui la rend adaptée à une application sous maquillage le matin. Un usage régulier renforce l'effet repulpant visible sur la texture de la peau.",
    ],
    positionnement: [
      "Face à la Crème Collagen Biotic de la même gamme, plus riche et orientée fermeté, cette gelée mise sur la légèreté et l'hydratation immédiate. Elle convient aux peaux mixtes à normales qui cherchent un effet repulpant sans texture lourde ; une peau très sèche en hiver la trouvera parfois insuffisante seule et préférera la coupler à une crème plus nourrissante.",
    ],
    faq: [
      {
        question: "Cette gelée hydrate-t-elle suffisamment une peau sèche en hiver ?",
        reponse:
          "Sa texture légère peut se révéler insuffisante seule sur une peau très sèche en période froide. Il est alors courant de l'appliquer sous une crème plus riche, en gardant la gelée comme premier soin hydratant avant l'étape plus nourrissante du soir.",
      },
      {
        question: "Quelle différence avec la Crème Collagen Biotic de la même marque ?",
        reponse:
          "La gelée cible surtout le repulpage immédiat et l'hydratation grâce à l'acide hyaluronique, avec une texture légère et rapide à absorber. La crème Collagen Biotic vise davantage la fermeté de la peau dans la durée, avec une texture plus riche et enveloppante.",
      },
    ],
  },
  {
    slug: "svr-sun-secure-creme-spf50-50ml",
    identite: [
      "La Crème Sun Secure SPF50+ de SVR est un écran solaire visage à très haute protection, pensé pour les peaux qui ne tolèrent pas toujours les filtres solaires classiques, peaux sensibles, intolérantes au soleil ou sujettes aux réactions cutanées après exposition. La mention SPF50+ correspond au plus haut niveau de protection affiché sur un produit solaire.",
      "SVR a construit sa gamme Sun Secure autour de cette promesse de tolérance, avec une texture pensée pour ne pas laisser de film blanc épais ni obstruer les pores, contrairement à certains écrans solaires plus anciens ou plus gras.",
    ],
    faits: [
      { libelle: "Marque", valeur: "SVR (France)" },
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Format", valeur: "Crème, 50 ml" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Profil ciblé", valeur: "Peaux sensibles ou intolérantes au soleil" },
    ],
    usage: [
      "S'applique en couche suffisante sur le visage, quinze à vingt minutes avant l'exposition, et se renouvelle toutes les deux heures en cas d'exposition prolongée ou après la baignade et la transpiration. À utiliser en dernière étape de la routine du matin, après le soin hydratant et avant le maquillage si besoin.",
    ],
    positionnement: [
      "Face aux écrans solaires classiques plus gras ou moins bien tolérés, cette crème se positionne sur la tolérance cutanée à indice de protection maximal. Elle convient particulièrement aux peaux sensibles ou déjà marquées par des réactions au soleil. Une peau à tendance grasse en climat très chaud pourrait lui préférer une version fluide ou matifiante de la même gamme, plus légère à porter toute la journée.",
    ],
    faq: [
      {
        question: "Cette crème laisse-t-elle un film blanc ?",
        reponse:
          "Les formules Sun Secure de SVR sont conçues pour limiter cet effet par rapport à des écrans solaires plus anciens, avec une texture qui s'estompe en s'appliquant. Un léger voile peut rester visible selon les carnations, surtout juste après l'application du produit.",
      },
      {
        question: "Peut-on l'appliquer sous le maquillage ?",
        reponse:
          "Oui, c'est un usage courant : on l'applique en dernière étape de la routine du matin, on laisse pénétrer quelques minutes, puis on poursuit avec le maquillage habituel par-dessus, sans attendre plus longtemps que nécessaire avant de commencer l'application du fond de teint.",
      },
    ],
  },
];
