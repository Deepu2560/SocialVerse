import { useSelector, useDispatch } from "react-redux";
import { handlePostsData } from "../../Redux/Posts/post.action";
import "./Feed.css";
import PostCard from "./PostCard/PostCard";
import UserDetails from "./Userdetails/UserDetails";
import { useEffect } from "react";

export default function Feeds() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(handlePostsData(dispatch, "all"));
  }, []);

  return (
    <div className="container-xxl text-center">
      <div className="row">
        <UserDetails />
        {posts ? (
          <div className="col posts-feed-div">
            {posts.map((elem, idx) => (
              <PostCard data={elem} key={idx} />
            ))}
          </div>
        ) : (
          <div className="col posts-feed-div pt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="h2">fetching posts</p>
          </div>
        )}
      </div>
    </div>
  );
}
