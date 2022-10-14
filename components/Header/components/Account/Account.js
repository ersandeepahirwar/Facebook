import Image from "next/image";

import { signOut, useSession } from "next-auth/client";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

const Account = () => {
  const [session] = useSession();

  return (
    <div className="flex items-center lg:space-x-2">
      <Image
        src={session.user.image}
        alt="User Profile"
        width={25}
        height={25}
        layout="fixed"
        className="cursor-pointer rounded-full"
        onClick={signOut}
      />
      <p className="hidden whitespace-nowrap text-[13px] text-gray-700 lg:inline-flex">
        {session.user.name}
      </p>
      <ViewGridIcon className="hidden h-6 w-6 cursor-pointer rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-200 xl:inline-flex" />
      <ChatIcon className="hidden h-6 w-6 cursor-pointer rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-200 xl:inline-flex" />
      <BellIcon className="hidden h-6 w-6 cursor-pointer rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-200 xl:inline-flex" />
      <ChevronDownIcon className="hidden h-6 w-6 cursor-pointer rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-200 xl:inline-flex" />
    </div>
  );
};

export default Account;
