
export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  time: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  rating: number;
  reviews: number;
  chef: string;
  history: string;
  ingredients: Ingredient[];
  steps: CookingStep[];
  tags: string[];
  chefTips?: string[];
}

export interface Ingredient {
  name: string;
  amount: string;
  isSecret?: boolean;
  category: string;
}

export interface CookingStep {
  id: number;
  title: string;
  description: string;
  image?: string;
  highlightedTerm?: {
    term: string;
    description: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
