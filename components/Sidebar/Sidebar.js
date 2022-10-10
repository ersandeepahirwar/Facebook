import { useSession } from "next-auth/client";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import Row from "./components/Row/Row";

const Sidebar = () => {
  const [session, loading] = useSession();

  return (
    <div className="mt-5 p-2 max-w-[600px] xl:min-w-[300px]">
      <Row src={session.user.image} title={session.user.name} />
      <Row Icon={UserIcon} title="Friends" />
      <Row Icon={UserGroupIcon} title="Groups" />
      <Row Icon={ShoppingBagIcon} title="Marketplace" />
      <Row Icon={DesktopComputerIcon} title="Watch" />
      <Row Icon={CalendarIcon} title="Events" />
      <Row Icon={ClockIcon} title="Memories" />
      <Row Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
