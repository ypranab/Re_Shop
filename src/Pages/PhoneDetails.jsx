/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Bookingmodal from "../components/Bookingmodal";

const PhoneDetails = ({ phone }) => {
  const { user } = useContext(AuthContext);
  const [bookedPhone, setBookedPhone] = useState(null);

  return (
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
                onClick={() => setBookedPhone(phone)}
              >
                Buy Phone
              </label>
            </>
          )}
        </div>
      </div>
      {bookedPhone && (
        <Bookingmodal
          bookedPhone={bookedPhone}
          setBookedPhone={setBookedPhone}
        ></Bookingmodal>
      )}
    </div>
  );
};

export default PhoneDetails;
