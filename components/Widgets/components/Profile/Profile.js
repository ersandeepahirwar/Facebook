import Image from "next/image";

const Profile = ({ name, image }) => {
  return (
    <div className="relative mb-1 flex cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-gray-200 xl:justify-start xl:space-x-2">
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
      <div className="absolute bottom-1 left-4 h-[7px] w-[7px] rounded-full bg-green-400 xl:bottom-[4px] xl:left-[-2px]"></div>
    </div>
  );
};

export default Profile;
