import PageContent from "./PageContent";
import Sidebar from "./Sidebar";


const MainLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <Sidebar />
            </div>

            <div className="col-span-9">
                <PageContent />
            </div>
        </div>
    );
};

export default MainLayout;