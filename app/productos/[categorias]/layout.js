'use client'
import Link from "next/link"




const ProductosLayout = ({children}) => {

    return (
        <div className={`flex`}>
            
        <aside className={`fixed w-48 bg-gray-500 h-full`}>
           

            <nav className="flex flex-col gap-5 px-4 text-white">
            <Link href={"/productos/all"}>Todos</Link>
         <Link href={"/productos/donut"}>Donuts</Link>
          <Link href={"/productos/cookie"}>Cookies</Link>
          <Link href={"/productos/coffee"}>Coffee</Link>
            </nav>
        </aside>
        <main className="flex-grow p-4 ml-48">
        {children}
      </main>
    </div>

 )
}

export default ProductosLayout