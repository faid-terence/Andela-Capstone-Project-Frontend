const form = document.getElementById("login-form");

// add event listeners

form.addEventListener("submit", (e) => {
    e.preventDefault();


      // Grab values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const data = {email, password};


    // use fetch method to interact with your login api endpoint 

    fetch('http://localhost:4000/api/v1/login', 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.token) {
            // set our token to LS
            localStorage.setItem("authToken", data.token);
            location.href = "/AdminPanel.html"
        }
        else{
            alert(data.message)
        }
    })
    .catch(error => alert(error))

  
})


