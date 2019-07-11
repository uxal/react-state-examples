import React from "react";
import { Text, View, ScrollView } from "react-native";
import { RecipesContext } from "../../providers/Recipes-hooks";
import Recipe from "../../containers/Recipe";
import { Wrapper } from "./styled";

const List: React.FC = () => {
  const recipeContext = React.useContext(RecipesContext);
  const { selectedRecipes } = recipeContext;
  return (
    <Wrapper>
      {selectedRecipes && selectedRecipes.length > 0 && (
        <ScrollView>
          {selectedRecipes.map(item => (
            <Recipe {...item} key={item.recipe_id} />
          ))}
        </ScrollView>
      )}
    </Wrapper>
  );
};

export default List;
