import ProductDetail from "@/app/components/products/ProductDetail";
import { mockData } from "@/data/products"

const Detail = ({params}) => {
    const { id } = params
    const { categoria } = params
    const product = mockData.find(item => item.slug === id);

    return (
        <div className="container m-auto pt-8">
            <h2 className="text-4xl text-bold">Detalle de producto</h2>
            <hr/>
            <ProductDetail key={product.slug} item={product}/>
            {/* { categoria } */}
        </div>
    )
}

export default Detail;

{/* <ProductDetail key={product.slug} item={product}/> */}