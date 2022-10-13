import Image from "next/image";

const Row = ({ src, Icon, title }) => {
  return (
    <div className="p-2 flex items-center justify-center md:justify-start hover:bg-gray-200 rounded-xl cursor-pointer md:space-x-2">
      {src && (
        <Image
          src={src}
          alt="User Profile"
          width={25}
          height={25}
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="w-5 h-5 text-blue-500" />}
      <p className="hidden md:inline-flex md:text-[13px]">{title}</p>
    </div>
  );
};

export default Row;
