import React from 'react'
import './itemDescription.css'

function ItemDescription({ product }) {
    return (
            <div className="row w-100">
                <div className="col-sm-6 col-lg-6 col-md-6 text-left">
                    <p>
                        { product.description }
                    </p>
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6">
                </div>
            </div>
    )
}

export default ItemDescription
