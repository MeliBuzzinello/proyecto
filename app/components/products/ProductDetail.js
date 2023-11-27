'use client'
import Image from "next/image";
import { useState } from "react";

const ProductDetail = ({ item }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className="grid grid-cols-1 m-14 p-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 min-w-[20%] bg-white rounded-lg">
      <div className="rounded-t-6 m-5">
        <Image
          alt={item.description}
          src={`/imgs/products/${item.image}`}
          width={400}
          height={400}
          className="rounded-md shadow-2xl"
        />
      </div>

      <div className="m-5 flex flex-col self-end">
        <p className="block mb-1 text-gray-600 pb-3">{item.title}</p>
        <p className="text-xs tracking-tighter text-gray-600 pb-3">
          {item.description}
        </p>
        <p className="text-xl font-bold text-gray-600 pb-3">${item.price}</p>
        <p className="text-xs tracking-tighter text-gray-600 pb-3">
          Cantidad</p>
        <div className="pb-3">
          <button onClick={decrement} className="w-8 h-8 rounded-full bg-gray-500 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600 active:bg-gray-900">-</button>
          <button className="text-gray-600 pr-2 pl-2">{count}</button>
          <button onClick={increment} className="w-8 h-8 rounded-full bg-gray-500 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600 active:bg-gray-900">+</button>
        </div>
        <div className="flex">
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
