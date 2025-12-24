
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
  }
];
