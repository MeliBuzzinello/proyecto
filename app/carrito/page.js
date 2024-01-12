"use client";

import Image from "next/image";
import ProductsCart from "../components/products/ProductsCart";
import { useCartContext } from "../context/cartContext";

const carrito = () => {
  const { cart } = useCartContext();

  return (
    <>
      <section className="grid grid-cols-1 m-24 p-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 min-w-[20%] bg-white rounded-lg ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <ProductsCart key={product.slug} item={product} />
              ))}
            </tbody>
            <tfoot>
              {/* <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr> */}
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};
export default carrito;
