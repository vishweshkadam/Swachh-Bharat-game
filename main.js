function adduser() {
    var usernames = document.getElementById("user_name").value;
    localStorage.setItem("user name", usernames);
    window.location = "Swachh_Bharat.html"
}