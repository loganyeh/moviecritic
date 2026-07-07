import { Outlet } from "react-router-dom";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";
import FloatingNav from "../components/FloatingNav";

function MainLayout(){
    
    return(
        <>
            <DesktopHeader />

            {/*  */}
            <Outlet />

            <Footer />
            <FloatingNav />
        
        </>
    );
};

export default MainLayout;