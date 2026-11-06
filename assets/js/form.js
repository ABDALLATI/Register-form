// onload = function () {
//   const regForm = document.forms["RegForm"];
//   const username = document.forms["RegForm"]["username"];
//   const password = document.forms["RegForm"]["password"];
//   const email = document.forms["RegForm"]["email"];
//   const confPass = document.forms["RegForm"]["conf-password"];
//   const phone = document.forms["RegForm"]["phone"];
//   let isValid = true;
//   regForm.onsubmit = function () {
//     let usernameVal = username.value;
//     let passwordValue = password.value;
//     let confPassValue = confPass.value;
//     let phoneValue = phone.value;
//     let emailValue = email.value;

//     if (!checkRequired(usernameVal)) {
//       checkRequiredStyle(username, "#username-error", "fullname isn't valid..");

//       isValid = false;
//     }
//     if (!checkEmail(emailValue)) {
//       checkRequiredStyle(email, "#email-error", "email isn't valid..");
//       isValid = false;
//     }
//     if (!checkPhone(phoneValue)) {
//       checkRequiredStyle(phone, "#phone-error", "phone isn't valid..");

//       isValid = false;
//     }
//     if (!checkPassword(passwordValue)) {
//       checkRequiredStyle(password, "#password-error", "password isn't valid..");
//       isValid = false;
//     }
//     if (!checkRequired(confPassValue)) {
//       checkRequiredStyle(
//         confPass,
//         "#confPass-error",
//         "confirm password is requried..",
//       );

//       isValid = false;
//     }
//     if (passwordValue != confPassValue) {
//       checkRequiredStyle(
//         confPass,
//         "#confPass-error",
//         "Passwoed doesn't match..",
//       );

//       isValid = false;
//     }

//     return isValid;
//   };
// };

//
window.onload = function () {
  const regForm = document.forms["RegForm"];
  const username = regForm["username"];
  const password = regForm["password"];
  const email = regForm["email"];
  const confPass = regForm["conf-password"];
  const phone = regForm["phone"];

  // دالة بتشيل الرسالة واللون لما المستخدم يبدأ يكتب
  function clearError(input, spanId) {
    input.style.borderColor = "#ccc"; // اللون الافتراضي
    document.querySelector(spanId).innerText = "";
  }

  // ضيف استماع لكل input إنه يمسح الرسالة أول ما يكتب
  const fields = [
    { input: username, span: "#username-error" },
    { input: email, span: "#email-error" },
    { input: phone, span: "#phone-error" },
    { input: password, span: "#password-error" },
    { input: confPass, span: "#confPass-error" },
  ];

  fields.forEach(field => {
    field.input.addEventListener("input", () => clearError(field.input, field.span));
  });

  regForm.onsubmit = function (e) {
    let isValid = true;

    // Name validation (بتشيك إنه مش فاضي + إنه مكتوب صح)
    if (!checkRequired(username.value) || !checkFullname(username.value)) {
      checkRequiredStyle(username, "#username-error", "Please enter a valid full name (e.g. Ali Ahmed).");
      isValid = false;
    }

    // Email
    if (!checkEmail(email.value)) {
      checkRequiredStyle(email, "#email-error", "Please enter a valid email address.");
      isValid = false;
    }

    // Phone
    if (!checkPhone(phone.value)) {
      checkRequiredStyle(phone, "#phone-error", "Please enter a valid Egyptian phone number (11 digits).");
      isValid = false;
    }

    // Password
    if (!checkPassword(password.value)) {
      checkRequiredStyle(password, "#password-error", "Password must be 5-9 characters (letters & numbers).");
      isValid = false;
    }

    // Confirm Password
    if (confPass.value === "") {
      checkRequiredStyle(confPass, "#confPass-error", "Please confirm your password.");
      isValid = false;
    } else if (password.value !== confPass.value) {
      checkRequiredStyle(confPass, "#confPass-error", "Passwords do not match.");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // يمنع الفورم إنها تتبعت لو فيه أخطاء
    }
    return isValid;
  };
};