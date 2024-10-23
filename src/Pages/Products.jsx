import { useLoaderData } from "react-router-dom";
import PhoneDetails from "./PhoneDetails";

const Products = () => {
  const products = useLoaderData();

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((phone) => (
        <PhoneDetails phone={phone} key={phone?._id}></PhoneDetails>
      ))}
    </div>
  );
};

export default Products;
