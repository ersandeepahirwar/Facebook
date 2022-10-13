import Image from "next/image";

const Story = ({ name, profile, status }) => {
  return (
    <div className="relative w-10 h-10 sm:w-[60px] sm:h-[60px] md:w-20 md:h-20 lg:w-[80px] lg:h-[120px] cursor-pointer overflow-x transition transform duration-200 ease-in hover:scale-105 hover:animate-pulse lg:p-2">
      <Image
        src={profile}
        alt="User Profile"
        width={25}
        height={25}
        layout="fixed"
        objectFit="cover"
        className="opacity-0 lg:opacity-100 rounded-full absolute top-10 z-50"
      />
      <Image
        src={status}
        alt="User Status"
        layout="fill"
        className="object-cover rounded-full filter brightness-90 lg:rounded-3xl"
      />
    </div>
  );
};

export default Story;
