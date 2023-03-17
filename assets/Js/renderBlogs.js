let articleid = "";
const blogTable = document.getElementById("blog-table");
    

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
        <button onClick="deleteBlog('${blog._id}')">DELETE</button>
        <button onClick="openModel('${blog._id.toString()}')" class="btnII">UPDATE</button>
        </td>
        </tr>
        
        `
    })
    
})
.catch(err => alert(err))
function deleteBlog(blogId)  {
    fetch(`http://localhost:4000/api/v1/blogs/${blogId}`,
    {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then((data) => {
        // functionalities of delete
        location.reload();

       

    })
    .catch((err) => {
        alert(err)
    });

}







const modelBox = document.getElementById("modelbox");
const form = document.getElementById("newform");
modelBox.style.display="none";

const openModel=async(blogId)=>
{
    modelBox.style.display="block";
    const response = await fetch(`http://localhost:4000/api/v1/blogs/${blogId}`);
    const blog=await response.json();
    console.log(blog.data._id)
    


    form.icon.value=blog.data.icon;
    form.body.value=blog.data.body;
    form.title.value=blog.data.title;
    form.id.value=blog.data._id;
    
    
}
const updateBlog=async()=>
{
    const form = document.getElementById("newform");
    const title = form.elements.title.value;
    const icon = form.elements.icon.value;
    const body = form.elements.body.value;
    const id = form.elements.id.value;
    try {
        const response = await fetch(`http://localhost:4000/api/v1/blogs/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              icon,
              title,
              body,
            }),
          });
        
    if (response.ok) {
        form.reset();
        alert("Your blog has been updated successfully");
      } else {
        const error = await response.json();
        alert(`Failed to update blog: ${error.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update blog. Please try again later.");
    }
}