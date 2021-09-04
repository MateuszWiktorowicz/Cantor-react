import React, { useState } from "react";
import { currencies } from '../currencies';
import { Result } from './Result';
import "./index.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);

    };


    return (
        <div>
            <form onSubmit={onSubmit} className="form js-form">
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Kalkulator wymiany waluty</legend>
                    <p>
                        <label>

                            <span className="form__labelText">
                                Waluta:
                            </span>
                            <select
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                                className="form__field js-currency"
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
                            </select>

                        </label>
                    </p>
                    <p>
                        <label>
                            <span className="form__labelText">
                                Wpłacasz (PLN):
                            </span>
                            <input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                className="form__field js-payment"
                                type="number"
                                required min="0" step="0.01" />
                        </label>
                    </p>
                </fieldset>
                <button
                    className="form__button"
                >
                    Oblicz
                </button>
            </form>

            <div className="form__labelText">
                <Result
                    result={result}
                />
            </div>
        </div>
    )
}
export default Form