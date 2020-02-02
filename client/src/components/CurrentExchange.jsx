import React from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { Form, FormText } from 'reactstrap'

const CurrentExchange = () => {
  return (
    <div>
      <Form>
        <AiOutlineCheckSquare />
        <FormText>Eth Exchange: </FormText>
      </Form>
    </div>
  );
}

export default CurrentExchange;
