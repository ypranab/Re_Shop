import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Products = () => {
  const products = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((phone) => (
          <div
            key={phone._id}
            className={
              phone.status !== "sold"
                ? "m-4 card lg:card-side bg-emerald-100 shadow-xl"
                : "hidden"
            }
          >
            <figure className="w-1/4 ml-2">
              <img src={phone.image} alt="logo" />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title">{phone.name}</h2>
              <p>Brand: {phone.brand}</p>
              <p>Original Price: {phone.price} BDT</p>
              <p>Resale Price: {phone.resalePrice} BDT</p>
              <p>Year Used: {2023 - phone.year} year</p>
              <p>
                Seller: {phone.userName}
                {phone.verify && (
                  <input checked readOnly type="checkbox" value=""></input>
                )}
              </p>
              <p>Location: {phone.location}</p>

              <div className="card-actions justify-end">
                {user && (
                  <>
                    <br />
                    <label
                      htmlFor="booking-modal"
                      className="btn btn-info text-white"
                      //onClick={() => setBookedPhone(phone)}
                    >
                      Buy Phone
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
