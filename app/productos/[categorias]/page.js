import ProductCard from "../../components/products/ProductCard";

export const generateMetadata = async ({ params }) => {
  return {
    title: "Reyna Batata - " + params.categorias,
  };
};



const getProducts = async () => {
  const response = await fetch('http://localhost:3000/api/productos')

  if (!response.ok) {
      throw new Error("Falló petición de productos")
  }

  return response.json()
}




const Productos = async ({ params }) => {
  
    const data = await getProducts()
    console.log(`data ${data}`)

  const { categorias } = params;

  const items =
    categorias === "all"
      ? data
      : data.filter((product) => product.type === categorias);

  return (
    <div className="container m-auto pt-8">
      <h2 className="text-4xl text-bold"></h2>

      <section className="flex justify-center items-center gap-10 flex-wrap">
        {items.map((product) => (
          <ProductCard key={product.slug} item={product} />
        ))}
      </section>
    </div>
  );
};

export default Productos;
