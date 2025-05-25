const form = document.getElementById("loginform");

  form.onsubmit = function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
      alert("Please fill in both fields.");
    } else {
      alert("Login Successful!");
      form.reset(); // clears all input fields
    }
  };
