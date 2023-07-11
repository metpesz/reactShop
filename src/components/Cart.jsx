import React, { useState } from "react";
import productImage from '../images/product1.jpg'

export function Cart ({ items, removeItem }) {
    const [cartStatus, setCartStatus] = useState(false)

    return ( <>
        <div className="fixed top-4 right-8 hover:border-b hover:border-black hover:border-solid z-50">
            <button onClick={() => setCartStatus(!cartStatus)}>Cart<sup>[{items.length}]</sup></button>
        </div>
        {cartStatus === false ? (
            <div></div>
        ) : (
            <div className="h-screen w-96 bg-gray-400 fixed top-0 right-0 pt-12 pl- flex flex-col items-center gap-4">
                {items.map((item, index) => {
                    return (
                        <div className="bg-white w-10/12 h-32 flex rounded-md shadow-sm">
                            <img className="h-32 w-32 p-4" src={productImage} alt="" />
                            <div className="w-80 h-24 p-4">
                                <p>{item.name}</p>
                                <p>{item.color}, {item.size}</p>
                                <button className="mt-6" onClick={() => removeItem(index)}>Remove item</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        )}
    </>
    );
}