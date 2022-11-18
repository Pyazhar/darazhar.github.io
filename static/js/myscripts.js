let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let flag = 1;
let patternE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let patternP = /^[0]?[6789]\d{9}$/;

function validateForm() {
  //name validations
  if (name.value == "") {
    document.getElementById("nameError").innerHTML = "*Please enter your name";
    document.getElementById("lname").scrollIntoView({ behavior: "smooth" });
    name.style.border = "2px solid";
    name.style.borderColor = "red";
    flag = 0;
  } else if (name.value.length < 3) {
    document.getElementById("nameError").innerHTML = "*Name is too short";
    document.getElementById("lname").scrollIntoView({ behavior: "smooth" });
    name.style.border = "2px solid";
    name.style.borderColor = "red";
    flag = 0;
  } else {
    document.getElementById("nameError").innerHTML = "";
    name.style.border = "3px solid";
    name.style.borderColor = "white";
    flag = 1;
  }

  //email validations

  if (email.value == "") {
    document.getElementById("emailError").innerHTML =
      "*Please enter your  email";
    document.getElementById("Ename").scrollIntoView({ behavior: "smooth" });
    email.style.border = "2px solid";
    email.style.borderColor = "red";
    flag = 0;
  } else if (!patternE.test(email.value)) {
    document.getElementById("emailError").innerHTML =
      "*Please enter a valid email";
    document.getElementById("Ename").scrollIntoView({ behavior: "smooth" });
    email.style.border = "2px solid";
    email.style.borderColor = "red";
    flag = 0;
  } else {
    document.getElementById("emailError").innerHTML = "";
    email.style.border = "3px solid";
    email.style.borderColor = "white";
    flag = 1;
  }

  //Phone validations
  if (phone.value == "") {
    document.getElementById("phoneError").innerHTML =
      "*Please enter your phone number";
    document.getElementById("Pname").scrollIntoView({ behavior: "smooth" });
    phone.style.border = "2px solid";
    phone.style.borderColor = "red";
    flag = 0;
  } else if (!patternP.test(phone.value)) {
    document.getElementById("phoneError").innerHTML =
      "*Please enter a valid 10 digit mobile number";
    document.getElementById("Pname").scrollIntoView({ behavior: "smooth" });
    phone.style.border = "2px solid";
    phone.style.borderColor = "red";
    flag = 0;
  } else {
    document.getElementById("phoneError").innerHTML = "";
    phone.style.border = "3px solid";
    phone.style.borderColor = "white";
    flag = 1;
  }

  // message validations
  if (message.value == "") {
    document.getElementById("messageError").innerHTML =
      "*Please enter your message ";
    document.getElementById("Mname").scrollIntoView({ behavior: "smooth" });
    message.style.border = "2px solid";
    message.style.borderColor = "red";
    flag = 0;
  }
  else {
    document.getElementById("messageError").innerHTML = "";
    message.style.border = "3px solid";
    message.style.borderColor = "white";
    flag = 1;
  }


  if (flag) {
      return true && alert("your message has been recieved.")
        
    } else {
    return false;
  }
}
