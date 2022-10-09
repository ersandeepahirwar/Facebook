import Image from "next/image";

import { SearchIcon } from "@heroicons/react/outline";

const Brand = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://i.ibb.co/VmgnMxS/facebook.webp"
        alt="Facebook Logo"
        width={40}
        height={40}
        layout="fixed"
      />
      <div className="ml-2 p-2 flex items-center rounded-full bg-gray-100">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="ml-2 hidden md:inline-flex flex-shrink items-center outline-none bg-transparent placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default Brand;
