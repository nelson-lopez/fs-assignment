import React from 'react';
import { Form, Input, FormText } from 'reactstrap';

const DisplayBalance = () => {
  return (
    <div>
      <Form>
        <Input type="select">
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
        </Input>
        <FormText>Balance:</FormText>
      </Form>
    </div>
  );
}

export default DisplayBalance;
