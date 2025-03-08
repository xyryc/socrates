import { PanelLeftClose, Plus, Search, Settings } from "lucide-react";
import SocratesLogo from "/socratesLogo.png";
import FlowIcon from "/flowIcon.png";
import Avatar from "/avatar.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-[95vh] p-3">
      {/* header */}
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src={SocratesLogo} alt="Socrates logo" />
            <p className="text-xl">socrates</p>
          </div>

          <div className="text-[#868686] flex items-center gap-2">
            <Search className="size-5" />
            <PanelLeftClose className="size-5" />
          </div>
        </div>

        {/* create chat buttons */}
        <div className="mt-8">
          <button className="cursor-pointer font-semibold w-full flex items-center gap-1 justify-center py-2.5 border border-white rounded-full mb-3">
            <Plus /> Add Folder
          </button>
          <button className="cursor-pointer font-semibold w-full flex items-center gap-1 justify-center py-2.5 rounded-full bg-[#FFFFFF26]">
            <Plus /> Create Chat
          </button>
        </div>
      </div>

      {/* footer */}
      <div>
        {/* plan */}
        <div className="bg-[#363636] p-4 rounded-[12px]">
          <p className="font-semibold">Upgrade to Premium</p>
          <p className="text-xs text-[#868686]">
            Make the most of all features!
          </p>

          <button className="cursor-pointer font-semibold text-sm border border-[#F37F0C] py-2.5 w-full rounded-full mt-3">
            Upgrade plan
          </button>
        </div>

        {/* template */}
        <div className="flex items-center gap-2 my-3 cursor-pointer">
          <div className="size-7 rounded-full bg-[#363636] w-fit h-fit">
            <img className="p-2" src={FlowIcon} alt="FlowIcon" />
          </div>
          <p className="font-medium text-sm">Flow AI Templates</p>
        </div>

        {/* profile */}
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 cursor-pointer">
            <img
              className="size-9 rounded-full object-cover"
              src={Avatar}
              alt="user"
            />
            <p className="font-medium text-sm">Jessica Mills</p>
          </span>

          <Settings className="text-[#868686] size-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
