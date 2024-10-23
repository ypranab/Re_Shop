import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Bookingmodal from "../components/Bookingmodal";
import PhoneDetails from "./PhoneDetails";

const Phones = () => {
  const phones = useLoaderData();
  const [bookedPhone, setBookedPhone] = useState(null);
  return (
    <div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {phones.map((phone) => (
          <PhoneDetails phone={phone} key={phone?._id}></PhoneDetails>
        ))}
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

export default Phones;
