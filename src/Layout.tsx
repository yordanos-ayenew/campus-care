import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <header className="site-header">
                <div className="header-content">
                    <h1 className="logo">CampusCare</h1>
                    <nav className="main-nav">
                        <Link to="/">Home</Link>
                        <Link to="/doctors">Doctors</Link>
                        <Link to="/appointments">Appointments</Link>
                    </nav>
                </div>
            </header>
            <main className="page-content">
                <Outlet />
            </main>
        </>
    )
}
export default Layout;