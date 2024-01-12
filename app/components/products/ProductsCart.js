"use client";
import { useCartContext } from "@/app/context/cartContext";
import Image from "next/image";
import { useState } from "react";

const ProductsCart = ({ item }) => {

    const { removeItem } = useCartContext()

console.log(item)
const calcularPrecioTotal = (producto) => {
    const precioProducto = producto.price || 0; 
    const cantidadProducto = producto.count || 1; 
    return precioProducto * cantidadProducto;
  };
  const precioTotal = calcularPrecioTotal(item);

  const handleDelete = () => {
    removeItem(item.slug)
}
   

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  alt={item.description}
                  src={item.image}
                  width={40}
                  height={40}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
              {/* <div className="text-sm opacity-50">{item.title}</div> */}
            </div>
          </div>
        </td>
        <td>
        {item.count}
          <br />
          {/* <span className="badge badge-ghost badge-sm">
          {item.title}
          </span> */}
        </td>
        <td>{precioTotal}</td>
        <th>
          <button className="btn btn-ghost btn-xs" onClick={handleDelete}>Eliminar</button>
        </th>
      </tr>
    </>
  );
};

export default ProductsCart;
