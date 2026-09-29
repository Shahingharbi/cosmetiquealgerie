/**
 * Pyramides olfactives relevees sur Fragrantica. FICHIER GENERE.
 *
 * Produit par pipeline/10-fragrantica/fragrantica.py. Ne pas editer a la
 * main : la prochaine execution ecraserait la modification.
 *
 * Cet index est ADDITIF et independant du contenu redige. Il ne remplace
 * aucune note : la fiche produit y puise la famille olfactive, les notes et
 * la concentration, qu'une note ecrite a la main existe ou non pour ce
 * produit. C'est la seule facon de servir les deux cas -- un parfum dont la
 * note est redigee mais dont la pyramide echappait au redacteur, et un
 * parfum sans note du tout.
 *
 * Une premiere version ecrivait ces entrees comme des FicheRedigee ne
 * portant que le champ olfactif. Elles etaient silencieusement ignorees :
 * le champ identite est obligatoire, et ficheRedigee() rejette une entree
 * qui en manque. Ne pas y revenir.
 *
 * Chaque appariement a passe quatre garde-fous : meme maison, 75 % des mots
 * du nom en commun hors nom de maison, couverture bidirectionnelle stricte
 * (le candidat n'ajoute aucun mot significatif), et refus si les
 * concentrations ou les contenances divergent. Le detail, refus compris,
 * est dans donnees/fragrantica.tsv.
 */

export interface PyramideOlfactive {
  famille?: string;
  tete?: string;
  coeur?: string;
  fond?: string;
  concentration?: string;
  annee?: string;
  parfumeur?: string;
}

