import { Info } from "lucide-react";
import BackgroundPattern from "/hero_pattern.png"

const PageContent = () => {
  return (
    <div className="text-center relative bg-[#2B2B2B] rounded-2xl">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={BackgroundPattern}
        alt="background pattern"
      />

      <div className="flex flex-col items-center justify-center">
        {/* info */}
        <div className="flex items-center gap-3 mt-10">
          <Info className="text-[#FB9937]" />
          <p className="text-sm">
            The web version does not display local chats. To access all features,
            please
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
            <p className="text-[54px] font-medium mb-6">Add Files to Cloud Chat</p>
            <p className="text-sm">Your files will not be stored on our servers and no AI models will be trained.</p>
            <p className="text-sm font-semibold text-[#F37F0C]">Supported File Types: .docx, .pdf, .epub, and many text filetypes</p>
          </div>

          {/* cards */}
          <div></div>

          {/* buttons */}

        </div>
      </div>

    </div>
  );
};

export default PageContent;
