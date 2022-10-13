import Image from "next/image";

import { SearchIcon } from "@heroicons/react/outline";

const Brand = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src="https://i.ibb.co/VmgnMxS/facebook.webp"
        alt="Facebook Logo"
        width={25}
        height={25}
        layout="fixed"
      />
      <div className="flex items-center bg-white border-[1px] rounded-full p-1 ml-2">
        <SearchIcon className="h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden lg:inline-flex border-none outline-none focus:outline-none bg-transparent placeholder-gray-500 text-[13px] ml-1"
        />
      </div>
    </div>
  );
};

export default Brand;
