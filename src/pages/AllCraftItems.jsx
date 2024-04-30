import { Link, useLoaderData } from 'react-router-dom';

const AllCraftItems = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto font-gsans overflow-x-auto">
      <header className="my-6">
        <h1 className="text-4xl font-bold text-center mb-2">All Craft Items</h1>
        <p className="text-center text-xl text-base-content font-medium mb-4">Find the best craft and art items you need</p>
      </header>
      <main>
        <div className="overflow-x-auto">
          <table className="table overflow-x-auto">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>Item Name</th>
                <th>Price</th>
                <th>Sub-category</th>
                <th>Customization</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="text-base overflow-x-auto">
              {/* row 1 */}
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item?.item_name}</td>
                  <td>{item?.price}</td>
                  <td>{item?.subcategory_name}</td>
                  <td>{item?.customization}</td>
                  <td>
                    <Link to={`/productDetails/${item._id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AllCraftItems;
