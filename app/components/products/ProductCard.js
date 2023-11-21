import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <Link href={`/productos/detail/${item.slug}`}>
    <div className="bg-white h-120 w-80 rounded-md">
      <div className="flex justify-center items-center leading-none">
        <Image
          alt={item.title}
          src={`/imgs/products/${item.image}`}
          width={400}
          height={400}
          className="h-56 w-72 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
        />
      </div>
      <div className="p-3">
        <p className="block mb-1  text-gray-600">{item.title}</p>
        <p className="text-xs tracking-tighter text-gray-600">
          {item.description}
        </p>
      </div>
      <div className="flex justify-between items-center p-2">
        <p className="text-xl font-bold text-gray-600">${item.price}</p>
        <div className="flex">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* <span className="badge badge-sm indicator-item">9</span> */}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;

// <article className="basis-72 shadow-lg rounded overflow-hidden bg-white">
//   <Link href={`/productos/detail/${item.slug}`} className="block">
//     <Image
//       alt={item.title}
//       src={`/imgs/products/${item.image}`}
//       width={288}
//       height={288}
//       className="object-cover w-full h-48"
//     />

//     <div className="px-4 border-t border-gray-200 pb-4">
//       <h4 className="text-lg font-semibold text-gray-800 my-2">
//         {item.title}
//       </h4>
//       <h6 className="my-2 text-gray-600">
//         {item.description}
//       </h6>
//       <p className="text-xl font-bold text-gray-800">${item.price}</p>
//     </div>
//   </Link>
// </article>
