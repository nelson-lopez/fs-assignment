import React from 'react';
import FormInput from './components/FormInput';
import WarningBox from './components/WarningBox';
import CurrentExchange from './components/CurrentExchange';
import DisplayBalance from './components/DisplayBalance';
import { Row, Col, Card } from 'reactstrap'

function App() {
  return (
    <div >
      <FormInput />
      <WarningBox />
      <Row>
        <Col sm="6">
          <Card body style={{ backgroundColor: '#F5F5F5', borderColor: '#D3D3D3' }}>
            <CurrentExchange />
          </Card>
        </Col>
        <Col sm="6">
          <Card body style={{ backgroundColor: '#F5F5F5', borderColor: '#D3D3D3' }}>
            <DisplayBalance />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
