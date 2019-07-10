/**
 * This is the Redux recipes reducer
 */
import remove from "lodash/remove";
import { IRecipe } from "../../../interfaces";
import { Actions } from "../actions/action-types";
import {
  ISetRecipesActionType,
  ISetLoadingActionType,
  ISetSearchingActionType,
  ISelectRecipeActionType,
  ISetSearchQueryActionType
} from "../actions/action-types";
import initialState from "./initial-state";

const recipesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.SET_RECIPES:
      const { recipes } = action as ISetRecipesActionType;
      return { ...state, recipes };
    case Actions.SET_LOADING:
      const { loading } = action as ISetLoadingActionType;
      return { ...state, loading };
    case Actions.SET_SEARCHING:
      const { searching } = action as ISetSearchingActionType;
      return { ...state, searching };
    case Actions.SET_SEARCH_QUERY:
      const { searchQuery } = action as ISetSearchQueryActionType;
      return { ...state, searchQuery };
    case Actions.SELECT_RECIPE: {
      const { recipe } = action as ISelectRecipeActionType;
      if (recipeIsSelected(recipe, state.selectedRecipes)) {
        // remove it
        const selectedRecipesAfterRemove = [...state.selectedRecipes];
        remove(
          selectedRecipesAfterRemove,
          (item: IRecipe) => item.recipe_id === recipe.recipe_id
        );
        return {
          ...state,
          selectedRecipes: [...selectedRecipesAfterRemove]
        };
      } else {
        // add it
        return {
          ...state,
          selectedRecipes: [...state.selectedRecipes, recipe]
        };
      }
    }
    default:
      return state;
  }
};

/**
 * Next utility function is used in this reducer and in /components/recipe/index-redux
 */
export const recipeIsSelected = (
  recipe: IRecipe,
  selectedRecipes: IRecipe[]
): boolean => {
  return (
    selectedRecipes.find(
      (item: IRecipe) => item.recipe_id === recipe.recipe_id
    ) !== undefined
  );
};

export default recipesReducer;
