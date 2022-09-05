const createPost = async (event) => {
	event.preventDefault();

    const title = document.querySelector("#post-title").value;
    const content = document.querySelector("#post-content").value;

    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(
            'Failed to create a post.'
        );
    }
};

const showNewPost = async (event) => {
    event.preventDefault();

    const newPostDiv = document.querySelector('.new-post');
    const postListDiv = document.querySelector('.post-list');

    newPostDiv.classList.remove('d-none');
    postListDiv.classList.add('d-none');

    event.target.classList.add('d-none');
};

document.querySelector("#create-post").addEventListener('click', createPost);
document.querySelector("#show-new-post").addEventListener('click', showNewPost);