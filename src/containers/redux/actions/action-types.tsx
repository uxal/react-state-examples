import { IRecipe } from "../../../interfaces/index";

export const Actions: IActions = {
  SET_RECIPES: "set_recipes",
  SELECT_RECIPE: "select_recipe",
  SET_LOADING: "set_loading",
  SET_SEARCHING: "set_searching",
  SET_SEARCH_QUERY: "set_search_query"
};

interface IActions {
  SET_RECIPES: string;
  SELECT_RECIPE: string;
  SET_LOADING: string;
  SET_SEARCHING: string;
  SET_SEARCH_QUERY: string;
}

export interface ISetRecipesActionType {
  type: string;
  recipes: IRecipe[];
}

export interface ISetLoadingActionType {
  type: string;
  loading: boolean;
}

export interface ISetSearchingActionType {
  type: string;
  searching: boolean;
}

export interface ISelectRecipeActionType {
  type: string;
  recipe: IRecipe;
}

export interface ISetSearchQueryActionType {
  type: string;
  searchQuery: string;
}
