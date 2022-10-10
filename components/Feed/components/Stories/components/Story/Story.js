import Image from "next/image";

const Story = ({ name, profile, status }) => {
  return (
    <div className="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 p-3 relative cursor-pointer overflow-x transition transform duration-200 ease-in hover:scale-105 hover:animate-pulse">
      <Image
        src={profile}
        alt="User Profile"
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        className="top-10 z-50 absolute opacity-0 lg:opacity-100 rounded-full"
      />
      <Image
        src={status}
        alt="User Status"
        layout="fill"
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      />
    </div>
  );
};

export default Story;
