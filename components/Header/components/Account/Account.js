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
    <div className="sm:space-x-2 flex items-center justify-end">
      <Image
        src={session.user.image}
        alt="User Profile"
        width={40}
        height={40}
        layout="fixed"
        className="cursor-pointer rounded-full"
        onClick={signOut}
      />
      <p className="pr-3 whitespace-nowrap">{session.user.name}</p>
      <ViewGridIcon className="icon" />
      <ChatIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  );
};

export default Account;
