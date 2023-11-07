import Image from "next/image";
import logo from '../../../public/imgs/Logosinfondo.png';

const Footer = () => {
  return (
   <>
   <footer className="w-full bg-pink-300 shadow-lg">
   <div className="container m-auto py-6 flex justify-center items-center">
          <Image alt="Logo" src={logo} width={100} height={25} />
        </div>
    <p className='bg-gray-700 text-center text-white text-xs py-2' > Reservados todos los derechos. Realizado por Meli Buzzinello</p>
   </footer>
   </>
  )
}
export default Footer;