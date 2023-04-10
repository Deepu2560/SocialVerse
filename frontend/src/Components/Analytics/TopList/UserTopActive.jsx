export default function UserTopActive({ data }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="table-success">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Posts count</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {data.map((elem, idx) => (
            <tr key={idx}>
              <th>{elem.name}</th>
              <td>{elem.email}</td>
              <td>{elem.postCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
