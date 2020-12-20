export interface ISpoonacularRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: ISpoonacularIngredient[];
  usedIngredients: ISpoonacularIngredient[];
  unusedIngredients: ISpoonacularIngredient[];
  likes: number;
}

export interface ISpoonacularIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalString: string;
  originalName: string;
  metaInformation: any;
  meta: any;
  image: string;
}
