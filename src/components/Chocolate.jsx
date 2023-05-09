import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData, useNavigate } from "react-router-dom";
import ShowChocolates from "./ShowChocolates";
import { useState } from "react";

const Chocolate = () => {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates);
  const navigate = useNavigate();
  return (
    <div className="px-[110px]">
      <div>
        <button
          onClick={() => navigate("/addChocolate")}
          className="py-3 px-4 text-xl mb-8"
          style={{ border: "1px solid rgba(20, 20, 20, 0.15)" }}
        >
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>{" "}
          New Chocolate
        </button>
      </div>
      <div
        className="grid grid-cols-6 py-5 rounded-lg"
        style={{
          background:
            "radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)",
        }}
      >
        <p className="pl-10">Image</p>
        <p className="pl-16 col-span-2">Name</p>
        <p className="mr-10">Country/Factory</p>
        <p className="pl-16">Category</p>
        <p className="pl-20">Action</p>
      </div>
      <div>
        {chocolates.map((chocolate) => (
          <ShowChocolates
            key={chocolate._id}
            chocolate={chocolate}
            loadedChocolates={loadedChocolates}
            setChocolates={setChocolates}
          ></ShowChocolates>
        ))}
      </div>
    </div>
  );
};

export default Chocolate;
