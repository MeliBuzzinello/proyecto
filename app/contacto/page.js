import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  return (
    <>
      <section className="grid grid-cols-1 m-14 p-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 min-w-[20%] bg-white rounded-lg">
        <div className="relative w-full max-w-[800px] mx-auto my-auto">
        <div className="p-8">
          <h1 className="label-text pb-3  text-gray-600">CONTACTANOS</h1>
          <span className="label-text  text-gray-600">
            Te esperamos de Lunes a Sabados de 10 a 13 y de 15 a 18hs.
          </span>

          <div className="flex pt-3">
            <FontAwesomeIcon icon={faPhone} className="text-mint" width={20} />
            <span className="label-text pl-2  text-gray-600">3515332583</span>
          </div>
          <div className="flex pt-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-mint"
              width={20}
            />
            <span className="label-text pl-2  text-gray-600">
              General Félix Olazábal 993 - Ituzaingo
            </span>
          </div>
          <div className="flex pt-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-mint"
              width={20}
            />
            <span className="label-text pl-2  text-gray-600">info@reynabatata.com</span>
          </div>
        </div>
        </div>
        <div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo electronico</span>
              </label>
              <input
                type="email"
                placeholder="Correo electronico"
                className="input input-bordered bg-gray-300"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Teléfono</span>
              </label>
              <input
                type="number"
                placeholder="Teléfono"
                className="input input-bordered bg-gray-300"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Escribinos</span>
              </label>
              <input
                type="text"
                placeholder="Tu comentario"
                className="input input-bordered bg-gray-300"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contacto;
