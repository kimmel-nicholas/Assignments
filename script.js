function passwordLength() {
  var pw = document.getElementById('password').value;
  if (pw.length <= "7") {
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}
function hamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}