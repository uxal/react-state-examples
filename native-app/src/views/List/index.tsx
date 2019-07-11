import React from "react";
import debounce from "lodash/debounce";
import { Text, View, ScrollView } from "react-native";
import { RecipesContext } from "../../providers/Recipes-hooks";
import Recipe from "../../containers/Recipe";
import {
  Wrapper,
  SearchWrapper,
  SearchBox,
  SearchingIndicator
} from "./styled";

const List: React.FC = () => {
  const recipeContext = React.useContext(RecipesContext);
  const { recipes, loading, handleQueryChange, searching } = recipeContext;

  const searchRecipe = debounce((value: string) => {
    handleQueryChange(value);
  }, 300);

  const onChange = (value: string) => {
    searchRecipe(value);
  };

  return (
    <Wrapper>
      {loading && recipes.length === 0 && (
        <Text>Please wait, loading the list</Text>
      )}
      {(!loading || recipes.length > 0) && (
        <SearchWrapper>
          <SearchBox placeholder="Search recipes" onChangeText={onChange} />
          {searching && <SearchingIndicator>searching....</SearchingIndicator>}
        </SearchWrapper>
      )}

      {recipes && recipes.length > 0 && (
        <ScrollView>
          {recipes.map(item => (
            <Recipe {...item} key={item.recipe_id} />
          ))}
        </ScrollView>
      )}
    </Wrapper>
  );
};

export default List;
