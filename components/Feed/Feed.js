import Stories from "./components/Stories/Stories";
import Publisher from "./components/Publisher/Publisher";
import Posts from "./components/Posts/Posts";

const Feed = ({ posts }) => {
  return (
    <div className="h-screen flex-grow overflow-y-auto scrollbar-hide pt-3 pb-44">
      <div className="">
        <Stories />
        <Publisher />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
