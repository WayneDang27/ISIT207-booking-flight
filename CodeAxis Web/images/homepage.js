window.onload = function() {
    document.getElementById("submitloginbutton").addEventListener("click", function() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === "admin" && password === "admin") {
        window.location.href = "loggedinpage.html";
      } else {
        alert("Invalid username or password!");
      }
    });
  };