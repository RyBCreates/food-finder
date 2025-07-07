import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import "./ProfileSettings.css";

function ProfileSettings() {
  const { currentUser, updateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setImageUrl(currentUser.avatar);
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return updateUser({ name, avatar: imageUrl })
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label className="profile-settings__label">
          Avatar Image Url
          <input
            className="profile-settings__input"
            type="Url"
            placeholder="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
        </label>
        <button className="profile-settings__submit-button" type="submit">
          SAVE
        </button>
      </form>
    </section>
  );
}

export default ProfileSettings;
