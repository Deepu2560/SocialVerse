import CreatePost from "../CreatePost/CreatePost";
import { useSelector } from "react-redux";

export default function UserDetails() {
  const { isAuth, user } = useSelector((state) => state.auth);
  return isAuth ? (
    <div className="sticky-top col-sm-3 pt-3 pb-3 shadow-lg border border-secondary-subtle user-details rounded-3">
      <img
        src="/Images/user.jpg"
        className="img-thumbnail rounded-circle mx-auto d-block user-image"
        width="150"
        alt="User avataar"
      />
      <p className="h4 mt-2">{user.name}</p>
      {user.bio ? <p className="user-bio-text">{user.bio}</p> : null}
      <CreatePost />
    </div>
  ) : (
    <div className="sticky-top col-sm-3 pt-3 pb-3 shadow-lg border border-secondary-subtle user-details rounded-3">
      <p className="h4 mt-2">Login to create new post</p>
      <CreatePost />
    </div>
  );
}
