import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "esthederm-city-cream-extreme-jour",
    identite: [
      "Esthederm City Cream Extreme de Jour appartient à la ligne City, conçue pour les peaux citadines exposées en continu à la pollution et à la lumière bleue des écrans. Sa texture crème, plus riche que le City Cream classique, cible une peau qui montre des signes de fatigue et de déshydratation marqués malgré une routine déjà en place. Elle associe l'Eau Cellulaire, la technologie hydratante propre à la maison, à des actifs protecteurs qui limitent l'impact du stress oxydatif urbain sur l'épiderme. Le teint retrouve un aspect plus reposé, moins terne, dès les premières applications.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "City, soin anti-pollution urbain" },
      { libelle: "Texture", valeur: "Crème riche, jour" },
      { libelle: "Actif", valeur: "Eau Cellulaire (Institut Esthederm)" },
      { libelle: "Usage", valeur: "Peau citadine fatiguée, déshydratée" },
    ],
    usage: [
      "S'applique le matin sur peau nettoyée, en dernière étape avant le maquillage ou la protection solaire. Une noisette suffit pour l'ensemble du visage, en insistant sur les zones qui tiraillent en cours de journée. Elle se superpose bien à un sérum plus ciblé anti-âge ou anti-tache, appliqué en dessous.",
    ],
    positionnement: [
      "Face à une crème hydratante généraliste, celle-ci se distingue par son axe anti-pollution, pensé pour un mode de vie urbain plutôt que pour un type de peau précis. Elle convient moins à une peau qui vit surtout en extérieur ou en climat sec, pour laquelle une crème plus nourrissante, sans cette orientation urbaine, sera mieux adaptée.",
    ],
    faq: [
      {
        question: "Cette crème remplace-t-elle une protection solaire ?",
        reponse: "Non, elle vise la protection contre le stress oxydatif lié à la pollution et à la lumière visible des écrans, pas contre les UV. Une protection solaire dédiée reste nécessaire en journée, cette crème se plaçant en soin hydratant de fond plutôt qu'en filtre solaire à proprement parler.",
      },
      {
        question: "Convient-elle aux peaux sensibles ?",
        reponse: "Sa base repose sur l'Eau Cellulaire, bien tolérée y compris sur peau réactive, mais sa texture plus riche que la version classique de la gamme City la destine surtout aux peaux déshydratées. Une peau sensible mais grasse s'orientera plutôt vers une texture plus légère de la même ligne.",
      },
    ],
  },
  {
    slug: "esthederm-coffret-lissant-repulpant",
    identite: [
      "Ce coffret Esthederm réunit plusieurs soins de la maison autour d'un objectif commun, lisser le grain de peau et redonner du volume aux zones qui perdent en fermeté. Il s'adresse à une peau qui commence à montrer des rides d'expression et un manque de tonus sans relever encore d'un soin anti-âge complet. L'intérêt du format coffret est de proposer une routine cohérente, pensée pour être utilisée en synergie plutôt que des produits achetés séparément sans logique d'ensemble, avec un rapport entre les textures étudié par la marque elle-même.",
    ],
    faits: [
      { libelle: "Format", valeur: "Coffret, plusieurs soins associés" },
      { libelle: "Gamme", valeur: "Esthederm, axe lissant et repulpant" },
      { libelle: "Usage", valeur: "Peau marquée par les premières rides d'expression" },
    ],
    usage: [
      "Les produits du coffret s'utilisent selon l'ordre indiqué sur l'emballage, généralement du soin le plus fluide au plus riche, matin ou soir selon les indications propres à chaque référence incluse. Ce format se prête bien à une découverte de la gamme avant d'investir dans les formats individuels une fois la routine adoptée.",
    ],
    positionnement: [
      "Par rapport à l'achat de soins isolés, ce coffret a l'avantage de la cohérence : les textures sont pensées pour se superposer sans interaction ni sensation de surcharge. Il convient moins à qui cherche à cibler un seul geste précis, un contour des yeux par exemple, pour lequel un produit seul reste plus simple à réassortir ensuite.",
    ],
    faq: [
      {
        question: "Les produits du coffret peuvent-ils s'acheter séparément ensuite ?",
        reponse: "Oui, chaque soin inclus appartient au catalogue courant de la marque et se retrouve en format individuel une fois le coffret terminé, ce qui permet de ne réassortir que les étapes réellement adoptées dans la routine plutôt que l'ensemble.",
      },
      {
        question: "Ce coffret convient-il à une première utilisation de la marque ?",
        reponse: "C'est un bon point d'entrée, puisqu'il permet de tester plusieurs textures de la maison en une seule fois plutôt que de deviner quel soin isolé conviendra le mieux à sa peau avant de l'avoir essayé.",
      },
    ],
  },
  {
    slug: "esthederm-eau-cellulaire-brume-100ml",
    identite: [
      "L'Eau Cellulaire est la technologie fondatrice d'Institut Esthederm, une eau biologique reconstituée pour se rapprocher de la composition de l'eau intracellulaire de la peau, plutôt qu'une simple eau florale ou thermale. En brume de 100 ml, elle s'utilise pour une hydratation instantanée, sans rinçage, sur un visage qui tiraille en cours de journée ou après une exposition au soleil, au vent ou à la climatisation. Sa formule minimaliste, sans parfum marqué, la rend adaptée aux peaux sensibles comme aux peaux normales, à tout âge.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau Cellulaire (technologie propriétaire Esthederm)" },
      { libelle: "Galénique", valeur: "Brume, spray fin" },
      { libelle: "Contenance", valeur: "100 ml" },
      { libelle: "Type de peau", valeur: "Tous types, y compris sensible" },
    ],
    usage: [
      "Se vaporise à environ 20 cm du visage, yeux fermés, à tout moment de la journée pour rafraîchir et réhydrater instantanément, ou en fixateur de maquillage. Elle peut aussi se vaporiser avant la crème pour préparer la peau à mieux recevoir le soin suivant, laissée à sécher quelques secondes avant application.",
    ],
    positionnement: [
      "Face aux eaux thermales classiques, qui apaisent surtout par leur minéralité, la brume Eau Cellulaire hydrate réellement par sa proximité biologique avec la peau, un mécanisme différent. Elle convient moins à qui cherche un effet apaisant ciblé sur une rougeur ou une irritation active, pour lequel une eau thermale dédiée à l'apaisement reste plus indiquée.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser plusieurs fois par jour ?",
        reponse: "Oui, sa formule sans rinçage et sans actif irritant permet une utilisation aussi souvent que nécessaire, sur peau nue ou par-dessus le maquillage, sans risque de surcharge ni d'effet gras, contrairement à une crème appliquée trop fréquemment.",
      },
      {
        question: "Remplace-t-elle la crème hydratante du matin ?",
        reponse: "Non, la brume complète la routine mais n'apporte pas l'effet filmogène d'une crème qui retient l'eau dans la journée. Elle se vaporise avant la crème pour renforcer son efficacité, ou en dehors des applications de crème pour un regain d'hydratation ponctuel.",
      },
    ],
  },
  {
    slug: "esthederm-eau-cellulaire-creme-hydratante-fondante",
    identite: [
      "Cette crème hydratante fondante s'appuie sur l'Eau Cellulaire d'Esthederm pour une hydratation qui vise la reconstitution du film hydrolipidique plutôt qu'un simple effet de surface. Sa texture fondante, entre le gel et la crème, pénètre rapidement sans laisser de film gras, ce qui la rend confortable pour un usage quotidien matin et soir sur une peau normale à sèche qui manque de confort. Elle s'inscrit dans la gamme Eau Cellulaire, pensée comme une hydratation de fond adaptée à toute la famille.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau Cellulaire" },
      { libelle: "Galénique", valeur: "Crème fondante, texture légère" },
      { libelle: "Type de peau", valeur: "Normale à sèche" },
    ],
    usage: [
      "S'applique matin et soir sur visage et cou nettoyés, en mouvements doux du centre vers l'extérieur du visage. Sa texture fondante permet de l'utiliser seule au quotidien ou en dessous d'un soin plus ciblé anti-âge ou anti-tache, sans alourdir la routine.",
    ],
    positionnement: [
      "Comparée aux crèmes hydratantes classiques à base de glycérine ou d'acide hyaluronique seul, celle-ci mise sur la proximité biologique de l'Eau Cellulaire avec la peau. Elle convient moins à une peau très sèche ou mature en recherche d'un soin plus riche et nourrissant, pour laquelle une texture plus dense de la gamme Excellage sera mieux adaptée.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle à une peau sensible ?",
        reponse: "Sa formule construite autour de l'Eau Cellulaire, sans parfum marqué ni actif irritant, la rend généralement bien tolérée sur peau sensible, mais un test au pli du coude reste recommandé avant toute première application sur un visage réactif ou sujet aux rougeurs.",
      },
      {
        question: "Peut-elle s'utiliser sous le maquillage ?",
        reponse: "Oui, sa texture fondante pénètre rapidement sans laisser de film gras, ce qui en fait une bonne base avant maquillage, à condition de laisser quelques minutes de pose pour que le soin soit bien absorbé avant application du fond de teint.",
      },
    ],
  },
  {
    slug: "esthederm-eau-cellulaire-lotion-essence-hydratant",
    identite: [
      "Cette lotion essence de la gamme Eau Cellulaire se situe entre la lotion tonique et le sérum, une texture typique du geste « essence » popularisé par les routines asiatiques mais construite ici autour de la technologie propre à Esthederm. Elle s'applique juste après le nettoyage pour préparer la peau à mieux recevoir les soins suivants, sur un visage déshydraté qui manque d'éclat. Sa texture fluide et sans rinçage en fait une étape supplémentaire plutôt qu'un remplacement de la crème de jour ou de nuit habituelle.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau Cellulaire" },
      { libelle: "Galénique", valeur: "Lotion essence, texture fluide" },
      { libelle: "Type de peau", valeur: "Déshydratée, en manque d'éclat" },
    ],
    usage: [
      "S'applique au coton ou à la main juste après le nettoyage du visage, matin et soir, en tapotant jusqu'à absorption complète avant le sérum ou la crème suivante. Elle peut aussi s'utiliser en masque express, en couche plus généreuse laissée poser quelques minutes avant d'être essuyée.",
    ],
    positionnement: [
      "Par rapport à une simple lotion tonique, cette essence apporte une dose d'hydratation supplémentaire avant le sérum, une étape que beaucoup de routines occidentales sautent. Elle convient moins à une routine déjà chargée en étapes, où elle risque de faire doublon avec un sérum hydratant déjà présent dans la trousse.",
    ],
    faq: [
      {
        question: "Dans quel ordre l'utiliser dans la routine ?",
        reponse: "Elle s'applique juste après le nettoyage et avant le sérum, en première étape hydratante de la routine. C'est une préparation de la peau plutôt qu'un soin traitant, à ne pas confondre avec un sérum ciblé appliqué ensuite pour une action plus spécifique.",
      },
      {
        question: "Peut-on la superposer à un sérum anti-âge ?",
        reponse: "Oui, sa texture fine et sans actif fort n'interfère pas avec un sérum anti-âge appliqué juste après, elle prépare au contraire la peau à mieux en recevoir les bénéfices en renforçant l'hydratation de base avant l'application de l'actif ciblé.",
      },
    ],
  },
  {
    slug: "esthederm-esthewhite-serum-anti-taches-eclaircissant",
    identite: [
      "Ce sérum appartient à la gamme Esthe White d'Institut Esthederm, dédiée aux taches pigmentaires et au teint irrégulier. Sa formule concentrée vise à limiter la production de mélanine responsable des taches brunes liées au soleil, à l'âge ou aux cicatrices post-inflammatoires, sur un visage marqué par un teint hétérogène plutôt qu'homogène. Utilisé sur la durée, il aide à atténuer visuellement l'intensité des taches existantes et à limiter l'apparition de nouvelles marques, en complément indispensable d'une protection solaire quotidienne.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Esthe White, ligne éclaircissante" },
      { libelle: "Galénique", valeur: "Sérum concentré" },
      { libelle: "Usage", valeur: "Teint irrégulier, taches pigmentaires" },
    ],
    usage: [
      "S'applique matin et soir sur les zones concernées ou sur l'ensemble du visage, avant la crème de jour ou de nuit habituelle. Son efficacité dépend d'une utilisation régulière sur plusieurs semaines, associée impérativement à une protection solaire le jour, sans laquelle les taches traitées ont tendance à revenir rapidement.",
    ],
    positionnement: [
      "Face à une crème anti-taches globale, ce sérum a l'avantage d'une concentration plus élevée en actifs éclaircissants, pour une action plus ciblée sur les taches installées. Il convient moins à une peau qui cherche surtout à prévenir l'apparition de taches sans en avoir encore, pour laquelle une protection solaire seule, bien appliquée, suffit souvent en première intention.",
    ],
    faq: [
      {
        question: "Ce sérum élimine-t-il les taches définitivement ?",
        reponse: "Non, aucun soin cosmétique n'élimine une tache de façon définitive et permanente. Il aide à en atténuer visuellement l'intensité avec une utilisation régulière, mais une tache profonde ou ancienne garde souvent une trace résiduelle, et l'exposition solaire sans protection peut la faire réapparaître.",
      },
      {
        question: "Peut-on l'utiliser avec un rétinol le soir ?",
        reponse: "Les deux peuvent cohabiter, mais mieux vaut les alterner plutôt que les superposer le même soir au début, le temps de vérifier la tolérance de la peau, car l'association de deux actifs augmente le risque d'irritation sur une peau non accoutumée.",
      },
    ],
  },
  {
    slug: "esthederm-esthe-white-soin-nuit-regenerant-eclaircissant-jeunesse-50ml",
    identite: [
      "Ce soin de nuit de la gamme Esthe White combine deux axes, l'éclaircissement du teint et la régénération nocturne propre aux soins anti-âge, sur un format de 50 ml pensé pour un usage prolongé. Il s'adresse à une peau mature qui cumule taches pigmentaires et perte de fermeté, deux signes que beaucoup de soins traitent séparément. La nuit, la peau se régénère naturellement plus vite, un moment que la formule met à profit pour agir sur le renouvellement cellulaire pendant que le teint reste protégé du soleil.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Esthe White, soin nuit" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Usage", valeur: "Nuit" },
      { libelle: "Cible", valeur: "Teint irrégulier et peau mature" },
    ],
    usage: [
      "S'applique le soir sur visage et cou nettoyés, en dernière étape de la routine, sur peau sèche. Il se marie bien avec le sérum Esthe White appliqué juste avant pour renforcer l'action éclaircissante, la crème venant sceller l'hydratation pendant la nuit sans laisser de sensation collante au réveil.",
    ],
    positionnement: [
      "Comparé à un soin anti-âge classique sans axe éclaircissant, celui-ci répond à deux préoccupations à la fois plutôt qu'une seule, ce qui simplifie la routine d'une peau mature au teint irrégulier. Il convient moins à une peau jeune sans tache ni relâchement, pour laquelle l'un ou l'autre axe suffit sans avoir besoin du double bénéfice.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser aussi le matin ?",
        reponse: "Rien ne l'interdit formellement, mais sa texture est pensée pour la nuit et n'inclut pas de protection solaire. Utilisé le jour, il doit impérativement être suivi d'une crème solaire, faute de quoi les actifs éclaircissants perdent une grande partie de leur intérêt face à l'exposition.",
      },
      {
        question: "Combien de temps avant de voir un résultat sur le teint ?",
        reponse: "Comme pour tout soin éclaircissant, l'effet se construit sur plusieurs semaines d'utilisation régulière, le cycle de renouvellement cutané prenant environ un mois. Un usage occasionnel ou irrégulier retarde d'autant l'atténuation visuelle du teint irrégulier recherchée.",
      },
    ],
  },
  {
    slug: "esthederm-excellage-creme-densite-nutrition-eclat",
    identite: [
      "Cette crème Excellage, présentée par la marque comme la crème densité nutrition éclat, cible la peau mature qui perd en densité et en éclat, un phénomène marqué après la ménopause lorsque la production naturelle de lipides cutanés ralentit. Sa texture riche nourrit en profondeur tout en travaillant sur la fermeté du grain de peau, deux axes que la gamme Excellage associe systématiquement. Elle s'adresse à une peau qui a besoin d'un soin nourrissant plus que d'un simple anti-rides de surface.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Excellage, soin peau mature" },
      { libelle: "Texture", valeur: "Crème riche" },
      { libelle: "Cible", valeur: "Densité, nutrition, éclat du teint" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, en quantité généreuse adaptée aux besoins d'une peau sèche et mature. Elle peut se combiner au sérum Excellage appliqué en dessous pour renforcer l'action sur la densité cutanée, la crème venant sceller l'hydratation et nourrir en surface.",
    ],
    positionnement: [
      "Face à une crème anti-âge généraliste, celle-ci cible spécifiquement la perte de densité liée à la ménopause plutôt que les rides seules, une distinction qui compte pour une peau mature. Elle convient moins à une peau jeune en prévention, pour laquelle une texture moins riche évite une sensation de surcharge inutile à cet âge.",
    ],
    faq: [
      {
        question: "À partir de quel âge cette crème est-elle pertinente ?",
        reponse: "La gamme Excellage s'adresse à une peau mature, généralement après la cinquantaine, au moment où la baisse des œstrogènes accélère la perte de densité cutanée. Utilisée plus tôt sans ce besoin, sa richesse peut sembler excessive pour une peau encore bien pourvue en lipides propres.",
      },
      {
        question: "Cette crème convient-elle en été ?",
        reponse: "Sa texture riche, pensée pour nourrir une peau mature, peut sembler lourde en période de forte chaleur. Il est alors possible de l'alterner avec un soin plus léger de la même gamme en journée, en la réservant au soir ou aux mois plus frais.",
      },
    ],
  },
  {
    slug: "esthederm-excellage-creme-mains-50ml",
    identite: [
      "La crème mains Excellage applique à cette zone souvent négligée l'axe anti-âge de la gamme, pensée pour une peau mature dont les mains marquent le manque de fermeté aussi visiblement que le visage. En format 50 ml, facile à glisser dans un sac, elle nourrit une peau des mains fine, exposée en continu au lavage et aux agressions extérieures. Sa texture, absorbée rapidement, évite l'effet gras qui décourage souvent l'usage régulier d'une crème mains au cours de la journée.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Excellage" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Zone", valeur: "Mains" },
      { libelle: "Cible", valeur: "Peau mature" },
    ],
    usage: [
      "S'applique plusieurs fois par jour, en particulier après chaque lavage des mains, en quantité suffisante pour masser jusqu'à absorption complète. Une application plus généreuse le soir, avant le coucher, permet une action nourrissante prolongée pendant la nuit sans gêner les gestes du quotidien.",
    ],
    positionnement: [
      "Comparée à une crème mains générique, celle-ci reprend les actifs anti-âge de la gamme Excellage, pensés pour une peau mature plutôt que pour une simple protection contre le dessèchement. Elle convient moins à qui cherche uniquement une crème mains très grasse d'hiver, pour laquelle une texture plus occlusive répond au même besoin ponctuel.",
    ],
    faq: [
      {
        question: "Cette crème mains laisse-t-elle les mains grasses ?",
        reponse: "Sa texture est étudiée pour pénétrer rapidement malgré sa richesse, ce qui permet de reprendre une activité manuelle peu après l'application, contrairement à certaines crèmes mains très occlusives qui laissent un film sur les objets touchés dans les minutes qui suivent.",
      },
      {
        question: "Peut-elle s'utiliser aussi sur les ongles ?",
        reponse: "Oui, en insistant sur les cuticules lors du massage, ce qui aide à limiter leur dessèchement, fréquent chez des mains matures exposées au lavage répété, même si ce n'est pas un soin des ongles à proprement parler.",
      },
    ],
  },
  {
    slug: "esthederm-excellage-densite-creme-50ml",
    identite: [
      "Cette crème densité de la gamme Excellage, en format 50 ml, cible directement la perte de fermeté et de volume qui accompagne le vieillissement cutané, en particulier autour de la période de la ménopause. Elle vise à redonner du tonus au grain de peau plutôt qu'à lisser une ride en particulier, une approche globale caractéristique de la gamme. Sa texture riche convient à une peau qui a besoin d'un apport lipidique renforcé pour retrouver du confort au quotidien.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Excellage" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Cible", valeur: "Densité et fermeté de la peau mature" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, en mouvements ascendants pour accompagner l'effet tenseur recherché. Elle se combine bien avec le sérum Excellage appliqué en dessous, la crème venant sceller l'ensemble et prolonger l'hydratation apportée par le sérum au fil de la journée.",
    ],
    positionnement: [
      "Face à un soin anti-rides classique centré sur les ridules de surface, cette crème travaille plutôt sur le volume et la fermeté globale du visage, un axe plus adapté à une peau qui a déjà perdu en densité. Elle convient moins à une peau jeune sans perte de fermeté marquée, pour laquelle l'effet recherché ne sera pas perceptible.",
    ],
    faq: [
      {
        question: "Cette crème peut-elle remplacer le sérum Excellage ?",
        reponse: "Elle peut s'utiliser seule, mais son action est renforcée en association avec le sérum de la même gamme appliqué en dessous, les deux textures étant pensées pour se compléter plutôt que pour faire doublon dans la routine anti-âge.",
      },
      {
        question: "Combien de temps pour voir un effet sur la fermeté ?",
        reponse: "Comme pour tout soin densifiant, un usage régulier de plusieurs semaines est nécessaire avant de percevoir une différence sur le tonus de la peau, le renouvellement du derme étant un processus lent qu'aucun soin cosmétique n'accélère de façon spectaculaire.",
      },
    ],
  },
  {
    slug: "esthederm-excellage-serum-30ml",
    identite: [
      "Le sérum Excellage, en flacon de 30 ml, concentre l'axe anti-âge de la gamme dans une texture plus fluide que la crème, pensée pour agir en profondeur sur la densité de la peau mature avant l'application d'un soin plus riche. Il s'adresse à une peau qui a besoin d'un geste ciblé en complément de sa crème habituelle, en particulier au moment où les premiers signes de perte de fermeté liés à la ménopause deviennent visibles. Sa concentration en actifs est généralement plus élevée que celle d'une crème de la même gamme.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Excellage" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Galénique", valeur: "Sérum" },
      { libelle: "Cible", valeur: "Densité, peau mature" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, avant la crème de jour ou de nuit, en quelques gouttes réparties du bout des doigts. Il se laisse pénétrer quelques instants avant l'application de la crème suivante, pour ne pas diluer la concentration d'actifs propre au sérum.",
    ],
    positionnement: [
      "Comparé à la crème Excellage seule, ce sérum apporte une concentration d'actifs plus élevée, utile pour une peau très marquée par la perte de densité. Il convient moins à une peau qui débute tout juste avec des soins anti-âge, pour laquelle la crème seule, moins concentrée, suffit souvent en première approche avant d'ajouter cette étape supplémentaire.",
    ],
    faq: [
      {
        question: "Faut-il utiliser ce sérum avant ou après la crème Excellage ?",
        reponse: "Toujours avant. Un sérum, de texture plus fluide et plus concentrée, s'applique sur peau nettoyée en première étape, la crème venant ensuite sceller son action et apporter l'hydratation de surface complémentaire nécessaire au confort de la peau mature.",
      },
      {
        question: "Ce sérum convient-il à une peau mature mais encore grasse ?",
        reponse: "Sa texture fluide, moins riche qu'une crème, le rend compatible avec une peau mature restée grasse ou mixte, un profil qui existe aussi après la cinquantaine et pour lequel une crème trop riche serait mal tolérée au quotidien.",
      },
    ],
  },
  {
    slug: "esthederm-intensive-hyaluronic-creme-50ml",
    identite: [
      "Cette crème Intensive Hyaluronic, en pot de 50 ml, s'appuie sur l'acide hyaluronique pour combler visuellement les rides et redonner du volume à une peau qui a perdu en rebond. Elle appartient à la gamme Intensive, une collection de soins concentrés qu'Esthederm conçoit pour cibler une préoccupation précise plutôt qu'une routine générale. Sa texture crème, plus riche que le sérum de la même ligne, convient à une peau qui recherche un confort immédiat en plus de l'effet repulpant recherché sur la durée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide hyaluronique" },
      { libelle: "Gamme", valeur: "Intensive" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Cible", valeur: "Rides, perte de volume" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, en dernière étape de la routine ou après un sérum plus ciblé de la même gamme. Sa texture s'étale facilement et convient à une application quotidienne, seule ou en alternance avec un autre soin anti-âge selon les besoins ressentis au fil des saisons.",
    ],
    positionnement: [
      "Face à un sérum à l'acide hyaluronique seul, cette crème apporte en plus l'effet occlusif qui retient l'eau à la surface de la peau, un plus pour une peau sèche. Elle convient moins à une peau grasse en climat chaud, pour laquelle le sérum de la même gamme, plus léger, sera mieux toléré sans sensation de lourdeur.",
    ],
    faq: [
      {
        question: "L'acide hyaluronique comble-t-il vraiment les rides ?",
        reponse: "Il attire et retient l'eau dans les couches superficielles de la peau, ce qui repulpe visuellement les ridules de déshydratation. Sur une ride profonde et installée, l'effet reste un lissage visuel temporaire, pas une correction durable comparable à un geste médical.",
      },
      {
        question: "Peut-on associer cette crème au sérum Intensive Hyaluronic ?",
        reponse: "Oui, les deux textures sont conçues pour se superposer, le sérum en première étape pour une concentration plus élevée d'actif, la crème ensuite pour sceller l'hydratation et apporter le confort recherché sur une peau sèche ou mature.",
      },
    ],
  },
  {
    slug: "esthederm-intensive-hyaluronic-rides-ridules-30ml",
    identite: [
      "Ce soin Intensive Hyaluronic, en format 30 ml et ciblant spécifiquement rides et ridules, concentre l'acide hyaluronique de la gamme sur les zones du visage où les premières lignes de déshydratation ou d'expression apparaissent, contour des yeux, front, sillons nasogéniens. Il s'adresse à une peau qui commence à montrer ces signes sans relever encore d'un soin de densité globale comme Excellage. Sa texture concentrée agit en complément d'une crème hydratante quotidienne plutôt qu'en remplacement.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide hyaluronique" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Cible", valeur: "Rides et ridules" },
      { libelle: "Gamme", valeur: "Intensive" },
    ],
    usage: [
      "S'applique localement sur les zones concernées, matin et/ou soir, en tapotant du bout des doigts jusqu'à absorption avant la crème habituelle. Il peut aussi s'appliquer sur l'ensemble du visage pour une action plus globale, selon l'étendue des rides et ridules à traiter.",
    ],
    positionnement: [
      "Comparé à la crème Intensive Hyaluronic, ce soin plus concentré cible spécifiquement les rides déjà visibles plutôt que la prévention générale, un usage plus ciblé et plus économe en quantité utilisée. Il convient moins à une peau encore lisse en simple prévention, pour laquelle une crème hydratante générale suffit sans avoir besoin de cette concentration d'actif.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser uniquement sur le contour des yeux ?",
        reponse: "Il n'est pas formulé spécifiquement pour cette zone plus fine et plus sensible que le reste du visage. Un usage ponctuel reste possible en l'absence d'irritation, mais un soin dédié au contour des yeux reste préférable pour un usage quotidien sur cette zone.",
      },
      {
        question: "Ce soin remplace-t-il la crème de jour ?",
        reponse: "Non, sa concentration en acide hyaluronique en fait un complément appliqué avant la crème habituelle, pas un substitut. La crème de jour apporte l'occlusivité et souvent la protection nécessaires que ce soin concentré, plus fluide, n'apporte pas à lui seul.",
      },
    ],
  },
  {
    slug: "esthederm-intensive-hyaluronic-serum-rides",
    identite: [
      "Ce sérum Intensive Hyaluronic reprend l'axe rides de la gamme sous une texture fluide, plus légère que la crème de la même ligne, pensée pour une pénétration rapide sur une peau qui recherche un effet repulpant sans sensation de gras. Il concentre l'acide hyaluronique en première étape de la routine anti-âge, avant l'application d'un soin plus riche. Il s'adresse à une peau marquée par des rides liées à la déshydratation plutôt qu'à une perte de densité structurelle plus profonde.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide hyaluronique" },
      { libelle: "Galénique", valeur: "Sérum fluide" },
      { libelle: "Gamme", valeur: "Intensive" },
      { libelle: "Cible", valeur: "Rides" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, avant la crème habituelle, en quelques gouttes réparties du bout des doigts sur l'ensemble du visage. Il se laisse pénétrer quelques instants avant l'étape suivante, pour que l'acide hyaluronique agisse en profondeur avant d'être scellé par un soin plus occlusif.",
    ],
    positionnement: [
      "Face à la crème de la même gamme, ce sérum offre une texture plus légère et une concentration en actif généralement plus élevée, adaptée à une application sous d'autres soins. Il convient moins à une peau très sèche cherchant un confort immédiat, pour laquelle la crème seule, plus riche, répond mieux au besoin sans nécessiter cette étape supplémentaire.",
    ],
    faq: [
      {
        question: "Ce sérum convient-il à une peau grasse ?",
        reponse: "Sa texture fluide et non grasse le rend compatible avec une peau grasse en recherche d'un effet anti-rides sans lourdeur, contrairement à une crème riche qui conviendrait moins bien à ce type de peau sujette aux brillances en cours de journée.",
      },
      {
        question: "Faut-il l'associer à une crème ensuite ?",
        reponse: "C'est recommandé, en particulier sur peau sèche, car le sérum seul n'apporte pas l'effet occlusif qui retient l'hydratation en surface toute la journée. Sur peau grasse, il peut s'utiliser seul selon la tolérance et le confort ressenti.",
      },
    ],
  },
  {
    slug: "esthederm-intensive-propolis-ferulic-acid-50ml",
    identite: [
      "Ce soin Intensive associe propolis et acide férulique, deux actifs reconnus pour leurs propriétés antioxydantes, dans un format de 50 ml pensé pour protéger la peau du stress oxydatif responsable d'un vieillissement prématuré. Il s'adresse à une peau exposée régulièrement au soleil, à la pollution ou au tabac, autant de facteurs qui accélèrent la dégradation du collagène par les radicaux libres. La combinaison des deux actifs vise un effet protecteur renforcé, l'acide férulique étant connu pour stabiliser l'action antioxydante d'autres composés dans une formule.",
    ],
    faits: [
      { libelle: "Actifs principaux", valeur: "Propolis, acide férulique" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Gamme", valeur: "Intensive" },
      { libelle: "Cible", valeur: "Stress oxydatif, prévention du vieillissement" },
    ],
    usage: [
      "S'applique de préférence le matin, avant la protection solaire, pour renforcer la défense de la peau contre les agressions de la journée. Il se combine bien avec un soin hydratant appliqué par-dessus, la fonction antioxydante des actifs n'entrant pas en concurrence avec l'hydratation apportée par la crème suivante.",
    ],
    positionnement: [
      "Comparé à un sérum à la vitamine C seule, également antioxydante, ce soin mise sur la stabilité de l'association propolis et acide férulique, souvent mieux tolérée par les peaux sensibles que la vitamine C pure. Il convient moins à qui cherche un effet éclat immédiat dès l'application, ce soin agissant surtout en prévention sur la durée.",
    ],
    faq: [
      {
        question: "Ce soin a-t-il un effet visible immédiat ?",
        reponse: "Non, son action antioxydante se mesure sur le long terme, en limitant les dégâts cumulés des radicaux libres plutôt qu'en corrigeant un signe déjà visible. C'est un soin de prévention à intégrer dans la durée, pas un correcteur d'éclat instantané.",
      },
      {
        question: "Peut-on l'utiliser en même temps qu'une protection solaire ?",
        reponse: "Oui, les deux se complètent : ce soin protège la peau au niveau cellulaire contre le stress oxydatif, la protection solaire filtre les rayons UV en surface. Les deux mécanismes sont différents et se renforcent plutôt qu'ils ne font doublon dans la routine du matin.",
      },
    ],
  },
  {
    slug: "esthederm-intensive-spiruline-serum-30ml",
    identite: [
      "Ce sérum Intensive à la spiruline, en flacon de 30 ml, mise sur les propriétés revitalisantes de cette microalgue, riche en nutriments, pour redonner de l'énergie à une peau terne et fatiguée. Il s'adresse à un teint marqué par le manque de sommeil, le stress ou les changements de saison, plutôt qu'à un signe de vieillissement précis comme la ride ou la tache. Sa texture sérum, légère, s'intègre facilement en cure ponctuelle dans une routine déjà installée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Spiruline" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Galénique", valeur: "Sérum" },
      { libelle: "Cible", valeur: "Teint terne, peau fatiguée" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, avant la crème habituelle, idéalement en cure de plusieurs semaines lors des périodes de fatigue marquée, changement de saison ou après une exposition prolongée. Quelques gouttes suffisent, réparties du bout des doigts sur l'ensemble du visage.",
    ],
    positionnement: [
      "Face à un sérum vitaminé C classique, également recherché pour l'éclat, celui-ci mise sur un actif d'origine différente, la spiruline, réputé plus doux et mieux toléré par une peau sensible. Il convient moins à qui cherche une action ciblée sur une ride ou une tache précise, pour laquelle un sérum dédié à cet objectif reste plus indiqué.",
    ],
    faq: [
      {
        question: "En combien de temps le teint retrouve-t-il de l'éclat ?",
        reponse: "Comme pour toute cure d'éclat, l'effet se construit sur quelques semaines d'utilisation régulière, la peau se renouvelant progressivement. Un usage ponctuel avant un événement peut donner un léger coup d'éclat, mais l'effet le plus net vient d'une utilisation continue sur la durée.",
      },
      {
        question: "Ce sérum convient-il en cure toute l'année ?",
        reponse: "Il peut s'utiliser toute l'année, mais il est surtout pensé comme un soin de cure lors des baisses de forme ponctuelles, printemps ou sortie d'hiver par exemple, plutôt que comme un sérum anti-âge ou hydratant à intégrer en continu dans la routine.",
      },
    ],
  },
  {
    slug: "esthederm-lait-soin-corps-prologateur-bronzage",
    identite: [
      "Ce lait corps d'Esthederm est pensé pour prolonger le hâle après une exposition au soleil, une fonction distincte d'un après-soleil apaisant classique puisqu'il vise à entretenir la couleur dans la durée plutôt qu'à seulement calmer la peau échauffée. Il s'adresse à une peau qui a déjà bronzé et cherche à conserver ce teint hâlé plus longtemps une fois l'exposition terminée, en stimulant légèrement la production de mélanine déjà activée par le soleil. Sa texture lait, fluide, s'applique facilement sur de grandes surfaces du corps.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Après-soleil" },
      { libelle: "Galénique", valeur: "Lait corps" },
      { libelle: "Usage", valeur: "Prolongateur de bronzage" },
    ],
    usage: [
      "S'applique sur l'ensemble du corps, idéalement chaque jour après la douche, sur une peau qui a déjà bronzé au soleil. Il ne remplace pas une protection solaire pendant l'exposition, son rôle intervenant uniquement après, pour entretenir le hâle obtenu durant un séjour au soleil.",
    ],
    positionnement: [
      "Face à un lait après-soleil apaisant classique, celui-ci ajoute une fonction supplémentaire, entretenir la couleur, plutôt que seulement calmer l'échauffement cutané. Il convient moins à une peau qui vient d'être fortement exposée et présente des rougeurs ou une sensation de chaleur, pour laquelle un après-soleil apaisant reste la priorité avant tout soin prolongateur.",
    ],
    faq: [
      {
        question: "Ce lait fait-il bronzer sans soleil ?",
        reponse: "Non, il ne contient pas d'autobronzant et n'a pas d'effet sur une peau qui n'a pas été exposée. Il agit uniquement en entretenant une couleur déjà obtenue par une exposition réelle, en prolongeant sa durée plutôt qu'en la créant artificiellement.",
      },
      {
        question: "Peut-on l'utiliser toute l'année ?",
        reponse: "Son intérêt principal se situe dans les semaines qui suivent une exposition au soleil. En dehors de cette période, un lait corps hydratant classique, sans cette fonction spécifique, répond mieux aux besoins d'une peau qui n'a pas bronzé récemment.",
      },
    ],
  },
  {
    slug: "esthederm-lift-repair-serum",
    identite: [
      "Le sérum Lift & Repair d'Esthederm cible le relâchement cutané et la perte de fermeté du visage et de l'ovale, deux signes qui s'installent progressivement avec l'âge. Sa texture sérum, concentrée, agit avant la crème habituelle pour renforcer l'effet tenseur recherché sur un visage qui a perdu en tonicité. Il s'adresse à une peau mature qui cherche un effet liftant visuel, en complément d'une routine anti-âge déjà en place plutôt qu'en soin isolé.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Sérum" },
      { libelle: "Cible", valeur: "Fermeté, relâchement cutané" },
      { libelle: "Zone", valeur: "Visage, ovale" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, en mouvements ascendants qui accompagnent l'effet tenseur recherché, avant la crème habituelle. Il se laisse pénétrer quelques instants avant l'application du soin suivant, pour que les actifs concentrés agissent pleinement sur les zones de relâchement.",
    ],
    positionnement: [
      "Face à une crème raffermissante seule, ce sérum apporte une concentration d'actifs plus élevée, adaptée à un relâchement déjà bien installé. Il convient moins à une peau jeune en simple prévention, pour laquelle une crème hydratante classique, sans cet axe liftant marqué, répond suffisamment au besoin du moment.",
    ],
    faq: [
      {
        question: "Cet effet lift est-il immédiat ou progressif ?",
        reponse: "L'effet perçu juste après l'application reste un lissage temporaire de surface. L'action sur la fermeté réelle du grain de peau se construit progressivement, avec un usage régulier sur plusieurs semaines, comme pour la plupart des soins raffermissants cosmétiques.",
      },
      {
        question: "Ce sérum convient-il en complément d'un soin médical type injections ?",
        reponse: "Il n'interfère pas avec ce type de geste et peut s'utiliser en complément pour entretenir la fermeté entre deux séances, mais il ne reproduit pas un effet comparable à un acte médical, son action restant cosmétique et de surface.",
      },
    ],
  },
  {
    slug: "esthederm-lift-repair-serum-30ml",
    identite: [
      "Cette version 30 ml du sérum Lift and Repair reprend la formule concentrée de la référence standard de la gamme, ciblant le relâchement cutané du visage et de l'ovale chez une peau mature. Le format précise le conditionnement en flacon adapté à un usage économe, quelques gouttes suffisant pour l'ensemble du visage à chaque application. Il s'utilise en cure continue plutôt qu'occasionnelle pour un effet sur la fermeté qui se construit dans la durée.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Galénique", valeur: "Sérum" },
      { libelle: "Cible", valeur: "Fermeté, relâchement cutané" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage et cou nettoyés, avant la crème habituelle, en mouvements ascendants. Le format 30 ml, courant pour un sérum concentré, correspond à plusieurs semaines d'utilisation quotidienne à raison de quelques gouttes par application.",
    ],
    positionnement: [
      "Par rapport à un soin de jour tout-en-un qui inclut un axe fermeté dilué parmi d'autres promesses, ce sérum concentré cible spécifiquement le relâchement, pour un effet plus marqué chez une peau qui en a réellement besoin. Il convient moins à une routine déjà chargée en sérums, où il ajoute une étape supplémentaire à gérer au quotidien.",
    ],
    faq: [
      {
        question: "Combien de temps dure un flacon de 30 ml en usage quotidien ?",
        reponse: "À raison de quelques gouttes par application, matin et/ou soir, un flacon de 30 ml couvre généralement plusieurs semaines d'utilisation régulière, une durée cohérente avec le temps nécessaire pour percevoir un effet sur la fermeté de la peau.",
      },
      {
        question: "Peut-on l'associer à une crème plus riche de la même gamme ?",
        reponse: "Oui, le sérum s'applique avant en première étape concentrée, la crème venant ensuite sceller l'hydratation et prolonger l'effet tenseur recherché sur l'ensemble de la journée ou de la nuit, selon la logique de superposition habituelle des textures Esthederm.",
      },
    ],
  },
  {
    slug: "esthederm-osmoclean-demaquillant-haute-tolerance-125ml",
    identite: [
      "Ce démaquillant Osmoclean, en flacon de 125 ml, s'adresse spécifiquement aux peaux sensibles ou réactives grâce à sa formule dite haute tolérance, pensée pour retirer maquillage et impuretés sans agresser le film hydrolipidique. Il s'appuie sur la technologie osmotique propre à la gamme Osmoclean, qui vise un nettoyage respectueux de l'équilibre naturel de la peau plutôt qu'un nettoyage moussant classique, souvent plus décapant. Il convient au visage comme au contour des yeux selon la tolérance de chacun.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Osmoclean, nettoyage haute tolérance" },
      { libelle: "Contenance", valeur: "125 ml" },
      { libelle: "Type de peau", valeur: "Sensible, réactive" },
    ],
    usage: [
      "S'applique au coton, sur peau sèche, en passant délicatement sur le visage et éventuellement les yeux selon la tolérance, sans nécessiter de rinçage abondant. Il précède idéalement un second nettoyage à l'eau ou une lotion tonique pour retirer les derniers résidus avant l'application du soin du soir.",
    ],
    positionnement: [
      "Face à un démaquillant moussant classique, celui-ci privilégie la douceur et la tolérance, au prix d'un pouvoir nettoyant parfois moins radical sur un maquillage waterproof très chargé. Il convient moins à qui porte un maquillage très couvrant au quotidien, pour lequel un baume ou une huile démaquillante plus travaillante sera plus efficace en une seule étape.",
    ],
    faq: [
      {
        question: "Peut-il retirer un maquillage waterproof ?",
        reponse: "Sa formule haute tolérance privilégie la douceur sur la peau plutôt que la puissance de dissolution, ce qui le rend moins efficace seul sur un maquillage très résistant à l'eau. Un double nettoyage ou un démaquillant dédié aux yeux waterproof reste alors préférable en complément.",
      },
      {
        question: "Convient-il aux yeux sensibles portant des lentilles de contact ?",
        reponse: "Sa formule haute tolérance est pensée pour minimiser les risques d'irritation oculaire, mais chaque peau réagit différemment. Un test préalable reste recommandé, et il convient de retirer les lentilles avant toute utilisation autour de la zone des yeux, comme pour tout démaquillant.",
      },
    ],
  },
  {
    slug: "esthederm-osmoclean-masque-gomme-clarifiant-75ml",
    identite: [
      "Ce masque gomme Osmoclean, en tube de 75 ml, combine deux fonctions en un seul geste, l'exfoliation mécanique douce et le nettoyage en profondeur, pour clarifier un teint terni par les impuretés accumulées au fil de la semaine. Il s'inscrit dans la gamme Osmoclean, construite autour d'une technologie de nettoyage respectueuse de la peau plutôt que sur des tensioactifs agressifs. Il s'adresse à une peau qui a besoin d'un geste de fond hebdomadaire, en complément du nettoyage quotidien plutôt qu'à sa place.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Osmoclean" },
      { libelle: "Contenance", valeur: "75 ml" },
      { libelle: "Galénique", valeur: "Masque gommant 2-en-1" },
      { libelle: "Usage", valeur: "1 à 2 fois par semaine" },
    ],
    usage: [
      "S'applique sur peau humide, en couche généreuse, en massant légèrement pour activer l'effet gommant puis en laissant poser quelques minutes avant de rincer à l'eau tiède. Un usage d'une à deux fois par semaine suffit, un rythme plus soutenu risquant de sensibiliser inutilement la peau.",
    ],
    positionnement: [
      "Comparé à un gommage classique aux grains, ce masque combine l'exfoliation à un temps de pose type masque, pour une action plus en profondeur en une seule étape. Il convient moins à une peau très sensible ou sujette à la rosacée, pour laquelle même une exfoliation douce peut déclencher une réaction inconfortable en cas d'usage trop fréquent.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur une peau à imperfections ?",
        reponse: "Son effet clarifiant peut aider à limiter l'aspect terne d'une peau à imperfections, mais un usage trop fréquent risque au contraire d'irriter des boutons actifs. Un rythme d'une fois par semaine, en évitant les zones inflammées, reste la prudence recommandée sur ce type de peau.",
      },
      {
        question: "Faut-il appliquer une crème après ce masque ?",
        reponse: "Oui, comme après tout geste exfoliant, la peau est plus perméable juste après le rinçage. Une crème hydratante appliquée dans la foulée aide à restaurer le confort et à profiter de cette meilleure absorption pour le soin qui suit.",
      },
    ],
  },
  {
    slug: "esthederm-photo-regul-soin-protecteur-unifiant",
    identite: [
      "Photo Regul appartient aux soins solaires biologiques d'Institut Esthederm, une gamme pensée à l'origine pour les peaux qui réagissent mal au soleil par des taches ou une pigmentation irrégulière, plutôt que pour un bronzage classique. Ce soin protecteur unifiant vise à limiter l'apparition de nouvelles zones de pigmentation inégale tout en protégeant la peau des UV, sur un visage ou un corps sujet à ce type d'irrégularité de teint dès les premières expositions de la saison.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Photo Regul" },
      { libelle: "Cible", valeur: "Peau à pigmentation irrégulière" },
      { libelle: "Usage", valeur: "Protection solaire, exposition" },
    ],
    usage: [
      "S'applique avant chaque exposition au soleil, en quantité suffisante et renouvelée toutes les deux heures ou après la baignade, comme pour toute protection solaire. Il s'utilise dès le début de la saison d'exposition, la régularité de l'application comptant davantage que l'intensité d'une seule couche.",
    ],
    positionnement: [
      "Face à une crème solaire classique, ce soin cible spécifiquement l'irrégularité de pigmentation plutôt que la seule protection UV générale. Il convient moins à une peau au teint homogène sans tendance aux taches, pour laquelle une protection solaire standard, sans cet axe unifiant, suffit largement au quotidien.",
    ],
    faq: [
      {
        question: "Ce soin empêche-t-il totalement l'apparition de nouvelles taches ?",
        reponse: "Non, aucune protection solaire, aussi performante soit-elle, n'élimine totalement le risque de pigmentation irrégulière chez une peau qui y est prédisposée. Il aide à en limiter l'apparition en réduisant l'exposition réelle de la peau aux UV responsables de ce mécanisme.",
      },
      {
        question: "Convient-il aux peaux sujettes au mélasma ?",
        reponse: "La gamme Photo Regul est justement pensée pour les peaux à pigmentation irrégulière, dont le mélasma fait partie, mais un avis dermatologique reste recommandé pour ce type de trouble avant toute exposition solaire, y compris avec une protection dédiée.",
      },
    ],
  },
  {
    slug: "esthederm-photo-reverse-soin-prot",
    identite: [
      "Photo Reverse est la gamme solaire d'Esthederm dédiée aux signes visibles du vieillissement cutané liés au soleil, taches, relâchement, perte d'éclat, plutôt qu'à la seule protection contre les coups de soleil. Ce soin protecteur associe filtres UV et actifs de réparation, avec l'idée que l'exposition solaire, correctement accompagnée, peut se conjuguer avec un objectif anti-âge plutôt que de s'y opposer systématiquement. Il s'adresse à une peau mature ou déjà marquée par le photo-vieillissement.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Photo Reverse" },
      { libelle: "Cible", valeur: "Photo-vieillissement, signes de l'âge liés au soleil" },
    ],
    usage: [
      "S'applique avant chaque exposition au soleil, en couche suffisante sur les zones découvertes, et se renouvelle toutes les deux heures ou après la baignade et la transpiration, selon les règles habituelles de toute protection solaire.",
    ],
    positionnement: [
      "Face à une protection solaire anti-âge générique, cette gamme s'appuie sur la technologie propre à Esthederm en matière de soin solaire biologique, développée depuis les débuts de la marque. Elle convient moins à un usage sportif ou très résistant à l'eau, pour lequel une protection solaire technique dédiée au sport reste plus adaptée.",
    ],
    faq: [
      {
        question: "Ce soin protège-t-il aussi bien qu'une crème solaire classique contre les coups de soleil ?",
        reponse: "Oui, il assure la fonction de filtration UV de base attendue de toute protection solaire, en plus de son axe anti-âge spécifique. Le niveau de protection exact dépend de l'indice SPF précisément indiqué sur l'emballage du produit.",
      },
      {
        question: "À partir de quel âge cette gamme est-elle utile ?",
        reponse: "Elle s'adresse surtout à une peau qui montre déjà des signes de photo-vieillissement, généralement après 40 ou 50 ans, même si une utilisation plus précoce en prévention reste possible pour qui souhaite anticiper ces signes avant leur apparition.",
      },
    ],
  },
  {
    slug: "esthederm-photo-reverse-soin-prot-beige-medium",
    identite: [
      "Cette version teintée beige medium du soin Photo Reverse combine la protection solaire anti-âge de la gamme à une légère couvrance, pour unifier le teint tout en protégeant une peau déjà marquée par le photo-vieillissement. Elle s'adresse à une carnation moyenne, ni très claire ni foncée, et permet d'éviter une étape de fond de teint séparée pendant l'été, quand la peau supporte moins bien la superposition de plusieurs textures sur le visage.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Photo Reverse" },
      { libelle: "Teinte", valeur: "Beige medium" },
      { libelle: "Fini", valeur: "Légèrement couvrant, unifiant" },
    ],
    usage: [
      "S'applique le matin sur visage nettoyé, en une couche uniforme, en dernière étape avant une éventuelle poudre. Le renouvellement en cours de journée reste nécessaire pour maintenir la protection UV, même si la teinte masque moins visiblement les traces de réapplication qu'un soin non teinté.",
    ],
    positionnement: [
      "Face à un fond de teint avec SPF classique, ce soin met l'accent sur la protection anti-âge en priorité, la couvrance restant secondaire et légère plutôt que comparable à un maquillage. Il convient moins à qui cherche une couvrance forte pour masquer des imperfections marquées, pour laquelle un fond de teint dédié, appliqué après une protection solaire non teintée, reste plus efficace.",
    ],
    faq: [
      {
        question: "Cette teinte convient-elle à toutes les carnations ?",
        reponse: "La teinte beige medium est pensée pour une carnation moyenne. Une carnation très claire ou très foncée risque d'obtenir un résultat peu naturel, la gamme proposant généralement plusieurs teintes pour couvrir un éventail plus large de carnations.",
      },
      {
        question: "Faut-il quand même appliquer une protection solaire en dessous ?",
        reponse: "Non, ce soin teinté intègre déjà sa propre protection UV, il n'est pas nécessaire d'en superposer une autre en dessous. Il suffit de respecter la quantité recommandée et de renouveler l'application selon la durée et l'intensité de l'exposition.",
      },
    ],
  },
  {
    slug: "esthederm-photo-reverse-soin-protecteur-eclaircissant-anti-50ml",
    identite: [
      "Ce soin Photo Reverse, en format 50 ml et affiché SPF50+, associe l'axe anti-taches à la protection solaire renforcée, pour une peau qui cumule pigmentation irrégulière et sensibilité marquée au soleil. Il vise à limiter l'apparition de nouvelles taches tout en protégeant efficacement contre les UV responsables de leur formation, une double action cohérente puisque l'exposition solaire reste le principal facteur aggravant des taches pigmentaires déjà installées sur une peau mature ou sujette au mélasma.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Photo Reverse" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Cible", valeur: "Taches pigmentaires" },
    ],
    usage: [
      "S'applique chaque matin avant toute exposition, en quantité suffisante sur le visage, et se renouvelle toutes les deux heures ou après la baignade. Son usage quotidien, même par temps couvert, reste recommandé pour une peau sujette aux taches, les UVA responsables de la pigmentation traversant aussi les nuages.",
    ],
    positionnement: [
      "Face à une protection solaire SPF50 classique, ce soin ajoute un axe éclaircissant spécifique aux taches déjà présentes, plutôt qu'une simple prévention générale. Il convient moins à une peau au teint homogène sans tendance aux taches, pour laquelle une protection solaire standard de même indice suffit sans ce ciblage particulier.",
    ],
    faq: [
      {
        question: "Le SPF50+ suffit-il en cas de mélasma ?",
        reponse: "Un indice élevé comme le SPF50+ est recommandé pour une peau sujette au mélasma, mais l'application d'une quantité suffisante et le renouvellement régulier comptent autant que l'indice affiché sur l'étiquette, souvent sous-estimés dans l'usage quotidien réel.",
      },
      {
        question: "Ce soin peut-il s'utiliser toute l'année, pas seulement l'été ?",
        reponse: "Oui, et c'est même recommandé pour une peau sujette aux taches, les UVA responsables de la pigmentation étant présents toute l'année, y compris en hiver ou par temps couvert, contrairement à une idée reçue limitant la protection solaire aux mois d'été.",
      },
    ],
  },
  {
    slug: "esthederm-photo-reverse-teinte-beige-medium-50ml",
    identite: [
      "Cette version 50 ml teintée beige medium de Photo Reverse reprend la protection anti-âge et solaire de la gamme sous une forme légèrement couvrante, pour unifier le teint d'une carnation moyenne tout en protégeant une peau déjà marquée par le photo-vieillissement. Le format 50 ml correspond à un usage quotidien sur le visage pendant toute la période d'exposition, en alternative à un fond de teint classique combiné à une protection solaire séparée.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Photo Reverse" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Teinte", valeur: "Beige medium" },
    ],
    usage: [
      "S'applique le matin sur visage nettoyé, en couche uniforme, comme dernière étape de la routine avant une éventuelle poudre. Le format 50 ml, généreux pour un soin teinté, permet un usage quotidien sur toute une saison d'exposition sans manquer de produit.",
    ],
    positionnement: [
      "Comparée à un fond de teint avec indice de protection, cette référence met la protection anti-âge au premier plan, la teinte restant un bénéfice secondaire léger. Elle convient moins à qui recherche une forte couvrance pour du maquillage quotidien, pour laquelle un fond de teint dédié reste plus adapté après application d'une protection solaire non teintée.",
    ],
    faq: [
      {
        question: "Quelle différence avec la version non teintée de Photo Reverse ?",
        reponse: "La formule de protection et de soin reste la même, seule la présence de pigments change, pour unifier légèrement le teint en plus de protéger la peau. Le choix entre les deux dépend surtout de l'envie ou non d'un léger effet teint unifié au quotidien.",
      },
      {
        question: "Ce format de 50 ml dure-t-il toute la saison ?",
        reponse: "Pour un usage quotidien sur le visage, un flacon de 50 ml couvre généralement plusieurs semaines à quelques mois selon la quantité appliquée à chaque fois, une utilisation trop parcimonieuse réduisant cependant l'efficacité réelle de la protection.",
      },
    ],
  },
  {
    slug: "esthederm-pure-syst-soin-absolue",
    identite: [
      "Ce soin Pure System, présenté par la marque comme un soin absolu, appartient à la gamme d'Esthederm dédiée aux peaux mixtes à grasses, sujettes aux pores dilatés et aux brillances. Il vise une action globale sur ce type de peau plutôt qu'un geste ciblé, en régulant la production de sébum tout en hydratant, un équilibre souvent difficile à trouver sur une peau grasse qui a tendance à se dessécher lorsqu'elle est traitée avec des soins trop asséchants.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Pure System" },
      { libelle: "Cible", valeur: "Peau mixte à grasse, pores dilatés" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, en dernière étape de la routine ou après un sérum ciblé de la même gamme comme le concentré pore refiner. Sa texture, pensée pour une peau grasse, s'étale sans laisser de film brillant après quelques minutes d'absorption.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, souvent trop riche pour une peau grasse, ce soin Pure System équilibre hydratation et régulation du sébum en une seule étape. Il convient moins à une peau sèche sans excès de sébum, pour laquelle une texture plus nourrissante d'une autre gamme Esthederm sera mieux adaptée.",
    ],
    faq: [
      {
        question: "Ce soin dessèche-t-il la peau à force de réguler le sébum ?",
        reponse: "Non, sa formule vise justement l'équilibre entre régulation et hydratation, un point souvent négligé par les soins purement matifiants qui peuvent, à l'excès, pousser la peau à produire encore plus de sébum en réaction au dessèchement.",
      },
      {
        question: "Peut-on l'utiliser avec le concentré Pore Refiner de la même gamme ?",
        reponse: "Oui, les deux se complètent bien, le concentré s'appliquant en première étape ciblée sur les pores, ce soin venant ensuite en couche hydratante globale pour l'ensemble du visage, selon la logique de superposition propre à la gamme Pure System.",
      },
    ],
  },
  {
    slug: "esthederm-pure-system-concentre-pore-refiner-50ml",
    identite: [
      "Ce concentré Pure System, en flacon de 50 ml, cible spécifiquement l'aspect dilaté des pores, une préoccupation fréquente sur une peau mixte à grasse où l'excès de sébum et l'accumulation d'impuretés élargissent visuellement leur ouverture. Sa texture concentrée resserre visuellement le grain de peau et affine son aspect au fil des applications, sans assécher la peau au point de relancer une production excessive de sébum en réaction, un écueil fréquent des soins matifiants trop agressifs.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Pure System" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Cible", valeur: "Pores dilatés, peau mixte à grasse" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, en insistant sur la zone T souvent la plus concernée par les pores dilatés, avant le soin hydratant habituel de la même gamme. Un usage régulier sur plusieurs semaines est nécessaire pour percevoir un affinement visible du grain de peau.",
    ],
    positionnement: [
      "Face à un soin matifiant classique qui se contente d'absorber l'excès de sébum en surface, ce concentré agit plus en profondeur sur l'aspect du pore lui-même. Il convient moins à une peau sèche sans problématique de pores dilatés, pour laquelle ce soin n'apporterait aucun bénéfice particulier et pourrait même sensibiliser inutilement.",
    ],
    faq: [
      {
        question: "Ce concentré referme-t-il réellement les pores ?",
        reponse: "La taille des pores est en grande partie déterminée génétiquement et ne se referme pas au sens physique du terme. Ce concentré en affine l'aspect visuel en limitant leur dilatation liée à l'excès de sébum et aux impuretés, un effet cosmétique plutôt qu'une modification structurelle.",
      },
      {
        question: "Peut-on l'utiliser en cas de peau à imperfections actives ?",
        reponse: "Il peut s'utiliser sur une peau mixte à grasse sujette aux imperfections, mais il ne remplace pas un soin anti-imperfections dédié en cas de poussée active. Il agit sur l'aspect du pore et du grain de peau plutôt que sur l'inflammation d'un bouton en particulier.",
      },
    ],
  },
  {
    slug: "esthederm-serum-concentre-aha-peel-intensive-aha",
    identite: [
      "Ce sérum concentré AHA de la gamme Intensive s'appuie sur les acides de fruits pour exfolier en douceur la surface de la peau, en accélérant le renouvellement cellulaire d'un teint terne ou d'une texture irrégulière. Il s'adresse à une peau qui supporte les exfoliants chimiques et cherche à affiner son grain, atténuer visuellement les marques superficielles et retrouver un aspect plus lisse et lumineux, en cure plutôt qu'en usage quotidien continu comme un soin hydratant classique.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA (acides de fruits)" },
      { libelle: "Galénique", valeur: "Sérum concentré" },
      { libelle: "Gamme", valeur: "Intensive" },
      { libelle: "Usage", valeur: "Exfoliation, en cure" },
    ],
    usage: [
      "S'applique le soir, sur peau nettoyée et sèche, en commençant par un usage espacé de deux à trois fois par semaine pour évaluer la tolérance, avant d'augmenter progressivement la fréquence si la peau le supporte bien. Une protection solaire quotidienne devient indispensable pendant toute la durée d'utilisation, la peau exfoliée étant plus sensible aux UV.",
    ],
    positionnement: [
      "Face à un gommage mécanique classique, ce sérum AHA agit en profondeur sur le renouvellement cellulaire plutôt qu'en surface, pour un résultat sur la texture de peau plus net à moyen terme. Il convient moins à une peau très sensible ou déjà fragilisée par un autre actif exfoliant ou un rétinol, l'association de plusieurs exfoliants augmentant nettement le risque d'irritation.",
    ],
    faq: [
      {
        question: "Peut-on associer ce sérum à un rétinol ?",
        reponse: "Il vaut mieux éviter de les utiliser le même soir, au risque d'irriter la peau par cumul de deux actifs puissants. Une alternance, l'un un soir et l'autre le lendemain, permet de profiter des deux sans en payer le prix en termes de tolérance cutanée.",
      },
      {
        question: "Faut-il vraiment une protection solaire après un soin AHA ?",
        reponse: "Oui, impérativement. L'exfoliation chimique rend la peau plus vulnérable aux UV pendant plusieurs jours après application, et l'absence de protection solaire expose à un risque accru de taches pigmentaires, ce qui irait à l'encontre du résultat recherché sur la texture et l'éclat du teint.",
      },
    ],
  },
  {
    slug: "esthederm-serum-spiruline-molecular-care",
    identite: [
      "Ce sérum à la spiruline, présenté sous l'appellation Molecular Care, reprend l'actif revitalisant déjà utilisé dans la gamme Intensive Spiruline, avec une approche que la marque présente comme travaillant au niveau moléculaire de la peau. Il s'adresse à un teint fatigué, terne ou marqué par le stress, en apportant un regain d'éclat plutôt qu'une action anti-âge ciblée sur une ride en particulier. Sa texture sérum s'intègre en cure dans une routine déjà installée, en complément du soin hydratant habituel.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Spiruline" },
      { libelle: "Galénique", valeur: "Sérum" },
      { libelle: "Cible", valeur: "Teint terne, peau fatiguée" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, avant la crème habituelle, idéalement en cure lors des périodes de fatigue ou de changement de saison. Quelques gouttes suffisent pour l'ensemble du visage, réparties du bout des doigts jusqu'à absorption complète avant l'étape suivante.",
    ],
    positionnement: [
      "Comparé à un sérum vitaminé C, également recherché pour l'éclat, celui-ci mise sur la spiruline, un actif généralement bien toléré par les peaux sensibles à la vitamine C pure. Il convient moins à qui cherche une action anti-âge ciblée sur les rides, pour laquelle un sérum de la gamme Intensive Hyaluronic ou Excellage reste plus indiqué.",
    ],
    faq: [
      {
        question: "Quelle différence avec le sérum Intensive Spiruline de la même marque ?",
        reponse: "Les deux s'appuient sur le même actif principal, la spiruline, avec une présentation et une technologie de formulation qui peuvent différer selon la ligne. En pratique, l'objectif recherché, redonner de l'éclat à un teint fatigué, reste similaire entre les deux références.",
      },
      {
        question: "Ce sérum convient-il à une utilisation quotidienne toute l'année ?",
        reponse: "Il peut s'utiliser toute l'année, mais il est surtout pensé comme un soin de cure lors des baisses d'éclat ponctuelles plutôt que comme une base hydratante quotidienne, qui reste le rôle d'une crème appliquée par-dessus ce sérum.",
      },
    ],
  },
];
