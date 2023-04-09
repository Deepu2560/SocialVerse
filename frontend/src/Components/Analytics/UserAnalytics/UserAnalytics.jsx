import PieChartAnalytics from "../PieChartAnalytic/PieChartAnalytics";
import UserTopActive from "../TopList/UserTopActive";

export default function UserAnalytics() {
  return (
    <div>
      <p className="h2 text-center text-decoration-underline text-success mb-3">
        User Analytics
      </p>
      <div className="container-sm">
        <div className="row gap-3">
          <div className="col-3">
            <p className="h5 text-left"> Total users/posts:</p>
            <PieChartAnalytics />
            <p className="h5 text-left"> Likes:</p>
            <PieChartAnalytics />
          </div>
          <div className="col">
            <p className="h2"> Total number of users: 12</p>
            <p className="h4"> Top 5 most active users:</p>
            <UserTopActive data={[2, 3, 4, 5, 6]} />
          </div>
        </div>
      </div>
    </div>
  );
}
