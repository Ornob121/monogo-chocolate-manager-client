import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditChocolate = () => {
  const chocolate = useLoaderData();
  const navigate = useNavigate();
  console.log(chocolate);
  const { _id, name, quality, photo, country } = chocolate;

  // ! Handle form input
  const handleChocolateUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const quality = form.quality.value;
    const photo = form.photo.value;
    const updatedChocolate = {
      name,
      country,
      quality,
      photo,
    };
    console.log(updatedChocolate);

    // ! Fetching data to server
    fetch(`http://localhost:5000/chocolates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Chocolate Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          //   form.reset();
        }
      });
  };

  return (
    <div className="px-[110px]">
      <div>
        <button
          onClick={() => navigate("/")}
          className="py-3 px-4 text-xl mb-8"
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>{" "}
          All Chocolate
        </button>
      </div>
      <div className="w-3/4 mx-auto">
        <form onSubmit={handleChocolateUpdate}>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
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
                defaultValue={country}
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
                defaultValue={quality}
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
                defaultValue={photo}
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
  );
};

export default EditChocolate;
