import type { Famille } from "@/lib/familles-produits";

/** Familles du maquillage de teint : fond de teint, poudre, anti-cernes, blush et enlumineur. */
export const FAMILLES_MAQUILLAGE_TEINT: Record<string, Famille> = {
  "fond-de-teint": {
    nature: ["fond de teint", "base de teint fluide"],
    genre: "m",
    zone: "le visage",
    role: [
      "{nom} unifie le teint en camouflant rougeurs, taches et imperfections sur {zone}, sans changer le relief naturel de la peau.",
      "Un {nature} ajuste la couleur perçue de la peau et sert de base aux produits appliqués ensuite, comme le blush ou la poudre.",
      "{nom} laisse un fini plus ou moins couvrant selon la formule, du voile léger au maquillage totalement opaque.",
    ],
    geste: [
      "Déposer quelques points de {nom} sur le front, les joues, le nez et le menton, puis estomper vers l'extérieur avec les doigts, une éponge humide ou un pinceau.",
      "Travailler {ce} par petites touches plutôt qu'en une seule couche épaisse : il est plus simple d'ajouter de la matière que d'en retirer.",
      "Insister sur la lisière du visage, près des cheveux et de la mâchoire, pour éviter une démarcation visible avec le cou.",
    ],
    moment: [
      "{Le} s'applique après la crème hydratante et la protection solaire, une fois que les soins ont eu le temps de pénétrer.",
      "En climat chaud et sec, patienter quelques minutes après le soin de {zone} évite que {le} ne glisse ou ne s'accumule dans les pores.",
    ],
    precaution: [
      "Sur peau non préparée, {ce} marque davantage les zones sèches ou les pores dilatés : une base lissante en amont améliore le résultat.",
    ],
    faq: [
      {
        q: "Comment choisir sa teinte de fond de teint ?",
        r: "La teinte se teste sur la mâchoire, à la lumière du jour, jamais sur la main ou le poignet dont la carnation diffère du visage. Elle doit se fondre sans laisser de ligne visible après quelques minutes, une fois oxydée au contact de l'air. En cas de doute entre deux teintes, la plus claire se corrige plus facilement avec une poudre.",
      },
      {
        q: "Combien de temps tient un fond de teint dans la journée ?",
        r: "La tenue dépend de la formule, du type de peau et de la chaleur ambiante : une peau grasse ou une forte chaleur réduisent la durée du maquillage. Une préparation avec une base matifiante et une fixation à la poudre libre prolongent généralement le résultat. Sur peau sèche, la tenue est souvent plus longue mais le fini peut marquer les zones déshydratées.",
      },
      {
        q: "Faut-il appliquer une crème hydratante avant le fond de teint ?",
        r: "Oui, {le} se pose toujours sur une peau hydratée : sans cette étape, il accroche les zones sèches et met en évidence chaque imperfection de texture. Il faut laisser au soin le temps de pénétrer, une à deux minutes, avant d'appliquer le maquillage. Une peau bien préparée demande aussi moins de produit pour un résultat homogène.",
      },
    ],
  },

  "poudre-visage": {
    nature: ["poudre libre", "poudre compacte"],
    genre: "f",
    zone: "le visage",
    role: [
      "{nom} fixe le maquillage appliqué en dessous et réduit la brillance qui apparaît sur {zone} au fil de la journée.",
      "Une {nature} absorbe l'excès de sébum, surtout sur la zone T, front, nez et menton, sans modifier la couleur du teint.",
      "{nom} prolonge la tenue du fond de teint ou de l'anti-cernes en les protégeant du transfert et de la transpiration.",
    ],
    geste: [
      "Prélever {nom} avec un pinceau ou une houppette, retirer l'excédent, puis tamponner {zone} sans frotter pour ne pas déplacer le maquillage en dessous.",
      "Insister sur la zone T si la peau est grasse, et appliquer une couche plus fine sur les joues pour garder un fini naturel.",
      "Utiliser {ce} par pressions successives plutôt qu'en mouvements circulaires, qui ont tendance à strier le fond de teint encore frais.",
    ],
    moment: [
      "{Ce} intervient juste après le fond de teint ou l'anti-cernes, pour fixer le maquillage avant les retouches de la journée.",
      "Une seconde application en cours de journée, sur les zones brillantes uniquement, permet de matifier sans alourdir le résultat.",
    ],
    precaution: [
      "Sur peau sèche, une couche trop épaisse de {nom} accentue les ridules et marque les zones de tiraillement : une application localisée suffit.",
    ],
    faq: [
      {
        q: "Poudre libre ou poudre compacte, quelle différence ?",
        r: "La poudre libre, plus fine, sert surtout à fixer le maquillage à la maison et convient aux peaux sèches à normales. La poudre compacte, plus dense, est pensée pour les retouches en journée grâce à son format transportable. Les peaux grasses combinent souvent les deux : la libre le matin, la compacte pour les retouches.",
      },
      {
        q: "La poudre est-elle nécessaire si on ne porte pas de fond de teint ?",
        r: "Non, {ce} sert avant tout à fixer un maquillage déjà posé en dessous. Sur peau nue, elle peut néanmoins matifier une zone T grasse ou fixer un anti-cernes appliqué seul. Elle n'est jamais indispensable, son usage dépend surtout du confort recherché face à la brillance.",
      },
      {
        q: "Comment éviter l'effet plâtré avec une poudre visage ?",
        r: "L'effet plâtré vient presque toujours d'une quantité excessive ou d'une peau insuffisamment hydratée avant le maquillage. Appliquer {nom} en couche fine, uniquement sur les zones qui brillent, et tamponner plutôt que frotter limitent ce risque. Un pinceau plutôt qu'une houppette dépose aussi moins de matière.",
      },
    ],
  },

  "anti-cernes": {
    nature: ["anti-cernes", "correcteur de cernes"],
    genre: "m",
    zone: "le contour des yeux",
    role: [
      "{nom} corrige la teinte plus foncée qui apparaît sous les yeux, due à la finesse de la peau et à la visibilité des vaisseaux à cet endroit.",
      "Un {nature} illumine {zone} et atténue l'aspect creusé ou fatigué du regard, sans agir sur la cause de ces marques.",
      "{nom} se distingue du fond de teint par une couvrance plus ciblée et une texture pensée pour une peau fine et mobile.",
    ],
    geste: [
      "Déposer un petit triangle de {nom} sous l'œil, la base vers le bas, puis tapoter avec l'annulaire ou une éponge pour l'estomper sans le faire glisser.",
      "Utiliser {ce} avec parcimonie : une fine couche suffit, une couche épaisse s'accumule dans les ridules et souligne la fatigue au lieu de la masquer.",
      "Étendre légèrement vers la tempe et l'aile du nez si des rougeurs y persistent, en tapotant plutôt qu'en frottant.",
    ],
    moment: [
      "{Le} s'applique après le fond de teint, une fois le teint unifié, pour ne corriger que ce qui reste visible.",
      "Une fixation légère à la poudre, appliquée en tamponnant, évite que {ce} ne se loge dans les ridules au cours de la journée.",
    ],
    precaution: [
      "La peau du contour des yeux est plus fine que le reste du visage : un produit non prévu pour cette zone peut irriter ou marquer davantage les ridules.",
    ],
    faq: [
      {
        q: "Comment choisir la teinte de son anti-cernes ?",
        r: "Pour un cerne bleuté ou violacé, une teinte légèrement plus claire que le teint et à sous-ton pêche ou saumon neutralise mieux la couleur. Pour un cerne simplement plus foncé sans nuance particulière, une teinte proche du fond de teint suffit. Tester sous l'œil, à la lumière du jour, reste le repère le plus fiable.",
      },
      {
        q: "Faut-il appliquer l'anti-cernes avant ou après le fond de teint ?",
        r: "Après, dans la majorité des routines : le fond de teint unifie déjà une partie de la zone, {le} ne corrige alors que ce qui reste visible, en quantité moindre. Certaines routines l'appliquent avant pour construire la couvrance en couches, mais cela demande plus de matière au total.",
      },
      {
        q: "Pourquoi l'anti-cernes craquelle-t-il dans la journée ?",
        r: "Ce phénomène apparaît surtout quand la zone n'est pas assez hydratée avant l'application ou quand la couche posée est trop épaisse. Une crème contour des yeux appliquée quelques minutes avant, suivie d'une fixation légère à la poudre, limite ce marquage. Une peau bien préparée retient mieux {nom} au fil de la journée.",
      },
    ],
  },

  blush: {
    nature: ["blush", "fard à joues"],
    genre: "m",
    zone: "les pommettes",
    role: [
      "{nom} redonne de la couleur aux pommettes et évite au teint de paraître plat une fois le fond de teint posé.",
      "Un {nature} reproduit l'effet naturel d'une peau qui rosit, sur le nez ou après un effort, selon la teinte choisie.",
      "{nom} existe en poudre, crème ou liquide, trois textures qui changent le geste d'application mais pas la fonction du produit.",
    ],
    geste: [
      "Sourire légèrement pour repérer le point le plus saillant de la pommette, puis y déposer {nom} avant d'estomper vers la tempe.",
      "Commencer avec une petite quantité et superposer si besoin : {ce} se rattrape plus facilement en ajoutant qu'en retirant.",
      "Pour une texture crème ou liquide, tapoter avec les doigts ou une éponge avant que le fond de teint ne soit fixé par la poudre.",
    ],
    moment: [
      "{Ce} se place après le fond de teint et l'anti-cernes, pour redonner du relief à un teint déjà unifié.",
      "L'ordre change avec la texture : une version crème se pose avant la poudre fixante, une version poudre après.",
    ],
    faq: [
      {
        q: "Comment choisir la couleur de son blush selon son teint ?",
        r: "Les tons rosés et pêche conviennent à la majorité des carnations claires à moyennes, les tons corail ou brique se voient mieux sur les peaux mates à foncées. Pincer légèrement sa joue donne une indication de la couleur naturelle du rosissement, un repère simple pour orienter le choix.",
      },
      {
        q: "Blush en poudre ou en crème, lequel dure le plus longtemps ?",
        r: "La version crème ou liquide se fond dans la peau et tient bien sur peau sèche à normale, mais peut glisser sur peau grasse en climat chaud. La version poudre s'accroche mieux à une peau qui transpire et se superpose facilement en cours de journée pour raviver la couleur.",
      },
      {
        q: "Où placer le blush selon la forme du visage ?",
        r: "Sur les pommettes hautes, {nom} appliqué en cercle ouvre le regard ; appliqué en diagonale vers la tempe, il allonge un visage plus rond. Il n'existe pas de placement universel : le point le plus saillant de la pommette, repéré en souriant, reste le meilleur repère pour commencer.",
      },
    ],
  },

  enlumineur: {
    nature: ["enlumineur", "illuminateur de teint"],
    genre: "m",
    zone: "les points hauts du visage",
    role: [
      "{nom} reflète la lumière sur {zone} : le haut des pommettes, l'arête du nez, l'arc de cupidon et le coin interne de l'œil.",
      "Un {nature} donne un aspect lumineux à la peau, sans ajouter de couleur au teint comme le ferait un blush.",
      "{nom} accentue le relief naturel du visage en marquant légèrement le contraste entre les zones saillantes et le reste du teint.",
    ],
    geste: [
      "Déposer {nom} du bout du doigt ou d'un pinceau fin sur les zones à réhausser, puis tapoter légèrement pour fondre les bords.",
      "Utiliser {ce} avec parcimonie : une pointe suffit, l'effet recherché reste discret plutôt que scintillant.",
      "Sur une peau déjà grasse, réserver {le} au haut des pommettes et au coin de l'œil, en évitant le centre du visage.",
    ],
    moment: [
      "{Ce} intervient en toute fin de routine maquillage, après le blush, pour ne pas être recouvert par les produits suivants.",
      "Une application le jour se fait en quantité réduite, l'effet se voit davantage en lumière naturelle qu'en lumière artificielle.",
    ],
    precaution: [
      "Sur une peau à tendance grasse ou par forte chaleur, {nom} peut accentuer la brillance existante : une texture poudre tient alors mieux qu'une texture crème.",
    ],
    faq: [
      {
        q: "Quelle différence entre un enlumineur et un blush ?",
        r: "Le blush ajoute de la couleur aux joues pour reproduire un teint qui rosit, tandis que {nom} ajoute de la lumière sans changer la teinte du visage. Les deux se combinent souvent : le blush pour la couleur, l'enlumineur en fine touche par-dessus pour accentuer le point le plus saillant de la pommette.",
      },
      {
        q: "Comment appliquer un enlumineur sans effet trop brillant ?",
        r: "Une petite quantité appliquée uniquement sur les points hauts du visage, puis fondue avec les doigts ou un pinceau propre, donne un résultat discret. Superposer par petites touches plutôt qu'en une seule fois permet de doser précisément et d'éviter un effet trop marqué, notamment en photo avec flash.",
      },
      {
        q: "L'enlumineur convient-il à la peau grasse ?",
        r: "Oui, à condition de choisir une texture poudre plutôt que crème, et de l'appliquer uniquement sur les zones ciblées comme le haut des pommettes. Une peau déjà brillante au centre du visage n'a pas besoin d'enlumineur sur le nez ou le front, où l'effet naturel existe déjà.",
      },
    ],
  },
};
