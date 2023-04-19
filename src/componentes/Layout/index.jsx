import NavBar from "../NavBar";
import AppFooter from "../Footer";
import { Outlet as Page } from "react-router-dom";

function Layout(){
    return(
        <main className="layout-container">
            <NavBar/>
            <Page/>
            <AppFooter/>
        </main>
    )
}

export default Layout;