import * as React from "react";
import { RecipesContext } from "../../providers/Recipes";
import RecipesList from "../../components/RecipesList/index-classic";
import SelectedRecipes from "../SelectedRecipes/index-classic";
import Loader from "../../components/Loader";
import { Wrapper, Title, LoaderWrapper, Layout } from "../styled";

export default class ClassicContext extends React.Component {
  /**
   * Link RecipesContext to this.context. We must have a class component for context API to work!
   */
  static contextType = RecipesContext;

  render() {
    const {
      recipes,
      selectedRecipes,
      loading,
      handleQueryChange,
      searching,
      onRecipeSelect,
      recipeIsSelected
    } = this.context;

    return (
      <Wrapper>
        <Title>The classic - classes version</Title>
        {loading && (
          <LoaderWrapper>
            <Loader />
            <div>Please wait, loading recipes...</div>
          </LoaderWrapper>
        )}
        {!loading && (
          <Layout>
            <RecipesList
              recipes={recipes}
              onSearch={handleQueryChange}
              searching={searching}
              selectedRecipes={selectedRecipes}
              onRecipeSelect={onRecipeSelect}
              recipeIsSelected={recipeIsSelected}
            />
            <SelectedRecipes />
          </Layout>
        )}
      </Wrapper>
    );
  }
}
