import React from "react";
import { RecipesContext } from "../../providers/Recipes-hooks";
import { IRecipe } from "../../interfaces/index";
import {
  Wrapper,
  InnerWrapper,
  Title,
  ActionButton,
  Publisher,
  Image
} from "./styled";

const Recipe: React.FC<IRecipe> = props => {
  const recipeContext = React.useContext(RecipesContext);
  const { onRecipeSelect, recipeIsSelected } = recipeContext;
  const { image_url, title, publisher } = props;
  const selected = recipeIsSelected && recipeIsSelected(props);
  return (
    <Wrapper>
      <Image source={{ uri: image_url }} />
      <InnerWrapper>
        <Title>{title}</Title>
        <Publisher>By: {publisher}</Publisher>
        <ActionButton
          title={selected ? "Remove from list" : "Add to my list"}
          onPress={() => {
            onRecipeSelect && onRecipeSelect(props);
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Recipe;
