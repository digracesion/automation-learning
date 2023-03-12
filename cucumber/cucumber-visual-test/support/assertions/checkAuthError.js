import login from "../../pages/Login.Page";
import assert from "assert";

export default errorMessage => {
  const authErrorMessage = login.errorMessage;

  assert(
    authErrorMessage.getText().includes(errorMessage),
    `Error message, ${authErrorMessage.getText()} did not match ${errorMessage}`
  );
};