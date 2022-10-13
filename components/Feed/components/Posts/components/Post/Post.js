import Image from "next/image";

import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, email, image, text, thumbnail, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-t-2xl shadow-sm p-3 mt-5">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            alt="User Profile"
            width={25}
            height={25}
            className="rounded-full"
          />
          <div>
            <p className="text-[13px]">{name}</p>
            {timestamp ? (
              <p className="text-[10px] text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-[10px] text-gray-400">Loading...</p>
            )}
          </div>
        </div>
        <p className="text-xs sm:text-sm pt-3">{text}</p>
      </div>
      {thumbnail && (
        <div className="relative h-36 sm:h-48 bg-white">
          <Image
            src={thumbnail}
            alt="Post Thumbnail"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      )}
      <div className="bg-white text-gray-400 flex justify-between items-center rounded-b-2xl shadow-md border-t">
        <div className="flex flex-grow items-center justify-center cursor-pointer hover:bg-gray-100 p-2 rounded-bl-2xl sm:space-x-2">
          <ThumbUpIcon className="h-4 text-blue-500" />
          <p className="hidden sm:inline-flex sm:text-xs">Like</p>
        </div>
        <div className="flex flex-grow items-center justify-center cursor-pointer hover:bg-gray-100 p-2 sm:space-x-2">
          <ChatAltIcon className="h-4" />
          <p className="hidden sm:inline-flex sm:text-xs">Comment</p>
        </div>
        <div className="flex flex-grow items-center justify-center cursor-pointer hover:bg-gray-100 p-2 rounded-br-2xl sm:space-x-2">
          <ShareIcon className="h-4" />
          <p className="hidden sm:inline-flex sm:text-xs">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
