"use client";
import Image from "next/image";
import { useState } from "react";
import { mockData } from "@/data/products";

const ABMStock = ({ params }) => {
  const { id } = params;
  const product = mockData.find((item) => item.slug === id);

  return (
    <>
      <section className="grid grid-cols-1 m-14 p-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 min-w-[20%] bg-white rounded-lg">

        <div className="rounded-t-6 m-5">
        <Image
          alt={product.description}
          src={`/imgs/products/${product.image}`}
          width={200}
          height={200}
          className="rounded-md shadow-2xl"
        />
        <label className="label">
            <span className="label-text text-xs tracking-tighter text-gray-600">Cambiar imagen</span>
          </label>
          <button className="btn btn-secundary text-sm">Subir img</button>
      </div>

        <div className="m-5 flex flex-col self-end">
          <label className="label">
            <span className="label-text text-xs tracking-tighter text-gray-600">Nombre del producto</span>
          </label>
          <input
            type="text"
            placeholder={product.title}
            className="input input-bordered bg-gray-300"
          />

          <label className="label">
            <span className="label-text text-xs tracking-tighter text-gray-600">Descripción:</span>
          </label>
          <input
            type="text"
            placeholder={product.description}
            className="input input-bordered bg-gray-300"
          />

          <label className="label">
            <span className="label-text text-xs tracking-tighter text-gray-600">Precio:</span>
          </label>
          <input
            type="text"
            placeholder={product.price}
            className="input input-bordered bg-gray-300"
          />

          <label className="label">
            <span className="label-text text-xs tracking-tighter text-gray-600">Stock:</span>
          </label>
          <input
            type="text"
            placeholder={product.inStock}
            className="input input-bordered bg-gray-300"
          />
          <div className="flex pt-6">
            <button className="btn btn-primary">Guardar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ABMStock;
