import Image from "next/image";

const TableStock = ({ item }) => {
  return (
    <>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  alt={item.title}
                  src={item.image}
                  width={400}
                  height={400} 
                /> 
              </div> 
            </div>
            <div>
              <div className="font-bold text-gray-500">{item.title}</div>
              <div className="text-sm opacity-50 text-gray-500">{item.description}</div>
            </div>
          </div>
        </td>
        <td className="text-gray-500">${item.price}</td>
        <td className="text-gray-500">{item.inStock}</td>
        <th>
          <button className="btn btn-ghost btn-xs text-gray-500">Editar</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs text-gray-500">Eliminar</button>
        </th>
      </tr>
    
    </>
  );
};
export default TableStock;
