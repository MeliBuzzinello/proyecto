import Image from "next/image";
import fondo from "../public/imgs/fondo.png";

export const generateMetadata = async () => {
  return {
      title: 'Reyna Batata - '
  }
}

export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${fondo.src})`
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Dulces momentos</h1>
                <p className="mb-5 text-white">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        {/* </div>
      </main> */}
    </>
  );
}
