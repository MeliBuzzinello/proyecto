import ProductCard from "../../components/products/ProductCard"
import { mockData } from "../../../data/products"

export const generateMetadata = async ({params}) => {
    return {
        title: 'Reyna Batata - ' + params.categorias
    }
}

const Productos = ({ params }) => {

  const { categorias } = params;
   
    const items = categorias === 'all'
                    ? mockData
                    : mockData.filter(product => product.type === categorias)

    return (
        <div className="container m-auto pt-8">
            <h2 className="text-4xl text-bold"></h2>
            <hr/>
            
            <section className="flex justify-center items-center gap-10 flex-wrap">
                { items.map(product => <ProductCard key={product.slug} item={product}/>) }
            </section>
        </div>
    )
}

export default Productos;