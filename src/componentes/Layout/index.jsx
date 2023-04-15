import NavBar from "../NavBar";
import { Outlet as Page } from "react-router-dom";

function Layout(){
    return(
        <main className="layout-container">
            <NavBar/>
            <Page/>
        </main>
    )
}

export default Layout;