import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../utils/AppContext';
import { Alert } from 'reactstrap'

const WarningBox = () => {
  const { isValid, currentAddress } = useContext(AppContext)
  const [render, setState] = useState(null)


  useEffect(() => {
    if (isValid !== null) {
      isValid.then(res => setState(res))
    }
  }, [isValid])

  if (currentAddress === null) return (
    <span>Please enter a wallet address</span>
  )
  return (
    <div>
      {render === false ?
        <div>
          <Alert color="danger">This wallet is expired</Alert>
        </div>
        : <span></span>}
    </div>
  );
}

export default WarningBox;