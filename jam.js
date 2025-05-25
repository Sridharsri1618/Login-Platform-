const registerBtn = document.getElementById("registerBtn");

  registerBtn.onclick = function () {
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!fullname.value || !email.value || !password.value) {
      alert("Please fill in all fields.");
    } else {
      alert("Registered Successfully!");
      fullname.value = "";
      email.value = "";
      password.value = "";
    }
  };
