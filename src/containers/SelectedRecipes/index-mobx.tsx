import React from "react";
import { inject, observer } from "mobx-react";
import { IMobxExampleProps } from "../../containers/mobx";
import { IRecipe } from "../../interfaces/index";
import { Wrapper, TitleWrapper, Title, List, Bubble } from "./styled";

const SelectedRecipes: React.FC<IMobxExampleProps> = props => {
  const { recipesStore } = props;
  if (!recipesStore) {
    return null;
  }
  const { selectedRecipes, selectRecipe } = recipesStore;
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

export default inject("recipesStore")(observer(SelectedRecipes));
