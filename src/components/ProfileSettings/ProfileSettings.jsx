import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import "./ProfileSettings.css";

function ProfileSettings() {
  const { currentUser, updateUser, handleLogout } =
    useContext(CurrentUserContext);

  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setUsername(currentUser?.username || "New User");
    setImageUrl(currentUser?.avatar || "");
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return updateUser({ username, avatar: imageUrl })
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <section className="profile-settings">
      <h2 className="profile-settings__title">UPDATE USER INFO</h2>
      <form className="profile-settings__form" onSubmit={handleSubmit}>
        <label className="profile-settings__label">
          Username
          <input
            className="profile-settings__input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label className="profile-settings__label">
          Avatar Image Url
          <input
            className="profile-settings__input"
            type="url"
            placeholder="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
        </label>
        <button
          className="profile-settings__submit-button"
          type="submit"
          disabled={
            username === currentUser?.username &&
            imageUrl === currentUser?.avatar
          }
        >
          SAVE
        </button>
      </form>
      <button
        className="profile-settings__logout-button"
        onClick={() => {
          handleLogout();
        }}
      >
        Log Out
      </button>
    </section>
  );
}

export default ProfileSettings;
