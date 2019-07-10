import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  border: 1px solid #efefef;
  box-sizing: border-box;
  cursor: pointer;
  margin: 1%;

  & img {
    height: 150px;
    width: 100%;
  }
`;

export const Title = styled.div`
  background: #fff;
  padding: 16px 8px;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px 16px 8px;
`;

export const Publisher = styled.div`
  color: #fca211;
  font-size: 10px;
  padding: 16px 8px;
  display: flex;
  align-items: center;
`;
