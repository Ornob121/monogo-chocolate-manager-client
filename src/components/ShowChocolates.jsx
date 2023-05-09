import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ShowChocolates = ({ chocolate, loadedChocolates, setChocolates }) => {
  const { photo, _id, name, quality, country } = chocolate;

  const handleDeleteChocolate = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/chocolates/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                const remaining = loadedChocolates.filter(
                  (choco) => choco._id !== id
                );
                setChocolates(remaining);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your Chocolate is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <div className="grid grid-cols-6 items-center py-8">
        <img src={photo} className="w-[70px] ml-8 h-[70px] rounded-lg" alt="" />
        <p className="col-span-2 pl-16">{name}</p>
        <p className="pl-3">{country}</p>
        <p className="text-center">{quality}</p>
        <div className="text-center flex justify-evenly">
          <Link to={`/editChocolate/${_id}`}>
            <button
              className="text-2xl text-white py-1 px-2 rounded"
              title="Update"
              style={{
                background:
                  "radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)",
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteChocolate(_id)}
            className="text-2xl text-white py-1 px-3 rounded"
            title="Delete"
            style={{
              background:
                "radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)",
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
      <hr style={{ border: "1px solid rgba(20, 20, 20, 0.1)" }} />
    </div>
  );
};

export default ShowChocolates;
