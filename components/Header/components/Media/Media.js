import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";

import Icon from "./components/Icon/Icon";

const Media = () => {
  return (
    <div className="flex flex-grow justify-center">
      <div className="flex space-x-6 md:space-x-2">
        <Icon active Source={HomeIcon} />
        <Icon Source={FlagIcon} />
        <Icon Source={PlayIcon} />
        <Icon Source={ShoppingCartIcon} />
        <Icon Source={UserGroupIcon} />
      </div>
    </div>
  );
};

export default Media;
