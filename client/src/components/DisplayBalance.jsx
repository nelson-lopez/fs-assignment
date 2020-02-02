import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../utils/AppContext';
import { getBalance } from '../api/getBalance';
import { DispatchContext } from '../utils/DispatchContext';
import { Form, Input, FormText } from 'reactstrap';


const DisplayBalance = () => {
  const [balance, setBalance] = useState(0)
  const { currentAddress, currency, exchangeData } = useContext(AppContext)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    if (currentAddress !== null) {
      // Set the current balance to resolved getBalance promise
      getBalance(currentAddress, currency).then(res => setBalance(res))
    }
  }, [currentAddress, currency, exchangeData])

  const handleOnChange = (e) => {
    dispatch({ type: 'change-currency', value: e.currentTarget.value })
  }
  return (
    <div>
      <Form>
        <Input type="select" onChange={(e) => { handleOnChange(e) }}>
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
        </Input>
        <FormText>Balance:{balance}</FormText>
      </Form>
    </div>
  );
}

export default DisplayBalance;
