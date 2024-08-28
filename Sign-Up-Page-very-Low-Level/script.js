const button = document.getElementById("form-submit-button");
const username = document.getElementById("username");
const password = document.getElementById("password");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const user_name = username.value.trim();
  const user_password = password.value.trim();
  if (user_name === "" || user_password === "") {
    alert("Invalid Input! Please Enter Valid Input");
    return;
  }
  else {
    localStorage.setItem(user_name, user_password);
  }
  console.log("Username: ", user_name, "Password: ", localStorage.getItem(user_name));
  username.value = "";
  password.value ="";
})