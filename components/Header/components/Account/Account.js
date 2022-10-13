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
        className="rounded-full cursor-pointer"
        onClick={signOut}
      />
      <p className="hidden lg:inline-flex whitespace-nowrap text-[13px] text-gray-700">
        {session.user.name}
      </p>
      <ViewGridIcon className="hidden xl:inline-flex w-6 h-6 text-gray-500 bg-gray-100 rounded-full p-1 hover:bg-gray-200 cursor-pointer" />
      <ChatIcon className="hidden xl:inline-flex w-6 h-6 text-gray-500 bg-gray-100 rounded-full p-1 hover:bg-gray-200 cursor-pointer" />
      <BellIcon className="hidden xl:inline-flex w-6 h-6 text-gray-500 bg-gray-100 rounded-full p-1 hover:bg-gray-200 cursor-pointer" />
      <ChevronDownIcon className="hidden xl:inline-flex w-6 h-6 text-gray-500 bg-gray-100 rounded-full p-1 hover:bg-gray-200 cursor-pointer" />
    </div>
  );
};

export default Account;
