import type { FicheRedigee } from "@/lib/redige/types";

export const LOT: FicheRedigee[] = [
  {
    slug: "klorane-shampoing-sec-extra-doux-lait-davoine-150ml",
    identite: [
      "Ce shampoing sec de Klorane se présente en poudre propulsée, formulée au lait d'avoine pour une tolérance renforcée. Il absorbe l'excès de sébum à la racine sans eau ni rinçage, ce qui redonne du volume et de la fraîcheur entre deux lavages. Sa formule extra-douce le rend compatible avec un usage plus fréquent qu'un shampoing sec classique, pour les cheveux qui regraissent vite ou les journées sans possibilité de lavage.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "lait d'avoine" },
      { libelle: "Texture", valeur: "poudre en aérosol" },
      { libelle: "Usage", valeur: "dépannage entre deux lavages, voyage" },
      { libelle: "Fini", valeur: "sans résidu si bien brossé" },
    ],
    usage: [
      "Vaporiser à bonne distance des racines, laisser agir quelques instants puis brosser énergiquement pour répartir la poudre et retrouver du volume. Il ne remplace pas un lavage à l'eau sur la durée : c'est un dépannage entre deux shampoings, pas une routine de nettoyage.",
    ],
    positionnement: [
      "Face aux autres shampoings secs du rayon, il mise sur la tolérance cutanée plutôt que sur un parfum marqué. Il convient moins aux cheveux très foncés ou noirs, sur lesquels un résidu blanc peut rester visible si le brossage est insuffisant.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Sa formule extra-douce le permet plus qu'un shampoing sec classique, mais un lavage à l'eau reste nécessaire régulièrement pour ne pas laisser la poudre s'accumuler sur le cuir chevelu.",
      },
      {
        question: "Laisse-t-il des traces visibles sur cheveux foncés ?",
        reponse:
          "Un résidu blanc peut apparaître juste après application. Un brossage complet quelques minutes après le repartit dans la fibre et le rend en général invisible.",
      },
    ],
  },
  {
    slug: "klorane-shampooing-200ml",
    identite: [
      "Klorane construit habituellement chacun de ses shampoings autour d'un actif végétal dédié à un besoin capillaire précis. Cette référence est positionnée dans le rayon des soins pour cheveux qui s'affinent ou qui tombent, avec une base lavante douce compatible avec un usage fréquent. Sans autre précision de formule sur cet exemplaire, on retient un shampoing capillaire courant, pensé pour accompagner un cuir chevelu fragilisé au quotidien.",
    ],
    faits: [
      { libelle: "Gamme", valeur: "soin anti-chute" },
      { libelle: "Texture", valeur: "gel lavant" },
      { libelle: "Usage", valeur: "lavage courant, compatible usage fréquent" },
    ],
    usage: [
      "Masser sur cheveux mouillés, laisser poser quelques instants pour laisser le temps à la formule d'agir sur le cuir chevelu, puis rincer. Il se combine bien à une lotion ou un sérum ciblé si la chute est marquée, la base lavante ne suffisant pas seule.",
    ],
    positionnement: [
      "Dans le rayon anti-chute, il joue le rôle de la base lavante plutôt que du soin traitant à lui seul. Il convient à un entretien courant, mais ne remplace pas une lotion ciblée en cas de chute importante ou récente.",
    ],
    faq: [
      {
        question: "Ce shampoing suffit-il seul contre la chute ?",
        reponse:
          "Un shampoing nettoie surtout le cuir chevelu au moment du lavage. Il complète plutôt un sérum ou une lotion laissés en place, qui portent l'essentiel de l'action ciblée.",
      },
      {
        question: "À qui s'adresse-t-il ?",
        reponse:
          "Aux cheveux qui s'affinent ou tombent en entretien courant, hommes comme femmes, sans distinction de genre dans la formule.",
      },
    ],
  },
  {
    slug: "klorane-shampooing-camomille-blondissant-illuminateur-200ml",
    identite: [
      "Le Shampooing à la Camomille de Klorane s'adresse aux cheveux blonds, méchés ou naturellement clairs. La camomille, reconnue pour ses reflets dorés, illumine la couleur à chaque lavage sans effet colorant durable ni décoloration. Cette formule nettoyante douce redonne de la lumière aux cheveux ternis par le temps, le soleil ou des colorations répétées, sans alourdir la fibre au fil des applications.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "camomille" },
      { libelle: "Type de cheveux", valeur: "blonds ou méchés" },
      { libelle: "Fini", valeur: "reflets dorés, brillance" },
    ],
    usage: [
      "Appliquer sur cheveux mouillés, faire mousser, laisser poser quelques minutes pour que la camomille agisse sur les reflets, puis rincer. Un usage régulier entretient la couleur entre deux colorations, l'effet s'accumulant avec la répétition.",
    ],
    positionnement: [
      "Il se distingue des autres shampoings du rayon par sa vocation colorimétrique plutôt que réparatrice. Il ne convient pas aux cheveux foncés ou châtains, sur lesquels l'effet illuminateur ne se voit pas, ni à qui cherche d'abord un soin nourrissant.",
    ],
    faq: [
      {
        question: "Peut-il éclaircir des cheveux foncés ?",
        reponse:
          "Non, il révèle et entretient les reflets déjà présents sur cheveux clairs, il ne décolore pas et n'agit pas sur une base foncée.",
      },
      {
        question: "À quelle fréquence l'utiliser ?",
        reponse:
          "En lavage courant, aussi souvent que nécessaire pour le rythme habituel des cheveux concernés, l'effet illuminateur s'entretenant avec la régularité.",
      },
    ],
  },
  {
    slug: "klorane-shampooing-fortifiant-quinine-vitamines-b",
    identite: [
      "Le Shampooing Fortifiant à la Quinine et aux Vitamines B de Klorane vise les cheveux qui s'affinent ou qui tombent. La quinine, extraite de l'écorce de quinquina, est l'actif historique de la maison sur ce terrain, associée aux vitamines B pour accompagner la fibre. Sa base lavante douce est compatible avec un usage fréquent et s'adresse aussi bien aux hommes qu'aux femmes.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "quinine et vitamines B" },
      { libelle: "Type de cheveux", valeur: "fragilisés ou qui tombent" },
      { libelle: "Genre", valeur: "mixte" },
    ],
    usage: [
      "Masser sur cheveux mouillés, laisser poser quelques instants pour laisser le temps à la quinine d'agir sur le cuir chevelu, puis rincer. Un usage régulier est conseillé, en particulier lors des périodes de chute saisonnière.",
    ],
    positionnement: [
      "Référence historique du rayon anti-chute chez Klorane, il joue la carte de la base lavante fortifiante plutôt que du traitement intensif. Pour une chute marquée ou récente, il se combine mieux à une lotion ciblée qu'il ne la remplace.",
    ],
    faq: [
      {
        question: "La quinine fait-elle repousser les cheveux ?",
        reponse:
          "Aucun shampoing ne fait repousser les cheveux à lui seul. Il accompagne le cuir chevelu et prépare le terrain pour un soin ciblé laissé en place.",
      },
      {
        question: "Convient-il aux hommes et aux femmes ?",
        reponse:
          "Oui, la formule est pensée pour les deux, sans parfum ni marketing différencié selon le genre.",
      },
    ],
  },
  {
    slug: "kojic-acid-essence-toner-repair-brighten-moisturizing-100ml",
    identite: [
      "Ce toner combine l'acide kojique, actif éclaircissant obtenu par fermentation, à une base hydratante pensée pour les peaux marquées par des taches ou un teint irrégulier. Son format essence-toner s'applique après le nettoyage, sur peau sèche, pour préparer la peau aux soins suivants tout en apportant de l'hydratation. C'est une référence générique, sans laboratoire reconnu associé, à considérer comme un soin d'appoint.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Texture", valeur: "liquide type essence" },
      { libelle: "Usage", valeur: "après nettoyage, avant le soin de jour ou de nuit" },
      { libelle: "Type de peau", valeur: "teint terne ou marqué de taches" },
    ],
    usage: [
      "Appliquer sur une peau propre et sèche, à la main ou au coton, matin et soir. Faire suivre d'une crème hydratante et, le jour, d'une protection solaire, l'acide kojique pouvant sensibiliser la peau au soleil.",
    ],
    positionnement: [
      "Il se distingue des autres nettoyants du rayon par son association éclaircissante et hydratante en une étape, utile en complément d'un sérum ciblé. Il convient moins aux peaux très sensibles, sur lesquelles l'acide kojique peut irriter en cas d'usage trop fréquent.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "L'usage quotidien est courant, mais mieux vaut commencer par un jour sur deux pour vérifier la tolérance de la peau avant de généraliser.",
      },
      {
        question: "Remplace-t-il une crème solaire ?",
        reponse:
          "Non, il augmente même la sensibilité de la peau au soleil : une protection solaire reste indispensable en journée pendant son utilisation.",
      },
    ],
  },
  {
    slug: "kojic-acid-cream-mains-corps",
    identite: [
      "Cette crème à l'acide kojique cible les mains et le corps, deux zones souvent exposées et marquées par des taches liées au soleil ou à l'âge. Sa texture crème classique, pensée pour un usage courant sur peau sèche, associe l'effet éclaircissant de l'acide kojique à un rôle hydratant de fond sur ces zones plus sollicitées que le reste du corps.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Zone", valeur: "mains et corps" },
      { libelle: "Texture", valeur: "crème" },
      { libelle: "Usage", valeur: "application quotidienne" },
    ],
    usage: [
      "Appliquer sur les zones concernées, matin ou soir, sur peau propre. L'aspect des taches s'atténue progressivement avec la régularité, pas en quelques jours, et les zones traitées gagnent à être protégées du soleil en journée.",
    ],
    positionnement: [
      "Dans le rayon soin du corps, elle se positionne comme un soin ciblé plutôt qu'un lait généraliste. Elle convient moins à une application sur tout le corps au quotidien, mieux réservée aux zones réellement marquées.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Elle est formulée pour les mains et le corps. Une référence dédiée au visage reste préférable pour cette zone plus fine et plus exposée.",
      },
      {
        question: "En combien de temps voit-on un effet ?",
        reponse:
          "L'aspect des taches s'améliore progressivement avec un usage régulier, sans délai garanti et sans effet immédiat à attendre.",
      },
    ],
  },
  {
    slug: "kojic-acid-face-wash",
    identite: [
      "Ce nettoyant visage à l'acide kojique s'adresse aux peaux au teint irrégulier ou marqué par des taches. Sa formule moussante associe le nettoyage quotidien à l'apport de l'actif éclaircissant dès la première étape de la routine, pour un geste simple avant les soins suivants.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Texture", valeur: "gel nettoyant" },
      { libelle: "Usage", valeur: "nettoyage quotidien, matin et soir" },
      { libelle: "Type de peau", valeur: "teint irrégulier" },
    ],
    usage: [
      "Appliquer sur visage humidifié, masser puis rincer à l'eau tiède, matin et soir. Poursuivre avec un toner puis une crème hydratante pour compléter la routine, un nettoyant ne restant que peu de temps au contact de la peau.",
    ],
    positionnement: [
      "Dans le rayon nettoyant visage, il se distingue par sa double fonction nettoyage et éclaircissement. Il ne remplace pas un sérum ciblé pour des taches marquées, le temps de contact d'un nettoyant étant trop court pour agir seul.",
    ],
    faq: [
      {
        question: "Suffit-il contre les taches ?",
        reponse:
          "Un nettoyant reste sur la peau quelques secondes avant rinçage. Il complète plutôt un sérum ou une crème laissés en pose, qui portent l'essentiel de l'action.",
      },
      {
        question: "Peut-il assécher la peau ?",
        reponse:
          "Comme tout nettoyant actif, un usage biquotidien peut assécher les peaux sèches. Une crème hydratante après le nettoyage est recommandée dans ce cas.",
      },
    ],
  },
  {
    slug: "kojic-glow-body-oil-200ml",
    identite: [
      "Cette huile pour le corps de la ligne Kojic Glow nourrit la peau tout en accompagnant l'aspect du teint sur les zones marquées. Sa texture huileuse s'étale sur peau sèche ou légèrement humide et laisse un fini satiné, pensé pour une application après la douche plutôt qu'en soin de fond permanent.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Texture", valeur: "huile" },
      { libelle: "Zone", valeur: "corps" },
      { libelle: "Fini", valeur: "satiné" },
    ],
    usage: [
      "Appliquer après la douche sur peau encore légèrement humide pour mieux faire pénétrer l'huile, en insistant sur les zones plus sèches ou marquées, puis laisser sécher avant de s'habiller.",
    ],
    positionnement: [
      "Dans le rayon lait corps, elle s'adresse à qui préfère une texture huile à un lait classique, avec en plus l'argument éclaircissant. Elle convient moins aux peaux grasses ou par temps très chaud, où une texture plus légère sera préférée.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Elle est formulée pour le corps. Une texture plus légère est préférable sur le visage, dont la peau est plus fine et plus réactive.",
      },
      {
        question: "Laisse-t-elle la peau grasse ?",
        reponse:
          "Une huile laisse toujours un fini plus riche qu'un lait. Elle convient mieux à une application le soir ou sur une peau sèche que sur une peau déjà grasse.",
      },
    ],
  },
  {
    slug: "kojic-san-x-3-pm-65g",
    identite: [
      "Ce savon se présente en lot de trois pains de 65 g, dans la ligne Kojic San construite autour de l'acide kojique. Pensé pour un usage courant sous la douche, il associe le nettoyage du corps à l'apport de cet actif éclaircissant sur les zones marquées par des taches.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Format", valeur: "lot de trois pains" },
      { libelle: "Usage", valeur: "nettoyage corporel quotidien" },
    ],
    usage: [
      "Utiliser comme un savon classique sous la douche, en insistant sur les zones marquées par des taches. Le temps de contact court d'un savon limite l'effet comparé à une crème laissée en pose sur la peau.",
    ],
    positionnement: [
      "Dans le rayon savon, il se distingue par sa promesse éclaircissante répétée à chaque douche plutôt que par un parfum ou une texture particulière. Il convient moins aux peaux sensibles, qui peuvent réagir à un savon actif utilisé quotidiennement.",
    ],
    faq: [
      {
        question: "Un savon suffit-il contre les taches ?",
        reponse:
          "Le contact bref sous la douche limite son effet. Il complète plutôt une crème ciblée laissée en pose, qui porte l'essentiel du résultat visible.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Un savon corporel est généralement trop asséchant pour le visage. Un nettoyant visage dédié reste préférable pour cette zone plus fine.",
      },
    ],
  },
  {
    slug: "kojic-san-face-cream",
    identite: [
      "Cette crème visage de la ligne Kojic San est bâtie autour de l'acide kojique pour accompagner les peaux au teint irrégulier. Sa texture crème courante s'intègre à une routine du jour ou du soir selon la tolérance de la peau, en soin d'appoint plutôt qu'en traitement intensif.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Texture", valeur: "crème" },
      { libelle: "Usage", valeur: "soin visage quotidien" },
      { libelle: "Type de peau", valeur: "teint irrégulier" },
    ],
    usage: [
      "Appliquer sur visage propre, matin ou soir, en évitant le contour des yeux. En usage de jour, associer systématiquement une protection solaire, l'acide kojique pouvant sensibiliser la peau au soleil.",
    ],
    positionnement: [
      "Dans le rayon crème de jour, elle joue la carte de l'éclaircissement plutôt que de l'hydratation pure ou de l'anti-âge. Elle convient moins aux peaux très sèches, qui auront besoin d'une crème plus riche en complément.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser matin et soir ?",
        reponse:
          "Oui, mais mieux vaut commencer par une application quotidienne pour vérifier la tolérance de la peau avant de passer à deux applications.",
      },
      {
        question: "Faut-il une protection solaire avec ?",
        reponse:
          "Oui, indispensable le jour : l'acide kojique augmente la sensibilité de la peau au soleil pendant toute la durée d'utilisation.",
      },
    ],
  },
  {
    slug: "kojic-skin-lightening-face-serum",
    identite: [
      "Ce sérum visage concentré en acide kojique cible les taches et l'aspect irrégulier du teint. Sa texture fluide, plus concentrée qu'une crème, se prête à une cure ciblée plutôt qu'à un usage de fond permanent, à réserver aux zones où le teint est le plus marqué.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Texture", valeur: "sérum fluide" },
      { libelle: "Usage", valeur: "soin ciblé du teint" },
      { libelle: "Type de peau", valeur: "taches, teint irrégulier" },
    ],
    usage: [
      "Appliquer quelques gouttes sur les zones marquées, avant la crème de jour ou de nuit. Introduire progressivement dans la routine pour vérifier la tolérance avant un usage quotidien.",
    ],
    positionnement: [
      "Dans le rayon anti-taches, il se distingue par une concentration plus élevée qu'une crème classique, donc un effet potentiellement plus visible mais aussi un risque d'irritation plus grand. Il convient moins en première approche pour une peau sensible ou jamais exposée à l'acide kojique.",
    ],
    faq: [
      {
        question: "Peut-on l'associer à d'autres actifs ?",
        reponse:
          "Mieux vaut éviter de l'associer à des exfoliants forts ou au rétinol au même moment, pour ne pas cumuler les risques d'irritation sur la peau.",
      },
      {
        question: "Faut-il une protection solaire ?",
        reponse:
          "Oui, systématique le jour, car l'acide kojique augmente la sensibilité de la peau au soleil pendant la durée d'utilisation du sérum.",
      },
    ],
  },
  {
    slug: "kojie-san-savon-anti-age-dream-white-pack-2",
    identite: [
      "Le Savon Dream White de Kojie San associe l'acide kojique, signature de cette marque philippine, à des actifs présentés comme anti-âge par le fabricant, dans un format vendu par deux. Il s'inscrit dans la même famille que le savon éclaircissant d'origine de la marque, avec un positionnement orienté vers l'aspect du temps qui passe en plus de l'uniformisation du teint.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Format", valeur: "lot de deux savons" },
      { libelle: "Gamme", valeur: "Dream White" },
      { libelle: "Usage", valeur: "nettoyage corporel ou du visage selon tolérance" },
    ],
    usage: [
      "Utiliser comme un savon classique, sous la douche ou au lavabo, en laissant mousser quelques instants avant de rincer pour laisser le temps à l'actif d'agir. Un usage régulier est nécessaire pour un effet visible sur la durée.",
    ],
    positionnement: [
      "Dans le rayon savon, cette référence se distingue par la notoriété de la marque sur le terrain de l'acide kojique, un argument que les références génériques du rayon n'ont pas. Elle convient moins aux peaux réactives, l'acide kojique en usage fréquent pouvant assécher ou irriter.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Possible en testant d'abord la tolérance, mais un savon reste plus asséchant qu'un nettoyant visage dédié, plus adapté à cette zone fine.",
      },
      {
        question: "L'effet anti-âge annoncé est-il visible rapidement ?",
        reponse:
          "L'aspect de la peau s'améliore progressivement avec la régularité, sans effet immédiat à attendre dès les premières utilisations.",
      },
    ],
  },
  {
    slug: "kojie-san-skin-lightening-soap-x-3-65g",
    identite: [
      "Le Savon Éclaircissant Kojie San est la référence historique de la marque, bâtie autour de l'acide kojique obtenu par fermentation. Ce format réunit trois pains de 65 g, pensé pour un usage prolongé. C'est le produit qui a fait la réputation de Kojie San sur le terrain des taches et du teint irrégulier, en Asie puis à l'international.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Format", valeur: "lot de trois pains" },
      { libelle: "Usage", valeur: "nettoyage corporel ou du visage selon tolérance" },
      { libelle: "Statut", valeur: "produit fondateur de la gamme" },
    ],
    usage: [
      "Utiliser comme un savon classique, en laissant mousser quelques instants sur la peau humide avant de rincer. Un usage régulier sur plusieurs semaines est nécessaire pour juger de l'effet sur l'aspect des taches.",
    ],
    positionnement: [
      "C'est la référence la plus connue du rayon savon éclaircissant, ce qui en fait un repère pour comparer les autres références à l'acide kojique. Elle convient moins aux peaux très sensibles, l'acide kojique pouvant irriter en cas d'usage quotidien prolongé sur une peau réactive.",
    ],
    faq: [
      {
        question: "Pourquoi ce savon est-il aussi connu ?",
        reponse:
          "C'est le produit d'origine de la marque Kojie San, largement diffusé en Asie avant d'arriver sur d'autres marchés, dont l'Algérie.",
      },
      {
        question: "Peut-on l'utiliser tous les jours ?",
        reponse:
          "Oui pour la plupart des peaux, mais mieux vaut espacer les usages en cas de tiraillements ou de rougeurs après application.",
      },
    ],
  },
  {
    slug: "kojie-san-dream-white-anti-aging-soap-135g",
    identite: [
      "Version Dream White du savon Kojie San, en pain unique de 135 g, un format plus grand que le lot de trois petits pains classique de la marque. La base reste l'acide kojique, associée ici à un positionnement présenté comme anti-âge par le fabricant.",
    ],
    faits: [
      { libelle: "Actif principal", valeur: "acide kojique" },
      { libelle: "Format", valeur: "pain unique" },
      { libelle: "Gamme", valeur: "Dream White" },
      { libelle: "Usage", valeur: "nettoyage corporel ou du visage selon tolérance" },
    ],
    usage: [
      "Utiliser comme un savon classique sous la douche, en laissant poser la mousse quelques instants avant de rincer. Un usage régulier est nécessaire pour un effet visible sur l'aspect de la peau au fil des semaines.",
    ],
    positionnement: [
      "Ce format en pain unique convient à qui préfère un seul savon plus grand plutôt qu'un lot de trois petits pains. Comme les autres savons à l'acide kojique du rayon, il convient moins aux peaux sensibles en usage quotidien prolongé.",
    ],
    faq: [
      {
        question: "Quelle différence avec le lot de trois savons de la marque ?",
        reponse:
          "La formule est proche, seul le format change : un pain unique plus grand contre trois pains plus petits à faire durer.",
      },
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "En testant d'abord la tolérance, mais un savon reste plus asséchant qu'un nettoyant visage dédié, plus adapté à cette zone du corps.",
      },
    ],
  },
  {
    slug: "kylie-cosmetics-lip-liner-cinnamon-1-1g",
    identite: [
      "Ce crayon à lèvres de Kylie Cosmetics, dans la teinte Cinnamon, un ton brun chaud proche du nude, sert à définir le contour des lèvres avant l'application d'un rouge à lèvres ou d'un lip kit. Sa mine crémeuse glisse sans tirer sur la lèvre, avec une bonne précision de tracé.",
    ],
    faits: [
      { libelle: "Format", valeur: "crayon" },
      { libelle: "Teinte", valeur: "Cinnamon, brun chaud" },
      { libelle: "Texture", valeur: "crémeuse" },
      { libelle: "Usage", valeur: "contour des lèvres" },
    ],
    usage: [
      "Tracer le contour des lèvres avant d'appliquer le rouge à lèvres, ou combler entièrement les lèvres avec le crayon pour prolonger la tenue du rouge posé par-dessus. Affûter régulièrement la mine pour garder une pointe précise.",
    ],
    positionnement: [
      "Dans le rayon rouge à lèvres, ce crayon se distingue par sa vocation de contour et de fixation plutôt que de couleur à lui seul. Il convient moins à qui cherche un produit unique tout-en-un, sans étape de contour préalable.",
    ],
    faq: [
      {
        question: "Peut-on le porter seul, sans rouge à lèvres ?",
        reponse:
          "Oui, appliqué sur toute la lèvre il donne un fini mat plus discret que le rouge assorti, pour un maquillage plus léger.",
      },
      {
        question: "Cinnamon convient-il aux carnations foncées ?",
        reponse:
          "Ce brun chaud proche du nude s'accorde plutôt avec les carnations moyennes à foncées, à tester selon la teinte de peau exacte.",
      },
    ],
  },
  {
    slug: "kylie-cosmetics-lip-liner-saturn-1-1g",
    identite: [
      "Ce crayon à lèvres de Kylie Cosmetics, dans la teinte Saturn, reprend le format crémeux de la ligne de crayons de la marque. Il sert à définir et à prolonger la tenue d'un rouge à lèvres posé par-dessus, avec une mine qui glisse sans agresser la lèvre.",
    ],
    faits: [
      { libelle: "Format", valeur: "crayon" },
      { libelle: "Teinte", valeur: "Saturn" },
      { libelle: "Texture", valeur: "crémeuse" },
      { libelle: "Usage", valeur: "contour des lèvres" },
    ],
    usage: [
      "Tracer le contour avant d'appliquer un rouge assorti, ou combler la lèvre entière pour un fini mat plus longue tenue. Affûter régulièrement la mine pour conserver une pointe nette.",
    ],
    positionnement: [
      "Comme les autres crayons de la ligne, il complète un rouge à lèvres plutôt qu'il ne le remplace pour une couleur pleine et intense. Il convient moins à un usage seul si l'on recherche un fini brillant plutôt que mat.",
    ],
    faq: [
      {
        question: "Faut-il forcément l'associer à un rouge de la même teinte ?",
        reponse:
          "Non, un crayon plus foncé ou plus clair que le rouge crée aussi un effet de profondeur recherché par certaines applications.",
      },
      {
        question: "Le fini est-il mat ?",
        reponse:
          "Oui, comme la plupart des crayons de la marque, le fini est mat une fois posé et sec sur la lèvre.",
      },
    ],
  },
  {
    slug: "kylie-cosmetics-matte-lipstick-613",
    identite: [
      "Ce rouge à lèvres liquide mat de Kylie Cosmetics, référence 613 de la ligne Matte Lipstick, sèche sur un fini mat pensé pour une tenue longue sans retouches fréquentes. Sa formule liquide s'applique au pinceau intégré, pour une couleur pleine dès la première couche.",
    ],
    faits: [
      { libelle: "Format", valeur: "liquide, applicateur pinceau" },
      { libelle: "Fini", valeur: "mat" },
      { libelle: "Référence teinte", valeur: "613" },
    ],
    usage: [
      "Appliquer une fine couche au pinceau applicateur, en partant du centre des lèvres vers les coins, puis laisser sécher quelques instants sans parler ni boire pour fixer le fini mat. Éviter de superposer plusieurs couches trop épaisses, qui craquellent en séchant.",
    ],
    positionnement: [
      "Dans le rayon rouge à lèvres, ce format liquide mat s'adresse à qui recherche une tenue longue sans repasser dans la journée, au prix d'un fini plus asséchant qu'un rouge classique en bâtonnet. Il convient moins aux lèvres déjà sèches ou gercées.",
    ],
    faq: [
      {
        question: "Le fini mat assèche-t-il les lèvres ?",
        reponse:
          "Comme la plupart des rouges liquides mats, un baume hydratant avant application est conseillé sur des lèvres déjà sèches.",
      },
      {
        question: "Tient-il après un repas ?",
        reponse:
          "La tenue est longue, mais un repas gras ou très liquide peut altérer le fini par endroits, une légère retouche restant possible.",
      },
    ],
  },
  {
    slug: "kylie-cosmetics-matte-lipstick-808",
    identite: [
      "Ce rouge à lèvres liquide mat de Kylie Cosmetics, référence 808 de la même ligne Matte Lipstick, propose un fini mat et une couleur intense dès une seule couche. Sa formule liquide, appliquée au pinceau intégré, est pensée pour une tenue longue sur la journée.",
    ],
    faits: [
      { libelle: "Format", valeur: "liquide, applicateur pinceau" },
      { libelle: "Fini", valeur: "mat" },
      { libelle: "Référence teinte", valeur: "808" },
    ],
    usage: [
      "Appliquer au pinceau applicateur en une couche fine et régulière, laisser sécher sans frotter les lèvres pour fixer le fini. Ne renouveler l'application qu'après un démaquillage complet des lèvres.",
    ],
    positionnement: [
      "Comme les autres références de la ligne, ce format liquide privilégie la tenue et l'intensité de couleur à l'hydratation. Il convient moins à un usage quotidien sur des lèvres sensibles ou sujettes aux gerçures.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sans crayon de contour ?",
        reponse:
          "Oui, l'applicateur pinceau permet de dessiner le contour directement. Un crayon reste utile pour affiner le tracé ou prolonger la tenue du rouge.",
      },
      {
        question: "Comment le retirer en fin de journée ?",
        reponse:
          "Un démaquillant biphasé ou une huile démaquillante retire plus facilement un rouge liquide mat qu'un simple lait démaquillant classique.",
      },
    ],
  },
  {
    slug: "kylie-jenner-lip-kit-100-posie-k-velvet",
    identite: [
      "Ce Lip Kit de la ligne originale Kylie Jenner, dans la teinte Posie K en version Velvet, réunit un rouge à lèvres liquide et son crayon de contour assorti, le format qui a lancé la marque avant qu'elle ne devienne Kylie Cosmetics. La version Velvet apporte un fini mat plus souple qu'un mat classique, moins asséchant à porter sur la durée.",
    ],
    faits: [
      { libelle: "Format", valeur: "duo rouge liquide et crayon" },
      { libelle: "Fini", valeur: "velvet, mat souple" },
      { libelle: "Teinte", valeur: "Posie K" },
    ],
    usage: [
      "Tracer d'abord le contour au crayon fourni, puis appliquer le rouge liquide par-dessus au pinceau applicateur. Laisser sécher quelques instants pour fixer le fini avant de refermer les lèvres.",
    ],
    positionnement: [
      "Ce format duo se distingue des rouges vendus seuls par le crayon assorti inclus, pratique pour une tenue prolongée sans acheter deux produits séparément. Il convient moins à qui préfère alterner les teintes de crayon et de rouge selon l'envie du moment.",
    ],
    faq: [
      {
        question: "Quelle différence entre Velvet et Matte chez Kylie ?",
        reponse:
          "Le Velvet est pensé comme un mat plus confortable à porter, moins asséchant que la formule Matte historique de la marque.",
      },
      {
        question: "Le crayon peut-il servir seul ?",
        reponse:
          "Oui, appliqué sur toute la lèvre il donne un fini mat plus discret que le duo complet, pour un maquillage plus léger.",
      },
    ],
  },
  {
    slug: "kylie-jenner-lip-kit-102-extraordinary-matte",
    identite: [
      "Ce Lip Kit Kylie Jenner en finition Matte, teinte Extraordinary, associe un rouge à lèvres liquide et un crayon de contour assorti, dans la formule Matte historique de la marque. Plus asséchante que la version Velvet, elle offre en contrepartie une couleur plus intense et plus couvrante en une seule couche.",
    ],
    faits: [
      { libelle: "Format", valeur: "duo rouge liquide et crayon" },
      { libelle: "Fini", valeur: "matte" },
      { libelle: "Teinte", valeur: "Extraordinary" },
    ],
    usage: [
      "Appliquer le crayon en contour puis le rouge liquide par-dessus, laisser sécher sans parler ni frotter pour fixer le mat. Hydrater les lèvres avant application si elles sont sèches, la formule Matte étant plus asséchante que le Velvet.",
    ],
    positionnement: [
      "Ce fini Matte s'adresse à qui privilégie l'intensité de couleur et la tenue à l'hydratation. Il convient moins aux lèvres déjà sèches ou gercées, sur lesquelles la version Velvet de la ligne sera plus confortable à porter.",
    ],
    faq: [
      {
        question: "Cette formule est-elle plus asséchante que le Velvet ?",
        reponse:
          "Oui, le Matte historique de la marque est reconnu comme plus asséchant : un baume avant application est recommandé sur lèvres sèches.",
      },
      {
        question: "Le duo inclut-il un crayon assorti ?",
        reponse:
          "Oui, chaque Lip Kit réunit un rouge liquide et un crayon dans la même teinte, pensés pour être utilisés ensemble.",
      },
    ],
  },
  {
    slug: "kylie-jenner-lip-kit-305-harmony-velvet",
    identite: [
      "Ce Lip Kit Kylie Jenner en finition Velvet, teinte Harmony, reprend le format duo de la ligne : un rouge à lèvres liquide et un crayon de contour assorti, avec le fini mat plus souple propre à la formule Velvet de la marque.",
    ],
    faits: [
      { libelle: "Format", valeur: "duo rouge liquide et crayon" },
      { libelle: "Fini", valeur: "velvet, mat souple" },
      { libelle: "Teinte", valeur: "Harmony" },
    ],
    usage: [
      "Tracer le contour au crayon avant d'appliquer le rouge liquide au pinceau, laisser sécher quelques instants pour fixer le fini. Le duo assorti évite d'avoir à chercher un crayon d'une teinte proche séparément.",
    ],
    positionnement: [
      "Comme les autres Velvet de la ligne, il vise le confort de port plutôt que l'intensité maximale de couleur. Il convient moins à qui cherche un mat très marqué et très longue tenue, mieux servi par la formule Matte de la marque.",
    ],
    faq: [
      {
        question: "Le fini Velvet tient-il aussi longtemps que le Matte ?",
        reponse:
          "La tenue est bonne mais généralement un peu inférieure au Matte historique, en échange d'un confort supérieur sur la journée.",
      },
      {
        question: "Peut-on utiliser le crayon d'un autre kit avec ce rouge ?",
        reponse:
          "Oui, rien n'empêche de mélanger crayon et rouge de teintes différentes selon l'effet de profondeur recherché.",
      },
    ],
  },
  {
    slug: "kylie-jenner-lip-kit-402-mar-jo-k-matte",
    identite: [
      "Ce Lip Kit Kylie Jenner en finition Matte, teinte Mar Jo K, reprend l'une des teintes de la gamme originale de la marque. Le duo réunit un rouge à lèvres liquide et un crayon de contour assorti, dans la formule Matte plus intense en couleur que le Velvet.",
    ],
    faits: [
      { libelle: "Format", valeur: "duo rouge liquide et crayon" },
      { libelle: "Fini", valeur: "matte" },
      { libelle: "Teinte", valeur: "Mar Jo K" },
    ],
    usage: [
      "Appliquer le crayon en contour puis le rouge liquide par-dessus au pinceau, laisser sécher sans frotter pour fixer le mat. Hydrater les lèvres avant application si elles sont sèches, la formule Matte étant plus asséchante.",
    ],
    positionnement: [
      "Teinte historique de la ligne originale, elle s'adresse à qui suit la marque depuis ses débuts. Comme les autres Matte de la gamme, elle convient moins aux lèvres sensibles ou déjà gercées.",
    ],
    faq: [
      {
        question: "Mar Jo K est-elle une teinte foncée ou claire ?",
        reponse:
          "Le nom seul ne permet pas de garantir la nuance exacte : mieux vaut vérifier une photo du produit avant achat pour la carnation visée.",
      },
      {
        question: "Le duo suffit-il sans autre produit ?",
        reponse:
          "Oui, le crayon et le rouge assortis suffisent à un maquillage des lèvres complet, sans autre produit nécessaire.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-creme-solaire-visage-hydratante-spf30-50ml",
    identite: [
      "Cette crème solaire visage de la gamme Anthelios de La Roche-Posay, indice de protection 30, propose un format hydratant pensé pour compléter une routine de soin sur les peaux sensibles. Sa texture crème allie protection UV et confort hydratant, conçue pour un usage quotidien sur le visage.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF30" },
      { libelle: "Format", valeur: "crème visage" },
      { libelle: "Type de peau", valeur: "peau sensible" },
    ],
    usage: [
      "Appliquer en dernière étape de la routine du matin, sur peau propre, en quantité suffisante pour couvrir tout le visage. Renouveler en cas d'exposition prolongée au soleil, la protection s'atténuant avec le temps et la transpiration.",
    ],
    positionnement: [
      "Dans le rayon crème solaire visage pour peau sensible, cette référence mise sur le confort hydratant à un indice moyen plutôt que sur la protection maximale. Pour une exposition intense ou prolongée, un indice SPF50 sera plus adapté.",
    ],
    faq: [
      {
        question: "Le SPF30 suffit-il en été ?",
        reponse:
          "Pour une exposition courte ou modérée, oui. Pour une exposition prolongée au soleil direct, un indice SPF50 reste préférable.",
      },
      {
        question: "Peut-elle remplacer la crème de jour habituelle ?",
        reponse:
          "Elle peut jouer ce rôle en période d'exposition, appliquée en dernière étape de la routine du matin sur peau propre.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-dermo-pediatrics-spf50-50ml",
    identite: [
      "Anthelios Dermo-Pediatrics de La Roche-Posay est la version de la gamme pensée pour la peau des enfants, avec un indice de protection 50+. Cette formule à haute protection répond à la fragilité de la peau enfantine face au soleil, dans un format adapté à un usage familial.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50+" },
      { libelle: "Public", valeur: "enfants" },
      { libelle: "Zone", valeur: "visage et corps" },
    ],
    usage: [
      "Appliquer généreusement avant l'exposition sur toutes les zones découvertes, renouveler après la baignade, la transpiration ou toutes les deux heures d'exposition. Privilégier aussi l'ombre et un vêtement couvrant aux heures les plus fortes.",
    ],
    positionnement: [
      "Dans le rayon crème solaire enfant, elle se distingue par l'indice de protection le plus élevé de la gamme, adapté à la sensibilité cutanée des plus jeunes. Elle n'est pas pensée pour un usage adulte au quotidien, où une formule plus légère suffit généralement.",
    ],
    faq: [
      {
        question: "À partir de quel âge peut-on l'utiliser ?",
        reponse:
          "Elle est conçue pour la peau des enfants en général. Un avis médical reste utile pour les très jeunes enfants ou les peaux à antécédents particuliers.",
      },
      {
        question: "Résiste-t-elle à l'eau ?",
        reponse:
          "Comme la plupart des solaires enfant, une résistance à l'eau existe, mais une réapplication après la baignade reste nécessaire pour maintenir la protection.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-fluide-spf30",
    identite: [
      "Anthelios Fluide SPF30 de La Roche-Posay propose une texture fluide, plus légère qu'une crème solaire classique, pensée pour s'intégrer à une routine de soin du visage au quotidien. Elle associe une protection solaire modérée à un fini plus discret, compatible avec une application de maquillage ensuite.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF30" },
      { libelle: "Texture", valeur: "fluide" },
      { libelle: "Usage", valeur: "routine du matin, sous maquillage possible" },
    ],
    usage: [
      "Appliquer en dernière étape du matin, sur peau propre, avant le maquillage si besoin. Renouveler en cas d'exposition prolongée au soleil dans la journée, le fluide n'étant pas conçu pour une résistance longue à l'eau.",
    ],
    positionnement: [
      "Classée ici parmi les crèmes hydratantes visage plutôt que dans le rayon solaire dédié, elle convient à qui cherche une protection au quotidien sans la texture plus riche d'une crème solaire classique. Pour une exposition longue en plein soleil, une protection plus élevée et plus résistante à l'eau sera préférable.",
    ],
    faq: [
      {
        question: "Peut-elle remplacer une crème solaire pour la plage ?",
        reponse:
          "Son format fluide est plutôt pensé pour un usage urbain quotidien. Une formule résistante à l'eau est préférable pour la baignade ou une exposition longue.",
      },
      {
        question: "Peut-on la porter sous le maquillage ?",
        reponse:
          "Oui, sa texture fluide est pensée pour ne pas alourdir le teint avant l'application du maquillage.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-haute-protection-format-familial-250ml",
    identite: [
      "Anthelios Haute Protection en format familial de 250 ml répond aux besoins d'exposition solaire du corps sur toute une saison, ou pour plusieurs membres d'une même famille. Le grand contenant permet de ne pas restreindre les quantités appliquées, un frein courant avec les formats plus petits.",
    ],
    faits: [
      { libelle: "Format", valeur: "flacon familial" },
      { libelle: "Zone", valeur: "corps" },
      { libelle: "Gamme", valeur: "Haute Protection" },
    ],
    usage: [
      "Appliquer généreusement avant l'exposition sur toutes les zones découvertes du corps, renouveler après la baignade, la transpiration ou toutes les deux heures. Le grand format évite de doser trop juste par souci d'économie.",
    ],
    positionnement: [
      "Dans le rayon crème solaire corps, ce format se distingue par sa contenance plutôt que par une formule différente des autres références Anthelios. Il convient à un usage familial ou fréquent, moins à qui souhaite tester la gamme avant de s'engager sur un grand volume.",
    ],
    faq: [
      {
        question: "Ce grand format change-t-il la formule ?",
        reponse:
          "Non, seul le volume change. La formule reste celle de la gamme Anthelios Haute Protection proposée dans les autres contenances.",
      },
      {
        question: "Peut-il servir à toute la famille ?",
        reponse:
          "Oui, c'est l'intérêt du format, à condition de vérifier que l'indice de protection convient à chaque âge concerné.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-invisible-ultra-resistant-spf-30-body-200ml",
    identite: [
      "Anthelios Invisible Ultra Resistant SPF30, en spray corps, permet une application rapide sans laisser de trace blanche ni de film gras. Sa formule ultra résistante est pensée pour tenir face à l'eau et à la transpiration lors d'activités extérieures ou sportives.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF30" },
      { libelle: "Format", valeur: "spray corps" },
      { libelle: "Fini", valeur: "invisible, non collant" },
    ],
    usage: [
      "Vaporiser à distance sur toutes les zones découvertes, étaler à la main pour une répartition homogène, renouveler après la baignade ou l'effort physique et toutes les deux heures d'exposition.",
    ],
    positionnement: [
      "Dans le rayon solaire pour peau sensible, ce format spray se distingue par sa rapidité d'application et son fini invisible, utile pour le sport ou les activités extérieures. Il convient moins à qui préfère contrôler visuellement la quantité appliquée, un spray rendant ce contrôle moins précis qu'une crème.",
    ],
    faq: [
      {
        question: "Peut-on l'appliquer sur le visage ?",
        reponse:
          "Un spray corporel est utilisable sur le visage en évitant la zone des yeux, mais une crème visage dédiée reste plus précise près du regard.",
      },
      {
        question: "Résiste-t-il vraiment à l'eau ?",
        reponse:
          "La résistance à l'eau limite la perte de protection à la baignade. Une réapplication après la sortie de l'eau reste recommandée pour maintenir l'efficacité.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-pigment-correct-spf-50-teintee-foncee-50ml",
    identite: [
      "Anthelios Pigment Correct SPF50 en teinte foncée associe une protection solaire élevée à un fini teinté, pensé pour unifier visuellement le teint tout en protégeant des UV. Cette teinte foncée est destinée aux carnations mates à foncées.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Teinte", valeur: "foncée" },
      { libelle: "Format", valeur: "crème teintée" },
    ],
    usage: [
      "Appliquer en dernière étape du matin sur peau propre, en quantité suffisante pour une protection efficace tout en unifiant le teint. Renouveler l'application en cas d'exposition prolongée, même si le fini teinté rend la surcouche moins visible.",
    ],
    positionnement: [
      "Dans le rayon crème solaire visage, elle se distingue par son double rôle protection et unification du teint, utile pour éviter une couche de fond de teint séparée. Elle convient moins aux carnations claires, sur lesquelles la teinte foncée resterait visible en surface.",
    ],
    faq: [
      {
        question: "Peut-elle remplacer le fond de teint ?",
        reponse:
          "Pour un usage quotidien léger, oui. Pour une couvrance plus poussée, un fond de teint reste nécessaire par-dessus selon l'occasion.",
      },
      {
        question: "Convient-elle aux peaux claires ?",
        reponse:
          "Non, cette teinte foncée est pensée pour les carnations mates à foncées, une version plus claire de la gamme existant pour les autres carnations.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-spf50-creme-hydratante-50ml",
    identite: [
      "Anthelios SPF50 Crème Hydratante propose une formule pensée pour les peaux grasses, avec un fini plus matifiant qu'une crème solaire classique. Son indice de protection élevé s'associe à une texture qui limite la sensation grasse souvent reprochée aux solaires visage.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Texture", valeur: "crème, fini matifiant" },
      { libelle: "Type de peau", valeur: "peau grasse" },
    ],
    usage: [
      "Appliquer en dernière étape du matin sur peau propre, en quantité suffisante pour couvrir tout le visage. Renouveler en cas d'exposition prolongée, la matité s'atténuant avec le temps et la transpiration.",
    ],
    positionnement: [
      "Dans le rayon crème solaire visage pour peau grasse, elle se distingue par son fini matifiant, pensé pour éviter la brillance qu'une crème solaire classique peut accentuer sur ce type de peau. Elle convient moins aux peaux sèches, qui trouveront cette texture insuffisamment nourrissante.",
    ],
    faq: [
      {
        question: "Convient-elle sous le maquillage ?",
        reponse:
          "Oui, son fini matifiant en fait une bonne base avant maquillage sur peau grasse, sans effet luisant après application.",
      },
      {
        question: "Est-elle adaptée aux peaux sèches ?",
        reponse:
          "Non, son fini matifiant est pensé pour limiter la brillance des peaux grasses. Une texture plus riche de la gamme conviendra mieux aux peaux sèches.",
      },
    ],
  },
  {
    slug: "la-roche-posay-anthelios-spf50-huile-nutritive-200ml",
    identite: [
      "Anthelios SPF50 Huile Nutritive est une texture huile pour le corps qui associe protection solaire élevée et effet nourrissant, pensée pour les peaux sèches en exposition. Son fini laisse un aspect satiné sur la peau, avec un toucher moins gras qu'une huile classique une fois étalée.",
    ],
    faits: [
      { libelle: "Indice de protection", valeur: "SPF50" },
      { libelle: "Texture", valeur: "huile" },
      { libelle: "Zone", valeur: "corps" },
    ],
    usage: [
      "Appliquer sur peau sèche avant l'exposition, en couche suffisante sur toutes les zones découvertes. Renouveler après la baignade, la transpiration ou toutes les deux heures d'exposition.",
    ],
    positionnement: [
      "Dans le rayon crème solaire corps, cette texture huile se distingue des laits et crèmes classiques par son fini nourrissant et satiné. Elle convient moins aux peaux grasses ou à une utilisation sur le visage, où une texture plus légère sera préférable.",
    ],
    faq: [
      {
        question: "Peut-on l'utiliser sur le visage ?",
        reponse:
          "Une huile corporelle est généralement trop riche pour le visage. Une crème solaire visage dédiée reste préférable pour cette zone plus fine.",
      },
      {
        question: "Convient-elle aux peaux grasses ?",
        reponse:
          "Non, le fini huileux et nourrissant est pensé pour les peaux sèches. Une texture crème ou fluide conviendra mieux aux peaux grasses.",
      },
    ],
  },
];
