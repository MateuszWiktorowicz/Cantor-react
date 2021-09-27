import React, { useState } from "react";
import { currencies } from '../currencies';
import { Result } from './Result';
import styled from "styled-components"

const Button = styled.button`
  margin: 10px auto;
    padding: 10px;
    border-radius: 3px;
    background-color: hsl(88, 77%, 35%);
    color: white;
    display: block;
    max-width: 400px;
    width: 100%;

    &:hover {
        background-color: hsl(88, 77%, 40%);
    }

    &:active {
        background-color: hsl(88, 77%, 45%)
    }
`;

const Fieldset = styled.fieldset`
 padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 20px;
`;

const Legend = styled.legend`
   border: 1px solid #ccc;
    padding: 3px;
    border-radius: 3px;
    color: cornsilk;
`;

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);

    };
const Select = styled.select`
   border: 1px solid #ccc;
    padding: 5px;
    border-radius: 3px;
    max-width: 200px;
    width: 100%;
    `;

    const FormText = styled.span`
        width: 140px;
    display: inline-block;
    margin: 0 5px;
    color: cornsilk;`;

    

    return (
        <div>
            <form onSubmit={onSubmit} className="form js-form">
                <Fieldset>
                    <Legend>Kalkulator wymiany waluty</Legend>
                    <p>
                        <label>

                            <FormText>
                                Waluta:
                            </FormText>
                            <Select
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                            
                                name="currency"

                            >
                                {currencies.map((currency => (
                                    <option
                                        key={currency.short}
                                        value={currency.short}
                                    >
                                        {currency.name}
                                    </option>
                                )))}
                            </Select>

                        </label>
                    </p>
                    <p>
                        <label>
                            <FormText>
                                Wpłacasz (PLN):
                            </FormText>
                            <input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                               
                                type="number"
                                required min="0" step="0.01" />
                        </label>
                    </p>
                </Fieldset>
                <Button>
                    Oblicz
                </Button>
            </form>

            <FormText>
                <Result
                    result={result}
                />
            </FormText>
        </div>
    )
}
export default Form