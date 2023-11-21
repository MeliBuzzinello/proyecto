import Image from "next/image";
import imgDonus from "../../public/imgs/carousel/1.png";
import imgCookkie from "../../public/imgs/carousel/2.png";
import imgCaffee from "../../public/imgs/carousel/3.png";
import nosotros from "../../public/imgs/nosotros.jpg";

export const generateMetadata = async ({params}) => {
  return {
      title: 'Reyna Batata - ' + params.categorias
  }
}

const Nosotros = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image alt="imgDonus" src={imgDonus} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image alt="imgCookkie" src={imgCookkie} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image alt="imgCaffee" src={imgCaffee} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 m-8 p-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 min-w-[20%] bg-white rounded-lg">
        <div className="relative w-full max-w-[800px] mx-auto my-auto">
          <Image
            alt="nosotros"
            src={nosotros}
            layout="responsive"
            width={800}
            height="auto"
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="p-8  text-gray-600">
            Hola! Somos Estefania y Juliana, <br/>
            <br/>
            Socias y cuñadas que juntas le
            dimos vida a Mola Pastelería, un emprendimiento que tiene como
            misión hacer más dulce la vida de las personas.  <br/>
            <br/>
            Los encuentros,momentos con amigos y familia son nuestra inspiración.  <br/>
            Por eso nuestro objetivo es que disfruten de comer los mejores productos
            dulces artesanales dejando una huella para toda la vida.  <br/>
            <br/>
            Cocinamos con los ingredientes de mejor calidad, amamos los detalles y ponemos
            mucha pasión en lo que hacemos.  <br/>
            <br/>
            Te invitamos a descubrir todos los sabores en nuestra tienda online...
          </p>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
