export default function UserLists() {
  return (
    <div className="container">
      <p className="h2">List of all users:</p>
      <div className="table-responsive">
        <table class="table">
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-pencil-square"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-trash"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-pencil-square"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-trash"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-pencil-square"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-trash"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
