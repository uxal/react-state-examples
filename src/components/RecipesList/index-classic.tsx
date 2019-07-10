/**
 * Here we have an example of how to use the context methods in a bad way, passing them as props to
 * the child component. The good way can be seen in the "hooks" files, where the context is used
 * directly inside the child components "/Recipe/index-hooks" avoiding adding a big number of props
 */
import * as React from "react";
import debounce from "lodash/debounce";
import { IRecipe } from "../../interfaces/index";
import Recipe from "../Recipe/index-classic";
import Loader from "../Loader";
import {
  Wrapper,
  RecipesWrapper,
  List,
  SearchBoxWrapper,
  SearchBox
} from "./styled";

export default class RecipesList extends React.Component<IRecipeListProps> {
  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    this.searchRecipe(value);
  };

  searchRecipe = debounce((value: string) => {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(value);
    }
  }, 300);

  render() {
    const { recipes, searching, onRecipeSelect, recipeIsSelected } = this.props;

    return (
      <Wrapper>
        <RecipesWrapper>
          <SearchBoxWrapper>
            <SearchBox>
              <input
                type="text"
                placeholder="Search recipes"
                onKeyUp={this.onKeyUp}
              />
              {searching && <Loader size={30} />}
            </SearchBox>
          </SearchBoxWrapper>
          <List>
            {recipes &&
              recipes.map((item: IRecipe) => (
                <Recipe
                  recipe={item}
                  onRecipeSelect={onRecipeSelect}
                  recipeIsSelected={recipeIsSelected}
                  key={item.title}
                />
              ))}
          </List>
        </RecipesWrapper>
      </Wrapper>
    );
  }
}

interface IRecipeListProps {
  /**
   * Method executed when user types something, with a delay of 300 ms
   */
  onSearch?: (value: string) => void;

  /**
   * The list of recipes
   */
  recipes?: IRecipe[];

  /**
   * List of selected recipes
   */
  selectedRecipes?: IRecipe[];

  /**
   * This is true when we wait for a search to return results
   */
  searching: boolean;

  onRecipeSelect: (recipe: IRecipe) => void;

  recipeIsSelected: (recipe: IRecipe) => boolean;
}
