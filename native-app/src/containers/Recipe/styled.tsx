import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
  margin: 8px 0;
  flex: 1;
  flex-direction: row;
`;

export const InnerWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;

export const Publisher = styled.Text`
  font-size: 10px;
  color: orange;
`;

export const ActionButton = styled.Button`
  text-transform: uppercase;
  font-size: 10px;
  padding: 0;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  display: flex;
`;
