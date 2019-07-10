import * as React from "react";
import { RecipesContext } from "../../providers/Recipes-hooks";
import RecipesList from "../../components/RecipesList/index-hooks";
import SelectedRecipes from "../SelectedRecipes/index-hooks";
import Loader from "../../components/Loader";
import { Wrapper, Title, Layout, LoaderWrapper } from "../styled";

const RecipeList: React.FC = () => {
  const recipeContext = React.useContext(RecipesContext); //useContext Hook to access the context
  const { recipes, loading, handleQueryChange, searching } = recipeContext;

  return (
    <Wrapper>
      <Title>The hooks version</Title>
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
          />
          <SelectedRecipes />
        </Layout>
      )}
    </Wrapper>
  );
};

export default RecipeList;
