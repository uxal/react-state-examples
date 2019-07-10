import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { Wrapper, Body } from "./styled";

import ClassicView from "./views/Classic";
import HooksView from "./views/Hooks";
import ReduxView from "./views/Redux";
import MobxView from "./views/Mobx";

const App: React.FC = props => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Body>
          <Route path="/" exact component={ClassicView} />
          <Route path="/hooks" exact component={HooksView} />
          <Route path="/redux" exact component={ReduxView} />
          <Route path="/mobx" exact component={MobxView} />
        </Body>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
