import styled from "styled-components";

export const StyledForm = styled.form`
  box-shadow: 5px 10px 20px 10px #eee;
  border-radius: 10px;
  padding: 5vh 20px 5vh 20px;
  margin: 10vh 0 10vh 0;
`;

export const StyledLabel = styled.label`
  display: block;
  text-align: left;
  font-size: 20px;
  margin: 0 0 1vh 0;
  font-weight: bold;
`;

export const TextInput = styled.input`
  display: block;
  width: 200px;
  margin: 0px 0px 20px 0px;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 0px 10px 10px;
`;

export const DropdownMenu = styled.select`
  height: 40px;
  width: 200px;
  border-radius: 5px;
  font-size: 18px;
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 0px 10px;
  cursor: pointer;
`;

export const SubmitButton = styled.input`
  display: block;
  width: 200px;
  padding: 10px 5px 10px 5px;
  margin: 0.9vw 0;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 20px;
  background-color: #0a146e;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
