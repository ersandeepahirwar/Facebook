import Stories from "./components/Stories/Stories";

const Feed = () => {
  return (
    <div className="mr-4 xl:mr-40 pt-6 pb-44 h-screen flex-grow overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        {/* Publisher */}
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
