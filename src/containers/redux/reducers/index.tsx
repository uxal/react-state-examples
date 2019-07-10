import { combineReducers } from "redux";
import recipesReducer from "./recipes";
import { IRecipesState } from "./initial-state";

const rootReducer = combineReducers({
  recipes: recipesReducer //we have only one state, but more can be added
});

export interface IReduxState {
  recipes: IRecipesState;
}

export default rootReducer;
