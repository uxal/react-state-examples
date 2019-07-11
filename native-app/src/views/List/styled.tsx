import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 30px 10px 0 10px;
`;

export const SearchWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const SearchBox = styled.TextInput`
  width: 80%;
  border: 1px solid #eee;
  padding: 10px;
  font-size: 20px;
  color: #333;
  margin: 40px 0;
`;

export const SearchingIndicator = styled.Text`
  position: absolute;
  bottom: 15px;
`;
