import { NextResponse } from "next/server";
import { mockData } from "../../../data/products";

const sleep = (timer) => {
    return new Promise ((resolve)=> setTimeout(resolve.timer));
}

export async function GET( ){
    try {   
        return NextResponse.json( mockData );
      } catch (error) {
        console.error('Error en la API interna:', error);
        return NextResponse.error('Error interno del servidor', 500);
      }
}