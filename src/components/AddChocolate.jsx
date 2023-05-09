import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const navigate = useNavigate();

  // ! Handle form input
  const handleChocolateSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const quality = form.quality.value;
    const photo = form.photo.value;
    const chocolate = {
      name,
      country,
      quality,
      photo,
    };
    console.log(chocolate);

    // ! Fetching data to server
    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Chocolate Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="px-[110px]">
      <div>
        <button onClick={() => navigate(-1)} className="py-3 px-4 text-xl mb-8">
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>{" "}
          All Chocolate
        </button>
      </div>
      <hr
        className="mb-8"
        style={{ border: "1px solid rgba(20, 20, 20, 0.1)" }}
      />
      <div style={{ background: "rgba(20, 20, 20, 0.05)" }}>
        <h2 className="text-center text-2xl pt-12 pb-2 font-semibold">
          New Chocolates
        </h2>
        <p className="text-center text-[gray]">
          Use the below form to create a new product
        </p>
        <div className="w-3/4 mx-auto">
          <form onSubmit={handleChocolateSubmit}>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Hot Pink Chocolate"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter Country Name"
                  name="country"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control pb-8">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Premium/Normal"
                  name="quality"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control pb-8">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <button className="btn btn-block mb-8 bg-[#91572B]" type="submit">
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChocolate;
