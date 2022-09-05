const updatePost = async (event) => {
	event.preventDefault();

    const post = document.querySelector(".post")
    const postId = post.getAttribute("data-post");
    const title = document.querySelector("#post-title").value;
    const content = document.querySelector("#post-content").value;

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(
            'Failed to update a post.' 
        );
    }
};

const deletePost = async (event) => {
	event.preventDefault();

    const post = document.querySelector(".post")
    const postId = post.getAttribute("data-post");


    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(
            'Failed to delete a post.' 
        );
    }
};

document.querySelector("#update-post").addEventListener('click', updatePost);
document.querySelector("#delete-post").addEventListener('click', deletePost);