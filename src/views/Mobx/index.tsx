import React from "react";
import { Provider } from "mobx-react";
import { recipesStore } from "../../containers/mobx/stores/Recipes";
import MobxExample from "../../containers/mobx";
/**
 * Configure the mobx store provider
 */
const Redux: React.FC = () => (
  <Provider recipesStore={recipesStore}>
    <MobxExample />
  </Provider>
);

export default Redux;
