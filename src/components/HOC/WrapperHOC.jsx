import React, { useState } from 'react'

const WrapperHOC = (WrapperComp) => {
    function WrapperHOC() {
        const [counter, setCounter] = useState(0);

        const handleCounter = () => {
            setCounter(counter + 1);
        }

        return (
            <WrapperComp counter={counter} handleCounter={handleCounter} />
        )
        }
        return WrapperHOC
}
export default WrapperHOC