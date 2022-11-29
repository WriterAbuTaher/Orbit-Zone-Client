import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import useAdmin from '../Hooks/useAdmin';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <>
            <Navbar></Navbar>
            <div>
                <aside
                    className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
                >
                    <div>
                        <div className="-mx-6 px-6 py-4">
                            <Link to='/home' title="home">
                                <h1 className='text-3xl font-semibold'>Orbit Zone</h1>
                            </Link>
                        </div>

                        <div className="mt-8 text-center">
                            {
                                user?.photoURL ?
                                    < img
                                        src={user.photoURL}
                                        alt=""
                                        className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
                                    />
                                    :
                                    < img
                                        src="https://img.icons8.com/bubbles/2x/user.png"
                                        alt=""
                                        className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
                                    />

                            }
                            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">{user?.displayName}</h5>
                            <span className="hidden text-gray-400 lg:block">{user.email}</span>
                            <span className="hidden text-gray-400 lg:block">{isAdmin ? 'Admin' : 'User'}</span>
                        </div>

                        <ul className="mt-8 space-y-2 tracking-wide">

                            {
                                isAdmin ?
                                    <li>
                                        <Link to='/dashboard/allusers'
                                            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                                                    fillRule="evenodd"
                                                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                                    clipRule="evenodd"
                                                />
                                                <path
                                                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                                />
                                            </svg>
                                            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">All Users</span>
                                        </Link>
                                    </li>
                                    :
                                    <>
                                        <li>
                                            <Link to='/dashboard/addproduct'
                                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                                        fillRule="evenodd"
                                                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                                                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                                                    />
                                                </svg>
                                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Add Products</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/dashboard/myorders'
                                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                                                        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                                    />
                                                    <path
                                                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                                                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                                    />
                                                </svg>
                                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">My Orders</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/dashboard/myproducts'
                                                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                                        fillRule="evenodd"
                                                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                                        clipRule="evenodd"
                                                    />
                                                    <path
                                                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                                                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                                                    />
                                                </svg>
                                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">My Products</span>
                                            </Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                </aside>
                <div className="ml-auto py-20 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                    <div className="flex items-center justify-center">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoardLayout;