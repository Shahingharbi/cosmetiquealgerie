import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "la-roche-posay-kerium-ds-creme-peaux-sebosquameuses-40ml",
    identite: [
      "Kerium DS est la déclinaison visage de la gamme anti-dermite séborrhéique de La Roche-Posay. Cette crème cible les zones du visage sujettes aux rougeurs et aux petites squames blanchâtres autour du nez, des sourcils et des sillons nasogéniens, caractéristiques des peaux à tendance séborrhéique. Sa texture légère et non grasse s'applique localement, sans laisser de film. Elle vise à apaiser l'inconfort et à limiter visuellement les squames sans dessécher davantage une peau déjà fragilisée, et complète, sans le remplacer, le shampooing Kerium DS utilisé sur le cuir chevelu.",
    ],
    faits: [
      { libelle: "Zone", valeur: "Visage : ailes du nez, sourcils, sillons nasogéniens" },
      { libelle: "Texture", valeur: "Crème légère, non grasse" },
      { libelle: "Type de peau", valeur: "Peau à tendance séborrhéique, sujette aux rougeurs" },
      { libelle: "Gamme", valeur: "Kerium DS" },
    ],
    usage: [
      "S'applique en petite quantité, une à deux fois par jour, uniquement sur les zones concernées du visage plutôt qu'en soin global. Elle peut suivre un nettoyage doux et précéder la crème hydratante habituelle sans interférer avec elle. En cas de dermite séborrhéique étendue au cuir chevelu, elle se combine avec le shampooing Kerium DS.",
    ],
    positionnement: [
      "Face aux crèmes apaisantes généralistes du rayon peau sensible, Kerium DS a l'avantage d'être pensée spécifiquement pour la dermite séborrhéique plutôt que pour la sensibilité en général. Elle ne convient pas à une peau simplement sèche ou réactive sans squames : une crème apaisante classique suffit alors et évite de traiter un problème qui n'existe pas.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur tout le visage ?",
        reponse:
          "Elle est conçue pour un usage localisé sur les zones concernées par les rougeurs et les squames, pas comme crème hydratante quotidienne pour l'ensemble du visage.",
      },
      {
        question: "Peut-on l'associer à une crème hydratante ?",
        reponse:
          "Oui, elle s'applique généralement avant la crème hydratante habituelle sur les zones ciblées, sans empêcher le reste de la routine de suivre son cours.",
      },
    ],
  },
  {
    slug: "la-roche-posay-kerium-ds-shampooing-antipelliculaire-intensif-125ml",
    identite: [
      "Ce shampooing-crème appartient à la même gamme Kerium DS, orientée vers un cuir chevelu sujet à une desquamation marquée et à des rougeurs, au-delà d'un simple problème de pellicules occasionnelles. Sa formule intensive vise les cuirs chevelus les plus inconfortables, avec une action ciblée sur les squames et les sensations de tiraillement. Le format 125 ml, plus petit que les shampooings antipelliculaires classiques, correspond à un usage en cure plutôt qu'à un shampooing du quotidien.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe antipelliculaire intensif Kerium DS" },
      { libelle: "Texture", valeur: "Shampooing-crème" },
      { libelle: "Zone", valeur: "Cuir chevelu sujet aux squames marquées et aux rougeurs" },
      { libelle: "Gamme", valeur: "Kerium DS" },
    ],
    usage: [
      "S'utilise en remplacement du shampooing habituel, deux à trois fois par semaine le temps de la cure, puis en entretien plus espacé. Laisser poser quelques minutes sur cuir chevelu mouillé avant de rincer améliore son action. En dehors des séances avec ce shampooing intensif, un shampooing doux peut être utilisé pour ne pas irriter davantage le cuir chevelu.",
    ],
    positionnement: [
      "Plus ciblé qu'un antipelliculaire grand public, il s'adresse à un cuir chevelu vraiment inconfortable plutôt qu'à des pellicules légères et occasionnelles, pour lesquelles un shampooing antipelliculaire standard du rayon suffit largement.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Non, c'est un soin de cure pensé pour deux à trois applications par semaine ; un usage quotidien n'est ni nécessaire ni recommandé pour ce type de formule intensive.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse:
          "La gamme Kerium DS n'est pas annoncée comme protectrice de couleur ; en cas de cheveux colorés, mieux vaut réserver ce shampooing aux séances ciblées et alterner avec un shampooing doux adapté à la couleur.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-lait-hydratant-200ml",
    identite: [
      "Le Lait Lipikar est le soin corps hydratant de base de la gamme Lipikar, pensée pour les peaux sèches à très sèches du foyer, enfants compris. Sa texture fluide pénètre rapidement sans laisser de film gras persistant, ce qui facilite l'application sur de grandes surfaces du corps. Il contient du beurre de karité, reconnu pour nourrir les peaux sèches, dans une formule pour un usage quotidien. C'est l'entrée de gamme Lipikar, plus fluide que les versions AP+ ou baume destinées aux peaux plus sévèrement sèches.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Beurre de karité" },
      { libelle: "Texture", valeur: "Lait fluide, non gras" },
      { libelle: "Type de peau", valeur: "Peau sèche à très sèche, corps" },
      { libelle: "Gamme", valeur: "Lipikar" },
    ],
    usage: [
      "S'applique sur peau propre, idéalement après la douche pendant que la peau est encore légèrement humide pour favoriser la pénétration. Un usage quotidien, voire biquotidien en hiver ou sur les zones les plus sèches (coudes, jambes), donne les meilleurs résultats. Il convient aussi bien aux adultes qu'aux enfants dans le cadre d'une routine familiale.",
    ],
    positionnement: [
      "Plus léger que le baume Lipikar AP+, il convient mieux à une peau sèche sans inconfort marqué qu'à une peau très réactive, pour laquelle les versions plus riches de la gamme sont mieux indiquées. Son format lait facilite aussi l'application sur de grandes zones du corps.",
    ],
    faq: [
      {
        question: "Convient-il aux enfants ?",
        reponse:
          "Oui, le Lait Lipikar fait partie des soins de la gamme utilisables en routine familiale sur peau sèche, enfants compris, en dehors des poussées d'eczéma qui relèvent d'un avis médical.",
      },
      {
        question: "Laisse-t-il un film gras ?",
        reponse:
          "Non, sa texture lait est formulée pour pénétrer rapidement sans film gras persistant, ce qui le rend pratique pour une application quotidienne avant de s'habiller.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-surgras-200ml",
    identite: [
      "Lipikar Surgras est un nettoyant visage et corps formulé sans savon pour respecter le film hydrolipidique des peaux sèches à très sèches, y compris les peaux atopiques. Sa formule surgras vise à nettoyer sans provoquer la sensation de tiraillement typique des savons classiques. Il s'utilise en remplacement d'un savon standard, pour les peaux qui réagissent mal à un nettoyage trop agressif.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Nettoyant surgras sans savon" },
      { libelle: "Type de peau", valeur: "Peau sèche à très sèche, y compris atopique" },
      { libelle: "Zone", valeur: "Visage et corps" },
      { libelle: "Gamme", valeur: "Lipikar" },
    ],
    usage: [
      "S'utilise à la place du savon habituel, sur peau mouillée, en faisant mousser légèrement avant de rincer abondamment. Il peut s'employer aussi bien pour la douche que pour la toilette du visage sur peau sensible. Il se combine naturellement avec un lait ou un baume Lipikar appliqué juste après le séchage pour restaurer l'hydratation.",
    ],
    positionnement: [
      "Comparé à un savon ou un gel douche classique, il évite l'effet tiraillement recherché à tort par certains nettoyants moussants ; une peau normale sans sécheresse particulière n'a pas besoin d'une formule aussi spécifique.",
    ],
    faq: [
      {
        question: "Mousse-t-il comme un savon classique ?",
        reponse:
          "Il mousse légèrement mais moins qu'un savon traditionnel, ce qui correspond à sa formule sans savon pensée pour ne pas agresser une peau déjà fragile.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Oui, sa formule douce le rend adapté au visage comme au corps pour les peaux sèches à très sèches, à la différence de certains nettoyants corps plus décapants.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-syndet-ap-200ml",
    identite: [
      "Lipikar Syndet AP+ est un gel nettoyant sans savon (syndet) pensé pour les peaux très sèches à tendance atopique, visage et corps. Sa formule associe niacinamide et beurre de karité pour nettoyer en respectant la barrière cutanée déjà fragilisée, sans sensation de tiraillement après rinçage. C'est la version cible de la gamme Lipikar pour les peaux les plus sujettes aux inconforts, plus spécifique que le Lait Lipikar classique.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide et beurre de karité" },
      { libelle: "Texture", valeur: "Gel nettoyant sans savon (syndet)" },
      { libelle: "Type de peau", valeur: "Peau très sèche à tendance atopique" },
      { libelle: "Zone", valeur: "Visage et corps" },
    ],
    usage: [
      "S'applique sur peau mouillée, visage ou corps, en massant délicatement puis en rinçant à l'eau tiède plutôt que chaude, qui accentue la sécheresse. Il précède naturellement l'application d'une crème Lipikar. Un usage quotidien est possible même sur peau réactive, contrairement à des nettoyants plus décapants.",
    ],
    positionnement: [
      "Sa formule AP+ le positionne au-dessus d'un simple nettoyant doux pour les peaux qui présentent déjà des tiraillements ; une peau normale n'a pas besoin d'un nettoyant aussi ciblé et peut se tourner vers un gel nettoyant plus généraliste du rayon.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse:
          "Oui, sa formule douce sans savon le permet, y compris sur peau atopique, à condition de bien rincer à l'eau tiède.",
      },
      {
        question: "Remplace-t-il une crème hydratante ?",
        reponse:
          "Non, c'est un nettoyant : il prépare la peau mais ne remplace pas l'application d'une crème ou d'un lait Lipikar ensuite.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-syndet-ap-creme-lavante-200ml",
    identite: [
      "Cette version crème du Syndet AP+ reprend la même formule niacinamide et beurre de karité que le gel, dans une texture plus onctueuse. Elle nettoie en douceur les peaux très sèches à tendance atopique du visage et du corps, avec une sensation moins asséchante qu'un gel classique grâce à sa richesse. C'est une alternative de texture au sein de la même gamme Lipikar, pour qui préfère une crème lavante à un gel.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide et beurre de karité" },
      { libelle: "Texture", valeur: "Crème lavante onctueuse" },
      { libelle: "Type de peau", valeur: "Peau très sèche à tendance atopique" },
      { libelle: "Gamme", valeur: "Lipikar Syndet AP+" },
    ],
    usage: [
      "S'applique sur peau mouillée en massant, puis se rince à l'eau tiède. Sa texture plus riche que le gel convient particulièrement aux peaux qui tiraillent après la douche. Elle s'utilise en préambule à la crème hydratante habituelle, visage ou corps selon la zone traitée.",
    ],
    positionnement: [
      "Face au gel Syndet AP+ de la même gamme, cette crème lavante convient mieux aux peaux qui recherchent une sensation plus enveloppante au nettoyage ; le gel reste préférable pour qui privilégie une texture plus légère.",
    ],
    faq: [
      {
        question: "Quelle différence avec le gel Syndet AP+ ?",
        reponse:
          "La formule active est la même ; seule la texture change, plus crémeuse et enveloppante ici, plus fluide dans la version gel.",
      },
      {
        question: "Convient-elle aux enfants ?",
        reponse:
          "Sa douceur la rend compatible avec un usage familial sur peau sèche à atopique, en dehors des poussées qui nécessitent un avis médical.",
      },
    ],
  },
  {
    slug: "la-roche-posay-nutritic-intense-creme-50ml",
    identite: [
      "Nutritic Intense est la crème nourrissante de La Roche-Posay pour les peaux sèches à très sèches du visage. Sa texture riche mais non collante apporte un confort immédiat et vise à limiter les sensations de tiraillement qui accompagnent souvent ce type de peau, notamment en hiver ou après une exposition au vent et au froid. Elle s'inscrit dans une routine simple, en une étape après le nettoyage.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Crème riche, non collante" },
      { libelle: "Type de peau", valeur: "Peau sèche à très sèche" },
      { libelle: "Gamme", valeur: "Nutritic Intense" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique matin et soir sur visage nettoyé, en couche généreuse sur les zones les plus sèches. Elle peut se combiner à un sérum plus ciblé (anti-âge, anti-taches) appliqué avant, sans que cela soit indispensable. En cas de grand froid ou de vent, une application supplémentaire dans la journée peut être utile.",
    ],
    positionnement: [
      "Comparée à la version Riche de la même gamme, elle convient à une peau sèche sans être extrêmement déshydratée ; pour une peau qui tiraille fortement malgré une application quotidienne, la version Riche apportera davantage de confort.",
    ],
    faq: [
      {
        question: "Peut-elle s'utiliser sous le maquillage ?",
        reponse:
          "Oui, sa texture pénètre suffisamment pour laisser une base lisse au maquillage, à condition de laisser quelques minutes avant d'appliquer un fond de teint.",
      },
      {
        question: "Convient-elle en été ?",
        reponse:
          "Une peau sèche le reste souvent en été ; elle peut convenir toute l'année, éventuellement en couche plus fine si la peau devient moins tiraillée.",
      },
    ],
  },
  {
    slug: "la-roche-posay-nutritic-intense-riche-50ml",
    identite: [
      "Version la plus riche de la gamme Nutritic Intense, cette crème cible les peaux très sèches à extrêmement sèches, voire réactives au froid. Sa texture baume, plus dense que la crème classique de la même gamme, forme un film protecteur qui limite la déperdition d'eau et apaise l'inconfort lié à la sécheresse cutanée. Elle convient aux peaux qui restent tiraillées malgré une routine hydratante standard.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Baume riche, texture dense" },
      { libelle: "Type de peau", valeur: "Peau très sèche à extrêmement sèche" },
      { libelle: "Gamme", valeur: "Nutritic Intense Riche" },
    ],
    usage: [
      "S'applique en couche généreuse, matin et soir, sur une peau qui reste inconfortable malgré un soin hydratant classique. Sa texture dense peut nécessiter un temps de pénétration un peu plus long ; elle se prête bien à une application le soir avant le coucher.",
    ],
    positionnement: [
      "Plus dense que la crème Nutritic Intense standard, elle s'adresse aux peaux réellement extrêmes plutôt qu'à une sécheresse légère à modérée, pour laquelle la version crème suffit généralement.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser toute l'année ?",
        reponse:
          "Oui, mais son confort marqué la destine surtout aux peaux très sèches en toute saison ou à un usage hivernal pour une peau sèche le reste de l'année.",
      },
      {
        question: "Laisse-t-elle un film gras ?",
        reponse:
          "Sa texture baume est plus riche que celle d'une crème classique et peut laisser une sensation de film juste après application, qui s'atténue en quelques minutes.",
      },
    ],
  },
  {
    slug: "la-roche-posay-oil-correct-gel-creme-spf-50",
    identite: [
      "Anthelios Oil Correct est un soin solaire matifiant pensé pour les peaux grasses et mixtes à imperfections. Sa texture gel-crème non grasse s'applique comme un soin de jour et vise un fini mat qui limite la brillance au fil de la journée, tout en assurant une haute protection solaire. Il est conçu pour ne pas favoriser l'apparition de nouvelles imperfections sur une peau déjà sujette à l'excès de sébum.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 50+" },
      { libelle: "Texture", valeur: "Gel-crème matifiant, non gras" },
      { libelle: "Type de peau", valeur: "Peau grasse, mixte, à imperfections" },
      { libelle: "Fini", valeur: "Mat" },
    ],
    usage: [
      "S'applique le matin en dernière étape de la routine visage, en quantité suffisante pour assurer la protection annoncée. Il peut remplacer la crème de jour habituelle sur peau grasse. Une réapplication en cours de journée reste recommandée en cas d'exposition prolongée au soleil.",
    ],
    positionnement: [
      "Face aux crèmes solaires classiques souvent trop grasses pour une peau à tendance acnéique, Oil Correct répond spécifiquement à ce besoin de matité ; une peau sèche lui préférera une texture plus hydratante du rayon crème solaire visage.",
    ],
    faq: [
      {
        question: "Peut-il remplacer une crème de jour ?",
        reponse:
          "Oui, il est conçu pour cet usage sur peau grasse, en dernière étape de la routine du matin, à condition d'appliquer une quantité suffisante pour la protection annoncée.",
      },
      {
        question: "Convient-il en cas d'acné ?",
        reponse:
          "Sa formule est pensée pour ne pas favoriser les imperfections, mais il ne s'agit pas d'un soin traitant : il complète une routine adaptée sans la remplacer.",
      },
    ],
  },
  {
    slug: "la-roche-posay-pigmentclar-serum-correcteur-intensif-30ml",
    identite: [
      "Pigmentclar cible les taches pigmentaires déjà installées sur le visage, liées au soleil, à l'âge ou à des marques post-inflammatoires. Ce sérum intensif s'utilise en complément d'une protection solaire quotidienne, sans laquelle son action reste limitée puisque l'exposition UV entretient la pigmentation. Sa texture sérum, plus concentrée qu'une crème, cible les zones marquées plutôt que l'ensemble du visage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Complexe correcteur Pigmentclar" },
      { libelle: "Texture", valeur: "Sérum" },
      { libelle: "Usage", valeur: "Taches pigmentaires installées" },
      { libelle: "Gamme", valeur: "Pigmentclar" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée, en ciblant les zones marquées, avant la crème hydratante habituelle. Une protection solaire quotidienne le matin est indispensable pour ne pas entretenir les taches qu'il vise à atténuer. Les résultats sur la pigmentation demandent une utilisation régulière sur plusieurs semaines.",
    ],
    positionnement: [
      "Plus ciblé qu'un sérum éclat généraliste, il s'adresse à une pigmentation déjà visible plutôt qu'à la prévention ; pour un teint sans taches marquées, une routine antioxydante plus légère peut suffire.",
    ],
    faq: [
      {
        question: "Faut-il une protection solaire en complément ?",
        reponse:
          "Oui, c'est indispensable : sans protection solaire quotidienne, l'exposition UV entretient la pigmentation que ce sérum vise à atténuer.",
      },
      {
        question: "En combien de temps voit-on un effet ?",
        reponse:
          "La pigmentation évolue lentement ; une utilisation régulière sur plusieurs semaines est nécessaire avant de juger du résultat sur l'aspect des taches.",
      },
    ],
  },
  {
    slug: "la-roche-posay-pure-niacinamide-10-serum-30ml",
    identite: [
      "Ce sérum concentré à la niacinamide vise à uniformiser le teint et atténuer visuellement les taches pigmentaires sur le visage. La niacinamide, présente à forte concentration, est reconnue pour son rôle dans l'éclat du teint et le confort de la peau. Sa texture sérum légère convient à la plupart des types de peau et s'intègre facilement avant la crème hydratante habituelle.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide à haute concentration" },
      { libelle: "Texture", valeur: "Sérum léger" },
      { libelle: "Type de peau", valeur: "Tous types de peau" },
      { libelle: "Usage", valeur: "Uniformité du teint, taches pigmentaires" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, avant la crème hydratante. Une protection solaire quotidienne renforce ses effets sur l'uniformité du teint. Il peut se combiner à un actif anti-âge, mais mieux vaut éviter de l'associer à un acide fort le même soir pour ne pas irriter la peau.",
    ],
    positionnement: [
      "Comparé au sérum Pigmentclar de la même marque, il agit de façon plus généraliste sur l'éclat et l'uniformité, quand Pigmentclar cible plus spécifiquement des taches déjà bien installées.",
    ],
    faq: [
      {
        question: "Peut-on l'associer à la vitamine C ?",
        reponse:
          "Les deux ciblent l'éclat du teint mais mieux vaut les utiliser à des moments différents de la journée plutôt que superposés, pour limiter le risque d'irritation sur peau sensible.",
      },
      {
        question: "Convient-il aux peaux sensibles ?",
        reponse:
          "La niacinamide est généralement bien tolérée, mais une nouvelle formule mérite toujours un test préalable sur une petite zone en cas de peau réactive.",
      },
    ],
  },
  {
    slug: "la-roche-posay-pure-vitamine-c-10-serum-30ml",
    identite: [
      "Ce sérum à la vitamine C pure, dosée à 10 %, vise à redonner de l'éclat à un teint terne et à limiter visuellement les premiers signes de fatigue cutanée. La vitamine C est un actif reconnu pour son rôle antioxydant et son action sur l'uniformité du teint. Sa texture sérum fluide s'applique facilement sous la crème de jour habituelle.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Vitamine C pure à 10 %" },
      { libelle: "Texture", valeur: "Sérum fluide" },
      { libelle: "Usage", valeur: "Éclat du teint, effet antioxydant" },
      { libelle: "Gamme", valeur: "Pure Vitamine C" },
    ],
    usage: [
      "S'applique de préférence le matin sur peau nettoyée, avant la crème de jour et avant une protection solaire, la vitamine C renforçant l'intérêt de cette dernière face aux UV. Un léger picotement à l'application est possible et généralement passager sur peau non sensibilisée.",
    ],
    positionnement: [
      "Face à un sérum niacinamide plus polyvalent, la vitamine C cible davantage l'effet antioxydant et l'éclat immédiat ; une peau sensible ou réactive s'orientera plutôt vers une formule apaisante avant d'introduire un actif comme celui-ci.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser le soir ?",
        reponse:
          "Elle est surtout pensée pour le matin en complément d'une protection solaire, même si une utilisation le soir reste possible pour qui préfère réserver d'autres actifs à la journée.",
      },
      {
        question: "Pourquoi picote-t-elle légèrement ?",
        reponse:
          "La vitamine C pure peut provoquer une légère sensation de picotement à l'application, généralement passagère ; en cas d'inconfort persistant, mieux vaut espacer les applications.",
      },
    ],
  },
  {
    slug: "la-roche-posay-rosaliac-uv-legere-hydratant-anti-rougeurs-spf15-40ml",
    identite: [
      "Rosaliac UV Légère est un soin hydratant quotidien pensé pour les peaux sujettes aux rougeurs, avec une protection solaire SPF15 intégrée puisque le soleil aggrave souvent ce type d'inconfort. Sa texture légère convient à un usage journalier sans effet gras, et vise à réduire visuellement l'aspect inconfortable des rougeurs diffuses tout en hydratant la peau.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 15" },
      { libelle: "Texture", valeur: "Fluide léger" },
      { libelle: "Type de peau", valeur: "Peau sujette aux rougeurs" },
      { libelle: "Gamme", valeur: "Rosaliac" },
    ],
    usage: [
      "S'applique le matin sur peau nettoyée, en soin hydratant unique de la journée. Le SPF15 qu'il contient ne dispense pas d'une protection solaire dédiée en cas d'exposition prolongée. Il peut se combiner à un correcteur de teint vert pour masquer davantage les rougeurs visibles.",
    ],
    positionnement: [
      "Sa texture légère et son SPF15 en font un soin du quotidien plutôt qu'une protection solaire à proprement parler ; pour une exposition prolongée, la gamme Rosaliac AR avec un indice plus élevé est mieux adaptée.",
    ],
    faq: [
      {
        question: "Le SPF15 suffit-il en été ?",
        reponse:
          "Pour un usage quotidien en ville, oui ; pour une exposition prolongée au soleil, un indice de protection plus élevé et une application dédiée sont préférables.",
      },
      {
        question: "Peut-il remplacer un correcteur de rougeurs ?",
        reponse:
          "Non, c'est un soin hydratant : pour masquer visuellement les rougeurs, il se combine à un correcteur de teint plutôt que de le remplacer.",
      },
    ],
  },
  {
    slug: "la-roche-posay-soin-anti-rides-hyalu-b5-40ml",
    identite: [
      "Hyalu B5 associe acide hyaluronique pur et vitamine B5 dans un soin visage anti-âge pensé pour repulper visuellement la peau et atténuer l'aspect des ridules de déshydratation. La vitamine B5 est reconnue pour son rôle dans le confort et la réparation de la peau, en complément de l'effet repulpant de l'acide hyaluronique. Sa texture s'adapte aussi bien au contour des yeux qu'au reste du visage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide hyaluronique pur et vitamine B5" },
      { libelle: "Usage", valeur: "Anti-âge, effet repulpant" },
      { libelle: "Zone", valeur: "Visage, contour des yeux" },
      { libelle: "Gamme", valeur: "Hyalu B5" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, en évitant le contour immédiat des yeux si une formule dédiée y est déjà utilisée. Il se combine bien à une protection solaire le matin, l'acide hyaluronique n'ayant pas de propriété protectrice contre les UV à lui seul.",
    ],
    positionnement: [
      "Plus centré sur l'hydratation et l'effet repulpant que sur le renouvellement cellulaire, il convient à une peau marquée par des ridules de déshydratation plutôt qu'à des rides profondes déjà installées.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser autour des yeux ?",
        reponse:
          "Sa texture le permet, mais une formule spécifique contour des yeux reste préférable si cette zone présente des besoins particuliers comme les poches ou les cernes.",
      },
      {
        question: "À quel âge commencer ce type de soin ?",
        reponse:
          "Il n'y a pas d'âge fixe : il convient dès que des ridules de déshydratation apparaissent, ce qui varie beaucoup d'une peau à l'autre.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-correcteur-teint-spf25-30ml",
    identite: [
      "Ce correcteur de teint associe couvrance légère et protection solaire SPF25, pensé pour les peaux sensibles qui tolèrent mal les maquillages classiques. Il vise à unifier visuellement le teint et atténuer l'aspect des rougeurs ou petites imperfections, sans les propriétés d'un soin ciblé : c'est avant tout un geste de maquillage correcteur.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 25" },
      { libelle: "Type de peau", valeur: "Peau sensible" },
      { libelle: "Usage", valeur: "Correction du teint, couvrance légère" },
      { libelle: "Gamme", valeur: "Toleriane" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, sur peau hydratée, du bout des doigts ou à l'éponge sur les zones à corriger. Il peut s'utiliser seul ou sous un fond de teint plus léger pour renforcer la couvrance sur les zones les plus marquées.",
    ],
    positionnement: [
      "Comparé à un fond de teint classique, il cible d'abord la tolérance cutanée avant la couvrance ; pour un maquillage plus travaillé, un fond de teint dédié du rayon maquillage reste plus adapté.",
    ],
    faq: [
      {
        question: "Suffit-il comme protection solaire du visage ?",
        reponse:
          "Le SPF25 protège pour un usage quotidien en ville, mais une exposition prolongée mérite une protection solaire dédiée avec un indice plus élevé.",
      },
      {
        question: "Peut-on l'utiliser sur peau à imperfections ?",
        reponse:
          "Sa formule pensée pour la tolérance cutanée le rend compatible avec une peau sensible à imperfections, sans se substituer à un soin ciblé sur ces imperfections.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-dermallergo-nuit-40ml",
    identite: [
      "Toleriane Dermallergo Nuit est un soin apaisant pensé pour les peaux très sensibles, réactives voire allergiques aux cosmétiques courants. Sa formule minimaliste et sans parfum vise à limiter le risque de réaction pendant que la peau se régénère la nuit. Elle s'adresse aux peaux qui ont déjà connu des réactions cutanées avec d'autres produits et cherchent une routine du soir la plus neutre possible.",
    ],
    faits: [
      { libelle: "Sans parfum", valeur: "Oui" },
      { libelle: "Type de peau", valeur: "Peau très sensible, allergique" },
      { libelle: "Usage", valeur: "Soin de nuit apaisant" },
      { libelle: "Gamme", valeur: "Toleriane Dermallergo" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée, en dernière étape de la routine. Sa formule minimaliste la rend compatible avec un enchaînement de soins tout aussi épurés ; mieux vaut éviter de la combiner à des actifs exfoliants ou parfumés le même soir.",
    ],
    positionnement: [
      "Face à une crème de nuit classique, elle privilégie la tolérance sur le reste : une peau normale n'a pas besoin d'une formule aussi restreinte et profitera davantage d'une crème de nuit plus complète en actifs.",
    ],
    faq: [
      {
        question: "Convient-elle après une réaction cutanée ?",
        reponse:
          "Sa formule minimaliste et sans parfum en fait un choix pertinent pour une peau qui vient de réagir à un autre produit, en attendant qu'elle se stabilise.",
      },
      {
        question: "Peut-on la combiner à un sérum ?",
        reponse:
          "Mieux vaut privilégier un sérum tout aussi neutre et non parfumé pour ne pas réintroduire un risque de réaction sur une peau très sensible.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-fluide-correcteur-teint-10-spf25-30ml",
    identite: [
      "Cette teinte 10, la plus claire de la gamme Toleriane Fluide, corrige visuellement le teint tout en apportant une protection solaire SPF25. Sa texture fluide convient aux peaux sensibles qui recherchent une couvrance légère plutôt qu'un maquillage travaillé. Elle s'adresse en particulier aux carnations claires, la référence 10 correspondant au bas de la palette de teintes proposée par la marque.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 25" },
      { libelle: "Teinte", valeur: "10, carnation claire" },
      { libelle: "Texture", valeur: "Fluide" },
      { libelle: "Type de peau", valeur: "Peau sensible" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, sur peau hydratée, en quantité modérée pour ne pas surcharger. Elle peut suffire seule pour un teint unifié au quotidien ou se combiner à un anticernes sur les zones plus marquées.",
    ],
    positionnement: [
      "Face au correcteur de teint plus couvrant de la même marque, cette version fluide privilégie la légèreté ; pour davantage de couvrance sur des imperfections marquées, le correcteur de teint classique reste préférable.",
    ],
    faq: [
      {
        question: "Comment savoir si la teinte 10 convient ?",
        reponse:
          "Elle correspond aux carnations claires ; en cas de doute, tester sur la mâchoire à la lumière du jour reste le moyen le plus fiable de vérifier l'accord de teinte.",
      },
      {
        question: "Le SPF25 suffit-il l'été ?",
        reponse:
          "Pour un usage quotidien standard, oui ; pour une exposition prolongée, une protection solaire dédiée avec un indice plus élevé est préférable en complément.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-gel-moussant-400ml",
    identite: [
      "Ce gel moussant nettoie le visage en douceur, pensé pour les peaux sensibles normales à mixtes. Sa formule élimine les impuretés et les traces de maquillage léger sans provoquer de sensation de tiraillement après rinçage, ce qui en fait une base de routine adaptée avant l'application d'un soin plus ciblé. Le grand format de 400 ml correspond à un usage quotidien sur la durée.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Gel moussant" },
      { libelle: "Type de peau", valeur: "Peau sensible normale à mixte" },
      { libelle: "Usage", valeur: "Nettoyage quotidien du visage" },
      { libelle: "Gamme", valeur: "Toleriane" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage humide, en faisant mousser légèrement avant de rincer à l'eau tiède. Il retire l'essentiel des impuretés du quotidien mais un démaquillant dédié reste préférable en cas de maquillage plus couvrant ou waterproof.",
    ],
    positionnement: [
      "Plus doux qu'un gel nettoyant purifiant pour peau grasse, il convient à une peau sensible normale à mixte plutôt qu'à une peau vraiment grasse, pour laquelle un nettoyant plus ciblé sur le sébum sera plus efficace.",
    ],
    faq: [
      {
        question: "Retire-t-il le maquillage waterproof ?",
        reponse:
          "Il nettoie efficacement une peau non maquillée ou légèrement maquillée, mais un démaquillant dédié reste préférable pour un maquillage waterproof plus résistant.",
      },
      {
        question: "Convient-il aux peaux à imperfections ?",
        reponse:
          "Sa douceur le rend compatible avec une peau sensible à imperfections légères, sans l'action ciblée sur le sébum d'un nettoyant spécifiquement purifiant.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-rosaliac-ar-spf-30-50ml",
    identite: [
      "Cette version associe le soin anti-rougeurs Rosaliac AR à une protection solaire SPF30, pour les peaux sujettes aux rougeurs persistantes qui doivent aussi se protéger du soleil, facteur aggravant reconnu de ce type d'inconfort. Sa texture est pensée pour un usage quotidien sans effet gras ni masque blanc marqué malgré l'indice de protection élevé.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 30" },
      { libelle: "Type de peau", valeur: "Peau sujette aux rougeurs persistantes" },
      { libelle: "Gamme", valeur: "Rosaliac AR" },
      { libelle: "Usage", valeur: "Hydratation et protection quotidiennes" },
    ],
    usage: [
      "S'applique le matin sur peau nettoyée, en soin hydratant et protecteur unique de la journée. La régularité d'utilisation compte particulièrement pour ce type de rougeurs, qui réagissent aux écarts de température et à l'exposition solaire répétée.",
    ],
    positionnement: [
      "Avec un SPF30, elle offre une protection plus élevée que la version UV Légère SPF15 de la même gamme, ce qui la destine à une exposition solaire plus fréquente plutôt qu'à un simple usage urbain quotidien.",
    ],
    faq: [
      {
        question: "Quelle différence avec Rosaliac UV Légère ?",
        reponse:
          "L'indice de protection est plus élevé ici (SPF30 contre SPF15), ce qui la rend plus adaptée à une exposition solaire plus soutenue.",
      },
      {
        question: "Peut-elle remplacer un correcteur de rougeurs ?",
        reponse:
          "Non, elle hydrate et protège la peau sans la maquiller ; pour masquer visuellement les rougeurs, un correcteur de teint vert reste nécessaire en complément.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-sensitive-creme-legere-40ml",
    identite: [
      "Toleriane Sensitive associe eau thermale prébiotique et acide hyaluronique dans un soin pensé pour renforcer le confort des peaux sensibles. Cette version crème légère convient aux peaux normales à mixtes qui recherchent une hydratation quotidienne sans texture riche. Elle vise à limiter les sensations d'inconfort qui accompagnent souvent la sensibilité cutanée, sans parfum ajouté.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau thermale prébiotique et acide hyaluronique" },
      { libelle: "Texture", valeur: "Crème légère" },
      { libelle: "Type de peau", valeur: "Peau sensible normale à mixte" },
      { libelle: "Gamme", valeur: "Toleriane Sensitive" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, seule ou avant un soin plus ciblé (anti-âge, anti-taches) selon les besoins additionnels de la peau. Elle convient bien comme base avant maquillage grâce à sa texture qui pénètre sans laisser de film.",
    ],
    positionnement: [
      "Face à la version Riche de la même gamme, elle convient à une peau sensible normale à mixte plutôt qu'à une peau sensible et sèche, pour laquelle la texture plus riche apportera davantage de confort.",
    ],
    faq: [
      {
        question: "Peut-elle se porter sous le maquillage ?",
        reponse:
          "Oui, sa texture légère pénètre suffisamment pour laisser une base lisse, à condition de laisser quelques minutes avant l'application du maquillage.",
      },
      {
        question: "Convient-elle aux peaux à imperfections ?",
        reponse:
          "Sa texture légère et sa formule sans parfum la rendent compatible avec une peau sensible à imperfections, sans action ciblée sur le sébum.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-sensitive-fluide",
    identite: [
      "Version fluide de la gamme Toleriane Sensitive, ce soin convient aux peaux sensibles mixtes à grasses qui recherchent une hydratation sans sensation de film. Il reprend les mêmes actifs de la gamme (eau thermale prébiotique, acide hyaluronique) dans une texture plus légère que la crème, pensée pour ne pas alourdir une peau déjà sujette aux brillances.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau thermale prébiotique et acide hyaluronique" },
      { libelle: "Texture", valeur: "Fluide" },
      { libelle: "Type de peau", valeur: "Peau sensible mixte à grasse" },
      { libelle: "Gamme", valeur: "Toleriane Sensitive" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, en quantité modérée du fait de sa texture fluide qui se répartit facilement. Il convient particulièrement en climat chaud ou pour une peau qui devient brillante en cours de journée avec des textures plus riches.",
    ],
    positionnement: [
      "Plus léger que la crème de la même gamme, il s'adresse à une peau sensible mixte à grasse ; une peau sensible sèche lui préférera la version crème ou la version riche pour un confort plus marqué.",
    ],
    faq: [
      {
        question: "Convient-il en climat chaud ?",
        reponse:
          "Sa texture fluide et non grasse le rend particulièrement adapté aux climats chauds ou aux peaux qui deviennent brillantes avec des textures plus riches.",
      },
      {
        question: "Peut-on l'utiliser sous un écran solaire ?",
        reponse:
          "Oui, il s'applique avant la protection solaire du matin dans l'ordre habituel d'une routine visage.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-sensitive-riche-40ml",
    identite: [
      "Version riche de la gamme Toleriane Sensitive, cette crème convient aux peaux sensibles sèches qui ont besoin d'un confort plus marqué que la version crème légère de la même gamme. Elle associe les mêmes actifs (eau thermale prébiotique, acide hyaluronique) dans une texture plus enveloppante, pensée pour limiter les tiraillements sur une peau à la fois sensible et sèche.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Eau thermale prébiotique et acide hyaluronique" },
      { libelle: "Texture", valeur: "Crème riche" },
      { libelle: "Type de peau", valeur: "Peau sensible sèche" },
      { libelle: "Gamme", valeur: "Toleriane Sensitive" },
    ],
    usage: [
      "S'applique matin et/ou soir sur visage nettoyé, en couche généreuse sur les zones les plus sèches. Elle convient bien en hiver ou pour une peau qui reste inconfortable malgré la version crème légère de la même gamme.",
    ],
    positionnement: [
      "Face à la version Crème Légère, elle apporte davantage de confort pour une peau sensible et sèche ; une peau sensible mixte ou grasse s'orientera plutôt vers la version fluide ou légère pour éviter une sensation trop riche.",
    ],
    faq: [
      {
        question: "Quelle différence avec la crème légère ?",
        reponse:
          "La formule active est proche, mais la texture est plus riche et enveloppante ici, pensée pour une peau sensible qui est aussi sèche.",
      },
      {
        question: "Peut-on l'utiliser toute l'année ?",
        reponse:
          "Oui, en particulier si la peau reste sèche et inconfortable en toute saison, sans se limiter à un usage hivernal.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-ultra-dermallergo-serum-neurosensine-01-20ml",
    identite: [
      "Ce sérum cible les peaux allergiques et très réactives, sujettes à des sensations d'inconfort marquées : picotements, tiraillements, chaleur. Il s'appuie sur la neurosensine, un actif étudié pour agir sur ces sensations d'inconfort cutané plutôt que sur l'aspect visuel de la peau. Sa formule minimaliste et sans parfum complète la gamme Toleriane Ultra Dermallergo, pensée pour les peaux qui réagissent à la plupart des cosmétiques courants.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Neurosensine" },
      { libelle: "Sans parfum", valeur: "Oui" },
      { libelle: "Type de peau", valeur: "Peau allergique, très réactive" },
      { libelle: "Gamme", valeur: "Toleriane Ultra Dermallergo" },
    ],
    usage: [
      "S'applique sur peau nettoyée, avant la crème habituelle, en particulier lors des épisodes où la peau tiraille ou picote plus que d'habitude. Sa formule minimaliste permet de l'intégrer facilement dans une routine réduite au strict nécessaire, ce que recherchent souvent les peaux allergiques.",
    ],
    positionnement: [
      "Plus spécifique qu'un sérum apaisant généraliste, il cible la sensation d'inconfort elle-même plutôt que la seule apparence de la peau ; une peau simplement sensible sans réaction marquée peut se satisfaire d'une crème apaisante classique.",
    ],
    faq: [
      {
        question: "Que signifie neurosensine ?",
        reponse:
          "C'est le nom de l'actif de cette gamme, étudié pour agir sur les sensations d'inconfort cutané comme les picotements plutôt que sur l'aspect de la peau.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa formule minimaliste le permet, y compris en usage quotidien sur une peau allergique ou très réactive.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-ultra-nuit-roche-posay-creme-de-nuit-40ml",
    identite: [
      "Toleriane Ultra Nuit est le soin de nuit de la gamme Toleriane Ultra, pensé pour les peaux très sensibles qui ont besoin de réconfort pendant leur phase de régénération nocturne. Sa formule associe eau thermale et agents apaisants dans une texture qui vise à limiter l'inconfort au réveil sur une peau réactive. Elle complète les soins Toleriane Ultra du jour dans une routine pensée pour la tolérance avant tout.",
    ],
    faits: [
      { libelle: "Usage", valeur: "Soin de nuit apaisant" },
      { libelle: "Type de peau", valeur: "Peau très sensible" },
      { libelle: "Gamme", valeur: "Toleriane Ultra" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique le soir sur peau nettoyée, en dernière étape de la routine. Elle convient bien après une journée d'exposition au vent, au froid ou à la climatisation, facteurs qui accentuent souvent l'inconfort des peaux sensibles.",
    ],
    positionnement: [
      "Face à une crème de nuit anti-âge classique, elle privilégie le confort immédiat et la tolérance sur les actifs correcteurs ; une peau sensible mais sans inconfort marqué peut se tourner vers un soin de nuit plus complet en actifs.",
    ],
    faq: [
      {
        question: "Convient-elle après une exposition au froid ?",
        reponse:
          "Oui, c'est un des cas où une peau sensible en a le plus besoin, le froid accentuant souvent les tiraillements et l'inconfort cutané.",
      },
      {
        question: "Peut-on la combiner à un sérum anti-âge ?",
        reponse:
          "C'est possible si le sérum est lui-même formulé pour peau sensible ; mieux vaut éviter d'y associer un actif fort qui contredirait l'objectif de tolérance de cette gamme.",
      },
    ],
  },
  {
    slug: "la-roche-posay-pure-niacinamide-10-serum-concentre-anti-taches-30ml",
    identite: [
      "Ce sérum concentré à 10 % de niacinamide vise à corriger l'aspect des taches déjà présentes sur le visage tout en redonnant de l'éclat à un teint terne. Annoncé pour tous types de peau, il s'appuie sur la niacinamide, un actif largement documenté pour son rôle dans l'uniformité du teint. Sa texture sérum s'intègre facilement dans une routine existante, avant la crème hydratante.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Niacinamide à 10 %" },
      { libelle: "Texture", valeur: "Sérum" },
      { libelle: "Type de peau", valeur: "Tous types de peau" },
      { libelle: "Usage", valeur: "Correction des taches, éclat du teint" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, avant la crème hydratante habituelle. Une protection solaire quotidienne le matin reste indispensable pour ne pas voir réapparaître les marques que ce sérum vise à corriger, l'exposition UV étant le principal facteur d'entretien des taches.",
    ],
    positionnement: [
      "À formule proche du sérum Pure Niacinamide 10 classique de la même marque, cette référence insiste sur la correction des taches déjà installées plutôt que sur la seule prévention.",
    ],
    faq: [
      {
        question: "Diffère-t-il du sérum Pure Niacinamide 10 standard ?",
        reponse:
          "La concentration en niacinamide est la même ; cette référence met l'accent sur la correction des taches déjà visibles plutôt que sur la seule prévention de l'éclat.",
      },
      {
        question: "Faut-il l'associer à une protection solaire ?",
        reponse:
          "Oui, c'est indispensable pour éviter que les taches ciblées ne réapparaissent sous l'effet du soleil, qui entretient la pigmentation.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-50-lait-hydratant-haute-protection-60ml",
    identite: [
      "Ce lait solaire corps offre une haute protection SPF50+ dans une texture hydratante pensée pour une application facile sur de grandes surfaces. Le format 60 ml correspond à un usage nomade ou d'appoint plutôt qu'à une protection familiale pour toute la journée à la plage, pour laquelle un plus grand contenant sera plus économique à l'usage.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 50+" },
      { libelle: "Texture", valeur: "Lait hydratant" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Gamme", valeur: "Anthelios" },
    ],
    usage: [
      "S'applique généreusement sur peau sèche avant exposition, en renouvelant l'application toutes les deux heures et après chaque baignade ou transpiration importante, quelle que soit la résistance à l'eau annoncée. Une quantité insuffisante réduit fortement la protection réelle par rapport à l'indice affiché.",
    ],
    positionnement: [
      "Son format compact en fait un complément d'appoint ou un format de sac plutôt qu'une solution familiale pour la journée ; pour un usage prolongé à la plage, un grand format de la même gamme reste plus adapté.",
    ],
    faq: [
      {
        question: "Résiste-t-il à l'eau ?",
        reponse:
          "Les laits solaires Anthelios offrent généralement une résistance à l'eau, mais une réapplication après la baignade reste nécessaire pour maintenir la protection annoncée.",
      },
      {
        question: "Ce format convient-il pour une journée à la plage ?",
        reponse:
          "Son petit contenant convient surtout à un usage d'appoint ; pour couvrir toute une journée d'exposition, un plus grand format est préférable.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-dermo-pediatrics-baby-lotion-spf-50-50ml",
    identite: [
      "Cette lotion solaire s'adresse spécifiquement aux tout-petits, avec une très haute protection SPF50+ et une formule pensée pour limiter le risque d'irritation sur une peau de bébé, plus fine et plus sensible que celle d'un adulte. Le format compact de 50 ml convient à un usage ponctuel ou de sac plutôt qu'à une protection familiale complète.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 50+" },
      { libelle: "Type de peau", valeur: "Peau de bébé" },
      { libelle: "Zone", valeur: "Corps et visage de l'enfant" },
      { libelle: "Gamme", valeur: "Anthelios Dermo-Pediatrics" },
    ],
    usage: [
      "S'applique généreusement sur toutes les zones exposées de l'enfant avant la sortie, en renouvelant toutes les deux heures et après chaque baignade. Il reste préférable d'éviter l'exposition directe au soleil des tout-petits aux heures les plus fortes, quelle que soit la protection solaire appliquée.",
    ],
    positionnement: [
      "Comparée à un lait solaire adulte, cette formule Dermo-Pediatrics est pensée pour la sensibilité propre à la peau des bébés ; elle ne remplace pas les précautions physiques (vêtements, ombre) recommandées pour les tout-petits en cas de forte exposition.",
    ],
    faq: [
      {
        question: "À partir de quel âge peut-on l'utiliser ?",
        reponse:
          "Les gammes solaires bébé sont généralement pensées pour les tout-petits, mais un avis du pédiatre reste utile en cas de doute, notamment avant l'âge de six mois.",
      },
      {
        question: "Ce format suffit-il pour les vacances ?",
        reponse:
          "Son petit contenant convient à un usage ponctuel ; pour des vacances prolongées, un plus grand format de la même gamme est plus pratique et économique à l'usage.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-dermo-pediatrics-lait-hydratant-spf50-250ml",
    identite: [
      "Version grand format du lait solaire Dermo-Pediatrics, cette référence de 250 ml convient à un usage familial prolongé, en vacances par exemple. Sa formule très haute protection SPF50+ est pensée pour la peau sensible des enfants, avec une texture qui s'applique facilement sur l'ensemble du corps sans excès de friction.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 50+" },
      { libelle: "Texture", valeur: "Lait hydratant" },
      { libelle: "Type de peau", valeur: "Peau sensible de l'enfant" },
      { libelle: "Gamme", valeur: "Anthelios Dermo-Pediatrics" },
    ],
    usage: [
      "S'applique généreusement sur toutes les zones exposées avant la sortie, en renouvelant toutes les deux heures et après chaque baignade. Le grand format facilite une application sans compter, ce qui compte pour respecter la quantité nécessaire à la protection réelle sur toute la surface du corps d'un enfant actif.",
    ],
    positionnement: [
      "Son grand format en fait un choix plus économique et pratique que le format de 50 ml de la même gamme pour un usage familial prolongé, quand ce dernier reste préférable pour un usage ponctuel ou en sac.",
    ],
    faq: [
      {
        question: "Convient-il pour toute la famille ?",
        reponse:
          "Sa formule est pensée pour la peau sensible des enfants ; les adultes peuvent l'utiliser mais disposent aussi de formules Anthelios dédiées à leur propre type de peau.",
      },
      {
        question: "Faut-il renouveler l'application ?",
        reponse:
          "Oui, toutes les deux heures et après chaque baignade, quelle que soit la résistance à l'eau annoncée, pour maintenir la protection réelle.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-mineral-one-protection-hydratation-24h-30ml",
    identite: [
      "Anthelios Mineral One est un soin solaire teinté pour le visage, formulé uniquement avec des filtres minéraux plutôt que des filtres chimiques. Il associe protection solaire et hydratation 24h dans un seul geste, avec un fini teinté qui unifie visuellement le teint. Il se décline en plusieurs teintes pour s'adapter à différentes carnations, ce qui en fait à la fois un soin solaire et une base de teint légère.",
    ],
    faits: [
      { libelle: "Type de filtre", valeur: "Filtres minéraux uniquement" },
      { libelle: "Usage", valeur: "Protection solaire teintée et hydratation" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Gamme", valeur: "Anthelios Mineral One" },
    ],
    usage: [
      "S'applique le matin en dernière étape de la routine visage, en quantité suffisante pour assurer la protection annoncée malgré son fini teinté léger. Il peut remplacer à la fois la crème de jour et une base de teint légère pour qui cherche à simplifier sa routine du matin.",
    ],
    positionnement: [
      "Face à une protection solaire classique non teintée, il ajoute un fini unifiant pour qui veut limiter le nombre de produits du matin ; pour une couvrance plus marquée, un fond de teint dédié reste nécessaire en complément.",
    ],
    faq: [
      {
        question: "Remplace-t-il un fond de teint ?",
        reponse:
          "Il apporte un fini teinté léger qui unifie le teint, mais sa couvrance reste modérée comparée à un fond de teint dédié pour les imperfections marquées.",
      },
      {
        question: "Comment choisir sa teinte ?",
        reponse:
          "Les teintes de la gamme Mineral One sont pensées pour s'adapter à différentes carnations ; tester sur la mâchoire à la lumière naturelle reste le moyen le plus fiable de choisir.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-uvair-tres-haute-protection-solaire-spf-40ml",
    identite: [
      "Anthelios UVair est une protection solaire visage à très haute protection, pensée avec une technologie visant aussi à limiter l'impact des particules de pollution sur la peau exposée en ville. Sa texture fluide non comédogène convient à un usage quotidien sous le maquillage, sans laisser de film gras ni de traces blanches marquées.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF 50+" },
      { libelle: "Texture", valeur: "Fluide non comédogène" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Gamme", valeur: "Anthelios UVair" },
    ],
    usage: [
      "S'applique le matin en dernière étape de la routine visage, en quantité suffisante pour assurer la protection annoncée. Sa texture fluide facilite l'application sous le maquillage, ce qui en fait un choix adapté à un usage urbain quotidien plutôt qu'à une seule exposition ponctuelle au soleil.",
    ],
    positionnement: [
      "Comparée à un lait solaire corps utilisé par défaut sur le visage, cette formule dédiée évite les textures trop grasses ou comédogènes ; pour un usage exclusivement plage, une texture plus résistante à l'eau peut être préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, sa texture fluide et non comédogène est pensée pour cet usage quotidien, contrairement à des textures solaires plus grasses moins adaptées sous maquillage.",
      },
      {
        question: "Résiste-t-elle bien à l'eau ?",
        reponse:
          "Cette formule est surtout pensée pour un usage urbain quotidien ; pour une exposition prolongée avec baignade, une protection solaire plus spécifiquement résistante à l'eau est préférable.",
      },
    ],
  },
];
