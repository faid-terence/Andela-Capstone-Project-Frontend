const form = document.getElementById("create-blog-form");


// add event listerner to the form

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // grab values in our inputs
    const icon = document.getElementById("icon").value;
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    // Have my values under same object
    const data = {icon, title, body};

    // Interaction with My API endpoints
    fetch( 'https://lazy-jade-barnacle-suit.cyclic.app/api/v1/blogs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        return response.json()
        
    })
    .then((data) => {
        alert(data.message)
        location.replace('AllBlogs.html')

    })
    .catch(error => alert(error))

});