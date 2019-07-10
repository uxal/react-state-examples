import styled from "styled-components";

export const Nav = styled.nav`
  border-bottom: 1px solid #ddd;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  opacity: 0.95;
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  font-weight: 700;
  color: #555;
  font-size: 22px;
  cursor: default;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  & a {
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    font-weight: 500;
    color: #555;
    font-size: 16px;
    margin-right: 16px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
`;

export const LinkWrapper = styled.div<{ active: boolean }>`
  & a {
    color: ${({ active }) => (active ? "#1c73fb" : "#555")};
  }
`;
