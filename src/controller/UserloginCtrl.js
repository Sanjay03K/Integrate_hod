import axios from "axios";

export default function handleLogin() {
  const loginButton = document.getElementById("login_btn");
  loginButton.disabled = true;
  loginButton.innerHTML = `<div class="spinner-border text-primary p-2 spinner-border-sm" role="status" aria-hidden="true"><span class="visually-hidden">Loading...</span></div>`;

  let params = new URLSearchParams();
  params.append("email", document.getElementById("emailId").value);
  params.append("password", document.getElementById("password").value);

  axios.post("http://localhost:5000/userlogin", params).then((result) => {
    if (result.data === "user-fail") {
      //    document.getElementById("pass-fail").classList.add("d-none");
      //    document.getElementById("email-fail").classList.remove("d-none");
      //    document.getElementById("server-fail").classList.add("d-none");
      localStorage.setItem("auth_token", -1);
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;
    } else if (result.data === "pass-fail") {
      console.log("Incorrect password");
      //    document.getElementById("pass-fail").classList.remove("d-none");
      //    document.getElementById("email-fail").classList.add("d-none");
      //    document.getElementById("server-fail").classList.add("d-none");
      localStorage.setItem("auth_token", -1);
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;
    } else if (result.data === "server-down") {
      localStorage.setItem("auth_token", -1);
      //    document.getElementById("pass-fail").classList.add("d-none");
      //    document.getElementById("email-fail").classList.add("d-none");
      //    document.getElementById("server-fail").classList.remove("d-none");
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;
    } else {
      //    document.getElementById("pass-fail").classList.add("d-none");
      //    document.getElementById("email-fail").classList.add("d-none");
      //    document.getElementById("server-fail").classList.add("d-none");
      console.log("Logged In");
      var check = result.data[0];
      console.log(check);
      if (check.user_type == 2) {
        localStorage.setItem("dept", check.dept);
        window.location.href = "http://localhost:3000/HoD#/admin/dashboard";
      } else if (check.user_type == 1) {
        localStorage.setItem("batch", check.batch);
        localStorage.setItem("dept", check.dept);
        window.location.href =
          "http://localhost:3000/purity-ui-dashboard#/admin2/dashboard";
      } else if (check.user_type == 0) {
        if (check.roll_no == null) {
          window.location.href =
            "http://localhost:3000/purity-ui-dashboard#/auth/GeneralInformationdata";
        } else {
          localStorage.setItem("StudentRoll", check.roll_no);
          window.location.href =
            "http://localhost:3000/purity-ui-dashboard#/admin/dashboard";
        }
      }
      localStorage.setItem("useremail", result.data[0].email);
      localStorage.setItem("auth_token", result.data[0].auth_token);
      localStorage.setItem("user_name", result.data[0].user_name);
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;
    }
  });
  /*    .catch((err) => {
      document.getElementById("pass-fail").classList.add("d-none");
      document.getElementById("email-fail").classList.add("d-none");
      document.getElementById("server-fail").classList.remove("d-none");
    }); */
}
