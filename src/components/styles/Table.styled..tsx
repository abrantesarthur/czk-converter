import styled from "styled-components";

export const TableTitle = styled.h1`
  font-family: Helvetica;
  font-size: 30px;
  margin: 5vh 0 1hv 0;
`;

export const StyledTable = styled.table`
  width: 50vw;
  margin: 0 0 5vh 0;
  font-family: Helvetica;

  border-radius: 10px;
  border-collapse: collapse;
  box-shadow: 5px 10px 20px 10px #eee;
  overflow: hidden;

  thead tr {
    background-color: #f0f5fa;
    border-radius: 15px;

    height: 60px;
    color: #0a146e;
    font-size: 20px;
  }

  tbody tr {
    height: 20px;
    font-size: 16px;
  }

  th {
    text-align: left;
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #eed;
  }

  tbody th {
    font-weight: 500;
  }
`;
