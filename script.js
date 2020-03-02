function validateEmail() {
  let email = document.getElementById("inputText");
  let error = document.getElementById("errorText");
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email.value) == false) {
    error.innerHTML = "Please provide a valid email address";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    error.style.color = "hsl(354, 100%, 66%)";
  } else {
    error.innerHTML = "We will notify you!";
    email.style.borderColor = "hsl(136, 55%, 53%)";
    error.style.color = "hsl(136, 55%, 53%)";
  }
}
