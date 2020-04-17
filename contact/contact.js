// Validating Empty Field
function check_empty() {
  if (
    document.getElementById("fname").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("subject").value == ""
  ) {
    alert("Fill All Fields !");
  } else {
    document.getElementById("submit").submit();
    alert("Form Submitted Successfully...");
  }
}

//Function To Display Popup
function showContact() {
  document.getElementById("contact-container").style.display = "block";
}
//Function to Hide Popup
function hideContact() {
  document.getElementById("contact-container").style.display = "none";
}
