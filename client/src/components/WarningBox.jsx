import React from 'react';
import { Alert } from 'reactstrap'


const WarningBox = () => {
  return (
    <div>
      <div>
        <Alert color="danger">This wallet is expired</Alert>
      </div>
    </div>
  );
}

export default WarningBox;
