onload = function () {
  const regForm = document.forms["RegForm"];
  const username = document.forms["RegForm"]["username"];
  const password = document.forms["RegForm"]["password"];
  const email = document.forms["RegForm"]["email"];
  const confPass = document.forms["RegForm"]["conf-password"];
  const phone = document.forms["RegForm"]["phone"];
  let isValid = true;
  regForm.onsubmit = function () {
    let usernameVal = username.value;
    let passwordValue = password.value;
    let confPassValue = confPass.value;
    let phoneValue = phone.value;
    let emailValue = email.value;

    if (!checkRequired(usernameVal)) {
      checkRequiredStyle(username, "#username-error", "fullname isn't valid..");

      isValid = false;
    }
    if (!checkEmail(emailValue)) {
      checkRequiredStyle(email, "#email-error", "email isn't valid..");
      isValid = false;
    }
    if (!checkPhone(phoneValue)) {
      checkRequiredStyle(phone, "#phone-error", "phone isn't valid..");

      isValid = false;
    }
    if (!checkPassword(passwordValue)) {
      checkRequiredStyle(password, "#password-error", "password isn't valid..");
      isValid = false;
    }
    if (!checkRequired(confPassValue)) {
      checkRequiredStyle(
        confPass,
        "#confPass-error",
        "confirm password is requried..",
      );

      isValid = false;
    }
    if (passwordValue != confPassValue) {
      checkRequiredStyle(
        confPass,
        "#confPass-error",
        "Passwoed doesn't match..",
      );

      isValid = false;
    }

    return isValid;
  };
};

//
