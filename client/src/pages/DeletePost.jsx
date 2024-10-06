import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function DeletePost() {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/delete/' + id)
            .then(response => response.json())
            .then(postInfo => {
            });
    }, [id]);

    async function deletePost() {
        const response = await fetch(`http://localhost:4000/delete/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        } else {
            console.error('Failed to delete the post');
        }
    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h2>Are you sure you want to delete this post?</h2>
            <button onClick={deletePost} className="post">Delete Post</button>
        </div>
    );
}
