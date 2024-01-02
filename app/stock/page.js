import { mockData } from "../../data/products";
import TableStock from "../components/stock/TableStock";

const StockAdmin = async () => {
 const items = await fetch( `http://localhost:3000/api/productos/all` , {
  cache: 'no-store',
 }).then( r => r.json() )

console.log('stockadmin')
console.log(items)

  return (
    <>
      <section className="grid grid-cols-1 m-14 p-8 gap-5 min-w-[20%] bg-white rounded-lg">
        <div className="flex justify-end">
          <button className="btn btn-primary">+ Producto</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => (
                <TableStock key={product.slug} item={product} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
     
    </>
  );
};

export default StockAdmin;
