import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/carLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {

    const { user , logOut} = useContext(AuthContext)

    const links = <div className="lg:flex">
        <li><NavLink className={({ isActive }) => isActive ? "text-red-500 md:text-xl font-bold" : "md:text-xl"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-red-500 md:text-xl font-bold" : "md:text-xl"} to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-red-500 md:text-xl font-bold" : "md:text-xl"} to='/carts'>My Cart</NavLink></li>
    </div>

    return (
        <div className="navbar bg-[#FFF]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={logo} className='md:w-40 w-28 rounded-2xl' alt="" />
                    {/* <p className=" font-bold text-xl">Car Deal</p> */}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-4">
                {
                    user ?
                        <div>
                            <button onClick={logOut}>Logout</button>
                        </div>
                        :
                        <Link to='/login' className=' bg-base-200 py-3 md:text-xl rounded-lg px-8 text-orange-500 font-semibold'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;