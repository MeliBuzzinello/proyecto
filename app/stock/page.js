import { mockData } from "../../data/products";
import TableStock from "../components/products/TableStock";

const StockAdmin = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {mockData.map((product) => (
                <TableStock key={product.slug} item={product} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StockAdmin;
