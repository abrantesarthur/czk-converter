import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div<{
  justifyContent?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  align-items: ${(props) => props.alignItems ?? "center"};
`;

export const Row = styled.div<{ justifyContent?: string }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
`;
