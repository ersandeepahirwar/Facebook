import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";

import Icon from "./components/Icon/Icon";

const Media = () => {
  return (
    <div className="hidden items-center sm:inline-flex">
      <div className="flex">
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
