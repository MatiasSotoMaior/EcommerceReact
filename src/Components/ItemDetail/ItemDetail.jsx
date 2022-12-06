import "./ItemDetail.css"
import React from 'react'

const ItemDetail = ({ products=[] }) => {
    return (
            <div className="Detail">
                <div className="imgDetail">
                    <img src={products.Img} alt=""/>
                </div>
                <div className="detDetail">
                <h2 className="title text-center">{products.Name}</h2>
                    <div className="py-3">
                        <h3>Tipo de Bebida</h3>
                        {products.Tipo}
                    </div>
                    <div className="py-3">
                        <h3>Detalles</h3>
                        {products.IBU ? <p>IBU:{products.IBU}</p>:<p>ALC:{products.ALC}%</p>}
                    </div>
                    <h3 className="py-3">
                        ${products.Precio}
                    </h3>
                </div>
            </div>
    )
}

export default ItemDetail