/**
 * This is the classic - class version of the Recipe Context & Provider
 */
import React from "react";
import remove from "lodash/remove";
import { IRecipe } from "../interfaces/index";
import { RecipesAPI } from "../services/RecipesAPI";

const RecipesContext = React.createContext<Partial<IRecipesContext>>({
  loading: true,
  recipes: []
});

class RecipeProvider extends React.Component<{}, IRecipesState> {
  state = {
    recipes: [],
    selectedRecipes: [],
    loading: true,
    searching: false,
    searchQuery: ""
  };

  componentDidMount() {
    this.fetchRecipe();
  }

  setRecipes = (recipes: IRecipe[]) => {
    this.setState({ recipes });
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  setSearchQuery = (query: string) => {
    this.setState({ searchQuery: query });
  };

  fetchRecipe = async () => {
    if (!this.state.loading) {
      this.toggleLoading();
    }
    const recipes = await RecipesAPI.get();
    if (this.state.loading) {
      this.toggleLoading();
    }
    this.setRecipes(recipes);
  };

  handleQueryChange = async (value: string) => {
    this.setSearchQuery(value);
    this.setState({ searching: true });
    const recipes = await RecipesAPI.search(value);
    this.setRecipes(recipes);
    this.setState({ searching: false });
  };

  onRecipeSelect = (recipe: IRecipe) => {
    if (this.recipeIsSelected(recipe)) {
      // remove from selection
      const selectedRecipes = [...this.state.selectedRecipes];
      remove(
        selectedRecipes,
        (item: IRecipe) => item.recipe_id === recipe.recipe_id
      );
      this.setState({ selectedRecipes });
    } else {
      this.setState({
        selectedRecipes: [...this.state.selectedRecipes, recipe]
      });
    }
  };

  recipeIsSelected = (recipe: IRecipe): boolean => {
    return (
      this.state.selectedRecipes.find(
        (item: IRecipe) => item.recipe_id === recipe.recipe_id
      ) !== undefined
    );
  };

  render() {
    const { recipes, loading, searching, selectedRecipes } = this.state;
    return (
      <RecipesContext.Provider
        value={{
          recipes,
          selectedRecipes,
          loading,
          searching,
          handleQueryChange: this.handleQueryChange,
          onRecipeSelect: this.onRecipeSelect,
          recipeIsSelected: this.recipeIsSelected
        }}
      >
        {this.props.children}
      </RecipesContext.Provider>
    );
  }
}

interface IRecipesContext {
  loading: boolean;
  searching: boolean;
  recipes: IRecipe[];
  selectedRecipes: IRecipe[];
  handleQueryChange: (value: string) => void;
  onRecipeSelect: (recipe: IRecipe) => void;
  recipeIsSelected: (recipe: IRecipe) => boolean;
}

interface IRecipesState {
  loading: boolean;
  searching: boolean;
  recipes: IRecipe[];
  selectedRecipes: IRecipe[];
  searchQuery: string;
}

export { RecipesContext, RecipeProvider };
