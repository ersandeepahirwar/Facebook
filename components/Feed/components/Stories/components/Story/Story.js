import Image from "next/image";

const Story = ({ name, profile, status }) => {
  return (
    <div className="overflow-x relative h-10 w-10 transform cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse sm:h-[60px] sm:w-[60px] md:h-20 md:w-20 lg:h-[120px] lg:w-[80px] lg:p-2">
      <Image
        src={profile}
        alt="User Profile"
        width={25}
        height={25}
        layout="fixed"
        objectFit="cover"
        className="absolute top-10 z-50 rounded-full opacity-0 lg:opacity-100"
      />
      <Image
        src={status}
        alt="User Status"
        layout="fill"
        className="rounded-full object-cover brightness-90 filter lg:rounded-3xl"
      />
    </div>
  );
};

export default Story;
