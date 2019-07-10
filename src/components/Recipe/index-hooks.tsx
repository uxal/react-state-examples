/**
 * In this example, we use the "useContext" hook to get the recipes context. Instead of passing some
 * props from the parent Recipes list (see file "index-classic") we use directly context methods
 * Because this component uses the context directly, it's location should have been in "containers" folder
 * where we keep the "connected" components.
 */
import React from "react";
import { RecipesContext } from "../../providers/Recipes-hooks";
import { IRecipe } from "../../interfaces/index";
import { Wrapper, Title, ButtonWrapper, Publisher } from "./styled";
import ActionButton from "../ActionButton";

const Recipe: React.FC<IRecipe> = props => {
  const recipeContext = React.useContext(RecipesContext);
  const { onRecipeSelect, recipeIsSelected } = recipeContext;
  const { image_url, title, publisher } = props;
  const selected = recipeIsSelected && recipeIsSelected(props);
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
            onRecipeSelect && onRecipeSelect(props);
          }}
          selected={selected}
        >
          {selected ? "Remove from list" : "Add to my list"}
        </ActionButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Recipe;
