import "./AuthButtons.css";

function AuthButtons() {
  return (
    <div className="auth">
      <button className="auth__button auth__login-button" type="button">
        LOG IN
      </button>
      <button className="auth__button auth__register-button" type="button">
        CREATE AN ACCOUNT
      </button>
    </div>
  );
}

export default AuthButtons;
