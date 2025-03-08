import { PanelLeftClose, Plus, Search } from "lucide-react";
import SocratesLogo from "/socratesLogo.png";

const Sidebar = () => {
  return (
    <div className="border border-black flex flex-col justify-between h-[95vh] p-3">
      {/* top */}
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

        {/* create chat button */}
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
      <div>footer</div>
    </div>
  );
};

export default Sidebar;