const PYRAMIDES: Record<string, PyramideOlfactive> = {
  "acqua-di-parma-coffret-essenza-di-colonia-eau-de-cologne": {
    "coeur": "Rose, Jasmin, Clou de girofle",
    "concentration": "Eau de cologne",
    "fond": "Vétiver, Musc, Ambre, Patchouli",
    "tete": "Citron, Orange, Bergamote, Pamplemousse, Mandarine, Petit-grain"
  },
  "acqua-di-parma-eau-de-parfum-magnolia-nobile-100ml": {
    "annee": "2009",
    "coeur": "Magnolia, Jasmin, Tubéreuse, Rose",
    "concentration": "Eau de parfum",
    "fond": "Vétiver, Bois de santal, Patchouli, Vanille",
    "tete": "Cédrat, Citron, Bergamote"
  },
  "armani-si-passione-eclat-eau-de-parfum-100ml": {
    "annee": "2022",
    "coeur": "Rose de Mai, Rose de Damas",
    "concentration": "Eau de parfum",
    "fond": "Musc blanc, Vanille de Madagascar",
    "tete": "Cassis, Bergamote de Calabre"
  },
  "armani-way-floral-eau-de-parfum-90ml": {
    "annee": "2022",
    "coeur": "Tubéreuse d'Inde, Néroli de Tunisie",
    "concentration": "Eau de parfum",
    "fond": "Vanille bourbon, Musc blanc",
    "tete": "Fleur d'oranger, Mandarine verte, Bigarade"
  },
  "armani-way-intense-eau-de-parfum-90ml": {
    "annee": "2021",
    "coeur": "Tubéreuse d'Inde, Tubéreuse",
    "concentration": "Eau de parfum",
    "fond": "Vanille de Madagascar, Bois de santal",
    "tete": "Fleur d'oranger, Bigarade"
  },
  "boss-collection-energetic-fougere-eau-de-parfum-100ml": {
    "annee": "2021",
    "coeur": "Géranium, Rose",
    "concentration": "Eau de parfum",
    "fond": "Bois de santal, Musc blanc",
    "tete": "Angélique, Armoise"
  },
  "chanel-coco-noir-eau-de-parfum-vaporisateur": {
    "annee": "2012",
    "coeur": "Rose, Géranium, Jasmin, Narcisse, Pêche",
    "concentration": "Eau de parfum",
    "fond": "Patchouli, Bois de santal, Résine oliban, Fève de tonka, Vanille, Musc blanc, Clou de girofle, Benjoin",
    "tete": "Pamplemousse, Bergamote, Orange"
  },
  "dior-eau-sauvage": {
    "annee": "1966",
    "coeur": "Jasmin, Coriandre, Œillet, Patchouli, Racine d'iris, Bois de santal, Rose, Lavande, Hedione",
    "fond": "Mousse de chêne, Vétiver, Musc, Ambre",
    "tete": "Citron, Bergamote, Basilic, Romarin, Carvi, Notes fruitées"
  },
  "dior-sauvage": {
    "annee": "2015",
    "coeur": "Poivre du Sichuan, Lavande, Poivre rose, Vétiver, Patchouli, Géranium, Élémi",
    "fond": "Ambroxan, Cèdre, Ciste",
    "tete": "Bergamote de Calabre, Poivre"
  },
  "dior-sauvage-elixir-vaporisateur-60ml": {
    "annee": "2021",
    "coeur": "Lavande",
    "fond": "Réglisse, Bois de santal, Ambre, Patchouli, Vétiver de Haïti",
    "tete": "Noix de muscade, Cannelle, Cardamome, Pamplemousse"
  },
  "dolce-gabbana-one-eau-de-toilette": {
    "annee": "2006",
    "coeur": "Lys, Prune, Jasmin, Muguet",
    "concentration": "Eau de toilette",
    "fond": "Vanille, Ambre, Musc, Vétiver",
    "tete": "Pêche, Litchi, Mandarine, Bergamote"
  },
  "dolce-gabbana-velvet-ginestra": {
    "annee": "2016",
    "coeur": "Cire d'abeille, Violette, Agrumes",
    "fond": "Benjoin",
    "tete": "Fleur de tilleul, Genêt de Lydie, Genêt"
  },
  "franck-olivier-eau-de-cologne-ambre-gold": {
    "annee": "2023",
    "coeur": "Fleur d'oranger, Muguet, Rose, Bois de santal",
    "concentration": "Eau de cologne",
    "fond": "Musc, Vanille, Ambre",
    "tete": "Noix de Coco, Bergamote, Citron"
  },
  "franck-olivier-eau-de-parfum-passion-extreme": {
    "annee": "2007",
    "coeur": "Freesia, Magnolia, Muguet, Rose de Turquie",
    "concentration": "Eau de parfum",
    "fond": "Musc, Vanille, Bois de santal, Vétiver, Baumier du Pérou",
    "tete": "Cassis, Pêche, Fleur de pêcher, Bergamote"
  },
  "franck-olivier-eau-de-parfum-pure-femme": {
    "annee": "2022",
    "coeur": "Jasmin Sambac, Lait, Freesia",
    "concentration": "Eau de parfum",
    "fond": "Patchouli, Bois de santal, Benjoin",
    "tete": "Bergamote, Rhubarbe, Carotte"
  },
  "franck-olivier-eau-de-parfum-sun-java-intense": {
    "annee": "2019",
    "coeur": "Poivre, Résine oliban, Safran, Géranium, Rose",
    "concentration": "Eau de parfum",
    "fond": "Tabac, Ambre, Musc, Cèdre, Palissandre du Brésil",
    "tete": "Orange, Mandarine, Menthe poivrée, Bergamote"
  },
  "franck-olivier-eau-de-parfum-white-touch": {
    "coeur": "Jasmin, Armoise, Freesia, Violette, Rose",
    "concentration": "Eau de parfum",
    "fond": "Musc, Bois de santal",
    "tete": "Melon, Nénuphar, Poire, Cassis"
  },
  "franck-olivier-eau-de-toilette-blue-touch": {
    "annee": "2011",
    "coeur": "Melon, Patchouli, Notes boisées, Sauge, Vétiver, Férule gommeuse",
    "concentration": "Eau de toilette",
    "fond": "Musc, Mousse de chêne, Ambre",
    "tete": "Citron, Bergamote, Notes vertes, Tangerine, Poivre rose"
  },
  "franck-olivier-eau-de-toilette-night-touch": {
    "annee": "2015",
    "coeur": "Géranium, Jasmin, Noix de muscade, Violette",
    "concentration": "Eau de toilette",
    "fond": "Patchouli, Vétiver, Musc, Mousse, Ambre",
    "tete": "Bergamote, Ananas, Aldéhydes, Cardamome"
  },
  "giorgio-armani-acqua-di-gio-profondo-eau-de-parfum-125ml": {
    "annee": "2020",
    "coeur": "Romarin, Lavande, Cyprès, Lentisque",
    "concentration": "Eau de parfum",
    "fond": "Notes minérales, Musc, Patchouli, Ambre",
    "tete": "Notes marines, Aquozone, Bergamote, Mandarine verte"
  },
  "giorgio-armani-power-you-eau-de-parfum-90ml": {
    "annee": "2026",
    "coeur": "Frangipanier, Notes solaires",
    "concentration": "Eau de parfum",
    "fond": "Vanille de Madagascar, Benjoin, Ciste",
    "tete": "Fruit de la passion, Bigarade, Citron"
  },
  "giorgio-armani-si-passione-eau-de-parfum-100ml": {
    "annee": "2017",
    "coeur": "Ananas, Rose, Jasmin, Héliotrope",
    "concentration": "Eau de parfum",
    "fond": "Vanille, Cèdre, Patchouli, Amberwood",
    "tete": "Poire, Cassis, Poivre rose, Pamplemousse"
  },
  "giorgio-armani-si-passione-red-musk-eau-de-parfum-100ml": {
    "annee": "2025",
    "coeur": "Rose, Lait",
    "concentration": "Eau de parfum",
    "fond": "Musc, Vanille",
    "tete": "Fraise, Musc"
  },
  "guerlain-petite-robe-noire-extrait-parfum-100ml": {
    "annee": "2009",
    "coeur": "Macarons, Réglisse, Rose",
    "concentration": "Extrait de parfum",
    "fond": "Vanille, Patchouli, Thé, Musc",
    "tete": "Amande, Anis, Citron"
  },
  "guerlain-promenade-anglais": {
    "annee": "2016",
    "coeur": "Violette, Mimosa, Muguet, Rose",
    "fond": "Racine d'iris, Héliotrope, Musc blanc",
    "tete": "Figue, Feuille de violette, Bourgeon de cassis, Bergamote"
  },
  "lacoste-coffret-lhomme-timeless-eau-de-toilette": {
    "annee": "2019",
    "coeur": "Gingembre, Jasmin, Poivre noir, Amande",
    "concentration": "Eau de toilette",
    "fond": "Bois d'Akigala, Cèdre, Vanille, Ambre, Musc",
    "tete": "Rhubarbe, Thé, Cardamome, Bergamote"
  },
  "lancome-coffret-nuit-tresor-eau-de-parfum": {
    "annee": "2015",
    "coeur": "Fraise, Rose noire, Orchidée vanille, Fruit de la passion",
    "concentration": "Eau de parfum",
    "fond": "Praliné, Caramel, Vanille, Litchi, Patchouli, Encens, Café, Réglisse, Coumarine",
    "tete": "Poire, Tangerine, Bergamote"
  },
  "lancome-nuit-tresor-eau-de-parfum": {
    "annee": "2015",
    "coeur": "Fraise, Rose noire, Orchidée vanille, Fruit de la passion",
    "concentration": "Eau de parfum",
    "fond": "Praliné, Caramel, Vanille, Litchi, Patchouli, Encens, Café, Réglisse, Coumarine",
    "tete": "Poire, Tangerine, Bergamote"
  },
  "lancome-pack-vie-belle": {
    "annee": "2012",
    "coeur": "Iris, Jasmin, Fleur d'oranger",
    "fond": "Praliné, Vanille, Patchouli, Fève de tonka",
    "tete": "Cassis, Poire"
  },
  "lancome-tresor-eau-de-parfum": {
    "annee": "1990",
    "coeur": "Rose, Iris, Héliotrope, Jasmin",
    "concentration": "Eau de parfum",
    "fond": "Pêche, Abricot, Bois de santal, Vanille, Ambre, Musc",
    "tete": "Pêche, Rose, Fleur d'abricotier, Lilas, Ananas, Muguet, Bergamote"
  },
  "lancome-vie-belle-4ml": {
    "annee": "2012",
    "coeur": "Iris, Jasmin, Fleur d'oranger",
    "fond": "Praliné, Vanille, Patchouli, Fève de tonka",
    "tete": "Cassis, Poire"
  },
  "lancome-vie-belle-extrait-parfum-100ml": {
    "annee": "2012",
    "coeur": "Iris, Jasmin, Fleur d'oranger",
    "concentration": "Extrait de parfum",
    "fond": "Praliné, Vanille, Patchouli, Fève de tonka",
    "tete": "Cassis, Poire"
  },
  "narciso-eau-de-parfum-poudree": {
    "annee": "2016",
    "coeur": "Musc",
    "concentration": "Eau de parfum",
    "fond": "Coumarine, Cèdre, Vétiver, Patchouli",
    "tete": "Jasmin, Rose de Bulgarie, Fleur d'oranger"
  },
  "narciso-rodriguez-her-musc-noir-rose-eau-de-parfum-100ml": {
    "annee": "2022",
    "coeur": "Musc, Rose, Tubéreuse",
    "concentration": "Eau de parfum",
    "fond": "Vanille",
    "tete": "Prune, Poivre rose, Bergamote"
  },
  "paco-rabanne-phantom-eau-de-toilette-5ml": {
    "annee": "2021",
    "coeur": "Lavande, Notes terreuses, Pomme, Fumée, Patchouli",
    "concentration": "Eau de toilette",
    "fond": "Vanille, Lavande, Vétiver",
    "tete": "Lavande, Zeste de citron, Limone Costa d'Amalfi"
  },
  "prada-paradoxe-coffret-eau-de-parfum": {
    "annee": "2022",
    "coeur": "Fleur d'oranger, Essence de néroli, Néroli, Jasmin Sambac",
    "concentration": "Eau de parfum",
    "fond": "Vanille bourbon, Ambre, Musc blanc, Benjoin",
    "tete": "Poire, Tangerine, Bergamote"
  },
  "versace-crystal-noir-eau-de-parfum": {
    "annee": "2004",
    "coeur": "Noix de Coco, Gardénia, Fleur d'oranger, Pivoine",
    "concentration": "Eau de parfum",
    "fond": "Bois de santal, Musc, Ambre",
    "tete": "Poivre, Gingembre, Cardamome"
  },
  "yves-saint-laurent-libre-eau-de-parfum-coffret": {
    "annee": "2019",
    "coeur": "Lavande, Fleur d'oranger, Jasmin",
    "concentration": "Eau de parfum",
    "fond": "Vanille de Madagascar, Musc, Cèdre, Ambre gris",
    "tete": "Lavande, Mandarine, Cassis, Petit-grain"
  },
  "yves-saint-laurent-libre-parfum": {
    "annee": "2019",
    "coeur": "Lavande, Fleur d'oranger, Jasmin",
    "concentration": "Extrait de parfum",
    "fond": "Vanille de Madagascar, Musc, Cèdre, Ambre gris",
    "tete": "Lavande, Mandarine, Cassis, Petit-grain"
  },
  "yves-saint-laurent-libre-parfum-90ml": {
    "annee": "2019",
    "coeur": "Lavande, Fleur d'oranger, Jasmin",
    "concentration": "Extrait de parfum",
    "fond": "Vanille de Madagascar, Musc, Cèdre, Ambre gris",
    "tete": "Lavande, Mandarine, Cassis, Petit-grain"
  },
  "yves-saint-laurent-manifesto-eau-de-parfum": {
    "annee": "2012",
    "coeur": "Jasmin Sambac, Muguet",
    "concentration": "Eau de parfum",
    "fond": "Vanille, Fève de tonka, Bois de santal, Cèdre",
    "tete": "Cassis, Notes vertes, Bergamote"
  },
  "yves-saint-laurent-nuit-lhomme": {
    "annee": "2009",
    "coeur": "Lavande, Cèdre de Virginie, Bergamote",
    "fond": "Vétiver, Carvi",
    "tete": "Cardamome"
  }
};

/** Pyramide relevee pour ce produit, ou `undefined`. */
export function pyramideDuProduit(slug: string): PyramideOlfactive | undefined {
  return PYRAMIDES[slug];
}
