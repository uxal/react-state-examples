import * as React from "react";
import { IRecipe } from "../../interfaces/index";
import Recipe from "../Recipe/index-hooks";
import debounce from "lodash/debounce";
import Loader from "../../components/Loader";
import {
  Wrapper,
  RecipesWrapper,
  List,
  SearchBoxWrapper,
  SearchBox
} from "./styled";

const RecipeList: React.FC<IRecipeListProps> = props => {
  const { recipes, onSearch, searching } = props;

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    searchRecipe(value);
  };

  const searchRecipe = debounce((value: string) => {
    if (onSearch) {
      onSearch(value);
    }
  }, 300);

  return (
    <Wrapper>
      <RecipesWrapper>
        <SearchBoxWrapper>
          <SearchBox>
            <input type="text" placeholder="Search recipes" onKeyUp={onKeyUp} />
            {searching && <Loader size={30} />}
          </SearchBox>
        </SearchBoxWrapper>
        <List>
          {recipes &&
            recipes.map((item: IRecipe) => (
              <Recipe {...item} key={item.title} />
            ))}
        </List>
      </RecipesWrapper>
    </Wrapper>
  );
};

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
   * This is true when we wait for a search to return results
   */
  searching?: boolean;
}

export default RecipeList;
