import { useSelector, useDispatch } from "react-redux";
import {
  handlePostLike,
  handlePostUnLike,
} from "../../../Redux/Posts/post.action";
import { useNavigate } from "react-router";

export default function PostLists() {
  const { posts } = useSelector((state) => state.posts);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="h2">List of all posts:</p>
      <div className="table-responsive">
        <table className="table">
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
            {posts.length ? (
              posts.map((elem) => (
                <tr key={elem._id}>
                  <th scope="row">{elem._id}</th>
                  <td>{elem.content}</td>
                  <th>{elem.likes}</th>
                  {isAuth ? (
                    <>
                      <td>
                        <i
                          className="bi bi-heart"
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() =>
                            dispatch(handlePostLike(dispatch, elem._id))
                          }
                        ></i>
                      </td>
                      <td>
                        <i
                          className="bi bi-heartbreak"
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() =>
                            dispatch(handlePostUnLike(dispatch, elem._id))
                          }
                        ></i>
                      </td>
                      <td>
                        <i
                          className="bi bi-card-heading"
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() => navigate(`/post/${elem._id}`)}
                        ></i>
                      </td>
                      <td>
                        <i
                          className="bi bi-pencil-square"
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() => navigate(`/post/${elem._id}`)}
                        ></i>
                      </td>
                      <td>
                        <i
                          className="bi bi-trash"
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                          onClick={() => navigate(`/post/${elem._id}`)}
                        ></i>
                      </td>
                    </>
                  ) : (
                    <th className="text-center" colSpan={5}>
                      Login to make changes
                    </th>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <th colSpan={8} className="text-center">
                  Fetching posts...
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
