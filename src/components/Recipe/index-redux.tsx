/**
 * The redux example of a recipe component
 */
import React from "react";
import { connect } from "react-redux";
import { selectRecipe } from "../../containers/redux/actions";
import { IReduxState } from "../../containers/redux/reducers";
import { recipeIsSelected } from "../../containers/redux/reducers/recipes";
import { IRecipe } from "../../interfaces/index";
import { Wrapper, Title, ButtonWrapper, Publisher } from "./styled";
import ActionButton from "../ActionButton";

const Recipe: React.FC<IRecipeProps> = props => {
  const { recipe, selectedRecipes, selectRecipe } = props;
  const { image_url, title, publisher } = recipe;
  const selected = recipeIsSelected(recipe, selectedRecipes);
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

const mapStateToProps = (state: IReduxState) => {
  const { selectedRecipes } = state.recipes;
  return {
    selectedRecipes
  };
};

const mapDispatchToProps = { selectRecipe };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);

interface IRecipeProps {
  recipe: IRecipe;
  selectedRecipes: IRecipe[];
  selectRecipe?: any;
}
