import CreatePost from "../CreatePost/CreatePost";

export default function UserDetails() {
  return (
    <div className="sticky-top col-3 p-3 shadow-lg border border-secondary-subtle user-details rounded-3">
      <img
        src="/Images/user.jpg"
        className="img-thumbnail rounded-circle mx-auto d-block user-image"
        width="150"
        alt="User avataar"
      />
      <p className="h4">Deepanshu Gulia</p>
      <p className="h6 user-bio-text mx-auto w-75">
        hello world, My name is deepanshu gulia. This project is made by me
      </p>
      <CreatePost />
    </div>
  );
}
