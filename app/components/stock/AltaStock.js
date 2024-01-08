"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";

const createProduct = async (values, file) => {
  try {
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    const fileURL = await getDownloadURL(fileSnapshot.ref);

    const docRef = doc(db, "productos", values.slug);
    await setDoc(docRef, {
      ...values,
      image: fileURL,
    });

    return { success: true, message: "Producto creado exitosamente" };
  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    return { success: false, message: "Error al crear el producto" };
  }
};

function AltaStock() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    inStock: 0,
    price: 0,
    type: "",
    slug: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createProduct(values, file);

    if (result.success) {
      <div role="alert" className="alert alert-success">
        <font></font>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <font></font>
        <span>Producto creado con exito!</span>
        <font></font>
      </div>;
      console.log(result.message);
    } else {
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! El producto no fue creado.</span>
      </div>;
      console.error(result.message);
    }
    setFile(null);
    setValues({
      title: "",
      description: "",
      inStock: 0,
      price: 0,
      type: "",
      slug: "",
    });
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Slug: </label>
        <input
          type="text"
          value={values.slug}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="slug"
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded w-full border border-blue-100 block my-4"
        />

        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label>Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="inStock"
          onChange={handleChange}
        />

        <label>Categoria: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="type"
          onChange={handleChange}
        />

        <label>Descripción: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
          name="description"
          onChange={handleChange}
        />
        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default AltaStock;
