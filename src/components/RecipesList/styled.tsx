import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SearchBoxWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  position: relative;

  & > input {
    padding: 8px 8px;
    font-size: 20px;
    color: #333;
    outline: none;
    font-weight: 500;
    border: none;
    width: 100%;
  }

  & > svg {
    position: absolute;
    right: 8px;
    background: #fff;
  }
`;
