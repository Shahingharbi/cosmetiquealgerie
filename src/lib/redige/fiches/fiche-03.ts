import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "medicube-collagen-jelly-cream-50ml",
    identite: [
      "La Collagen Jelly Cream fait partie de la gamme Collagen de Medicube, une ligne coréenne construite autour du soutien du derme par le collagène. Sa texture est celle d'une gelée souple, plus dense qu'un sérum mais sans le côté occlusif d'une crème riche : elle fond au contact de la peau et laisse un fini rebondi, sans pesanteur.",
      "Elle s'adresse aux peaux qui commencent à perdre en fermeté ou en éclat et cherchent un soin quotidien confortable, matin comme soir, sous maquillage ou seul. Le format jelly la distingue des crèmes classiques de la marque, pensées comme un soin de nuit plus enveloppant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Collagène" },
      { libelle: "Galénique", valeur: "Gelée (jelly-cream)" },
      { libelle: "Gamme", valeur: "Collagen (Medicube)" },
      { libelle: "Moment d'application", valeur: "Matin et soir" },
    ],
    usage: [
      "S'applique en fine couche sur peau nettoyée, en dernière étape avant la protection solaire le matin ou en clôture de routine le soir. La texture gelée pénètre vite et laisse la peau prête à recevoir un maquillage sans effet gras. Elle se combine bien avec un sérum plus fluide appliqué juste avant, et convient aussi bien en soin isolé qu'en complément de la Collagen Night Wrapping Mask utilisée ponctuellement.",
    ],
    positionnement: [
      "Face aux crèmes hydratantes classiques du même rayon, la Collagen Jelly Cream mise sur une sensation immédiate de rebond plutôt que sur une hydratation lourde et prolongée. Elle convient aux peaux normales à mixtes qui veulent un fini frais toute l'année. Les peaux très sèches ou matures qui cherchent une action nourrissante plus riche trouveront sans doute cette texture trop légère pour l'hiver.",
    ],
    faq: [
      {
        question: "La Collagen Jelly Cream peut-elle remplacer une crème de nuit plus riche ?",
        reponse:
          "Elle peut suffire sur peau normale à mixte toute l'année, mais les peaux sèches ou matures gagneront à réserver cette gelée au jour et à utiliser un soin plus riche le soir, en alternance ou en complément selon la saison.",
      },
      {
        question: "Cette crème contient-elle du collagène d'origine animale ?",
        reponse:
          "Le nom de la gamme met en avant le collagène comme axe de formulation, mais l'origine exacte, la forme utilisée et sa concentration ne sont pas des informations communiquées publiquement par la marque au-delà de la liste INCI imprimée sur l'emballage, qu'il convient donc de consulter directement avant achat si ce point est déterminant.",
      },
    ],
  },
  {
    slug: "medicube-collagen-night-wrapping-mask-75ml",
    identite: [
      "La Collagen Night Wrapping Mask est le soin de nuit de la gamme Collagen de Medicube, pensé comme complément à la Collagen Jelly Cream plutôt qu'en remplacement d'un soin quotidien. Sa texture, plus riche qu'une crème classique, se resserre légèrement en séchant sur la peau, créant un effet d'enveloppe (le « wrapping » du nom) qui laisse un fini repulpé au réveil.",
      "Elle s'utilise comme une cure ponctuelle, deux à trois nuits par semaine, plutôt qu'en application quotidienne, pour donner à la peau un temps de repos renforcé après une journée exposée à la pollution ou au maquillage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Collagène" },
      { libelle: "Format", valeur: "Masque de nuit (wrapping)" },
      { libelle: "Fréquence conseillée", valeur: "2 à 3 nuits par semaine" },
      { libelle: "Gamme", valeur: "Collagen (Medicube)" },
    ],
    usage: [
      "S'applique en couche généreuse le soir, sur une peau démaquillée et nettoyée, en dernière étape de la routine, sans rinçage jusqu'au matin. La texture se raffermit légèrement au contact de l'air, d'où l'intérêt de l'étaler rapidement sans repasser plusieurs fois au même endroit. Ne pas superposer avec une crème de nuit classique la même soirée : le masque suffit à lui seul pour l'étape finale.",
    ],
    positionnement: [
      "Comparé aux crèmes de nuit vendues au format quotidien, ce masque se positionne comme un soin d'appoint plus concentré, réservé à quelques nuits par semaine plutôt qu'à un usage systématique. Il convient aux peaux qui recherchent un coup de fouet ponctuel avant un événement ou après une période de fatigue cutanée. Les peaux à tendance grasse ou sujettes aux imperfections risquent de trouver la texture trop riche en usage répété.",
    ],
    faq: [
      {
        question: "Faut-il rincer la Collagen Night Wrapping Mask le matin ?",
        reponse:
          "Non, elle est conçue comme un soin de nuit sans rinçage : elle continue d'agir pendant le sommeil et il suffit de reprendre une routine normale au réveil, en nettoyant le visage comme d'habitude avant d'appliquer les soins du matin.",
      },
      {
        question: "Peut-on l'utiliser tous les soirs comme une crème de nuit classique ?",
        reponse:
          "Ce n'est pas l'usage prévu par sa formulation plus riche : une application quotidienne peut alourdir la peau, en particulier mixte à grasse. Deux à trois soirs par semaine, en alternance avec un soin de nuit plus léger, correspond mieux à sa vocation de cure ponctuelle.",
      },
    ],
  },
  {
    slug: "medicube-kojic-acid-turmeric-niacinamide-serum-30ml",
    identite: [
      "Ce sérum associe trois actifs éclaircissants aux mécanismes différents : l'acide kojique, connu pour freiner la production de mélanine à l'origine des taches, le curcuma, apporté pour son usage traditionnel sur le teint terne, et la niacinamide, qui agit à la fois sur l'aspect des taches et sur le confort de la peau. La texture est fluide, proche d'un sérum aqueux classique, pensée pour pénétrer vite sans laisser de film.",
      "Il s'adresse aux peaux marquées par des taches pigmentaires, des marques post-acné ou un teint irrégulier, davantage qu'aux peaux cherchant une hydratation pure.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide kojique, curcuma, niacinamide" },
      { libelle: "Galénique", valeur: "Sérum fluide" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Usage", valeur: "Teint terne, taches pigmentaires" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, avant la crème hydratante, en évitant le contour des yeux. Une protection solaire quotidienne est recommandée en journée, les actifs éclaircissants rendant la peau plus sensible à l'exposition. Éviter de le superposer le même soir à un exfoliant acide fort ou à un rétinol à forte dose, au risque d'irriter une peau déjà sollicitée par plusieurs actifs à la fois.",
    ],
    positionnement: [
      "Dans le rayon des sérums anti-taches, celui-ci se distingue par la combinaison de trois actifs plutôt qu'un seul, ce qui peut convenir à qui cherche un effet global sur le teint sans multiplier les produits. Il convient moins aux peaux réactives ou très sensibilisées, pour qui l'association de plusieurs actifs sur le même sérum peut être plus irritante qu'un actif unique introduit progressivement.",
    ],
    faq: [
      {
        question: "Ce sérum peut-il s'utiliser avec un rétinol ?",
        reponse:
          "Les deux peuvent cohabiter dans une routine, mais pas nécessairement le même soir au début : l'acide kojique et la niacinamide sont plutôt bien tolérés, mieux vaut cependant introduire le rétinol progressivement et observer la réaction de la peau avant de cumuler systématiquement les deux applications.",
      },
      {
        question: "Combien de temps avant de voir un effet sur les taches ?",
        reponse:
          "Les actifs éclaircissants agissent en général sur plusieurs semaines d'utilisation régulière, sans action immédiate ni définitive sur les taches : ils aident à en atténuer visuellement l'intensité avec le temps, en complément indispensable d'une protection solaire quotidienne.",
      },
    ],
  },
  {
    slug: "medicube-pdrn-lip-sleeping-mask-10g",
    identite: [
      "Ce masque à lèvres de nuit s'appuie sur le PDRN, un actif d'origine marine devenu une signature du soin coréen ces dernières années pour ses propriétés régénérantes revendiquées, associé ici à une texture baume qui forme un film protecteur sur les lèvres pendant le sommeil. Il s'inscrit dans la lignée des masques à lèvres de nuit popularisés par la K-beauty, pensés pour limiter la déshydratation nocturne plutôt que pour un usage en journée sous rouge à lèvres.",
      "Le format 10g, proche d'un pot de baume, se conserve avec un applicateur ou le doigt.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "PDRN" },
      { libelle: "Galénique", valeur: "Baume / masque de nuit" },
      { libelle: "Zone", valeur: "Lèvres" },
      { libelle: "Moment d'application", valeur: "Soir, sans rinçage" },
    ],
    usage: [
      "S'applique en couche généreuse sur les lèvres avant le coucher, idéalement en dernière étape de la routine du soir, sur des lèvres préalablement exfoliées si elles sont très sèches. Il ne remplace pas un baume de jour à porter sous le maquillage : sa texture, plus riche, est pensée pour rester en place plusieurs heures sans être avalée ni essuyée.",
    ],
    positionnement: [
      "Face aux baumes à lèvres classiques à réappliquer plusieurs fois par jour, ce masque de nuit vise un usage unique et concentré, sur le modèle des lip sleeping masks devenus un classique du soin coréen. Il convient à qui cherche un geste ponctuel avant de dormir plutôt qu'un baume de poche à emporter partout, ce dernier usage étant couvert par d'autres formats du rayon.",
    ],
    faq: [
      {
        question: "Peut-on dormir avec sans risque d'en avaler une partie ?",
        reponse:
          "La texture est conçue pour rester en place et non pour fondre immédiatement, mais comme pour tout soin appliqué sur les lèvres, une petite quantité peut être ingérée pendant la nuit : cela ne pose pas de problème particulier pour un usage ponctuel dans le cadre prévu par le produit.",
      },
      {
        question: "Ce masque convient-il aux lèvres très gercées en hiver ?",
        reponse:
          "Oui, c'est précisément l'usage pour lequel ce type de format a été pensé : une application plus riche et prolongée la nuit aide à limiter la sensation de tiraillement au réveil, en complément d'un baume de jour appliqué régulièrement en journée.",
      },
    ],
  },
  {
    slug: "medicube-pdrn-pink-peptide-serum-30ml",
    identite: [
      "Ce sérum associe le PDRN à des peptides, deux familles d'actifs mises en avant dans le soin coréen récent pour leur rôle dans le soutien de la fermeté et de la texture de la peau. La texture est fluide à légèrement rosée, pensée pour une application quotidienne avant la crème, sur un visage nettoyé. Il s'adresse aux peaux qui cherchent un soin repulpant et raffermissant, en complément d'une routine hydratante plutôt qu'en remplacement d'une crème.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "PDRN, peptides" },
      { libelle: "Galénique", valeur: "Sérum fluide" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Gamme", valeur: "PDRN (Medicube)" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau propre, avant la crème hydratante, en quelques gouttes réparties sur l'ensemble du visage puis légèrement tapotées jusqu'à absorption complète. Se combine bien avec une crème riche en cas de peau sèche, et peut s'utiliser seul les jours où la routine est plus courte, sans superposer plusieurs sérums différents le même soir.",
    ],
    positionnement: [
      "Dans la famille des sérums repulpants, celui-ci mise sur la combinaison PDRN et peptides plutôt que sur l'acide hyaluronique seul, plus courant dans ce rayon. Il convient aux peaux matures ou fatiguées en recherche de fermeté, et moins aux peaux jeunes ou grasses pour qui un sérum ciblé sur les pores ou le sébum sera plus pertinent.",
    ],
    faq: [
      {
        question: "Ce sérum peut-il remplacer une crème hydratante ?",
        reponse:
          "Non, un sérum reste un soin concentré à appliquer avant la crème et non à sa place : sur peau sèche en particulier, l'absence de crème après le sérum laisse la peau insuffisamment protégée contre la déshydratation au cours de la journée.",
      },
      {
        question: "Le PDRN et les peptides peuvent-ils s'utiliser avec de la vitamine C ?",
        reponse:
          "Les deux peuvent cohabiter dans une routine, en général en séparant les applications, la vitamine C le matin et ce sérum le soir par exemple, pour limiter le risque d'instabilité entre certains actifs et laisser chacun agir dans de bonnes conditions.",
      },
    ],
  },
  {
    slug: "medicube-triple-collagen-cream-50ml",
    identite: [
      "La Triple Collagen Cream complète la gamme Collagen de Medicube avec une formule pensée comme soin de jour ou de nuit plus riche que la Jelly Cream, sous trois formes de collagène selon l'intitulé du produit. La texture est crémeuse, plus enveloppante que celle de la gelée de la même gamme, et convient aux peaux qui cherchent une sensation nourrissante immédiate plutôt qu'un fini frais.",
      "Elle s'utilise en soin du visage classique, sur peau nettoyée, seule ou en complément d'un sérum appliqué en amont.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Collagène (trois formes selon le nom)" },
      { libelle: "Galénique", valeur: "Crème" },
      { libelle: "Gamme", valeur: "Collagen (Medicube)" },
      { libelle: "Zone", valeur: "Visage" },
    ],
    usage: [
      "S'applique en couche fine à moyenne sur l'ensemble du visage et du cou, matin ou soir selon la préférence, en dernière étape avant la protection solaire le jour. Convient en soin unique sur peau normale à sèche ; les peaux grasses préféreront réserver cette texture plus riche au soir, pour éviter une sensation de lourdeur sous le maquillage en journée.",
    ],
    positionnement: [
      "Face à la Collagen Jelly Cream de la même gamme, cette crème vise les peaux qui cherchent davantage de confort et de nutrition qu'un fini frais et rebondi. Elle convient aux peaux sèches et aux climats secs, et moins aux peaux mixtes à grasses en été, pour qui la version jelly de la gamme reste plus adaptée.",
    ],
    faq: [
      {
        question: "Quelle différence avec la Collagen Jelly Cream de la même marque ?",
        reponse:
          "La Jelly Cream a une texture gel plus légère et un fini frais, pensée pour un usage quotidien toute l'année sur peau normale à mixte. La Triple Collagen Cream est plus riche et nourrissante, mieux adaptée aux peaux sèches ou à un usage hivernal.",
      },
      {
        question: "Cette crème convient-elle sous le maquillage ?",
        reponse:
          "Oui, à condition de laisser le temps à la texture de bien pénétrer avant d'appliquer une base ou un fond de teint, faute de quoi une crème aussi riche peut laisser une sensation grasse et faire glisser le maquillage en cours de journée.",
      },
    ],
  },
  {
    slug: "medicube-txa-niacinamide-15-serum-30ml",
    identite: [
      "Ce sérum combine l'acide tranexamique, un actif reconnu pour cibler les taches pigmentaires et l'hyperpigmentation liée aux marques post-inflammatoires, à une niacinamide dosée à 15 %, une concentration élevée pour ce rayon. La texture est fluide et incolore, pensée pour une pénétration rapide sans film collant.",
      "Il s'adresse en priorité aux peaux marquées par des taches, un teint irrégulier ou des marques résiduelles d'acné, plutôt qu'aux peaux recherchant simplement une hydratation de base.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Acide tranexamique, niacinamide" },
      { libelle: "Concentration", valeur: "Niacinamide 15 %" },
      { libelle: "Galénique", valeur: "Sérum fluide" },
      { libelle: "Usage", valeur: "Taches pigmentaires, teint irrégulier" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, avant la crème, en évitant le contour des yeux. Une protection solaire quotidienne est indispensable en journée pour ne pas annuler l'effet recherché sur les taches. Éviter d'introduire ce sérum en même temps qu'un nouvel exfoliant acide, afin d'isoler la cause en cas de réaction et de laisser la peau s'habituer progressivement à une concentration élevée de niacinamide.",
    ],
    positionnement: [
      "Une concentration de 15 % de niacinamide place ce sérum parmi les formulations les plus dosées du rayon, plus adaptée à une peau déjà habituée à cet actif qu'à une première utilisation. Les peaux sensibles ou novices en actifs gagneront à commencer par une concentration plus basse avant d'envisager ce format, sous peine d'irritation ou de sensation de picotement les premiers jours.",
    ],
    faq: [
      {
        question: "15 % de niacinamide, n'est-ce pas trop concentré pour une peau sensible ?",
        reponse:
          "C'est effectivement une concentration élevée pour ce type d'actif : une peau sensible ou qui découvre la niacinamide pour la première fois a intérêt à tester sur une petite zone avant une application complète, voire à commencer par un produit moins concentré.",
      },
      {
        question: "Ce sérum peut-il remplacer une crème anti-taches ?",
        reponse:
          "Il agit en complément d'une crème plutôt qu'à sa place : un sérum se superpose classiquement sous la crème hydratante du jour ou du soir, et n'a pas vocation à assurer seul l'hydratation ni la protection de la peau sur la journée.",
      },
    ],
  },
  {
    slug: "medicube-zero-foam-cleanser-120g",
    identite: [
      "Le Zero Foam Cleanser s'inscrit dans la gamme Zero de Medicube, construite autour du soin des peaux à pores marqués et sujettes aux imperfections. Le nom indique une formule pensée pour nettoyer sans la mousse abondante des gels classiques, une approche recherchée par les peaux sensibles qui trouvent les nettoyants très moussants asséchants.",
      "Il s'utilise comme première étape de la routine du visage, matin et soir, sur peau sèche ou humide selon la préférence, pour retirer les résidus de la journée ou du soin de nuit précédent.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Zero (Medicube)" },
      { libelle: "Galénique", valeur: "Nettoyant visage" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Usage", valeur: "Peau à pores marqués, sujette aux imperfections" },
    ],
    usage: [
      "S'utilise matin et soir en massant sur visage humide, puis en rinçant à l'eau tiède. Il précède les autres étapes de la routine (sérum, crème) et peut s'associer aux autres produits de la gamme Zero, notamment les patchs ou le masque à l'argile, sans qu'il soit nécessaire de les utiliser ensemble le même jour.",
    ],
    positionnement: [
      "Face aux nettoyants moussants classiques du rayon, celui-ci cible spécifiquement les peaux à pores dilatés et à imperfections, plutôt qu'un usage généraliste toutes peaux. Les peaux sèches ou très sensibles, en dehors d'une problématique de pores ou de boutons, trouveront probablement un nettoyant plus doux et moins ciblé mieux adapté à leurs besoins quotidiens.",
    ],
    faq: [
      {
        question: "Ce nettoyant est-il suffisant pour démaquiller le visage ?",
        reponse:
          "Un nettoyant de ce type retire surtout les impuretés de la journée et le sébum, mais un maquillage complet, en particulier waterproof, gagne à être retiré au préalable avec une eau ou une huile démaquillante avant ce nettoyage, pour ne pas solliciter la peau par un double nettoyage insuffisant.",
      },
      {
        question: "Convient-il à une peau sèche ?",
        reponse:
          "Il est avant tout pensé pour les peaux à pores marqués ou sujettes aux imperfections, souvent mixtes à grasses. Une peau sèche sans problématique de pores trouvera généralement plus de confort avec un nettoyant hydratant, moins ciblé sur le contrôle du sébum.",
      },
    ],
  },
  {
    slug: "medicube-zero-pore-blackhead-mud-mask-100g",
    identite: [
      "Ce masque à l'argile appartient à la gamme Zero Pore, la ligne la plus connue de Medicube, construite autour du resserrement visuel des pores et du traitement des points noirs. La texture minérale, plus épaisse qu'une crème, est pensée pour absorber l'excès de sébum en surface et détacher les impuretés logées dans les pores après quelques minutes de pose.",
      "Il s'adresse aux peaux mixtes à grasses, en particulier sur la zone T, plutôt qu'aux peaux sèches qui risquent de trouver l'argile asséchante.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Zero Pore (Medicube)" },
      { libelle: "Galénique", valeur: "Masque à l'argile (mud mask)" },
      { libelle: "Zone", valeur: "Visage, zone T" },
      { libelle: "Usage", valeur: "Points noirs, pores dilatés" },
    ],
    usage: [
      "S'applique en couche moyenne sur peau nettoyée, en évitant le contour des yeux et des lèvres, puis se rince à l'eau tiède avant que l'argile ne sèche complètement pour éviter de tirailler la peau. Un usage hebdomadaire, une à deux fois selon la sensibilité de la peau, suffit généralement ; un usage quotidien risquerait de trop décaper une peau normale à mixte.",
    ],
    positionnement: [
      "Dans le rayon des masques purifiants, celui-ci cible spécifiquement les points noirs plutôt qu'un nettoyage en profondeur généraliste. Il convient aux peaux mixtes à grasses avec une zone T marquée, et moins aux peaux sèches ou déjà fragilisées par des actifs exfoliants, pour qui l'argile en pose prolongée peut accentuer les tiraillements plutôt que les soulager.",
    ],
    faq: [
      {
        question: "Faut-il laisser le masque sécher complètement avant de rincer ?",
        reponse:
          "Non, il vaut mieux rincer dès que l'argile est encore légèrement souple plutôt que totalement craquelée et sèche : une pose trop longue tend à trop assécher la peau et à accentuer les tiraillements, sans améliorer l'effet sur les points noirs au-delà du temps de pose recommandé.",
      },
      {
        question: "Peut-on l'utiliser sur tout le visage ou seulement la zone T ?",
        reponse:
          "Il peut s'appliquer sur tout le visage, mais une peau mixte gagnera à réserver la pose la plus épaisse à la zone T, front, nez et menton, où les pores sont le plus souvent marqués, en appliquant une couche plus fine sur les joues si elles sont plus sèches.",
      },
    ],
  },
  {
    slug: "medicube-zero-pore-one-day-serum-30ml",
    identite: [
      "Ce sérum complète la gamme Zero Pore de Medicube avec un format pensé comme un soin ciblé sur les pores, à intégrer dans une routine quotidienne plutôt qu'utilisé de façon isolée malgré ce que le nom pourrait suggérer. La texture fluide s'applique comme un sérum classique, avant la crème, et vise à resserrer visuellement l'aspect des pores dilatés sur la durée.",
      "Il s'adresse aux peaux mixtes à grasses qui cherchent un grain de peau plus lisse, davantage qu'aux peaux sèches en quête d'hydratation.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Zero Pore (Medicube)" },
      { libelle: "Galénique", valeur: "Sérum fluide" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Usage", valeur: "Pores dilatés, grain de peau" },
    ],
    usage: [
      "S'applique matin et/ou soir sur peau nettoyée, avant la crème hydratante, en quelques gouttes réparties sur les zones les plus marquées par les pores dilatés. Se combine bien avec le nettoyant et le masque de la même gamme Zero Pore, sans qu'il soit nécessaire de les utiliser tous le même jour pour observer un effet sur la durée.",
    ],
    positionnement: [
      "Face aux sérums hydratants généralistes du même rayon, celui-ci se concentre sur l'aspect des pores plutôt que sur l'hydratation globale du visage. Il convient aux peaux mixtes à grasses avec une texture irrégulière, et moins aux peaux sèches ou matures en recherche prioritaire de fermeté, pour qui un sérum de la gamme Collagen sera plus pertinent.",
    ],
    faq: [
      {
        question: "Le nom « One Day » signifie-t-il qu'il s'utilise en une seule application ?",
        reponse:
          "Non, malgré ce que le nom suggère, il s'utilise comme un sérum classique, en application quotidienne régulière matin et/ou soir : l'effet sur l'aspect des pores se construit avec le temps et ne s'obtient pas en une seule application isolée, quel que soit le nom commercial du produit.",
      },
      {
        question: "Ce sérum resserre-t-il réellement les pores ?",
        reponse:
          "Aucun soin cosmétique ne referme les pores de façon définitive, leur taille étant en grande partie déterminée génétiquement : ce type de sérum aide surtout à limiter l'excès de sébum et à affiner visuellement le grain de peau, ce qui atténue l'aspect dilaté sans le modifier structurellement.",
      },
    ],
  },
  {
    slug: "mixa-creme-ceramide-protection-400ml",
    identite: [
      "La Crème Céramide Protection de Mixa s'inscrit dans la gamme Peaux Sensibles de la marque, pensée pour les peaux sèches à très sèches, y compris réactives. Sa formule s'appuie sur des céramides, des lipides identiques à ceux naturellement présents dans la barrière cutanée, pour aider à restaurer le film protecteur de la peau.",
      "Le format pompe de 400ml, généreux, est pensé pour une application quotidienne sur tout le corps plutôt que pour un usage ciblé, avec une texture fondante sans parfum superflu pour limiter les risques d'irritation.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Céramides" },
      { libelle: "Galénique", valeur: "Crème corps, pompe 400ml" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Usage", valeur: "Peaux sèches à très sèches, sensibles" },
    ],
    usage: [
      "S'applique en couche généreuse sur peau sèche ou légèrement humide, idéalement après la douche pour profiter de l'effet occlusif sur une peau encore hydratée. Un usage quotidien, voire biquotidien sur les zones les plus sèches comme les coudes ou les jambes, aide à maintenir le confort cutané dans la durée, sans effet immédiat spectaculaire mais avec un bénéfice qui se construit sur plusieurs semaines d'application régulière.",
    ],
    positionnement: [
      "Face aux laits corps parfumés classiques du même rayon, cette crème vise en priorité le confort des peaux sèches et réactives plutôt que le plaisir sensoriel ou le parfum. Elle convient aux peaux atopiques ou sujettes aux tiraillements, et moins à qui cherche une texture légère à absorption très rapide pour un usage d'été sur peau normale.",
    ],
    faq: [
      {
        question: "Cette crème convient-elle en cas d'eczéma ?",
        reponse:
          "Sa formule à base de céramides est pensée pour les peaux sèches à très sèches et sensibles, ce qui inclut souvent les peaux sujettes à l'eczéma, mais un avis médical reste nécessaire en cas de poussée active ou de zones très abîmées, un cosmétique ne remplaçant pas un traitement prescrit.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Le format et le conditionnement en pompe de 400ml indiquent un usage corps plutôt que visage : les crèmes visage sont généralement formulées avec une texture et des actifs adaptés à une peau plus fine, même si les céramides conviennent en principe aux deux zones.",
      },
    ],
  },
  {
    slug: "mustela-eau-nettoyante-500ml",
    identite: [
      "L'Eau Nettoyante de Mustela est une eau micellaire pensée pour la toilette du nouveau-né et du bébé, sans rinçage, sur le visage comme sur le siège en cas de change. Elle s'inscrit dans la gamme de toilette de la marque, spécialisée dans le soin de la peau des tout-petits depuis sa création.",
      "Sa formule est pensée pour limiter les risques d'irritation propres à la peau immature des nourrissons, avec un flacon pompe pratique pour un usage répété plusieurs fois par jour, notamment lors des changes.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Eau nettoyante sans rinçage" },
      { libelle: "Zone", valeur: "Visage, siège (change)" },
      { libelle: "Usage", valeur: "Toilette du nouveau-né et du bébé" },
      { libelle: "Format", valeur: "Flacon pompe 500ml" },
    ],
    usage: [
      "S'utilise à l'aide d'un coton imbibé, passé délicatement sur le visage ou la zone du siège lors du change, sans nécessiter de rinçage à l'eau claire ensuite. Le flacon pompe permet un dosage rapide, pratique pour les changes fréquents des premiers mois. Elle peut remplacer les lingettes pour limiter les frottements sur une peau encore fragile.",
    ],
    positionnement: [
      "Face aux lingettes jetables très répandues pour la toilette du bébé, cette eau nettoyante avec coton offre une alternative généralement jugée plus douce, sans les conservateurs parfois présents dans certaines lingettes bas de gamme. Elle convient à un usage quotidien dès la naissance, y compris sur peau très réactive, mais demande un coton à portée de main, moins pratique en déplacement qu'une lingette prête à l'emploi.",
    ],
    faq: [
      {
        question: "Cette eau nettoyante convient-elle dès la naissance ?",
        reponse:
          "Oui, c'est précisément l'usage pour lequel ce type de produit est formulé, avec une tolérance pensée pour la peau immature du nouveau-né, y compris sur le visage. En cas de doute ou de peau particulièrement réactive, un avis du pédiatre reste la référence avant d'introduire un nouveau produit.",
      },
      {
        question: "Faut-il rincer la peau après l'avoir utilisée ?",
        reponse:
          "Non, c'est justement l'intérêt de ce format : il se retire simplement avec le coton, sans étape de rinçage à l'eau claire, ce qui la rend pratique lors des changes ou en dehors de la maison, quand un point d'eau n'est pas toujours disponible.",
      },
    ],
  },
  {
    slug: "mustela-hydra-bebe-lait-corps-300ml",
    identite: [
      "Le lait corps Hydra Bébé de Mustela est un soin hydratant quotidien pensé pour la peau normale du bébé, en dehors des périodes de sécheresse marquée qui relèvent plutôt des soins plus riches de la marque. Sa texture fluide, caractéristique d'un lait plutôt que d'une crème, s'étale facilement sur de grandes surfaces et pénètre rapidement, un point important après le bain quand le temps de pose sur une peau qui bouge est limité.",
      "Il s'utilise sur tout le corps, hors visage en général, dès les premiers mois.",
    ],
    faits: [
      { libelle: "Galénique", valeur: "Lait corps" },
      { libelle: "Zone", valeur: "Corps (hors visage)" },
      { libelle: "Usage", valeur: "Peau normale, hydratation quotidienne" },
      { libelle: "Format", valeur: "300ml" },
    ],
    usage: [
      "S'applique quotidiennement après le bain ou la douche, sur peau encore légèrement humide pour favoriser la pénétration, en massage doux sur tout le corps hors visage. Ce geste régulier, intégré à un rituel du soir, aide à maintenir le confort de la peau du bébé sans être un soin de secours pour les zones déjà très sèches ou irritées, mieux prises en charge par une crème plus riche.",
    ],
    positionnement: [
      "Face aux crèmes plus riches de la même marque, réservées aux peaux sèches à très sèches, ce lait vise un usage quotidien sur peau normale, avec une texture plus fluide et une pénétration plus rapide. Il convient moins en cas de sécheresse marquée ou de zones rêches, pour lesquelles un soin plus nourrissant et occlusif sera plus adapté que cette texture légère.",
    ],
    faq: [
      {
        question: "Ce lait convient-il en cas de peau sèche ?",
        reponse:
          "Il est avant tout pensé pour la peau normale, avec une texture fluide qui pénètre vite mais reste peu nourrissante pour une peau très sèche. Dans ce cas, une crème plus riche de la même gamme, pensée spécifiquement pour la sécheresse cutanée du bébé, sera plus adaptée en usage quotidien.",
      },
      {
        question: "Peut-on l'utiliser sur le visage du bébé ?",
        reponse:
          "Ce type de lait corps est généralement pensé pour le corps plutôt que le visage, une zone plus fine qui bénéficie souvent d'un soin dédié, même chez le nourrisson. Il est préférable de vérifier l'indication précise sur l'emballage avant une application régulière sur le visage.",
      },
    ],
  },
  {
    slug: "noreva-exfoliac-creme-reparatrice-40ml",
    identite: [
      "La Crème Réparatrice s'inscrit dans la gamme Exfoliac de Noreva, une ligne de pharmacie développée spécifiquement pour les peaux à tendance acnéique. Contrairement aux soins traitants de la même gamme, souvent asséchants par nécessité, cette crème vise à restaurer le confort d'une peau fragilisée par les traitements anti-imperfections ou par des poussées répétées.",
      "Sa texture est pensée pour apaiser sans obstruer les pores, un point de vigilance important pour une peau déjà encline aux imperfections. Elle s'utilise en soin réparateur ponctuel plutôt qu'en hydratant quotidien systématique.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Exfoliac (Noreva)" },
      { libelle: "Galénique", valeur: "Crème réparatrice" },
      { libelle: "Zone", valeur: "Visage" },
      { libelle: "Usage", valeur: "Peau acnéique fragilisée, post-traitement" },
    ],
    usage: [
      "S'applique sur les zones inconfortables ou fragilisées, après un soin asséchant comme un rétinoïde ou un exfoliant, en dehors des poussées inflammatoires actives où un avis dermatologique reste préférable. Une à deux applications quotidiennes suffisent généralement, en complément d'un nettoyant doux non décapant, pour ne pas ajouter une nouvelle source d'irritation à une peau déjà sensibilisée.",
    ],
    positionnement: [
      "Face aux soins matifiants ou exfoliants du même rayon, cette crème se distingue par sa vocation réparatrice plutôt que traitante : elle ne cible pas directement les imperfections mais le confort de la peau autour. Elle convient à qui suit déjà un soin asséchant et cherche à en limiter les effets secondaires, et moins à qui cherche un premier soin contre l'acné active.",
    ],
    faq: [
      {
        question: "Cette crème traite-t-elle directement les boutons ?",
        reponse:
          "Non, sa vocation est de réparer et d'apaiser une peau fragilisée, pas de cibler directement les imperfections actives : pour cela, la gamme Exfoliac propose d'autres références plus ciblées, cette crème intervenant plutôt en soutien du confort cutané pendant ou après un soin asséchant.",
      },
      {
        question: "Peut-on l'utiliser en même temps qu'un traitement contre l'acné prescrit par un dermatologue ?",
        reponse:
          "C'est justement l'un des usages pour lesquels ce type de crème réparatrice est pensé, en complément d'un traitement prescrit qui assèche souvent la peau. Il est toutefois préférable de vérifier auprès du dermatologue qu'aucune interaction n'est à prévoir avec le traitement en cours.",
      },
    ],
  },
  {
    slug: "noreva-kerapil-soin-dermo-regulateur-75ml",
    identite: [
      "Kerapil est la ligne de Noreva dédiée à la kératose pilaire, cette peau rugueuse et semée de petits boutons souvent visible sur l'arrière des bras ou les cuisses. Ce soin dermo-régulateur combine une action exfoliante douce, pour lisser les zones rêches, et une action hydratante, pour limiter la sécheresse qui accompagne souvent ce type de peau.",
      "Il s'utilise sur le corps, sur les zones concernées uniquement, et non sur l'ensemble du corps comme un lait hydratant classique.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Kerapil (Noreva)" },
      { libelle: "Galénique", valeur: "Soin dermo-régulateur" },
      { libelle: "Zone", valeur: "Corps (bras, cuisses)" },
      { libelle: "Usage", valeur: "Kératose pilaire, peau rugueuse" },
    ],
    usage: [
      "S'applique en massage sur les zones rugueuses, bras ou cuisses, une à deux fois par jour selon la sécheresse de la peau, en évitant les zones de peau irritée ou lésée. L'effet sur la texture de la peau s'observe généralement après plusieurs semaines d'utilisation régulière, la kératose pilaire étant une problématique qui se gère plutôt qu'elle ne se résout définitivement en quelques applications.",
    ],
    positionnement: [
      "Ce soin cible une problématique précise, la kératose pilaire, plutôt qu'une hydratation corporelle généraliste : il n'a pas vocation à remplacer un lait corps quotidien sur l'ensemble du corps. Il convient à qui identifie clairement ces petites aspérités rugueuses sur les bras ou les cuisses, et n'apporte pas d'intérêt particulier sur une peau lisse sans cette problématique.",
    ],
    faq: [
      {
        question: "Ce soin règle-t-il définitivement les boutons de kératose pilaire ?",
        reponse:
          "Non, la kératose pilaire est une problématique cutanée chronique qui se gère par un entretien régulier plutôt qu'elle ne se résout de façon permanente : ce soin aide à lisser visuellement la texture de la peau avec un usage continu, mais les aspérités peuvent réapparaître à l'arrêt du soin.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Non, la kératose pilaire concerne typiquement des zones du corps comme l'arrière des bras ou les cuisses, et ce soin est formulé pour cet usage. Pour le visage, une routine dédiée avec des actifs et une texture adaptés à une peau plus fine est préférable.",
      },
    ],
  },
  {
    slug: "nuxe-body-deodorant-longue-duree-50ml",
    identite: [
      "Ce déodorant s'inscrit dans la gamme Nuxe Body, la ligne corps de la marque française connue avant tout pour son soin visage. Il annonce une action longue durée et se positionne comme un déodorant classique plutôt qu'un anti-transpirant à base de sels d'aluminium, en cohérence avec le positionnement plus naturel de la marque.",
      "Le format 50ml, compact, correspond à un usage quotidien plutôt qu'à un grand format familial. Il s'utilise sur peau propre et sèche, comme toute la famille des déodorants.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Nuxe Body" },
      { libelle: "Galénique", valeur: "Déodorant" },
      { libelle: "Zone", valeur: "Aisselles" },
      { libelle: "Usage", valeur: "Protection longue durée" },
    ],
    usage: [
      "S'applique le matin sur peau propre et sèche, après la douche, en laissant sécher quelques secondes avant de s'habiller pour éviter de tacher les vêtements clairs. Une seule application quotidienne suffit en usage normal ; en cas de forte transpiration ou de journée particulièrement active, une deuxième application en cours de journée peut être nécessaire.",
    ],
    positionnement: [
      "Face aux anti-transpirants à base de sels d'aluminium très présents dans le rayon, ce déodorant se positionne sur un registre plus doux, sans viser à bloquer la transpiration mais à en limiter l'odeur. Il convient à qui privilégie une formule perçue comme plus naturelle, et moins à qui cherche une action anti-transpirante forte pour une activité sportive intense ou une transpiration abondante.",
    ],
    faq: [
      {
        question: "Ce déodorant bloque-t-il la transpiration comme un anti-transpirant ?",
        reponse:
          "Non, un déodorant classique comme celui-ci agit principalement sur l'odeur et non sur le volume de transpiration lui-même, contrairement à un anti-transpirant à base de sels d'aluminium. Pour une action ciblée sur la transpiration abondante, un produit spécifiquement anti-transpirant sera plus adapté.",
      },
      {
        question: "Convient-il aux peaux sensibles des aisselles ?",
        reponse:
          "La gamme Nuxe Body est généralement formulée avec une attention portée à la tolérance cutanée, mais toute peau sensible réagit différemment : il est conseillé de tester sur une petite zone en cas d'antécédents d'irritation avec d'autres déodorants avant une utilisation quotidienne complète.",
      },
    ],
  },
  {
    slug: "nuxe-body-gel-douche-fondant-200ml",
    identite: [
      "Le Gel Douche Fondant fait partie de la gamme Nuxe Body, déclinaison corps de la marque plus connue pour son soin visage et sa Huile Prodigieuse. Comme son nom l'indique, la texture est pensée pour fondre au contact de l'eau plutôt que de mousser abondamment comme un gel douche classique, une caractéristique fréquente chez les gels douche formulés pour limiter l'effet asséchant sur la peau.",
      "Le format 200ml, plus petit qu'un grand flacon de douche familial, correspond à un usage quotidien individuel.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Nuxe Body" },
      { libelle: "Galénique", valeur: "Gel douche fondant" },
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Usage", valeur: "Nettoyage quotidien du corps" },
    ],
    usage: [
      "S'utilise sous la douche, en quantité modérée répartie sur peau humide, avec ou sans gant, puis rincé à l'eau tiède plutôt que chaude pour limiter l'effet desséchant sur la peau. Il peut s'utiliser quotidiennement sur l'ensemble du corps, en évitant le contour des yeux, et convient aussi bien le matin que le soir selon la routine de chacun.",
    ],
    positionnement: [
      "Face aux gels douche très moussants et parfumés du même rayon, cette texture fondante mise sur une sensation plus douce, moins décapante, au prix d'une mousse plus discrète. Elle convient à qui recherche un moment de douche plus sensoriel qu'un nettoyage très moussant, et moins à qui privilégie avant tout une mousse abondante perçue comme gage d'efficacité.",
    ],
    faq: [
      {
        question: "Ce gel douche convient-il aux peaux sèches ?",
        reponse:
          "Sa texture fondante, moins moussante qu'un gel douche classique, est généralement mieux tolérée par les peaux sèches ou sensibles qu'une formule très détergente. Il reste toutefois recommandé de limiter la température de l'eau et le temps de douche, deux facteurs qui assèchent la peau indépendamment du gel utilisé.",
      },
      {
        question: "Peut-il s'utiliser aussi comme bain moussant ?",
        reponse:
          "Rien n'empêche de le verser sous l'eau qui coule dans la baignoire pour profiter d'un peu de mousse, mais sa formulation fondante, pensée avant tout pour la douche, ne produira pas la mousse abondante et durable d'un bain moussant dédié à cet usage.",
      },
    ],
  },
  {
    slug: "nuxe-huile-prodigieuse-100ml",
    identite: [
      "L'Huile Prodigieuse est le produit fondateur de Nuxe, lancé au début des années 1990 et devenu depuis une référence du soin sec multi-usage en France. Sa formule associe plusieurs huiles végétales, dont l'huile d'argan et l'huile de noisette, pour une texture sèche qui pénètre sans laisser de film gras, contrairement à une huile classique.",
      "Elle s'utilise indifféremment sur le visage, le corps et les cheveux, une polyvalence qui a construit sa réputation, avec un parfum caractéristique devenu la signature olfactive de toute la gamme Prodigieux de la marque.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "Huiles végétales (argan, noisette, entre autres)" },
      { libelle: "Galénique", valeur: "Huile sèche" },
      { libelle: "Zone", valeur: "Visage, corps, cheveux" },
      { libelle: "Format", valeur: "100ml" },
    ],
    usage: [
      "S'applique en quelques gouttes réparties dans les paumes puis lissées sur peau ou longueurs de cheveux, sur peau sèche ou légèrement humide après la douche pour une meilleure répartition. Sur le visage, elle peut se substituer à la crème du soir sur peau normale, ou s'ajouter en dernière étape pour un fini lumineux. Sur les cheveux, une petite quantité sur les longueurs et pointes évite l'effet gras si appliquée en excès.",
    ],
    positionnement: [
      "Face aux huiles sèches multi-usage qui se sont multipliées dans le rayon depuis son lancement, l'Huile Prodigieuse reste la référence historique à laquelle les autres sont souvent comparées, avec un parfum reconnaissable qui fait autant sa force que sa limite pour qui n'apprécie pas les senteurs marquées. Elle convient moins aux peaux très grasses du visage, pour qui une huile en soin quotidien peut favoriser les imperfections.",
    ],
    faq: [
      {
        question: "Peut-on vraiment utiliser la même huile sur le visage, le corps et les cheveux ?",
        reponse:
          "Oui, c'est la promesse d'origine du produit et l'une des raisons de sa popularité : une seule formule pensée pour les trois usages, avec une quantité à ajuster selon la zone, plus généreuse sur le corps et beaucoup plus mesurée sur le visage ou les cheveux pour éviter tout excès gras.",
      },
      {
        question: "Convient-elle aux peaux grasses ou à tendance acnéique ?",
        reponse:
          "C'est la zone où elle est la moins recommandée en usage quotidien : une huile, même sèche, peut favoriser les imperfections sur une peau déjà grasse. Elle reste en revanche utilisable ponctuellement sur le corps ou les cheveux, moins concernés par cette problématique que le visage.",
      },
      {
        question: "Quelle différence avec la version Huile Prodigieuse OR ?",
        reponse:
          "La version OR reprend la même base multi-usage en y ajoutant des particules nacrées qui laissent un fini scintillant sur la peau, pensée pour un usage plus ponctuel et festif. L'Huile Prodigieuse originale, sans paillettes, se prête davantage à un usage quotidien sur le visage, le corps et les cheveux.",
      },
    ],
  },
  {
    slug: "nuxe-huile-prodigieuse-or-50ml",
    identite: [
      "L'Huile Prodigieuse OR reprend la formule multi-usage historique de la marque en y ajoutant de fines particules nacrées, pour un fini scintillant en plus de l'effet nourrissant habituel de l'huile sèche. Le format 50ml, plus petit que l'huile originale, correspond à un usage plus ponctuel, sur les zones où l'on souhaite un effet lumineux visible : décolleté, jambes, ou pointes de cheveux.",
      "Elle couvre en effet, comme l'huile originale, le visage, le corps et les cheveux.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Prodigieux (Nuxe)" },
      { libelle: "Galénique", valeur: "Huile sèche nacrée" },
      { libelle: "Zone", valeur: "Visage, corps, cheveux" },
      { libelle: "Format", valeur: "50ml" },
    ],
    usage: [
      "S'applique en très petite quantité sur peau ou longueurs de cheveux, davantage pour un effet lumineux ponctuel que pour un soin quotidien comme l'huile originale sans paillettes. Sur les cheveux, quelques gouttes sur les pointes apportent brillance et reflets sans effet gras si la quantité reste mesurée. Sur le corps, elle convient particulièrement pour un événement ou une sortie où un fini scintillant est recherché.",
    ],
    positionnement: [
      "Face à l'Huile Prodigieuse originale, cette version OR se positionne comme un produit d'occasion plutôt qu'un soin du quotidien, du fait de son fini pailleté. Elle convient à qui cherche un effet visuel pour une soirée ou un événement, et moins à qui veut une huile sèche discrète à utiliser tous les jours sans particules visibles sur la peau.",
    ],
    faq: [
      {
        question: "Les particules nacrées laissent-elles des traces sur les vêtements ?",
        reponse:
          "Comme tout produit pailleté, un excès de quantité peut laisser de fines particules sur des vêtements sombres, surtout juste après l'application. Il est préférable de laisser sécher quelques instants avant de s'habiller, et de ne pas appliquer directement sur des tissus clairs si l'on veut éviter tout résidu visible.",
      },
      {
        question: "Peut-on l'utiliser sur les cheveux comme l'originale ?",
        reponse:
          "Oui, elle s'utilise en petite quantité sur les longueurs et pointes pour apporter brillance et reflets, avec en plus le fini scintillant propre à cette version. Une quantité excessive alourdira cependant les cheveux fins plus rapidement que la version originale, sans particules.",
      },
    ],
  },
  {
    slug: "nuxe-prodigieux-floral-parfum-50ml",
    identite: [
      "Prodigieux Floral Le Parfum décline en fragrance l'univers olfactif de l'Huile Prodigieuse, le produit fondateur de Nuxe, sans en être la reproduction exacte : c'est une création à part entière pensée pour prolonger cette signature sur la peau au-delà du soin. Il s'inscrit dans la gamme Prodigieux, aux côtés d'autres déclinaisons parfumées et de l'huile originale elle-même.",
      "Le flacon de 50ml en fait un format d'appoint plutôt qu'un très grand format, cohérent avec un usage en alternance avec d'autres parfums.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "Prodigieux (Nuxe)" },
      { libelle: "Format", valeur: "Flacon vaporisateur 50ml" },
      { libelle: "Univers", valeur: "Floral, inspiré de la signature Huile Prodigieuse" },
    ],
    usage: [
      "Se vaporise comme un parfum classique, sur les points de pulsation (poignets, cou), en évitant de frotter les poignets l'un contre l'autre pour ne pas altérer les premières notes. Une à deux vaporisations suffisent pour une tenue satisfaisante en journée ; une application sur les vêtements peut prolonger la diffusion mais comporte un risque de tache sur les tissus clairs ou délicats.",
    ],
    positionnement: [
      "Dans le rayon des parfums de marques de soin, celui-ci se distingue par son lien direct avec un produit culte plutôt que par une pyramide olfactive inédite sans histoire. Il convient à qui apprécie déjà l'univers olfactif de l'Huile Prodigieuse et souhaite le retrouver en format parfum, et moins à qui cherche une fragrance totalement indépendante de l'image du soin.",
    ],
    faq: [
      {
        question: "Ce parfum sent-il exactement comme l'Huile Prodigieuse ?",
        reponse:
          "Il s'en inspire fortement, au point de partager une bonne partie de son identité olfactive reconnaissable, mais reste une création distincte formulée pour un format parfum plutôt que soin : les deux produits évoquent le même univers sans être rigoureusement identiques à l'application.",
      },
      {
        question: "Quelle est la tenue de ce parfum au cours de la journée ?",
        reponse:
          "La tenue exacte dépend de la concentration du parfum, de la peau de chacun et des conditions extérieures, des éléments qui ne sont pas communiqués de façon détaillée par la marque pour cette référence précise. Une vaporisation le matin peut nécessiter un rappel en fin de journée selon la sensibilité de chacun à l'évaporation des notes.",
      },
    ],
  },
];
