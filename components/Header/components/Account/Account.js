import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

const Account = () => {
  return (
    <div className="sm:space-x-2 flex items-center justify-end">
      {/* Profile Pic */}
      <p className="pr-3 whitespace-nowrap">Codey Sandeep</p>
      <ViewGridIcon className="icon" />
      <ChatIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  );
};

export default Account;
