import Image from "next/image";

const Profile = ({ name, image }) => {
  return (
    <div className="mb-2 p-2 space-x-3 flex items-center relative cursor-pointer rounded-xl hover:bg-gray-200">
      <Image
        src={image}
        alt="User Profile"
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover"
        className="rounded-full"
      />
      <p>{name}</p>
      <div className="w-3 h-3 rounded-full absolute bottom-2 left-7 bg-green-400"></div>
    </div>
  );
};

export default Profile;
