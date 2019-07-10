/**
 * The redux example of a recipe component
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { IRecipe } from "../../interfaces/index";
import { IRecipesStore } from "../../containers/mobx/stores/Recipes";
import { Wrapper, Title, ButtonWrapper, Publisher } from "./styled";
import ActionButton from "../ActionButton";

const Recipe: React.FC<IRecipeProps> = props => {
  const { recipe, recipesStore } = props;
  if (!recipesStore) {
    return null;
  }
  const { recipeIsSelected, selectRecipe } = recipesStore;
  const { image_url, title, publisher } = recipe;
  const selected = recipeIsSelected(recipe);
  return (
    <Wrapper>
      <img src={image_url} alt="" />
      <Title>{title}</Title>
      <Publisher>
        By:: <b>{publisher}</b>
      </Publisher>
      <ButtonWrapper>
        <ActionButton
          onClick={() => {
            selectRecipe(recipe);
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
  recipesStore?: IRecipesStore;
}

export default inject("recipesStore")(observer(Recipe));
