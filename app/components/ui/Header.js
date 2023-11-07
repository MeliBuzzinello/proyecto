import Image from "next/image";
import logo from '../../../public/imgs/Logosinfondo.png';

const Header = () => {
  return (
    <>
      <header className="w-full bg-teal-400 shadow-lg">
        <div className="container m-auto py-6 flex justify-between items-center">
          <Image alt="Logo" src={logo} width={200} height={50} />
        </div>
      </header>
    </>
  );
};

export default Header;
