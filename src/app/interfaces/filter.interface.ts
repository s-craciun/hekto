export enum Brands {
  CASIO = 'casio',
  APPLE = 'apple',
  SONY = 'sony',
  NIKE = 'nike',
  VKE = 'vke',
  GLOSSINESS = 'glossiness',
}

export enum Categories {
  WATCHES = 'watches',
  HEADPHONES = 'headphones',
  LAPTOP = 'laptop',
  GAME_CONSOLE = 'game console',
  CLOTHE = 'clothe',
  JEWELRY = 'jewelry',
  PERFUME = 'perfume',
}

export interface PriceRange {
  from: number;
  to?: number;
}

export interface IFilter {
  brand: Brands[];
  discount: number[];
  rating: number[];
  category: Categories[];
  priceRange: PriceRange[];
}

export interface IFilterForm {
  brand: string[];
  discount: number[];
  rating: number[];
  category: string[];
  priceRange: PriceRange;
}
