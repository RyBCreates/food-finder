import "./AuthButtons.css";

function AuthButtons({ handleRegisterClick, handleLoginClick }) {
  return (
    <div className="auth">
      <button
        className="auth__button auth__login-button"
        type="button"
        onClick={() => {
          handleLoginClick();
        }}
      >
        LOG IN
      </button>
      <button
        className="auth__button auth__register-button"
        type="button"
        onClick={() => {
          handleRegisterClick();
        }}
      >
        CREATE AN ACCOUNT
      </button>
    </div>
  );
}

export default AuthButtons;
