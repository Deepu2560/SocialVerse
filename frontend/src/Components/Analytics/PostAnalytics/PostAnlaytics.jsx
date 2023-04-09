import PieChartAnalytics from "../PieChartAnalytic/PieChartAnalytics";
import PostTopLiked from "../TopList/PostTopLiked";

export function PostAnalytics() {
  return (
    <div>
      <p className="h2 text-center text-decoration-underline text-success mb-3">
        Posts Analytics
      </p>
      <div className="container-xxl">
        <div className="row gap-3">
          <div className="col-3">
            <p className="h5 text-left"> Total users/posts:</p>
            <PieChartAnalytics />
            <p className="h5 text-left"> Top liked posts:</p>
            <PieChartAnalytics />
          </div>
          <div className="col">
            <p className="h2"> Total number of users: 12</p>
            <p className="h4"> Top 5 most active users:</p>
            <PostTopLiked data={[2, 3, 4, 5, 6]} />
          </div>
        </div>
      </div>
    </div>
  );
}
