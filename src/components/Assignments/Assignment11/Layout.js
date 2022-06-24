import { Outlet, Link } from 'react-router-dom';
function Layout() {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={'/t12a01/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/t12a01/addmovie'} className="nav-link">Add Movie</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
     );
}

export default Layout;