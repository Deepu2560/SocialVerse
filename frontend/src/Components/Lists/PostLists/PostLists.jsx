export default function PostLists() {
  return (
    <div className="container">
      <p className="h2">List of all posts:</p>
      <div className="table-responsive">
        <table class="table">
          <thead className="table-success">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Content</th>
              <th scope="col">Likes Number</th>
              <th scope="col">Like</th>
              <th scope="col">Unlike</th>
              <th scope="col">View</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-dark">
            <tr>
              <th scope="row">1asdfasdfasfasdfasdf</th>
              <td>
                Hello world ok aker aonasdf aoaeranfd asdfoasdnfas
                fdasdfasdfasdf afasdfasfd asdfasfasdfasfda sf afasfasdfasdf
                afdasdfasf
              </td>
              <th>1</th>
              <td>
                <i
                  class="bi bi-heart"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-heartbreak"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-card-heading"
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
              <th scope="row">1asdfasdfasfasdfasdf</th>
              <td>
                Hello world ok aker aonasdf aoaeranfd asdfoasdnfas
                fdasdfasdfasdf afasdfasfd asdfasfasdfasfda sf afasfasdfasdf
                afdasdfasf
              </td>
              <th>1</th>
              <td>
                <i
                  class="bi bi-heart"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-heartbreak"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
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
              <th scope="row">1asdfasdfasfasdfasdf</th>
              <td>
                Hello world ok aker aonasdf aoaeranfd asdfoasdnfas
                fdasdfasdfasdf afasdfasfd asdfasfasdfasfda sf afasfasdfasdf
                afdasdfasf
              </td>
              <th>1</th>
              <td>
                <i
                  class="bi bi-heart"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  class="bi bi-heartbreak"
                  style={{ fontSize: "1.5rem", cursor: "pointer" }}
                ></i>
              </td>
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
