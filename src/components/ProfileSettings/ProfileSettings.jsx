import "./ProfileSettings.css";

function ProfileSettings() {
  return (
    <section className="profile-settings">
      <h2 className="profile-settings__title">UPDATE USER INFO</h2>
      <form className="profile-settings__form">
        <label className="profile-settings__label">
          Username
          <input
            className="profile-settings__input"
            type="text"
            placeholder="Username"
          ></input>
        </label>
        <label className="profile-settings__label">
          Avatar Image Url
          <input
            className="profile-settings__input"
            type="Url"
            placeholder="Image Url"
          ></input>
        </label>
        <button className="profile-settings__submit-button" type="button">
          SAVE
        </button>
      </form>
    </section>
  );
}

export default ProfileSettings;
