import PageContent from "./PageContent";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="font-onest flex gap-3 p-4">
      {/* Sidebar */}
      <div className="hidden lg:block fixed">
        <Sidebar />
      </div>

      {/* Page Content */}
      <div className="w-full lg:pl-72 rounded-2xl">
        <PageContent />
      </div>
    </div>
  );
};

export default MainLayout;
