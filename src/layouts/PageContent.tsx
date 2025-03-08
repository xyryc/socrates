import { Info, Sparkles } from "lucide-react";
import BackgroundPattern from "/hero_pattern.png";
import DragNDropIcon from "/dragndrop.png";
import UrlIcon from "/url.png";
import DropBoxIcon from "/dropbox.png";
import ToolTipIcon from "/Tooltip.png";
import DriveIcon from "/drive.png";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

const PageContent = () => {
  return (
    <div className="text-center relative bg-[#2B2B2B] rounded-2xl z-10">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={BackgroundPattern}
        alt="background pattern"
      />

      <div className="flex flex-col items-center justify-center h-full">
        {/* info */}
        <div className="flex items-center gap-3 mt-10 bg-[#242424] pl-4 pr-3 py-2 rounded-full">
          <Info className="text-[#FB9937]" />
          <p className="text-sm">
            The web version does not display local chats. To access all
            features, please
            <span className="text-[#FB9937] font-semibold">
              {" "}
              install the app.
            </span>
          </p>
        </div>

        {/* main content */}
        <div className="my-20">
          {/* add files */}
          <div>
            <p className="text-[54px] font-medium mb-6">
              Add Files to Cloud Chat
            </p>
            <p className="text-sm">
              Your files will not be stored on our servers and no AI models will
              be trained.
            </p>
            <p className="text-sm font-semibold text-[#F37F0C]">
              Supported File Types: .docx, .pdf, .epub, and many text filetypes
            </p>
          </div>

          {/* cards */}
          <div className="max-w-[820px] py-[60px] grid grid-cols-2 gap-2 text-left">
            {/* drag and drop card */}
            <div className="px-6 py-[27px] flex items-center gap-1.5 bg-[#242424] rounded-[20px]">
              <img src={DragNDropIcon} alt="drag and drop icon" />

              <p className="text-lg font-semibold">
                Drag & drop local files here, or click to select
              </p>
            </div>

            {/* add url card */}
            <div className="px-6 py-[27px] flex items-center gap-1.5 bg-[#242424] rounded-[20px]">
              <img src={UrlIcon} alt="drag and drop icon" />

              <div>
                <p className="text-lg font-semibold mb-2">
                  Enter in a public URL:
                </p>
                <div className="relative w-full max-w-md">
                  <Input
                    className="bg-[#353535] text-[#7E7C78] rounded-full py-5 pr-16 w-full text-sm"
                    placeholder="https://example.com/file.pdf"
                  />
                  <Button className="cursor-pointer absolute top-1/2 right-1 -translate-y-1/2 bg-[#ffffff27] hover:bg-neutral-500 text-white rounded-full">
                    Add
                  </Button>
                </div>
              </div>
            </div>

            {/* dropbox card */}
            <div className="px-6 py-[27px] flex items-center gap-1.5 bg-[#242424] rounded-[20px]">
              <img src={DropBoxIcon} alt="drag and drop icon" />

              <p className="text-lg font-semibold">
                Drag & drop local files here, or click to select
              </p>
            </div>

            {/* google drive card */}
            <div className="px-6 py-[27px] flex items-center gap-1.5 bg-[#242424] rounded-[20px]">
              <img src={DriveIcon} alt="drag and drop icon" />

              <p className="text-lg font-semibold">
                Drag & drop local files here, or click to select
              </p>
            </div>
          </div>

          {/* bottom */}
          <div className="flex items-center justify-center gap-2">
            {/* buttons */}
            <div className="flex justify-center items-center gap-4 font-semibold">
              <button className="cursor-pointer hover:bg-[#FFBF00] border border-[#FB9937] text-white px-24 py-[19px] rounded-full">
                Start
              </button>
              <span>or</span>
              <button className="cursor-pointer py-[19px] px-[22px] flex items-center gap-2.5 bg-gradient-to-b from-[#FFBF00] to-[#FB9937] rounded-full">
                <Sparkles size={16} />
                Start with Deep Dive
              </button>
            </div>

            {/* tooltip */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img src={ToolTipIcon} alt="Tool Tip Icon" />
                </TooltipTrigger>
                <TooltipContent
                  align="start"
                  side="right"
                  className="bg-[#1E1E1E] text-xs text-white max-w-52 rounded-[20px] p-3"
                >
                  <p>
                    Deep Dive processes documents section by section for
                    "unlimited" context, enabling complete answers. Run once per
                    chat to unlock Table AI and Prompt Loops
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
