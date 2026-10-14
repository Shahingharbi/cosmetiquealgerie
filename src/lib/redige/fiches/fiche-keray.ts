import type { FicheRedigee } from "@/lib/redige/types";

/**
 * Fiches du partenaire KERAY Laboratoire, rédigées d'après le catalogue du
 * fabricant (14/10/2026) : composition, mode d'emploi et précautions sont les
 * siens, mot pour mot quand il s'agit de sécurité.
 */
export const LOT: FicheRedigee[] = [
  {
    slug: "keray-clean-skin-gel-nettoyant-visage-peau-grasse-200ml",
    identite: [
      "Clean Skin est le gel nettoyant visage de KERAY Laboratoire pour les peaux grasses et mixtes. Sa formule associe l'huile essentielle d'arbre à thé, connue pour assainir la peau, à l'extrait d'aloe vera, au panthénol et à la vitamine E, qui évitent l'effet décapant de beaucoup de nettoyants purifiants. Le laboratoire le présente comme un soin de double nettoyage : il élimine l'excès de sébum, resserre visuellement les pores et aide à prévenir l'apparition des imperfections, sans laisser la peau tirer après le rinçage.",
    ],
    faits: [
      { libelle: "Type de peau", valeur: "Grasse à mixte" },
      { libelle: "Actifs", valeur: "Huile essentielle d'arbre à thé, aloe vera, vitamine E, vitamine B5" },
      { libelle: "Format", valeur: "Flacon pompe de 200 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Usage externe. Éviter le contour des yeux ; en cas de contact, rincer abondamment. Ne pas utiliser sur une peau irritée ou lésée. Tenir hors de portée des enfants." },
    ],
    usage: [
      "Humidifiez le visage, déposez une noisette de gel sur le bout des doigts et massez en petits cercles en évitant le contour des yeux, puis rincez à l'eau claire. Matin et soir, il remplace le savon. Après un maquillage, passez d'abord une eau micellaire, puis Clean Skin pour terminer le nettoyage.",
    ],
    positionnement: [
      "Là où beaucoup de gels pour peau grasse misent sur des tensioactifs forts qui assèchent puis relancent le sébum, Clean Skin équilibre l'arbre à thé purifiant par l'aloe vera et le panthénol. C'est un nettoyant de tous les jours, pas un traitement ponctuel : sur une acné installée, il accompagne un soin ciblé sans le remplacer.",
    ],
    faq: [
      {
        question: "Clean Skin convient-il à une peau mixte ?",
        reponse:
          "Oui, il est formulé pour les peaux grasses à mixtes. Si vos joues tiraillent après usage, alternez avec Hydra Skin, le gel KERAY pour peaux sèches.",
      },
    ],
  },
  {
    slug: "keray-hydra-skin-gel-nettoyant-visage-peau-seche-200ml",
    identite: [
      "Hydra Skin est le gel nettoyant visage de KERAY Laboratoire pour les peaux sèches à normales. Sa texture gel-huile, à l'huile de ricin, nettoie sans retirer le film protecteur de la peau, ce qui fait la différence pour une peau qui tiraille après chaque lavage. L'extrait d'aloe vera apaise, la vitamine E protège et le panthénol, ou vitamine B5, aide la peau à garder sa souplesse. Le laboratoire le présente comme un soin qui nourrit en profondeur et hydrate intensément dès le nettoyage.",
    ],
    faits: [
      { libelle: "Type de peau", valeur: "Sèche à normale" },
      { libelle: "Texture", valeur: "Gel-huile, double nettoyage" },
      { libelle: "Actifs", valeur: "Huile de ricin, aloe vera, vitamine E, vitamine B5" },
      { libelle: "Format", valeur: "Flacon pompe de 200 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Usage externe. Éviter le contour des yeux ; en cas de contact, rincer abondamment. Ne pas utiliser sur une peau irritée ou lésée. Tenir hors de portée des enfants." },
    ],
    usage: [
      "Sur visage humide, massez une noisette de gel du bout des doigts en évitant le contour des yeux, puis rincez à l'eau tiède plutôt que chaude, qui assèche davantage. Il s'utilise matin et soir. Appliquez ensuite votre crème hydratante sur une peau encore légèrement humide pour mieux retenir l'eau.",
    ],
    positionnement: [
      "Une peau sèche supporte mal les gels moussants classiques. Hydra Skin apporte ce qui leur manque : une phase huileuse qui nettoie en douceur. C'est le choix logique pour l'hiver, pour une peau qui pèle ou pour accompagner un soin asséchant. Une peau grasse lui préférera Clean Skin.",
    ],
    faq: [
      {
        question: "Hydra Skin démaquille-t-il ?",
        reponse:
          "Sa phase huileuse dissout un maquillage léger. Pour un maquillage longue tenue ou un mascara waterproof, commencez par Claria, l'eau micellaire biphasée KERAY.",
      },
    ],
  },
  {
    slug: "keray-hydra-glow-5-duo-creme-serum-50ml",
    identite: [
      "Hydra Glow +5 est le duo crème sérum de KERAY Laboratoire : la concentration d'un sérum dans le confort d'une crème. Le « +5 » désigne ses cinq actifs, l'acide hyaluronique pour l'hydratation et le rebond, la niacinamide pour unifier le teint, la vitamine C stabilisée pour l'éclat et l'atténuation des taches, la vitamine E et le panthénol pour protéger et apaiser. Il s'adresse à tous les types de peau, avec un objectif clair annoncé par le laboratoire : un teint lumineux, uniforme, et des taches moins visibles.",
    ],
    faits: [
      { libelle: "Actifs", valeur: "Acide hyaluronique, niacinamide, vitamine C stabilisée, vitamine E, vitamine B5" },
      { libelle: "Type de peau", valeur: "Tous types de peau" },
      { libelle: "Format", valeur: "Flacon pompe de 50 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Usage externe. Éviter le contact avec les yeux ; en cas de contact, rincer abondamment. Ne pas utiliser sur une peau irritée ou lésée. Tenir hors de portée des enfants." },
    ],
    usage: [
      "Appliquez une à deux pressions matin et soir sur le visage et le cou propres et secs, en massant jusqu'à absorption. Le matin, terminez par une protection solaire : la vitamine C et la niacinamide n'atténuent durablement les taches que sur une peau protégée du soleil. Un seul produit suffit, inutile d'ajouter une crème par-dessus si votre peau n'est pas très sèche.",
    ],
    positionnement: [
      "Le format duo évite d'empiler sérum et crème, ce qui simplifie la routine et réduit le budget. Sa vitamine C est sous forme stabilisée, moins sujette à l'oxydation et mieux tolérée que l'acide ascorbique pur. Pour un objectif rides et fermeté plutôt qu'éclat, Complex Jeunesse est plus indiqué.",
    ],
    faq: [
      {
        question: "Hydra Glow +5 s'utilise-t-il le jour ?",
        reponse:
          "Oui, matin et soir. Le matin, il se complète d'une crème solaire, indispensable dès que l'on cherche à estomper des taches.",
      },
    ],
  },
  {
    slug: "keray-complex-jeunesse-creme-anti-age-50ml",
    identite: [
      "Complex Jeunesse est la crème anti-âge de KERAY Laboratoire, pour le visage et le cou. Elle réunit la niacinamide, qui aide à resserrer les pores et à lisser le grain de peau, la vitamine C stabilisée, qui ravive l'éclat, et le duo vitamine E et panthénol, qui protège la peau du stress oxydatif et l'apaise. La glycérine et la paraffine assurent une hydratation durable. Le laboratoire annonce trois effets : réduction des rides, peau plus ferme et plus élastique, aspect plus jeune et reposé.",
    ],
    faits: [
      { libelle: "Actifs", valeur: "Niacinamide, vitamine C stabilisée, vitamine E, vitamine B5" },
      { libelle: "Zone", valeur: "Visage et cou" },
      { libelle: "Type de peau", valeur: "Tous types de peau" },
      { libelle: "Format", valeur: "Flacon pompe de 50 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Usage externe. Éviter le contact avec les yeux ; en cas de contact, rincer abondamment. Ne pas utiliser sur une peau irritée ou lésée. Tenir hors de portée des enfants." },
    ],
    usage: [
      "Matin et soir, appliquez la crème sur le visage et le cou propres et secs, en remontant du bas vers le haut pour accompagner les traits. Le cou, souvent oublié, marque tôt les signes de l'âge. Le matin, finissez par une protection solaire, premier geste anti-âge. Comptez quelques semaines d'usage régulier avant de juger le résultat.",
    ],
    positionnement: [
      "Complex Jeunesse mise sur des actifs éprouvés et bien tolérés plutôt que sur le rétinol, souvent irritant au début. Elle convient donc à qui commence une routine anti-âge ou ne supporte pas les soins trop actifs. Pour un teint terne ou taché plus que ridé, Hydra Glow +5 répond mieux au besoin.",
    ],
    faq: [
      {
        question: "À partir de quel âge utiliser Complex Jeunesse ?",
        reponse:
          "Dès l'apparition des premières rides, souvent vers la trentaine. Ses actifs doux permettent de commencer tôt sans irriter la peau.",
      },
    ],
  },
  {
    slug: "keray-white-correct-creme-zones-brunes-50ml",
    identite: [
      "White Correct+ est la crème zones brunes de KERAY Laboratoire, conçue pour les zones du corps qui foncent avec les frottements : aisselles, entrejambe, plis cutanés, coudes et genoux. L'argile blanche, ou kaolin, absorbe l'excès de sébum et affine le grain de peau, l'oxyde de zinc apaise et protège, la niacinamide agit sur les irrégularités pigmentaires. La vitamine E et le panthénol gardent la peau souple, ce qui compte sur des zones fines et sensibles. Le laboratoire annonce un résultat uniforme, lisse et éclatant.",
    ],
    faits: [
      { libelle: "Zones", valeur: "Aisselles, entrejambe, plis cutanés, coudes, genoux" },
      { libelle: "Actifs", valeur: "Argile blanche (kaolin), oxyde de zinc, niacinamide, vitamine E, vitamine B5" },
      { libelle: "Type de peau", valeur: "Tous types de peau" },
      { libelle: "Format", valeur: "Flacon pompe de 50 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Lire la notice avant usage. Usage externe, ne pas avaler. Ne pas appliquer sur une peau irritée ou lésée, ni sur les muqueuses. Éviter le contact avec les yeux. Tenir hors de portée des enfants." },
    ],
    usage: [
      "Appliquez matin et soir une fine couche sur la zone propre et bien sèche, en massant jusqu'à pénétration. Évitez de l'appliquer juste après un rasage ou une épilation, quand la peau est sensibilisée : attendez le lendemain. Les zones pigmentées s'estompent progressivement, comptez plusieurs semaines d'usage régulier.",
    ],
    positionnement: [
      "Les zones brunes du corps ne se traitent pas comme une tache du visage : la peau y est plus fine et soumise aux frottements. White Correct+ s'appuie sur la niacinamide et l'oxyde de zinc, des actifs doux, plutôt que sur des agents agressifs. C'est un soin à tenir dans la durée, qui ne promet pas de miracle en quelques jours.",
    ],
    faq: [
      {
        question: "White Correct+ s'utilise-t-il sur le visage ?",
        reponse:
          "Le fabricant le destine aux zones du corps : aisselles, plis, coudes et genoux. Pour les taches du visage, Hydra Glow +5 est le soin indiqué de la gamme.",
      },
    ],
  },
  {
    slug: "keray-cica-creme-visage-corps-50ml",
    identite: [
      "Cica KERAY est la crème réparatrice de KERAY Laboratoire, pour le visage comme pour le corps. Elle répare, apaise et protège les peaux abîmées par le froid, le soleil, le rasage ou les frottements. L'allantoïne et le panthénol, ou vitamine B5, soutiennent la réparation, le beurre de karité et l'huile d'amande douce nourrissent, l'oxyde de zinc protège. La formule ajoute de la niacinamide et de l'alpha-arbutine, qui aident à prévenir les marques brunes qu'une irritation laisse souvent derrière elle.",
    ],
    faits: [
      { libelle: "Zone", valeur: "Visage et corps" },
      { libelle: "Actifs", valeur: "Allantoïne, vitamine B5, niacinamide, alpha-arbutine, beurre de karité, oxyde de zinc" },
      { libelle: "Format", valeur: "Flacon pompe de 50 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Tenir hors de portée des enfants. En cas de contact avec les yeux, rincer abondamment à l'eau." },
    ],
    usage: [
      "Appliquez une à deux fois par jour sur une peau propre et sèche, en massant délicatement jusqu'à absorption complète. Sur une zone très sèche, comme des mains gercées ou des coudes rêches, une couche un peu plus épaisse le soir agit pendant la nuit.",
    ],
    positionnement: [
      "Les crèmes « cica » se contentent souvent de réparer. Celle-ci ajoute niacinamide et alpha-arbutine, ce qui la rend utile après une irritation, quand la peau risque de garder une trace plus foncée. Son format pompe la rend aussi plus hygiénique qu'un pot. Ce n'est pas un soin pour plaie ouverte ou brûlure : dans ce cas, consultez un professionnel de santé.",
    ],
    faq: [
      {
        question: "Cica KERAY convient-elle après le rasage ?",
        reponse:
          "Oui, elle apaise le feu du rasoir sur le visage comme sur les jambes ou les aisselles. Appliquez-la sur une peau propre et sèche.",
      },
    ],
  },
  {
    slug: "keray-claria-eau-micellaire-biphasee-150ml",
    identite: [
      "Claria est l'eau micellaire biphasée de KERAY Laboratoire. Ses deux phases, visibles dans le flacon, se mélangent quand on l'agite : la phase aqueuse nettoie, la phase huileuse, à l'huile d'amande douce et à l'huile de ricin, dissout le maquillage, même résistant à l'eau. La vitamine E protège la peau pendant le démaquillage. Elle nettoie le visage, les yeux et les lèvres sans rinçage, en douceur, et convient à tous les types de peau selon le fabricant.",
    ],
    faits: [
      { libelle: "Texture", valeur: "Biphasée, à agiter avant usage" },
      { libelle: "Zones", valeur: "Visage, yeux et lèvres" },
      { libelle: "Actifs", valeur: "Huile d'amande douce, huile de ricin, vitamine E" },
      { libelle: "Format", valeur: "Flacon de 150 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Tenir hors de portée des enfants. En cas de contact avec les yeux, rincer abondamment à l'eau." },
    ],
    usage: [
      "Agitez le flacon pour mélanger les deux phases, imbibez un coton et passez-le sur le visage, les yeux et les lèvres. Sur les yeux, posez le coton quelques secondes avant de le faire glisser : le mascara se détache sans frotter. Aucun rinçage n'est nécessaire, mais un gel nettoyant ensuite complète le démaquillage du soir.",
    ],
    positionnement: [
      "Une eau micellaire classique peine sur le mascara waterproof et les rouges à lèvres tenaces ; la phase huileuse de Claria les retire sans insister. Elle laisse en revanche un léger voile huileux : les peaux grasses enchaîneront avec Clean Skin, les peaux sèches avec Hydra Skin.",
    ],
    faq: [
      {
        question: "Claria retire-t-elle le maquillage waterproof ?",
        reponse:
          "Oui, c'est l'intérêt d'une eau micellaire biphasée : sa phase huileuse dissout le mascara et le maquillage résistants à l'eau.",
      },
    ],
  },
  {
    slug: "keray-purelia-creme-nettoyante-corps-150ml",
    identite: [
      "Purelia est la crème nettoyante et hydratante de KERAY Laboratoire pour le corps. Elle remplace le gel douche pour les peaux qui tiraillent en sortant de la douche : sa base crème, à l'huile d'amande douce, à la cire d'abeille et à la glycérine, lave avec des tensioactifs doux tout en déposant un film relipidant. Le panthénol et la vitamine E complètent la formule. Le laboratoire résume ses quatre effets sur le flacon : nettoie, hydrate, nourrit et relipide.",
    ],
    faits: [
      { libelle: "Zone", valeur: "Corps" },
      { libelle: "Actifs", valeur: "Huile d'amande douce, vitamine B5, vitamine E, glycérine" },
      { libelle: "Format", valeur: "Flacon pompe de 150 ml" },
      { libelle: "Fabrication", valeur: "Algérie, laboratoire RK PHARM" },
      { libelle: "Précautions", valeur: "Tenir hors de portée des enfants. En cas de contact avec les yeux, rincer abondamment à l'eau." },
    ],
    usage: [
      "Sous la douche, appliquez la crème sur la peau humide, massez délicatement, puis rincez soigneusement à l'eau tiède. Elle mousse peu, c'est normal pour une crème lavante. Sur une peau très sèche, elle peut suffire sans lait corporel après la douche.",
    ],
    positionnement: [
      "Un gel douche moussant décape le film hydrolipidique, surtout avec une eau calcaire. Purelia fait l'inverse : elle nettoie en laissant une partie de ses huiles sur la peau. C'est le bon choix pour les peaux sèches, ou pour l'hiver.",
    ],
    faq: [
      {
        question: "Purelia s'utilise-t-elle sur le visage ?",
        reponse:
          "Elle est formulée pour le corps. Pour le visage, KERAY propose des gels dédiés : Clean Skin pour les peaux grasses, Hydra Skin pour les peaux sèches.",
      },
    ],
  },
];
