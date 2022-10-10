import Image from "next/image";

import { useSession } from "next-auth/client";

import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { EmojiHappyIcon } from "@heroicons/react/outline";

const Publisher = () => {
  const [session] = useSession();

  const sendPost = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mt-6 p-2 bg-white text-gray-500 font-medium rounded-2xl shadow-md">
      <div className="p-4 space-x-4 flex items-center">
        <Image
          src={session.user.image}
          alt="User Profile"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
            className="h-12 px-5 flex-grow rounded-full bg-gray-100 focus:outline-none"
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="p-3 flex justify-evenly border-t">
        <div className="publisherIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="publisherIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="publisherIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
