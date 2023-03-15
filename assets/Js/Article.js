const blogTable = document.getElementById("blog-table");
console.log(blogTable)

//Intreacting with our get blogs end point

fetch('http://localhost:4000/api/v1/blogs')
.then((response) => response.json())
.then((blogs) => {
    console.log(blogs)
    blogs.data.forEach(blog => {
       const row = document.createElement("tr");
       const iconCell = document.createElement("td");
       const titleCell = document.createElement("td");
       const bodyCell = document.createElement("td");
       const actionsCell = document.createElement("td");


       const deleteButton = document.createElement("button");
       const updateButton = document.createElement("button");

       // assign values to the cells

       
       titleCell.textContent = blog.title;
       bodyCell.textContent= blog.body;
       deleteButton.textContent = "DELETE";
       updateButton.textContent = "UPDATE"

       actionsCell.appendChild(deleteButton)
       actionsCell.appendChild(updateButton)


       // append rows
       row.appendChild(titleCell)
       row.appendChild(bodyCell)
       row.appendChild(actionsCell)

       // apendy table body

       blogTable.querySelector("tbody").appendChild(row)


       deleteButton.addEventListener("click", () => {
        deleteBlog(blog._id)
       })
    });
})
.catch(err => alert(err))


function deleteBlog(blogId)  {
    fetch(`http://localhost:4000/api/v1/blogs`,
    {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then((data) => {
        // functionalities of delete
        console.log(data)
        location.reload();

    })
    .catch((err) => {
        alert(err)
    });

}