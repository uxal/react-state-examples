/**
 * This is a pattern of accessing the context methods which is not recommended. We should not
 * pass context methods and properties from parents as props, instead we should access the context
 * directly in here, because the code will be much easier to understand and maintain.
 * The correct way of doing this is in "index-hooks" file
 */

import React from "react";
import { IRecipe } from "../../interfaces/index";
import { Wrapper, Title, ButtonWrapper, Publisher } from "./styled";
import ActionButton from "../ActionButton";

const Recipe: React.FC<IRecipeProps> = props => {
  const { recipe, onRecipeSelect, recipeIsSelected } = props;
  const selected = recipeIsSelected(recipe);
  return (
    <Wrapper>
      <img src={recipe.image_url} alt="" />
      <Title>{recipe.title}</Title>
      <Publisher>
        By:: <b>{recipe.publisher}</b>
      </Publisher>
      <ButtonWrapper>
        <ActionButton
          onClick={() => {
            onRecipeSelect(recipe);
          }}
          selected={selected}
        >
          {selected ? "Remove from list" : "Add to my list"}
        </ActionButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

interface IRecipeProps {
  recipe: IRecipe;
  selected?: boolean;
  onRecipeSelect: (recipe: IRecipe) => void;
  recipeIsSelected: (recipe: IRecipe) => boolean;
}

export default Recipe;
