/**
 * Here we have an example of using redux and hooks
 */
import * as React from "react";
import { inject, observer } from "mobx-react";
import { IMobxExampleProps } from "../../containers/mobx";
import { IRecipe } from "../../interfaces/index";
import Recipe from "../Recipe/index-mobx";
import debounce from "lodash/debounce";
import Loader from "../Loader";
import {
  Wrapper,
  RecipesWrapper,
  List,
  SearchBoxWrapper,
  SearchBox
} from "./styled";

const RecipeList: React.FC<IMobxExampleProps> = props => {
  const { recipesStore } = props;

  const [searchQuery, setSearchQuery] = React.useState(
    recipesStore!.searchQuery
  );

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
    setSearchQuery(value);
    props.recipesStore!.search(value);
  }, 300);

  if (!recipesStore) {
    return null;
  }

  const { searching, recipes } = recipesStore;

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
          {recipes.map((item: IRecipe) => (
            <Recipe recipe={item} key={item.title} />
          ))}
        </List>
      </RecipesWrapper>
    </Wrapper>
  );
};

export default inject("recipesStore")(observer(RecipeList));
