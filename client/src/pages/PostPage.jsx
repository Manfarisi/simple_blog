import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Swal from "sweetalert2";
import Header from "../Header";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch post details
        fetch(`http://localhost:4000/post/${id}`)
            .then((response) => response.json())
            .then((data) => setPostInfo(data));
    }, [id]);

    async function handleDelete() {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
            });

            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:4000/delete/${id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });

                if (response.ok) {
                    Swal.fire('Deleted!', 'Your post has been deleted.', 'success').then(() => {
                        navigate('/'); // Redirect after deletion
                    });
                } else {
                    Swal.fire('Failed!', 'There was an error deleting the post.', 'error');
                }
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            Swal.fire('Failed!', 'There was an error deleting the post.', 'error');
        }
    }

    if (!postInfo) return '';

    return (
        <div className="post-page">
            <Header />
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by @{postInfo.author.username}</div>
            {userInfo?.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link to={`/edit/${postInfo._id}`}>
                        <button className="edit-btn">Edit this post</button>
                    </Link>
                    <button className="delete-btn" onClick={handleDelete}>
                        Delete this post
                    </button>
                </div>
            )}
            <div className="image">
                <img
                    src={`http://localhost:4000/${postInfo.cover}`}
                    alt={postInfo.title}
                    style={{ marginBottom: '2rem' }}
                />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />

        </div>
    );
}
