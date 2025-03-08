import PageContent from "./PageContent";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="font-onest grid grid-cols-12 gap-3 p-4">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10">
        <PageContent />
      </div>
    </div>
  );
};

export default MainLayout;
