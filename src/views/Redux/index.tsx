import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../../containers/redux/reducers";
import ReduxExample from "../../containers/redux";
/**
 * Configure the redux store
 */
const getComposeEnhancers = () => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //enable chrome redux-dev-tools
  }
  return compose;
};

const store = createStore(
  reducers,
  getComposeEnhancers()(applyMiddleware(thunk))
);

const Redux: React.FC = () => (
  <Provider store={store}>
    <ReduxExample />
  </Provider>
);

export default Redux;
