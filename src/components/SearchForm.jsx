import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchForm() {
  const [name, setName] = useState('');
  const [plat, setPlat] = useState('');

  const onInput = (e) => {
    setName(e.target.value);
  };

  const onSelect = (e) => {
    setPlat(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/${name}/${plat}/stats`)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <Form className="username_form">
      <Form.Group className="username_input">
        <FloatingLabel
          controlId="floatingInput"
          label="Search For Username"
        >
          <Form.Control className="name_input" type="text" placeholder="Search for Username" onChange={(e) => onInput(e)} />
        </FloatingLabel>
        <ButtonGroup type="checkbox">
          <Button variant="light" value="PC" onClick={(e) => onSelect(e)}>PC</Button>
          <Button variant="light" value="X1" onClick={(e) => onSelect(e)}>Xbox</Button>
          <Button variant="light" value="PS4" onClick={(e) => onSelect(e)}>Playstation</Button>
          <Button className="search_button" variant="primary" type="submit" onClick={(e) => onSearch(e)}>Search</Button>
        </ButtonGroup>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
