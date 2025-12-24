import { Recipe } from './types';

export const RECIPES: Recipe[] = [
  {
    id: 'thieboudieune',
    name: 'Thiéboudieune Royal',
    description: 'Le plat national du Sénégal. Un riz richement parfumé au poisson frais, légumes et épices locales.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCltVdCANMFLZBzhR2zjsoh8ybMmDZRVm1zIFlL0YhHJCYbcp75ZcuQcAmyJa3QVJSFRYVjNE4dgZ3qShVpzgi9A0dQdheeHBZvOF1dwF-L0gRk-_r7b5aoi8956clVCf1-l6unGAd4Y1xX7uZJUZFwDP0n4D1xHtNDnkQGv3qdJU35yxvGUOaUzi5-SX0hYQ2akOQ53gZ2FAf9GibXNBoOGkikbIIQV316QfrOgkDNqwmC89SfXDH5D37Bl7QQ7gzPOPd9Vj9bPl2j',
    time: '2h 30m',
    difficulty: 'Difficile',
    rating: 4.8,
    reviews: 120,
    chef: 'Penda Mbaye',
    history: 'Selon la légende, ce plat emblématique aurait été inventé au 19ème siècle par Penda Mbaye, une cuisinière de Saint-Louis. Symbole ultime de la Téranga (hospitalité), il réunit la communauté autour d\'un grand bol commun.',
    chefTips: [
      "Pour un riz parfaitement cuit, utilisez la technique traditionnelle du 'Rossi' (cuisson à la vapeur sur la sauce).",
      "Le choix du poisson est crucial : le Thiof apporte la meilleure texture et le goût le plus fin.",
      "Ne négligez pas le Yét et le Guedj, ce sont eux qui donnent cette profondeur 'umami' typique."
    ],
    ingredients: [
      { name: 'Riz brisé parfumé', amount: '2 kg', category: 'Base' },
      { name: 'Poisson (Thiof ou Mérou)', amount: '1.5 kg', category: 'Protéine' },
      { name: 'Guedj (Poisson séché)', amount: '100g', category: 'Condiment', isSecret: true },
      { name: 'Yét (Mollusque fermenté)', amount: '50g', category: 'Condiment', isSecret: true },
      { name: 'Concentré de tomate', amount: '200g', category: 'Sauce' },
      { name: 'Carottes, Manioc, Aubergine', amount: '500g', category: 'Légumes' },
      { name: 'Piment frais', amount: '2', category: 'Epices' }
    ],
    steps: [
      {
        id: 1,
        title: 'Préparer le "Roof"',
        description: 'Piler le persil, l\'ail, le piment et le sel. Farcir le poisson avec ce mélange, appelé Roof, pour imprégner la chair de saveurs intenses.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXXuUtH4yoz0n6D8cB9z9B3fAeTnzobjDCfbjD-hXCFg2i0QFhOfuGeqnvOMxSgRA2T59ehw4cAy1DxS06uX5A_8Qt4pMzYDCPNs3LKVM9wNWRBCtr56WT1Y70n_e0EkIzFfRiMMVLJ1oqKMxlamu4nkiAJFwcMLR4PKrL81xOaohpLaR0C3VoDJLYqivSYEigvhSAWWjw0pBAuU-jWk71gKfi3ksSCfIfQc16w167k2iDiLI7a92uSd2OpnDHWVvBJMrud7TveKT'
      },
      {
        id: 2,
        title: 'La Cuisson du "Yét"',
        description: 'Faire revenir le Yét (mollusque fermenté) dans l\'huile chaude jusqu\'à ce qu\'il libère son arôme caractéristique, base du goût du Thiéboudieune.',
      },
      {
        id: 3,
        title: 'Le "Rossi" du Riz',
        description: 'La clé d\'un bon riz est la patience. Laisser le riz cuire à la vapeur — technique du Rossi — au-dessus de la sauce pour qu\'il absorbe les parfums sans devenir pâteux.',
      }
    ],
    tags: ['Populaire', 'Plat National', 'Célébration']
  },
  {
    id: 'yassa-poulet',
    name: 'Yassa Poulet',
    description: 'Un délicieux poulet mariné au citron et à beaucoup d\'oignons.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8om9OBT1td80_DIsQnYLTMEv999rTPAGowNnubn3GMDpTfgNnykMRFzrGRiJMT9q9TX_8H899rp-B5bHz3zOl_jkJjRCXUnDyYkRlI6uJ9mw9WsxAqc-5DzCj4pPamZrUgkOHzRb7NaZW2NH9dz_ARUoiQn90VVpYQduhyBhdbfFBG-5omGubmJRvun_72dur_pKs_uPBf1j9yC0cUNCc9O54JmeqkEt6bpzshHxW3ZRJGRjv83kJNm4gpTRQT8oDREtBo8pIATXn',
    time: '45 min',
    difficulty: 'Facile',
    rating: 4.8,
    reviews: 85,
    chef: 'Chef Oumar',
    history: 'Le Yassa est originaire de la Casamance, au sud du Sénégal. Traditionnellement préparé avec du poulet ou du poisson, sa base est une marinade généreuse d\'oignons et de citron vert.',
    chefTips: [
      "Plus il y a d'oignons, plus la sauce sera onctueuse et savoureuse.",
      "Utilisez du citron vert pour une acidité plus parfumée que le citron jaune.",
      "Laissez mariner le poulet au moins 2 heures (voire une nuit) pour que les saveurs pénètrent au cœur de la viande."
    ],
    ingredients: [
      { name: 'Poulet entier', amount: '1.2 kg', category: 'Protéine' },
      { name: 'Oignons', amount: '1 kg', category: 'Légumes' },
      { name: 'Citrons verts', amount: '4', category: 'Acide' },
      { name: 'Moutarde de Dijon', amount: '2 c.à.s', category: 'Condiment' },
      { name: 'Olives vertes', amount: '100g', category: 'Garniture' }
    ],
    steps: [
      {
        id: 1,
        title: 'La Marinade',
        description: 'Couper le poulet et le faire mariner avec les oignons émincés, le jus de citron, la moutarde, l\'ail piler et le poivre pendant au moins 2 heures.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXPSM81KtZ6h8YiIP8vNnC1nj6kuK-1v0zAOVTEY_NS_c6pdU6mT6pBBpg44uyhlLe3e63QlgUDGtrO1wekcv3M9RlIw9tsc4I0JLh1DtIW8QPRqoBio2dH67W3a6t5uB_IXat5NtFfRq1EbH9UveSO_dNAIIiaXP3nOUoh5JOE7XyuR0efVkEA55IGP36zSiQ7y3ldDTkH9UWxF5un6RHmagZL6ggulrKpzfkLhDeHaETTl4e6iK0n6wI1Dqjb3etCbBXoU0xMkc'
      },
      {
        id: 2,
        title: 'Griller le Poulet',
        description: 'Retirer les morceaux de poulet de la marinade et les faire griller au barbecue ou à la poêle jusqu\'à ce qu\'ils soient bien dorés.',
      },
      {
        id: 3,
        title: 'Cuisson de la Sauce',
        description: 'Faire revenir les oignons de la marinade dans un peu d\'huile. Ajouter le reste de la marinade et laisser mijoter à feu doux jusqu\'à ce que les oignons soient translucides et fondants.',
      }
    ],
    tags: ['Rapide', 'Citronné']
  },

  // === NOUVELLES RECETTES AJOUTÉES ===
  {
    id: 'mafe',
    name: 'Mafé (Sauce Arachide)',
    description: 'Ragoût crémeux à la pâte d\'arachide, viande tendre et légumes racines. Un classique réconfortant d\'Afrique de l\'Ouest.',
    image: 'https://www.linsfood.com/wp-content/uploads/2013/08/mafe-stew.jpg',
    time: '1h 45m',
    difficulty: 'Moyen',
    rating: 4.9,
    reviews: 180,
    chef: 'Fatou Seck',
    history: 'Originaire du Mali mais très populaire au Sénégal, le Mafé met en valeur l\'arachide, culture majeure du pays depuis le 19e siècle.',
    chefTips: [
      "Utilisez de la pâte d\'arachide 100% naturelle pour un goût authentique.",
      "Laissez mijoter longtemps : plus ça cuit, plus la sauce devient onctueuse."
    ],
    ingredients: [
      { name: 'Boeuf ou agneau', amount: '1 kg', category: 'Protéine' },
      { name: 'Pâte d\'arachide naturelle', amount: '300g', category: 'Base' },
      { name: 'Patates douces', amount: '4', category: 'Légumes' },
      { name: 'Carottes', amount: '4', category: 'Légumes' },
      { name: 'Chou', amount: '1/2', category: 'Légumes' },
      { name: 'Concentré de tomate', amount: '100g', category: 'Sauce' }
    ],
    steps: [
      { id: 1, title: 'Dorer la viande', description: 'Faire revenir la viande coupée en morceaux jusqu\'à coloration.' },
      { id: 2, title: 'Préparer la sauce', description: 'Diluer la pâte d\'arachide avec de l\'eau, ajouter tomate et épices.' },
      { id: 3, title: 'Mijotage', description: 'Incorporer les légumes et laisser cuire à feu doux 1h30.' }
    ],
    tags: ['Ragoût', 'Arachide', 'Réconfort']
  },
  {
    id: 'soupou-kandja',
    name: 'Soupou Kandja',
    description: 'Sauce épaisse au gombo frais, poisson fumé et huile de palme. Un plat traditionnel riche en saveurs marines.',
    image: 'https://eatyourworld.com/wp-content/uploads/2023/07/soupe-kandja-high-res.jpg',
    time: '2h',
    difficulty: 'Difficile',
    rating: 4.7,
    reviews: 95,
    chef: 'Mame Diarra',
    history: 'Plat emblématique de Saint-Louis et de la côte sénégalaise, où le gombo et les produits de la mer abondent.',
    chefTips: [
      "Utilisez de l\'huile de palme rouge pour la couleur et l\'authenticité.",
      "Le guedj (poisson séché) est indispensable pour le goût fumé."
    ],
    ingredients: [
      { name: 'Gombo frais', amount: '1 kg', category: 'Légumes' },
      { name: 'Poisson fumé (guedj)', amount: '200g', category: 'Protéine' },
      { name: 'Huile de palme rouge', amount: '150ml', category: 'Base' },
      { name: 'Crabe ou crevettes', amount: '300g', category: 'Fruit de mer' },
      { name: 'Oignons', amount: '3', category: 'Légumes' }
    ],
    steps: [
      { id: 1, title: 'Préparation du gombo', description: 'Laver et couper le gombo en rondelles.' },
      { id: 2, title: 'Base aromatique', description: 'Faire revenir le poisson fumé et les oignons dans l\'huile de palme.' },
      { id: 3, title: 'Cuisson lente', description: 'Ajouter le gombo et laisser mijoter jusqu\'à épaississement.' }
    ],
    tags: ['Gombo', 'Mer', 'Traditionnel']
  },
  {
    id: 'ceebu-yapp',
    name: 'Ceebu Yapp',
    description: 'Version viande du plat national : riz parfumé à la viande d\'agneau ou boeuf et légumes farcis.',
    image: 'https://eatyourworld.com/wp-content/uploads/2012/07/ceebu-yapp.jpg',
    time: '2h',
    difficulty: 'Difficile',
    rating: 4.7,
    reviews: 110,
    chef: 'Babacar Fall',
    history: 'Variante quotidienne du Thiéboudieune quand le poisson est cher. Très apprécié en famille.',
    chefTips: [
      "Farcir les légumes (poivrons, carottes) avec le \"roof\" pour plus de saveur."
    ],
    ingredients: [
      { name: 'Viande d\'agneau ou boeuf', amount: '1.5 kg', category: 'Protéine' },
      { name: 'Riz', amount: '1.5 kg', category: 'Base' },
      { name: 'Légumes variés (carottes, chou, manioc)', amount: '800g', category: 'Légumes' }
    ],
    steps: [
      { id: 1, title: 'Préparer le roof', description: 'Piler ail, persil, piment et farcir la viande et légumes.' },
      { id: 2, title: 'Cuire la viande', description: 'Faire dorer puis mijoter avec sauce tomate.' },
      { id: 3, title: 'Rossi du riz', description: 'Cuire le riz à la vapeur sur la sauce.' }
    ],
    tags: ['Viande', 'Riz', 'Familial']
  },
  {
    id: 'pastels',
    name: 'Pastels (Beignets Farcis)',
    description: 'Petits beignets frits farcis au poisson épicé. Idéal en entrée ou snack.',
    image: 'https://www.chefspencil.com/wp-content/uploads/Pastels-Senegalese-Fish-Fritters-.jpg',
    time: '1h',
    difficulty: 'Moyen',
    rating: 4.8,
    reviews: 200,
    chef: 'Aminata Sow',
    history: 'Street-food incontournable sur les plages et marchés sénégalais, souvent servi avec sauce tomate piquante.',
    chefTips: [
      "La pâte doit être fine pour un croustillant parfait.",
      "Utilisez du thon ou du poisson frais pour la farce."
    ],
    ingredients: [
      { name: 'Farine', amount: '500g', category: 'Base' },
      { name: 'Poisson ou thon', amount: '400g', category: 'Protéine' },
      { name: 'Oignons, persil, piment', amount: 'au goût', category: 'Condiment' },
      { name: 'Huile pour friture', amount: '1L', category: 'Cuisson' }
    ],
    steps: [
      { id: 1, title: 'Préparer la pâte', description: 'Mélanger farine, eau, sel et laisser reposer.' },
      { id: 2, title: 'La farce', description: 'Cuire et émietter le poisson avec épices.' },
      { id: 3, title: 'Friture', description: 'Former les pastels et frire jusqu\'à doré.' }
    ],
    tags: ['Entrée', 'Frit', 'Street-food']
  },
  {
    id: 'domoda',
    name: 'Domoda (Variante Arachide)',
    description: 'Ragoût ultra-crémeux à la pâte d\'arachide, très proche du Mafé mais souvent plus doux.',
    image: 'https://www.remitly.com/blog/wp-content/uploads/2023/09/gambia-domoda-scaled.jpg',
    time: '1h 30m',
    difficulty: 'Moyen',
    rating: 4.8,
    reviews: 140,
    chef: 'Khady Diop',
    history: 'Plat partagé avec la Gambie voisine, où il est considéré comme plat national.',
    chefTips: [
      "Ajoutez un peu de jus de citron pour équilibrer la richesse."
    ],
    ingredients: [
      { name: 'Poulet ou boeuf', amount: '1 kg', category: 'Protéine' },
      { name: 'Beurre d\'arachide', amount: '250g', category: 'Base' },
      { name: 'Tomates', amount: '6', category: 'Légumes' },
      { name: 'Légumes racines', amount: '600g', category: 'Légumes' }
    ],
    steps: [
      { id: 1, title: 'Dorer la viande', description: 'Faire revenir avec oignons.' },
      { id: 2, title: 'Sauce arachide', description: 'Incorporer beurre d\'arachide dilué.' },
      { id: 3, title: 'Mijoter', description: 'Ajouter légumes et cuire lentement.' }
    ],
    tags: ['Crémeux', 'Arachide', 'Gambien']
  },
  {
    id: 'dibi',
    name: 'Dibi (Agneau Grillé)',
    description: 'Agneau mariné et grillé, servi avec oignons caramélisés et sauce moutarde. Street-food légendaire.',
    image: 'https://www.vice.com/wp-content/uploads/sites/2/2021/06/1619807126046-dibi-recipe.jpeg',
    time: '1h + marinade',
    difficulty: 'Facile',
    rating: 4.9,
    reviews: 220,
    chef: 'Ibrahima Ndoye',
    history: 'Le roi de la street-food dakaroise, vendu par les \"dibiteries\" toute la nuit.',
    chefTips: [
      "Marinez la veille pour une viande ultra-tendre.",
      "La sauce moutarde-oignon est obligatoire !"
    ],
    ingredients: [
      { name: 'Épaule d\'agneau', amount: '1.5 kg', category: 'Protéine' },
      { name: 'Oignons', amount: '1 kg', category: 'Légumes' },
      { name: 'Moutarde', amount: '100g', category: 'Condiment' },
      { name: 'Épices (poivre, ail)', amount: 'au goût', category: 'Epices' }
    ],
    steps: [
      { id: 1, title: 'Marinade', description: 'Mélanger viande avec moutarde, ail et épices (minimum 2h).' },
      { id: 2, title: 'Grillage', description: 'Cuire au barbecue ou poêle-grill jusqu\'à caramélisation.' },
      { id: 3, title: 'Oignons', description: 'Caraméliser les oignons et servir dessus.' }
    ],
    tags: ['Grillé', 'Street-food', 'Agneau']
  }
];