import ProductCard from "../../components/products/ProductCard";

export const generateMetadata = async ({ params }) => {
  return {
    title: "Reyna Batata - " + params.categorias,
  };
};


export function generateStaticParams() {
  return [
    { categorias: 'all'},
    { categorias: 'coffee'},
    { categorias: 'donut'},
    { categorias: 'cookie'}
  ]
};
export const revalidate = 3600;

const Productos = async ({ params }) => {
  const { categorias  } = params;

  const items = await fetch(`http://localhost:3000/api/productos/${categorias}`, {
        cache: 'force-cache',
        next: {
          tags :['all']
        }
    }).then(r => r.json())
  

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
