import Image from "next/image";

const Profile = ({ name, image }) => {
  return (
    <div className="flex justify-center xl:justify-start items-center rounded-xl hover:bg-gray-200 cursor-pointer relative p-1 mb-1 xl:space-x-2">
      <Image
        src={image}
        alt="User Profile"
        width={30}
        height={30}
        layout="fixed"
        objectFit="cover"
        objectPosition="top"
        className="rounded-full"
      />
      <p className="hidden xl:inline-flex xl:text-[13px]">{name}</p>
      <div className="absolute w-[7px] h-[7px] bg-green-400 rounded-full bottom-1 left-4 xl:bottom-[4px] xl:left-[-2px]"></div>
    </div>
  );
};

export default Profile;
