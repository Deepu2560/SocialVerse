export default function PostTopLiked({ data }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="table-success">
          <tr>
            <th scope="col">id</th>
            <th scope="col">content</th>
            <th scope="col">likes</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {data.map((elem, idx) => (
            <tr key={idx}>
              <th>{elem._id}</th>
              <td>{elem.content}</td>
              <td>{elem.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
