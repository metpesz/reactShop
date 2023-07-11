import React from "react";
import productImage from '../images/product1.jpg'

export function Product ({ item, onAddToCart }) {

    return (
        <div className="w-80 h-96 rounded-md bg-white p-4 flex items-center flex-col shadow-md">
            <img className="w-64 h-64 mt-4 rounded-md" src={productImage} alt="" />
            <div className="flex w-64 h-96">
                <div className="w-1/2 h-20 pt-2 flex flex-col justify-center">
                    <p>{item.name}</p>
                    <p>{item.color}, {item.size}</p>
                </div>
                <div className="w-1/2 h-20 flex justify-center items-center">
                    <button onClick={() => onAddToCart(item)} className="shadow-md pl-2 pr-2 h-8 rounded-xl bg-gray-100">Add to cart</button>
                </div>
            </div>
        </div>
    );
};