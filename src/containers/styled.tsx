import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

export const Title = styled.div`
  color: red;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;

  & > div {
    font-size: 20px;
    font-weight: 300;
    margin-left: 16px;
  }
`;

export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;

  & > div:first-child {
    width: 75%;
  }

  & > div:last-child {
    width: 20%;
  }
`;
