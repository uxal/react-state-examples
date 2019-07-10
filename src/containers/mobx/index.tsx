import React from "react";
import { inject, observer } from "mobx-react";
import { IRecipesStore } from "./stores/Recipes";

import RecipesList from "../../components/RecipesList/index-mobx";
import SelectedRecipes from "../SelectedRecipes/index-mobx";
import Loader from "../../components/Loader";
import { Wrapper, Title, LoaderWrapper, Layout } from "../styled";

const MobxExample: React.FC<IMobxExampleProps> = props => {
  const { recipesStore } = props;

  React.useEffect(() => {
    recipesStore!.fetchRecipes();
  }, []);

  if (!recipesStore) {
    return null;
  }

  const { loading } = recipesStore;

  return (
    <Wrapper>
      <Title>The mobx version</Title>
      {loading && (
        <LoaderWrapper>
          <Loader />
          <div>Please wait, loading recipes...</div>
        </LoaderWrapper>
      )}
      {!loading && (
        <Layout>
          <RecipesList />
          <SelectedRecipes />
        </Layout>
      )}
    </Wrapper>
  );
};

export default inject("recipesStore")(observer(MobxExample));

export interface IMobxExampleProps {
  recipesStore?: IRecipesStore;
}
