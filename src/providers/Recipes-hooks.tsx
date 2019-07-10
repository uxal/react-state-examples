/**
 * This is the HOOKS version of the Recipes Context & Provider
 */
import React from "react";
import remove from "lodash/remove";
import { IRecipe } from "../interfaces/index";
import { RecipesAPI } from "../services/RecipesAPI";

const RecipesContext = React.createContext<Partial<IRecipesContext>>({
  loading: true,
  recipes: [],
  selectedRecipes: []
});

const RecipeProvider: React.FC = props => {
  const [recipes, setRecipes] = React.useState([] as IRecipe[]);
  const [selectedRecipes, setSelectedRecipes] = React.useState([] as IRecipe[]);
  const [loading, setLoading] = React.useState(true);
  const [searching, setSearching] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const fetchRecipe = async () => {
    if (!loading) {
      setLoading(true);
    }
    const recipes = await RecipesAPI.get();
    if (loading) {
      setLoading(false);
    }
    setRecipes(recipes);
  };

  React.useEffect(() => {
    if (!searchQuery.length) {
      //this happens on first render ("componentDidMount") or when the user clears the searchbox
      fetchRecipe();
    } else {
      searchRecipes();
    }
  }, [searchQuery]);

  const handleQueryChange = (value: string) => {
    setSearchQuery(value);
  };

  const onRecipeSelect = (recipe: IRecipe) => {
    if (recipeIsSelected(recipe)) {
      // remove from selection
      const selectedRecipesAfterRemove = [...selectedRecipes];
      remove(
        selectedRecipesAfterRemove,
        (item: IRecipe) => item.recipe_id === recipe.recipe_id
      );
      setSelectedRecipes(selectedRecipesAfterRemove);
    } else {
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  const recipeIsSelected = (recipe: IRecipe): boolean => {
    return (
      selectedRecipes.find(
        (item: IRecipe) => item.recipe_id === recipe.recipe_id
      ) !== undefined
    );
  };

  const searchRecipes = async () => {
    setSearching(true);
    const recipes = await RecipesAPI.search(searchQuery);
    setRecipes(recipes);
    setSearching(false);
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        selectedRecipes,
        loading,
        handleQueryChange,
        searching,
        onRecipeSelect,
        recipeIsSelected
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

interface IRecipesContext {
  loading: boolean;
  recipes: IRecipe[];
  selectedRecipes: IRecipe[];
  searchQuery: string;
  searching: boolean;
  handleQueryChange: (value: string) => void;
  onRecipeSelect: (recipe: IRecipe) => void;
  recipeIsSelected: (recipe: IRecipe) => boolean;
}

export { RecipesContext, RecipeProvider };
