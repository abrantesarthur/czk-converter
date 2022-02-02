import styled from "styled-components";

export const FormTitle = styled.h1`
  font-family: Helvetica;
  font-size: 30px;
  margin: 5vh 0 1hv 0;
`;

export const StyledForm = styled.form`
  height: 40vh;
  width: 42vw;
  box-shadow: 5px 10px 20px 10px #eee;
  border-radius: 10px;
  padding: 5vh 3vw 5vh 3vw;
  margin: 0 0 5vh 0;
`;

export const StyledLabel = styled.label`
  text-align: left;
  font-size: 20px;
  margin: 0 0 1vh 0;
  font-weight: bold;
  font-family: Helvetica;
`;

export const TextInput = styled.input`
  width: 200px;
  margin: 0px 0px 20px 0px;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 18px;
  font-family: Helvetica;
  padding: 10px 0px 10px 10px;
`;

export const DropdownMenu = styled.select`
  height: 40px;
  width: 200px;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 18px;
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 0px 10px;
  cursor: pointer;
`;

export const SubmitButton = styled.input`
  width: 200px;
  padding: 10px 5px 10px 5px;
  margin: 0.9vw 0;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 20px;
  background-color: #0a146e;
  color: white;
  font-weight: bold;
  font-family: Helvetica;
  cursor: pointer;
`;
