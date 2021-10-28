import axios from "axios";

export default function change_pass() {
  document.getElementById("pass-fail").style.display = "none";
  document.getElementById("pass-mis").style.display = "none";
  document.getElementById("server-fail").style.display = "none";
  document.getElementById("pass-success").style.display = "none";
  const pcbtn = document.getElementById("pass-button");
  pcbtn.disabled = true;
  pcbtn.innerHTML = `<div class="spinner-border text-primary p-2 spinner-border-sm" role="status" aria-hidden="true"><span class="visually-hidden">Loading...</span></div>`;

  var oldPass = document.getElementById("old-pass").value;
  var newPass = document.getElementById("new-pass").value;
  var rePass = document.getElementById("re-pass").value;

  if (oldPass === rePass) {
    let params = new URLSearchParams();
    params.append("new-pass", newPass);
    params.append("old-pass", oldPass);
    params.append("email", localStorage.email);
    params.append("auth_token", localStorage.auth_token);

    axios.post("http://localhost:5000/passchange", params).then((result) => {
      if (result.data === "pass-fail") {
        document.getElementById("pass-fail").style.display = "block";
        document.getElementById("pass-mis").style.display = "none";
        document.getElementById("server-fail").style.display = "none";
        document.getElementById("pass-success").style.display = "none";
        pcbtn.disabled = false;
        pcbtn.innerHTML = `Change Password`;
      } else if (result.data === "server-fail") {
        document.getElementById("pass-fail").style.display = "none";
        document.getElementById("pass-mis").style.display = "none";
        document.getElementById("server-fail").style.display = "block";
        document.getElementById("pass-success").style.display = "none";
        pcbtn.disabled = false;
        pcbtn.innerHTML = `Change Password`;
      } else {
        document.getElementById("pass-fail").style.display = "none";
        document.getElementById("pass-mis").style.display = "none";
        document.getElementById("server-fail").style.display = "none";
        document.getElementById("pass-success").style.display = "block";
      }
    });
  } else {
    document.getElementById("pass-fail").style.display = "none";
    document.getElementById("pass-mis").style.display = "none";
    document.getElementById("server-fail").style.display = "none";
    document.getElementById("pass-success").style.display = "none";
    pcbtn.disabled = false;
    pcbtn.innerHTML = `Change Password`;
  }
}
