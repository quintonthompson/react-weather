import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)} type="submit">
              X
            </CancelButton>
          </FormElement>
        </motion.div>
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
  background: #778899;
  display: flex;
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 2px 2px rgb(0, 0, 0, 0.4);
`;

const InputField = styled.input`
  background: transparent;
  padding: 5px;
  width: 80px;
  color: white;
  border: none;
  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 5px;
  background: #2f4f4f;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.4);
`;

const CancelButton = styled.span`
  position: absolute;
  background: #808080;
  top: -6px;
  right: -8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: 1px 0px 2px rgb(0, 0, 0, 0.4);
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
