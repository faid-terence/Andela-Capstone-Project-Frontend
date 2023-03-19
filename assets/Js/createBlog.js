const form = document.getElementById("create-blog-form");


// add event listerner to the form

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const icon = document.getElementById('icon').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const data = { icon, title, body };
    try {
      const response = await fetch('https://lazy-jade-barnacle-suit.cyclic.app/api/v1/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        Toastify({
            text: "Your blog has been added successfully",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
            stopOnFocus: true,
          }).showToast();
      }

    }
     catch (error) {
      Toastify({
        text: `Failed to add blog: ${error.message}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
        stopOnFocus: true,
      }).showToast();
    }
  });
  
  
  
  
  
  
  
  