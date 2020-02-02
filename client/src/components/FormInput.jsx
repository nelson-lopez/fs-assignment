import React, { useContext } from 'react';
import { DispatchContext } from '../utils/DispatchContext';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const FormInput = () => {

  const dispatch = useContext(DispatchContext)

  const handleOnChange = (e) => {
    dispatch({ type: 'form-input', value: e.currentTarget.value })
  }
  /**
   * Most of our global state is dispatched once a user enters a valid wallet address 
   */
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'form-submit' })
    dispatch({ type: 'set-address' })
    dispatch({ type: 'set-exchange' })
  }

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="append">
          <Button type="submit" value="Submit" onClick={(e) => handleOnSubmit(e)}> Submit </Button>
        </InputGroupAddon>
        <Input type="text" placeholder="Wallet Address" onChange={(e) => { handleOnChange(e) }} />
      </InputGroup>
    </div>
  );
}

export default FormInput;
