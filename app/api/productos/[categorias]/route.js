import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase/config';


export async function GET ( request, {params} ){
      const { categorias } = params;

      const productosRef = collection(db, 'productos')
      const q = categorias === 'all' ? productosRef : query(productosRef, where('type', '==', categorias))
     
      const querySnapshot = await getDocs(q);

      const docs = querySnapshot.docs.map( doc=> doc.data() );
      return NextResponse.json(docs);
};


// import { NextResponse } from "next/server";
// import { mockData } from "../../../../data/products";
// import { revalidateTag } from 'next/cache';

// const sleep = (timer) => {
//     return new Promise ((resolve)=> setTimeout(resolve.timer));
// }

// export async function GET( request , {params} ){

//    const { categorias } = params;

//    const data =
//    categorias === "all"
//      ? mockData
//      : mockData.filter((product) => product.type === categorias);

//      revalidateTag('all')

//     try {   
//         return NextResponse.json( data );
//       } catch (error) {
//         console.error('Error en la API interna:', error);
//         return NextResponse.error('Error interno del servidor', 500);
//       }
// }