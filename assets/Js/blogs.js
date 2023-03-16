const clientBlog = document.getElementById("CLIENT");
console.log(clientBlog)

// interacting with our get blogs endpoint

fetch('http://localhost:4000/api/v1/blogs')
.then((response) => response.json())
.then((blogs) => {
    console.log(blogs)
    blogs.data.forEach(blog => {

        clientBlog.innerHTML += `
        <div class="card padd-15">
        <i class="${blog.icon}"></i>
        <h5>${blog.title}</h5>
        <p>${blog.body.slice(0,200)}</p>
        <p style="text-align: center;">
        <a class="button" href="">Read More</a></p>
    </div>

        `
    })
})
