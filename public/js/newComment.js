const sendComment = async (event) => {
	event.preventDefault();

    const post = document.querySelector(".post")
    const postId = post.getAttribute("data-post");
    const userComment = document.querySelector("#new-comment").value;

    const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({
            post_id: postId,
            user_comment: userComment
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(
            'Failed to send a comment.'
        );
    }
};

document.querySelector("#send").addEventListener('click', sendComment);