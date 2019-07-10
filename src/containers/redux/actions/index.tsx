import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RecipesAPI } from "../../../services/RecipesAPI";
import { IRecipe } from "../../../interfaces";

import { Actions } from "./action-types";

export const fetchRecipes = (): ThunkAction<
  void,
  null,
  null,
  Action<string>
> => async dispatch => {
  dispatch({ type: Actions.SET_LOADING, loading: true });
  const recipes = await RecipesAPI.get();
  dispatch({ type: Actions.SET_LOADING, loading: false });
  dispatch({ type: Actions.SET_RECIPES, recipes });
};

export const search = (
  searchQuery: string
): ThunkAction<void, null, null, Action<string>> => async dispatch => {
  dispatch({ type: Actions.SET_SEARCH_QUERY, searchQuery });
  dispatch({ type: Actions.SET_SEARCHING, searching: true });
  const recipes = await RecipesAPI.search(searchQuery);
  dispatch({ type: Actions.SET_SEARCHING, searching: false });
  dispatch({ type: Actions.SET_RECIPES, recipes });
};

export const selectRecipe = (recipe: IRecipe) => ({
  type: Actions.SELECT_RECIPE,
  recipe
});
