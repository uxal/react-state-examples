/**
 * In this example we use the
 */
import React from "react";
import { IRecipe } from "../../interfaces/index";
import { RecipesContext } from "../../providers/Recipes";
import { Wrapper, TitleWrapper, Title, List, Bubble } from "./styled";

export default class SelectedRecipes extends React.Component {
  static contextType = RecipesContext;

  render() {
    const { selectedRecipes, onRecipeSelect } = this.context;

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
            {selectedRecipes.map((item: IRecipe) => (
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
  }
}
