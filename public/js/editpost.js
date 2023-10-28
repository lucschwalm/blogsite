const newCommentHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#comment-title').value.trim();
    const description = document.querySelector('#comment-description').value.trim();
    const submitbtn = document.querySelector('#submitbtn');
    const post_id = submitbtn.getAttribute('data-id');
    console.log(post_id);

    if (title && description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create comment');
        }
    }
}

document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);