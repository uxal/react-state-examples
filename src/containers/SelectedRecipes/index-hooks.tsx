import React from "react";
import { RecipesContext } from "../../providers/Recipes-hooks";
import { Wrapper, TitleWrapper, Title, List, Bubble } from "./styled";

const SelectedRecipes: React.FC = props => {
  const recipesContext = React.useContext(RecipesContext);

  const { selectedRecipes, onRecipeSelect } = recipesContext;
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
                  onRecipeSelect && onRecipeSelect(item);
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

export default SelectedRecipes;
