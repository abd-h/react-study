import React from 'react';
import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    return (
        <dialog className='result-modal'  ref={ref}>
            <h2>{result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stop the timer with <strong>X seconds left</strong></p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
}
)

export default ResultModal;