import React from 'react'

function ItemDescription({ product }) {
    return (
        <div>
            <p>
                { product.description }
            </p>
        </div>
    )
}

export default ItemDescription
