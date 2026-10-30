function checkRequired(value) {
  if (value != "") {
    return true;
  }
}
/* fullname validation */
function checkFullname(value) {
  let fullnamePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/; //Ali Ahmed
  return fullnamePattern.test(value);
}
/* email validation */
function checkEmail(value) {
  let emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(value);
}
function checkPhone(value) {
  let phonePattern = /^(010|011|012|015)[0-9]{8}$/;
  return phonePattern.test(value);
}
function checkPassword(value) {
  let passwordPattern = /^[a-zA-Z0-9]{5,9}$/;
  return passwordPattern.test(value);
}
function checkconfpass(value) {
  let confPassPattern = /^[a-zA-Z0-9]{5,9}$/;
  return confPassPattern.test(value);
}

function checkRequiredStyle(input, spanId, message) {
  input.style.borderColor = "red";
  document.querySelector(spanId).innerText = message;
}
