'use client'
import Image from "next/image"
import Link from "next/link"
import logoDonut from "../../../public/imgs/2.png";
import logoCokies from "../../../public/imgs/3.png";
import logoCaffe from "../../../public/imgs/4.png";




const ProductosLayout = ({children}) => {

    return (
        <div className={`flex`}>
            
        <aside className={`w-48 bg-hotpink pt-12`}>
           

            <nav className="flex flex-col gap-5 px-4 text-text justify-center">
            
            <div className="flex justify-center">
            <Link href={"/productos/all"}>Todos</Link>
            </div>

            <div className="flex  items-center  justify-center">
             <Link  href={"/productos/donut"}>Donuts
             </Link>
            <Image alt="LogoDonut" src={logoDonut}/>
           </div>

           <div className="flex  items-center  justify-center">
             <Link href={"/productos/cookie"}>Cookies
             </Link>
            <Image alt="LogoDonut" src={logoCokies}/>
           </div>
           <div className="flex  items-center  justify-center">
             <Link href={"/productos/coffee"}>Coffee
             </Link>
            <Image alt="LogoDonut" src={logoCaffe}/>
           </div>
    
            </nav>
        </aside>
        <main className="flex-grow p-4">
        {children}
      </main>
    </div>

 )
}

export default ProductosLayout