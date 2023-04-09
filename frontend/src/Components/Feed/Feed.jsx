import "./Feed.css";
import PostCard from "./PostCard/PostCard";
import UserDetails from "./Userdetails/UserDetails";

export default function Feeds() {
  return (
    <div className="container-xxl text-center mt-5 pt-3">
      <div className="row">
        <UserDetails />
        <div className="col posts-feed-div">
          {[1, 2, 3, 3, 3, 4, 5, 5, 34, 2, 2, 2].map(() => (
            <PostCard />
          ))}
        </div>
      </div>
    </div>
  );
}
