import { useSelector } from "react-redux";

export default function UserLists() {
  const { all } = useSelector((state) => state.auth);
  console.log(all);
  return (
    <div className="container">
      <p className="h2">List of all users:</p>
      <div className="table-responsive">
        <table className="table">
          <thead className="table-success">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">View</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-dark">
            {all ? (
              all.map((elem) => (
                <tr key={elem._id}>
                  <th scope="row">{elem._id}</th>
                  <td>{elem.name}</td>
                  <td>{elem.email}</td>
                  <td>
                    <i
                      className="bi bi-person-circle"
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-pencil-square"
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-trash"
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={6} className="text-center">
                  Login to get all user's data
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
