import Image from "next/image";

const Row = ({ src, Icon, title }) => {
  return (
    <div className="p-4 space-x-2 flex items-center hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          src={src}
          alt="User Profile"
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="w-8 h-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default Row;
