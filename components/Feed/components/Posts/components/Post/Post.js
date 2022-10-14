import Image from "next/image";

import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, email, image, text, thumbnail, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-2xl bg-white p-3 shadow-sm">
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
        <p className="pt-3 text-xs sm:text-sm">{text}</p>
      </div>
      {thumbnail && (
        <div className="relative h-36 bg-white sm:h-48">
          <Image
            src={thumbnail}
            alt="Post Thumbnail"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      )}
      <div className="flex items-center justify-between rounded-b-2xl border-t bg-white text-gray-400 shadow-md">
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-bl-2xl p-2 hover:bg-gray-100 sm:space-x-2">
          <ThumbUpIcon className="h-4 text-blue-500" />
          <p className="hidden sm:inline-flex sm:text-xs">Like</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center p-2 hover:bg-gray-100 sm:space-x-2">
          <ChatAltIcon className="h-4" />
          <p className="hidden sm:inline-flex sm:text-xs">Comment</p>
        </div>
        <div className="flex flex-grow cursor-pointer items-center justify-center rounded-br-2xl p-2 hover:bg-gray-100 sm:space-x-2">
          <ShareIcon className="h-4" />
          <p className="hidden sm:inline-flex sm:text-xs">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
