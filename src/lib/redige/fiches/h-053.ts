import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "la-roche-posay-anthelios-uvair-protection-uv-quotidienne-tres-40ml",
    identite: [
      "Anthelios UVair est pensé pour la protection solaire du quotidien plutôt que pour la plage : une texture fluide et invisible, sans trace blanche ni effet gras, qui s'applique comme une base avant maquillage. Sa très haute protection SPF50+ se double d'une protection anti-oxydante annoncée sur 16 heures, contre le stress oxydatif lié à la pollution et à la lumière bleue des écrans, un argument qui explique sa place parmi les soins anti-âge plutôt que dans le seul rayon solaire. Le format 40 ml correspond à un usage visage quotidien, pas à une exposition prolongée au soleil.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "fluide invisible, non grasse" },
      { libelle: "Usage", valeur: "quotidien, y compris sous le maquillage" },
      { libelle: "Protection complémentaire", valeur: "anti-oxydante annoncée sur 16h" },
    ],
    usage: [
      "S'applique le matin, en dernière étape de la routine, sur une peau propre, avant le maquillage éventuel. La quantité doit rester généreuse pour que la protection SPF50+ annoncée soit effective : une couche trop fine réduit fortement l'indice réel. En cas d'exposition prolongée au soleil, ce fluide quotidien ne dispense pas d'une protection solaire dédiée, plus résistante à l'eau.",
    ],
    positionnement: [
      "Face à une crème solaire classique, plus riche et pensée pour la plage, ce fluide vise l'usage urbain quotidien sous maquillage, sans effet gras ni trace blanche. Il convient moins à une exposition prolongée en extérieur, où une protection plus résistante à l'eau et à la transpiration reste préférable. Les peaux très sèches peuvent aussi lui préférer une texture plus nourrissante en dessous.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser à la plage ou en exposition prolongée ?",
        reponse:
          "Il est conçu pour l'usage quotidien urbain sous maquillage. En cas d'exposition prolongée au soleil, une protection solaire dédiée, plus résistante à l'eau, reste plus adaptée et demande des applications répétées.",
      },
      {
        question: "Faut-il une crème hydratante avant de l'appliquer ?",
        reponse:
          "Sa texture fluide permet de l'appliquer directement sur une peau nettoyée. Sur peau très sèche, une crème hydratante légère en dessous ne pose pas de problème, à condition de laisser pénétrer avant application.",
      },
    ],
  },
  {
    slug: "la-roche-posay-cicaplast-b5-siero-ultra-reparateur-hydratant-30ml",
    identite: [
      "Ce sérum Cicaplast B5 concentre le panthénol (vitamine B5) réparateur de la gamme Cicaplast dans une texture fluide, plus légère que le baume du même nom. Il s'adresse à une peau fragilisée ou irritée : tiraillements, rougeurs passagères, peau réactive après un soin agressif ou une exposition au froid. Sa formule vise à apaiser et à restaurer le confort cutané sans laisser de film gras, ce qui permet de l'utiliser sous une crème habituelle ou seul en soin ponctuel.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "panthénol (vitamine B5)" },
      { libelle: "Texture", valeur: "sérum fluide, non gras" },
      { libelle: "Usage", valeur: "peau irritée, fragilisée ou tiraillée" },
      { libelle: "Zone", valeur: "visage, application ciblée possible" },
    ],
    usage: [
      "S'applique sur une peau propre, en couche fine, sur l'ensemble du visage ou seulement sur les zones qui tiraillent. Il peut précéder la crème habituelle ou s'utiliser seul les jours où la peau est particulièrement réactive, par exemple après un coup de froid ou un soin exfoliant trop agressif.",
    ],
    positionnement: [
      "Plus léger que le baume Cicaplast B5+, ce sérum convient aux peaux qui cherchent un apaisement rapide sans texture riche, y compris sous maquillage. Pour une peau très abîmée ou des plaques sèches localisées, le baume ou le stick de la même gamme apportent une action plus nourrissante et occlusive.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, sa texture légère le permet en usage quotidien, en particulier sur une peau sensible ou sujette aux rougeurs passagères, sans effet gras ni sensation de lourdeur.",
      },
      {
        question: "Remplace-t-il la crème hydratante habituelle ?",
        reponse:
          "Il peut la remplacer les jours où la peau est irritée, mais reste surtout pensé comme un soin apaisant à ajouter avant la crème habituelle en cas de besoin.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-gel-moussant-purifiant-equilibre-ph-200ml",
    identite: [
      "Ce gel moussant Effaclar nettoie les peaux à tendance grasse ou à imperfections en respectant l'équilibre du pH cutané, un point que la marque met en avant pour éviter l'effet de tiraillement que provoquent certains nettoyants purifiants trop agressifs. Il élimine l'excès de sébum et les impuretés de la journée sans dessécher la peau, ce qui permet une utilisation matin et soir sans réaction de rebond séborrhéique. Le format 200 ml correspond à un usage quotidien sur plusieurs mois.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "nettoyant purifiant, équilibre le pH" },
      { libelle: "Texture", valeur: "gel moussant" },
      { libelle: "Type de peau", valeur: "grasse, à imperfections" },
      { libelle: "Usage", valeur: "matin et soir" },
    ],
    usage: [
      "Faire mousser une noisette de produit sur peau mouillée, en massant le visage humide, puis rincer à l'eau tiède. Il s'utilise matin et soir en première étape de la routine, avant les soins ciblés de la gamme Effaclar contre les imperfections.",
    ],
    positionnement: [
      "Comparé à un nettoyant purifiant classique, souvent asséchant à l'usage répété, celui-ci respecte le pH pour limiter l'effet de tiraillement. Il reste un nettoyant, pas un traitement : sur une acné marquée, il doit s'associer à un soin ciblé de la même gamme plutôt que d'agir seul.",
    ],
    faq: [
      {
        question: "Ce gel suffit-il à traiter les boutons ?",
        reponse:
          "Non, c'est un nettoyant qui prépare la peau. L'action contre les imperfections vient des soins ciblés de la gamme Effaclar appliqués ensuite, comme un gel-crème ou un sérum anti-imperfections.",
      },
      {
        question: "Peut-il dessécher la peau à l'usage quotidien ?",
        reponse:
          "Il est formulé pour respecter le pH cutané et limiter cet effet, contrairement à certains nettoyants purifiants plus agressifs. Une sensation de tiraillement persistante justifie toutefois d'espacer les lavages.",
      },
    ],
  },
  {
    slug: "la-roche-posay-hyalu-b5-eye-serum-anti-rides-anti-cernes-15ml",
    identite: [
      "Ce soin contour des yeux de la gamme Hyalu B5 associe acide hyaluronique et vitamine B5 dans une texture de sérum-gel, pensée pour une zone fine et souvent marquée par les rides et les cernes. Il vise à repulper visuellement les ridules de déshydratation et à atténuer l'aspect fatigué du regard, sans agir sur les poches ni sur les cernes pigmentaires d'origine vasculaire, qui relèvent d'autres mécanismes. Sa texture légère convient à une application quotidienne, matin et soir.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide hyaluronique, vitamine B5" },
      { libelle: "Texture", valeur: "sérum-gel léger" },
      { libelle: "Zone", valeur: "contour des yeux" },
      { libelle: "Usage", valeur: "matin et soir" },
    ],
    usage: [
      "Prélever une petite quantité et tapoter du bout du doigt autour de l'œil, sans frotter ni étirer la peau, en évitant le contact direct avec l'œil. Matin et soir, avant la crème visage habituelle, en laissant pénétrer quelques instants avant d'appliquer un maquillage éventuel.",
    ],
    positionnement: [
      "Il agit surtout sur l'aspect de déshydratation et de fatigue du regard, grâce à l'acide hyaluronique, plutôt que sur des poches marquées ou des cernes pigmentaires. Pour ces problématiques précises, un soin yeux formulé avec de la caféine ou un actif éclaircissant ciblé sera plus indiqué.",
    ],
    faq: [
      {
        question: "Ce sérum estompe-t-il les poches sous les yeux ?",
        reponse:
          "Il hydrate et améliore l'aspect général du regard, mais ne cible pas spécifiquement les poches, qui répondent surtout à des soins décongestionnants ou à des gestes comme le froid appliqué localement.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, sa texture fluide pénètre rapidement et permet d'appliquer un correcteur ou un fond de teint par-dessus après quelques instants de pose.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-ap-m-triple-action-balm-72h-apaise-repare-75ml",
    identite: [
      "Le baume Lipikar AP+M s'adresse aux peaux très sèches à tendance atopique, sujettes aux plaques rugueuses et aux démangeaisons. Sa formule associe beurre de karité et niacinamide pour apaiser l'inconfort et reconstituer le film hydrolipidique, avec une action triple annoncée sur 72 heures : hydratation, apaisement des démangeaisons et espacement des récidives de plaques. Le M du nom renvoie au travail sur le microbiome cutané, un axe que la marque met en avant pour les peaux atopiques. Sa texture baume, plus riche qu'une crème classique, convient au corps comme au visage selon les zones sèches.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "beurre de karité, niacinamide" },
      { libelle: "Texture", valeur: "baume riche" },
      { libelle: "Type de peau", valeur: "très sèche, atopique" },
      { libelle: "Zone", valeur: "visage et corps, zones à plaques" },
    ],
    usage: [
      "S'applique sur peau propre, en couche généreuse sur les zones sèches ou sujettes aux plaques, une à deux fois par jour selon l'intensité de la sécheresse. Peut s'utiliser en entretien quotidien ou de façon plus ciblée sur les poussées, en complément du gel lavant Lipikar.",
    ],
    positionnement: [
      "Plus riche qu'une crème hydratante classique, ce baume vise spécifiquement l'inconfort lié aux peaux atopiques, démangeaisons comprises. Sur une peau simplement sèche sans tendance atopique, une crème hydratante plus légère suffit généralement et pénètre plus vite.",
    ],
    faq: [
      {
        question: "Convient-il aux enfants ?",
        reponse:
          "Les soins Lipikar sont formulés pour toute la famille, peaux atopiques d'enfants comprises, mais un avis pédiatrique reste utile en cas de poussée importante ou de doute sur le diagnostic.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Oui, sur les zones sèches du visage il s'utilise comme sur le corps, en évitant le contour des yeux si la zone est très fine.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-gel-lavant-apaisant-protecteur-1000ml",
    identite: [
      "Ce gel lavant Lipikar nettoie en douceur les peaux sèches à très sèches, y compris les peaux atopiques de toute la famille. Sa formule sans savon respecte le film hydrolipidique déjà fragilisé plutôt que de l'agresser davantage, avec un rinçage qui ne laisse pas la sensation de tiraillement propre aux gels douche classiques. Le grand format d'un litre correspond à un usage familial et quotidien, sous la douche comme au lavabo pour les mains.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "nettoyant sans savon, apaisant" },
      { libelle: "Type de peau", valeur: "sèche à très sèche, atopique" },
      { libelle: "Usage", valeur: "corps et mains, toute la famille" },
      { libelle: "Format", valeur: "usage familial quotidien" },
    ],
    usage: [
      "Faire mousser sur peau mouillée sous la douche ou au bain, puis rincer abondamment. Utilisable au quotidien par toute la famille, y compris les peaux les plus sensibles, en alternative à un savon classique qui dessécherait davantage.",
    ],
    positionnement: [
      "Comparé à un gel douche parfumé standard, celui-ci privilégie la tolérance cutanée à l'effet moussant ou au parfum marqué. Il convient moins à qui cherche une sensation moussante généreuse ou un parfum affirmé : sa priorité reste le respect d'une peau déjà fragilisée.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Oui, sa formule douce sans savon le permet, bien qu'un nettoyant dédié au visage reste préférable pour les peaux à imperfections ou très réactives sur cette zone précise.",
      },
      {
        question: "Convient-il aux bébés ?",
        reponse:
          "Les gels lavants Lipikar sont formulés pour toute la famille, nourrissons compris, mais il reste prudent de vérifier l'absence de réaction lors des premiers usages sur peau très jeune.",
      },
    ],
  },
  {
    slug: "la-roche-posay-lipikar-stick-ap-soin-sos-anti-grattage-15ml",
    identite: [
      "Le stick Lipikar AP+ est un format concentré et localisé, pensé pour intervenir directement sur une plaque sèche ou une zone qui démange, plutôt que sur l'ensemble du corps. Sa texture ferme, riche en beurre de karité et en niacinamide, se dépose précisément sans passer par les mains, ce qui limite le contact et facilite un geste rapide en dehors de la maison. Le petit format de 15 ml est pensé pour accompagner un sac ou une trousse plutôt que pour un usage corps complet.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "beurre de karité, niacinamide" },
      { libelle: "Format", valeur: "stick, application localisée" },
      { libelle: "Usage", valeur: "soin SOS anti-grattage" },
      { libelle: "Zone", valeur: "plaques sèches ponctuelles" },
    ],
    usage: [
      "Appliquer directement le stick sur la zone qui démange ou qui présente une plaque sèche, sans avoir besoin de passer par les mains. Peut s'utiliser plusieurs fois par jour en complément du baume ou du gel lavant Lipikar utilisés sur l'ensemble du corps.",
    ],
    positionnement: [
      "Contrairement au baume ou à la crème Lipikar destinés à l'ensemble du corps, ce stick répond à un besoin ponctuel et localisé, pratique en dehors de la maison. Pour une peau atopique étendue, il complète le baume plutôt que de le remplacer.",
    ],
    faq: [
      {
        question: "Peut-on l'emporter en déplacement ?",
        reponse:
          "C'est justement l'intérêt de ce format compact, pensé pour intervenir rapidement sur une démangeaison ponctuelle sans avoir besoin d'un pot ou d'un tube classique.",
      },
      {
        question: "Remplace-t-il le baume corps habituel ?",
        reponse:
          "Non, il cible une zone précise en cas de démangeaison ou de plaque sèche localisée, alors que le baume s'applique sur l'ensemble des zones sèches du corps.",
      },
    ],
  },
  {
    slug: "la-roche-posay-toleriane-gel-moussant-adoucissant-nettoyage-150ml",
    identite: [
      "Ce gel moussant de la gamme Tolériane nettoie en douceur les peaux sensibles ou réactives, sans savon et sans les tensioactifs les plus agressifs. Il élimine les impuretés et les résidus de la journée en respectant la barrière cutanée, avec un rinçage qui ne laisse pas de sensation de tiraillement propre aux nettoyants moussants classiques. Sa formule s'adresse à une peau qui réagit facilement, y compris après un nettoyant purifiant trop asséchant utilisé précédemment.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "nettoyant doux, sans savon" },
      { libelle: "Texture", valeur: "gel moussant" },
      { libelle: "Type de peau", valeur: "sensible, réactive" },
      { libelle: "Usage", valeur: "matin et soir" },
    ],
    usage: [
      "Faire mousser sur visage humide, matin et soir, puis rincer à l'eau tiède. Peut aussi s'utiliser pour démaquiller légèrement avant l'application d'une lotion ou d'un soin Tolériane adapté aux peaux sensibles.",
    ],
    positionnement: [
      "Face à un gel moussant classique, souvent trop agressif pour une peau réactive, celui-ci privilégie la tolérance cutanée. Il ne remplace pas un démaquillant pour un maquillage tenace, qui demande un geste dédié avant ce nettoyage complémentaire.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser pour démaquiller les yeux ?",
        reponse:
          "Il nettoie surtout le visage en douceur. Pour un maquillage yeux résistant, un démaquillant dédié reste préférable avant ce gel, qui complète le geste plutôt qu'il ne le remplace entièrement.",
      },
      {
        question: "Convient-il aux peaux à imperfections en plus des peaux sensibles ?",
        reponse:
          "Il reste avant tout formulé pour la tolérance cutanée. Sur une peau sensible avec imperfections, un nettoyant de la gamme Effaclar peut mieux cibler cet aspect.",
      },
    ],
  },
  {
    slug: "la-roche-posay-vitamin-c-gel-moussant-renovateur-eclat-200ml",
    identite: [
      "Ce gel moussant à la vitamine C nettoie le visage tout en préparant la peau à recevoir les soins éclat de la même gamme. Il vise le teint terne et l'aspect des pores dilatés, avec une action nettoyante renforcée par la vitamine C sans agresser la peau au quotidien. Le format 200 ml correspond à un usage matin et soir, en première étape avant un sérum ou une crème vitaminée.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "vitamine C" },
      { libelle: "Texture", valeur: "gel moussant" },
      { libelle: "Fonction", valeur: "nettoyant éclat, affine l'aspect des pores" },
      { libelle: "Usage", valeur: "matin et soir" },
    ],
    usage: [
      "Faire mousser sur peau humide, matin et soir, puis rincer. Utilisé en première étape, il prépare la peau à un sérum ou une crème vitaminée de la même gamme appliqués ensuite pour prolonger l'effet éclat.",
    ],
    positionnement: [
      "Comparé à un nettoyant neutre, celui-ci ajoute un axe éclat pensé pour un teint terne ou fatigué. Il reste un nettoyant rincé, donc son effet est plus modeste qu'un sérum laissé en place : l'un prépare la peau, l'autre agit en profondeur.",
    ],
    faq: [
      {
        question: "Ce gel suffit-il pour un effet éclat visible ?",
        reponse:
          "Il prépare la peau et la nettoie en douceur, mais l'effet éclat le plus marqué vient des soins laissés en place, comme un sérum vitamine C de la même gamme.",
      },
      {
        question: "Peut-on l'utiliser sur peau sensible ?",
        reponse:
          "Il reste un nettoyant relativement doux, mais une peau très réactive à la vitamine C peut lui préférer un gel moussant neutre de la gamme Tolériane.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-anti-dark-spots-fluide-spf50-50ml",
    identite: [
      "Ce fluide Anthelios cible la peau sujette aux taches pigmentaires tout en assurant une très haute protection solaire SPF50+, les rayons UV étant le principal facteur d'aggravation des taches existantes et d'apparition de nouvelles marques. Sa formule associe filtres solaires et actifs éclaircissants, souvent à base de niacinamide dans cette ligne, pour limiter la formation de nouvelles taches sur la durée d'exposition. La texture fluide s'applique comme un soin de jour classique, ce qui facilite un usage quotidien plutôt que réservé aux seules journées ensoleillées.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Fonction", valeur: "anti-taches, prévention de la pigmentation" },
      { libelle: "Texture", valeur: "fluide" },
      { libelle: "Usage", valeur: "application quotidienne, toute l'année" },
    ],
    usage: [
      "S'applique le matin sur peau propre, en dernière étape avant maquillage, sur le visage et les zones exposées comme le décolleté si nécessaire. Un usage quotidien toute l'année reste nécessaire pour limiter l'apparition de nouvelles taches, pas seulement pendant les mois les plus ensoleillés.",
    ],
    positionnement: [
      "Il se distingue d'une protection solaire classique par son axe anti-taches, utile pour une peau déjà marquée par des taches pigmentaires ou du mélasma. Sur une peau sans problématique de pigmentation, une protection solaire quotidienne standard suffit et reste plus simple à l'usage régulier.",
    ],
    faq: [
      {
        question: "Ce fluide fait-il disparaître les taches existantes ?",
        reponse:
          "Il aide à limiter l'aggravation des taches par la protection solaire et à atténuer visuellement leur apparition dans la durée, sans effacer une pigmentation déjà installée, qui relève d'un suivi dermatologique.",
      },
      {
        question: "Faut-il l'utiliser toute l'année ou seulement l'été ?",
        reponse:
          "Toute l'année, car les UV responsables de l'aggravation des taches sont présents même par temps couvert, pas seulement lors d'une exposition estivale directe.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-dermo-pediatrics-lait-bebe-spf50",
    identite: [
      "Ce lait solaire de la gamme Dermo-Pediatrics est formulé pour la peau fine et fragile des bébés, avec une très haute protection SPF50+ adaptée à une exposition qui doit rester limitée à cet âge. Sa texture lait, plus fluide qu'une crème, facilite l'application sur une peau qui tolère mal les textures épaisses ou les frottements répétés. Il complète les mesures de protection physique recommandées pour les nourrissons, comme l'ombre et les vêtements couvrants, sans les remplacer.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "lait fluide" },
      { libelle: "Usage", valeur: "peau de bébé, exposition limitée" },
      { libelle: "Type de peau", valeur: "fragile, sensible" },
    ],
    usage: [
      "Appliquer en couche généreuse sur les zones exposées avant toute sortie, en renouvelant l'application après le bain ou la baignade. Pour un nourrisson, l'exposition directe au soleil doit rester limitée et privilégier l'ombre, ce lait venant en complément des vêtements couvrants et du chapeau.",
    ],
    positionnement: [
      "Sa texture lait et sa formulation pensée pour peau de bébé le distinguent d'un solaire adulte, potentiellement trop agressif sur une peau aussi fine. Il ne dispense pas des règles de prudence propres aux nourrissons : ombre, vêtements couvrants et exposition limitée restent la première protection.",
    ],
    faq: [
      {
        question: "À partir de quel âge peut-on l'utiliser ?",
        reponse:
          "Les gammes Dermo-Pediatrics s'adressent aux nourrissons et jeunes enfants, mais l'avis d'un pédiatre reste recommandé avant toute exposition solaire directe des tout premiers mois de vie.",
      },
      {
        question: "Faut-il renouveler l'application après la baignade ?",
        reponse:
          "Oui, comme pour toute protection solaire, la baignade et les frottements avec une serviette réduisent l'efficacité du produit, ce qui impose une nouvelle application.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-pigment-correct-creme-teintee-spf-50",
    identite: [
      "Cette crème teintée Anthelios Pigment Correct combine une très haute protection solaire SPF50+ avec un léger effet correcteur de teint, pensé pour unifier visuellement les taches pigmentaires tout en les protégeant des UV responsables de leur aggravation. Sa texture crème teintée permet de remplacer un fond de teint léger les jours où l'objectif reste avant tout la protection solaire, avec une couvrance discrète plutôt qu'un maquillage complet. Elle s'adresse à une peau qui présente déjà des marques pigmentaires ou craint leur apparition.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Fonction", valeur: "teinte unifiante, anti-taches" },
      { libelle: "Texture", valeur: "crème teintée" },
      { libelle: "Usage", valeur: "jour, en remplacement d'un fond de teint léger" },
    ],
    usage: [
      "S'applique le matin comme une crème de jour teintée, en dernière étape avant une éventuelle poudre. Elle convient aux journées où une couvrance légère suffit ; pour un maquillage plus couvrant, un fond de teint dédié doit s'appliquer par-dessus une protection solaire classique.",
    ],
    positionnement: [
      "Elle se situe entre le soin solaire et le maquillage léger, utile pour qui veut limiter le nombre d'étapes le matin. Pour une couvrance plus marquée ou une tenue longue, un fond de teint dédié appliqué sur une protection solaire séparée reste plus adapté.",
    ],
    faq: [
      {
        question: "Peut-elle remplacer le fond de teint ?",
        reponse:
          "Elle apporte une couvrance légère qui unifie le teint, suffisante pour un usage quotidien discret, mais un maquillage plus couvrant nécessite un fond de teint appliqué par-dessus une protection solaire classique.",
      },
      {
        question: "Protège-t-elle vraiment comme une crème solaire classique ?",
        reponse:
          "Oui, son indice SPF50+ correspond à une très haute protection, à condition d'appliquer une quantité suffisante, ce qu'une couche fine de teinte ne garantit pas toujours en pratique.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-uvair-serum-creme-solaire-spf-50",
    identite: [
      "Ce sérum-crème Anthelios UVair associe une texture hybride, plus fluide qu'une crème solaire classique, à une très haute protection SPF50+. Il s'inscrit dans la ligne UVair pensée pour un usage quotidien sous maquillage, avec un fini non gras et sans trace blanche qui limite la sensation d'épaisseur souvent associée aux solaires. Cette texture sérum-crème convient particulièrement aux peaux qui n'aiment pas les solaires classiques trop riches ou luisants.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Texture", valeur: "sérum-crème, non grasse" },
      { libelle: "Usage", valeur: "quotidien, sous maquillage" },
      { libelle: "Fini", valeur: "sans trace blanche" },
    ],
    usage: [
      "Appliquer le matin en dernière étape avant maquillage, en quantité suffisante pour que la protection SPF50+ soit effective. Convient à un usage quotidien urbain plutôt qu'à une exposition prolongée en extérieur, qui demande des renouvellements plus fréquents.",
    ],
    positionnement: [
      "Sa texture sérum-crème le rapproche davantage d'un soin de jour que d'un solaire classique, ce qui séduit les peaux réfractaires aux textures grasses. Pour une exposition prolongée au soleil, une protection plus résistante à l'eau et à la transpiration reste préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser à la place de la crème de jour ?",
        reponse:
          "Oui, sa texture soin permet de la porter seule comme dernière étape du matin, avec l'avantage d'une protection solaire intégrée dès le réveil.",
      },
      {
        question: "Laisse-t-il un film gras sous le maquillage ?",
        reponse:
          "Sa formule est pensée pour un fini non gras et sans trace blanche, ce qui facilite l'application du maquillage juste après, une fois le produit bien pénétré.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-uvmune-400-creme-solaire-hydratante-spf-50ml",
    identite: [
      "Cette crème solaire Anthelios UVMune 400 s'appuie sur un filtre de nouvelle génération, capable de couvrir un spectre UVA plus large que les filtres solaires classiques, notamment la part des UVA1 longtemps mal filtrée. Sa texture hydratante convient aux peaux normales à sèches qui recherchent une protection SPF50 sans négliger le confort cutané. Ce type de filtre répond à une demande dermatologique de protection plus complète contre le vieillissement cutané et les taches liés aux UVA, pas seulement contre les coups de soleil dus aux UVB.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Filtre", valeur: "UVMune 400, large spectre UVA" },
      { libelle: "Texture", valeur: "crème hydratante" },
      { libelle: "Type de peau", valeur: "normale à sèche" },
    ],
    usage: [
      "Appliquer généreusement sur le visage et les zones exposées avant toute sortie, en renouvelant toutes les deux heures en cas d'exposition prolongée ou après la baignade. Sa texture hydratante convient à une application quotidienne, pas seulement lors des journées de plage.",
    ],
    positionnement: [
      "Le filtre UVMune 400 la distingue des solaires classiques par sa couverture UVA plus étendue, un argument technique plutôt qu'une différence de confort. Sur peau grasse, une texture plus légère ou matifiante de la même ligne conviendra mieux que cette version hydratante.",
    ],
    faq: [
      {
        question: "Quelle différence avec une crème solaire SPF50 classique ?",
        reponse:
          "Le filtre UVMune 400 couvre une part plus large du spectre UVA, notamment les UVA1, que les filtres solaires plus anciens laissaient partiellement passer, pour une protection plus complète contre le vieillissement cutané.",
      },
      {
        question: "Convient-elle aux peaux grasses ?",
        reponse:
          "Sa texture hydratante est plutôt pensée pour les peaux normales à sèches. Une peau grasse peut lui préférer une version plus légère ou matifiante de la même gamme UVMune 400.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-uvmune-400-dermo-pediatrics-fluide-50ml-2",
    identite: [
      "Ce fluide solaire Dermo-Pediatrics associe le filtre UVMune 400, à large spectre UVA, à une texture invisible et ultra-légère pensée pour la peau des enfants, y compris les peaux sensibles ou à tendance atopique. Il évite l'effet blanc et la sensation collante que certains solaires enfants laissent sur la peau, ce qui facilite l'application sans réticence de la part de l'enfant. Sa formulation reste dédiée à la protection solaire de l'enfant, avec une très haute protection SPF50+, et ne remplace pas les mesures physiques de protection comme l'ombre et les vêtements couvrants.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Filtre", valeur: "UVMune 400" },
      { libelle: "Texture", valeur: "fluide invisible, ultra-léger" },
      { libelle: "Type de peau", valeur: "enfant, sensible ou atopique" },
    ],
    usage: [
      "Appliquer généreusement sur les zones exposées avant la sortie, en renouvelant après la baignade ou la transpiration. Sa texture invisible facilite l'application sur un enfant qui refuse souvent les textures blanches ou collantes des solaires classiques.",
    ],
    positionnement: [
      "Pensé spécifiquement pour la peau sensible ou atopique de l'enfant, il se distingue d'un solaire enfant standard par son confort d'application et son filtre à large spectre. Il reste réservé à l'usage enfant : un adulte peut s'en servir occasionnellement mais trouvera moins d'intérêt à son positionnement dermo-pédiatrique.",
    ],
    faq: [
      {
        question: "Convient-il aux enfants à peau atopique ?",
        reponse:
          "Oui, c'est l'un des usages visés par cette formule, pensée pour limiter l'irritation tout en assurant une très haute protection solaire, mais un avis médical reste utile en cas de poussée active.",
      },
      {
        question: "Laisse-t-il des traces blanches comme certains solaires enfants ?",
        reponse:
          "Sa texture fluide invisible est justement pensée pour éviter cet effet, ce qui facilite l'acceptation du geste par l'enfant au moment de l'application.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-uvmune-400-spf50-creme-hydratante-lait-50ml",
    identite: [
      "Cette crème solaire hydratante Anthelios UVMune 400 SPF50+ reprend le filtre à large spectre UVA de la ligne UVMune pour une protection quotidienne du visage, dans une texture confortable adaptée aux peaux normales à sèches. Ce format est vendu avec un lait après-soleil de la marque, pensé pour apaiser la peau une fois l'exposition terminée et compléter le geste solaire par une étape de récupération cutanée. La crème reste le produit central : le lait après-soleil est un soin complémentaire, pas un substitut à la protection appliquée avant exposition.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Filtre", valeur: "UVMune 400" },
      { libelle: "Texture", valeur: "crème hydratante" },
      { libelle: "Complément", valeur: "lait après-soleil apaisant inclus" },
    ],
    usage: [
      "Appliquer la crème solaire généreusement avant l'exposition et renouveler régulièrement. Le lait après-soleil s'utilise ensuite, le soir ou après la douche, sur une peau exposée dans la journée, pour apaiser et hydrater, sans remplacer la protection appliquée en amont.",
    ],
    positionnement: [
      "L'intérêt de cet ensemble tient à la complémentarité des deux gestes : protéger avant, apaiser après. Comparé à la crème seule, il convient à qui veut composer une routine solaire complète sans chercher séparément un soin après-soleil compatible.",
    ],
    faq: [
      {
        question: "Le lait après-soleil remplace-t-il une crème hydratante du soir ?",
        reponse:
          "Il apaise et hydrate une peau exposée au soleil dans la journée, ce qui peut suffire le soir en période d'exposition, sans forcément remplacer une routine hydratante habituelle hors saison.",
      },
      {
        question: "Peut-on utiliser la crème solaire sans le lait après-soleil ?",
        reponse:
          "Oui, la crème fonctionne seule comme protection solaire quotidienne ; le lait après-soleil est un complément pour la phase de récupération cutanée après exposition.",
      },
    ],
  },
  {
    slug: "la-roche-posay-cicaplast-lavant-b5-200ml",
    identite: [
      "Ce gel lavant Cicaplast B5 nettoie en douceur une peau abîmée, irritée ou fragilisée, en complément du baume ou du sérum Cicaplast B5 appliqués ensuite. Sa formule sans savon respecte une barrière cutanée déjà compromise, sans créer de sensation de tiraillement au rinçage. Il convient au visage comme au corps, sur les zones qui présentent des rougeurs, des petites plaies superficielles ou une peau simplement réactive après un soin agressif.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "nettoyant doux, sans savon" },
      { libelle: "Actif", valeur: "panthénol (vitamine B5)" },
      { libelle: "Type de peau", valeur: "irritée, fragilisée" },
      { libelle: "Usage", valeur: "visage et corps" },
    ],
    usage: [
      "Faire mousser sur peau mouillée, visage ou corps, puis rincer à l'eau tiède. S'utilise avant l'application du baume ou du sérum Cicaplast B5, pour préparer la peau sans l'agresser davantage.",
    ],
    positionnement: [
      "Plus doux qu'un nettoyant purifiant classique, il vise la tolérance cutanée plutôt que l'effet moussant généreux. Sur une peau saine sans irritation particulière, un nettoyant plus standard de la gamme adaptée au type de peau suffit.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage et le corps ?",
        reponse:
          "Oui, sa formule douce sans savon convient aux deux zones, ce qui en fait un nettoyant pratique en cas d'irritation étendue sur plusieurs parties du corps.",
      },
      {
        question: "Faut-il l'associer à un autre soin Cicaplast ?",
        reponse:
          "Il prépare la peau au nettoyage sans la traiter en profondeur ; le baume ou le sérum Cicaplast B5 apportent ensuite l'action réparatrice et apaisante recherchée.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-z-gel-creme-40ml",
    identite: [
      "Ce gel-crème Effaclar A.Z. associe une action hydratante à un traitement global des imperfections, avec du zinc PCA reconnu pour son effet régulateur sur les peaux à tendance acnéique. Contrairement à un soin local appliqué uniquement sur les boutons, il se pose sur l'ensemble du visage comme une crème de jour, pour limiter l'apparition de nouvelles imperfections tout en hydratant une peau souvent asséchée par les traitements purifiants. Sa texture gel-crème reste légère et non grasse, adaptée à un usage quotidien.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "zinc PCA" },
      { libelle: "Texture", valeur: "gel-crème, non grasse" },
      { libelle: "Type de peau", valeur: "à tendance acnéique" },
      { libelle: "Usage", valeur: "application globale, matin et/ou soir" },
    ],
    usage: [
      "Appliquer sur l'ensemble du visage nettoyé, matin et/ou soir, en remplacement de la crème hydratante habituelle. Il s'utilise en usage global plutôt que localisé, contrairement à un soin qui ne viserait que les boutons déjà présents.",
    ],
    positionnement: [
      "Sa formule globale le distingue d'un correcteur local appliqué uniquement sur les boutons visibles, avec un axe préventif sur l'ensemble du visage. Sur une peau à imperfections ponctuelles seulement, un soin ciblé zone par zone peut suffire sans traiter tout le visage.",
    ],
    faq: [
      {
        question: "Faut-il l'appliquer sur tout le visage ou seulement sur les boutons ?",
        reponse:
          "Sur l'ensemble du visage, comme une crème de jour, pour un effet préventif sur les nouvelles imperfections plutôt qu'une action limitée aux boutons déjà apparents.",
      },
      {
        question: "Peut-il remplacer la crème hydratante habituelle ?",
        reponse:
          "Oui, c'est sa fonction principale, pensée pour hydrater tout en régulant les imperfections, dans une texture qui reste légère et non grasse au quotidien.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-duo-unifiant-teinte-claire-40ml",
    identite: [
      "Effaclar Duo+ Unifiant reprend la formule corrective de l'Effaclar Duo+ classique contre les imperfections et les marques qu'elles laissent, avec une teinte ajoutée pour unifier visuellement le teint pendant que le soin agit. La teinte claire s'adresse aux peaux claires à moyennement claires, pour camoufler discrètement les marques résiduelles sans l'effet masque d'un fond de teint couvrant. Il conserve l'action anti-imperfections de la gamme tout en évitant d'avoir à superposer un correcteur séparé.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "anti-imperfections, unifiant teinte claire" },
      { libelle: "Texture", valeur: "crème légère teintée" },
      { libelle: "Type de peau", valeur: "à imperfections, marques résiduelles" },
      { libelle: "Usage", valeur: "matin et/ou soir" },
    ],
    usage: [
      "Appliquer sur les zones à imperfections ou sur l'ensemble du visage, matin et/ou soir, en couche fine. La teinte claire convient aux carnations claires ; sur une peau plus mate, elle peut laisser un effet démaquillé plutôt qu'unifiant.",
    ],
    positionnement: [
      "Il permet de traiter les imperfections sans renoncer à un léger camouflage des marques, contrairement à la version non teintée. Pour une carnation plus foncée que la teinte claire proposée, une teinte plus adaptée ou la version sans teinte évite un rendu blanchâtre.",
    ],
    faq: [
      {
        question: "Cette teinte convient-elle aux carnations mates ?",
        reponse:
          "La teinte claire est pensée pour les carnations claires à moyennement claires. Sur une peau plus mate, elle risque de laisser un effet blanchâtre plutôt qu'unifiant.",
      },
      {
        question: "Peut-on la porter seule sans autre maquillage ?",
        reponse:
          "Oui, c'est l'un de ses intérêts : une couvrance légère qui unifie le teint tout en traitant les imperfections, sans nécessiter de fond de teint par-dessus.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-gel-moussant-200ml",
    identite: [
      "Ce gel moussant Effaclar nettoie les peaux à tendance grasse ou à imperfections, en éliminant l'excès de sébum et les impuretés accumulées dans la journée. Sa texture moussante rince sans laisser de film gras, un point important pour une peau qui a tendance à briller en cours de journée. Il s'utilise en première étape de la routine, avant les soins ciblés contre les imperfections, matin et soir.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "nettoyant purifiant" },
      { libelle: "Texture", valeur: "gel moussant" },
      { libelle: "Type de peau", valeur: "grasse, à imperfections" },
      { libelle: "Usage", valeur: "matin et soir" },
    ],
    usage: [
      "Faire mousser sur peau humide, matin et soir, en insistant sur la zone T souvent plus grasse, puis rincer à l'eau tiède. Il précède l'application des soins ciblés de la gamme Effaclar.",
    ],
    positionnement: [
      "Il joue le rôle de nettoyant de base pour peau grasse, sans traiter en profondeur les imperfections déjà présentes. Il gagne à être associé à un soin ciblé de la même gamme pour une action plus complète sur l'acné.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser matin et soir sans dessécher la peau ?",
        reponse:
          "Oui, sa formule est pensée pour un usage biquotidien sur peau grasse, sans effet asséchant excessif propre à certains nettoyants purifiants plus agressifs.",
      },
      {
        question: "Suffit-il seul contre les boutons ?",
        reponse:
          "Non, c'est un nettoyant qui prépare la peau. L'action contre les imperfections vient des soins laissés en place appliqués après, comme un gel-crème ou un sérum ciblé.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-gel-purifiant-micro-peeling",
    identite: [
      "Ce gel purifiant à micro-peeling exfolie en douceur la peau à tendance grasse ou à pores dilatés, grâce à de fines particules ou à un acide exfoliant qui affinent le grain de peau au fil des usages. Contrairement à un nettoyant quotidien, il s'utilise en soin complémentaire, à une fréquence plus espacée, pour désincruster les pores et limiter l'aspect brillant sans agresser la peau par un usage trop fréquent. Il reste réservé aux peaux qui tolèrent l'exfoliation, à l'écart des peaux sensibles ou irritées.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "exfoliant, micro-peeling" },
      { libelle: "Texture", valeur: "gel" },
      { libelle: "Type de peau", valeur: "grasse, pores dilatés" },
      { libelle: "Usage", valeur: "quelques fois par semaine, pas quotidien" },
    ],
    usage: [
      "Utiliser deux à trois fois par semaine à la place du nettoyant habituel, en massant délicatement pour ne pas irriter la peau, puis rincer. Un usage plus fréquent expose à un risque de sur-exfoliation, en particulier sur peau réactive.",
    ],
    positionnement: [
      "Il complète le nettoyant quotidien plutôt qu'il ne le remplace, avec une action exfoliante plus marquée réservée à un usage espacé. Sur peau sensible ou déjà traitée par un actif exfoliant comme le rétinol, son usage doit rester prudent pour éviter l'irritation.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Non, un usage quotidien expose à une sur-exfoliation. Deux à trois fois par semaine suffisent pour affiner le grain de peau sans irriter.",
      },
      {
        question: "Convient-il aux peaux sensibles ?",
        reponse:
          "Son action exfoliante le réserve plutôt aux peaux grasses qui tolèrent bien ce type de soin. Sur peau sensible ou réactive, un nettoyant plus doux de la gamme Tolériane est préférable.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-h-iso-biome",
    identite: [
      "Effaclar H Iso-Biome est une crème hydratante pensée pour les peaux à tendance acnéique fragilisées, notamment après un traitement dermatologique comme un rétinoïde ou un traitement asséchant contre l'acné. Elle vise à restaurer le confort cutané et l'équilibre du microbiome de la peau, souvent perturbé par ces traitements ou par un nettoyage trop agressif. Sa texture crème hydrate sans obstruer les pores, un point important pour une peau qui reste sujette aux imperfections malgré le besoin d'hydratation.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "hydratant réparateur, soutien du microbiome" },
      { libelle: "Type de peau", valeur: "acnéique, fragilisée par un traitement" },
      { libelle: "Texture", valeur: "crème non comédogène" },
    ],
    usage: [
      "Appliquer matin et/ou soir sur peau propre, en particulier pendant ou après un traitement dermatologique asséchant contre l'acné. Elle s'intègre à la routine comme une crème hydratante classique, sans remplacer le traitement prescrit.",
    ],
    positionnement: [
      "Elle répond à un besoin précis : hydrater une peau acnéique fragilisée par un traitement, sans aggraver les imperfections. Hors de ce contexte de fragilisation, une autre crème de la gamme Effaclar, plus généraliste, peut suffire.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser pendant un traitement dermatologique contre l'acné ?",
        reponse:
          "Oui, c'est l'un des usages visés, en particulier lorsque le traitement prescrit assèche la peau, mais l'avis du dermatologue prescripteur reste la référence en cas de doute.",
      },
      {
        question: "Convient-elle à une peau grasse sans traitement en cours ?",
        reponse:
          "Elle reste utilisable, mais son intérêt principal se manifeste surtout quand la peau est fragilisée par un traitement ou un nettoyage agressif répété.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-h-iso-biome-40ml",
    identite: [
      "Cette version 40 ml d'Effaclar H Iso-Biome propose la même crème hydratante réparatrice pensée pour les peaux acnéiques fragilisées par un traitement dermatologique ou un nettoyage trop asséchant. Elle vise à restaurer le confort cutané et à soutenir l'équilibre du microbiome de la peau, dans une texture non comédogène qui n'aggrave pas les imperfections. Le format compact convient à un usage quotidien sur plusieurs semaines, le temps que la peau retrouve son confort.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "hydratant réparateur, soutien du microbiome" },
      { libelle: "Type de peau", valeur: "acnéique, fragilisée" },
      { libelle: "Texture", valeur: "crème non comédogène" },
    ],
    usage: [
      "Appliquer matin et/ou soir sur peau propre, en particulier pendant une période de traitement asséchant contre l'acné. Elle complète la routine sans se substituer au traitement dermatologique prescrit.",
    ],
    positionnement: [
      "Comme la version en pot plus grand de la même référence, elle répond à un besoin d'hydratation réparatrice pour peau acnéique fragilisée, plutôt qu'à un usage préventif généraliste. Une peau acnéique sans fragilisation particulière peut se tourner vers une crème Effaclar plus classique.",
    ],
    faq: [
      {
        question: "Quelle différence avec l'autre contenance disponible ?",
        reponse:
          "La formule reste identique ; seul le format change, ce petit conditionnement convenant à un test ou à un usage plus occasionnel.",
      },
      {
        question: "Peut-elle s'utiliser en complément d'un gel-crème anti-imperfections ?",
        reponse:
          "Oui, elle peut s'ajouter en cas de besoin d'hydratation supplémentaire, en particulier sur les zones les plus sèches ou fragilisées par un traitement en cours.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-lotion-astringente-200ml",
    identite: [
      "Cette lotion astringente Effaclar s'utilise après le nettoyage pour resserrer visuellement l'aspect des pores et retirer les derniers résidus de sébum sur une peau à tendance grasse. Elle prépare la peau aux soins ciblés appliqués ensuite, sans remplacer le nettoyant moussant qui reste la première étape. Sa formule, plus asséchante qu'une simple eau micellaire, se réserve aux peaux qui tolèrent bien ce type de lotion sans tiraillement excessif.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "astringente, resserre l'aspect des pores" },
      { libelle: "Type de peau", valeur: "grasse" },
      { libelle: "Usage", valeur: "après le nettoyage, sur coton" },
    ],
    usage: [
      "Appliquer sur coton après le nettoyage habituel, sur le visage en évitant le contour des yeux, matin et/ou soir. Elle prépare la peau avant l'application d'un sérum ou d'une crème ciblée contre les imperfections.",
    ],
    positionnement: [
      "Plus asséchante qu'une lotion tonique classique, elle convient aux peaux vraiment grasses qui tolèrent ce type de geste. Sur une peau mixte à sèche, elle risque de provoquer des tiraillements et une lotion plus douce reste préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Sur peau très grasse, un usage quotidien matin et soir est généralement toléré. En cas de tiraillement, mieux vaut réduire à une application par jour.",
      },
      {
        question: "Remplace-t-elle le nettoyant moussant ?",
        reponse:
          "Non, elle s'utilise après le nettoyage comme une étape complémentaire, sur coton, pas comme un nettoyant à elle seule.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-mat",
    identite: [
      "Effaclar Mat est une crème hydratante matifiante pensée pour les peaux grasses qui brillent en cours de journée. Sa texture régule la production de sébum visible en surface tout en apportant l'hydratation nécessaire, sans laisser de film gras ni obstruer les pores. Elle convient à un usage quotidien, seule ou comme base avant maquillage pour prolonger la tenue d'un fond de teint sur une peau à tendance grasse.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "hydratant matifiant" },
      { libelle: "Texture", valeur: "crème non grasse" },
      { libelle: "Type de peau", valeur: "grasse, brillante" },
      { libelle: "Usage", valeur: "matin, seule ou sous maquillage" },
    ],
    usage: [
      "Appliquer le matin sur peau propre, en couche fine, seule ou avant le maquillage pour en prolonger la tenue. Un usage régulier limite la sensation de brillance qui réapparaît en cours de journée sur peau grasse.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, souvent trop riche pour une peau grasse, celle-ci privilégie l'effet matifiant sans sacrifier l'hydratation. Sur une peau sèche ou normale, cette texture matifiante n'apporte pas l'avantage recherché et peut sembler insuffisamment nourrissante.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, c'est l'un de ses usages courants, son effet matifiant aidant à prolonger la tenue du fond de teint sur une peau qui brille facilement.",
      },
      {
        question: "Convient-elle aux peaux mixtes ?",
        reponse:
          "Oui, en particulier sur la zone T plus grasse, où l'effet matifiant est le plus utile, quitte à compléter par un soin plus hydratant sur les joues si elles restent sèches.",
      },
    ],
  },
  {
    slug: "la-roche-posay-effaclar-mat-creme-matifiante",
    identite: [
      "Cette crème matifiante Effaclar Mat régule l'aspect brillant des peaux grasses tout en apportant l'hydratation nécessaire au quotidien. Sa texture légère ne laisse pas de film gras et limite la sensation de peau qui luit en cours de journée, un inconfort fréquent sur peau grasse ou mixte à tendance grasse. Elle s'utilise comme une crème de jour classique, sous maquillage ou seule selon les besoins.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "hydratant matifiant" },
      { libelle: "Texture", valeur: "crème légère, non grasse" },
      { libelle: "Type de peau", valeur: "grasse à mixte" },
      { libelle: "Usage", valeur: "quotidien, matin" },
    ],
    usage: [
      "Appliquer le matin sur peau propre, en couche fine sur l'ensemble du visage ou seulement sur la zone T selon les besoins. Peut précéder un maquillage pour en prolonger la tenue sur peau grasse.",
    ],
    positionnement: [
      "Comme les autres soins matifiants de la gamme Effaclar, elle vise le confort d'une peau qui brille sans pour autant assécher. Elle reste moins pertinente sur une peau normale ou sèche, qui n'a pas besoin de cet effet régulateur.",
    ],
    faq: [
      {
        question: "Cette crème dessèche-t-elle la peau à force d'être matifiante ?",
        reponse:
          "Non, elle reste une crème hydratante ; son effet matifiant agit sur l'aspect brillant en surface sans priver la peau de l'hydratation dont elle a besoin.",
      },
      {
        question: "Peut-on l'utiliser uniquement sur la zone T ?",
        reponse:
          "Oui, c'est un usage courant sur peau mixte, en réservant cette texture matifiante aux zones qui brillent et une crème plus hydratante sur le reste du visage.",
      },
    ],
  },
  {
    slug: "la-roche-posay-glycolic-b5-serum",
    identite: [
      "Ce sérum associe acide glycolique et vitamine B5 pour renouveler la surface de la peau, avec une action sur le grain de peau irrégulier, le teint terne et les marques de fatigue. L'acide glycolique, un alpha-hydroxyacide reconnu pour son effet exfoliant, agit ici en synergie avec la vitamine B5 apaisante, ce qui limite l'inconfort parfois associé à ce type d'actif utilisé seul. Il s'adresse à une peau qui tolère déjà les exfoliants chimiques, en usage progressif plutôt qu'intensif dès le départ.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide glycolique, vitamine B5" },
      { libelle: "Texture", valeur: "sérum" },
      { libelle: "Fonction", valeur: "renouvellement cutané, éclat du teint" },
      { libelle: "Usage", valeur: "application le soir, en usage progressif" },
    ],
    usage: [
      "Appliquer le soir sur peau propre et sèche, en commençant par quelques applications par semaine avant d'augmenter la fréquence selon la tolérance. Une protection solaire le lendemain matin reste nécessaire, l'acide glycolique augmentant la sensibilité de la peau au soleil.",
    ],
    positionnement: [
      "Il cible le renouvellement cutané et l'éclat, un axe différent d'un simple sérum hydratant. Il ne convient pas à une première utilisation d'exfoliant chimique sans progressivité, ni aux peaux déjà irritées par un rétinol ou un autre actif fort utilisé en parallèle.",
    ],
    faq: [
      {
        question: "Peut-on l'associer au rétinol ?",
        reponse:
          "Mieux vaut éviter de les utiliser le même soir, au risque d'irriter la peau. Les alterner, un soir sur deux par exemple, limite ce risque tout en gardant les deux bénéfices.",
      },
      {
        question: "Faut-il une protection solaire après son utilisation ?",
        reponse:
          "Oui, comme tout acide exfoliant, il augmente la sensibilité de la peau au soleil : une protection solaire le lendemain matin est nécessaire tant que ce sérum est utilisé.",
      },
    ],
  },
  {
    slug: "la-roche-posay-hyalu-b5-aquagel-spf30-50ml",
    identite: [
      "Cet aquagel de la gamme Hyalu B5 associe hydratation à l'acide hyaluronique et protection solaire SPF30 dans une texture gel légère, pensée pour repulper visuellement la peau tout en la protégeant des UV responsables du vieillissement cutané. Il s'inscrit dans l'axe raffermissant de la gamme, où l'hydratation en profondeur contribue à une peau d'apparence plus ferme et moins marquée par les ridules de déshydratation. Sa texture gel, non grasse, convient à un usage quotidien, y compris sous maquillage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide hyaluronique" },
      { libelle: "Indice de protection", valeur: "SPF30" },
      { libelle: "Texture", valeur: "gel léger, non gras" },
      { libelle: "Usage", valeur: "quotidien, sous maquillage possible" },
    ],
    usage: [
      "Appliquer le matin sur peau propre, en dernière étape avant le maquillage. Sa texture gel légère permet un usage quotidien sans sensation de lourdeur, avec une protection SPF30 qui reste modérée face à une exposition prolongée.",
    ],
    positionnement: [
      "Son SPF30 en fait un soin de jour hydratant et protecteur pour un usage urbain quotidien, pas une protection solaire pour la plage. Pour une exposition prolongée au soleil, une protection SPF50 dédiée reste nécessaire en complément ou en remplacement.",
    ],
    faq: [
      {
        question: "Ce SPF30 suffit-il en cas d'exposition prolongée ?",
        reponse:
          "Non, il convient à un usage quotidien urbain. En cas d'exposition prolongée au soleil, une protection SPF50 plus résistante à l'eau et à la transpiration est préférable.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse:
          "Oui, sa texture gel légère et non grasse pénètre rapidement, ce qui permet d'appliquer un maquillage par-dessus une fois le produit absorbé.",
      },
    ],
  },
  {
    slug: "la-roche-posay-hydreane-bb-creme-spf-20",
    identite: [
      "L'Hydréane BB Crème unit l'hydratation propre à la gamme Hydréane, pensée pour les peaux sensibles ou déshydratées, à une légère coloration qui unifie le teint et une protection solaire SPF20. Elle permet de remplacer la crème de jour et une base de teint légère en un seul geste, avec une couvrance discrète plutôt qu'un maquillage complet. Sa formule reste pensée pour le confort d'une peau sensible, avec un fini naturel plutôt qu'un effet mat ou couvrant marqué.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF20" },
      { libelle: "Fonction", valeur: "hydratant teinté" },
      { libelle: "Type de peau", valeur: "sensible, déshydratée" },
      { libelle: "Usage", valeur: "jour, en remplacement de la crème et d'un teint léger" },
    ],
    usage: [
      "Appliquer le matin sur peau propre, en dernière étape avant une éventuelle poudre. Elle convient aux jours où une couvrance légère suffit ; pour une exposition solaire prolongée, son SPF20 reste insuffisant et demande une protection solaire dédiée en complément.",
    ],
    positionnement: [
      "Elle se distingue d'un fond de teint classique par son axe hydratant pensé pour peau sensible, avec une couvrance volontairement discrète. Pour une couvrance plus marquée ou une protection solaire plus élevée, un fond de teint dédié sur une protection solaire séparée reste plus adapté.",
    ],
    faq: [
      {
        question: "Son SPF20 suffit-il en été ?",
        reponse:
          "Pour un usage urbain quotidien il apporte une protection de base, mais en cas d'exposition prolongée au soleil, une protection SPF50 dédiée reste nécessaire en complément.",
      },
      {
        question: "Convient-elle aux peaux sensibles ?",
        reponse:
          "Oui, c'est l'axe principal de la gamme Hydréane, pensée pour le confort des peaux sensibles ou déshydratées, avec une formule qui limite les risques de réaction cutanée.",
      },
    ],
  },
  {
    slug: "la-roche-posay-kerium-shp-doux-extreme-400ml",
    identite: [
      "Ce shampooing Kerium Doux Extrême s'adresse aux cuirs chevelus sensibles qui nécessitent des lavages fréquents, avec une formule pensée pour limiter l'irritation propre à cet usage répété. Il nettoie sans agresser le cuir chevelu ni fragiliser davantage des cheveux déjà sollicités par des lavages rapprochés, tout en restant doux pour les yeux en cas de contact accidentel. Le grand format de 400 ml correspond à un usage familial ou à une fréquence de lavage élevée.",
    ],
    faits: [
      { libelle: "Fonction", valeur: "nettoyant doux, usage fréquent" },
      { libelle: "Type de cuir chevelu", valeur: "sensible" },
      { libelle: "Usage", valeur: "lavages rapprochés, toute la famille" },
      { libelle: "Format", valeur: "400 ml, usage régulier" },
    ],
    usage: [
      "Faire mousser sur cheveux mouillés, masser le cuir chevelu puis rincer abondamment. Sa formule douce permet des lavages rapprochés, y compris quotidiens, sans la sensation de tiraillement d'un shampooing plus classique utilisé aussi souvent.",
    ],
    positionnement: [
      "Comparé à un shampooing standard, celui-ci privilégie la tolérance du cuir chevelu en cas de lavages fréquents plutôt qu'un effet volumateur ou réparateur ciblé. Pour un besoin précis, pellicules ou chute par exemple, un shampooing spécifique de la gamme Kerium ou Spécifique reste plus indiqué.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui, c'est justement l'usage pour lequel il est formulé, avec une tolérance pensée pour des lavages fréquents sans agresser le cuir chevelu au fil des jours.",
      },
      {
        question: "Convient-il à toute la famille ?",
        reponse:
          "Sa formule douce le permet généralement, mais un besoin précis comme des pellicules ou un cuir chevelu très sec gagnera à s'orienter vers un shampooing Kerium plus ciblé.",
      },
    ],
  },
];
