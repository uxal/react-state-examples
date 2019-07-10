import React from "react";
import { connect } from "react-redux";
import { IRecipe } from "../../interfaces";
import { IReduxState } from "./reducers";
import { fetchRecipes } from "./actions";
import RecipesList from "../../components/RecipesList/index-redux";
import SelectedRecipes from "../SelectedRecipes/index-redux";
import Loader from "../../components/Loader";
import { Wrapper, Title, LoaderWrapper, Layout } from "../styled";

class ReduxExample extends React.Component<IReduxExampleProps> {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  render() {
    const { loading } = this.props;
    return (
      <Wrapper>
        <Title>The redux version</Title>
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
  }
}

const mapStateToProps = (state: IReduxState) => {
  const { loading } = state.recipes;
  return {
    loading
  };
};

const mapDispatchToProps = { fetchRecipes };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample);

interface IReduxExampleProps {
  recipes?: IRecipe[];
  loading?: boolean;
  searching?: boolean;
  fetchRecipes: any;
}
