import React from "react";
import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import {
  Nav,
  InnerWrapper,
  Brand,
  ButtonsWrapper,
  LinkWrapper
} from "./styled";

const Header: React.FC<RouteComponentProps> = props => {
  const {
    location: { pathname }
  } = props;

  return (
    <Nav>
      <InnerWrapper>
        <Brand>React workshop</Brand>
        <ButtonsWrapper>
          <LinkWrapper active={pathname === "/"}>
            <Link to="/">Classic</Link>
          </LinkWrapper>
          <LinkWrapper active={pathname === "/hooks"}>
            <Link to="/hooks">Hooks</Link>
          </LinkWrapper>
          <LinkWrapper active={pathname === "/redux"}>
            <Link to="/redux">Redux</Link>
          </LinkWrapper>
          <LinkWrapper active={pathname === "/mobx"}>
            <Link to="/mobx">Mobx</Link>
          </LinkWrapper>
        </ButtonsWrapper>
      </InnerWrapper>
    </Nav>
  );
};

export default withRouter(Header);
