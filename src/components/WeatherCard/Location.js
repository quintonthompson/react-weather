import React, { useState } from "react";
import styled from "@emotion/styled";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(true);

  if (inputMode) {
    return (
      <Container>
        <FormElement
          onSubmit={(e) => {
            e.preventDefault();
            getWeather(query);
          }}
        >
          <InputField
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
          <CancelButton onClick={() => setInputMode(false)} type="submit">
            x
          </CancelButton>
        </FormElement>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
const FormElement = styled.form`
  background: blueviolet;
  display: flex;
  position: relative;
  border-radius: 5px;
`;

const InputField = styled.input`
  background: transparent;
  padding: 4px;
  width: 80px;
  color: white;
  border: none;
  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 4px;
  background: blue;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
`;

const CancelButton = styled.span`
  position: absolute;
  background: pink;
  top: -8px;
  right: -10px;
`;

const Container = styled.div`
  text-align: center;
`;
const City = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;
const Country = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 100;
`;
