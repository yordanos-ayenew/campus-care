import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <header>
                <h1>CampusCare</h1>
                <nav>
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/doctors">Doctors</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/appointments">Appointments</Link>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}
export default Layout;