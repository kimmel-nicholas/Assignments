function passwordLength() {
  var pw = document.getElementById('password').value;
  if (pw.length <= "7") {
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}