import Image from "next/image";

import { SearchIcon } from "@heroicons/react/outline";

const Brand = () => {
  return (
    <div className="flex cursor-pointer items-center">
      <Image
        src="https://i.ibb.co/VmgnMxS/facebook.webp"
        alt="Facebook Logo"
        width={25}
        height={25}
        layout="fixed"
      />
      <div className="ml-2 flex items-center rounded-full border-[1px] bg-white p-1">
        <SearchIcon className="h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="ml-1 hidden border-none bg-transparent text-[13px] placeholder-gray-500 outline-none focus:outline-none lg:inline-flex"
        />
      </div>
    </div>
  );
};

export default Brand;
