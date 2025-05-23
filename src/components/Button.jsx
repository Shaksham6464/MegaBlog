import React from "react";

function Button({
    children,
    type='button',
    bgColor='bg-blue-500',
    textcolor='text-white',
    className='',
    ...props
}){
    return(
        <button className={`px-4 py-2 rounded ${bgColor} ${textcolor} ${className}`}{...props}>
            {children}
        </button>
    )
}
export default Button;