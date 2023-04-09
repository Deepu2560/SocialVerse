export default function UserTopActive({ data }) {
  return (
    <div className="table-responsive">
      <table class="table">
        <thead className="table-success">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">bio</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {data.map((elem) => (
            <tr>
              <th>Deepanshu Gulia</th>
              <td>deep@gmail.com</td>
              <td>
                asdfasdfasdf asdfasdf aasdf asdfasdf asdfasdf asdfasdf asdfasdf
                asdf asfd asdf{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
