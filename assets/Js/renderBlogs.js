const blogTable = document.getElementById("blog-table");
console.log(blogTable)

//Intreacting with our get blogs end point

fetch('http://localhost:4000/api/v1/blogs')

.then((response) => response.json())
.then((blogs) => {
    blogs.data.forEach(blog => {
        blogTable.innerHTML += `
        <tr> 
        <td>${blog.title}</td>
        <td>${blog.body.slice(0, 200)}</td>
        <td>
        <button onClick="deleteBlog(${blog._id})" id="delete">DELETE</button>
        <button type="click" class="btnII">UPDATE</button>
        </td>
        </tr>
        
        `
    })
})
.catch(err => alert(err))




