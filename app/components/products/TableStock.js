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
                  src={`/imgs/products/${item.image}`}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
              <div className="text-sm opacity-50">{item.description}</div>
            </div>
          </div>
        </td>
        <td>{item.price}</td>
        <td>{item.inStock}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Modificar</button>
        </th>
      </tr>
    </>
  );
};
export default TableStock;
