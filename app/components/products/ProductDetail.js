
import Image from 'next/image';


const ProductDetail = ({ item }) => {
  return (
    <section className="grid grid-cols-2 m-20 p-20 min-w-[600px] bg-white rounded-lg">
      <div className="relativo">
        <div className="absolute">
          <div className="rounded-t-6">
            <Image
              alt="green apple slice"
              src={`/imgs/products/${item.image}`}
              width={400}
              height={400}
              className="h-56 w-72 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
            />
          </div>
             </div>
      </div>
      <div className="py-2">
        <div className="">
          <h1>{item.title}</h1>
          <span>COD: 45999</span>
        </div>
        <div className="">
          $ <span>{item.price}</span>
        </div>
     
        <div className="">
          <h3>{item.description}</h3>
        </div>
        <button className="py-3 px-6 rounded-full text-text font-bold text-sm bg-mint shadow-md transition-transform transform active:scale-97 focus:outline-none focus:ring focus:border-mint">ADD TO CART</button>
      </div>
    </section>
  )
}
export default ProductDetail;