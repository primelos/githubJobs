import React from 'react'
import { Form } from 'react-bootstrap'


const SearchForm = ({ params, onParamChange }) => {


  return (
    <Form className="mb-4">
      <Form.Group as={Col}>
        <Form.Label>Decription</Form.Label>
        <Form.Control
          onChange={onParamChange}
          value={params.description}
          name="description"
          type="text  "
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Location</Form.Label>
        <Form.Control
          onChange={onParamChange}
          value={params.location}
          name="location"
          type="text  "
        />
      </Form.Group>
    </Form>
  );
}

export default SearchForm
