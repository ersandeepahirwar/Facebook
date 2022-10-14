import Post from "./components/Post/Post";

import { useCollection } from "react-firebase-hooks/firestore";

import { collection } from "firebase/firestore";
import { database } from "../../../../firebase";

const Posts = ({ posts }) => {
  const [realtimePosts, loading, error] = useCollection(
    collection(database, "posts"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div className="mx-auto max-w-[300px] sm:max-w-[450px]">
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              email={post.data().email}
              image={post.data().image}
              text={post.data().text}
              thumbnail={post.data().thumbnail}
              timestamp={post.data().timestamp}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              email={post.email}
              image={post.image}
              text={post.text}
              thumbnail={post.thumbnail}
              timestamp={post.timestamp}
            />
          ))}
    </div>
  );
};

export default Posts;
