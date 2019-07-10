import React from "react";
import { RecipeProvider } from "../../providers/Recipes";
import ClassicContext from "../../containers/context/Classic";

const ClassicView: React.FC = () => {
  return (
    <RecipeProvider>
      <ClassicContext />
    </RecipeProvider>
  );
};

export default ClassicView;
