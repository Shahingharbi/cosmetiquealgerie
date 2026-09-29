import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "babyliss-paris-i-pro-230-stream-lisseur",
    identite: [
      "Le I-PRO 230 Steam est un lisseur à vapeur de la gamme BaByliss Paris conçu pour lisser en limitant l'agression thermique des plaques classiques. Les plaques flottantes chauffent jusqu'à 230°C et diffusent un jet de vapeur au passage de la mèche, ce qui aide à discipliner le cheveu tout en apportant un fini plus brillant qu'un lissage à sec seul. Il convient aux cheveux épais ou frisés qui demandent une température élevée pour tenir, et se positionne comme un appareil de lissage fréquent plutôt qu'un outil de coiffage occasionnel.",
    ],
    faits: [
      { libelle: "Température max", valeur: "230°C" },
      { libelle: "Technologie", valeur: "Plaques céramique et jet de vapeur" },
      { libelle: "Type de cheveux", valeur: "Épais ou frisés" },
      { libelle: "Usage", valeur: "Lissage fréquent" },
    ],
    usage: [
      "S'utilise sur cheveu sec et démêlé, mèche par mèche, en un seul passage grâce à l'effet vapeur qui limite le besoin de repasser plusieurs fois. Un protecteur thermique reste recommandé avant chaque utilisation à cette température. Il se combine mal avec un brushing déjà très tirant, qui aurait déjà asséché la fibre avant le passage du lisseur.",
    ],
    positionnement: [
      "Face à un lisseur simple plaques, l'ajout de la vapeur aide à réduire le nombre de passages et le stress thermique répété sur la fibre. Il convient moins bien aux cheveux fins ou colorés fragilisés, pour lesquels une température aussi élevée reste risquée même avec l'assistance vapeur, et un réglage plus bas ferait mieux l'affaire.",
    ],
    faq: [
      {
        question: "Le jet de vapeur remplace-t-il le protecteur thermique ?",
        reponse: "Non. La vapeur aide à discipliner la mèche et limite les passages répétés, mais elle ne protège pas la fibre de la chaleur des plaques à 230°C. Un spray ou sérum thermo-protecteur reste nécessaire avant chaque lissage, en particulier sur cheveu coloré ou déjà fragilisé.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse: "C'est un appareil pensé pour un usage fréquent grâce à l'effet lissant de la vapeur, mais un usage quotidien à 230°C reste éprouvant pour la fibre sur le long terme. Alterner avec des jours sans chaleur ou baisser la température sur cheveu fin limite la casse.",
      },
    ],
  },
  {
    slug: "babyliss-pro-brosse-ceramique-22mm",
    identite: [
      "La brosse céramique 22 mm de la gamme BaByliss Pro est une brosse ronde à picots, au corps en céramique qui retient la chaleur du sèche-cheveux pour accélérer la mise en forme. Son diamètre réduit, 22 mm, la destine aux mèches courtes, frange, racines ou cheveux courts à mi-longs, là où une brosse plus large manque de prise. Elle sert à galber la pointe et donner du volume à la racine pendant le brushing, davantage qu'à lisser une longueur entière.",
    ],
    faits: [
      { libelle: "Diamètre", valeur: "22 mm" },
      { libelle: "Matière", valeur: "Céramique" },
      { libelle: "Usage conseillé", valeur: "Frange et cheveux courts à mi-longs" },
      { libelle: "Gamme", valeur: "BaByliss Pro" },
    ],
    usage: [
      "S'utilise pendant le brushing, sèche-cheveux en main, en enroulant une mèche fine autour du corps de la brosse puis en accompagnant le flux d'air chaud avant de fixer au flux froid. Elle se manie mal sur cheveu très long, où son faible diamètre oblige à répéter l'opération sur de nombreuses petites sections plutôt que de traiter la longueur en une fois.",
    ],
    positionnement: [
      "Face à une brosse plus large, elle apporte davantage de volume et de galbe sur les mèches courtes, mais elle rallonge le brushing sur une chevelure longue et épaisse où une brosse de plus grand diamètre reste plus efficace. Elle convient bien à qui veut structurer une frange ou des racines, moins à qui cherche à lisser toute la longueur rapidement.",
    ],
    faq: [
      {
        question: "Cette brosse remplace-t-elle un lisseur ?",
        reponse: "Non, elle sert à mettre en forme pendant le séchage, pas à lisser une fois le cheveu sec. Elle donne du volume et du mouvement à la racine et à la frange grâce à la chaleur qu'elle retient, mais un lissage net et durable reste l'affaire d'un fer à lisser.",
      },
      {
        question: "Pourquoi choisir un diamètre de 22 mm plutôt qu'un plus large ?",
        reponse: "Un petit diamètre offre plus de prise et de tension sur des mèches courtes ou une frange, là où une brosse large glisserait sans structurer le cheveu. Sur cheveux longs en revanche, il oblige à travailler par petites sections, ce qui allonge le temps de brushing.",
      },
    ],
  },
  {
    slug: "babyliss-pro-wet-dry-keratine-bab",
    identite: [
      "Le Wet & Dry Keratine de BaByliss Pro est un shampoing formulé autour de la kératine, protéine qui compose naturellement la fibre capillaire, pour aider à combler l'aspect des zones abîmées et redonner de la tenue aux longueurs fragilisées. Il se positionne comme un soin lavant plutôt qu'un simple nettoyant, destiné aux cheveux mis à rude épreuve par la chaleur ou la coloration, avec l'objectif de renforcer visuellement la fibre plutôt que de la réparer en profondeur, ce qu'aucun shampoing ne peut faire à lui seul.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Kératine" },
      { libelle: "Type de cheveux", valeur: "Abîmés ou fragilisés" },
      { libelle: "Format", valeur: "Shampoing" },
      { libelle: "Gamme", valeur: "BaByliss Pro" },
    ],
    usage: [
      "S'applique sur cheveu mouillé, en faisant mousser sur le cuir chevelu puis en laissant glisser sur les longueurs, avant rinçage. Un soin après-shampoing complète utilement le geste sur cheveu très sec, la kératine du shampoing agissant surtout en surface pendant le temps de pose court du lavage.",
    ],
    positionnement: [
      "Face à un shampoing neutre, il apporte un geste ciblé pour les cheveux abîmés par les outils chauffants ou la coloration. Il convient moins à un cheveu fin et sans dommage particulier, sur lequel un soin en kératine peut alourdir la fibre sans bénéfice visible.",
    ],
    faq: [
      {
        question: "La kératine du shampoing répare-t-elle le cheveu ?",
        reponse: "Un shampoing agit sur un temps de pose très court et ne peut pas reconstruire la fibre en profondeur. La kératine qu'il contient aide surtout à lisser la surface de la cuticule et à améliorer la tenue apparente, ce qui limite l'aspect abîmé sans réparer les cheveux déjà cassés.",
      },
      {
        question: "Convient-il à un usage quotidien ?",
        reponse: "Il est pensé pour les cheveux fragilisés plutôt que pour un lavage de tous les jours. Sur cheveu sain, un espacement des lavages reste préférable pour ne pas alourdir la fibre avec des actifs dont elle n'a pas besoin.",
      },
    ],
  },
  {
    slug: "balea-2-klingen-einweg-rasierer-rasage-doux-precis-10-stuck",
    identite: [
      "Ce lot de dix rasoirs jetables Balea à deux lames est pensé pour un rasage d'appoint simple. Chaque rasoir associe une double lame à une bande lubrifiante qui réduit la friction au passage, pour un résultat net sans viser la finition d'un rasoir à cartouche multi-lames plus élaboré. Le format jetable en fait un produit de dépannage ou de voyage plutôt qu'un rasoir destiné à un usage quotidien prolongé.",
    ],
    faits: [
      { libelle: "Nombre de lames", valeur: "2" },
      { libelle: "Contenu", valeur: "10 rasoirs jetables" },
      { libelle: "Usage", valeur: "Rasage du visage ou du corps" },
      { libelle: "Type", valeur: "Rasoir jetable, non rechargeable" },
    ],
    usage: [
      "S'utilise sur peau mouillée, avec une mousse ou un gel de rasage, en passant dans le sens du poil pour limiter l'irritation. Chaque rasoir a une durée de vie courte, la lame s'émousse après quelques utilisations, ce qui invite à en changer dès que le passage devient moins net plutôt que d'insister.",
    ],
    positionnement: [
      "Face à un rasoir à cartouches rechargeables, ce lot jetable s'use plus vite et lame moins finement sur une pilosité dense. Il convient bien à un usage occasionnel ou en dépannage, moins à qui rase une barbe épaisse tous les jours et cherche une glisse constante dans la durée.",
    ],
    faq: [
      {
        question: "Peut-on réutiliser un rasoir Balea plusieurs fois ?",
        reponse: "Oui, quelques fois, tant que la lame reste nette et que la bande lubrifiante n'est pas usée. Au-delà, le passage devient moins précis et le risque de tiraillement augmente, il vaut alors mieux passer au rasoir suivant du lot plutôt que de forcer sur une lame émoussée.",
      },
      {
        question: "Convient-il pour un rasage du corps en plus du visage ?",
        reponse: "Oui, sa double lame et sa bande lubrifiante conviennent aussi bien aux jambes ou au torse qu'au visage. Sur une pilosité dense ou une peau sensible, plusieurs passages légers valent mieux qu'un seul passage appuyé pour limiter les rougeurs.",
      },
    ],
  },
  {
    slug: "bath-et-body-works-creme-corps-wild-sand",
    identite: [
      "La crème de corps Wild Sand fait partie des soins parfumés Bath & Body Works, une gamme construite autour de fragrances marquées plutôt que d'une routine de soin technique. Wild Sand est une senteur boisée et musquée, portée par du bois de santal et des notes ambrées, loin des parfums sucrés ou fruités qui dominent le reste de la marque. La texture est celle d'une crème riche, destinée à hydrater le corps tout en laissant un sillage présent sur la peau.",
    ],
    faits: [
      { libelle: "Type de produit", valeur: "Crème de corps parfumée" },
      { libelle: "Famille olfactive", valeur: "Boisée et musquée" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Gamme", valeur: "Bath & Body Works" },
    ],
    usage: [
      "S'applique sur peau propre, de préférence après la douche, en quantité généreuse sur les zones sujettes au dessèchement comme les coudes et les jambes. Le sillage étant marqué, mieux vaut éviter de le superposer à un parfum ou à un autre soin fortement parfumé, au risque de brouiller les deux senteurs plutôt que de les faire cohabiter.",
    ],
    positionnement: [
      "Face à un lait corps neutre, elle apporte un parfum durable qui prolonge la sensation de soin après l'application, ce qui plaît à qui cherche une fragrance boisée au quotidien. Elle convient moins à une peau très sensible ou à qui préfère un soin sans parfum, la charge odorante pouvant irriter ou simplement ne pas convenir en usage rapproché avec un parfum porté par ailleurs.",
    ],
    faq: [
      {
        question: "Le parfum Wild Sand tient-il aussi longtemps qu'un parfum classique ?",
        reponse: "Une crème parfumée tient généralement moins longtemps qu'une eau de parfum, sa concentration en parfum étant plus faible, mais elle laisse un sillage plus discret et continu sur la journée grâce au film hydratant qui la retient sur la peau.",
      },
      {
        question: "Peut-on la porter avec un parfum différent ?",
        reponse: "C'est possible mais les deux senteurs se mélangent sur la peau, ce qui peut brouiller un parfum aux notes fines. Pour préserver un parfum porté par ailleurs, mieux vaut choisir une crème neutre ou attendre que la fragrance de la crème s'estompe avant de vaporiser un parfum.",
      },
    ],
  },
  {
    slug: "batiste-shp-sec-cherry",
    identite: [
      "Le shampoing sec Batiste parfum Cherry est une poudre en aérosol qui absorbe l'excès de sébum à la racine sans passage sous l'eau. Il redonne du volume et un aspect propre aux racines grasses entre deux shampoings classiques, avec une note fruitée de cerise qui masque l'odeur du cuir chevelu le temps de la journée. Ce n'est pas un soin lavant, il ne nettoie pas le cheveu en profondeur, il en masque temporairement les signes de gras.",
    ],
    faits: [
      { libelle: "Format", valeur: "Poudre en aérosol" },
      { libelle: "Parfum", valeur: "Cerise" },
      { libelle: "Usage", valeur: "Racines grasses, entre deux shampoings" },
      { libelle: "Rinçage", valeur: "Non nécessaire" },
    ],
    usage: [
      "Se vaporise à environ 20 cm des racines, on laisse poser une minute puis on masse ou on brosse pour répartir et retirer l'excédent de poudre. Un excès de produit ou un brossage insuffisant laisse un voile blanc visible, surtout sur cheveux foncés, il vaut donc mieux vaporiser peu et par petites zones plutôt qu'en une seule fois sur toute la tête.",
    ],
    positionnement: [
      "Face à un shampoing sec sans parfum, celui-ci ajoute une note fruitée qui plaît pour un usage en journée, mais il se combine mal avec un parfum de cheveux différent, les deux odeurs se superposant sans se marier. Il dépanne bien entre deux lavages, il ne remplace pas un shampoing pour un cuir chevelu réellement sale.",
    ],
    faq: [
      {
        question: "Le shampoing sec nettoie-t-il vraiment les cheveux ?",
        reponse: "Non, il absorbe le sébum en surface et redonne un aspect propre visuellement, mais il ne lave pas le cheveu ni le cuir chevelu. Les impuretés restent présentes sous la poudre, c'est pourquoi il ne peut remplacer un shampoing classique au-delà de quelques jours d'affilée.",
      },
      {
        question: "Comment éviter le voile blanc dans les cheveux foncés ?",
        reponse: "Il faut vaporiser à bonne distance, en petites zones, puis bien brosser ou masser pour répartir et faire tomber l'excédent de poudre. Sur cheveux très foncés, laisser poser un peu plus longtemps avant de brosser aide aussi la poudre à mieux se fondre.",
      },
    ],
  },
  {
    slug: "batiste-shp-sec-sweet-summer",
    identite: [
      "Le shampoing sec Batiste Sweet Summer reprend le même principe de poudre en aérosol que le reste de la gamme, avec un parfum estival plus doux et fruité que la version Cherry. Il absorbe le sébum à la racine et redonne du volume aux cheveux plats entre deux shampoings, sans nettoyer le cheveu en profondeur. Sa place est celle d'un dépannage rapide plutôt que d'un soin lavant du quotidien.",
    ],
    faits: [
      { libelle: "Format", valeur: "Poudre en aérosol" },
      { libelle: "Parfum", valeur: "Sweet Summer" },
      { libelle: "Usage", valeur: "Racines grasses, entre deux shampoings" },
      { libelle: "Rinçage", valeur: "Non nécessaire" },
    ],
    usage: [
      "S'utilise comme tout shampoing sec, vaporisé à distance des racines, on laisse agir puis on brosse pour répartir et éliminer l'excès de poudre. Sur racines très grasses, une seconde application légère peut être nécessaire, mieux vaut alors superposer deux passages fins qu'un seul passage abondant qui laisserait des traces.",
    ],
    positionnement: [
      "Face à la version Cherry de la même gamme, Sweet Summer propose une note plus douce et moins marquée, ce qui convient à qui veut un effet discret plutôt qu'un parfum affirmé. Il rend le même service technique sur les racines grasses et ne convient pas davantage à un cuir chevelu qui a besoin d'un vrai lavage.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse: "Un usage quotidien prolongé n'est pas recommandé, la poudre s'accumule sur le cuir chevelu et peut à la longue l'assécher ou l'irriter. Il est plutôt pensé pour dépanner un ou deux jours entre deux shampoings classiques.",
      },
      {
        question: "Convient-il aux cheveux colorés ?",
        reponse: "Oui, il n'agit qu'en surface et n'est pas formulé pour modifier la couleur. Il est toutefois préférable de bien brosser après application pour éviter qu'un résidu de poudre ne ternisse visuellement l'éclat de la couleur, en particulier sur des tons clairs.",
      },
    ],
  },
  {
    slug: "bbrose-coloration-superior-preference-4-brown",
    identite: [
      "Bbrose Superior Preference 4 Brown est une coloration permanente pour cheveux, dans une teinte 4 brun, conçue pour couvrir les cheveux blancs et unifier la couleur naturelle sur toute la chevelure. Comme toute coloration permanente en boîte, elle associe une base d'oxydation à un révélateur à mélanger avant application, pour un résultat qui tient jusqu'à la repousse plutôt qu'un effet temporaire qui part au lavage.",
    ],
    faits: [
      { libelle: "Teinte", valeur: "4 Brown (brun)" },
      { libelle: "Type de coloration", valeur: "Permanente, à l'oxydation" },
      { libelle: "Couverture", valeur: "Cheveux blancs" },
      { libelle: "Gamme", valeur: "Superior Preference" },
    ],
    usage: [
      "Se prépare en mélangeant la crème colorante au révélateur fourni dans le kit, puis s'applique sur cheveu sec, mèche par mèche, en respectant le temps de pose indiqué sur la notice. Un test de sensibilité 48 heures avant l'application reste recommandé, comme pour toute coloration permanente, et il ne faut pas la combiner avec un autre produit oxydant sur la même séance.",
    ],
    positionnement: [
      "Face à une coloration temporaire ou semi-permanente, elle offre une couverture des cheveux blancs plus complète et plus durable, au prix d'une repousse visible avec le temps qui demande un entretien régulier. Elle convient moins à qui veut tester une teinte sans engagement ou à un cheveu déjà très fragilisé par des colorations répétées, sur lequel une base moins agressive serait plus prudente.",
    ],
    faq: [
      {
        question: "Faut-il faire un test avant d'appliquer la coloration ?",
        reponse: "Oui, un test de sensibilité sur une petite zone de peau au moins 48 heures avant l'application est recommandé pour toute coloration permanente, afin de détecter une éventuelle réaction avant de l'appliquer sur l'ensemble de la chevelure.",
      },
      {
        question: "Combien de temps la couleur tient-elle avant la repousse ?",
        reponse: "Une coloration permanente couvre le cheveu jusqu'à la racine et ne part pas au lavage, mais la repousse naturelle redevient visible après quelques semaines à la racine, ce qui demande une retouche régulière pour garder un résultat uniforme.",
      },
    ],
  },
  {
    slug: "bbrose-coloration-superior-preference-7-31-hazel-matt-blond",
    identite: [
      "Bbrose Superior Preference 7.31 Hazel Matt Blond est une coloration permanente dans un ton blond noisette mat, pensée pour neutraliser les reflets dorés ou cuivrés indésirables sur cheveu blond ou châtain clair. Comme les autres teintes de la gamme, elle se prépare en mélangeant crème colorante et révélateur avant application, pour une couverture durable des cheveux blancs plutôt qu'un effet temporaire.",
    ],
    faits: [
      { libelle: "Teinte", valeur: "7.31 Hazel Matt Blond" },
      { libelle: "Type de coloration", valeur: "Permanente, à l'oxydation" },
      { libelle: "Reflet", valeur: "Mat, neutralise les tons dorés" },
      { libelle: "Couverture", valeur: "Cheveux blancs" },
    ],
    usage: [
      "S'applique comme toute coloration en boîte, mélange de la crème et du révélateur, application mèche par mèche sur cheveu sec, temps de pose selon la notice puis rinçage. Elle ne se combine pas avec une décoloration faite le même jour, la fibre ayant besoin de repos entre les deux étapes pour limiter la casse.",
    ],
    positionnement: [
      "Face à une teinte dorée classique, le fond mat de ce 7.31 convient à qui veut atténuer les reflets chauds naturels du blond ou du châtain clair. Il convient moins à qui recherche au contraire un blond lumineux et doré, pour lequel une teinte à reflets chauds serait plus indiquée.",
    ],
    faq: [
      {
        question: "Que signifie le chiffre 7.31 sur la boîte ?",
        reponse: "Le premier chiffre, 7, indique la hauteur de ton, ici un blond moyen. Les chiffres après le point, 31, indiquent les reflets, doré et cendré dans ce cas, qui donnent au résultat final son aspect noisette mat plutôt qu'un blond doré classique.",
      },
      {
        question: "Peut-on l'utiliser juste après une décoloration ?",
        reponse: "Il vaut mieux laisser reposer le cheveu quelques jours entre une décoloration et une coloration permanente, les deux étant des procédés oxydants qui fragilisent la fibre. Appliquer les deux le même jour augmente le risque de casse et d'irrégularité de couleur.",
      },
    ],
  },
  {
    slug: "beauty-bio-miracleuse-anti-ance-50ml",
    identite: [
      "La Miracleuse de Beauty & Bio est un soin ciblé anti-imperfections, présenté en format 50 ml dans le rayon des sérums visage. Son nom annonce une action sur l'acné et les boutons, destinée à une peau à tendance grasse ou sujette aux imperfections plutôt qu'à une peau sèche ou mature. Sans documentation détaillée sur sa composition, ce soin se situe dans la catégorie des sérums correcteurs de peau à problèmes, un segment où l'attente principale porte sur l'aspect visuel du grain de peau.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Type de peau", valeur: "Peau à imperfections" },
      { libelle: "Format", valeur: "Sérum" },
    ],
    usage: [
      "S'applique sur peau propre, en petite quantité, de préférence le soir sur les zones concernées avant la crème de nuit habituelle. Il se combine mal avec un autre soin exfoliant fort utilisé la même routine, le cumul d'actifs ciblant l'imperfection pouvant irriter une peau déjà sensibilisée par l'acné.",
    ],
    positionnement: [
      "Face à une crème hydratante générale, ce sérum cible spécifiquement les zones à imperfections plutôt que l'ensemble du visage. Il convient moins à une peau sèche ou réactive sans problème d'imperfections, pour laquelle un soin ciblé anti-acné n'apporte pas de bénéfice et peut au contraire assécher inutilement.",
    ],
    faq: [
      {
        question: "Ce sérum peut-il remplacer un traitement contre l'acné sévère ?",
        reponse: "Non. Un soin cosmétique aide à limiter l'aspect des imperfections légères et à unifier le grain de peau, mais une acné marquée ou inflammatoire relève d'un avis médical. Ce type de sérum se situe dans une routine d'entretien, pas dans un traitement dermatologique.",
      },
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse: "Un usage le soir suffit généralement pour ce type de soin ciblé, la peau se régénérant davantage pendant la nuit. En cas de tiraillement ou de sensation d'inconfort, mieux vaut espacer les applications plutôt que d'insister deux fois par jour.",
      },
    ],
  },
  {
    slug: "beauty-bio-renaissance-serum-collagene-30ml",
    identite: [
      "Le Sérum Renaissance de Beauty & Bio est un soin anti-âge en format 30 ml, formulé autour du collagène, une protéine qui structure naturellement la peau et dont la production ralentit avec l'âge. Il vise à améliorer l'aspect de fermeté et de rebondi du visage, sans pour autant reconstituer le collagène naturel de la peau, ce qu'aucun soin appliqué en surface ne permet. Sa place est celle d'un sérum de routine anti-âge, à utiliser sous une crème plutôt qu'en soin unique.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Collagène" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Usage", valeur: "Soin anti-âge" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau propre, avant la crème de jour ou de nuit qui vient sceller l'hydratation. Il se combine mal avec un rétinol ou un acide exfoliant fort appliqué au même moment, l'association pouvant irriter une peau mature déjà plus fine et réactive.",
    ],
    positionnement: [
      "Face à une crème anti-âge classique, ce sérum apporte une texture plus légère et pénétrante, pensée pour préparer la peau avant la crème plutôt que pour hydrater seule en surface. Il convient moins à une peau jeune sans signe de relâchement, pour laquelle un soin hydratant simple suffit largement.",
    ],
    faq: [
      {
        question: "Le collagène du sérum pénètre-t-il vraiment dans la peau ?",
        reponse: "Les molécules de collagène sont trop grosses pour traverser la barrière cutanée en profondeur. Appliqué en sérum, il agit surtout en surface, où il aide à limiter la sensation de tiraillement et à améliorer l'aspect lisse de la peau, sans remplacer le collagène produit naturellement par l'organisme.",
      },
      {
        question: "À partir de quel âge ce type de sérum est-il utile ?",
        reponse: "Il n'y a pas de règle stricte, mais ce type de soin s'adresse généralement à une peau qui montre déjà des signes de relâchement ou de perte de fermeté, souvent à partir de la trentaine passée, plutôt qu'à une peau jeune sans besoin anti-âge particulier.",
      },
    ],
  },
  {
    slug: "beauty-bio-thamila-creme-hydratante-peau-grasse-40g",
    identite: [
      "La crème Thamila de Beauty & Bio est une crème hydratante visage formulée pour peau grasse, en format 40 g. Sa vocation est d'apporter de l'hydratation sans renforcer la brillance ni obstruer les pores, ce qui suppose une texture plus légère qu'une crème riche classique. Elle se destine à une peau qui produit beaucoup de sébum mais reste, comme toute peau, susceptible de se déshydrater si elle n'est pas hydratée du tout.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "40 g" },
      { libelle: "Type de peau", valeur: "Peau grasse" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Texture", valeur: "Légère, non comédogène" },
    ],
    usage: [
      "S'applique matin et soir sur visage nettoyé, en fine couche, seule ou sous un protecteur solaire le jour. Elle se combine mal avec une crème riche et occlusive appliquée par-dessus, qui annulerait l'intérêt d'une texture légère pensée pour peau grasse.",
    ],
    positionnement: [
      "Face à une crème hydratante générique, elle apporte une texture pensée spécifiquement pour ne pas alourdir une peau grasse. Elle convient moins à une peau sèche, pour laquelle une texture aussi légère ne suffit pas à combler le manque de lipides et laisse une sensation de tiraillement dans la journée.",
    ],
    faq: [
      {
        question: "Une peau grasse a-t-elle vraiment besoin d'être hydratée ?",
        reponse: "Oui. Grasse et déshydratée ne s'excluent pas, une peau peut produire beaucoup de sébum tout en manquant d'eau. Sauter l'hydratation pousse souvent la peau à produire encore plus de sébum pour compenser, d'où l'intérêt d'une crème légère plutôt que d'aucune crème du tout.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse: "Sa texture légère, pensée pour ne pas alourdir une peau grasse, se prête bien à une application sous maquillage. Il est conseillé de laisser quelques minutes de pose avant d'appliquer un fond de teint, le temps que la crème pénètre complètement.",
      },
    ],
  },
  {
    slug: "beauty-bio-peeling-30ml",
    identite: [
      "The Peeling de Beauty & Bio est un soin exfoliant en format 30 ml, classé parmi les sérums anti-imperfections. Son rôle est d'aider à éliminer les cellules mortes en surface pour affiner le grain de peau et limiter l'aspect terne, une action mécanique ou chimique légère plutôt qu'un geste de nettoyage profond. Il se positionne comme un soin d'appoint, à intégrer ponctuellement dans une routine plutôt qu'à utiliser tous les jours.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Type de produit", valeur: "Soin exfoliant" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Fréquence conseillée", valeur: "Usage ponctuel" },
    ],
    usage: [
      "S'applique sur peau propre et sèche, en couche fine, en évitant le contour des yeux, puis se rince ou se laisse poser selon la texture. Il se combine mal avec un autre exfoliant ou un rétinol utilisé le même jour, le cumul d'actifs exfoliants pouvant fragiliser la barrière cutanée et provoquer des rougeurs.",
    ],
    positionnement: [
      "Face à un gommage mécanique à grains, ce type de peeling agit de façon plus homogène sur l'ensemble du visage sans frotter la peau. Il convient moins à une peau très réactive ou déjà irritée, pour laquelle même une exfoliation douce peut accentuer l'inconfort plutôt que l'apaiser.",
    ],
    faq: [
      {
        question: "À quelle fréquence utiliser un peeling visage ?",
        reponse: "Un ou deux usages par semaine suffisent généralement pour ce type de soin, l'exfoliation étant un geste ponctuel et non quotidien. Une utilisation trop fréquente peut fragiliser la barrière cutanée au lieu d'améliorer l'aspect du grain de peau.",
      },
      {
        question: "Peut-on s'exposer au soleil juste après ?",
        reponse: "Après un peeling, la peau est temporairement plus sensible au soleil, une protection solaire est donc recommandée dans les jours qui suivent, même en dehors d'un usage estival, pour éviter les taches ou l'irritation liées à l'exposition.",
      },
    ],
  },
  {
    slug: "beauty-bio-mujer-creme-anti-age-40g",
    identite: [
      "La crème Mujer de Beauty & Bio est une crème de jour anti-âge en format 40 g, pensée pour une peau qui commence à montrer des signes de relâchement ou de perte d'éclat. Sa texture de crème de jour la destine à une application sous le maquillage ou seule le matin, avec pour objectif d'améliorer l'aspect de fermeté et d'hydratation de la peau au fil de la journée plutôt qu'un effet immédiat et spectaculaire.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "40 g" },
      { libelle: "Usage", valeur: "Crème de jour anti-âge" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Gamme", valeur: "Beauty & Bio" },
    ],
    usage: [
      "S'applique le matin sur visage nettoyé, en mouvements légers du centre vers l'extérieur du visage, avant une protection solaire en journée. Elle se combine mal avec un acide exfoliant fort appliqué juste avant, qui rendrait la peau plus sensible aux ingrédients actifs de la crème.",
    ],
    positionnement: [
      "Face à une crème hydratante simple, elle cible en plus l'aspect du vieillissement cutané, fermeté et éclat, ce qui la destine à une peau mature plutôt qu'à une peau jeune. Elle convient moins à une peau très jeune sans signe de relâchement, pour laquelle une crème hydratante standard répond mieux au besoin réel.",
    ],
    faq: [
      {
        question: "À partir de quand intégrer une crème anti-âge le matin ?",
        reponse: "Il n'existe pas d'âge universel, c'est l'apparition des premiers signes, perte de fermeté ou d'éclat, qui justifie ce type de soin plutôt qu'une hydratation simple. Beaucoup l'intègrent à partir de la trentaine, mais cela dépend surtout de l'état réel de la peau.",
      },
      {
        question: "Faut-il appliquer un écran solaire par-dessus ?",
        reponse: "Oui, une crème anti-âge de jour ne remplace pas une protection solaire dédiée. L'exposition au soleil sans protection reste l'un des principaux facteurs de vieillissement cutané visible, ce qui rend ce geste complémentaire indispensable même par temps couvert.",
      },
    ],
  },
  {
    slug: "beauty-bio-ombrelle-ecran-total-spf40-40g",
    identite: [
      "Ombrelle Écran Total de Beauty & Bio est une protection solaire SPF40 en format 40 g, destinée à limiter les effets du rayonnement UV sur la peau. Un indice 40 offre un niveau de protection élevé, adapté à une exposition prolongée ou à une peau sensible au soleil, sans pour autant dispenser de renouveler l'application régulièrement. Sa texture crème la rend utilisable aussi bien en usage quotidien qu'en exposition plus soutenue.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF40" },
      { libelle: "Contenance", valeur: "40 g" },
      { libelle: "Zone", valeur: "Visage et corps" },
      { libelle: "Texture", valeur: "Crème" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau propre, environ 20 à 30 minutes avant l'exposition, et se renouvelle toutes les deux heures ou après une baignade et une transpiration importante. Elle se combine mal avec une application trop fine qui, en réduisant la quantité de produit réellement déposée, abaisse mécaniquement le niveau de protection réel en dessous de l'indice annoncé.",
    ],
    positionnement: [
      "Face à un SPF plus faible, ce SPF40 convient mieux à une exposition prolongée ou à une peau claire et sensible au soleil. Il convient moins à un usage urbain très léger au quotidien, où un indice plus modéré et une texture plus fine peuvent suffire sans alourdir la peau.",
    ],
    faq: [
      {
        question: "SPF40 suffit-il pour une journée à la plage ?",
        reponse: "C'est un indice de protection élevé, mais aucun écran solaire ne protège toute la journée sans renouvellement. Il faut réappliquer toutes les deux heures et après chaque baignade ou séance de transpiration importante pour maintenir un niveau de protection proche de celui annoncé.",
      },
      {
        question: "Peut-on l'utiliser sous le maquillage ?",
        reponse: "Oui, une crème solaire s'applique en dernière étape de la routine du matin, avant le maquillage, en laissant quelques minutes de pose. Elle peut légèrement modifier la tenue d'un fond de teint très fluide, un fond de teint plus couvrant s'accommode généralement mieux de cette étape.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-light-on-serum-centella-vita-c",
    identite: [
      "Light on Serum Centella + Vita C de Beauty of Joseon associe un extrait de centella asiatica, reconnu pour son effet apaisant, à un dérivé de vitamine C pensé pour illuminer le teint sans l'agressivité de la vitamine C pure. La marque, connue pour revisiter des ingrédients traditionnels coréens dans des formules courtes, propose ici un sérum à la texture fluide et légère, d'où le nom Light on, destiné à unifier l'éclat du teint tout en respectant les peaux sensibles ou réactives.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Centella asiatica et vitamine C" },
      { libelle: "Texture", valeur: "Fluide, légère" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Gamme", valeur: "Beauty of Joseon" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, avant la crème hydratante, en quelques gouttes réparties sur l'ensemble du visage. Utilisé le matin, il se complète utilement d'une protection solaire, la vitamine C rendant la peau plus photosensible dans les jours qui suivent une utilisation régulière.",
    ],
    positionnement: [
      "Face à un sérum de vitamine C pure, plus concentré mais aussi plus irritant, ce Light on Serum mise sur une association plus douce grâce à la centella. Il convient bien aux peaux sensibles en recherche d'éclat, moins à qui cherche un effet éclaircissant rapide et marqué, pour lequel une formule plus concentrée agirait plus vite.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser avec un autre sérum vitamine C plus concentré ?",
        reponse: "Ce n'est pas nécessaire, cumuler deux sources de vitamine C n'apporte pas de bénéfice supplémentaire et augmente le risque d'irritation. Mieux vaut choisir l'un ou l'autre selon la sensibilité de la peau plutôt que de superposer les deux dans la même routine.",
      },
      {
        question: "Convient-il aux peaux sensibles ?",
        reponse: "Oui, c'est l'un des arguments du produit, la centella asiatica a une réputation apaisante qui compense la vitamine C, plus irritante seule. Un test sur une petite zone reste toutefois conseillé avant une première utilisation complète, comme pour tout nouveau soin.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-red-bean-refreshing-pore-mask",
    identite: [
      "Le Red Bean Refreshing Pore Mask de Beauty of Joseon est un masque à base de poudre de haricot rouge, un ingrédient traditionnellement utilisé en Corée pour son effet matifiant et purifiant. Sa texture d'argile absorbe l'excès de sébum et aide à resserrer visuellement l'aspect des pores dilatés, ce qui en fait un soin ciblé pour peau grasse ou mixte plutôt qu'un masque hydratant pour peau sèche.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Poudre de haricot rouge (red bean)" },
      { libelle: "Type de peau", valeur: "Peau grasse ou mixte" },
      { libelle: "Format", valeur: "Masque à rincer" },
      { libelle: "Zone", valeur: "Visage, zone T notamment" },
    ],
    usage: [
      "S'applique en couche fine sur peau nettoyée, en évitant le contour des yeux, on laisse poser une dizaine de minutes jusqu'à ce que le masque commence à sécher, puis on rince à l'eau tiède. Il se combine mal avec un exfoliant fort utilisé juste avant, le cumul pouvant assécher excessivement une peau déjà exposée à l'argile du masque.",
    ],
    positionnement: [
      "Face à un masque hydratant en tissu, ce masque d'argile cible spécifiquement l'excès de sébum et l'aspect des pores plutôt que l'hydratation. Il convient moins à une peau sèche ou déjà tiraillée, pour laquelle l'effet matifiant de l'argile accentuerait la sensation d'inconfort plutôt que de l'améliorer.",
    ],
    faq: [
      {
        question: "À quelle fréquence utiliser ce masque ?",
        reponse: "Un à deux usages par semaine suffisent généralement pour ce type de masque purifiant, en particulier sur la zone T plus grasse. Une utilisation trop fréquente peut assécher la peau au-delà du besoin réel, même sur une peau à tendance grasse.",
      },
      {
        question: "Peut-on l'appliquer seulement sur certaines zones du visage ?",
        reponse: "Oui, c'est même conseillé sur une peau mixte, l'appliquer uniquement sur la zone T, front, nez, menton, et laisser les joues plus sèches sans masque ou avec un soin plus hydratant, permet d'adapter le geste à chaque zone du visage.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-calming-serum-green-tea-panthenol-30ml",
    identite: [
      "Le Calming Serum de Beauty of Joseon associe thé vert et panthénol, deux ingrédients recherchés pour leur effet apaisant sur les peaux irritées ou sensibilisées. Le thé vert apporte un aspect antioxydant, le panthénol aide à limiter la sensation d'inconfort et à améliorer l'aspect de confort cutané. Ce sérum en 30 ml vise avant tout à calmer une peau réactive, rougissante ou fatiguée par la pollution ou les soins actifs, plutôt qu'à traiter une problématique de peau grasse ou de taches.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Thé vert et panthénol" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Type de peau", valeur: "Sensible ou réactive" },
      { libelle: "Effet recherché", valeur: "Apaisant" },
    ],
    usage: [
      "S'applique matin et soir sur peau nettoyée, en quelques gouttes, avant la crème hydratante habituelle. Il se combine bien après un soin exfoliant ou un rétinol pour aider à limiter l'inconfort qui peut suivre ces actifs, mais mal en cumul avec un autre soin très actif appliqué au même moment, la peau ayant alors besoin de repos plutôt que d'une nouvelle couche d'actifs.",
    ],
    positionnement: [
      "Face à un sérum ciblant l'éclat ou les taches, ce Calming Serum se concentre sur le confort de la peau, ce qui le rend complémentaire plutôt que concurrent des autres sérums de la routine. Il convient moins à qui cherche un effet visible et rapide sur le teint, pour lequel un sérum à la vitamine C ou aux acides serait plus indiqué.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser après un soin au rétinol ?",
        reponse: "Oui, c'est même un usage courant, ce type de sérum apaisant aide à limiter l'inconfort et la sécheresse qui peuvent suivre l'application de rétinol, en particulier lors des premières semaines d'utilisation où la peau s'habitue à cet actif.",
      },
      {
        question: "Ce sérum convient-il à une peau à tendance grasse ?",
        reponse: "Oui, sa texture reste légère et il n'est pas formulé pour hydrater lourdement. Il s'adresse avant tout à l'état réactif de la peau, rougeurs ou inconfort, plutôt qu'à son type, sec ou gras, ce qui le rend utilisable sur la plupart des peaux sensibilisées.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-centella-vit-c-light-on-serum",
    identite: [
      "Ce Light On Serum de Beauty of Joseon combine centella asiatica et vitamine C dans une texture fluide pensée pour apporter de l'éclat sans agresser la peau. La centella, largement utilisée en soin coréen pour son effet apaisant, contrebalance l'action parfois irritante de la vitamine C seule. Il s'inscrit dans les soins visage coréens misant sur des formules courtes et des actifs traditionnels revisités, plutôt que sur de longues listes d'ingrédients de synthèse.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Centella asiatica et vitamine C" },
      { libelle: "Texture", valeur: "Fluide, légère" },
      { libelle: "Origine", valeur: "Soin visage coréen" },
      { libelle: "Gamme", valeur: "Beauty of Joseon" },
    ],
    usage: [
      "S'utilise en quelques gouttes sur peau nettoyée, matin ou soir, avant la crème hydratante. En usage matinal, une protection solaire complète utilement la routine, la vitamine C augmentant la sensibilité de la peau à l'exposition solaire dans les jours suivants.",
    ],
    positionnement: [
      "Face aux sérums de vitamine C pure, plus puissants mais plus irritants, ce sérum mise sur la douceur grâce à la centella, ce qui le rend accessible aux peaux sensibles en quête d'éclat. Il convient moins à qui recherche un effet éclaircissant rapide et marqué sur des taches installées, pour lequel un actif plus concentré serait nécessaire.",
    ],
    faq: [
      {
        question: "Ce sérum peut-il remplacer une crème hydratante ?",
        reponse: "Non, un sérum complète une routine mais ne remplace pas la crème qui vient sceller l'hydratation en surface. Il s'applique avant la crème, sur peau encore légèrement humide, pour une meilleure absorption des actifs.",
      },
      {
        question: "Quelle est la différence avec un sérum de vitamine C classique ?",
        reponse: "La vitamine C pure agit plus fort et plus vite sur l'éclat, mais elle irrite davantage certaines peaux. Ici, la présence de centella asiatica adoucit cette action, ce qui donne un résultat plus progressif mais mieux toléré au quotidien.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-creme-solaire-hydratante-relief-sun-rice-probiotics",
    identite: [
      "La Relief Sun de Beauty of Joseon est un écran solaire emblématique de la marque, formulé avec de l'extrait de riz et des probiotiques fermentés pour apporter un fini lumineux sans effet blanc ni film gras. Malgré son nom hydratant, sa texture fluide et sa finition satinée en ont fait une référence appréciée y compris sur peau grasse ou mixte, là où beaucoup d'écrans solaires classiques laissent un film épais et brillant.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Actif principal", valeur: "Extrait de riz et probiotiques" },
      { libelle: "Texture", valeur: "Fluide, fini satiné, sans trace blanche" },
      { libelle: "Type de peau", valeur: "Grasse ou mixte" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, en quantité suffisante pour couvrir tout le visage, et se renouvelle après plusieurs heures d'exposition ou après transpiration. Elle se combine mal avec une crème hydratante déjà très riche appliquée juste avant, qui alourdirait sa texture volontairement légère.",
    ],
    positionnement: [
      "Face à un écran solaire classique plus épais, elle se distingue par une texture qui ne laisse ni trace blanche ni effet gras, ce qui explique sa popularité même sur peau grasse. Elle convient moins à une peau très sèche en climat froid, pour laquelle une texture plus riche apporterait un meilleur confort en complément.",
    ],
    faq: [
      {
        question: "Cette crème solaire convient-elle vraiment à la peau grasse malgré son nom hydratant ?",
        reponse: "Oui, c'est l'une des raisons de sa popularité, sa texture fluide et son fini satiné ne laissent pas de film gras, contrairement à ce que son nom hydratant pourrait laisser penser. Elle reste néanmoins un écran solaire, pas un soin hydratant à part entière.",
      },
      {
        question: "Laisse-t-elle des traces blanches sur peau mate ou foncée ?",
        reponse: "C'est l'un de ses points forts, sa formule est connue pour ne pas laisser de trace blanche visible, contrairement à de nombreux écrans solaires minéraux. Elle convient donc bien aux peaux mates ou foncées en recherche d'un fini naturel.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-creme-solaire-relief-sun-spf-50-rice-probiotics",
    identite: [
      "La Relief Sun SPF50 Rice + Probiotics de Beauty of Joseon associe extrait de riz et ferments probiotiques dans une formule solaire pensée pour un fini léger et lumineux. C'est l'un des produits les plus connus de la marque en dehors de la Corée, notamment pour sa texture fine qui ne laisse ni trace blanche ni film gras à la différence de nombreux écrans solaires classiques.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Actif principal", valeur: "Extrait de riz et probiotiques" },
      { libelle: "Texture", valeur: "Fluide, non grasse" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, généreusement sur l'ensemble du visage, et se renouvelle en cas d'exposition prolongée. Elle se combine bien sous le maquillage grâce à sa texture fine, mais mal avec une crème hydratante très riche appliquée juste en dessous, qui annulerait sa légèreté.",
    ],
    positionnement: [
      "Face à un écran solaire épais et blanchissant, elle se distingue par un fini quasi invisible sur la peau, ce qui la rend appréciée y compris par les peaux mates ou foncées. Elle convient moins à une peau très sèche en hiver, pour laquelle une texture plus riche resterait plus confortable au quotidien.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sous le maquillage ?",
        reponse: "Oui, sa texture fine et son absorption rapide en font une bonne base avant le maquillage. Il est conseillé de laisser quelques minutes de pose après application pour que la peau l'absorbe complètement avant le fond de teint.",
      },
      {
        question: "Faut-il en réappliquer une seconde couche dans la journée ?",
        reponse: "Comme tout écran solaire, sa protection diminue avec le temps et l'exposition. Une réapplication après plusieurs heures au soleil ou après transpiration reste nécessaire pour maintenir un niveau de protection proche du SPF50 annoncé.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-dynasty-cream-50ml",
    identite: [
      "La Dynasty Cream de Beauty of Joseon est une crème riche, formulée autour du ginseng et de l'eau de son de riz, deux ingrédients associés dans la tradition coréenne aux soins nourrissants et fortifiants de la peau. Sa texture plus dense que les sérums légers de la marque la destine aux peaux sèches ou matures en recherche de confort, en soin de jour comme de nuit, plutôt qu'aux peaux grasses pour lesquelles elle serait trop riche.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Ginseng et eau de son de riz" },
      { libelle: "Contenance", valeur: "50 ml" },
      { libelle: "Type de peau", valeur: "Sèche ou mature" },
      { libelle: "Texture", valeur: "Riche, nourrissante" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, en couche généreuse, seule ou après un sérum plus léger. Elle se combine mal avec un autre soin très riche appliqué par-dessus, le cumul de textures denses pouvant laisser une sensation de film lourd sur la peau plutôt qu'un confort réel.",
    ],
    positionnement: [
      "Face aux sérums fluides du reste de la gamme, elle apporte une texture plus enveloppante pensée pour le confort des peaux sèches. Elle convient moins à une peau grasse ou en climat chaud et humide, pour laquelle une texture aussi riche risque d'alourdir le teint plutôt que de l'améliorer.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle à une peau grasse ?",
        reponse: "Elle est plutôt pensée pour les peaux sèches ou matures en recherche de confort et de nutrition. Sur peau grasse, sa texture riche peut alourdir le teint et favoriser les brillances, un soin plus léger de la même marque conviendrait mieux.",
      },
      {
        question: "Peut-on l'utiliser en été ?",
        reponse: "C'est possible mais sa texture riche est davantage pensée pour les périodes où la peau a besoin de plus de nutrition, comme l'hiver ou un climat sec. En été ou sur peau mixte, une application plus fine ou réservée au soir reste plus confortable.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-ecrant-stick-50-spf-18g",
    identite: [
      "L'écran solaire en stick SPF50+ de Beauty of Joseon reprend le format pratique du stick, à appliquer directement sur la peau sans les mains, pour une protection solaire nomade en format 18 g. Ce format se prête particulièrement aux retouches en journée ou aux zones ciblées comme le visage ou le décolleté, là où une crème en pot ou en tube demande davantage de manipulation.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Contenance", valeur: "18 g" },
      { libelle: "Format", valeur: "Stick" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "Se glisse dans un sac pour une réapplication facile en journée, on fait glisser le stick directement sur la peau puis on tapote du bout des doigts pour uniformiser. Il se combine mal avec un maquillage très poudré déjà en place, le geste risquant de l'altérer, mieux vaut alors réappliquer sur une peau nue ou en fine couche.",
    ],
    positionnement: [
      "Face à une crème solaire classique en tube, ce format stick facilite nettement la réapplication en journée sans repasser par la salle de bain. Il convient moins à une première application du matin sur tout le visage, où une crème permet une répartition plus homogène et plus rapide sur une grande surface.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser pour réappliquer la protection solaire par-dessus le maquillage ?",
        reponse: "Oui, c'est l'un des principaux intérêts du format stick, il permet de réappliquer une protection solaire en journée sans démaquiller. Un tapotement léger du bout des doigts, plutôt qu'un frottement appuyé, préserve mieux le maquillage en place.",
      },
      {
        question: "18 g, est-ce suffisant pour une utilisation régulière ?",
        reponse: "Le format stick est pensé pour les retouches ponctuelles plutôt que pour l'application initiale complète du visage, sa contenance est donc cohérente avec cet usage d'appoint. Pour une première application quotidienne généreuse, une crème solaire en tube reste plus adaptée à l'usage.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-ginseng-sun-serum-spf50",
    identite: [
      "Le Ginseng Sun Serum de Beauty of Joseon associe une protection SPF50 à une texture de sérum plutôt qu'à une crème classique, avec du ginseng comme ingrédient phare, réputé dans la tradition coréenne pour son effet tonifiant sur la peau. Sa texture fluide laisse un fini plus lumineux et dewy qu'un écran solaire mat, ce qui en fait une option pour qui recherche un teint éclatant en plus de la protection UV.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Actif principal", valeur: "Ginseng" },
      { libelle: "Texture", valeur: "Sérum fluide, fini lumineux" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique en dernière étape de la routine du matin, en quantité suffisante pour couvrir le visage, avant un éventuel maquillage léger. Il se combine mal avec une poudre matifiante appliquée juste après en grande quantité, qui viendrait annuler le fini lumineux recherché par la texture sérum.",
    ],
    positionnement: [
      "Face à un écran solaire mat, ce sérum solaire mise sur un fini lumineux plutôt que sur un effet mat, ce qui plaît à qui aime un teint dewy. Il convient moins à une peau très grasse en climat chaud, pour laquelle un écran solaire matifiant comme le Matte Sun Stick de la même marque conviendrait mieux.",
    ],
    faq: [
      {
        question: "Ce sérum solaire remplace-t-il un sérum hydratant classique ?",
        reponse: "Non, sa fonction première reste la protection UV, même si sa texture apporte un fini lumineux agréable. Un sérum hydratant dédié reste utile en dessous si la peau a besoin d'un apport en hydratation plus soutenu que ce que ce produit apporte seul.",
      },
      {
        question: "Convient-il aux peaux grasses malgré son fini lumineux ?",
        reponse: "Il convient surtout aux peaux normales à sèches en recherche d'éclat. Sur peau grasse, le fini dewy peut accentuer la sensation de brillance en cours de journée, une version plus matifiante de la gamme solaire de la marque serait alors plus adaptée.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-glow-deep-serum-rice-alpha-arbutin-30ml",
    identite: [
      "Le Glow Deep Serum de Beauty of Joseon associe extrait de riz et alpha arbutine dans une formule pensée pour unifier le teint et atténuer visuellement l'aspect des taches pigmentaires. L'alpha arbutine est un actif reconnu en cosmétique pour son effet éclaircissant ciblé, tandis que l'extrait de riz apporte la texture douce caractéristique de la gamme. Ce sérum en 30 ml s'adresse à une peau marquée par des taches ou un teint irrégulier plutôt qu'à une peau au grain déjà uniforme.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Riz et alpha arbutine" },
      { libelle: "Contenance", valeur: "30 ml" },
      { libelle: "Usage", valeur: "Anti-taches, unification du teint" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, en quelques gouttes, avant la crème hydratante. En usage matinal, une protection solaire quotidienne reste indispensable, l'alpha arbutine perdant une partie de son intérêt sans protection contre les UV qui entretiennent les taches.",
    ],
    positionnement: [
      "Face à un sérum hydratant général, il cible spécifiquement l'aspect des taches et du teint irrégulier, avec un effet progressif plutôt qu'immédiat. Il convient moins à une peau sans problème de pigmentation, pour laquelle un sérum plus généraliste répond mieux au besoin réel sans cibler un problème absent.",
    ],
    faq: [
      {
        question: "En combien de temps voit-on un effet sur les taches ?",
        reponse: "Ce type de sérum agit progressivement, sur plusieurs semaines d'utilisation régulière, il ne fait pas disparaître les taches du jour au lendemain. La régularité d'application et l'association avec une protection solaire quotidienne conditionnent largement le résultat visible sur le teint.",
      },
      {
        question: "Faut-il absolument une protection solaire avec ce sérum ?",
        reponse: "Oui, c'est même l'un des points les plus importants, sans protection solaire, les taches pigmentaires ont tendance à se reformer sous l'effet des UV, ce qui limiterait fortement l'intérêt d'un sérum éclaircissant utilisé sans ce complément.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-green-plum-refreshing-toner-150ml",
    identite: [
      "Le Green Plum Refreshing Toner de Beauty of Joseon est une lotion tonique à base de prune verte, un fruit acidulé utilisé ici pour son effet rafraîchissant et légèrement revitalisant sur la peau. Sa texture fluide et son pH proche de celui de la peau en font un soin d'hydratation en première étape de routine, après le nettoyage, plutôt qu'un soin exfoliant ou traitant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Extrait de prune verte" },
      { libelle: "Contenance", valeur: "150 ml" },
      { libelle: "Format", valeur: "Lotion tonique" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique après le nettoyage, au coton ou dans les mains, en tapotant légèrement pour faire pénétrer, avant le sérum et la crème. Il se combine bien avec la plupart des routines coréennes en plusieurs étapes, mais mal avec un tonique déjà très acide utilisé au même moment, le cumul pouvant déséquilibrer inutilement le pH de la peau.",
    ],
    positionnement: [
      "Face à une lotion exfoliante aux acides, ce tonique reste un soin d'hydratation douce plutôt qu'un soin actif. Il convient bien à une routine quotidienne pour préparer la peau, moins à qui cherche un effet exfoliant ou anti-imperfections marqué, pour lequel un tonique aux AHA ou BHA serait plus indiqué.",
    ],
    faq: [
      {
        question: "Ce tonique exfolie-t-il la peau ?",
        reponse: "Non, cette version reste un tonique hydratant et rafraîchissant, sans visée exfoliante. Pour un effet exfoliant, la marque propose une version spécifique aux acides AHA et BHA, à ne pas confondre avec ce tonique d'usage quotidien.",
      },
      {
        question: "À quel moment de la routine l'utiliser ?",
        reponse: "Il s'applique juste après le nettoyage du visage, avant le sérum et la crème hydratante. C'est une étape de préparation de la peau, destinée à l'humidifier légèrement avant les soins suivants pour en améliorer l'absorption.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-green-plum-refreshing-toner-aha-bha-150ml",
    identite: [
      "Cette version du Green Plum Refreshing Toner de Beauty of Joseon ajoute des acides AHA et BHA à la base de prune verte, ce qui en fait un tonique à visée exfoliante plutôt qu'un simple soin d'hydratation. Les AHA agissent en surface pour affiner le grain de peau, les BHA pénètrent davantage dans le pore pour aider à limiter les imperfections, une combinaison qui cible un teint terne et des pores engorgés.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "AHA et BHA, extrait de prune verte" },
      { libelle: "Contenance", valeur: "150 ml" },
      { libelle: "Usage", valeur: "Exfoliant, affine le grain de peau" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique après le nettoyage, au coton, en évitant le contour des yeux, en commençant par un usage espacé de deux à trois fois par semaine avant d'augmenter progressivement si la peau le tolère bien. Il se combine mal avec un rétinol ou un autre exfoliant utilisé le même soir, le cumul d'acides pouvant irriter fortement la peau.",
    ],
    positionnement: [
      "Face à la version simple sans acides de la même gamme, celle-ci cible activement l'affinement du grain de peau et les pores, avec un effet plus marqué mais aussi plus susceptible d'irriter. Elle convient moins à une peau sensible ou déjà fragilisée, pour laquelle la version sans AHA/BHA resterait plus adaptée à un usage quotidien.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse: "Il vaut mieux commencer par deux à trois usages par semaine et observer la tolérance de la peau avant d'augmenter la fréquence. Un usage quotidien d'emblée risque d'irriter la peau, en particulier si elle n'est pas habituée aux acides exfoliants.",
      },
      {
        question: "Faut-il une protection solaire avec ce tonique ?",
        reponse: "Oui, les AHA rendent la peau plus sensible au soleil. Une protection solaire quotidienne devient d'autant plus nécessaire pendant les périodes d'utilisation de ce tonique, pour éviter les taches ou une sensibilité accrue de la peau exposée.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-jello-skin-massage-cream-200ml",
    identite: [
      "La Jello Skin Massage Cream de Beauty of Joseon est une crème-gel au grand format de 200 ml, pensée pour un massage du visage plutôt qu'une simple application. Sa texture souple et rebondissante, qui lui donne son nom Jello, glisse facilement sous les doigts, ce qui en fait un soin agréable en fin de routine du soir pour détendre les traits tout en hydratant la peau.",
    ],
    faits: [
      { libelle: "Contenance", valeur: "200 ml" },
      { libelle: "Texture", valeur: "Gel-crème souple, glissante" },
      { libelle: "Usage", valeur: "Massage visage, hydratation" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'utilise en couche généreuse le soir, en réalisant des mouvements de massage du centre du visage vers l'extérieur pour favoriser la détente et la pénétration du soin. Elle se combine mal avec une routine déjà très chargée en soins actifs juste avant, sa texture étant pensée pour glisser plutôt que pour être appliquée sur une peau encore collante d'un sérum non absorbé.",
    ],
    positionnement: [
      "Face à une crème hydratante classique, elle apporte en plus un usage ritualisé de massage grâce à sa texture glissante, ce qui en fait un soin autant sensoriel que fonctionnel. Elle convient moins à qui cherche une crème riche et occlusive pour peau très sèche en hiver, sa texture restant plus légère qu'une crème nourrissante classique.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser comme crème de jour ?",
        reponse: "Oui, même si son usage en massage la destine plutôt au soir, rien n'empêche de l'utiliser le matin en application plus rapide. Sa texture légère et non grasse se prête aux deux moments de la routine.",
      },
      {
        question: "Le format 200 ml est-il pensé pour le visage uniquement ?",
        reponse: "Son grand format en fait un produit d'usage prolongé pour le visage, mais sa texture souple convient aussi à un massage du cou ou du décolleté, des zones souvent oubliées dans la routine mais tout aussi exposées au relâchement cutané.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-matte-sun-stick-spf50-pa-18g",
    identite: [
      "Le Matte Sun Stick de Beauty of Joseon est un écran solaire en format stick, SPF50+, formulé pour un fini mat plutôt que lumineux, à l'inverse de la Relief Sun de la même marque. Ce format compact de 18 g se prête aux retouches en journée et convient particulièrement aux peaux grasses ou sujettes à la brillance, pour qui un fini mat reste préférable à un effet dewy en cours de journée.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+ PA" },
      { libelle: "Contenance", valeur: "18 g" },
      { libelle: "Fini", valeur: "Mat" },
      { libelle: "Type de peau", valeur: "Grasse ou mixte" },
    ],
    usage: [
      "S'applique en glissant directement le stick sur la peau puis en tapotant pour uniformiser, en première application du matin ou en retouche sur peau déjà maquillée. Il se combine mal avec une crème hydratante très riche appliquée juste avant, qui contrarierait le fini mat recherché par cette version de la gamme solaire.",
    ],
    positionnement: [
      "Face à la Relief Sun de la même marque, au fini lumineux, ce stick cible spécifiquement les peaux grasses en quête d'un effet mat toute la journée. Il convient moins à une peau sèche, pour laquelle l'effet mat peut accentuer une sensation de tiraillement plutôt que d'apporter du confort.",
    ],
    faq: [
      {
        question: "Quelle différence avec la Relief Sun de la même marque ?",
        reponse: "La Relief Sun mise sur un fini lumineux et dewy, tandis que ce Matte Sun Stick vise un effet mat, pensé pour les peaux grasses ou les climats chauds et humides où la brillance revient vite dans la journée.",
      },
      {
        question: "Peut-on l'utiliser pour retoucher la protection solaire sur du maquillage ?",
        reponse: "Oui, le format stick facilite justement la réapplication en journée sans démaquiller. Un geste léger, sans frotter, préserve mieux le maquillage en place tout en renouvelant la protection UV.",
      },
    ],
  },
  {
    slug: "beauty-of-joseon-red-bean-pore-masque-exfoliant",
    identite: [
      "Ce masque exfoliant Red Bean de Beauty of Joseon reprend la poudre de haricot rouge comme ingrédient central, reconnue dans le soin coréen pour son effet purifiant et légèrement exfoliant sur une peau à pores dilatés. Contrairement à un masque hydratant classique, sa texture est pensée pour absorber l'excès de sébum et affiner visuellement le grain de peau, avec une action douce plutôt qu'un gommage à grains abrasifs.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Poudre de haricot rouge (red bean)" },
      { libelle: "Type de peau", valeur: "Grasse ou à pores dilatés" },
      { libelle: "Usage", valeur: "Masque exfoliant, purifiant" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique en couche fine sur peau nettoyée, on laisse poser quelques minutes puis on rince à l'eau tiède, en massant légèrement pour profiter de l'effet exfoliant doux de la poudre de haricot rouge. Il se combine mal avec un autre exfoliant utilisé le même jour, le cumul pouvant fragiliser une peau déjà sollicitée par l'action purifiante du masque.",
    ],
    positionnement: [
      "Face à un gommage à grains classique, ce masque agit de façon plus douce et homogène sur l'ensemble du visage, avec un effet ciblé sur les pores plutôt qu'un simple décapage de surface. Il convient moins à une peau sèche ou sensible, pour laquelle une exfoliation, même douce, reste susceptible d'accentuer l'inconfort plutôt que de l'apaiser.",
    ],
    faq: [
      {
        question: "Quelle différence avec un gommage classique à grains ?",
        reponse: "Un gommage à grains agit par friction mécanique, tandis que ce masque agit surtout par la poudre de haricot rouge qui absorbe le sébum et affine le grain de peau en surface, avec un geste globalement plus doux pour la peau.",
      },
      {
        question: "Peut-on l'utiliser sur une peau à imperfections ?",
        reponse: "Oui, son effet purifiant sur les pores en fait un soin adapté à une peau sujette aux imperfections, à condition de ne pas l'utiliser trop fréquemment, ce qui pourrait assécher la peau et pousser à une production de sébum supplémentaire.",
      },
    ],
  },
];
