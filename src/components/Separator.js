import React from 'react'

export const Separator = ({color}) => {
    return (
        <div className='mx-auto my-4' style={{width:'200px', height:'30px'}}>
            <img src='assets/separator.png' alt='coffee beans separator'  style={color && {filter:'invert(1)'}}/>
        </div>
    )
}
