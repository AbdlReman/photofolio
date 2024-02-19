import React from 'react'
import Card from './Card'
import { card_data } from './card-data'


const ParentContainer = () => {
    return (
        <>
            < div className="row mx-auto container-fluid justify-content-center align-items-center">
                {card_data.map((item) => {
                    return <Card {...item} />

                })}


            </div >
        </>
    )
}

export default ParentContainer