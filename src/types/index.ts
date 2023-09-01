export interface Category {
  id: number;
  title: string;
  image?: string;
}

export interface Item {
  id: number;
  title: string;
  image?: string;
  minBudget: number;
  maxBudget: number;
  avgBudget: number;
}

export interface SelectedItemsProps extends Omit<Category, 'image'> {
  items: Omit<Item, 'image'>[];
}

export interface RemovedItem {
  categoryId: Category['id'];
  itemId: Item['id'];
}

export interface SavedItem {
  id: string;
  total: number;
  state: SelectedItemsProps[];
}
