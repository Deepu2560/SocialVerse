import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleAllAnalytics } from "../../../Redux/Analytics/analytics.action";
import PieChartAnalytics from "../ChartAnalytics/PieChartAnalytics";
import PostTopLiked from "../TopList/PostTopLiked";
import BarChartAnalytics from "../ChartAnalytics/BarCharAnalytics";

export default function PostAnalytics() {
  const { postTop, postTotal } = useSelector((state) => state.analytics);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postTop || (!postTotal && isAuth)) {
      dispatch(handleAllAnalytics(dispatch));
    }
  }, []);

  return isAuth ? (
    <div>
      <p className="h2 text-center text-decoration-underline text-success mb-3">
        Posts Analytics
      </p>
      <div className="container-sm">
        <div>
          <div className="row">
            <div className="col">
              <p className="h5 text-left"> Total users/posts:</p>
              <PieChartAnalytics />
            </div>
            <div className="col">
              <p className="h5 text-left"> Top liked posts:</p>
              <BarChartAnalytics />
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col-2 bg-success rounded-5 text-center p-3"
              style={{
                width: "100px",
                height: "fit-content",
              }}
            >
              <p className="h5"> Total number of users:</p>
              <p className="h1">{postTotal}</p>
            </div>
            <div className="col">
              <p className="h4"> Top 5 most active users:</p>
              <PostTopLiked data={postTop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <p className="h1">Login to get posts analytics</p>
    </div>
  );
}
