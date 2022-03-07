import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSignOutAlt, FaSearch } from "react-icons/fa";

export const SearchArtists = ({ onSubmit, onChange, onClick }) => {
  return(
    <Container className="px-4">
      <Button variant="dark" onClick={onClick}>
        Logout <FaSignOutAlt />
      </Button>
      <Form className="my-5 mx-auto w-50" onSubmit={onSubmit}>
        <Form.Label>Please enter artist name</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control type="text" onChange={onChange}/>
          <Button variant="success" type={"submit"}>
            <FaSearch/>
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
}