import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../utils/AppContext';
import EditCurrentExchange from './EditCurrentExchange';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { Form, FormText } from 'reactstrap'

const CurrentExchange = () => {
  const { exchangeData, currency } = useContext(AppContext)
  const [exchange, setExchange] = useState(null)
  const [editBox, setEditBox] = useState(false)

  // Wait for exchange data to load/change from global state before passing it onto local state
  useEffect(() => {
    if (exchangeData !== null) {
      exchangeData.then(res => setExchange({
        [currency]: res[currency]
      }))
    }
  }, [exchangeData, currency])


  if (editBox) return (
    <EditCurrentExchange exchange={exchange} setExchange={setExchange} setEdit={setEditBox} editBox={editBox} />
  )
  else if (exchange)
    return (
      <div>
        <Form>
          <AiOutlineCheckSquare onClick={() => { setEditBox(!editBox) }} />
          <FormText>Eth Exchange:{exchange[currency]} </FormText>
        </Form>
      </div>
    );

  else return (
    <div>Waiting for wallet...</div>
  )
}

export default CurrentExchange;
