import React from 'react'
const UpBold = ({ tagName, tagValue, children }) => {
    return (
        <div>
            <span className="font-bold text-lg">{tagName}</span>
            <span>{tagValue}</span>
            {children}
        </div>
    )
}
export default UpBold