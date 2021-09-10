import * as React from 'react'

const CartInput = () => {
    const [currentValue, setCurrentValue] = React.useState(1)
    const increment = () => {
        setCurrentValue(currentValue+1)
    }
    const decrement = () => {
        if(currentValue>1){
            setCurrentValue(currentValue-1)
        }
    }
    return (
        <div className="input-group">
            <button
                style={{ minWidth: "2.5rem" }}
                className="btn btn-decrement btn-outline-secondary btn-minus"
                onClick={decrement}
                type="button"
            >
                <strong>−</strong>
            </button>
            <input
                type="text"
                inputMode="decimal"
                min="0"
                step="1"
                style={{ textAlign: "center" }}
                className="form-control numspin"
                placeholder=""
                value={currentValue}
            />
            <button
                style={{ minWidth: "2.5rem" }}
                className="btn btn-increment btn-outline-secondary btn-plus"
                type="button"
                onClick={increment}
            >
                <strong>+</strong>
            </button>
            </div>
    )
}

export default CartInput
