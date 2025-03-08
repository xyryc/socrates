import PageContent from "./PageContent";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="font-onest flex gap-3 p-4">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="w-full rounded-2xl">
        <PageContent />
      </div>
    </div>
  );
};

export default MainLayout;
