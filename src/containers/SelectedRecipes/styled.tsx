import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  border-left: 1px solid #eee;
  padding-left: 2.5%;
`;

export const TitleWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  height: 39px;
  display: flex;
  align-items: center;
  margin: 20px 0;
  text-transform: uppercase;
  width: 100%;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
`;

export const Title = styled.div`
  letter-spacing: 1.5px;
  font-size: 10px;
  font-weight: 600;
`;

export const Bubble = styled.div`
  background: #1c73fb;
  border-radius: 2000px;
  color: #fff;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    display: flex;
    align-items: flex-start;
    padding: 8px 0;
    justify-content: space-between;

    & div {
      width: 80%;
    }

    & button {
      color: red;
      font-size: 10px;
      text-transform: uppercase;
      border: 0;
      padding: 0;
      margin-top: 3px;
      cursor: pointer;
      outline: none;
    }
  }
`;
