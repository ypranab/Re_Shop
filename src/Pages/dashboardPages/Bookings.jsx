import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const bookings = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl mb-8">My Orders</h2>
      <div className="overflow-x-auto mr-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SN</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src={booking.image} alt="" />
                    </div>
                  </td>
                  <th>{booking.phoneName}</th>
                  <th>{booking.brand}</th>
                  <th>{booking.price}</th>
                  <th>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-sm">pay</button>
                      </Link>
                    )}
                    {booking.paid && <span className="text-success">paid</span>}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
