
import React from 'react'

const Button = ({ btn_text, func }) => {
    return (
        <button onClick={func} className='btn my-2 text-uppercase rounded-1 front-button px-4 align-self-center'>
            {btn_text}
        </button>
    )
}

export default Button