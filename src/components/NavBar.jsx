import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/carLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {

    const { user, logOut , darkMode, setDarkMode} = useContext(AuthContext)

    const [showProfile, setShowProfile] = useState(false);

    const links = <div className="lg:flex">
        <li><NavLink className={({ isActive }) => isActive ? "text-red-500 md:text-xl font-bold" : "md:text-xl"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-red-500 md:text-xl font-bold" : "md:text-xl"} to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-red-500 md:text-xl font-bold" : "md:text-xl"} to='/carts'>My Cart</NavLink></li>
    </div>

    return (
        <div className={`navbar py-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={logo} className=' md:w-24 w-20 rounded-2xl' alt="" />
                    {/* <p className=" font-bold text-xl">Car Deal</p> */}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-4">
                <div>
                    {
                        user ?
                            <div className='relative flex items-center gap-3'>

                                <button onClick={() => setShowProfile(!showProfile)}>
                                    {
                                        user?.photoURL ?
                                            <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" /> :
                                            <FaUserCircle className='text-4xl'></FaUserCircle>
                                    }
                                </button>
                                {/* top-9 right-0 */}
                                <div className={`text-end bg-gray-300 z-30 p-3 transition rounded-lg absolute w-40 ${showProfile ? 'translate-y-20 -translate-x-32 ' : '-translate-y-36 -translate-x-40'}`}>
                                    <div>
                                        <h5 className='text-lg text-black font-semibold mb-2'>{user?.displayName}</h5>
                                    </div>
                                    <button className='btn bg-gray-500 ' onClick={() => {
                                        logOut();
                                        setShowProfile(!showProfile)
                                    }}>Log Out</button>
                                </div>
                            </div>
                            :
                            <Link to='/login' className=' bg-base-100 py-3 md:text-xl rounded-lg px-8 text-orange-500 font-semibold'>Login</Link>
                    }
                </div>
                
            </div>
            <input type="checkbox" className="toggle toggle-secondary" onClick={() => setDarkMode(!darkMode)}  />
        </div>
    );
};

export default NavBar;