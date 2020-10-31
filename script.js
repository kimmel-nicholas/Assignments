function passwordLength() {
  var pw = document.getElementById('password').value;
  if (pw.length <= "7") {
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}