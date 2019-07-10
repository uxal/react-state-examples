import React from "react";
import { connect } from "react-redux";
import { selectRecipe } from "../../containers/redux/actions";
import { IReduxState } from "../../containers/redux/reducers";
import { IRecipe } from "../../interfaces/index";
import { Wrapper, TitleWrapper, Title, List, Bubble } from "./styled";

const SelectedRecipes: React.FC<ISelectedRecipesProps> = props => {
  const { selectedRecipes, selectRecipe } = props;
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Selected recipes</Title>
        {selectedRecipes && selectedRecipes.length > 0 && (
          <Bubble>{selectedRecipes.length}</Bubble>
        )}
      </TitleWrapper>

      {selectedRecipes && selectedRecipes.length > 0 && (
        <List>
          {selectedRecipes.map(item => (
            <li>
              <div>{item.title}</div>
              <button
                onClick={() => {
                  selectRecipe(item);
                }}
              >
                remove
              </button>
            </li>
          ))}
        </List>
      )}

      {!selectedRecipes ||
        (selectedRecipes.length === 0 && <div>No recipes selected</div>)}
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
)(SelectedRecipes);

interface ISelectedRecipesProps {
  selectedRecipes: IRecipe[];
  selectRecipe?: any;
}
