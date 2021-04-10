const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#comment-name').value.trim();
    const body = document.querySelector('#comment-body').value.trim();
  
    if (name && body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ name, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
       
      } else {
        alert('Failed to create post');
      }
    }
  };




// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/post/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete post');
//       }
//     }
//   };

  document
  .querySelector('#comment-button')
  .addEventListener('click', newFormHandler);