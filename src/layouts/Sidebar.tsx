import { useState } from "react";
import {
  Plus,
  Settings,
  PanelRightClose,
  Search,
  PanelLeftClose,
} from "lucide-react";
import SocratesLogo from "/socratesLogo.png";
import FlowIcon from "/flowIcon.png";
import Avatar from "/avatar.png";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-[94vh] p-3 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
        isCollapsed ? "w-[5vw]" : "w-[20vw]"
      }`}
    >
      {/* Header */}
      <div>
        {/* logo brand name */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={SocratesLogo}
              alt="Socrates logo"
              className={`transition-all duration-300 ${
                isCollapsed ? "hidden" : "block"
              }`}
            />
            {!isCollapsed && <p className="text-xl">socrates</p>}
          </div>

          <div className="text-[#868686] flex items-center gap-2">
            {!isCollapsed && <Search className="size-5" />}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              title={`${isCollapsed ? "Expand" : "Collapse"}`}
            >
              {isCollapsed ? (
                <PanelRightClose className="size-5" />
              ) : (
                <PanelLeftClose className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Create chat buttons */}
        <div className="mt-8">
          <button
            title="Add Folder"
            className="cursor-pointer font-semibold w-full flex items-center gap-1 justify-center py-2.5 border border-white/10 rounded-full mb-3"
          >
            <Plus className="size-5" /> {!isCollapsed && "Add Folder"}
          </button>
          <button
            title="Create Chat"
            className="cursor-pointer font-semibold w-full flex items-center gap-1 justify-center py-2.5 rounded-full bg-[#FFFFFF26]"
          >
            <Plus className="size-5" /> {!isCollapsed && "Create Chat"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div>
        {/* Plan */}
        {!isCollapsed && (
          <div className="bg-[#363636] p-4 rounded-[12px]">
            <p className="font-semibold">Upgrade to Premium</p>
            <p className="text-xs text-[#868686]">
              Make the most of all features!
            </p>

            <button className="cursor-pointer font-semibold text-sm border border-[#F37F0C] py-2.5 w-full rounded-full mt-3">
              Upgrade plan
            </button>
          </div>
        )}

        {/* Template */}
        {!isCollapsed && (
          <div className="flex items-center gap-2 my-3 cursor-pointer">
            <div className="size-7 rounded-full bg-[#363636] flex items-center justify-center">
              <img className="p-2" src={FlowIcon} alt="FlowIcon" />
            </div>

            <p className="font-medium text-sm">Flow AI Templates</p>
          </div>
        )}

        {/* Profile */}
        <div className="flex items-center justify-between gap-4">
          <span
            title="Profile"
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              className="size-9 rounded-full object-cover"
              src={Avatar}
              alt="user"
            />
            {!isCollapsed && (
              <p className="font-medium text-sm">Jessica Mills</p>
            )}
          </span>

          {!isCollapsed && (
            <Settings className="text-[#868686] size-6 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
