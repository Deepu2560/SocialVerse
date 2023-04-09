export default function PostTopLiked({ data }) {
  return (
    <div className="table-responsive">
      <table class="table">
        <thead className="table-success">
          <tr>
            <th scope="col">id</th>
            <th scope="col">content</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {data.map((elem) => (
            <tr>
              <th>23asasidnr42</th>
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
