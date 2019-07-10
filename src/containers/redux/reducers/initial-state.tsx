import { IRecipe } from "../../../interfaces";

/**
 * The initial state of the app is defined here
 */
const initialState: IRecipesState = {
  recipes: [],
  selectedRecipes: [],
  loading: true,
  searching: false,
  searchQuery: ""
};

export interface IRecipesState {
  recipes: IRecipe[];
  selectedRecipes: IRecipe[];
  loading: boolean;
  searching: boolean;
  searchQuery: string;
}

export default initialState;
