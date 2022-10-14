import Image from "next/image";

const Row = ({ src, Icon, title }) => {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-xl p-2 hover:bg-gray-200 md:justify-start md:space-x-2">
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
      {Icon && <Icon className="h-5 w-5 text-blue-500" />}
      <p className="hidden md:inline-flex md:text-[13px]">{title}</p>
    </div>
  );
};

export default Row;
