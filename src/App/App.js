import React, { useState } from 'react';
import { Form } from './Form';
import { currencies } from './currencies';
import { Clock } from "./Clock";
import styled from "styled-components"

const Div = styled.div`

    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
`;


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult(
      {
        sourceAmount: +amount,
        targetAmount: amount / rate,
        currency,
      },
    );


  };

  return (
    <Div  >
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult}
      />

    </Div>
  );
}

export default App;
