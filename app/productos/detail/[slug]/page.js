import ProductDetail from "@/app/components/products/ProductDetail";
import { Suspense } from "react";



const Detail = async  ({params}) => {

    const { slug } = params
    
    
    const data = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: 'no-store',
        next: {
            revalidate: 0
        }
    }).then(res => res.json())
    
    const item = Array.isArray(data) && data.length > 0 ? data[0] : null;

        
   

    return (
        <div className="container m-auto">
            <hr/>
            <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
            <ProductDetail key={data.slug} item={data}/>
            </Suspense>
        </div>
    )
}

export default Detail;

