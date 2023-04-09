import "./Feed.css";
import PostCard from "./PostCard/PostCard";
import UserDetails from "./Userdetails/UserDetails";

export default function Feeds() {
  return (
    <div className="container-xxl d-flex gap-4 text-center mt-5 pt-3">
      <div className="col posts-feed-div">
        {[1, 2, 3].map(() => (
          <PostCard />
        ))}
      </div>
      <UserDetails />
    </div>
  );
}
