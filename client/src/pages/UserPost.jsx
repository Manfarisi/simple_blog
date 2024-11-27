import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../post";
import Header from "../Header";
import { Link } from "react-router-dom";


export default function UserPosts() {
  const { id } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User ID from URL:", id); // Debug log
    if (!id) return;

    fetch(`http://localhost:4000/user/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((posts) => {
        console.log("Fetched posts:", posts); // Debug log
        setUserPosts(posts);
      })
      .catch((error) => {
        console.error("Error fetching user posts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : userPosts.length > 0 ? (
          userPosts.map((post) => <Post key={post._id} {...post} />)
        ) : (
          <p>No posts found for this user.</p>
        )}
      </div>
    </>
  );
}
