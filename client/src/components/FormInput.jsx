import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


const FormInput = () => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="append">
          <Button type="submit" value="Submit"> Submit </Button>
        </InputGroupAddon>
        <Input type="text" placeholder="Wallet Address" />
      </InputGroup>
    </div>
  );
}

export default FormInput;
