import { useLoaderData } from "react-router-dom";
import Phonebrands from "./Phonebrands";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="p-5 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((brand, idx) => (
          <Phonebrands key={idx} brand={brand}></Phonebrands>
        ))}
      </div>
    </div>
  );
};

export default Home;
