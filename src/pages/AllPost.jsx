import React, { useEffect, useState } from "react";
import appwriteServie from "../appwrite/appwrite.config";
import { Container, PostCard } from "../component";
function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteServie.getAllPost([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);
  return (
    <div w-full py-8>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
