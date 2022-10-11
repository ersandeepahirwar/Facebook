import Post from "./components/Post/Post";

import { useCollection } from "react-firebase-hooks/firestore";

import { collection } from "firebase/firestore";
import { database } from "../../../../firebase";

const Posts = () => {
  const [posts, loading, error] = useCollection(collection(database, "posts"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div>
      {!loading &&
        posts &&
        posts.docs.map((post) => (
          <Post
            key={post.id}
            name={post.data().name}
            email={post.data().email}
            image={post.data().image}
            text={post.data().text}
            thumbnail={post.data().thumbnail}
            timestamp={post.data().timestamp}
          />
        ))}
    </div>
  );
};

export default Posts;
