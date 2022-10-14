import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import Profile from "./components/Profile/Profile";

const profiles = [
  {
    id: 1714510031,
    name: "MS Dhoni",
    image: "https://i.ibb.co/8Xjh6w3/MS-Dhoni.webp",
  },
  {
    id: 1714510032,
    name: "Ratan Tata",
    image: "https://i.ibb.co/Tk3K7Jv/Ratan-Tata.jpg",
  },
  {
    id: 1714510033,
    name: "Bill Gates",
    image: "https://i.ibb.co/0Y0S1jt/Bill-Gates.jpg",
  },
  {
    id: 1714510034,
    name: "Rishabh Pant",
    image: "https://i.ibb.co/1d78Bmh/Rishabh-Pant.webp",
  },
  {
    id: 1714510035,
    name: "Elon Musk",
    image: "https://i.ibb.co/dgc559s/Elon-Musk.jpg",
  },
  {
    id: 1714510036,
    name: "Virat Kohli",
    image: "https://i.ibb.co/3st2wrd/Virat-Kohli.webp",
  },
  {
    id: 1714510037,
    name: "Harry Potter",
    image: "https://i.ibb.co/f9hXkf9/Harry-Potter.webp",
  },
];

const Widgets = () => {
  return (
    <div className="hidden flex-col p-3 sm:flex xl:w-[200px] xl:space-y-2">
      <div className="flex items-center justify-between text-gray-500 xl:mb-2">
        <p className="text-[14px]">Contacts</p>
        <div className="flex space-x-2">
          <VideoCameraIcon className="hidden h-5 xl:inline-flex" />
          <SearchIcon className="hidden h-5 xl:inline-flex" />
          <DotsHorizontalIcon className="hidden h-5 xl:inline-flex" />
        </div>
      </div>
      {profiles.map((profile) => (
        <Profile key={profile.id} name={profile.name} image={profile.image} />
      ))}
    </div>
  );
};

export default Widgets;
