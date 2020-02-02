import React, { useReducer, useMemo } from 'react';
import FormInput from './components/FormInput';
import WarningBox from './components/WarningBox';
import CurrentExchange from './components/CurrentExchange';
import DisplayBalance from './components/DisplayBalance';
import { initialState } from './utils/initialState';
import { DispatchContext } from './utils/DispatchContext';
import { AppContext } from './utils/AppContext';
import { getExchange } from './api/getExchange';
import { editExchange } from './api/editExchange';
import { checkIfExpired } from './api/checkIfExpired';
import { Row, Col, Card } from 'reactstrap'

const reducer = (state, action) => {
  switch (action.type) {
    case 'form-submit':
      return { ...state, isValid: checkIfExpired(state.formInput) }
    case 'change-currency':
      return { ...state, currency: action.value }
    case 'set-address':
      return { ...state, currentAddress: state.formInput }
    case 'set-exchange':
      return { ...state, exchangeData: getExchange() }
    case 'update-exchange':
      return { ...state, exchangeData: editExchange(action.value.exchange, action.value.value) }
    case 'form-input':
      return { ...state, formInput: action.value }

    default:
      return state;
  }
}

function App() {

  const [{ formInput, isValid, currentAddress, exchangeData, exchangeInput, currency }, dispatch] = useReducer(reducer, initialState)



  const providerValue = useMemo(() => (
    { formInput, isValid, currentAddress, exchangeData, exchangeInput, currency }),
    [formInput, isValid, currentAddress, exchangeData, exchangeInput, currency]
  )

  return (
    <div >
      <DispatchContext.Provider value={dispatch}>
        <AppContext.Provider value={providerValue}>
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
        </AppContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
