import { useDispatch, useSelector } from "react-redux";
import PieChartAnalytics from "../ChartAnalytics/PieChartAnalytics";
import UserTopActive from "../TopList/UserTopActive";
import { useEffect } from "react";
import { handleAllAnalytics } from "../../../Redux/Analytics/analytics.action";
import BarChartAnalytics from "../ChartAnalytics/BarCharAnalytics";

export default function UserAnalytics() {
  const { userTop, userTotal } = useSelector((state) => state.analytics);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userTop || (!userTotal && isAuth)) {
      dispatch(handleAllAnalytics(dispatch));
    }
  }, []);

  return isAuth ? (
    <div>
      <p className="h2 text-center text-decoration-underline text-success mb-3">
        User Analytics
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
              <p className="h1">{userTotal}</p>
            </div>
            <div className="col">
              <p className="h4"> Top 5 most active users:</p>
              <UserTopActive data={userTop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <p className="h1">Login To get user analytics...</p>
    </div>
  );
}
