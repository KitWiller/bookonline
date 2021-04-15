import React from 'react'
const UpBold = ({ tagnome, tagvalue, children }) => {
//const UpBold = props => {
    return (
    <div>
        <span className={getCss(children)}> {tagnome} </span>
        <span> {tagvalue} </span> 
        {children} 
    </div>
    )

    function getCss(children){
        let cssreturn = "font-bold text-lg"

        if (children ) {
            cssreturn += " pr-2 float-left"
        }

        return cssreturn
    }
}
export default UpBold