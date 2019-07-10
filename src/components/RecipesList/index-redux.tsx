/**
 * Here we have an example of using redux and hooks
 */
import * as React from "react";
import { connect } from "react-redux";
import { IReduxState } from "../../containers/redux/reducers";
import { IRecipe } from "../../interfaces/index";
import { search } from "../../containers/redux/actions";
import Recipe from "../Recipe/index-redux";
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
  const { recipes, searching, search } = props;
  const [searchQuery, setSearchQuery] = React.useState(props.searchQuery);

  React.useEffect(() => {
    //do it only once when the component mounts
    if (searchQuery && searchQuery.length) {
      searchRecipe(searchQuery);
    }
  }, []);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    searchRecipe(value);
  };

  const searchRecipe = debounce((value: string) => {
    if (search) {
      setSearchQuery(value);
      search(value);
    }
  }, 300);

  return (
    <Wrapper>
      <RecipesWrapper>
        <SearchBoxWrapper>
          <SearchBox>
            <input
              type="text"
              placeholder="Search recipes"
              onKeyUp={onKeyUp}
              defaultValue={searchQuery}
            />
            {searching && <Loader size={30} />}
          </SearchBox>
        </SearchBoxWrapper>
        <List>
          {recipes &&
            recipes.map((item: IRecipe) => (
              <Recipe recipe={item} key={item.title} />
            ))}
        </List>
      </RecipesWrapper>
    </Wrapper>
  );
};

interface IRecipeListProps {
  /**
   * The list of recipes
   */
  recipes?: IRecipe[];

  /**
   * This is true when we wait for a search to return results
   */
  searching?: boolean;

  searchQuery?: string;

  search: any;
}

const mapStateToProps = (state: IReduxState) => {
  const { recipes, searching, searchQuery } = state.recipes;
  return {
    recipes,
    searching,
    searchQuery
  };
};

const mapDispatchToProps = { search };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
