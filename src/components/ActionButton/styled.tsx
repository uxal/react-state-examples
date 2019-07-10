import styled, { StyledFunction } from "styled-components";

export const ActionButton = styled.button<ActionProps>`
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#1c73fb" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#1c73fb")};
  border: 1px solid #1c73fb;
  border-radius: 3px;
  width: 100%;
  font-size: 14px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  outline: none;
`;

interface ActionProps {
  /**
   * If selected is true the color changes
   */
  selected?: boolean;
}
