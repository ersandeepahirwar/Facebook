import Stories from "./components/Stories/Stories";
import Publisher from "./components/Publisher/Publisher";
import Posts from "./components/Posts/Posts";

const Feed = ({ posts }) => {
  return (
    <div className="mr-4 xl:mr-40 pt-6 pb-44 h-screen flex-grow overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <Publisher />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
