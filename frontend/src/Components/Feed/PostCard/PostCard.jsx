import { useState } from "react";
import "./PostCard.css";

export default function PostCard({ data }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="text-left border border-success mt-3 mb-3 p-3 rounded-3">
      <pre className="font-weight-bold border mx-auto text-left p-3 rounded-3 post-content-div">
        Hello world, <br />
        My name is Deepanshu Gulia.
      </pre>
      <div className="d-flex gap-1">
        {!liked ? (
          <button
            className="btn btn-outline-success ml-3"
            onClick={() => setLiked(() => true)}
          >
            like
          </button>
        ) : (
          <button
            className="btn btn-outline-danger ml-3"
            onClick={() => setLiked(() => false)}
          >
            unlike
          </button>
        )}
        <button className="btn btn-outline-secondary ml-2">edit</button>
      </div>
    </div>
  );
}
