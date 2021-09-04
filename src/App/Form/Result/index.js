import React from 'react'

export const Result = ({ result }) => (
    <p>
        { result !== undefined && (
            <>
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )
        }
    </p>
);
