import { observable, action } from "mobx";
import remove from "lodash/remove";
import { IRecipe } from "../../../interfaces/index";
import { RecipesAPI } from "../../../services/RecipesAPI";

class RecipesStore {
  @observable
  recipes: IRecipe[] = [];

  @observable
  selectedRecipes: IRecipe[] = [];

  @observable
  loading: boolean = true;

  @observable
  searching: boolean = false;

  @observable
  searchQuery: string = "";

  fetchRecipes = async () => {
    if (!this.loading) {
      this._toggleLoading();
    }
    const recipes = await RecipesAPI.get();
    if (this.loading) {
      this._toggleLoading();
    }
    this._setRecipes(recipes);
  };

  search = async (searchQuery: string) => {
    this._setSearchQuery(searchQuery);
    this._toggleSearching();
    const recipes = await RecipesAPI.search(searchQuery);
    this._setRecipes(recipes);
    this._toggleSearching();
  };

  @action
  selectRecipe = (recipe: IRecipe) => {
    if (this.recipeIsSelected(recipe)) {
      // remove from selection
      const selectedRecipesAfterRemove = [...this.selectedRecipes];
      remove(
        selectedRecipesAfterRemove,
        (item: IRecipe) => item.recipe_id === recipe.recipe_id
      );
      this._setSelectedRecipes(selectedRecipesAfterRemove);
    } else {
      this._setSelectedRecipes([...this.selectedRecipes, recipe]);
    }
  };

  recipeIsSelected = (recipe: IRecipe): boolean => {
    return (
      this.selectedRecipes.find(
        (item: IRecipe) => item.recipe_id === recipe.recipe_id
      ) !== undefined
    );
  };

  @action
  private _toggleLoading = () => {
    this.loading = !this.loading;
  };

  @action
  private _toggleSearching = () => {
    this.searching = !this.searching;
  };

  @action
  private _setRecipes = (recipes: IRecipe[]) => {
    this.recipes = recipes;
  };

  @action
  private _setSelectedRecipes = (recipes: IRecipe[]) => {
    this.selectedRecipes = recipes;
  };

  @action
  private _setSearchQuery = (searchQuery: string) => {
    this.searchQuery = searchQuery;
  };
}

export interface IRecipesStore {
  recipes: IRecipe[];
  selectedRecipes: IRecipe[];
  loading: boolean;
  searching: boolean;
  searchQuery: string;
  fetchRecipes: () => Promise<void>;
  search: (searchQuery: string) => Promise<void>;
  selectRecipe: (recipe: IRecipe) => void;
  recipeIsSelected: (recipe: IRecipe) => boolean;
}

export const recipesStore = new RecipesStore();
