import React, { useState, useContext } from 'react';
import { DispatchContext } from '../utils/DispatchContext';
import { AppContext } from '../utils/AppContext';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { Form } from 'reactstrap'

const EditCurrentExchange = ({ exchange, setExchange, setEdit, editBox }) => {

  const dispatch = useContext(DispatchContext)
  const { currency } = useContext(AppContext)

  const [formValue, setFormValue] = useState(0)
  /**
   * Dispatch a fetch to edit the exchange on our backend as well as update the exchange unit in our parent component
   */
  const handleExchange = () => {
    setExchange({
      ...exchange,
      [currency]: parseFloat(formValue)
    })
    dispatch({ type: 'update-exchange', value: { exchange: currency, value: parseFloat(formValue) } })
    setEdit(!editBox)
  }

  return (
    <div>
      <Form>
        <AiOutlineCheck onClick={() => { handleExchange() }} />
        <AiOutlineClose onClick={() => { setEdit(!editBox) }} />
        <input type="text" placeholder={exchange.US} onChange={(e) => { setFormValue(e.currentTarget.value) }} />
      </Form>
    </div>
  );
}

export default EditCurrentExchange;
