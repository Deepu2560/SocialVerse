export default function CreatePost() {
  return (
    <div className="pt-4 text-right">
      <p className="h5 text-left text-uppercase">Create a new post:</p>
      <textarea
        className="form-control focus-ring focus-ring-success bg-dark text-decoration-none border rounded-2"
        id="newposttextarea"
        rows="3"
        placeholder="Start a post"
      ></textarea>
      <button className="newpostbutton btn btn btn-outline-success mt-3">
        post your content
      </button>
    </div>
  );
}
