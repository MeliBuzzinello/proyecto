import { NextResponse } from "next/server";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';


export async function GET ( request, {params} ){
      const { slug } = params;
      const docRef = doc( db, 'productos', slug);
      const docSnapshot = await getDoc(docRef);
     
      return NextResponse.json(docSnapshot.data());
};






// import { NextResponse } from "next/server";
// import { mockData } from "../../../../data/products";

// const sleep = (timer) => {
//     return new Promise ((resolve)=> setTimeout(resolve.timer));
// }

// export async function GET( request , {params} ){

//    const { slug } = params;

//    const data = mockData.filter((product) => product.slug === slug);

//     try {   
//         return NextResponse.json( data );
//       } catch (error) {
//         console.error('Error en la API interna:', error);
//         return NextResponse.error('Error interno del servidor', 500);
//       }
// }