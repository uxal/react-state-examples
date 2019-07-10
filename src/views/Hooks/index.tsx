import React from "react";
import { RecipeProvider } from "../../providers/Recipes-hooks";
import HooksContext from "../../containers/context/Hooks";

const Classic: React.FC = () => {
  return (
    <RecipeProvider>
      <HooksContext />
    </RecipeProvider>
  );
};

export default Classic;
