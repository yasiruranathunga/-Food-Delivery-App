import {SubCategory} from './subcategorey';

export class Category {
  name: string;
  subCategories: SubCategory[];

  constructor(name: string, subCategories: SubCategory[]) {
    this.name = name;
    this.subCategories = subCategories;
  }
}