import ProductDetail from "@/app/components/products/ProductDetail";

const getProducts = async () => {
    const response = await fetch('http://localhost:3000/api/productos')

    if (!response.ok) {
        throw new Error("Falló petición de productos")
    }

    return response.json()
}




const Detail = async  ({params}) => {

    const data = await getProducts()

    const { id } = params
    const { categoria } = params
    const product = data.find(item => item.slug === id);

    return (
        <div className="container m-auto">
            {/* <h2 className="text-4xl text-bold">Detalle de producto</h2> */}
            <hr/>
            <ProductDetail key={product.slug} item={product}/>
            {/* { categoria } */}
        </div>
    )
}

export default Detail;

